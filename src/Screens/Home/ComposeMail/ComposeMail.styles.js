import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../Utils/PixelRatio';

export const styles = theme =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: hp('4%'),
      right: wp('5%'),
    },
    mailContainer: {
      height: hp('7.5%'),
      width: wp('15%'),
      backgroundColor: theme.colors.white,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    iconStyle: {marginLeft: wp('1.2%')},
  });
