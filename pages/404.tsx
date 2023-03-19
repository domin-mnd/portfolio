import { LoadingOverlay } from '@mantine/core';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';

// A 404 page redirects to the home page
// Added loading overlay to prevent
// loading times during development environment
// as well as disabling header usage
export default (): ReactElement => {
  const { push } = useRouter();
  useEffect(() => {
    push('/');
  }, []);

  return <LoadingOverlay overlayOpacity={1} visible />;
};
