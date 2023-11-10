import { View } from '@bacons/react-views';
import { Stack } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

import { ScreenHeaderButton } from '../components';
import Footer from '../components/common/Footer';
import { COLORS } from '../constants';

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
