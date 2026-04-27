// Welcome screen — entry point for the demo, shows branding and navigation buttons
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
  const router = useRouter();

  const goToApp = () => router.replace('/(tabs)');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoEmoji}>🔦</Text>
          <Text style={styles.appName}>Lighthouse</Text>
        </View>

        <Text style={styles.tagline}>
          Stay in touch with the people that matter.
        </Text>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.primaryButton} onPress={goToApp} activeOpacity={0.85}>
            <Text style={styles.primaryButtonText}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={goToApp} activeOpacity={0.7}>
            <Text style={styles.loginLink}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoEmoji: {
    fontSize: 72,
    marginBottom: 12,
  },
  appName: {
    fontSize: 44,
    fontWeight: '800',
    color: '#2C5F8A',
    letterSpacing: -1,
  },
  tagline: {
    fontSize: 18,
    color: '#374151',
    textAlign: 'center',
    lineHeight: 27,
    marginBottom: 52,
  },
  buttons: {
    width: '100%',
    gap: 16,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#2C5F8A',
    borderRadius: 14,
    paddingVertical: 17,
    width: '100%',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
  loginLink: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '500',
  },
});
