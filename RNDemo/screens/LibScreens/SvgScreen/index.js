import React from "react";  
import { SectionList, View,  StyleSheet } from 'react-native';
import BaseScreen from '../../BaseScreen';
import {getScreenName} from '../../../tools';
import SvgUri from 'react-native-svg-uri';

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

    static description = 'svg test';
    static screenName = getScreenName('lib', 'SvgScreen');

    render() {
        return (
            <View
              style={[
                StyleSheet.absoluteFill,
                { alignItems: 'center', justifyContent: 'center' },
              ]}>
              <View style={{flex:1}}> 
                <Svg height="200" width="300" viewBox="0 0 300 200">
                    <Text
                        fill="none"
                        stroke="purple"
                        fontSize="20"
                        fontWeight="bold"
                        x="100"
                        y="15"
                        textAnchor="middle"
                    >  react-native-svg </Text>
                    <Circle
                        cx="100"
                        cy="100"
                        r="45"
                        stroke="blue"
                        strokeWidth="2.5"
                        fill="green"
                    />
                    <Rect
                        x="65"
                        y="65"
                        width="70"
                        height="70"
                        stroke="red"
                        strokeWidth="2"
                        fill="yellow"
                    />
                </Svg>
              </View>
              <View style={{flex:1}}> 
              <Svg height="50" width="300" viewBox="0 0 300 50">
              <Text
                  fill="none"
                  stroke="purple"
                  fontSize="20"
                  fontWeight="bold"
                  x="100"
                  y="15"
                  textAnchor="middle"
              >  react-native-svg-uri </Text>
              </Svg>
                <SvgUri
                    width="200"
                    height="200"
                    source={{uri:'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'}}
                />
              </View>
              
            </View>
          );
    }
}