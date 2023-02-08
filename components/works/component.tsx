import type { FunctionComponent, ReactElement } from 'react';
import { Badge, Card, Group, SimpleGrid, Text } from '@mantine/core';
import { projects as projectStack } from './config';
import { useStyles } from './styles';
import { Trans, useTranslation } from 'next-i18next';

/**
 * A grid of works cards taken from config
 * @param {Project[]} projects An array of projects to be mapped, optional
 * @returns {ReactElement} A grid of works cards
 */
export const Works: FunctionComponent<WorksProps> = ({
  projects = projectStack,
  filter,
}): ReactElement => {
  const { classes } = useStyles();
  const { t } = useTranslation('works');

  // Filter works by their stack if filter is provided
  const filteredProjects = filter
    ? projects.filter((project) => project.stack.some((stack) => stack.name === filter))
    : projects;

  return (
    <SimpleGrid cols={1}>
      {filteredProjects.map((project) => (
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
                <Trans i18nKey={"works." + project.title + ".title"} t={t}>
                  {project.title}
                </Trans>
              </Text>

              <Text size="sm" className={classes.description}>
                <Trans i18nKey={"works." + project.title + ".description"} t={t}>
                  {project.description}
                </Trans>
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
                    <Trans i18nKey={"works." + project.title + ".stack." + stack.name} t={t}>
                      {stack.name}
                    </Trans>
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
