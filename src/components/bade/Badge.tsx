import { View, Text } from 'react-native';
import React from 'react';

type Props = {
  bgColor: string;
  textColor: string;
  label: string;
};

const Badge = ({ bgColor, textColor, label }: Props) => {
  return (
    <View className={`p-3 ${bgColor} rounded-lg`}>
      <Text className={`font-bold ${textColor}`}>{label}</Text>
    </View>
  );
};

export default Badge;
