import { useStyles } from "./styles";
import type { FunctionComponent, ReactElement } from "react";
import { cardLabel, description, defaultButton, outlineButton } from "./config";
import { Button, Paper, Text, Group, CloseButton } from "@mantine/core";

export const NiceBox: FunctionComponent = (): ReactElement => {
  const { classes } = useStyles();

  return (
    <Paper withBorder p="lg" radius="md" shadow="md" className={classes.card}>
      <Group position="apart" mb="xs">
        <Text fz="md" fw={500}>
          {cardLabel}
        </Text>
        <CloseButton mr={-9} mt={-9} />
      </Group>
      <Text c="dimmed" fz="xs">
        {description}
      </Text>
      <Group position="right" mt="md">
        <Button variant="default" size="xs">
          {defaultButton}
        </Button>
        <Button variant="outline" size="xs">
          {outlineButton}
        </Button>
      </Group>
    </Paper>
  );
}
