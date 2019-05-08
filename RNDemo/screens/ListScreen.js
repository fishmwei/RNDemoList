import React from "react";
import { View, Text } from "react-native";

export default class ListScreen extends React.Component {
    static navigationOptions = {
        title: "功能列表"
    };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Text>Home Screen</Text>
            </View>
        );
    }
}
