import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { Image } from 'expo-image';
import { router, useRouter } from 'expo-router';
import { styled } from 'nativewind';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Pressable } from 'react-native';

import ChallengeData from '../assets/images/challenges.json';
import { useAuth } from '../context/AuthProvider';

const StyledScrollView = styled(ScrollView);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledButton = styled(Pressable);
const StyledText = styled(Text);
const StyledView = styled(View);

const ProfileBuilder = () => {
    const { setUser, user, userChallenges, setUserChallenges } = useAuth();
    const [selectedPhoto, setSelectedPhoto] = useState<number | null>(0);
    const router = useRouter();

    const photos = [
        'https://cdn.leonardo.ai/users/154e3741-deff-4366-a831-5b69912fba62/generations/5f133a49-aa4c-492c-b323-e3fdf5e96438/3D_Animation_Style_Create_a_avatar_character_A_10_male_with_bl_0.jpg',
        'https://cdn.leonardo.ai/users/154e3741-deff-4366-a831-5b69912fba62/generations/5f133a49-aa4c-492c-b323-e3fdf5e96438/3D_Animation_Style_Create_a_avatar_character_A_10_male_with_bl_1.jpg',
        'https://cdn.leonardo.ai/users/154e3741-deff-4366-a831-5b69912fba62/generations/5f133a49-aa4c-492c-b323-e3fdf5e96438/3D_Animation_Style_Create_a_avatar_character_A_10_male_with_bl_2.jpg',
        'https://cdn.leonardo.ai/users/154e3741-deff-4366-a831-5b69912fba62/generations/5f133a49-aa4c-492c-b323-e3fdf5e96438/3D_Animation_Style_Create_a_avatar_character_A_10_male_with_bl_3.jpg',
    ];

    const handlePhotoPress = (index: number) => {
        setSelectedPhoto(index);
    };

    const handleConfirmPress = () => {
        // @ts-ignore
        setUser({ ...user, avatarUrl: photos[selectedPhoto] });

        const ageGroup = Number(user.age) <= 10 ? 'K' : 'Y';
        const challenges = ChallengeData.images.filter(
            (challenge) => challenge.ageGroup === ageGroup
        );

        setUserChallenges(challenges);
        /*router.push('/home');*/
        router.replace('/challenge-modal/challenge-reminder-modal');
    };

    return (
        <StyledView className="py-8">
            <StyledScrollView
                className="pl-4 space-x-5"
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {photos.map((photoUrl, index) => (
                    <StyledTouchableOpacity
                        className="relative rounded-full"
                        key={index}
                        onPress={() => handlePhotoPress(index)}
                    >
                        <StyledImage
                            className={`${
                                index === selectedPhoto ? 'opacity-60' : ''
                            } w-[350px] h-[350px] rounded-full`}
                            source={photoUrl}
                        />
                        {index === selectedPhoto && (
                            <StyledView className="absolute -translate-x-6 top-1/2 left-1/2">
                                <FontAwesome name="check" size={50} color="white" />
                            </StyledView>
                        )}
                    </StyledTouchableOpacity>
                ))}
            </StyledScrollView>

            <StyledView className="items-center justify-center w-full mt-40">
                <StyledButton
                    className="flex items-center justify-center bg-teal-600 rounded-xl w-[150px] py-3"
                    onPress={handleConfirmPress}
                >
                    <StyledText className="font-bold text-white">Confirm</StyledText>
                </StyledButton>
            </StyledView>
        </StyledView>
    );
};

export default ProfileBuilder;
