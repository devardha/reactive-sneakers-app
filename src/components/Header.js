import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const Header = () => {
  const logo =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png';

  return (
    <View style={styles.header}>
      <Image source={{uri: logo}} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'notoserif',
  },
  logo: {
    width: 50,
    height: 44,
    overflow: 'visible',
    resizeMode: 'contain',
  },
  header: {
    height: 70,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});

export default Header;
