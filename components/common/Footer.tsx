import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Footer() {
    return (
        <View style={styles.footer}>
            <Link href="/home" style={styles.footerButton}>
                <Text>Home</Text>
            </Link>
            <Link href="/progress" style={styles.footerButton}>
                <Text>Progress</Text>
            </Link>
            <Link href="/send-challenge" style={styles.footerButton}>
                <Text>Send Challenge</Text>
            </Link>
            <Link href="/chat" style={styles.footerButton}>
                <Text>Chat</Text>
            </Link>
            <Link href="/profile" style={styles.footerButton}>
                <Text>Profile</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        backgroundColor: 'white',
    },
    footerButton: {
        // styles for the footer button
    },
});

export default Footer;
