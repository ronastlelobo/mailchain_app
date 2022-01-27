import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {hp} from '../../../Utils/PixelRatio';

const HEADER_EXPAND = hp('25%');
const HEADER = hp('8%');
const HEADER_SCROLL_DISTANCE = HEADER_EXPAND - HEADER;
const TRANSLATION_Y_OFFSET = Platform.OS === 'ios' ? HEADER : 0;

const AnimatedHeader = ({animatedValue}) => {
  const translationY = useSharedValue(0);
  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_EXPAND],
    outputRange: [HEADER_EXPAND, HEADER],
    extrapolate: 'clamp',
  });
  const fadeOut = animatedValue.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const scrollHandler = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y + TRANSLATION_Y_OFFSET;
  });

  const headerText = (
    <Animated.Text
      style={[
        {
          justifyContent: 'space-between',
          backgroundColor: '#E7C5E0',
          height: HEADER_EXPAND,
          padding: 20,
          position: 'absolute',
          width: '100%',
          zIndex: 1,
        },
        {opacity: fadeOut},
      ]}>
      Animated header
    </Animated.Text>
  );

  return (
    <Animated.View
      style={{
        height: headerHeight,
        backgroundColor: 'lightblue',
      }}>
      {headerText}
    </Animated.View>
  );
};

export default AnimatedHeader;
