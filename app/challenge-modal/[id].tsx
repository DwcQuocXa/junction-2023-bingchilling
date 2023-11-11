import { router, useGlobalSearchParams } from 'expo-router';
import { ImageBackground } from 'nativewind/dist/preflight';
import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { useAuth } from '../../context/AuthProvider';

const ChallengeModal = () => {
    const { userChallenges, setUserChallenges } = useAuth();
    const params = useGlobalSearchParams();

    const selectedChallenge = userChallenges.find((challenge) => challenge.id === params.id);
    const onQuit = () => {
        setUserChallenges(
            userChallenges.filter((challenge) => challenge.id !== selectedChallenge.id)
        );
        router.back(); // This will navigate to the home screen
    };

    const onDoneButton = () => {
        //TODO: when user finish all challenges
        const remainingChallenges = userChallenges.filter(
            (challenge) => challenge.id !== selectedChallenge.id
        );
        setUserChallenges(remainingChallenges);
        if (remainingChallenges.length === 0) {
            router.replace('/challenge-modal/challenge-offer-modal');
        } else {
            router.back();
        }
    };
    return (
        <ImageBackground
            source={{ uri: selectedChallenge.url }}
            style={styles.item}
            imageStyle={styles.item_image}
        >
            <View style={styles.overlay} />
            <Text style={styles.modalTextTitle}>{selectedChallenge.activity}</Text>
            <Text style={styles.modalTextDescription}>{selectedChallenge.description}</Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.closeButton} onPress={onQuit}>
                    <Text style={styles.textStyle}>Quit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.openButton} onPress={onDoneButton}>
                    <Text style={styles.textStyle}>Done</Text>
                </TouchableOpacity>
            </View>
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
        backgroundColor: '#00FF29',
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

export default ChallengeModal;
