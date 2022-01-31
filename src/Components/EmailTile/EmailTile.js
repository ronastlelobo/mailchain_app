import React, {useMemo} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {hp, wp} from '../../Utils/PixelRatio';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './EmailTile.styles';

const EmailType = ({data}) => {
  switch (data) {
    case 'important':
      return (
        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 10,
            backgroundColor: 'firebrick',
          }}
        />
      );
    case 'normal':
      return (
        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 10,
            backgroundColor: 'deepskyblue',
          }}
        />
      );
    case 'starred':
      return <Ionicons size={hp('1.8%')} name="ios-star" color={'gold'} />;

    default:
      return <View />;
  }
};

const Header = ({data}) => {
  const theme = useTheme();
  return (
    <Text style={{fontFamily: theme.fonts.Bold, fontSize: hp('2%')}}>
      {data}
    </Text>
  );
};

const Time = ({data}) => {
  const theme = useTheme();
  return (
    <Text
      style={{
        fontFamily: theme.fonts.Regular,
        fontSize: hp('1.8%'),
        color: theme.colors.xxGrey,
      }}>
      {data}
    </Text>
  );
};

const Reply = ({data}) => {
  const theme = useTheme();
  switch (data) {
    case true:
      return <EntypoIcon size={hp('1.8%')} name="reply" />;

    default:
      return <View />;
  }
};

const Subject = ({data}) => {
  const theme = useTheme();
  return (
    <Text
      numberOfLines={1}
      style={{
        fontFamily: theme.fonts.Bold,
        fontSize: hp('1.8%'),
        color: theme.colors.xxxGrey,
      }}>
      {data}
    </Text>
  );
};

const Flag = ({data}) => {
  const theme = useTheme();
  switch (data) {
    case true:
      return <Ionicons color={'red'} size={hp('1.8%')} name="flag" />;

    default:
      return <View />;
  }
};

const Attachment = ({data}) => {
  const theme = useTheme();

  const mediaType = ({item}) => {
    switch (item.type) {
      case 'video':
        return (
          <View
            style={{
              borderWidth: 1,
              borderColor: theme.colors.xGrey,
              width: wp('35%'),
              padding: 5,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 15,
              justifyContent: 'space-evenly',
            }}>
            <View style={{width: '20%'}}>
              <Ionicons
                color={'mediumpurple'}
                size={hp('1.8%')}
                name="ios-videocam"
              />
            </View>
            <View style={{width: '80%'}}>
              <Text numberOfLines={1}>{item.name}</Text>
            </View>
          </View>
        );
      case 'image':
        return (
          <View
            style={{
              borderWidth: 1,
              width: wp('35%'),
              padding: 5,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 15,
              justifyContent: 'space-evenly',
              borderColor: theme.colors.xGrey,
            }}>
            <View style={{width: '20%'}}>
              <FontAwesome
                color={'salmon'}
                size={hp('1.8%')}
                name="file-photo-o"
              />
            </View>
            <View style={{width: '80%'}}>
              <Text numberOfLines={1}>{item.name}</Text>
            </View>
          </View>
        );

      case 'doc':
        return (
          <View
            style={{
              borderWidth: 1,
              width: wp('30%'),
              padding: 5,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 15,
              justifyContent: 'space-evenly',
              borderColor: theme.colors.xGrey,
            }}>
            <View style={{width: '20%'}}>
              <Ionicons
                color={'crimson'}
                size={hp('1.8%')}
                name="document-outline"
              />
            </View>
            <View style={{width: '80%'}}>
              <Text numberOfLines={1}>{item.name}</Text>
            </View>
          </View>
        );

      default:
        return <View />;
    }
  };
  if (data.length > 0) {
    return (
      <FlatList
        ItemSeparatorComponent={() => <View style={{width: 5}} />}
        horizontal={true}
        data={data}
        renderItem={mediaType}
      />
    );
  } else {
    return <View />;
  }
};

const Description = ({data}) => {
  const theme = useTheme();
  return (
    <Text
      numberOfLines={3}
      style={{
        fontFamily: theme.fonts.Regular,
        fontSize: hp('1.8%'),
        color: theme.colors.xxGrey,
        textAlign: 'left',
      }}>
      {data}
    </Text>
  );
};

const AttachmentIndicator = ({data}) => {
  const theme = useTheme();
  if (data.length > 0) {
    return (
      <Ionicons
        style={{
          transform: [{rotate: '45deg'}],
        }}
        size={hp('2.3%')}
        name="ios-attach"
      />
    );
  } else {
    return <View />;
  }
};

const EmailTile = ({data}) => {
  const {
    type = '',
    header = '',
    dateTime = '',
    reply = false,
    flag = false,
    subject = '',
    desc = '',
    attachments = [],
  } = data;
  const theme = useTheme();
  const style = useMemo(() => styles(theme), [theme]);
  return (
    <View style={style.emailTileContainer}>
      <View style={style.emailTileHeaderContainer}>
        <View style={style.sideContainer}>
          <EmailType data={type} />
        </View>
        <View style={style.headerContainer}>
          <Header data={header} />
        </View>
        <View style={style.timeContainer}>
          <Time data={dateTime} />
        </View>
      </View>
      <View style={style.subjectContainer}>
        <View style={style.sideContainer}>
          <Reply data={reply} />
        </View>
        <View style={style.subjectTextContainer}>
          <Subject data={subject} />
        </View>
        <View style={[style.sideContainer, {alignItems: 'flex-end'}]}>
          <Flag data={flag} />
        </View>
      </View>
      <View style={style.emailTileHeaderContainer}>
        <View style={style.sideContainer}></View>
        <View style={style.subjectTextContainer}>
          <Description data={desc} />
          <View style={style.attachmentContainer}>
            <Attachment data={attachments} />
          </View>
        </View>
        <View
          style={[
            style.sideContainer,
            {
              height: '100%',
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
            },
          ]}>
          <AttachmentIndicator data={attachments} />
        </View>
      </View>
    </View>
  );
};

export default EmailTile;
