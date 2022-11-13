import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import { Card } from 'react-native-elements'
import React, {useState, useEffect} from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux'
import { IGooglePlace } from '../../interfaces/wudtime'
import { addLocationData } from '../../redux/wudSlice'

const Place = (): JSX.Element => {
    console.log('GooglePlaces Autocomplete')

    const dispatch = useDispatch()

    const [value, setValue] = React.useState<any>();

    const handleChange = (value: any) => {
        console.log(value)
        setValue(value)

    }

    useEffect(() => {
        dispatch(addLocationData({
            label: value?.description!,
            value: {
                description: value?.description!,
                place_id: value?.place_id!,
            }

        }))

    }, [value])


    return (
            <GooglePlacesAutocomplete
                placeholder='Search Location'
                onPress={(value) => handleChange(value)}
                // fetchDetails={true}
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