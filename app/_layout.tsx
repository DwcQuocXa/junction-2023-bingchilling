import { Stack } from 'expo-router';
import React from 'react';

type Props = object;

const Layout = (props: Props) => {
    return (
        <Stack>
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
        </Stack>
    );
};

export default Layout;
