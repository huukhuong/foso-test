import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const useScreenDimensions = () => {
  const [screenData, setScreenData] = useState({
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  });

  useEffect(() => {
    const onChange = (result: {
      screen: { width: number; height: number };
    }) => {
      setScreenData({
        width: result.screen.width,
        height: result.screen.height,
      });
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    return () => {
      subscription.remove();
    };
  }, []);

  return screenData;
};

export default useScreenDimensions;
