import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const index = ({ navigation }) => {
    return (
        <View style={styles.btn}>
            <Button
                title="Screen1"
                onPress={() => navigation.navigate("Screen1")} />
            <Button
                title="Screen2"
                onPress={() => navigation.navigate("Screen2")}
            />
            <Button
                title="Screen3"
                onPress={() => navigation.navigate("Screen3")} />
            <Button
                title="Screen4"
                onPress={() => navigation.navigate("Screen4")} />
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        textAlign: "center",
    },
});

export default index;