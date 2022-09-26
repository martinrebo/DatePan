import { View, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useGetWudTimesQuery } from '../../api/api'
import { Button, Card, Avatar, Text, Divider, ListItem } from 'react-native-elements'
import { auth } from '../../firebase'
import { useJoinWudTimeMutation } from '../../api/api'
import { addActivityEmoji, addCategoryEmoji } from '../../helpers/addEmoji'
import LayoutScreen from '../../components/Layout/LayoutScreen'
import { WUDS } from '../../constants/WUDS'
import wudSlice from '../../redux/wudSlice'
import { IWudtime } from '../../interfaces/wudtime'
import Wud from '../../components/Wud/Wud'
import { checkJoined } from '../../helpers'
import { useNavigation } from '@react-navigation/core'
import WudCompact from '../../components/Wud/WudCompact'
type Props = {
  navigation: any
}

function Wudtimes({ }: Props) {
  const { data, error, isLoading, isSuccess } = useGetWudTimesQuery("Barcelona")

  return (
    <>
      <LayoutScreen>
        <Text>{isLoading ? "...Loading" : null}</Text>
        {isSuccess ?
          data?.documents?.map((wud: any, i) =>

            <Card key={i}>
              <WudCompact data={wud.data} id={wud._id} />
            </Card>

          )
          : <Text> No Data </Text>}

      </LayoutScreen>
    </>
  )
}


export default Wudtimes

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
})
