import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from 'react-native';

import { ScreenHeaderButton } from '../../components';
import { COLORS } from '../../constants';

const Progress = () => {
    const handleBack = () => {
        router.back(); // This will navigate to the home screen
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <View style={styles.container}>
                <Stack.Screen
                    options={{
                        headerShown: false, //header shown or not
                    }}
                />
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleBack}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Your progress</Text>
                </View>
                <ScrollView style={styles.scrollView}>
                    {/* Placeholder for avatar and user statement */}
                    <View style={styles.avatarSection}>
                        <Image
                            source={{
                                url: 'https://media.newyorker.com/photos/63826120196c8ef692b4eba5/1:1/w_1707,h_1707,c_limit/Ronaldo_WC22.png',
                            }} // Replace with your actual avatar image path
                            style={styles.avatar}
                        />
                    </View>

                    {/* Active chart section */}
                    <View style={styles.detailsContainer}>
                        <View style={styles.chartBox}>
                            <Text>Active chart</Text>
                        </View>
                    </View>

                    {/* Other progress details */}
                    <View style={styles.detailsContainer}>
                        <View style={styles.detailBox}>
                            <Text>Sleep schedule</Text>
                        </View>
                        <View style={styles.detailBox}>
                            <Text>Calories to burn</Text>
                        </View>
                        <View style={styles.detailBox}>
                            <Text>Calories</Text>
                        </View>
                        <View style={styles.detailBox}>
                            <Text>Water</Text>
                        </View>
                        <View style={styles.detailBox}>
                            <Text>Meals</Text>
                        </View>
                        <View style={styles.detailBox}>
                            <Text>Blah</Text>
                        </View>
                    </View>
                </ScrollView>

                {/* The Footer would be included here if it's not part of a global layout */}
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
    scrollView: {
        margin: 8,
    },
    avatarSection: {
        alignItems: 'center',
        padding: 16,
        // Style as per your design
    },
    avatar: {
        width: '100%', // Take the full width of the avatarSection
        height: '100%', // Take the full height of the avatarSection
        // If you have a fixed-size avatarSection, use 'cover' to fill the area
        resizeMode: 'cover',
        borderRadius: 8,
        // borderRadius is half of width or height for a circle, adjust as needed
    },
    chartSection: {
        // Style for the chart section
        padding: 16,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        marginBottom: 8,
    },
    detailsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 8,
    },
    detailBox: {
        width: '48%', // Adjust the width for two columns
        padding: 16,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        marginBottom: 8,
        // Style as per your design
    },
    chartBox: {
        width: '100%', // Adjust the width for two columns
        padding: 16,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        marginBottom: 8,
        // Style as per your design
    },
    // ... other styles as needed
});

export default Progress;
