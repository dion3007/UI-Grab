import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SubHeader = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.childContainer}>
                    <Image
                        style={{ width: 20, height: 20, marginEnd: 10 }}
                        source={{
                            uri: 'https://patriambs.com/img?file=iconproduk/icon_ovo.png',
                        }}
                    />
                    <Text>IDR 27.000.000</Text>
                    <Icon style={{marginStart: 5}} name="chevron-right" size={12} color="#959696" />
                </View>
                <View style={styles.childContainer}>
                    <Image
                        style={{ width: 40, height: 20, marginEnd: 10 }}
                        source={{
                            uri: 'https://lovinatours.com/wp-content/uploads/2019/11/OVO.png',
                        }}
                    />
                    <Text>100,000 Points</Text>
                    <Icon style={{marginStart: 5}} name="chevron-right" size={12} color="#959696" />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#d9dbda',
    },
    childContainer: {
        flexDirection: 'row',
        flex: 1,
        paddingHorizontal: 20,
        borderRightWidth: 1,
        borderRightColor: '#d9dbda',
        alignItems: 'center',
    }
});

export default SubHeader;
