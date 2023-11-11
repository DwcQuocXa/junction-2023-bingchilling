import { useSegments, useRouter } from 'expo-router';
import React, { createContext, useContext, useEffect, useState } from 'react';

import ChallengeData from '../assets/images/challenges.json';

type User = {
    id: string;
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
    avatarUrl: string;
};

type AuthType = {
    user: User | null;
    setUser: (user: User | null) => void;
    userChallenges: any[] | null;
    setUserChallenges: (challenges: any[] | null) => void;
};

const AuthContext = createContext<AuthType>({
    user: null as User,
    setUser: () => {},
    userChallenges: null as any[],
    setUserChallenges: () => {},
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
    const [user, setUser] = useState<User | null>(null);
    const [userChallenges, setUserChallenges] = useState<any[]>([]);

    useProtectedRoute(user);

    const authContext: AuthType = {
        user,
        setUser,
        userChallenges,
        setUserChallenges,
    };

    return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
}
