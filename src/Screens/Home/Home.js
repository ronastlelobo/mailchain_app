import React, {useMemo} from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import {LOREM_IPSUM} from './LorenIpsum';
import Animated from 'react-native-reanimated';
import {useTheme} from '@react-navigation/native';
import {hp, wp} from '../../Utils/PixelRatio';
import ImageLib from '../../Utils/ImageLib';
import {styles} from './Home.styles';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HEADER = hp('7%');
const HEADER_EXPAND = hp('25%');

function Home() {
  const theme = useTheme();
  const style = useMemo(() => styles(theme), [theme]);
  const scrollY = new Animated.Value(0);
  const headerHeight = Animated.interpolateNode(scrollY, {
    inputRange: [0, HEADER_EXPAND],
    outputRange: [HEADER_EXPAND, HEADER],
    extrapolate: 'clamp',
  });
  const headerBottomOpacity = Animated.interpolateNode(scrollY, {
    inputRange: [0, HEADER_EXPAND],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const headerTopOpacity = Animated.interpolateNode(scrollY, {
    inputRange: [0, HEADER_EXPAND],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          height: headerHeight,
          backgroundColor: theme.colors.Grey,
          zIndex: 1,
          elevation: 1,
        }}>
        <View style={style.profileContainer}>
          <View style={style.imageContainer}>
            <Image
              source={ImageLib.ProfileImage}
              resizeMode="center"
              style={style.profileImage}
            />
            <Animated.View
              style={[style.inboxTypeContainer, {opacity: headerTopOpacity}]}>
              <View style={style.inboxType}>
                <Text style={style.inboxTypeText}>All Inboxes</Text>
                <Ionicons
                  style={[style.iconStyle, {marginTop: 5}]}
                  color={theme.colors.xGrey}
                  size={hp('2.5%')}
                  name="chevron-down"
                />
              </View>
            </Animated.View>
          </View>
          <View style={style.headerToolsContainer}>
            <Ionicons style={style.iconStyle} size={hp('3.5%')} name="search" />
            <Icons
              style={style.iconStyle}
              size={hp('3.5%')}
              name="calendar-month"
            />
          </View>
        </View>
        <Animated.View
          style={[style.inboxTypeContainer, {opacity: headerBottomOpacity}]}>
          <View style={[style.inboxType, {marginVertical: 5}]}>
            <Text style={style.inboxTypeText}>All Inboxes</Text>
            <Ionicons
              style={[style.iconStyle, {marginTop: 5}]}
              color={theme.colors.xxxGrey}
              size={hp('2.5%')}
              name="chevron-down"
            />
          </View>
          <View style={style.quickLookContainer}>
            <View style={[style.textIconWrapper, {marginLeft: 0}]}>
              <View style={style.quickLookImg}>
                <Image source={ImageLib.Eth} resizeMode="contain" />
                <View style={style.emailsContainer}>
                  <Text style={style.emailsText}>20</Text>
                </View>
              </View>
            </View>
            <View style={style.textIconWrapper}>
              <View style={style.quickLookImg}>
                <Image source={ImageLib.Solana} resizeMode="center" />
                <View style={style.emailsContainer}>
                  <Text style={style.emailsText}>89</Text>
                </View>
              </View>
            </View>

            <View style={style.textIconWrapper}>
              <View
                style={{
                  width: wp('43%'),
                  height: hp('6%'),
                  backgroundColor: 'white',
                  borderRadius: 30,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Image style={{marginLeft: 10}} source={ImageLib.Logo} />
                <View
                  style={{
                    height: '80%',
                    width: '73%',
                    justifyContent: 'space-evenly',
                  }}>
                  <Text style={style.meetingName} numberOfLines={1}>
                    Android Forum 12 December
                  </Text>
                  <Text style={style.meetingTime} numberOfLines={1}>
                    10:41 PM, 35 min
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Animated.View>
      </Animated.View>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: scrollY}}},
        ])}>
        <Text>{LOREM_IPSUM}</Text>
      </Animated.ScrollView>
    </View>
  );
}

export default Home;
