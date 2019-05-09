import React from "react";  
import { SectionList, View,  StyleSheet } from 'react-native';
import BaseScreen from '../../BaseScreen';
import {getScreenName} from '../../../tools';

import Svg,{
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';



export default class SvgScreen extends BaseScreen {
    static navigationOptions = {
        title: "SvgScreen"
    };

    static description = 'react-native-svg';
    static screenName = getScreenName('lib', 'SvgScreen');

    render() {
        return (
            <View
              style={[
                StyleSheet.absoluteFill,
                { alignItems: 'center', justifyContent: 'center' },
              ]}>
              <Svg height="100" width="100" viewBox="0 0 100 100">
                <Circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="blue"
                  strokeWidth="2.5"
                  fill="green"
                />
                <Rect
                  x="15"
                  y="15"
                  width="70"
                  height="70"
                  stroke="red"
                  strokeWidth="2"
                  fill="yellow"
                />
              </Svg>
            </View>
          );
    }
}