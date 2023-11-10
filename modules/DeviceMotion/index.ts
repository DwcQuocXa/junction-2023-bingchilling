import { DeviceMotion, DeviceMotionMeasurement } from 'expo-sensors';
import { useEffect, useState } from 'react';

export function useDeviceMotion() {
    const [data, setData] = useState<DeviceMotionMeasurement | null>(null);

    useEffect(() => {
        (async () => {
            const { status } = await DeviceMotion.getPermissionsAsync();

            if (status !== 'granted') {
                await DeviceMotion.requestPermissionsAsync();
            }

            DeviceMotion.addListener((motionData) => {
                setData(motionData);
            });

            return () => {
                DeviceMotion.removeAllListeners();
            };
        })();
    }, []);

    return data;
}
