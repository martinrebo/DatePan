import React, { useState, useEffect } from 'react';
import { View } from 'react-native'
import { Text } from 'react-native-elements';

import * as Location from 'expo-location';

export default function LocationComponent() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View>
            <Text >{text}</Text>
            <Text>Latitude: {location?.latitude}</Text>
            <Text>Longitude: {location?.longitude}</Text>
        </View>
    );
}