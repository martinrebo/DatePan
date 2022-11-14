import { StyleSheet, View, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { addLocationData } from '../../redux/wudSlice'
import { IGooglePlace } from '../../interfaces/wudtime'
import { useDispatch } from 'react-redux'
import zIndex from '@mui/material/styles/zIndex'

type Props = {}

// *DOCS: https://tintef.github.io/react-google-places-autocomplete/docs/props

const PlaceWeb = (props: Props) => {
    const dispatch = useDispatch()

    const [value, setValue] = React.useState<IGooglePlace>();

    const handleChange = (value: any) => {
        setValue(value)
    }

    useEffect(() => {
        dispatch(addLocationData({
            label: value?.label!,
            value: {
                description: value?.value.description!,
                place_id: value?.value.place_id!,
            }

        }))

    }, [value])


    return (
        <>
            <GooglePlacesAutocomplete
                apiKey="AIzaSyCVxqE2hJCikZ2iSmGyhuHxZjQ9r-so85c"
                selectProps={{
                    value,
                    onChange: handleChange,
                    styles: {zIndex: 9999}
                }}
                apiOptions={{ language: 'en', region: 'es' }}
                autocompletionRequest={{
                    componentRestrictions: {
                        country: 'es',
                    },

                }}
                
            />
        </>
    )
}

export default PlaceWeb


