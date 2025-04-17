import { colors } from '@/theme';
import { AdvancedCheckbox as CheckBox } from 'react-native-advanced-checkbox';
import React from 'react';
import { View, Text } from 'react-native';
import { Badge } from '@/components';

interface StatusCheckBoxProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  label: string;
  bgColor: string;
  textColor: string;
}

export interface StatusItem {
  id: number;
  label: string;
  bgColor: string;
  textColor: string;
  value: boolean;
}

const StatusCheckBox: React.FC<StatusCheckBoxProps> = ({
  value,
  onValueChange,
  label,
  bgColor,
  textColor,
}) => {
  return (
    <View className="flex-row gap-4 items-center">
      <CheckBox
        value={value}
        onValueChange={v => onValueChange(Boolean(v))}
        checkedColor={colors.primary}
      />
      <Badge bgColor={bgColor} textColor={textColor} label={label} />
    </View>
  );
};

export default StatusCheckBox;
