import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import { styled } from 'nativewind';
import { TouchableOpacity } from 'nativewind/dist/preflight';
import React from 'react';
import { View, Text } from 'react-native';

const StyledView = styled(View);
const StyledText = styled(Text);

const ChatHeader = () => {
    return (
        <StyledView className="flex-row items-center justify-between w-full">
            <StyledView className="flex-1" />
            <StyledText className="text-lg font-semibold">Friends</StyledText>
            <StyledView style={{ justifyContent: 'flex-end' }} className="flex-row flex-1">
                <StyledView
                    style={{ justifyContent: 'space-between', gap: 15 }}
                    className="flex-row"
                >
                    <AntDesign name="search1" size={24} color="black" />
                    <TouchableOpacity onPress={() => router.push('/add-friend')}>
                        <AntDesign name="adduser" size={24} color="black" />
                    </TouchableOpacity>
                </StyledView>
            </StyledView>
        </StyledView>
    );
};

export default ChatHeader;
