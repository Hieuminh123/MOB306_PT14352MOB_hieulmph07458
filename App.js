import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Modal, ScrollView, TextInput, Picker, Button } from 'react-native';
import SubjectItem from './subject-item';

export default function App() {

  const [nameLogin, setNameLogin] = useState("");
  const [yearOld, setYearOld] = useState();

  const userProfile = [
    {
      thumbnail: 'http://cdn5.truyentranh8.net/covers/2018/0711/22790-1-van-tu-the.jpg',
      name: ' Một Vạn Tư Thế Công Lược Yêu Nam',
      category: 'Ngôn tình',
      total_chapters: 166,
      is_full: true,
    },
    {
      thumbnail: 'http://cdn5.truyentranh8.net/covers/2020/01-07/kh-ng-c-ti-u-e146-1.png',
      name: 'Nàng Ấy',
      category: 'Lịch sử',
      total_chapters: 22,
      is_full: false,
    },
    {
      thumbnail: 'http://cdn5.truyentranh8.net/covers/2020/03-04/00.jpg',
      name: 'ĐỨA CON CỦA THẦN KIẾM',
      category: 'Thần Thoại',
      total_chapters: 1,
      is_full: true,
    },
    {
      thumbnail: 'http://cdn5.truyentranh8.net/covers/2018/1224/24054-vo-nghich-cuu-thien.jpg',
      name: 'VÕ NGHỊCH CỬU THIÊN ',
      category: 'Kiếm Hiệp',
      total_chapters: 116,
      is_full: false,
    }
    ,
    {
      thumbnail: 'http://cdn5.truyentranh8.net/covers/2016/1121/16714-than-thoai-bac-au.jpg ',
      name: 'Thần Thoại Bắc Âu',
      category: 'Thần Thoại',
      total_chapters: 9,
      is_full: true,
    }
    ,
    {
      thumbnail: 'http://cdn5.truyentranh8.net/covers/2020/0303/27149-ban-trai-dieu-khien-giac-mo.jpg',
      name: 'Bạn Trai Điều Khiển Giấc Mơ',
      category: 'tình cảm',
      total_chapters: 25  ,
      is_full: true,
    }
    ,
    {
      thumbnail: 'http://cdn5.truyentranh8.net/covers/2020/0224/27087-don-t-scream-at-the-monster.jpg',
      name: 'Gia Sư Hoàng Gia',
      category: 'anime  ',
      total_chapters: 1,
      is_full: false,
    }
  ];

  const [user, setUser] = useState(userProfile);
  const [showModal, setShowModal] = useState(true);
  const [login, setLogin] = useState(false);

  const handleDeleteSubject = (name) => {
    // su dung let de co the gan gia tri moi
    let newUser = user;
    // filter ((item) => tra ve dieu kien ma item do se duoc xu ly)
    // sau khi filter xong (chay het vong lap voi dieu kien dua ra) -> tra ve mang moi co cac item thoa man dk
    newUser = newUser.filter((userProfile) => userProfile.name != name);
    setUser(newUser);
  }

  const checkLogin = () => {
    if (user !== "" && yearOld > 18) {
      setLogin(true);
      setShowModal(false)
    } else {
      setLogin(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textNameLogin}>Chào: {nameLogin}</Text>
      <FlatList
        data={user}
        renderItem={({ item }) => (
          <SubjectItem item={item} handleDelete={handleDeleteSubject} />
        )}
        keyExtractor={(item, index) => index}

      />
      <Modal visible={showModal} >
        <ScrollView>


          <View style={styles.modal}>
            <Text style={styles.text} >Nhập thông tin</Text>
            <Text style={styles.textModal} >Tên</Text>
            <TextInput style={styles.input} onChangeText={(valueName) => setNameLogin(valueName)} />

            <Text style={styles.textModal} >Tuổi</Text>
            <TextInput style={styles.input} onChangeText={(yearOld) => setYearOld(yearOld)} />

            <Button
              title="Go"
              onPress={() =>checkLogin()}
            />
          </View>
        </ScrollView>

      </Modal>
    </View>
  );



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30
  },
  textNameLogin: {
    fontSize: 23,
    fontStyle: 'italic'
  },
  textModal: {
    padding: 8,
    margin: 10,
  },
  modal: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,

  },

});
