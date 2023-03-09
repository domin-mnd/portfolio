import type { FunctionComponent, ReactElement } from 'react';
import { Text } from '@mantine/core';
import { about } from '@component/about';

/**
 * A locale time of the user based off configuration from about component
 * @returns {ReactElement} A text with time & offset
 */
export const LocaleTime: FunctionComponent = (): ReactElement => {
  // 2 digit hour & minute locale time
  const localeTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: about.timeZone,
  });
  // Find local timezone offset
  const offset = new Intl.DateTimeFormat([], {
    timeZoneName: "short",
    timeZone: about.timeZone,
  })
    .formatToParts()
    .find((i) => i.type === "timeZoneName")?.value;
  return (
    <Text>
      {localeTime}{' '}
      <Text color="dimmed" span>
        ({offset})
      </Text>
    </Text>
  );
};
