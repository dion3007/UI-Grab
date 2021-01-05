import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    return (
        <>
            <View style={styles.container}>
                <TouchableHighlight>
                    <View style={styles.barcodeButton}>
                        <Icon name="qrcode" size={30} color="#333333" />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={{ flex: 1 }}>
                    <View style={styles.searchSection}>
                        <Icon name="search" size={20} style={{ padding: 10 }} color="#959696" />
                        <View>
                            <Text style={{color: '#959696'}}>Offers, food, and places to go</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: '#1AAE48',
        flexDirection: 'row'
    },
    barcodeButton: {
        backgroundColor: "#DDDDDD",
        height: 40,
        padding: 5,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#fff',
        height: 40,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    }
});

export default Header;
