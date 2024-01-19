import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors, Font } from '../../library';

type TextButtonProps = {
  buttonText: string;
  onPress: () => void;
};

const TextButton: React.FC<TextButtonProps> = ({
  buttonText,
  onPress,
}): JSX.Element => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      onPress={onPress}>
      <View>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </Pressable>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.Green.grade60,
    borderRadius: 6,
    elevation: 2,
    marginTop: 4,
    marginBottom: 4,
    paddingHorizontal: 13,
    paddingVertical: 10,
    shadowColor: Colors.Black.grade100,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonText: {
    color: Colors.White.grade100,
    fontSize: Font.size.size5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
