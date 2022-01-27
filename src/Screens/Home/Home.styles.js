import {StyleSheet} from 'react-native';
import {hp} from '../../Utils/PixelRatio';

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 80;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export const styles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      justifyContent: 'space-between',
      backgroundColor: '#E7C5E0',
      height: HEADER_MAX_HEIGHT,
      padding: 20,
      position: 'absolute',
      width: '100%',
      zIndex: 1,
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    fadingOutText: {
      fontSize: 18,
    },
    scrollView: {
      backgroundColor: '#7FD8DD',
      marginTop: HEADER_MAX_HEIGHT,
      padding: 20,
    },
    profileContainer: {
      padding: 8,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    imageContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileImage: {
      height: hp('4.5%'),
      width: hp('4.5%'),
      backgroundColor: 'lightcoral',
      borderRadius: 24,
    },
    headerToolsContainer: {
      width: '22%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    inboxTypeContainer: {
      marginLeft: 10,
    },
    inboxType: {
      flexDirection: 'row',
      alignItems: 'center',
      color: theme.colors.primary,
    },
    inboxTypeText: {
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: theme.fonts.Bold,
    },
    iconStyle: {
      color: theme.colors.primary,
    },
    textIconWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10,
    },
    quickLookContainer: {
      width: '100%',
      flexDirection: 'row',
      paddingVertical: 10,
      alignItems: 'center',
    },
    quickLookImg: {
      height: hp('6%'),
      width: hp('6%'),
      backgroundColor: theme.colors.white,
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emailsContainer: {
      position: 'absolute',
      right: 0,
      bottom: -3,
      backgroundColor: '#007aff',
      padding: 2,
      borderRadius: 5,
    },
    emailsText: {
      fontSize: 11,
      color: 'white',
      fontWeight: 'bold',
    },
    textIconTextStyle: {
      fontFamily: theme.fonts.Bold,
      padding: 5,
      textAlign: 'center',
    },
    meetingName: {
      fontFamily: theme.fonts.Bold,
      fontSize: 14,
    },
    meetingTime: {
      fontFamily: theme.fonts.Regular,
      fontSize: 13,
    },
  });
