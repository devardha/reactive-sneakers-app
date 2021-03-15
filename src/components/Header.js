import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 21.5,
    resizeMode: 'cover',
    marginLeft: 'auto',
  },
  container: {
    alignSelf: 'center',
  },
});

export default Header;
