import { useNavigation } from '@react-navigation/core'

import {Button, Text, Card} from 'react-native-elements'
import { useTranslation } from 'react-i18next';
import React from 'react'

type Props = {}

const Groups = (props: Props) => {
    const navigation: any = useNavigation()
    const { t } = useTranslation()

    const handleCreateGroups = () => {
      navigation.navigate('CreateGroup')
    }

  return (
    <>
      <Text>Groups</Text>
      <Card> 
        <Text> Groups you can have members </Text>
        <Text> </Text>
      </Card>
      <Card>
      <Button title="Create Group" onPress={handleCreateGroups}/>
      </Card>
      <Card>
      <Text>List of groups</Text>
      </Card>
      

    </>
  )
}

export default Groups