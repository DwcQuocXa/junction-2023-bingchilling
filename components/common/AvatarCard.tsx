import { useRouter } from 'expo-router';
import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface AvatarCardParams {
    id: string;
    avatarUrl: string;
    name: string;
}

const AvatarCard = ({ id, avatarUrl, name }: AvatarCardParams) => {
    const router = useRouter();
    const onChooseReceiver = () => {
        router.push(`/send-challenge/select/${id}`);
    };
    return (
        <TouchableOpacity style={styles.container} onPress={onChooseReceiver}>
            <Image source={{ uri: avatarUrl }} style={styles.avatar} />
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
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
