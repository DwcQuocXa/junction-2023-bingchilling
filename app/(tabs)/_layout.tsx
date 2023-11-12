import { AntDesign } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';

import Icon from '../../assets/bolt.svg';
import IconBlack from '../../assets/bolt_black.svg';

import ChatHeader from '../../components/header/ChatHeader';

const Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
                    tabBarActiveTintColor: '#F0F0F0',
                    tabBarInactiveTintColor: '#191919',
                    tabBarInactiveBackgroundColor: '#F0F0F0',
                    tabBarActiveBackgroundColor: '#82BDFD',
                }}
            />
            <Tabs.Screen
                name="progress"
                options={{
                    tabBarLabel: 'Progress',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="linechart" size={24} color={color} />
                    ),
                    title: 'Progress',
                    tabBarActiveTintColor: '#F0F0F0',
                    tabBarInactiveTintColor: '#191919',
                    tabBarInactiveBackgroundColor: '#F0F0F0',
                    tabBarActiveBackgroundColor: '#82BDFD',
                }}
            />
            <Tabs.Screen
                name="send-challenge"
                options={{
                    title: 'Send Challenge',
                    tabBarLabel: 'Send challenge',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={focused ? styles.sendChallenge : styles.sendChallengeUnfocused}
                        >
                            {focused ? <Icon /> : <IconBlack />}
                        </View>
                    ),
                    tabBarActiveTintColor: '#F0F0F0',
                    tabBarInactiveTintColor: '#191919',
                    tabBarInactiveBackgroundColor: '#F0F0F0',
                    tabBarActiveBackgroundColor: '#82BDFD',
                }}
            />
            <Tabs.Screen
                name="leaderboard"
                options={{
                    tabBarLabel: 'Leaderboard',
                    tabBarIcon: ({ color }) => <AntDesign name="Trophy" size={24} color={color} />,
                    tabBarActiveTintColor: '#F0F0F0',
                    tabBarInactiveTintColor: '#191919',
                    tabBarInactiveBackgroundColor: '#F0F0F0',
                    tabBarActiveBackgroundColor: '#82BDFD',
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    headerTitle: ChatHeader,
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="message1" size={24} color={color} />
                    ),
                    tabBarActiveTintColor: '#F0F0F0',
                    tabBarInactiveTintColor: '#191919',
                    tabBarInactiveBackgroundColor: '#F0F0F0',
                    tabBarActiveBackgroundColor: '#82BDFD',
                }}
            />
        </Tabs>
    );
};

const styles = StyleSheet.create({
    sendChallenge: {
        width: '80%',
        aspectRatio: '1 / 1',
        borderRadius: 50,
        borderColor: '#fff',
        borderWidth: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#82BDFD',
        display: 'flex',
        marginBottom: 40,
        zIndex: -1000000000,
    },
    sendChallengeUnfocused: {
        width: '80%',
        aspectRatio: '1 / 1',
        borderRadius: 50,
        borderColor: '#fff',
        borderWidth: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        display: 'flex',
        marginBottom: 40,
        zIndex: -1000000000,
    },
});

export default Layout;
