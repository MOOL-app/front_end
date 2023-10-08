import React from 'react';
import {ScrollView, View, StyleSheet, Text, Image, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
            {/* 타원 */}
            <View style={styles.oval}></View>

            {/* 로고 */}
            <Text style={styles.logo}>M OO L</Text>

            {/* 메인 멘트 */}
            <Text style={styles.comment}>
                감딸기님,{"\n"}오늘도 바꿔쓰는 하루 되세요!
            </Text>

            {/* 촉촉지수 */}
            <View style={styles.moisture}>
                <Text>촉촉지수</Text>
                <Text>32방울</Text>                
            </View>
            
            {/* 물방울 */}
            <View style={styles.waterDrop}>
                    <Image style={styles.water} source={require('../../assets/images/waterDrop.png')}></Image>
                    <Image style={styles.water} source={require('../../assets/images/waterDrop.png')}></Image>
                    <Image style={styles.water} source={require('../../assets/images/waterDrop.png')}></Image>
            </View>

            {/* 그라데이션 원 */}
            <View style={styles.circle}>
                <LinearGradient
                    colors={['#6190E8', '#87AAE8', '#A7BFE8', 'rgba(97, 144, 232, 0)']}
                    style={styles.linearGradient}
                >
                {/* 프로필 이미지 */}
                <Image
                    source={{
                        uri: 'https://pbs.twimg.com/profile_images/1699364157479587840/w393KS50_400x400.jpg',               
                    }}
                    style={{
                    width: 100, 
                    height: 100,
                    left: 40,
                    top: 20,
                    borderRadius: 50,
                    }}
                />
                </LinearGradient>
            </View>
        </View>

        {/* 메뉴 컨테이너 */}
        <View style={styles.menuContainer}>
            <View style={styles.menu}>
            <Button
                title="내가 올린 물건"
                onPress={() => navigation.navigate("mypage3")}
            />
            </View>
        </View>
        
      </ScrollView>
      
    );
  };
  
  const styles = StyleSheet.create({
    mainContainer: {
        height: 350,
        width: '100%',
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1
    },
    oval: {
        position: 'absolute',
        width: 340,
        height: 240,    
        left: -220,
        top: 38,
        borderRadius: 120,
        transform: [{ scaleX: 2 }],
        backgroundColor: 'rgba(167, 191, 232, 0.76)',
        // zIndex: 1
    },
    logo: {
        color: 'black',
        marginTop: 50,
        marginLeft: 20,
        fontSize: 22
    },
    comment: {
        color: 'black',
        marginTop: 20,
        marginLeft: 20,
        fontSize: 14
    },
    circle: {
        position: 'absolute',
        width: 145,
        height: 145,
        left: 202,
        top: 164,
    },
    linearGradient: {
        flex: 1,
        borderRadius: 145 / 2
    },
    moisture: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 170,
        marginTop: 70,
        marginLeft: 20,
        // borderColor: 'black',
        // borderStyle: 'solid',
        // borderWidth: 1
    },
    waterDrop: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 20,
    },

    menuContainer: {
        width: 220,
        height: 400,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        marginRight: 'auto',
        marginLeft: 'auto'
    }
  });
  
  export default App;
