// Redirect screen — immediately sends the user to the main tabs on mount
import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function FeedDemo() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/(tabs)');
  }, []);

  return null;
}
