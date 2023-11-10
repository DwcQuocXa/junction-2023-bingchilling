import { Redirect, SplashScreen } from 'expo-router';
import React, { useEffect } from 'react';

export default function Page() {
    useEffect(() => {
        async function prepare() {
            try {
                // Keep the splash screen visible while we fetch resources
                await SplashScreen.preventAutoHideAsync();
                // Load any resources or data that we need prior to rendering the app
            } catch (e) {
                console.warn(e);
            } finally {
                // Hide the splash screen
                await SplashScreen.hideAsync();
            }
        }

        prepare().then();
    }, []);
    return <Redirect href="/home" />;
}
