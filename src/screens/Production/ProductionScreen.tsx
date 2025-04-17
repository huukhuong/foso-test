import { ICONS } from '@/assets';
import { BounceButton } from '@/components';
import { useScreenDimensions } from '@/hooks';
import { generateRandomItems } from '@/utils';
import React, { useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ReactNativeModal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import StatusFilter from './components/StatusFilter';
import WOItem from './components/WOItem';

const ProductionScreen = () => {
  const { top } = useSafeAreaInsets();
  const { width, height } = useScreenDimensions();

  const [openDrawer, setOpenDrawer] = useState(false);
  const [data, _] = useState(generateRandomItems());

  return (
    <View className="flex-1 bg-default-background">
      <LinearGradient colors={['#0375F3', '#0B69D2']}>
        <View style={{ height: top }} />
        <View className="h-20 flex-row justify-center items-center">
          <BounceButton
            className="p-4"
            pressedScale={0.8}
            onPress={() => setOpenDrawer(true)}>
            <SvgXml xml={ICONS.Menu} />
          </BounceButton>

          <Text className="flex-1 text-white text-center text-xl font-bold">
            Lệnh sản xuất
          </Text>

          <BounceButton className="p-4" pressedScale={0.8}>
            <SvgXml xml={ICONS.Scanner} />
          </BounceButton>
        </View>
      </LinearGradient>

      <View className="flex-1 items-center justify-center px-5">
        <View className="items-center">
          <View className="-my-36">
            <SvgXml xml={ICONS.AddWo} />
          </View>

          <Text className="text-default-darkPrimary font-bold text-lg mb-4">
            Chưa có Lệnh sản xuất.
          </Text>

          <BounceButton onPress={() => setOpenDrawer(true)}>
            <View className="flex-row justify-center items-center gap-3 bg-default-primary py-4 px-6 rounded-lg">
              <SvgXml xml={ICONS.PinVertical} />
              <Text className="text-white text-base font-semibold">
                Bắt đầu ghim lệnh ngay
              </Text>
            </View>
          </BounceButton>
        </View>
      </View>

      <View>
        <ReactNativeModal
          isVisible={openDrawer}
          deviceWidth={width}
          deviceHeight={height}
          backdropOpacity={0.3}
          animationIn={'slideInLeft'}
          animationOut={'slideOutLeft'}
          onBackdropPress={() => setOpenDrawer(false)}
          avoidKeyboard
          style={{
            margin: 0,
            padding: 0,
          }}>
          <View className="bg-white w-[80%] px-4 gap-4" style={{ height }}>
            <Text className="text-default-darkPrimary text-2xl font-bold mt-8">
              Lệnh sản xuất
            </Text>

            <View className="h-14 flex-row">
              <TextInput
                placeholder="Tìm kiếm mã lệnh sản xuất"
                className="pl-3 h-full flex-1 rounded-lg rounded-r-none border border-r-0 border-gray-300 focus:border-default-primary"
              />
              <BounceButton>
                <View className="justify-center items-center h-14 w-14 rounded-r-lg border border-default-primary/20 bg-default-primary/20">
                  <SvgXml xml={ICONS.Search} />
                </View>
              </BounceButton>
            </View>

            <StatusFilter />

            <BounceButton>
              <View className="flex-row items-center justify-between py-3 px-4 border border-gray-300 rounded-lg">
                <Text className="font-bold text-default-darkPrimary text-lg">
                  Bỏ ghim toàn bộ
                </Text>
                <SvgXml xml={ICONS.UnPin} />
              </View>
            </BounceButton>

            <FlatList
              data={openDrawer ? data : []}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <WOItem type={item.type} />}
              ListFooterComponent={<View className="h-10" />}
              ItemSeparatorComponent={() => (
                <View className="h-[1px] bg-gray-300 my-4" />
              )}
            />
          </View>
        </ReactNativeModal>
      </View>
    </View>
  );
};

export default ProductionScreen;
