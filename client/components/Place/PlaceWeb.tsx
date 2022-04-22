import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

type Props = {}

//https://tintef.github.io/react-google-places-autocomplete/docs/props


const PlaceWeb = (props: Props) => {
    const [value, setValue] = React.useState();

    const handleChange = (value: any) => {
        console.log(value)
        setValue(value)
    }

    return (
        <View>
            <GooglePlacesAutocomplete
                apiKey="AIzaSyCVxqE2hJCikZ2iSmGyhuHxZjQ9r-so85c"
                selectProps={{
                    value,
                    onChange: handleChange,
                }}
                apiOptions={{ language: 'en', region: 'es' }}
                autocompletionRequest={{
                    componentRestrictions: {
                        country: 'es',
                    },

                }}
            />
        </View>
    )
}

export default PlaceWeb

const styles = StyleSheet.create({})