// Profile screen — shows user info, stats, pinned posts grid, and settings
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ME, MY_PINS } from '../../lib/mockData';

const GRID_GAP = 8;
const GRID_PADDING = 16;
const SCREEN_WIDTH = Dimensions.get('window').width;
const PIN_SIZE = (SCREEN_WIDTH - GRID_PADDING * 2 - GRID_GAP) / 2;

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        <View style={styles.userSection}>
          <Image source={{ uri: ME.avatar }} style={styles.avatar} />
          <Text style={styles.name}>{ME.name}</Text>
          <Text style={styles.bio}>{ME.bio}</Text>
          <Text style={styles.city}>📍 {ME.city}</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>friends</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>pinned</Text>
          </View>
        </View>

        <View style={styles.editSection}>
          <TouchableOpacity style={styles.editBtn} activeOpacity={0.7}>
            <Text style={styles.editBtnText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pinsSection}>
          <Text style={styles.sectionHeader}>Pinned Posts</Text>
          <View style={styles.pinsGrid}>
            {MY_PINS.map((pin) => (
              <View key={pin.id} style={[styles.pinCard, { width: PIN_SIZE, height: PIN_SIZE }]}>
                {pin.type === 'photo' && pin.image ? (
                  <>
                    <Image source={{ uri: pin.image }} style={styles.pinImage} resizeMode="cover" />
                    <Text style={styles.pinEmoji}>📌</Text>
                  </>
                ) : (
                  <View style={styles.pinTextCard}>
                    <Text style={styles.pinEmoji}>📌</Text>
                    <Text style={styles.pinText} numberOfLines={5}>
                      {pin.content}
                    </Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>

        <View style={styles.settingsSection}>
          <TouchableOpacity style={styles.settingsRow} activeOpacity={0.7}>
            <Text style={styles.settingsText}>Settings</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity
            style={styles.settingsRow}
            activeOpacity={0.7}
            onPress={() => router.replace('/(auth)')}
          >
            <Text style={styles.settingsText}>Log Out</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomPad} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000000',
  },
  userSection: {
    alignItems: 'center',
    paddingVertical: 28,
    backgroundColor: '#FFFFFF',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 14,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 5,
  },
  bio: {
    fontSize: 14,
    color: '#374151',
    textAlign: 'center',
    paddingHorizontal: 40,
    marginBottom: 4,
    lineHeight: 20,
  },
  city: {
    fontSize: 14,
    color: '#374151',
  },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingVertical: 18,
    justifyContent: 'center',
  },
  stat: {
    alignItems: 'center',
    paddingHorizontal: 36,
  },
  statNumber: {
    fontSize: 22,
    fontWeight: '800',
    color: '#2C5F8A',
  },
  statLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 4,
  },
  editSection: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  editBtn: {
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  editBtnText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
  },
  pinsSection: {
    marginTop: 12,
    backgroundColor: '#FFFFFF',
    paddingTop: 18,
    paddingBottom: 18,
  },
  sectionHeader: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000000',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  pinsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: GRID_PADDING,
    gap: GRID_GAP,
  },
  pinCard: {
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  pinImage: {
    width: '100%',
    height: '100%',
  },
  pinEmoji: {
    position: 'absolute',
    top: 8,
    right: 8,
    fontSize: 16,
  },
  pinTextCard: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 12,
  },
  pinText: {
    fontSize: 13,
    color: '#000000',
    lineHeight: 19,
    marginTop: 6,
  },
  settingsSection: {
    marginTop: 12,
    backgroundColor: '#FFFFFF',
  },
  settingsRow: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  settingsText: {
    fontSize: 16,
    color: '#374151',
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginHorizontal: 16,
  },
  bottomPad: {
    height: 24,
  },
});
