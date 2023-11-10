import { Ionicons } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Image,
} from 'react-native';

import { COLORS } from '../../constants';

export default function Challenge() {
    const handleBack = () => {
        router.back();
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <View style={styles.container}>
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                />
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleBack}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Challenge</Text>
                    <View style={styles.backButtonPlaceholder} />
                </View>

                <ScrollView style={styles.scrollView}>
                    <View style={styles.detailsContainer}>
                        <View style={styles.chartBox}>
                            <Text>List challenges</Text>
                        </View>
                    </View>
                    <View style={styles.detailsContainer}>
                        <View style={styles.chartBox}>
                            <Text>Challenges from friends</Text>
                        </View>
                    </View>
                    <View style={styles.detailsContainer}>
                        <View style={styles.chartBox}>
                            <Text>quest chua lam xong</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
    },
    backButtonPlaceholder: {
        width: 24, // This should match the backButton width
    },
    scrollView: {
        margin: 8,
    },
    card: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
        // Adjust the shadow as per your design
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
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
    chartBox: {
        width: '100%', // Adjust the width for two columns
        padding: 16,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        marginBottom: 8,
        // Style as per your design
    },
    detailBox: {
        width: '48%', // Adjust the width for two columns
        padding: 16,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        marginBottom: 8,
        // Style as per your design
    },
});
