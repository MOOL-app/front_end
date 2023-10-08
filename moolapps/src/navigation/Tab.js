import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/main/Home';
import Chat from '../screens/chat/Chat';
import Mypage from '../screens/mypage/Mypage';
import Exchange from '../screens/exchange/Exchange';
import { View,Image, StyleSheet,Text} from 'react-native';

// 아이콘 이미지를 미리 가져오기
const homeIcon = require('../assets/images/Home.png');
const chatIcon = require('../assets/images/Chat.png');
const exchangeIcon = require('../assets/images/Exchange.png');
const myIcon = require('../assets/images/Mypage.png');
const searchIcon = require('../assets/images/search.png');
const alarmIcon = require('../assets/images/alarm.png');

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarStyle: [
            {
              display: 'flex',
              height: 70
            },
            null,
          ],
        tabBarIcon: ({ color, size }) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = homeIcon;
          } else if (route.name === 'Chat') {
            iconSource = chatIcon;
          } else if (route.name === 'Exchange') {
            iconSource = exchangeIcon;
          } else if (route.name === 'Mypage') {
            iconSource = myIcon;
          }

          return (
            <Image
              source={iconSource}
              style={[styles.image,{ marginTop: 5 }]}
            />
          );
        },
        tabBarLabel: ({ color }) => {
          let label;

          if (route.name === 'Home') {
            label = 'Home';
          } else if (route.name === 'Chat') {
            label = 'Chat';
          } else if (route.name === 'Exchange') {
            label = 'Exchange';
          } else if (route.name === 'Mypage') {
            label = 'Mypage';
          }

          return (
            <Text style={{ color, fontSize: 12, marginBottom:10 }}>{label}</Text>
          );
        },
      })}
    >
      <Tab.Screen name='Home' component={ Home } 
        options={{
          header: () => (
            <View style={styles.container}>
              <Text style={styles.logo}>로고</Text>
              <Image source={searchIcon} style={styles.icon} />
              <Image source={alarmIcon} style={styles.icon} />
            </View>
          ),
        }}
      />
      <Tab.Screen name='Chat' component={ Chat } />
      <Tab.Screen name='Exchange' component={ Exchange } />
      <Tab.Screen name='Mypage' component={ Mypage } />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
  container: {
    flexDirection: 'row', // 요소들을 수평 방향으로 배치
    alignItems: 'center', // 수직 가운데 정렬
    marginTop: 20
  },
  logo: {
    flex: 1, // 로고가 남은 공간을 모두 차지하도록 설정
    textAlign: 'left',
    marginLeft: 27,
    marginTop: 15
  },
  icon: {
    marginLeft: 8, // 아이콘 사이에 간격을 조절
    alignItems: 'flex-end', // 아이콘을 오른쪽으로 정렬
    marginRight: 9,
    marginTop: 15,
    width: 28,
    height: 28
  },
});



export default TabNavigation;
