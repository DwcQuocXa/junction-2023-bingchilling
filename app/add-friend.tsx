import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, TextInput } from 'react-native';

// Dummy data for the list
import ImageData from '../assets/images/generations.json';
import UserData from '../assets/users.json';

const FriendItem = ({ name, image, onSelect, isSelected }) => {
    return (
        <View style={styles.friendItem}>
            <View style={styles.friendNameAndAvatar}>
                <Image source={{ uri: image }} style={styles.friendImage} />
                <Text style={styles.friendName}>{name}</Text>
            </View>
            <TouchableOpacity
                onPress={onSelect}
                style={isSelected ? styles.addedButton : styles.addButton}
            >
                <Text style={isSelected ? styles.addedButtonText : {}}>
                    Add{isSelected ? 'ed' : ''}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const AddFriend = () => {
    const [addedFriends, setAddedFriends] = useState<string[]>([]);
    const [query, setQuery] = useState('');

    const handleSelectFriend = (id: string) => {
        setAddedFriends(addedFriends.concat(id));
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
            <TouchableOpacity style={styles.newGroupButton}>
                <AntDesign name="addusergroup" size={36} color="black" />
                <View>
                    <Text style={styles.newGroupButtonText}>New Group</Text>
                    <Text style={styles.newGroupButtonSubText}>
                        Up to 50 people, big challenge comes with big group
                    </Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.subheader}>You might know</Text>
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
    newGroupButton: {
        backgroundColor: 'lightblue',
        borderRadius: 10,
        marginHorizontal: 20,
        marginBottom: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
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
    // Add more styles for the search bar, new group button, and selection indicator
});

export default AddFriend;
