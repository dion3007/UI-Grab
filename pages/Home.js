import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Header from '../components/Header'
import BottomBar from '../components/BottomBar'
import SubHeader from '../components/SubHeader';
import GridList from '../components/GridList';
import PromotedBanner from '../components/PromotedBanner';
import PromotedList from '../components/PromotedList';

const Home = () => {
    return (
        <>
            <ScrollView style={{ height: '100%' }}>
                <Header />
                <SubHeader />
                <GridList />
                <PromotedBanner />
                <PromotedList />
                <View style={{height: 100}}>
                    <Text style={{ textAlign: 'center', fontSize: 10 }}>
                        That's all for now!
                    </Text>
                </View>
            </ScrollView>
            <BottomBar />
        </>
    );
};

export default Home;
