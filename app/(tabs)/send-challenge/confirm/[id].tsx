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
    View,
} from 'react-native';

import ChallengeData from '../../../../assets/images/challenges.json';
import UserData from '../../../../assets/users.json';

const Confirm = () => {
    const params = useGlobalSearchParams();
    const user = UserData.find((user) => user.id === params.id);

    const [confirmed, setConfirmed] = useState(false);
    const [msg, setMsg] = useState('');

    const onSend = () => setConfirmed(true);
    const onBack = () => router.replace('/send-challenge');
    const challenge = ChallengeData.images.find((x) => x.id === params.challengeId);
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.challengeContainer}>
                    <Text style={styles.titleText}>
                        {confirmed ? 'Challenge sent to' : 'Challenging'} {user?.name}
                    </Text>
                    <Text style={styles.squatText}>
                        {params.amount} {challenge?.activity}
                    </Text>
                    <Image
                        source={{ uri: challenge?.url }} // Replace with your local image path
                        style={styles.activityImage}
                    />
                    <Text style={styles.descriptionText}>{challenge?.description}</Text>
                </View>
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
    challengeContainer: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#CCE7FF',
        borderRadius: 15,
        padding: 5,
        marginBottom: 20,
    },
    titleText: {
        fontSize: 18,
        fontWeight: '400',
        // Add additional styling as per your design
    },
    descriptionText: {
        marginBottom: 10,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    squatText: {
        fontSize: 32,
        fontWeight: '500',
        marginVertical: 15,
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
        height: 75,
        borderWidth: 1,
        borderColor: '#0085FF',
        padding: 10,
        borderRadius: 15,
        marginBottom: 20,
    },
    confirmTextBox: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#0085FF',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#0085FF',
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
