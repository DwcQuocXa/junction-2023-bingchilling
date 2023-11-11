import { router, useGlobalSearchParams } from 'expo-router';
import { ImageBackground } from 'nativewind/dist/preflight';
import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { useAuth } from '../../context/AuthProvider';

const ChallengeOfferModal = () => {
    const params = useGlobalSearchParams();
    const { setUser, user } = useAuth();

    const onChallengeFriends = () => {
        router.replace('/send-challenge');
    };

    const dummyImageUrl =
        'https://cdn.leonardo.ai/users/154e3741-deff-4366-a831-5b69912fba62/generations/1fa728cc-6573-41de-be38-022ce426dcfd/3D_Animation_Style_Create_an_image_of_A_20_Male_with_black_sho_0.jpg';

    return (
        <ImageBackground
            source={{ uri: user?.avatarUrl ? user.avatarUrl : dummyImageUrl }}
            style={styles.item}
            imageStyle={styles.item_image}
        >
            <View style={styles.overlay} />
            <Text style={styles.modalTextTitle}>SUPER ACTIVE</Text>
            <Text style={styles.modalTextDescription}>
                Seems like some of your friends are inactive, challenge them something fun to do
            </Text>

            <TouchableOpacity style={styles.openButton} onPress={onChallengeFriends}>
                <Text style={styles.textStyle}>Challenge Friends</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalTitle: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 26,
    },
    modalImage: {
        width: 200, // Set this to the size you need
        height: 200, // Set this to the size you need
        resizeMode: 'contain',
    },
    modalTextTitle: {
        color: 'white',
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
    },
    modalTextDescription: {
        color: 'white',
        marginBottom: 15,
        textAlign: 'center',
    },
    openButton: {
        backgroundColor: '#0085FF',
        borderRadius: 20,
        padding: 15,
        elevation: 2,
    },
    closeButton: {
        backgroundColor: '#FF0101',
        borderRadius: 20,
        padding: 15,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    item: {
        flex: 1,
        height: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item_image: {
        resizeMode: 'cover',
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    item_text: {
        fontSize: 16,
        color: 'white',
        padding: 10,
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        borderRadius: 10,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adjust the opacity (last value) for darkness
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 30,
    },
});

export default ChallengeOfferModal;
