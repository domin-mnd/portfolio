import type { FunctionComponent, ReactElement } from "react";
import { Badge, Card, Group, SimpleGrid, Text } from "@mantine/core";
import { Project, projects as projectStack } from "./config";
import { useStyles } from "./styles";

/**
 * A grid of works cards taken from config
 * @param {Project[]} projects An array of projects to be mapped, optional
 * @returns {ReactElement} A grid of works cards
 */
export const Works: FunctionComponent<{
  projects?: Project[];
}> = ({ projects = projectStack }): ReactElement => {
  const { classes } = useStyles();

  return (
    <SimpleGrid cols={1}>
      {projects.map((project) => (
        <Card
          key={project.title}
          className={classes.card}
          // Convert polymorphic component to anchor
          component="a"
          href={project.url}
          // Open in new tab
          target="_blank"
        >
          <div
            // A banner image
            className={classes.image}
            // Set the image as a background using static nextjs module import
            style={{ backgroundImage: `url(${project.banner.src})` }}
          />
          <div
            // A shadow from the below to make the text more readable
            className={classes.overlay}
          />
          <div
            // A container for the content
            // Which sticks to the bottom of the card
            className={classes.content}
          >
            <div>
              <Text size="lg" className={classes.title} weight={500}>
                {project.title}
              </Text>

              <Text size="sm" className={classes.author}>
                {project.description}
              </Text>
              <Group spacing={5} my="xs">
                {project.stack.map((stack) => (
                  <Badge
                    key={stack.name}
                    color={stack.color}
                    variant="filled"
                    // Make badge darker without affecting colors
                    opacity={0.8}
                    radius="xs"
                    size="sm"
                  >
                    {stack.name}
                  </Badge>
                ))}
              </Group>
            </div>
          </div>
        </Card>
      ))}
    </SimpleGrid>
  );
};
