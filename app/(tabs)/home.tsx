import { Link, Stack, useGlobalSearchParams, router } from 'expo-router';
import { styled } from 'nativewind';
import { ImageBackground } from 'nativewind/dist/preflight';
import React, { useEffect, useState } from 'react';
// Removed unused import statement for React
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import { ScreenHeaderButton } from '../../components';
import { COLORS, SIZES } from '../../constants';
import { useAuth } from '../../context/AuthProvider';

const StyledText = styled(Text);

export default function Home() {
    const { user } = useAuth();
    const onChooseChallenge = (challenge: any) => {
        router.push({
            pathname: `/challenge-modal/${challenge.id}`,
            params: { challengeType: 'challenges' },
        } as any);
    };
    const [dimensions, setDimensions] = useState({ width: 0 });

    const onLayout = (event) => {
        const { width } = event.nativeEvent.layout;
        setDimensions({ width });
    };

    /*const openDailyChallengePopup = () => {
        const route = {
            pathname: '/daily-challenge-popup',
        } as any;

        router.push(route);
    };*/

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => onChooseChallenge(item)}>
                <ImageBackground
                    source={{ uri: item.url }} // Replace with your image URL
                    style={[styles.item, { width: dimensions.width, height: dimensions.height }]}
                    imageStyle={styles.item_image}
                >
                    <Text style={styles.item_text}>{item.title}</Text>
                </ImageBackground>
            </TouchableOpacity>
        );
    };

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
                <View style={styles.header}>
                    <ScreenHeaderButton
                        imageUrl={user?.avatarUrl}
                        handlePress={() => {
                            router.push('/profile');
                        }}
                    />
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: '#fff',
                            paddingLeft: 10,
                        }}
                    >
                        <Text>Hey {user?.name}</Text>
                        <Text>Let's play football!</Text>
                    </View>
                    <ScreenHeaderButton iconName="notifications-outline" />
                </View>
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    <Text style={styles.cardText}>Notification for daily challenge</Text>
                    <View style={styles.card_notification}>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={challenges}
                            onLayout={onLayout}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            pagingEnabled
                        />
                    </View>

                    <Text style={styles.cardText}>Ongoing quest</Text>
                    <View style={styles.card_quest}>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={challenges}
                            onLayout={onLayout}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            pagingEnabled
                        />
                    </View>

                    <Text style={styles.cardText}>Event</Text>
                    <View style={styles.card_event}>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={challenges}
                            onLayout={onLayout}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            pagingEnabled
                        />
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
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    headerText: {
        flex: 1,
        marginLeft: 10,
    },
    card_notification: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        height: 300,
    },
    card_quest: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        height: 300,
    },
    card_event: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        height: 300,
    },
    cardText: {
        fontSize: 16,
    },
    scrollView: {
        padding: 20,
        margin: 20,
    },
    item: {
        flex: 1,
        height: '100%',
        borderRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    item_image: {
        resizeMode: 'cover',
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    item_text: {
        fontSize: 16,
        color: 'white',
        padding: 10,
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        borderRadius: 10,
    },
});

export const challenges = [
    {
        id: '1',
        title: 'Lets cycling together',
        description: 'Lets cycling together',
        url: 'https://cdn.leonardo.ai/users/154e3741-deff-4366-a831-5b69912fba62/generations/1fa728cc-6573-41de-be38-022ce426dcfd/3D_Animation_Style_Create_an_image_of_A_20_Male_with_black_sho_0.jpg',
    },
    {
        id: '2',
        title: 'Running',
        description: 'Running',
        url: 'https://cdn.leonardo.ai/users/154e3741-deff-4366-a831-5b69912fba62/generations/1fa728cc-6573-41de-be38-022ce426dcfd/3D_Animation_Style_Create_an_image_of_A_20_Male_with_black_sho_0.jpg',
    },
    {
        id: '3',
        title: 'Play football',
        description: 'Play football',
        url: 'https://cdn.leonardo.ai/users/154e3741-deff-4366-a831-5b69912fba62/generations/1fa728cc-6573-41de-be38-022ce426dcfd/3D_Animation_Style_Create_an_image_of_A_20_Male_with_black_sho_0.jpg',
    },
    // ... more items
];
