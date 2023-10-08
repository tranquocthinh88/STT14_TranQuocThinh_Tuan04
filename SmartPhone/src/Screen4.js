import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

export default function Screen4() {
    const [quantity, setQuantity] = useState(1);
    const [amount, setAmount] = useState(141800);
    function increase() {
        let quantityIncrease = quantity;
        let amountIncrease = amount;
        setQuantity(++quantityIncrease);
        setAmount(amountIncrease + 141800);
    }
    function decrease() {
        let quantityDecrease = quantity;
        let amountDecrease = amount;
        if(quantityDecrease > 1) {
            setQuantity(--quantityDecrease);
            setAmount(amountDecrease - 141800);
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.above}>
                <View style={styles.view1}>
                    <Image style={styles.img} source={require('../assets/book.png')}></Image>
                    <View>
                        <Text style={styles.txt}>Nguyên hàm tích phân và ứng dụng</Text>
                        <Text style={styles.txt}>Cung cấp bởi Tiki Trading</Text>
                        <Text style={{color: 'red', fontWeight: 'bold', marginLeft: 10, marginTop: 5, fontSize: 20}}>141.800 đ</Text>
                        <Text style={styles.strikethroughText}>141.800 đ</Text>
                        <View style={[styles.view1, {marginTop: 10}]}>
                            <TouchableOpacity style={styles.btn1} onPress={decrease}><Text style={{fontWeight: 'bold'}}>-</Text></TouchableOpacity>
                            <Text style={{marginLeft: 10}}>{quantity}</Text>
                            <TouchableOpacity style={styles.btn1} onPress={increase}><Text>+</Text></TouchableOpacity>
                            <Text style={{marginLeft: 100, fontWeight: 'bold', color: 'blue'}}>Mua sau</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.view1}>
                    <Text style={{marginLeft: 15, fontWeight: 'bold'}}>Mã giảm giá đã lưu</Text>
                    <Text style={{marginLeft: 15, fontWeight: 'bold', color: 'blue'}}>Xem tại đây</Text>
                </View>

                <View style={[styles.view1, {marginLeft: 15, marginTop: 20}]}>
                    <View style={[styles.view1, styles.discount]}>
                        <Text style={{width: 30, height: 20, backgroundColor: 'yellow'}}></Text>
                        <TextInput placeholder='Mã giảm giá' style={{height: 40, marginLeft: 10, fontWeight: 'bold', width: 150}}></TextInput>
                    </View>
                    <TouchableOpacity style={styles.btn2}><Text style={{fontWeight: 'bold', color: '#fff'}}>Áp dụng</Text></TouchableOpacity>
                </View>
                    
            </View>

            <View style={styles.center1}>
                <Text style={{fontWeight: 'bold', marginLeft: 15, marginRight: 10}}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
                <Text style={{fontWeight: 'bold', color: 'blue'}}>Nhập tại đây?</Text>
            </View>

            <View style={styles.center2}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Tạm tính</Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'red'}}>{amount.toLocaleString('vi-VN', 
                {style: 'currency', currency: 'VND'})}</Text>
            </View>
            <View style={styles.below}>
                <View style={[styles.view1, styles.view2]}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, color: 'gray'}}>Thành tiền</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 20, color: 'red'}}>{amount.toLocaleString('vi-VN', 
                    {style: 'currency', currency: 'VND'})}</Text>
                </View>
                <TouchableOpacity style={styles.btn3}><Text style={{fontWeight: 'bold', color: '#fff', fontSize: 20}}>TIẾN HÀNH ĐẶT HÀNG</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#c4c4c4'
    },
    above: {
        width: '100%',
        height: 260,
        backgroundColor: '#fff'
    },
    center1: {
        width: '100%',
        height: 40,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    center2: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        marginBottom: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15
        
    },
    below: {
        width: '100%',
        height: 120,
        backgroundColor: '#fff'
    },
    strikethroughText: {
        textDecorationLine: 'line-through',
        color: 'gray',
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 5
    },
    view1: {
        flexDirection: 'row',
    },
    img: {
        width: 110,
        height: 135,
        margin: 15  
    },
    txt: {
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 10
    },
    btn1: {
        width: 20,
        height: 20,
        backgroundColor: 'gray',
        justifyContent: 'center',
        marginLeft: 10,
        alignItems: 'center'
        
    },
    discount: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        height: 40,
        width: 220,
        padding: 10
    },
    btn2: {
        marginLeft: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 40,
        backgroundColor: '#0a5eb7'
    },
    btn3: {
        backgroundColor: '#e53935',
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        height: 50,
        marginLeft: 20
    },
    view2: {
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginVertical: 15
    }
});