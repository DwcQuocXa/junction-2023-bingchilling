import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'; // You can use any icon library

const Header = ({ userName }: { userName: string }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{`Hello, ${userName}!`}</Text>
            <TouchableOpacity>
                {/*<Icon name="ios-notifications-outline" size={25} />*/}
                Icon
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        // Add additional styling as needed
    },
    headerText: {
        fontSize: 20,
        // Add additional styling as needed
    },
});

export default Header;
