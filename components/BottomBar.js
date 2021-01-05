import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import BottomBarItem from './BottomBarComponents/BottomBarItem'

const bottomBarList = [
    { iconName: "compass", title: "Home" },
    { iconName: "list", title: "Activity" },
    { iconName: "tag", title: "Payment" },
    { iconName: "comment", title: "Messages" },
    { iconName: "user", title: "Account" }
]


const BottomBar = () => {
    return (
        <>
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={{flexDirection: 'row'}}
                    data={bottomBarList}
                    renderItem={({item}) => <BottomBarItem iconName={item.iconName} title={item.title} />}
                    keyExtractor={item => item.title}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        width: '100%',
        paddingHorizontal: 5,
        zIndex: 5
    },
});

export default BottomBar;
