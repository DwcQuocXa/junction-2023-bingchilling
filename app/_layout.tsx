import { View } from '@bacons/react-views';
import { Stack } from 'expo-router';
import React from 'react';

import Footer from '../components/common/Footer';

type Props = object;

const Layout = (props: Props) => {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" />
        </Stack>
    );
};

export default Layout;
