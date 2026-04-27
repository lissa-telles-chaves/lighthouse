// Feed screen — scrollable list of friend posts with reaction bottom sheet
import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { POSTS } from '../../lib/mockData';
import PostCard from '../../components/PostCard';
import ReactionBottomSheet from '../../components/ReactionBottomSheet';

type ActiveReaction = {
  postId: string;
  posterName: string;
  emoji: string;
} | null;

export default function FeedScreen() {
  const [activeReaction, setActiveReaction] = useState<ActiveReaction>(null);

  const handleReact = (postId: string, posterName: string, emoji: string) => {
    setActiveReaction({ postId, posterName, emoji });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lighthouse</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons name="notifications-outline" size={24} color="#2C5F8A" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}>
        {POSTS.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onReact={(emoji) => handleReact(post.id, post.userName, emoji)}
          />
        ))}
      </ScrollView>

      <ReactionBottomSheet
        visible={activeReaction !== null}
        emoji={activeReaction?.emoji ?? ''}
        posterName={activeReaction?.posterName ?? ''}
        onClose={() => setActiveReaction(null)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 13,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#2C5F8A',
    letterSpacing: -0.5,
  },
  list: {
    paddingTop: 8,
    paddingBottom: 24,
  },
});
