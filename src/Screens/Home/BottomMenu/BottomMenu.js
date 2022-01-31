import React, {useMemo, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {useTheme} from '@react-navigation/native';
import ImageLib from '../../../Utils/ImageLib';
import {wp, hp} from '../../../Utils/PixelRatio';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './BottomMenu.styles';

const BottomMenu = ({menuSwitch, setMenuSwitch}) => {
  const bottomSheetRef = useRef();
  const theme = useTheme();
  const style = useMemo(() => styles(theme), [theme]);
  const snapPoints = useMemo(() => ['70%'], []);

  useEffect(() => {
    if (menuSwitch) {
      bottomSheetRef.current.expand();
    } else {
      bottomSheetRef.current.close();
    }
  }, [menuSwitch]);

  return (
    <BottomSheet
      enablePanDownToClose={true}
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      style={style.bottomSheetShadow}>
      <View style={style.contentContainer}>
        <View style={style.logoContainer}>
          <Image
            style={style.mailchainImage}
            source={ImageLib.Mailchain}
            resizeMode="contain"
          />
          <Pressable
            onPress={() => {
              setMenuSwitch(false);
            }}>
            <Ionicons size={hp('3%')} name="ios-close" />
          </Pressable>
        </View>

        <View style={style.menuContainer}>
          <MaterialCommunityIcons
            color={theme.colors.primary}
            size={hp('3%')}
            name="inbox"
          />
          <Text style={style.selectedMenuText}>Inbox</Text>
        </View>
        <View style={style.menuContainer}>
          <MaterialIcons
            color={theme.colors.xxGrey}
            size={hp('3%')}
            name="favorite-border"
          />
          <Text style={style.unselectedMenuText}>Favourites</Text>
        </View>
        <View style={style.menuContainer}>
          <MaterialIcons
            color={theme.colors.xxGrey}
            size={hp('3%')}
            name="label-important-outline"
          />
          <Text style={style.unselectedMenuText}>Important</Text>
        </View>
        <View style={style.menuContainer}>
          <MaterialCommunityIcons
            color={theme.colors.xxGrey}
            size={hp('2.9%')}
            name="send-outline"
          />
          <Text style={style.unselectedMenuText}>Sent</Text>
        </View>
        <View style={style.menuContainer}>
          <MaterialCommunityIcons
            color={theme.colors.xxGrey}
            size={hp('3%')}
            name="send-clock-outline"
          />
          <Text style={style.unselectedMenuText}>Scheduled</Text>
        </View>
        <View style={style.menuContainer}>
          <MaterialIcons
            color={theme.colors.xxGrey}
            size={hp('3%')}
            name="outbox"
          />
          <Text style={style.unselectedMenuText}>Outbox</Text>
        </View>
        <View style={style.menuContainer}>
          <MaterialCommunityIcons
            color={theme.colors.xxGrey}
            size={hp('3%')}
            name="file-edit-outline"
          />
          <Text style={style.unselectedMenuText}>Drafts</Text>
        </View>
        <View style={style.menuContainer}>
          <Ionicons
            color={theme.colors.xxGrey}
            size={hp('3%')}
            name="ios-warning-outline"
          />
          <Text style={style.unselectedMenuText}>Spam</Text>
        </View>
        <View style={style.menuContainer}>
          <Ionicons
            color={theme.colors.xxGrey}
            size={hp('3%')}
            name="ios-trash-outline"
          />
          <Text style={style.unselectedMenuText}>Trash</Text>
        </View>
        <View style={style.menuContainer}>
          <Ionicons
            color={theme.colors.xxGrey}
            size={hp('3%')}
            name="ios-settings-outline"
          />
          <Text style={style.unselectedMenuText}>Settings</Text>
        </View>
      </View>
    </BottomSheet>
  );
};

export default BottomMenu;
