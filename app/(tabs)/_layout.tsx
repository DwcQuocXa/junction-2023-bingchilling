import { Tabs } from 'expo-router';
import React from 'react';

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="home" />
            <Tabs.Screen name="progress" />
            <Tabs.Screen
                name="send-challenge"
                options={{
                    title: 'Send Challenge',
                }}
            />
            <Tabs.Screen name="chat" />
            <Tabs.Screen name="profile" />
        </Tabs>
    );
};

export default _layout;
