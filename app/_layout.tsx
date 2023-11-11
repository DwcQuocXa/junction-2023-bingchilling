import { router, Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthProvider } from '../context/AuthProvider';

type Props = object;

const Layout = (props: Props) => {
    /*useEffect(() => {
        router.replace('/challenge-modal/challenge-reminder-modal');
    }, []);*/
    return (
        <SafeAreaProvider>
            <AuthProvider>
                <Stack>
                    <Stack.Screen
                        name="(auth)/login"
                        options={{
                            headerShown: false, //header shown or not
                        }}
                    />
                    <Stack.Screen
                        name="(tabs)"
                        options={{
                            headerShown: false, //header shown or not
                            gestureEnabled: false,
                        }}
                    />
                    <Stack.Screen
                        name="profile-builder"
                        options={{
                            // Set the presentation mode to modal for our modal route.
                            presentation: 'fullScreenModal',
                            title: 'Choose your avatar',
                        }}
                    />
                    <Stack.Screen
                        name="profile"
                        options={{
                            // Set the presentation mode to modal for our modal route.
                            presentation: 'fullScreenModal',
                            title: 'Profile',
                        }}
                    />
                    <Stack.Screen
                        name="challenge-modal/[id]"
                        options={{
                            presentation: 'modal',
                            title: 'Challenge',
                        }}
                    />
                    <Stack.Screen
                        name="challenge-modal/challenge-offer-modal"
                        options={{
                            presentation: 'modal',
                            title: 'Challenge Your Friend',
                        }}
                    />
                    <Stack.Screen
                        name="challenge-modal/challenge-reminder-modal"
                        options={{
                            presentation: 'modal',
                            title: 'Daily Challenge',
                        }}
                    />
                </Stack>
            </AuthProvider>
        </SafeAreaProvider>
    );
};

export default Layout;
