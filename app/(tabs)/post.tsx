// Post composer screen — lets user pick a post type, write content, and submit
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type PostType = 'Text' | 'Photo' | 'Video';

const POST_TYPES: PostType[] = ['Text', 'Photo', 'Video'];

export default function PostScreen() {
  const router = useRouter();
  const [postType, setPostType] = useState<PostType>('Text');
  const [content, setContent] = useState('');
  const [posted, setPosted] = useState(false);

  const handlePost = () => {
    setPosted(true);
    setTimeout(() => {
      setPosted(false);
      setContent('');
      router.replace('/(tabs)');
    }, 1200);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7} style={styles.closeBtn}>
          <Ionicons name="close" size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Post</Text>
        <View style={styles.closeBtn} />
      </View>

      <View style={styles.promptCard}>
        <Text style={styles.promptLabel}>✨ Today's prompt</Text>
        <Text style={styles.promptText}>Something you're grateful for this week</Text>
      </View>

      <View style={styles.typeSelector}>
        {POST_TYPES.map((type) => (
          <TouchableOpacity
            key={type}
            style={[styles.typeBtn, postType === type && styles.typeBtnActive]}
            onPress={() => setPostType(type)}
            activeOpacity={0.8}
          >
            <Text style={[styles.typeBtnText, postType === type && styles.typeBtnTextActive]}>
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="What's on your mind?"
        placeholderTextColor="#9CA3AF"
        value={content}
        onChangeText={setContent}
        multiline
        textAlignVertical="top"
        selectionColor="#2C5F8A"
      />

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.postBtn, posted && styles.postBtnSuccess]}
          onPress={handlePost}
          activeOpacity={0.85}
        >
          <Text style={styles.postBtnText}>{posted ? 'Posted! ✓' : 'Post'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  closeBtn: {
    width: 32,
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000000',
  },
  promptCard: {
    backgroundColor: '#EBF2FA',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 14,
    padding: 16,
  },
  promptLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2C5F8A',
    marginBottom: 6,
  },
  promptText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  typeSelector: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
    gap: 8,
  },
  typeBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
  },
  typeBtnActive: {
    backgroundColor: '#2C5F8A',
  },
  typeBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  typeBtnTextActive: {
    color: '#FFFFFF',
  },
  input: {
    flex: 1,
    marginHorizontal: 16,
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
    ...Platform.select({ android: { paddingTop: 0 } }),
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  postBtn: {
    backgroundColor: '#2C5F8A',
    borderRadius: 14,
    paddingVertical: 17,
    alignItems: 'center',
  },
  postBtnSuccess: {
    backgroundColor: '#059669',
  },
  postBtnText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
});
