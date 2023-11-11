import { Picker } from '@react-native-picker/picker';
import { Stack, router, useGlobalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

import ChallengeData from '../../../../assets/images/challenges.json';
import UserData from '../../../../assets/users.json';

interface ACTIVITY {
    id: string;
    activity: string;
    category: string;
    url: string;
    description?: string;
}

const AGE_LIMIT = {
    Y: {
        min: 10,
        max: 30,
    },
    K: {
        min: 0,
        max: 10,
    },
};

const CATEGORIES = ChallengeData.images
    .map((x) => x.category)
    .filter((value, index, array) => array.indexOf(value) === index);

export const ACTIVITIES_CATEGORIES = CATEGORIES.map((category, i) => ({
    id: `category-${i}`,
    category,
    data: ChallengeData.images.filter((x) => x.category === category),
}));

const SelectChallenge = () => {
    const [selected, setSelected] = useState<string | null>(null);
    const [amount, setAmount] = useState(5);
    const params = useGlobalSearchParams();
    const user = UserData.find((user) => user.id === params.id);

    const challegeForAge = ACTIVITIES_CATEGORIES.map((x) => ({
        ...x,
        data: x.data.filter(
            (challenge) =>
                AGE_LIMIT[challenge.ageGroup].max > user?.age &&
                user?.age >= AGE_LIMIT[challenge.ageGroup].min
        ),
    }));
    const onChoose = (challengeId: string) => {
        setSelected(selected === challengeId ? null : challengeId);
    };

    const onSend = () => {
        router.push({
            pathname: `/send-challenge/confirm/${params.id}`,
            params: { challengeId: selected, amount },
        });
    };
    const renderCategory = ({ item }) =>
        item.data.length > 0 && (
            <View style={styles.categoryContainer}>
                <Text style={styles.categoryTitle}>{item.category}</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {item.data.map((subitem: ACTIVITY, index: number) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.itemContainer}
                            onPress={() => onChoose(subitem.id)}
                        >
                            {/* Use your own images and styling */}
                            <ImageBackground
                                style={
                                    selected === subitem.id ? styles.imageSelected : styles.image
                                }
                                source={{
                                    uri: subitem.url,
                                }}
                            >
                                <Text style={styles.itemText}>{subitem.activity}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        );

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <FlatList
                data={challegeForAge}
                renderItem={renderCategory}
                keyExtractor={(item) => item.id}
            />
            <Picker
                selectedValue={amount}
                onValueChange={(itemValue) => setAmount(itemValue)}
                style={styles.picker}
                mode="dropdown"
            >
                <Picker.Item label="5 reps" value="5" />
                <Picker.Item label="10 reps" value="10" />
                <Picker.Item label="15 reps" value="15" />
                <Picker.Item label="20 reps" value="20" />
            </Picker>
            <TouchableOpacity style={styles.button} onPress={onSend} disabled={!selected}>
                <Text style={{ color: 'white' }}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20, // Adjust as needed for your layout
        alignItems: 'center',
        backgroundColor: 'white',
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
        borderRadius: 15, // Round the corners as in the design
        alignItems: 'center',
        overflow: 'hidden',
    },
    imageSelected: {
        width: '100%',
        height: 100, // Adjust the height as needed
        borderRadius: 15, // Round the corners as in the design
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#0085FF',
        overflow: 'hidden',
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
    button: {
        alignItems: 'center',
        paddingHorizontal: 40,
        width: '50%',
        borderRadius: 10,
        paddingVertical: 10,
        backgroundColor: '#0085FF',
        marginTop: 200,
    },
    picker: {
        height: 50,
        width: 200,
    },
});

export default SelectChallenge;
