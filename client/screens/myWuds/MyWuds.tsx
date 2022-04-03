import React from 'react'
import { View, Text } from 'react-native'
import { auth } from '../../firebase'
import { useMyWudsQuery } from '../../api/api'
import { Wudtime } from '../../interfaces/wudtime'
import { Card } from 'react-native-elements'

type Props = {}

export default function YourWuds({}: Props) {

  let userId = auth.currentUser?.uid ? auth.currentUser?.uid : ''

  const { data, error, isLoading } = useMyWudsQuery(userId)

console.log("Current user", data?.documents)
  return (
    <>
     <View>
         <Text>YourWuds</Text>
     {data?.documents?.map((wud: any, i) => {
        return (
          <View key={i}>
            <Text>{isLoading ? "...Loading" : null}</Text>
            <Card>
            <Text>{wud.data.type}</Text>
            <Text>{wud.data.subtype}</Text>
            <Text>{wud.data.activity}</Text>
            <Text>{wud.data.notes}</Text>

            </Card>
            
          </View>
        )
     })}

    </View>   
       
        
        </>
  )
}