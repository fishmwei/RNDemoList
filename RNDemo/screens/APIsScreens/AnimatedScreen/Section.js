import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Section extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.title}</Text>
                {this.props.children}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: { 
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center', 
        paddingVertical: 10
    }
});
 
