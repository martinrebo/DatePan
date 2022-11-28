import { useNavigation } from '@react-navigation/core'

import { Button, Text, Card } from 'react-native-elements'
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
    <Card>
      <Text>Group Members</Text>
      <Card>
        <Text> </Text>
      </Card>
      <Card>
        <Button title="Create Group" onPress={handleCreateGroups} />
      </Card>
      <Card>
        <Text>TODO: Display List of Members</Text>
      </Card>
    </Card>
  )
}

export default Groups