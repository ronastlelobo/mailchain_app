import {StyleSheet} from 'react-native';
import {hp, wp} from '../..//Utils/PixelRatio';

export const styles = theme =>
  StyleSheet.create({
    emailTileContainer: {
      width: '100%',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.xGrey,
    },
    emailTileHeaderContainer: {flexDirection: 'row', alignItems: 'center'},
    sideContainer: {width: '7.5%'},
    headerContainer: {width: '75%'},
    timeContainer: {width: '17.5%', alignItems: 'flex-end'},
    subjectContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 4,
    },
    subjectTextContainer: {width: '85%'},
    attachmentContainer: {paddingTop: 6, justifyContent: 'center'},
  });
