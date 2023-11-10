import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

import { COLORS } from '../../constants';

type Props = {
    imageUrl?: string;
    iconName?: any;
    handlePress?: any;
};

const ScreenHeaderBtn = ({ imageUrl, iconName, handlePress }: Props) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
            {imageUrl && (
                <Image source={{ uri: imageUrl }} resizeMode="cover" style={styles.btnImg} />
            )}
            {iconName && !imageUrl && <Ionicons name={iconName} size={24} color="black" />}
        </TouchableOpacity>
    );
};

export default ScreenHeaderBtn;

const styles = StyleSheet.create({
    btnContainer: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnImg: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    /*btnImg: (dimension) => ({
        width: dimension,
        height: dimension,
        borderRadius: SIZES.small / 1.25,
    }),*/
});
