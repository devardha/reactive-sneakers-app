import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Feather';

const ProductHeader = ({navigation}) => {
    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.fill}>
                    <EntypoIcon
                        name="chevron-left"
                        size={32}
                        color="#000"
                        style={styles.iconBack}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <EntypoIcon
                        name="share-2"
                        size={24}
                        color="#000"
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <EntypoIcon
                        name="more-vertical"
                        size={26}
                        color="#000"
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        marginLeft: 24,
        backgroundColor: '#fff',
    },
    fill: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
    },
    iconBack: {
        marginRight: 20,
    },
    container: {
        alignSelf: 'center',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default ProductHeader;
