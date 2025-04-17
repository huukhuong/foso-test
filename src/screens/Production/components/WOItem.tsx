import { ICONS } from '@/assets';
import { Badge, BounceButton } from '@/components';
import { WoItemType } from '@/types';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Tooltip from 'react-native-walkthrough-tooltip';

type Props = {
  type: WoItemType;
};

const WOItem = ({ type }: Props) => {
  const [isPinned, setIsPinned] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  const badgeColor =
    type === 'no'
      ? 'bg-orange-100'
      : type === 'finish'
      ? 'bg-green-100'
      : 'bg-default-primary/10';
  const badgeTextColor =
    type === 'no'
      ? 'text-default-darkOrange'
      : type === 'finish'
      ? 'text-green-700'
      : 'text-default-primary';
  const badgeLabel =
    type === 'no'
      ? 'Chưa sản xuất'
      : type === 'finish'
      ? 'Hoàn thành'
      : 'Đang sản xuất';

  return (
    <View className="bg-default-primary/3 rounded-lg border-l-4 border-default-primary pl-3 gap-3">
      <View className="flex-row justify-between items-center h-12">
        <Badge
          bgColor={badgeColor}
          textColor={badgeTextColor}
          label={badgeLabel}
        />

        <BounceButton
          onPress={() => setIsPinned(!isPinned)}
          hitSlop={20}
          pressedScale={0.8}>
          <SvgXml xml={isPinned ? ICONS.PinRed : ICONS.Pin} />
        </BounceButton>
      </View>

      <Text className="text-default-darkPrimary font-bold text-lg">
        LSX-13032514
      </Text>

      <Text className="font-bold text-default-inactive text-base">
        Deadline: 13/03/2025
      </Text>

      <Tooltip
        isVisible={tooltip}
        onClose={() => setTooltip(false)}
        placement="bottom"
        contentStyle={{ borderRadius: 10 }}
        content={
          <View className="gap-3 p-3 w-[300px]">
            <View className="flex-row items-center gap-2">
              <View className="h-5 w-5 rounded-full bg-default-lightOrange" />
              <Text className="font-bold flex-1">
                Tiến độ Kế hoạch Nguyên liệu
              </Text>
              <Text className="font-bold text-gray-400">50%</Text>
            </View>

            <View className="flex-row items-center gap-2">
              <View className="h-5 w-5 rounded-full bg-default-primary" />
              <Text className="font-bold flex-1">
                Tiến độ Nhập kho Thành phẩm
              </Text>
              <Text className="font-bold text-gray-400">90%</Text>
            </View>
          </View>
        }>
        <View className="flex-row items-center gap-2 mb-2 bg-white p-3 -m-3 rounded-lg">
          <View className="rounded-full flex-1 bg-orange-100">
            <View className="absolute rounded-full left-0 top-0 bottom-0 w-[50%] bg-orange-500" />
            <Text className="text-white font-bold text-xs pl-4 py-0.5">
              50%
            </Text>
          </View>

          <View className="rounded-full flex-1 bg-blue-100">
            <View className="absolute rounded-full left-0 top-0 bottom-0 w-[90%] bg-default-primary" />
            <Text className="text-white font-bold text-xs pl-4 py-0.5">
              90%
            </Text>
          </View>
          <BounceButton onPress={() => setTooltip(true)} pressedScale={0.8}>
            <SvgXml xml={ICONS.Info} width={20} height={20} />
          </BounceButton>
        </View>
      </Tooltip>
    </View>
  );
};

export default WOItem;
