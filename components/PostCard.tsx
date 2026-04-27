// Reusable post card — renders user header, optional image, post text, and reaction buttons
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Post } from '../lib/mockData';

type PostCardProps = {
  post: Post;
  onReact: (emoji: string) => void;
};

const REACTIONS = ['❤️', '😂', '😮', '🫂'];

export default function PostCard({ post, onReact }: PostCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image source={{ uri: post.userAvatar }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{post.userName}</Text>
          <Text style={styles.meta}>
            {post.userCity} · {post.createdAt}
          </Text>
        </View>
      </View>

      {post.type === 'photo' && post.image ? (
        <Image source={{ uri: post.image }} style={styles.postImage} resizeMode="cover" />
      ) : null}

      <Text style={styles.content}>{post.content}</Text>

      <View style={styles.reactions}>
        {REACTIONS.map((emoji) => (
          <TouchableOpacity
            key={emoji}
            style={styles.reactionBtn}
            onPress={() => onReact(emoji)}
            activeOpacity={0.7}
          >
            <Text style={styles.reactionEmoji}>{emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    marginBottom: 8,
    paddingTop: 16,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000000',
  },
  meta: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
  postImage: {
    width: '100%',
    height: 230,
    marginBottom: 12,
  },
  content: {
    fontSize: 16,
    color: '#000000',
    lineHeight: 24,
    paddingHorizontal: 16,
    marginBottom: 14,
  },
  reactions: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
  },
  reactionBtn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
  },
  reactionEmoji: {
    fontSize: 20,
  },
});
