import { useRouter } from 'next/router';
import { useEffect } from 'react';

// A 404 page redirects to the home page
export default () => {
  const { push } = useRouter();
  useEffect(() => {
    push("/");
  }, []);
}