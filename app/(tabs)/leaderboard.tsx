import { Ionicons } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';

import { COLORS } from '../../constants';

// Mock data for the leaderboard
const leaderboardData = [
    { id: '1', name: 'Naruto', points: 1470, avatar: 'https://example.com/naruto.png' },
    { id: '2', name: 'One Piece', points: 1340, avatar: 'https://example.com/onepiece.png' },
    { id: '3', name: 'Dragon Ball', points: 1202, avatar: 'https://example.com/dragonball.png' },
    // ...more items
];

const Leaderboard = () => {
    const handleBack = () => {
        router.back(); // This will navigate to the home screen
    };

    // Function to render each item in the FlatList
    const renderItem = ({ item, index }) => (
        <View style={styles.listItem}>
            <Text style={styles.rank}>{index + 1}</Text>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.points}>{item.points} Pts</Text>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerTitle: '',
                    headerShown: false, //header shown or not
                }}
            />
            <View style={styles.container}>
                {/* Leaderboard Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleBack}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Your progress</Text>
                </View>

                {/* Podium */}
                <View style={styles.podium}>
                    <View style={[styles.podiumItem, styles.secondPlace]}>
                        <Text style={styles.podiumLabel}>2</Text>
                        {/* Podium Avatar */}
                        {/* ... */}
                    </View>
                    <View style={[styles.podiumItem, styles.firstPlace]}>
                        <Text style={styles.podiumLabel}>1</Text>
                        {/* Podium Avatar */}
                        {/* ... */}
                    </View>
                    <View style={[styles.podiumItem, styles.thirdPlace]}>
                        <Text style={styles.podiumLabel}>3</Text>
                        {/* Podium Avatar */}
                        {/* ... */}
                    </View>
                </View>

                {/* Remaining Leaderboard Entries */}
                <FlatList
                    data={leaderboardData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center', // Center the title text
        fontWeight: 'bold',
        fontSize: 22,
    },
    podium: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
    },
    podiumItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    firstPlace: {
        // styles for the first place
    },
    secondPlace: {
        // styles for the second place
    },
    thirdPlace: {
        // styles for the third place
    },
    podiumLabel: {
        // styles for the podium labels
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        marginVertical: 5,
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 10,
    },
    rank: {
        // styles for the rank text
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10,
    },
    name: {
        flex: 1,
        // styles for the name text
    },
    points: {
        // styles for the points text
    },
});

export default Leaderboard;
