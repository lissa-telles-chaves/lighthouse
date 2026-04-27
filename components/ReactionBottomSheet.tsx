// Bottom sheet — slides up when user reacts to a post, offers messaging app shortcuts
import { View, Text, TouchableOpacity, Modal, Linking, StyleSheet, Pressable } from 'react-native';

type Props = {
  visible: boolean;
  emoji: string;
  posterName: string;
  onClose: () => void;
};

export default function ReactionBottomSheet({ visible, emoji, posterName, onClose }: Props) {
  const openMessages = async () => {
    await Linking.openURL('sms:');
    onClose();
  };

  const openWhatsApp = async () => {
    await Linking.openURL('https://wa.me/');
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Pressable style={styles.sheet} onPress={() => {}}>
          <View style={styles.handle} />

          <Text style={styles.title}>
            {emoji} Send {posterName} a message?
          </Text>

          <TouchableOpacity style={styles.messagesBtn} onPress={openMessages} activeOpacity={0.85}>
            <Text style={styles.messagesBtnText}>Open in Messages</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.whatsappBtn} onPress={openWhatsApp} activeOpacity={0.85}>
            <Text style={styles.whatsappBtnText}>Open in WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.laterBtn} onPress={onClose} activeOpacity={0.7}>
            <Text style={styles.laterBtnText}>Maybe later</Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 12,
    paddingHorizontal: 24,
    paddingBottom: 48,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#D1D5DB',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 22,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 24,
  },
  messagesBtn: {
    backgroundColor: '#2C5F8A',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  messagesBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  whatsappBtn: {
    backgroundColor: '#25D366',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  whatsappBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  laterBtn: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  laterBtnText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '500',
  },
});
