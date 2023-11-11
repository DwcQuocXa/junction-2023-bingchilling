import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

import ImageData from '../../assets/images/generations.json';
import UserData from '../../assets/users.json';
import AvatarCard from '../common/AvatarCard';

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
            {filteredData.map((user, idx) => (
                <AvatarCard
                    key={user.id}
                    id={user.id}
                    avatarUrl={ImageData.generations[idx].generated_images[0].url}
                    name={user.name}
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
    searchBar: {
        backgroundColor: 'none',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        width: '100%',
    },
});

export default SendChallenge;
