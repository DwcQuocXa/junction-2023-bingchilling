import { Ionicons } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';

import { COLORS } from '../../constants';

// Sample data for the leaderboard
const leaderboardData = [
    {
        id: '1',
        name: 'David',
        points: '4578',
        image: 'https://cdn.leonardo.ai/users/154e3741-deff-4366-a831-5b69912fba62/generations/1fa728cc-6573-41de-be38-022ce426dcfd/3D_Animation_Style_Create_an_image_of_A_20_Male_with_black_sho_0.jpg',
        rank: 1,
    },
    {
        id: '2',
        name: 'John',
        points: '4235',
        image: 'https://cdn.leonardo.ai/users/154e3741-deff-4366-a831-5b69912fba62/generations/3806315c-1bb6-4361-a695-bd1cd6e96706/3D_Animation_Style_Create_a_avatar_character_A_20_Male_with_bl_2.jpg',
        rank: 2,
    },
    {
        id: '3',
        name: 'Merry',
        points: '3967',
        image: 'https://cdn.leonardo.ai/users/154e3741-deff-4366-a831-5b69912fba62/generations/3806315c-1bb6-4361-a695-bd1cd6e96706/3D_Animation_Style_Create_a_avatar_character_A_20_Male_with_bl_3.jpg',
        rank: 3,
    },
    {
        id: '4',
        name: 'Karen',
        points: '3967',
        image: 'https://cdn.leonardo.ai/users/154e3741-deff-4366-a831-5b69912fba62/generations/e3646180-6c37-43ec-a4fe-7b786956c8d4/3D_Animation_Style_Design_a_nonbinary_avatar_character_with_a_3.jpg',
        rank: 4,
    },
    {
        id: '5',
        name: 'Duke',
        points: '3967',
        image: 'https://cdn.leonardo.ai/users/154e3741-deff-4366-a831-5b69912fba62/generations/22677995-380c-410b-97cc-3bf8b85ba3c9/3D_Animation_Style_Design_a_woman_riding_a_bicycle_with_a_warm_1.jpg',
        rank: 5,
    },
    {
        id: '6',
        name: 'Annie',
        points: '3967',
        image: 'https://cdn.leonardo.ai/users/154e3741-deff-4366-a831-5b69912fba62/generations/22677995-380c-410b-97cc-3bf8b85ba3c9/3D_Animation_Style_Design_a_woman_riding_a_bicycle_with_a_warm_3.jpg',
        rank: 6,
    },
    {
        id: '7',
        name: 'Luka',
        points: '3967',
        image: 'https://cdn.leonardo.ai/users/154e3741-deff-4366-a831-5b69912fba62/generations/427f26dd-eec7-4239-9db9-7a750765787c/3D_Animation_Style_Design_a_transgender_avatar_character_with_0.jpg',
        rank: 7,
    },
    // ...more users
];

const LeaderboardScreen = () => {
    const handleBack = () => {
        router.back(); // This will navigate to the home screen
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerTitle: '',
                    headerShown: false, //header shown or not
                }}
            />
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Leaderboard</Text>
            </View>

            {/* Podium */}
            <View style={styles.podiumContainer}>
                {leaderboardData.map((user, index) => {
                    if (index < 3) {
                        // Only for top 3
                        return (
                            <View key={user.id} style={[styles.podiumItem, { zIndex: 3 - index }]}>
                                <Text style={styles.podiumRank}>{user.rank}</Text>
                                <Image source={{ uri: user.image }} style={styles.podiumImage} />
                                <Text style={styles.podiumName}>{user.name}</Text>
                                <Text style={styles.podiumPoints}>{user.points} Pts</Text>
                            </View>
                        );
                    }
                })}
            </View>

            {/* List */}
            <ScrollView style={styles.listContainer}>
                {leaderboardData.map((user, index) => {
                    if (index >= 3) {
                        return (
                            <View key={user.id} style={styles.listItem}>
                                <Text style={styles.rank}>{user.rank}</Text>
                                <Image source={{ uri: user.image }} style={styles.avatar} />
                                <Text style={styles.name}>{user.name}</Text>
                                <Text style={styles.points}>{user.points} Pts</Text>
                            </View>
                        );
                    }
                })}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#6C5B7B', // Adjust your header color here
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center', // Center the title text
        fontWeight: 'bold',
        fontSize: 22,
        color: '#FFFFFF',
    },
    podiumContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        backgroundColor: '#6C5B7B', // Adjust your podium background color here
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingBottom: 20,
    },
    podiumItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    podiumRank: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    podiumImage: {
        width: 80, // Adjust size accordingly
        height: 80, // Adjust size accordingly
        borderRadius: 40, // Make it round
        borderWidth: 2,
        borderColor: '#fff',
        marginVertical: 8,
    },
    podiumName: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    podiumPoints: {
        color: '#fff',
        fontSize: 16,
    },
    listContainer: {
        marginTop: 20,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 20,
        borderRadius: 10,
        padding: 20,
        // Add shadows or borders as per your design
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
    },
    rank: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginRight: 12,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    name: {
        flex: 1,
        marginLeft: 12,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    points: {
        fontSize: 18,
        color: '#333',
    },
});

export default LeaderboardScreen;
