import { Stack, router, useGlobalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import {
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';

import ChallengeData from '../../../../assets/images/challenges.json';
import ImageData from '../../../../assets/images/generations.json';

const Confirm = () => {
    const params = useGlobalSearchParams();
    const idx = Number(params.id) || 0;

    const [confirmed, setConfirmed] = useState(false);
    const [msg, setMsg] = useState('');

    const onSend = () => setConfirmed(true);
    const onBack = () => router.replace('/send-challenge');
    const challenge = ChallengeData.images.find((x) => x.id === params.challengeId);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                />
                <Image
                    source={{ uri: ImageData.generations[idx].generated_images[0].url }} // Replace with your local image path
                    style={styles.image}
                />
                <Text style={styles.titleText}>
                    {confirmed ? 'Sent' : 'Sending'} to {`Duc Ngo ${idx + 1}`}
                </Text>
                <Text style={styles.squatText}>20 {challenge?.activity}</Text>
                <Image
                    source={{ uri: challenge?.url }} // Replace with your local image path
                    style={styles.activityImage}
                />
                <Text style={styles.descriptionText}>{challenge?.description}</Text>
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
                            placeholder="Message"
                            style={styles.input}
                            value={msg}
                            onChangeText={(text) => setMsg(text)}
                        />
                        <TouchableOpacity style={styles.button} onPress={onSend}>
                            <Text style={styles.buttonText}>Send</Text>
                        </TouchableOpacity>
                    </>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    scrollContainer: {
        alignItems: 'center',
    },
    titleText: {
        fontSize: 18,
        marginBottom: 10,
        // Add additional styling as per your design
    },
    descriptionText: {
        marginBottom: 10,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    squatText: {
        fontSize: 36,
        fontWeight: 'bold',
        marginVertical: 20,
        // Add additional styling as per your design
    },
    image: {
        width: 100, // Set the width as per your layout
        height: 100, // Set the height as per your layout
        resizeMode: 'contain',
        marginBottom: 20,
    },
    activityImage: {
        width: 300, // Set the width as per your layout
        height: 300, // Set the height as per your layout
        resizeMode: 'contain',
        marginBottom: 10,
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
        paddingHorizontal: 40,
    },
    buttonText: {
        color: '#fff',
        // Add additional styling as per your design
    },
});

export default Confirm;
