import { Stack } from 'expo-router';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthProvider } from '../context/AuthProvider';

type Props = object;

const Layout = (props: Props) => {
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
                        }}
                    />
                    <Stack.Screen
                        name="daily-challenge-popup"
                        options={{
                            // Set the presentation mode to modal for our modal route.
                            presentation: 'modal',
                            title: 'New Challenge',
                        }}
                    />
                    <Stack.Screen
                        name="profile-builder"
                        options={{
                            // Set the presentation mode to modal for our modal route.
                            presentation: 'modal',
                            title: 'Choose your avatar',
                        }}
                    />
                </Stack>
            </AuthProvider>
        </SafeAreaProvider>
    );
};

export default Layout;
