import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import StatusCheckBox, { StatusItem } from './StatusCheckBox';
import { SvgXml } from 'react-native-svg';
import { ICONS } from '@/assets';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const StatusFilter = () => {
  const [statuses, setStatuses] = useState<StatusItem[]>([
    {
      id: 1,
      label: 'Chưa sản xuất',
      bgColor: 'bg-orange-100',
      textColor: 'text-default-darkOrange',
      value: true,
    },
    {
      id: 2,
      label: 'Đang sản xuất',
      bgColor: 'bg-default-primary/10',
      textColor: 'text-default-primary',
      value: true,
    },
    {
      id: 3,
      label: 'Hoàn thành',
      bgColor: 'bg-green-100',
      textColor: 'text-green-700',
      value: false,
    },
  ]);

  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const height = useSharedValue(1);
  const rotation = useSharedValue(0);

  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
    height.value = withTiming(isExpanded ? 0 : 1, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
    rotation.value = withTiming(isExpanded ? 180 : 0, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
  };

  const animatedContainerStyle = useAnimatedStyle(() => ({
    height: height.value * 180,
    opacity: height.value,
    overflow: 'hidden',
  }));

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const handleFilterStatusChange = (id: number, newValue: boolean) => {
    setStatuses(prevStatuses =>
      prevStatuses.map(status =>
        status.id === id ? { ...status, value: newValue } : status,
      ),
    );
  };

  return (
    <View className="rounded-lg border border-gray-300">
      <Pressable onPress={toggleExpand}>
        <View
          className={`flex-row items-center gap-3 py-3 px-4 ${
            isExpanded && 'border-b border-gray-300'
          }`}>
          <SvgXml xml={ICONS.ChartDonus} />
          <Text className="font-bold flex-1">Trạng thái</Text>

          <Animated.View style={animatedIconStyle}>
            <SvgXml xml={ICONS.Up} />
          </Animated.View>
        </View>
      </Pressable>

      <Animated.View style={animatedContainerStyle}>
        <View className="p-4 gap-4">
          {statuses.map(status => (
            <StatusCheckBox
              key={status.id}
              value={status.value}
              onValueChange={(newValue: boolean) =>
                handleFilterStatusChange(status.id, newValue)
              }
              label={status.label}
              bgColor={status.bgColor}
              textColor={status.textColor}
            />
          ))}
        </View>
      </Animated.View>
    </View>
  );
};

export default StatusFilter;
