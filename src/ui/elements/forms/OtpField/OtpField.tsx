import React, { type FC, useCallback, useEffect, useRef, useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import Text from '../../Text';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles';

interface OTPFieldProps {
  setIsPinReady: (value: boolean) => void;
  maximumCodeLength: number;
  code: string;
  setCode: (value: string) => void;
}

const OTPField: FC<OTPFieldProps> = ({ setIsPinReady, maximumCodeLength, code, setCode }) => {
  const { styles } = useStyles(stylesheet);
  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const boxArray = new Array(maximumCodeLength).fill(0);

  useEffect(() => {
    // update otp ready status, so that parent can toggle button ready/disable status
    setIsPinReady(code.length === maximumCodeLength);
    return () => {
      setIsPinReady(false);
    };
  }, [code, maximumCodeLength, setIsPinReady]);

  const boxDigit = useCallback(
    (_: unknown, index: number) => {
      const emptyInput = '';
      const digit = code[index]?.length > 0 ? code[index] : emptyInput;

      const isCurrentValue = index === code.length;
      const isLastValue = index === maximumCodeLength - 1;
      const isCodeComplete = code.length === maximumCodeLength;

      const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

      const styledSplitBoxes =
        isInputBoxFocused && isValueFocused ? styles.splitBoxesFocused : styles.splitBoxesUnFocused;

      return (
        <View style={[styles.splitBoxes, styledSplitBoxes]} key={index}>
          <Text color="primary" variant="displayMedium">
            {digit}
          </Text>
        </View>
      );
    },
    [
      code,
      maximumCodeLength,
      isInputBoxFocused,
      styles.splitBoxesFocused,
      styles.splitBoxesUnFocused,
      styles.splitBoxes
    ]
  );

  const handleOnPress = (): void => {
    setIsInputBoxFocused(true);
    inputRef.current?.focus();
  };

  const handleOnBlur = (): void => {
    setIsInputBoxFocused(false);
    inputRef.current?.blur();
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.splitOTPBoxesContainer} onPress={handleOnPress}>
        {boxArray.map(boxDigit)}
      </Pressable>
      <TextInput
        style={styles.textInput}
        keyboardType="number-pad"
        value={code}
        onChangeText={setCode}
        maxLength={maximumCodeLength}
        ref={inputRef}
        onBlur={handleOnBlur}
        caretHidden
      />
    </View>
  );
};

export default OTPField;

/**
 * How to use:
 * <OTPInput
 *  setIsPinReady={setIsPinReady}
 *  maximumCodeLength={maximumCodeLength}
 *  code={code}
 *  setCode={setCode}
 * />
 **/
