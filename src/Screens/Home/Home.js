import React, {useMemo, useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import Animated from 'react-native-reanimated';
import {useTheme} from '@react-navigation/native';
import {styles} from './Home.styles';
import AnimatedHeader from './Header/Header';
import EmailTile from '../../Components/EmailTile/EmailTile';
import MockData from '../../Utils/mockData.json';
import ComposeMail from './ComposeMail/ComposeMail';
import BottomMenu from './BottomMenu/BottomMenu';

function Home({navigation}) {
  const theme = useTheme();
  const style = useMemo(() => styles(theme), [theme]);
  const [menuSwitch, setMenuSwitch] = useState(false);
  const scrollY = new Animated.Value(0);
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  return (
    <View style={{flex: 1}}>
      <AnimatedHeader
        scrollY={scrollY}
        setMenuSwitch={setMenuSwitch}
        navigation={navigation}
      />
      <Text style={style.inboxTypeText}>Primary</Text>
      <AnimatedFlatList
        data={MockData}
        renderItem={({item}) => <EmailTile data={item} />}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: scrollY}}},
        ])}
      />
      <ComposeMail />
      <BottomMenu menuSwitch={menuSwitch} setMenuSwitch={setMenuSwitch} />
    </View>
  );
}

export default Home;
