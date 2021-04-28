import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './style';
interface Buttonprops {}
export const Button: React.FC<Buttonprops> = ({
  title,
  onPress,
  style,
  disabled,
}) => {
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={onPress} style={style} disabled={disabled}>
        <Text style={styles.buttonText}> {title}</Text>
      </TouchableOpacity>
    </View>
  );
};
