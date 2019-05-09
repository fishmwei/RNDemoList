import React from "react";  
import { View, Text, StyleSheet } from 'react-native';

export default class BaseScreen extends React.Component {
    static navigationOptions = {
        title: "功能列表"
    };

    static description = '未定义';
    static screenName = 'BaseScreen';
 
    render() {
        return (
            <View style={styles.container}>
                <Text>请实现render方法</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'gray'
    }
});