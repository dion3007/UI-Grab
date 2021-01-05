import React from 'react';
import { View, StyleSheet, Text, FlatList, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import GridItem from './GridListComponents/GridItem'

const gridItems = [
    { uri: "https://assets.grab.com/wp-content/uploads/sites/12/2020/08/03205933/18.-NBA-Mart-icon_Frozen.png", title: "Food" },
    { uri: "https://assets.grab.com/wp-content/uploads/sites/10/2020/05/27153527/GrabGroceries_Tile_Icon_501x501.png", title: "Mart" },
    { uri: "https://assets.grab.com/wp-content/uploads/sites/12/2020/02/06174432/ICON_illustrations_06-25.png", title: "Express" },
    { uri: "https://assets.grab.com/wp-content/uploads/sites/11/2020/04/07143827/GrabMart-icon-52.png", title: "Pulsa/Token" },
    { uri: "https://pngimage.net/wp-content/uploads/2018/06/grab-car-png-5.png", title: "Car" },
    { uri: "https://assets.grab.com/wp-content/uploads/sites/4/2019/09/19160251/01A-icon-transport-bike.png", title: "Bike" },
    { uri: "https://healthbenefits.net/wp-content/uploads/2016/06/individual-insurance.png", title: "Insurance" },
    { uri: "https://icon-library.com/images/and-more-icon/and-more-icon-16.jpg", title: "More" },
]


const GridList = () => {
    return (
        <>
            <View style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <View style={styles.GridButtonTitle}>
                    <Icon name="tag" size={20} color="#959696" />
                    <Text style={{ fontWeight: 'bold', marginHorizontal: 5 }}>Top Up</Text>
                    <Text>Wallet</Text>
                </View>
            </View>
            <SafeAreaView style={{borderBottomWidth: 0.5, borderBottomColor: "#959696", paddingVertical: 10}}>
                <FlatList
                    columnWrapperStyle={{ justifyContent: 'center' }}
                    numColumns={4}
                    horizontal={false}
                    data={gridItems}
                    renderItem={({ item }) => <GridItem uri={item.uri} title={item.title} />}
                    keyExtractor={item => item.title}
                />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    GridButtonTitle: {
        flexDirection: 'row',
        padding: 15,
        borderRadius: 4,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.58,
        shadowRadius: 12.00,
        elevation: 1,
    },
});

export default GridList;
