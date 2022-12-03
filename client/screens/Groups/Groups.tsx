import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { Button, Text, Card, Avatar, ListItem } from 'react-native-elements'
import { useTranslation } from 'react-i18next';

import { useGetGroupsQuery } from '../../api/api'

type Props = {}

const Groups = (props: Props) => {
  const navigation: any = useNavigation()
  const { t } = useTranslation()
  const { data, isError, isLoading, isSuccess } = useGetGroupsQuery('this')

  const handleCreateGroups = () => {
    navigation.navigate('CreateGroup')
  }
  console.log('GrouppDatadata', data)
  return (
    <>
      {
        isSuccess ? data.documents.map(group => (
          <Card key={group._id}>
            <Text h2> {group.groupData.groupName}</Text >
            <Card>
              <Text> {group.groupData.description}</Text>
            </Card>
            <Card>
              <Text>List of Members:  {group.members?.length}</Text>
              {group.members?.map(member =>
                <ListItem key={member.uid}>
                  <Avatar
                    title={member.userName}
                    source={{ uri: member.photoURL }}
                  />
                  <ListItem.Content>
                    <ListItem.Title>{member.userName}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              )}
            </Card>
          </Card >))
          : <Text> ... Loading </Text>
      }
      <Card>
        <Button title="Create Group" onPress={handleCreateGroups} disabled />
      </Card>
    </>
  )
}

export default Groups