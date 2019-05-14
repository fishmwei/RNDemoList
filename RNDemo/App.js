/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import screens from './screens';
import AnimatedScreen from './screens/APIsScreens/AnimatedScreen';
import { StackNavigator } from "react-navigation"; 

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
export default StackNavigator(
    getScreenConfig(screens),
    {
        initialRouteName: screens[0].screenName
    }
);

 
