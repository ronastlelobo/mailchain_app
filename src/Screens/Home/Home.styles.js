import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Utils/PixelRatio';

export const styles = theme =>
  StyleSheet.create({
    inboxTypeText: {
      fontFamily: theme.fonts.Regular,
      fontSize: hp('1.8%'),
      paddingLeft: 5,
      paddingBottom: 5,
      backgroundColor: theme.colors.Grey,
      textAlign: 'center',
    },
  });
