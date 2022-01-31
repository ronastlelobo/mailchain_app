import React, {useMemo} from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';
import {useTheme} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './ComposeMail.styles';
import {wp} from '../../../Utils/PixelRatio';

const ComposeMail = () => {
  const theme = useTheme();
  const style = useMemo(() => styles(theme), [theme]);
  return (
    <Animated.View style={style.container}>
      <View style={style.mailContainer}>
        <FontAwesome
          color={theme.colors.xxxGrey}
          style={style.iconStyle}
          size={wp('8%')}
          name="pencil-square-o"
        />
      </View>
    </Animated.View>
  );
};

export default ComposeMail;
