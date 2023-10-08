import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native'

export default function Screen1() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [name1, setName1] = useState('')
  const [password1, setPassword1] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>LOGIN</Text>

      <Image source={require('../assets/user.png')} style={styles.img} />
      <TextInput
        placeholder="Name"
        onChangeText={setName}
        style={styles.input}
      ></TextInput>

      <Image
        source={require('../assets/Lock.png')}
        style={styles.imgLock}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        style={styles.input}
      ></TextInput>

      <Image source={require('../assets/eye 1.png')} style={styles.imgEyes} />

      <View style={styles.btnLogin}>
        <Button
          title="LOGIN"
          color="#000"
          onPress={() => {
            setName1(name), setPassword1(password)
          }}
        />
      </View>

      <Text style={styles.text2}>For got your password?</Text>

      <Text>NAME: {name1}</Text>
      <Text>PASSWORD: {password1}</Text>

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBCB00',
    alignItems: 'center',
    width: 400
  },
  img: {
    position: 'absolute',
    width: 40,
    height: 35,
    top: 225,
    left: 50
  },
  imgLock: {
    position: 'absolute',
    width: 40,
    height: 35,
    top: 300,
    left: 50
  },
  imgEyes: {
    position: 'absolute',
    width: 30,
    height: 25,
    top: 305,
    left: 300
  },
  btn: {
    flexDirection: 'row',
    marginTop: 30
    // justifyContent: "space-around",
  },
  input: {
    color: '#000',
    paddingVertical: 14,
    paddingLeft: 55,
    backgroundColor: '#f2f2f2',
    borderRadius: 2,
    marginTop: 30,
    width: 305,
    fontWeight: 'bold'
  },
  btnLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 305,
    height: 50,
    backgroundColor: '#060000',
    marginTop: 50,
    borderRadius: 2
  },

  text1: {
    color: '#000',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 40,
    fontWeight: '700',
    margin: 70,
    marginTop: 100,
    marginBottom: 40,
    textAlign: 'center'
  },

  text2: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'medium',
    lineHeight: 35,
    marginTop: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  textLogin: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21
  }
})
