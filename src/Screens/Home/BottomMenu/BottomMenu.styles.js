import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../Utils/PixelRatio';

export const styles = theme =>
  StyleSheet.create({
    bottomSheetShadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    contentContainer: {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
    logoContainer: {
      flexDirection: 'row',
      height: hp('5%'),
      width: '95%',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
      marginHorizontal: 10,
    },
    paddingContainer: {
      padding: 10,
    },
    mailchainImage: {
      height: '100%%',
      width: wp('30%'),
    },
    menuContainer: {
      flexDirection: 'row',
      padding: 10,
      width: '100%',
      alignItems: 'center',
    },
    selectedMenuText: {
      color: theme.colors.primary,
      marginLeft: 25,
      fontSize: hp('1.8%'),
      fontFamily: theme.fonts.Regular,
    },
    unselectedMenuText: {
      color: theme.colors.xxGrey,
      marginLeft: 25,
      fontSize: hp('1.8%'),
      fontFamily: theme.fonts.Regular,
    },
  });
