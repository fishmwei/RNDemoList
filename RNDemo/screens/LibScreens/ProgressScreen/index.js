import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import BaseScreen from '../../BaseScreen';
import { getScreenName } from '../../../tools';
import * as Progress from 'react-native-progress';

export default class ProgressScreen extends BaseScreen {
    static navigationOptions = {
        title: 'ProgressScreen'
    };

    static description = 'react-native-progress demo';
    static screenName = getScreenName('lib', 'ProgressScreen');

    constructor(props) {
        super(props);

        this.state = {
            bar: 0.3
        };
    }


    render() {
        return (
            <View
                style={[
                    StyleSheet.absoluteFill,
                    { alignItems: 'center', justifyContent: 'center' }
                ]}
            >
                <Text>testA</Text>
                <Progress.Bar progress={this.state.bar} width={200} height={20} />
                <Button title="increase" onPress={()=>{
                    let bar = this.state.bar + 0.1;
                    if (bar > 1.0) {
                        bar = 0;
                    }

                    this.setState({
                        bar
                    });
                }}></Button>

                <Progress.Pie progress={0.4} size={50} />
                <Progress.Circle size={30} indeterminate={true} />
                <Progress.CircleSnail color={['red', 'green', 'blue']} />
            </View>
        );
    }
}
