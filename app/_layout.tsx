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
        </Stack>
    );
};

export default Layout;
