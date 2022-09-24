import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const Place = (): JSX.Element => {
    return (
        <>
            <Text>Google MAaps aoutsearch</Text>
            <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: 'AIzaSyCVxqE2hJCikZ2iSmGyhuHxZjQ9r-so85c',
                    language: 'en',
                }}
                requestUrl={{
                    useOnPlatform: 'web', // or "all"
                    url:
                        'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api', // or any proxy server that hits https://maps.googleapis.com/maps/api
                    headers: {
                        Authorization: `an auth token`, // if required for your proxy
                    },
                }}
            />
        </>
    )
}

export default Place

const styles = StyleSheet.create({})