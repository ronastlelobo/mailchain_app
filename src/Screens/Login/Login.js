import React, {useMemo, useState} from 'react';
import {
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import {styles} from './Login.styles';
import ImageLib from '../../Utils/ImageLib';
import {useTheme} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

const Login = ({navigation}) => {
  const theme = useTheme();
  const style = useMemo(() => styles(theme), [theme]);
  const [bioMetrics, setBioMetrics] = useState(false);
  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.scrollContainer}>
          <View style={style.imageContainer}>
            <Image source={ImageLib.Mailchain} resizeMode="center" />
          </View>
          <View style={style.passwordContainer}>
            <View style={style.emailTextInputContainer}>
              <Image source={ImageLib.Mail} style={style.textInputImage} />
              <TextInput
                style={style.textInput}
                placeholder="Email address"
                placeholderTextColor={theme.colors.primaryGrey}
                keyboardType={'number-pad'}
                placeholderTextColor={theme.colors.xxGrey}
              />
            </View>
            <View style={style.emailTextInputContainer}>
              <Image source={ImageLib.LockOpen} style={style.textInputImage} />
              <TextInput
                style={style.textInput}
                placeholder="Password"
                placeholderTextColor={theme.colors.primaryGrey}
                keyboardType={'number-pad'}
                placeholderTextColor={theme.colors.xxGrey}
              />
              <Image source={ImageLib.Fingerprint} />
            </View>
          </View>
          <View style={style.biometricPermssion}>
            <Text style={style.textBiometrics}>Sign in with Biometrics?</Text>
            <CheckBox
              disabled={false}
              value={bioMetrics}
              onValueChange={newValue => setBioMetrics(newValue)}
              style={style.checkboxSize}
            />
          </View>
          <View style={style.signInButtonContainer}>
            <Pressable
              onPress={() => {
                navigation.navigate('HomeStackNavigator', {
                  screen: 'Home',
                });
              }}
              style={style.signInButton}>
              <Text style={style.signIntext}>LOG IN</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
