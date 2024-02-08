import React from 'react';
import { Pressable, StyleSheet, Text, View, Platform } from 'react-native';

import { Colors, Font } from '../../library';
import { slugifyString } from '../../utils/slugify';
import { getTestId } from '../../utils/helpers';

type TextButtonProps = {
  buttonText: string;
  onPress: () => void;
};

const TextButton: React.FC<TextButtonProps> = ({
  buttonText,
  onPress,
}): JSX.Element => {
  const slugifiedLabel = slugifyString(`${buttonText}-btn`, ' ', '-');
  const isAndroid = Platform.OS === 'android';

  return (
    <Pressable
      testID={!isAndroid ? getTestId(slugifiedLabel) : ''}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      onPress={onPress}>
      <View>
        <Text
          testID={isAndroid ? getTestId(slugifiedLabel) : ''}
          style={styles.buttonText}>
          {buttonText}
        </Text>
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
