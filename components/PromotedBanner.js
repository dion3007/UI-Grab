import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const PromotedBanner = () => {
    return (
        <>
            <View style={styles.container}>
                <Image
                    style={{ width: '100%', height: 200, borderRadius: 5, marginBottom: 10}}
                    source={{
                        uri: 'https://img.freepik.com/free-psd/horizontal-banner-template-black-friday-clearance_23-2148745446.jpg?size=626&ext=jpg&ga=GA1.2.1325494333.1609372800',
                    }}
                />
                <Text style={{fontWeight: 'bold', fontSize: 15}}>Pesan Sekarang Dapat Diskon Up to 60%</Text>
                <Text style={{fontSize: 10}}>Sponsored By Make Up</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginVertical: 20
    },
});

export default PromotedBanner;
