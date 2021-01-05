import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomBarItem = (props) => {
    return (
        <>
            <View style={styles.container}>
                <Icon name={props.iconName} size={20} color="#959696" />
                <Text style={{color: '#959696', fontSize: 12}}>{props.title}</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,
        zIndex: 10
    },
});

export default BottomBarItem;
