import { Link, Stack, useRouter } from 'expo-router';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

import { ScreenHeaderButton } from '../../components';
import Footer from '../../components/common/Footer';
import { COLORS, SIZES } from '../../constants';

export default function Home() {
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
                    <ScreenHeaderButton imageUrl="data:image/jpeg;base64,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" />
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: COLORS.lightWhite,
                            paddingLeft: 10,
                        }}
                    >
                        <Text>Này Thắng Phan! </Text>
                        <Text>Cùng đi đây ngược nào</Text>
                    </View>
                    <ScreenHeaderButton iconName="notifications-outline" />
                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.card_notification}>
                        <Text style={styles.cardText}>Notification for daily challenge</Text>
                    </View>

                    <View style={styles.card_quest}>
                        <Text style={styles.cardText}>Ongoing quest</Text>
                    </View>

                    <View style={styles.card_event}>
                        <Text style={styles.cardText}>Event</Text>
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
        backgroundColor: '#f0f0f0',
        padding: 20,
        margin: 20,
        borderRadius: 10,
        height: '50%',
    },
    card_quest: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        margin: 20,
        borderRadius: 10,
        height: '50%',
    },
    card_event: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        margin: 20,
        borderRadius: 10,
        height: '50%',
    },
    cardText: {
        fontSize: 16,
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingVertical: 10,
    },

    scrollView: {
        margin: 8,
    },
});
