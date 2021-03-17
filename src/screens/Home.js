import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import MainBanner from '../components/home/MainBanner';
import ProductList from '../components/products/ProductList';
import {connect} from 'react-redux';

const Home = ({navigation, products}) => {
    return (
        <View>
            <ScrollView contentContainerStyle={styles.container}>
                <MainBanner />
                <ProductList products={products} navigation={navigation} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 12,
    },
});

const mapStateToProps = state => {
    return {
        products: state.products.products,
    };
};

export default connect(mapStateToProps)(Home);
