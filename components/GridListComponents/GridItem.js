import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const BottomBarItem = (props) => {
    return (
        <>
            <View style={styles.container}>
                <Image
                    style={{width: 50, height: 50}}
                    source={{
                        uri: `${props.uri}`,
                    }}
                />
                <Text style={{ color: '#959696', fontSize: 14 }}>{props.title}</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 100,
        paddingVertical: 10,
        zIndex: 10
    },
});

export default BottomBarItem;
