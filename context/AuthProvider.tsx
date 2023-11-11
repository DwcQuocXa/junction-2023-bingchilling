import { useSegments, useRouter } from 'expo-router';
import React, { createContext, useContext, useEffect, useState } from 'react';

type User = {
    id: string;
    name: string;
    gender: 'male' | 'female' | 'other';
    age: number;
    eye_color: string;
    skin_tone: string;
    body_type: string;
    hair_color: string;
    hair_style: string;
    outfit_style: string;
    background: string;
    facial_feature: string;
};

type AuthType = {
    user: User | null;
    setUser: (user: User | null) => void;
};

export const DEFAULT_USER: User = {
    id: '123123',
    name: 'Nguyen',
    gender: 'female',
    age: 12,
    eye_color: '',
    skin_tone: '',
    body_type: '',
    hair_color: '',
    hair_style: '',
    outfit_style: '',
    background: '',
    facial_feature: '',
};

const AuthContext = createContext<AuthType>({
    user: null,
    setUser: () => {},
});

export const useAuth = () => useContext(AuthContext);

function useProtectedRoute(user: any) {
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        const inAuthGroup = segments[0] === '(auth)';

        if (!user && !inAuthGroup) {
            router.replace('/login');
        } else if (user && inAuthGroup) {
            router.replace('/home');
        }
    }, [user, segments]);
}

export function AuthProvider({ children }: { children: JSX.Element }): JSX.Element {
    const [user, setUser] = useState<User | null>(DEFAULT_USER);

    useProtectedRoute(user);

    const authContext: AuthType = {
        user,
        setUser,
    };

    return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
}