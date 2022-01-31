import React, {useMemo} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import Animated from 'react-native-reanimated';
import {useTheme} from '@react-navigation/native';
import {hp, wp} from '../../../Utils/PixelRatio';
import ImageLib from '../../../Utils/ImageLib';
import {styles} from './Header.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HEADER = hp('8.5%');
const HEADER_EXPAND = hp('15.5%');

const AnimatedHeader = ({scrollY, setMenuSwitch, navigation}) => {
  const theme = useTheme();
  const style = useMemo(() => styles(theme), [theme]);
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
  return (
    <Animated.View
      style={{
        height: headerHeight,
        backgroundColor: theme.colors.Grey,
        zIndex: 1,
        elevation: 1,
      }}>
      <View style={{padding: 8}}>
        <View style={style.profileContainer}>
          <View style={style.imageContainer}>
            <Pressable
              onPress={() => {
                setMenuSwitch(true);
              }}>
              <Ionicons style={style.iconStyle} size={hp('3.8%')} name="menu" />
            </Pressable>
            <Image
              source={ImageLib.ProfileImage}
              resizeMode="center"
              style={style.profileImage}
            />
          </View>
          <Text style={style.searchText}>Search in mail</Text>
          <View style={style.headerToolsContainer}>
            <Ionicons style={style.iconStyle} size={hp('3.5%')} name="search" />
          </View>
        </View>
      </View>

      <Animated.View
        style={[
          style.inboxTypeContainer,
          {
            opacity: headerBottomOpacity,
          },
        ]}>
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
  );
};

export default AnimatedHeader;
