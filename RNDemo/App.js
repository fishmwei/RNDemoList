/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import screens from './screens';
import AnimatedScreen from './screens/APIsScreens/AnimatedScreen';
import { createStackNavigator as StackNavigator, createAppContainer } from "react-navigation"; 

function getScreenConfig(allScreens) {
    let ret = {};
    allScreens.map((item, index)=>{
        if (!item.screenName) {
            console.warn('missed screenName, ', item);
            return;
        }

        Object.assign(ret, {[item.screenName] : item});
    })

    return ret;
}

// 使用指定屏幕为首屏
export default createAppContainer(StackNavigator(
    getScreenConfig(screens),
    {
        initialRouteName: screens[0].screenName
    }
));

// import React from "react";  
// import { View, Text, StyleSheet } from 'react-native';

// export default class BaseScreen extends React.Component {
//     static navigationOptions = {
//         title: "功能列表"
//     };

//     static description = '未定义';
//     static screenName = 'BaseScreen';
 
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>请实现render方法</Text>
//             </View>
//         );
//     }
// }


// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         backgroundColor: 'gray'
//     }
// }); 