import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PromotedItem = (props) => {
    return (
        <>
            <View style={styles.container}>
                <Image
                    style={{ width: 170, height: 170 }}
                    source={{
                        uri: `${props.uri}`,
                    }}
                />
                <Text style={{ color: '#000', fontSize: 20, fontWeight: '700', marginBottom: 5 }}>{props.subTitle}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name="calendar" size={15} color="#959696" />
                    <Text style={{marginStart: 5}}>Exp {props.exp}</Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        marginHorizontal: 5,
        zIndex: 10
    },
});

export default PromotedItem;
