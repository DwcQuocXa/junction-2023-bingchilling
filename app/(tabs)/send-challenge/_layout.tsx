import { Stack } from 'expo-router';
import React from 'react';

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="select"
                options={{
                    headerShown: false, //header shown or not
                }}
            />
            <Stack.Screen
                name="confirm"
                options={{
                    headerShown: false, //header shown or not
                }}
            />
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false, //header shown or not
                }}
            />
        </Stack>
    );
};

export default Layout;
