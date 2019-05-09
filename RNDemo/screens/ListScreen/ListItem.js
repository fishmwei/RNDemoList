/*
 * @Author: huangmingwei 
 * @Date: 2018-08-20 15:57:35 
 * @Last Modified by: hmw
 * @Last Modified time: 2019-05-09 10:51:44
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class ItemView extends Component {
    constructor(props) {
        super(props);
    }

    onPress = () => {
        if (this.props.onPress) {
            this.props.onPress(this.props.item);
        }
    };

    render() {
        return (
            <TouchableOpacity onPress={this.onPress}>
                <View style={styles.itemRow}>
                    <Text>{this.props.item.description}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

module.exports = ItemView;

const styles = StyleSheet.create({
    sectionHeader: {
        height: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#F5FCFF'
    },
    itemRow: {
        height: 44,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    sepLine: {
        backgroundColor: 'lightgray',
        height: 1
    }
});
