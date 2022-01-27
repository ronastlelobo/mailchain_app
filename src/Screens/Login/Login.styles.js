import {StyleSheet} from 'react-native';
import {hp} from '../../Utils/PixelRatio';

export const styles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    scrollContainer: {
      flex: 1,
      paddingHorizontal: 20,
    },
    imageContainer: {
      height: hp('30%'),
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    passwordContainer: {
      height: hp('25%'),
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },

    emailTextInputContainer: {
      height: '30%',
      borderWidth: 1,
      width: '100%',
      borderRadius: 8,
      alignItems: 'center',
      paddingHorizontal: 10,
      borderColor: theme.colors.xGrey,
      flexDirection: 'row',
    },
    textInputImage: {
      tintColor: theme.colors.xxxGrey,
      marginRight: 10,
    },
    textInput: {
      width: '80%',
      fontSize: hp(1.8),
      fontFamily: theme.fonts.Regular,
    },
    biometricPermssion: {
      height: hp('5%'),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textBiometrics: {
      fontFamily: theme.fonts.Regular,
    },
    checkboxSize: {
      height: hp('2.7%'),
      width: hp('2.7%'),
    },
    signInButtonContainer: {
      height: hp('10%'),
      justifyContent: 'center',
      alignItems: 'center',
    },
    signInButton: {
      height: '65%',
      width: '100%',
      backgroundColor: '#1D3557',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    signIntext: {
      fontSize: hp('2%'),
      color: theme.colors.white,
      fontFamily: theme.fonts.Bold,
    },
  });
