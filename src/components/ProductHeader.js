import React from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';

const ProductHeader = ({navigation}) => {
    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntIcon
                        name="arrowleft"
                        size={26}
                        color="#000"
                        style={styles.iconBack}
                    />
                </TouchableOpacity>
                <TextInput style={styles.searchInput} placeholder="Search..." />
                <TouchableOpacity>
                    <Icon
                        name="magnifier"
                        size={20}
                        color="#000"
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bag}>
                    <Icon
                        name="envelope"
                        size={20}
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
    },
    iconBack: {
        marginRight: 20,
    },
    searchInput: {
        height: 40,
        borderWidth: 1,
        flex: 1,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderColor: '#ddd',
        backgroundColor: '#fcfcfc',
    },
    bag: {
        position: 'relative',
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
