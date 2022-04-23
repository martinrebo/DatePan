import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { addLocationData } from '../../redux/wudSlice'
import { IGooglePlace } from '../../interfaces/wudtime'

type Props = {}

//https://tintef.github.io/react-google-places-autocomplete/docs/props


const PlaceWeb = (props: Props) => {
    const [value, setValue] = React.useState<IGooglePlace>();

    const handleChange = (value: any) => {
        console.log(value)
        setValue(value)

    }

    useEffect(() => {
        addLocationData({
            label: value?.label!,
            value: {
                description: value?.value.description!,
                place_id: value?.value.place_id!,
            }

        })
    }, [value])


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

