import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import ImageData from '../../assets/images/generations.json';
import UserData from '../../assets/users.json';
import AvatarCard from '../common/AvatarCard';
import { TouchableOpacity } from 'nativewind/dist/preflight';
import { router } from 'expo-router';

const SendChallenge = () => {
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState(UserData);

    const searchFilterFunction = (text: string) => {
        setQuery(text);
        if (text) {
            // Update the filtered data based on the search term
            const newData = UserData.filter((user) =>
                user.name.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredData(newData);
        } else {
            // If the search bar is empty, set the filtered data to the master data
            setFilteredData(UserData);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <SearchBar
                placeholder="Type Here..."
                value={query}
                lightTheme
                round
                onChangeText={(text) => searchFilterFunction(text)}
                autoCorrect={false}
                containerStyle={styles.searchBar}
            />
            <Text style={styles.sectionText}>Friends</Text>
            <View style={styles.cardContainer}>
                {filteredData.map((user, idx) => (
                    <AvatarCard
                        key={user.id}
                        id={user.id}
                        avatarUrl={ImageData.generations[idx].generated_images[0].url}
                        name={user.name}
                    />
                ))}
            </View>
            <Text style={styles.sectionText}>Groups</Text>
            <View style={styles.cardContainer2}>
                <AvatarCard
                    key={111}
                    id="1"
                    avatarUrl={ImageData.generations[4].generated_images[0].url}
                    name="Bing chiling"
                />
                <AvatarCard
                    key={122}
                    id="2"
                    avatarUrl={ImageData.generations[4].generated_images[3].url}
                    name="Avengers"
                />
                <TouchableOpacity
                    style={styles.addGroupButton}
                    onPress={() => router.push('/create-group')}
                >
                    <AntDesign name="addusergroup" size={56} color="black" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 10,
        // If you want a grid of 2x4
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        paddingBottom: 40,
    },
    cardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 8,
    },
    cardContainer2: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingRight: 8,
    },
    searchBar: {
        backgroundColor: 'none',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        width: '100%',
    },
    sectionText: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 8,
    },
    addGroupButton: {
        aspectRatio: '1 / 1',
        height: 130,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SendChallenge;
