import { FontAwesome } from '@expo/vector-icons';
import { styled } from 'nativewind';
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
                <FontAwesome name="search" size={24} color="black" />
                <FontAwesome name="user" size={24} color="black" />
            </StyledView>
        </StyledView>
    );
};

export default ChatHeader;
