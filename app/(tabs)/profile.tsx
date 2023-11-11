import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { styled } from 'nativewind';
import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';

import { useAuth } from '../../context/AuthProvider';

const StyledScrollView = styled(ScrollView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledButton = styled(Pressable);

const Profile = () => {
    const { user } = useAuth();
    const router = useRouter();
    return (
        <StyledScrollView className="w-full px-5 py-4">
            <StyledView className="flex-row items-center w-full p-2 px-3 space-x-10 bg-white rounded-xl">
                <StyledView className="rounded-full">
                    <StyledImage className="w-32 h-32 rounded-full" source={user?.avatarUrl} />
                </StyledView>
                <StyledView className="">
                    <StyledView>
                        <StyledText className="text-xl font-bold">{user?.name}</StyledText>
                        <StyledText className="font-normal ">{user?.age}</StyledText>
                    </StyledView>
                    <StyledView>
                        <StyledButton
                            className="flex items-center justify-center px-4 py-1 bg-teal-400 rounded-xl"
                            onPress={() => {
                                router.push('/(auth)/login');
                            }}
                        >
                            <StyledText className="font-bold text-white">Edit profile</StyledText>
                        </StyledButton>
                    </StyledView>
                </StyledView>
            </StyledView>
        </StyledScrollView>
    );
};

export default Profile;
