import React from 'react';
import { View, Text } from 'react-native';

import { useAuth } from '../../context/AuthProvider';

export default function Login() {
    const { setUser } = useAuth();

    const createUser = () => {
        setUser(null);
    };

    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}></View>;
}
