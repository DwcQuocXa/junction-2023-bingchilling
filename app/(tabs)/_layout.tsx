import { Tabs } from 'expo-router';
import React from 'react';

const Layout = () => {
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
            {/*<Tabs.Screen name="chat" />*/}
            <Tabs.Screen name="leaderboard" />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                }}
            />
        </Tabs>
    );
};

export default Layout;
