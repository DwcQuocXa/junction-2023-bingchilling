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
            {/*<Tabs.Screen name="profile" />*/}
            <Tabs.Screen name="leaderboard" />
        </Tabs>
    );
};

export default Layout;
