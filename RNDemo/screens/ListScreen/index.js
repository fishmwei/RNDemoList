import React from "react";  
import { SectionList, View, Text, StyleSheet } from 'react-native';

import sectionDatas from './data';
import ItemView from './ListItem';

export default class ListScreen extends React.Component {
    static navigationOptions = {
        title: "功能列表",
        headerBackTitle:null
    };

    static screenName = 'ListScreen';

    constructor(props) {
        super(props);
    }

    /**
     * 页面跳转
     *
     * @memberof ListScreen
     */
    onPressItem = (item) => {
        this.props.navigation.navigate(item.screenName);
    }

    /**
     * 渲染item
     * @param {} param0 
     */
    renderItem({ item, index, section }) {
        return (
            <ItemView
                key={index}
                item={item}
                section={section}
                onPress={this.onPressItem}
            />
        );
    }

    /**
     * 渲染section头部
     * @param {} param0 
     */
    renderSectionHeader({ section: { title, data } }) {
        if (!data || data.length <= 0) {
            return ;
        }

        return (
            <View style={styles.sectionHeader}>
                <Text style={{ fontWeight: 'bold' }}>{title}</Text>
            </View>
        );
    }

    /**
     * 分割线
     */
    itemSeparator() {
        return <View style={styles.sepLine} />;
    }

    render() {
        return (
            <SectionList
                renderItem={this.renderItem.bind(this)}
                renderSectionHeader={this.renderSectionHeader.bind(this)}
                sections={sectionDatas}
                ItemSeparatorComponent={this.itemSeparator.bind(this)}
                SectionSeparatorComponent={this.itemSeparator.bind(this)}
                stickySectionHeadersEnabled={true}
                keyExtractor={(item, index) => item + index}
            />
        );
    }
}


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