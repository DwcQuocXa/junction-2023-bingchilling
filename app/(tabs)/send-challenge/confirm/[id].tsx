import { Stack, router, useGlobalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, Image, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

import ImageData from '../../../../assets/images/generations.json';

const Confirm = () => {
    const params = useGlobalSearchParams();
    const idx = Number(params.id) || 0;

    const [confirmed, setConfirmed] = useState(false);
    const [msg, setMsg] = useState('');

    const onSend = () => setConfirmed(true);
    const onBack = () => router.replace('/send-challenge');
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <Text style={styles.titleText}>
                {confirmed ? 'Sent to' : 'Sending'} {`Duc Ngo ${idx + 1}`}
            </Text>
            <Text style={styles.squatText}>20 push-ups</Text>
            <Image
                source={{ uri: ImageData.generations[idx].generated_images[0].url }} // Replace with your local image path
                style={styles.image}
            />
            {confirmed && (
                <>
                    <Text style={styles.confirmTextBox}>{msg}</Text>
                    <TouchableOpacity style={styles.button} onPress={onBack}>
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                </>
            )}
            {!confirmed && (
                <>
                    <TextInput
                        placeholder="Lời nhắn"
                        style={styles.input}
                        value={msg}
                        onChangeText={(text) => setMsg(text)}
                    />
                    <TouchableOpacity style={styles.button} onPress={onSend}>
                        <Text style={styles.buttonText}>Send nude</Text>
                    </TouchableOpacity>
                </>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    titleText: {
        fontSize: 18,
        marginBottom: 10,
        // Add additional styling as per your design
    },
    squatText: {
        fontSize: 36,
        fontWeight: 'bold',
        marginVertical: 20,
        // Add additional styling as per your design
    },
    image: {
        width: 300, // Set the width as per your layout
        height: 300, // Set the height as per your layout
        resizeMode: 'contain',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    confirmTextBox: {
        width: '80%',
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 30,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        // Add additional styling as per your design
    },
});

export default Confirm;
