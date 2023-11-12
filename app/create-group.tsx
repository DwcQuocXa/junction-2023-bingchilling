import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, TextInput } from 'react-native';

// Dummy data for the list
import ImageData from '../assets/images/generations.json';
import UserData from '../assets/users.json';

const FriendItem = ({ name, image, onSelect, isSelected }) => {
    return (
        <TouchableOpacity style={styles.friendItem} onPress={onSelect}>
            <View style={styles.friendNameAndAvatar}>
                <Image source={{ uri: image }} style={styles.friendImage} />
                <Text style={styles.friendName}>{name}</Text>
            </View>
            <View style={styles.checkbox}>
                {isSelected && <View style={styles.checkboxInner} />}
            </View>
        </TouchableOpacity>
    );
};

const CreateGroup = () => {
    const [addedFriends, setAddedFriends] = useState<string[]>([]);
    const [query, setQuery] = useState('');

    const handleSelectFriend = (id: string) => {
        if (!addedFriends.includes(id)) {
            setAddedFriends(addedFriends.concat(id));
        } else {
            setAddedFriends(addedFriends.filter((friend) => friend !== id));
        }
    };

    const renderFriendItem = ({ item }) => (
        <FriendItem
            name={item.name}
            image={ImageData.generations[item.id].generated_images[0].url}
            onSelect={() => handleSelectFriend(item.id)}
            isSelected={addedFriends.includes(item.id)}
        />
    );

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search"
                value={query}
                onChangeText={setQuery}
                style={styles.searchBar}
            />
            <TouchableOpacity
                style={styles.createGroupButton}
                onPress={() => router.push('/(tabs)/chat')}
            >
                <Text>Create group</Text>
            </TouchableOpacity>
            <TextInput style={styles.newGroupButton} placeholder="Group name" />
            <Text style={styles.subheader}>Friends</Text>
            <FlatList
                data={UserData.filter((user) =>
                    user.name.toLowerCase().includes(query.toLowerCase())
                )}
                renderItem={renderFriendItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    subheader: {
        fontSize: 18,
        padding: 20,
        fontWeight: 'bold',
    },
    friendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    friendImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 20,
    },
    friendName: {
        fontSize: 18,
    },
    friendNameAndAvatar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    addButton: {
        backgroundColor: '#82BDFD',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },
    addedButton: {
        backgroundColor: 'transparent',
    },
    addedButtonText: {
        color: '#909090',
    },
    searchBar: {
        height: 40,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 10,
        margin: 20,
        paddingLeft: 15,
    },
    createGroupButton: {
        backgroundColor: 'lightblue',
        borderRadius: 15,
        width: '50%',
        paddingVertical: 10,
        paddingHorizontal: 5,
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    newGroupButton: {
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        marginHorizontal: 20,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    newGroupButtonText: {
        fontSize: 18,
        color: '#191919',
        fontWeight: 'bold',
    },
    newGroupButtonSubText: {
        fontSize: 12,
        color: '#909090',
        fontWeight: '300',
    },
    checkbox: {
        height: 20,
        width: 20,
        borderRadius: 3, // A checkbox typically has a slight radius
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxInner: {
        height: 12,
        width: 12,
        backgroundColor: '#000',
    },
    // Add more styles for the search bar, new group button, and selection indicator
});

export default CreateGroup;
