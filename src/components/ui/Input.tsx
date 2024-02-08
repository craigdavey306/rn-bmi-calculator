import React, { LegacyRef } from 'react';
import {
  KeyboardType,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

import { Colors, Font } from '../../library';
import { slugifyString } from '../../utils/slugify';
import { getTestId } from '../../utils/helpers';

type AutoComplete = TextInputProps['autoComplete'];

type InputProps = {
  autoComplete?: AutoComplete;
  handleChangeInputValue: (enteredValue: string) => void;
  inputValue: string;
  keyboardType?: KeyboardType;
  label: string;
  maxLength?: number;
  secureTextEntry?: boolean;
};

/**
 * @description An input component consisting of a label and an input text.
 *
 * @param {AutoComplete} autoComplete specifies the autocomplete hint for the system. This is optional.
 * @param {function} handleChangeInputValue callback function for handling the user's input
 * @param {string} inputValue value entered by the user
 * @param {KeyboardType} keyboardType specifies the keyboard type to open
 * @param {string} label the label that will appear for the input
 * @param {number} maxLength defines the maximum length allowed for the input. This is optional.
 * @param {boolean} secureTextEntry defines if the text should be obscured when entered. This is optional.
 *
 * @property {string} slugifiedLabel transforms a label into a slug for use as the native and test IDs
 *
 * @returns a component with a label and text input
 */

const Input: React.FC<InputProps> = ({
  autoComplete,
  handleChangeInputValue,
  inputValue,
  keyboardType,
  label,
  maxLength,
  secureTextEntry,
}): JSX.Element => {
  const slugifiedLabel = slugifyString(label, ' ', '-');

  return (
    <View style={styles.container}>
      <Text
        accessibilityRole="text"
        nativeID={slugifiedLabel}
        style={styles.label}>
        {label}
      </Text>
      <TextInput
        accessible={true}
        accessibilityLabelledBy={slugifiedLabel}
        accessibilityLabel={label}
        autoCapitalize="none"
        autoComplete={autoComplete}
        keyboardType={keyboardType}
        maxLength={maxLength}
        onChangeText={handleChangeInputValue}
        secureTextEntry={secureTextEntry}
        style={[styles.input]}
        testID={getTestId(slugifiedLabel)}
        value={inputValue}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: Font.size.size3,
    color: Colors.Black.grade100,
    marginBottom: 4,
    marginLeft: 3,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 4,
    fontSize: Font.size.size3,
    backgroundColor: Colors.Green.grade5,
    borderColor: Colors.Black.grade100,
    borderStyle: 'solid',
    borderWidth: 1,
    color: Colors.Black.grade100,
  },
});
