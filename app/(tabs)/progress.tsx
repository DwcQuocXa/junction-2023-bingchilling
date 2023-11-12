import React from 'react';
import { StyleSheet, Image } from 'react-native';

const Progress = () => {
    return <Image source={require('../../assets/images/progress.png')} style={styles.image} />;
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export default Progress;
