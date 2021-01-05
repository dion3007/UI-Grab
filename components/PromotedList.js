import React from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import PromotedItem from './PromotedListComponent/PromotedItem'

{/* 
    harusnya saya disini mengunakan sectionList
    tapi karena keterbatasan waktu 
    jadi tak saya gunakan 
*/}

const PromotedListData = [
    { uri: "https://i.pinimg.com/originals/e1/29/c7/e129c7239a6274dcce25883686286255.png", subTitle: "Promo 1", exp: '17 Jan' },
    { uri: "https://i.pinimg.com/originals/e1/29/c7/e129c7239a6274dcce25883686286255.png", subTitle: "Promo 13", exp: '18 Jan' },
]

const PromotedListData2 = [
    { uri: "https://i.pinimg.com/originals/e1/29/c7/e129c7239a6274dcce25883686286255.png", subTitle: "Promo 1", exp: '17 Jan' },
    { uri: "https://i.pinimg.com/originals/e1/29/c7/e129c7239a6274dcce25883686286255.png", subTitle: "Promo 2", exp: '18 Jan' },
    { uri: "https://i.pinimg.com/originals/e1/29/c7/e129c7239a6274dcce25883686286255.png", subTitle: "Promo 3", exp: '18 Jan' },
    { uri: "https://i.pinimg.com/originals/e1/29/c7/e129c7239a6274dcce25883686286255.png", subTitle: "Promo 4", exp: '18 Jan' },
    { uri: "https://i.pinimg.com/originals/e1/29/c7/e129c7239a6274dcce25883686286255.png", subTitle: "Promo 5", exp: '18 Jan' },
    { uri: "https://i.pinimg.com/originals/e1/29/c7/e129c7239a6274dcce25883686286255.png", subTitle: "Promo 6", exp: '18 Jan' },
    { uri: "https://i.pinimg.com/originals/e1/29/c7/e129c7239a6274dcce25883686286255.png", subTitle: "Promo 7", exp: '18 Jan' },
    { uri: "https://i.pinimg.com/originals/e1/29/c7/e129c7239a6274dcce25883686286255.png", subTitle: "Promo 8", exp: '18 Jan' },
    { uri: "https://i.pinimg.com/originals/e1/29/c7/e129c7239a6274dcce25883686286255.png", subTitle: "Promo 9", exp: '18 Jan' },
    { uri: "https://i.pinimg.com/originals/e1/29/c7/e129c7239a6274dcce25883686286255.png", subTitle: "Promo 0", exp: '18 Jan' },
    { uri: "https://i.pinimg.com/originals/e1/29/c7/e129c7239a6274dcce25883686286255.png", subTitle: "Promo 12", exp: '18 Jan' },
    { uri: "https://i.pinimg.com/originals/e1/29/c7/e129c7239a6274dcce25883686286255.png", subTitle: "Promo 2", exp: '18 Jan' },
    { uri: "https://i.pinimg.com/originals/e1/29/c7/e129c7239a6274dcce25883686286255.png", subTitle: "Promo 3", exp: '18 Jan' },
    { uri: "https://i.pinimg.com/originals/e1/29/c7/e129c7239a6274dcce25883686286255.png", subTitle: "Promo 4", exp: '18 Jan' },
]


const PromotedList = () => {
    return (
        <>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: '700' }}>Cek yang baru di tahun baru</Text>
                <SafeAreaView>
                    <FlatList
                        columnWrapperStyle={{ justifyContent: 'center' }}
                        data={PromotedListData}
                        numColumns={2}
                        horizontal={false}
                        renderItem={({ item }) => <PromotedItem uri={item.uri} subTitle={item.subTitle} exp={item.exp} />}
                        keyExtractor={(item, index) => item.subTitle + index}
                    />
                </SafeAreaView>
                <Text style={{ fontSize: 20, fontWeight: '700' }}>Promo Lainnya</Text>
                <SafeAreaView>
                    <FlatList
                        columnWrapperStyle={{ justifyContent: 'center' }}
                        data={PromotedListData2}
                        numColumns={2}
                        horizontal={false}
                        renderItem={({ item }) => <PromotedItem uri={item.uri} subTitle={item.subTitle} exp={item.exp} />}
                        keyExtractor={(item, index) => item.subTitle + index}
                    />
                </SafeAreaView>
            </View>
        </>
    );
};

export default PromotedList;
