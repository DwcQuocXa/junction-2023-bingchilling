import { Stack, router, useGlobalSearchParams } from 'expo-router';
import React from 'react';
import {
    View,
    Text,
    FlatList,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

import ImageData from '../../../../assets/images/generations.json';

interface ACTIVITY {
    id: string;
    title: string;
    data: string[];
    name: string;
}

export const ACTIVITIES_CATEGORIES: ACTIVITY[] = [
    {
        id: '0',
        title: 'Mindfulness',
        data: Array.from({ length: 20 }, (_, i) => `Meditation ${i}`),
        name: 'Meditation',
    },
    {
        id: '1',
        title: 'Muscle',
        data: Array.from({ length: 20 }, (_, i) => `Push-up ${i}`),
        name: 'Push-up',
    },
    {
        id: '2',
        title: 'Outdoor activities',
        data: Array.from({ length: 20 }, (_, i) => `Running ${i}`),
        name: 'Running',
    },
];

const SelectChallenge = () => {
    const params = useGlobalSearchParams();
    const onChoose = (challengeId: string, challengeName: string) => {
        router.push({
            pathname: `/send-challenge/confirm/${params.id}`,
            params: { challengeId, challengeName },
        });
    };
    const renderCategory = ({ item }: { item: ACTIVITY }) => (
        <View style={styles.categoryContainer}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <Text style={styles.categoryTitle}>{item.title}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {item.data.map((subitem: string, index: number) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.itemContainer}
                        onPress={() => onChoose(item.id, item.name)}
                    >
                        {/* Use your own images and styling */}
                        <ImageBackground
                            style={styles.image}
                            source={{
                                uri: ImageData.generations[item.id].generated_images[index % 4].url,
                            }}
                        >
                            <Text style={styles.itemText}>{subitem}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={ACTIVITIES_CATEGORIES}
                renderItem={renderCategory}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50, // Adjust as needed for your layout
    },
    categoryContainer: {
        marginBottom: 20,
        backgroundColor: 'white',
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 10,
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 8,
        // Add additional styling as per your design
    },
    itemContainer: {
        marginRight: 10,
        width: 150, // Set a fixed width for each item
        padding: 8,
    },
    image: {
        width: '100%',
        height: 100, // Adjust the height as needed
        borderRadius: 10, // Round the corners as in the design
        alignItems: 'center',
    },
    itemText: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black background
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 0, // Adjust the distance from the bottom edge of the ImageBackground
        borderRadius: 5, // optional, if you want rounded corners
        width: '100%',
        paddingVertical: 4,
    },
});

export default SelectChallenge;
