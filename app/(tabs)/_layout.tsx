import { Tabs } from 'expo-router';
import React from 'react';

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="challenge" />
            <Tabs.Screen name="home" />
            <Tabs.Screen name="chat" />
            <Tabs.Screen name="progress" />
        </Tabs>
    );
};

export default _layout;
