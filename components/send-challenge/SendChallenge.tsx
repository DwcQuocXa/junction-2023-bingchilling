import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

import AvatarCard from '../common/AvatarCard';

const getName = (i: string) => `Duc Ngo ${i}`;

const SendChallenge = () => {
    const [query, setQuery] = useState('');
    const avatarName = Array.from({ length: 11 }, (_, i) => `${i + 1}`);
    const [filteredData, setFilteredData] = useState<string[]>(avatarName);

    const searchFilterFunction = (text: string) => {
        setQuery(text);
        if (text) {
            // Update the filtered data based on the search term
            const newData = avatarName.filter((i) =>
                getName(i).toLowerCase().includes(text.toLowerCase())
            );
            setFilteredData(newData);
        } else {
            // If the search bar is empty, set the filtered data to the master data
            setFilteredData(avatarName);
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
            {filteredData.map((i) => (
                <AvatarCard key={i} avatarUrl={`assets/images/avatar/${i}.jpg`} name={getName(i)} />
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
