import { Stack, useGlobalSearchParams, useSearchParams } from 'expo-router';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { COLORS } from '../../../../constants';

export default function Confirm() {
    const params = useGlobalSearchParams();

    console.log(params.id);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <View>hello</View>
        </SafeAreaView>
    );
}
