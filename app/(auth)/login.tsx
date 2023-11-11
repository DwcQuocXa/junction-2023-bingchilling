import { Picker } from '@react-native-picker/picker';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { styled } from 'nativewind';
import React from 'react';
import {
    View,
    Text,
    Pressable,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAuth } from '../../context/AuthProvider';
import BaseUserProfile from '../../json/baseUserProfile.json';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(Pressable);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledImage = styled(Image);
const StyledTextInput = styled(TextInput);

export default function Login() {
    const { setUser, user } = useAuth();
    const [step, setStep] = React.useState(0);
    const router = useRouter();
    const [inputs, setInputs] = React.useState<{
        name: string;
        gender: string;
        age: number | string;
        eye_color: string;
        skin_tone: string;
        body_type: string;
        hair_color: string;
        hair_style: string;
        outfit_style: string;
        background: string;
        facial_features: string;
    }>({
        name: 'John',
        gender: 'male',
        age: '10',
        eye_color: 'hazel',
        skin_tone: 'medium',
        body_type: 'slim',
        hair_color: 'blonde',
        hair_style: 'straight',
        outfit_style: 'sporty',
        background: 'school',
        facial_features: 'glasses',
    });

    const prevStep = () => {
        setStep(step - 1);
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const initiateForm = () => {
        setInputs({
            name: '',
            gender: '',
            age: 0,
            eye_color: '',
            skin_tone: '',
            body_type: '',
            hair_color: '',
            hair_style: '',
            outfit_style: '',
            background: '',
            facial_features: '',
        });
    };

    const cancel = () => {
        setStep(0);
        initiateForm();
    };

    const confirmProfile = () => {
        setUser({ ...inputs, id: '1', avatarUrl: 'Kid1' });
        router.replace({ pathname: '/profile-builder' });
    };

    return (
        <StyledSafeAreaView className="flex-1 px-4">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <StyledView className="items-center justify-between flex-1 w-full">
                    <StyledView className="w-full">
                        {step > 0 && step <= 12 && (
                            <StyledButton
                                className="flex items-center justify-center px-4 py-2 w-[80px] bg-slate-300 rounded-xl"
                                onPress={cancel}
                            >
                                <StyledText className="font-bold text-slate-700">Cancel</StyledText>
                            </StyledButton>
                        )}
                    </StyledView>
                    {step === 0 && (
                        <StyledView className="flex items-center space-y-5">
                            <StyledImage
                                className="w-[200px] h-[200px]"
                                source="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/76775/challenge-clipart-xl.png"
                            />
                            <StyledView className="flex items-center">
                                <StyledText className="text-xl font-bold text-slate-700">
                                    First challenge:
                                </StyledText>
                                <StyledText className="text-2xl text-slate-700">
                                    Build your avatar
                                </StyledText>
                            </StyledView>
                        </StyledView>
                    )}
                    {step > 0 && step <= 12 && (
                        <StyledView className="flex items-center space-y-5">
                            <ActivityIndicator color="#000000" style={{}} size="large" />
                        </StyledView>
                    )}
                    <StyledView>
                        <StyledView className="flex">
                            {step === 1 ? (
                                <StyledView>
                                    <StyledView className="flex items-center">
                                        <StyledText className="text-lg font-semibold text-black ">
                                            Gender
                                        </StyledText>
                                    </StyledView>
                                    <Picker
                                        selectedValue={inputs.gender}
                                        onValueChange={(value) =>
                                            setInputs({ ...inputs, gender: value })
                                        }
                                    >
                                        {BaseUserProfile.gender.map((value, index) => (
                                            <Picker.Item
                                                key={index}
                                                label={
                                                    value.charAt(0).toUpperCase() + value.slice(1)
                                                }
                                                value={value}
                                            />
                                        ))}
                                    </Picker>
                                </StyledView>
                            ) : step === 2 ? (
                                <StyledView>
                                    <StyledView className="flex items-center">
                                        <StyledText className="text-lg font-semibold text-black ">
                                            Age:
                                        </StyledText>
                                    </StyledView>
                                    <StyledTextInput
                                        className="px-4 py-2 mb-48 text-lg font-semibold text-center text-black rounded-lg placeholder:text-black bg-slate-200"
                                        value={inputs.age}
                                        onChangeText={(value) =>
                                            setInputs({ ...inputs, age: value })
                                        }
                                        placeholder="Age"
                                        keyboardType="numeric"
                                    />
                                </StyledView>
                            ) : step === 3 ? (
                                <StyledView>
                                    <StyledView className="flex items-center">
                                        <StyledText className="text-lg font-semibold text-black ">
                                            Eye Color
                                        </StyledText>
                                    </StyledView>
                                    <Picker
                                        selectedValue={inputs.eye_color}
                                        onValueChange={(value) =>
                                            setInputs({ ...inputs, eye_color: value })
                                        }
                                    >
                                        {BaseUserProfile.eyeColor.map((value, index) => (
                                            <Picker.Item
                                                key={index}
                                                label={
                                                    value.charAt(0).toUpperCase() + value.slice(1)
                                                }
                                                value={value}
                                            />
                                        ))}
                                    </Picker>
                                </StyledView>
                            ) : step === 4 ? (
                                <StyledView>
                                    <StyledView className="flex items-center">
                                        <StyledText className="text-lg font-semibold text-black ">
                                            Skin Tone
                                        </StyledText>
                                    </StyledView>
                                    <Picker
                                        selectedValue={inputs.skin_tone}
                                        onValueChange={(value) =>
                                            setInputs({ ...inputs, skin_tone: value })
                                        }
                                    >
                                        {BaseUserProfile.skinTone.map((value, index) => (
                                            <Picker.Item
                                                key={index}
                                                label={
                                                    value.charAt(0).toUpperCase() + value.slice(1)
                                                }
                                                value={value}
                                            />
                                        ))}
                                    </Picker>
                                </StyledView>
                            ) : step === 5 ? (
                                <StyledView>
                                    <StyledView className="flex items-center">
                                        <StyledText className="text-lg font-semibold text-black ">
                                            Body Type
                                        </StyledText>
                                    </StyledView>
                                    <Picker
                                        selectedValue={inputs.body_type}
                                        onValueChange={(value) =>
                                            setInputs({ ...inputs, body_type: value })
                                        }
                                    >
                                        {BaseUserProfile.bodyType.map((value, index) => (
                                            <Picker.Item
                                                key={index}
                                                label={
                                                    value.charAt(0).toUpperCase() + value.slice(1)
                                                }
                                                value={value}
                                            />
                                        ))}
                                    </Picker>
                                </StyledView>
                            ) : step === 6 ? (
                                <StyledView>
                                    <StyledView className="flex items-center">
                                        <StyledText className="text-lg font-semibold text-black ">
                                            Hair Color
                                        </StyledText>
                                    </StyledView>
                                    <Picker
                                        selectedValue={inputs.hair_color}
                                        onValueChange={(value) =>
                                            setInputs({ ...inputs, hair_color: value })
                                        }
                                    >
                                        {BaseUserProfile.hairColor.map((value, index) => (
                                            <Picker.Item
                                                key={index}
                                                label={
                                                    value.charAt(0).toUpperCase() + value.slice(1)
                                                }
                                                value={value}
                                            />
                                        ))}
                                    </Picker>
                                </StyledView>
                            ) : step === 7 ? (
                                <StyledView>
                                    <StyledView className="flex items-center">
                                        <StyledText className="text-lg font-semibold text-black ">
                                            Hair Style
                                        </StyledText>
                                    </StyledView>
                                    <Picker
                                        selectedValue={inputs.hair_style}
                                        onValueChange={(value) =>
                                            setInputs({ ...inputs, hair_style: value })
                                        }
                                    >
                                        {BaseUserProfile.hairStyle.map((value, index) => (
                                            <Picker.Item
                                                key={index}
                                                label={
                                                    value.charAt(0).toUpperCase() + value.slice(1)
                                                }
                                                value={value}
                                            />
                                        ))}
                                    </Picker>
                                </StyledView>
                            ) : step === 8 ? (
                                <StyledView>
                                    <StyledView className="flex items-center">
                                        <StyledText className="text-lg font-semibold text-black ">
                                            Outfit Style
                                        </StyledText>
                                    </StyledView>
                                    <Picker
                                        selectedValue={inputs.outfit_style}
                                        onValueChange={(value) =>
                                            setInputs({ ...inputs, outfit_style: value })
                                        }
                                    >
                                        {BaseUserProfile.outfitStyle.map((value, index) => (
                                            <Picker.Item
                                                key={index}
                                                label={
                                                    value.charAt(0).toUpperCase() + value.slice(1)
                                                }
                                                value={value}
                                            />
                                        ))}
                                    </Picker>
                                </StyledView>
                            ) : step === 9 ? (
                                <StyledView>
                                    <StyledView className="flex items-center">
                                        <StyledText className="text-lg font-semibold text-black ">
                                            Background
                                        </StyledText>
                                    </StyledView>
                                    <Picker
                                        selectedValue={inputs.background}
                                        onValueChange={(value) =>
                                            setInputs({ ...inputs, background: value })
                                        }
                                    >
                                        {BaseUserProfile.background.map((value, index) => (
                                            <Picker.Item
                                                key={index}
                                                label={
                                                    value.charAt(0).toUpperCase() + value.slice(1)
                                                }
                                                value={value}
                                            />
                                        ))}
                                    </Picker>
                                </StyledView>
                            ) : step === 10 ? (
                                <StyledView>
                                    <StyledView className="flex items-center">
                                        <StyledText className="text-lg font-semibold text-black ">
                                            Facial Feature
                                        </StyledText>
                                    </StyledView>
                                    <Picker
                                        selectedValue={inputs.facial_features}
                                        onValueChange={(value) =>
                                            setInputs({ ...inputs, facial_features: value })
                                        }
                                    >
                                        {BaseUserProfile.facialFeatures.map((value, index) => (
                                            <Picker.Item
                                                key={index}
                                                label={
                                                    value.charAt(0).toUpperCase() + value.slice(1)
                                                }
                                                value={value}
                                            />
                                        ))}
                                    </Picker>
                                </StyledView>
                            ) : step === 11 ? (
                                <StyledView>
                                    <StyledView className="flex items-center">
                                        <StyledText className="text-lg font-semibold text-black ">
                                            What's your name?
                                        </StyledText>
                                    </StyledView>
                                    <StyledTextInput
                                        className="px-4 py-2 mb-64 text-lg font-semibold leading-6 text-center text-black rounded-lg placeholder:text-black bg-slate-200"
                                        value={inputs.name}
                                        onChangeText={(value) =>
                                            setInputs({ ...inputs, name: value })
                                        }
                                        placeholder="Name"
                                    />
                                </StyledView>
                            ) : (
                                <></>
                            )}
                        </StyledView>
                        <StyledView className="flex-row items-center h-[100px] space-x-5">
                            {step > 0 && step <= 11 && (
                                <StyledButton
                                    className="w-[150px] py-3 flex justify-center items-center bg-teal-950 rounded-xl"
                                    onPress={prevStep}
                                >
                                    <StyledText className="font-bold text-white">
                                        Previous
                                    </StyledText>
                                </StyledButton>
                            )}
                            {step >= 0 && step < 11 && (
                                <StyledButton
                                    className={`${
                                        step === 0 ? 'w-[250px] py-3' : 'w-[150px] py-3'
                                    } flex justify-center items-center bg-teal-600 rounded-xl`}
                                    onPress={nextStep}
                                >
                                    <StyledText className="font-bold text-white">
                                        {step === 0 ? "Let's start" : 'Next'}
                                    </StyledText>
                                </StyledButton>
                            )}
                            {step === 11 && (
                                <StyledButton
                                    className="flex items-center justify-center bg-teal-600 rounded-xl w-[150px] py-3"
                                    onPress={confirmProfile}
                                >
                                    <StyledText className="font-bold text-white">
                                        Confirm
                                    </StyledText>
                                </StyledButton>
                            )}
                        </StyledView>
                    </StyledView>
                </StyledView>
            </TouchableWithoutFeedback>
        </StyledSafeAreaView>
    );
}
