import { FunctionComponent, ReactElement, useState } from 'react';
import { Card, Container, Modal, Progress, SimpleGrid, Text } from '@mantine/core';
import { skills as oSkills, Stack } from './config';
import { useStyles } from './styles';
import { Works } from '@component/works';
import { SectionCard } from '@component/card';
import { useMediaQuery } from '@mantine/hooks';

/** Skills properties */
export interface Props {
  /** An array of stacks used in skills section */
  skills?: Stack[];
}

/**
 * A grid of skills with a color radial gradient and a modal with examples of works
 * @param {Stack[]} props.skills An array of stacks used in Skills component in skills section
 * @returns {ReactElement} A grid of skills
 */
export const Skills: FunctionComponent<Props> = ({ skills = oSkills }): ReactElement => {
  const { classes } = useStyles();
  // Modal state
  const [opened, setOpened] = useState(false);
  // Selected stack to show for the modal
  const [selected, setSelected] = useState<Stack | null>(null);
  // Whether to blur the background of the modal or not
  const mobile = useMediaQuery('(max-width: 980px)');

  // Examples of works
  const Examples = Works({
    filter: selected?.name,
  });

  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: 530, cols: 2 },
        { maxWidth: 340, cols: 1 },
      ]}
    >
      {skills.map((skill: Stack) => (
        <Card
          key={skill.name}
          className={classes.item}
          onClick={() => {
            // To not duplicate modals for each skill
            setSelected(skill);
            setOpened(true);
          }}
        >
          <Container
            className={classes.overlay}
            sx={{
              backgroundImage: `radial-gradient(farthest-corner at -300% -300%, ${skill.color} -100%, rgba(0, 0, 0, 0))`,
            }}
          />
          <skill.icon size={32} />
          <Text size="xs">{skill.name}</Text>
        </Card>
      ))}
      <Modal
        opened={opened}
        centered
        onClose={() => setOpened(false)}
        overlayBlur={mobile ? 0 : 5}
        title={
          <Text component="a" href={selected?.href} target="_blank" className={classes.href}>
            {selected?.name}
          </Text>
        }
        transition="fade"
      >
        <Text color="dimmed">{selected?.description}</Text>

        <Text my="md">My knowledge of {selected?.name.toLowerCase()}:</Text>
        <Progress value={selected?.knowledge} radius="xs" />

        {/* Don't show examples if there are no */}
        {Examples?.props.children.length ? (
          <>
            <Text mt="md">Examples:</Text>
            <SectionCard
              m="0 !important" // !important because of mobile
              px={0} // 0 padding to remove extra padding as modal already has padding
              height="40vh"
            >
              {Examples}
            </SectionCard>
          </>
        ) : null}
      </Modal>
    </SimpleGrid>
  );
};
