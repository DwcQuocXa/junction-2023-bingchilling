import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import AvatarCard from '../common/AvatarCard';

const SendChallenge = () => {
    const avatarName = Array.from({ length: 11 }, (_, i) => i + 1);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {avatarName.map((i) => (
                <AvatarCard
                    key={i}
                    avatarUrl={`assets/images/avatar/${i}.jpg`}
                    name={`Duc Ngo ${i}`}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        // If you want a grid of 2x4
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export default SendChallenge;
