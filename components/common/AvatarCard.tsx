import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface AvatarCardParams {
    avatarUrl: string;
    name: string;
}

const AvatarCard = ({ avatarUrl, name }: AvatarCardParams) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: avatarUrl }} style={styles.avatar} />
            <Text style={styles.name}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#F0F0F0', // Replace with the correct background color
        borderRadius: 20, // Adjust for proper rounding
        padding: 10, // Adjust padding as needed
    },
    avatar: {
        width: 100, // Set the width as needed
        height: 100, // Set the height as needed
        borderRadius: 50, // This should be half of width/height to make it round
    },
    name: {
        marginTop: 8, // Adjust the spacing as needed
        fontSize: 16, // Adjust the font size as needed
        color: '#000', // Adjust the font color as needed
        fontWeight: 'bold', // Adjust as needed
    },
});

export default AvatarCard;
