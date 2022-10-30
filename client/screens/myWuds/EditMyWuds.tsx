import { View, Text } from 'react-native'
import React from 'react'
import { useGetWudTimebyIdQuery } from '../../api/api'

type Props = {
    route: any
}

const EditMyWuds = ({route}: Props) => {
    const { wudId } = route.params
    const { data, isLoading, error, isSuccess } = useGetWudTimebyIdQuery(wudId)
    // TODO: Liz can add key values to the event

  return (
    <View>
      <Text>EditMyWuds</Text>
      <Text> Change Time </Text>
      <Text> Change Description</Text>
      <Text> Add Key Values for the event </Text>
      <Text> Delete</Text>
    </View>
  )
}

export default EditMyWuds