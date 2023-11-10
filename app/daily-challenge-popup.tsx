import { router } from 'expo-router';
import React from 'react';
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const DailyChallengePopup = ({ isVisible }) => {
    const onClose = () => {
        router.back(); // This will navigate to the home screen
    };
    return (
        <Modal animationType="slide" transparent visible={isVisible} onRequestClose={onClose}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        {/* Replace with an X icon image or use a text 'X' or use an icon library */}
                        <Text style={styles.textStyle}>X</Text>
                    </TouchableOpacity>
                    <Text style={styles.modalTitle}>DAILY CHALLENGE</Text>
                    <Image
                        source={{
                            uri: 'https://cdn.leonardo.ai/users/154e3741-deff-4366-a831-5b69912fba62/generations/1fa728cc-6573-41de-be38-022ce426dcfd/3D_Animation_Style_Create_an_image_of_A_20_Male_with_black_sho_0.jpg',
                        }} // Replace with your image URL
                        style={styles.modalImage}
                    />
                    <Text style={styles.modalTextTitle}>It's time for cycling</Text>
                    <Text style={styles.modalTextDescription}>
                        It is sunny outside, let's do some cardio with your friends or family to
                        stay active.
                    </Text>
                    <TouchableOpacity style={styles.openButton} onPress={onClose}>
                        <Text style={styles.textStyle}>LET'S DO IT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
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
    closeButton: {
        backgroundColor: 'red',
        position: 'absolute',
        right: 10,
        top: 10,
        padding: 10,
    },
    modalTitle: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    modalImage: {
        width: 200, // Set this to the size you need
        height: 200, // Set this to the size you need
        resizeMode: 'contain',
    },
    modalTextTitle: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    modalTextDescription: {
        marginBottom: 15,
        textAlign: 'center',
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default DailyChallengePopup;
