import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

import Users from '../../../assets/users.json';

const Chat = () => {
    return (
        <FlatList
            data={Users}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
                <ListItem
                    name={item.name}
                    status={item.status}
                    time={item.lastSeen}
                    image={item.imageUrl}
                />
            )}
        />
    );
};

const ListItem = ({ name, status, time, image }) => (
    <View style={styles.item}>
        <Image source={{ uri: image }} style={styles.avatar} />
        <View style={styles.content}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.statusContainer}>
                {status === 'online' && <FontAwesome5 name="bolt" size={16} color="#50cd8d" />}
                <Text style={styles.status}>{status}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>
        </View>
        <TouchableOpacity>
            <AntDesign name="message1" size={24} color="black" />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: 'white',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 25,
    },
    content: {
        flex: 1,
        marginLeft: 15,
    },
    name: {
        fontWeight: 'bold',
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    status: {
        marginLeft: 5,
        fontSize: 12,
    },
    time: {
        marginLeft: 5,
        fontSize: 12,
        color: 'grey',
    },
});

export default Chat;
