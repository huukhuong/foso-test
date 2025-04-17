import { ICONS } from '@/assets';
import { colors } from '@/theme';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Platform, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

interface TabIconProps {
  routeName: string;
  focused: boolean;
}

const TabIcon = ({ routeName, focused }: TabIconProps) => {
  const getIcon = () => {
    switch (routeName) {
      case 'Overview':
        return focused ? ICONS.OverviewFocused : ICONS.Overview;
      case 'Orders':
        return focused ? ICONS.OrderFocused : ICONS.Order;
      case 'Gantt':
        return focused ? ICONS.GranttFocused : ICONS.Grantt;
      case 'Production':
        return focused ? ICONS.ProductionFocused : ICONS.Production;
      case 'More':
        return focused ? ICONS.MoreFocused : ICONS.More;
      default:
        return ICONS.Overview;
    }
  };

  return (
    <SvgXml xml={getIcon()} width={26} height={26} style={{ marginTop: 8 }} />
  );
};

const getTabLabel = (routeName: string) => {
  switch (routeName) {
    case 'Overview':
      return 'Tổng quan';
    case 'Orders':
      return 'Đơn hàng';
    case 'Gantt':
      return 'Sơ đồ Gantt';
    case 'Production':
      return 'Lệnh SX';
    case 'More':
      return 'Xem thêm';
    default:
      return routeName;
  }
};

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View className='bg-white rounded-t-2xl overflow-hidden z-40'>
      <View className="flex-row h-20">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              className="flex-1 justify-center items-center">
              <TabIcon routeName={route.name} focused={isFocused} />
              <Text
                className={`text-sm font-bold mt-1 mb-2 ${
                  isFocused ? 'text-default-primary' : 'text-default-inactive'
                }`}>
                {getTabLabel(route.name)}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View
        style={{
          height: insets.bottom,
        }}
      />
    </View>
  );
};

export default CustomTabBar;
