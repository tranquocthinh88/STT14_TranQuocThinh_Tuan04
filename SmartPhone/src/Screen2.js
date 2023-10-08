import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, button, Pressable, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react'

export default function Screen2() {
    const [input, setInput] = useState('')
    return (
        <View style={styles.wrap}>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Image style={styles.img} source={require("../assets/usb.png")} />
                    <Text style={styles.titleOn}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
                </View>
                <Text style={styles.text}>Cực kỳ hài lòng</Text>
                <View style={styles.image}>
                    <Image style={styles.img1} source={require("../assets/Star.png")} />
                    <Image style={styles.img2} source={require("../assets/Star.png")} />
                    <Image style={styles.img3} source={require("../assets/Star.png")} />
                    <Image style={styles.img4} source={require("../assets/Star.png")} />
                    <Image style={styles.img5} source={require("../assets/Star.png")} />
                </View>

                <TouchableOpacity style={styles.buttonclick}>
                    <Image style={styles.img6} source={require('../assets/camera.png')}/>
                    <Text style={styles.textBtn}>Thêm hình ảnh</Text>
                </TouchableOpacity>

                
                <TextInput style={styles.input1} placeholder='Hãy chia sẻ những điều mà bạn thích về sản phẩm' 
                multiline = {true}   
                placeholderTextColor='gray'
                value={input}  
                onChangeText={(text) => setInput(text)} 
                />
                <View style={styles.button}>
                    <Pressable style={styles.button1}>
                        <Text style={styles.buttonClick}>Gửi</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        fontFamily: 'Arial',
    },
    buttonclick: {
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: 'blue',
        width: 330,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    textBtn: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10
    },
    input1: {
        width: 330,
        borderRadius: 5,
        padding: 1,
        marginTop: 20,
        height: 180,
        marginLeft: 5,
        border: '1px solid gray',
    },
    img: {
        marginTop: 20,
        width: '70px',
        height: '70px',
        marginLeft: 25,
        resizeMode: 'contain',
    },
    img1: {
        width: '39px',
        height: '39px',
        marginTop: 25,
        marginLeft: 30,
    },
    img2: {
        width: '39px',
        height: '39px',
        marginTop: 25,

    },
    img3: {
        width: '39px',
        height: '39px',
        marginTop: 25,
    },
    img4: {
        width: '39px',
        height: '39px',
        marginTop: 25,
    },
    img5: {
        width: '39px',
        height: '39px',
        marginTop: 25,
        marginRight: 30,
    },
    img6: {
        width: '39px',
        height: '32px'
    },
    image: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    wrap: {
        flex: 1
    },
    title: {
        flexDirection: 'row'
    },
    titleOn: {
        fontSize: 16.6,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 25,
        marginLeft: 18.7,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
    },
    button: {
        justifyContent: 'space-between'
    },
    button1: {
        backgroundColor: '#105cb4',
        marginTop: 20,
        borderRadius: 1,
        width: 300,
        fontWeight: '300',
        // justifyContent: 'center'
        marginLeft: 5
    },
    buttonClick: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        padding: 10,
        fontWeight: '700',
    },
});
