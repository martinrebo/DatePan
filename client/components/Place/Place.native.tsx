import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import { Card } from 'react-native-elements'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const Place = (): JSX.Element => {
    console.log('GooglePlaces Autocomplete')
    return (
            <GooglePlacesAutocomplete
                placeholder='Search Location'
                onPress={(data, details) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                fetchDetails={true}
                // currentLocation={true}
                onNotFound={() => console.log('no results')}
                // minLength={3}
                onFail={(err)=>console.log('Google ERROR => ', err)}
                query={{
                    key: 'AIzaSyCVxqE2hJCikZ2iSmGyhuHxZjQ9r-so85c',
                    language: 'en',
                }}
                // requestUrl={{
                //     useOnPlatform: 'all', // or "all"
                //     url:
                //         'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api', // or any proxy server that hits https://maps.googleapis.com/maps/api
                //     headers: {
                //         Authorization: `an auth token`, // if required for your proxy
                //     },
                // }}
                disableScroll={true}
            />
    )
}

export default Place

const styles = StyleSheet.create({})