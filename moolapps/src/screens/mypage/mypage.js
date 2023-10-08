import React, {useState} from 'react';
import {ScrollView, View, StyleSheet, Text, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";



Date.prototype.format = function(f) {
  if (!this.valueOf()) return " ";

  var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  var d = this;
   
  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
      switch ($1) {
          case "yyyy": return d.getFullYear();
          case "yy": return (d.getFullYear() % 1000).zf(2);
          case "MM": return (d.getMonth() + 1).zf(2);
          case "dd": return d.getDate().zf(2);
          case "E": return weekName[d.getDay()];
          case "HH": return d.getHours().zf(2);
          case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
          case "mm": return d.getMinutes().zf(2);
          case "ss": return d.getSeconds().zf(2);
          case "a/p": return d.getHours() < 12 ? "오전" : "오후";
          default: return $1;
      }
  });
};

String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};


const App = () => {
  //DateTimePicker를 위한 코드
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [text, setText] = useState("");

  const showDatePicker = () => {
      setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
      setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("dateFormat: ", date.format("yyyy/MM/dd"));
    hideDatePicker();
    // onChangeText(date.format("yyyy/MM/dd"));
    setText(date.format("yyyy/MM/dd"));
  };



  return (
    <ScrollView>
        <Text style={styles.title}>회원정보 수정</Text>

        <View style={styles.container1}>
            {/* <View style={{
               width: 110, 
               height: 110, 
               marginBottom: 35,
               borderRadius: 50,
               backgroundColor: 'black',
            }}>
            </View> */}
            <Image
                source={{
                    uri: 'https://pbs.twimg.com/profile_images/1699364157479587840/w393KS50_400x400.jpg',               
                  }}
                style={{
                  width: 110, 
                  height: 110, 
                  marginBottom: 35,
                  borderRadius: 50,
                }}
            />
        </View>

        <View style={styles.container2}>
            <Text style={styles.subject}>이름</Text>
            <TextInput 
                style={styles.TextInput}
                // defaultValue="You can type in me"
            />

            {/* 닉네임 중복 확인 할 것 */}
            <Text style={styles.subject}>닉네임</Text>
            <TextInput
                style={styles.TextInput}
                // defaultValue="You can type in me"
            />

            <Text style={styles.subject}>생일</Text>
            <TouchableOpacity onPress={showDatePicker}>
                <TextInput  
                    pointerEvents="none"
                    style={styles.TextInput}
                    placeholder="YY-MM-DD"
                    placeholderTextColor="gray"
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={text}          
                />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </TouchableOpacity>
            

            {/* 유효성 검사 + 이메일 인증 */}
            <Text style={styles.subject}>이메일</Text>
            <TextInput
                style={styles.TextInput}
                // defaultValue="You can type in me"
            />

            <Text style={styles.subject}>전화번호</Text>
            <TextInput
                style={styles.TextInput}
                // defaultValue=""
            />

            {/* 영문, 숫자, 특수문자 조합 8자리 이상(유효성 검사) + 암호화 + 일치, 불일치 확인 */}
            <Text style={styles.subject}>비밀번호</Text>
            <TextInput
                style={styles.TextInput}
                defaultValue="영문, 숫자, 특수문자 조합 8자리 이상"
                placeholderTextColor="gray"
            />
        </View>


        <View style={styles.container3}>
            <Text style={styles.saveBotton}>저장하기</Text>
            <MyButton/>
        </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: 'black',
    marginTop: 50,
    marginBottom: 30,
    marginLeft: 50,
    fontWeight: 'bold'
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container2: {
    flex:1 ,
    width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 50,
  },
  subject: {
    fontSize: 12,
    marginBottom: 8,
    color: 'black',
    marginLeft: '20%',
    fontWeight: 'bold'
  },
  TextInput: {
    width: 247,
    height: 32,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    fontSize: 10,
    textAlignVertical: 'center',
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    color: '#000000'
  },
  container3: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveBotton: {
    flex:1 ,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#A7BFE8',
    width: 247,
    height: 36,
    borderRadius: 10,
    marginBottom: 50,
    color: 'black',
    fontWeight: 'bold'
  },
});

export default App;