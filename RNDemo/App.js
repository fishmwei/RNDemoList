/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import ListScreen from "./screens/ListScreen";
import { StackNavigator } from "react-navigation";

export default StackNavigator({
    ListScreen: {
        screen: ListScreen
    }
});
