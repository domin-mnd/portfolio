import { FunctionComponent, ReactElement, useState } from 'react';
import { Card, Container, Progress, SimpleGrid, Text } from '@mantine/core';
import { skills as oSkills } from './config';
import { useStyles } from './styles';
import { Works } from '@component/works';
import { SectionCard } from '@component/card';
import { Modal } from '@component/modal';
import { Trans, useTranslation } from 'next-i18next';

/**
 * A grid of skills with a color radial gradient and a modal with examples of works
 * @param {Stack[]} props.skills An array of stacks used in Skills component in skills section
 * @returns {ReactElement} A grid of skills
 */
export const Skills: FunctionComponent<SkillsProps> = ({ skills = oSkills }): ReactElement => {
  const { classes } = useStyles();
  // Modal state
  const [opened, setOpened] = useState(false);
  // Selected stack to show for the modal
  const [selected, setSelected] = useState<Stack | null>(null);
  const { t } = useTranslation('skills');

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
          <Text size="xs">
            <Trans i18nKey={'skills.' + skill.name + '.name'} t={t}>
              {skill.name}
            </Trans>
          </Text>
        </Card>
      ))}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <Text component="a" href={selected?.href} target="_blank" className={classes.href}>
            <Trans i18nKey={'skills.' + selected?.name + '.name'} t={t}>
              {selected?.name}
            </Trans>
          </Text>
        }
      >
        <Text color="dimmed">
          <Trans i18nKey={'skills.' + selected?.name + '.description'} t={t}>
            {selected?.description}
          </Trans>
        </Text>

        <Text my="md">
          {t('knowledge-label', {
            skillName: t('skills.' + selected?.name + '.name').toLowerCase(),
          })}
        </Text>
        <Progress value={selected?.knowledge} radius="xs" />

        {/* Don't show examples if there are no */}
        {Examples?.props.children.length ? (
          <>
            <Text mt="md">
              <Trans i18nKey="examples-label" t={t}>
                Examples:
              </Trans>
            </Text>
            <SectionCard
              m="0 !important" // !important because of mobile
              px={0} // 0 padding to remove extra padding as modal already has padding
              pb={0} // No useless spacing at the bottom of the modal
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
