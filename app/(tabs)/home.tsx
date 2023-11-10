import { Stack } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ScreenHeaderButton } from '../../components';
import { COLORS } from '../../constants';

const home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderButton imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg" />
                    ),
                    headerRight: () => <ScreenHeaderButton iconName="notifications-outline" />,
                    headerTitle: '',
                }}
            />
        </SafeAreaView>
    );
};

export default home;
