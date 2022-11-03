import React from 'react'
import { Button, Divider, Icon, Text, Card } from 'react-native-elements'
import { useGetWudTimebyIdQuery } from '../../api/api'
import LayoutScreen from '../../components/Layout/LayoutScreen'
import EditWud from '../../components/Wud/EditWud'
import Location from '../../components/Location/Location'

type Props = {
    route: any
}


const EditMyWuds = ({ route }: Props) => {
    const { wudId } = route.params
    const { data, isLoading, error, isSuccess } = useGetWudTimebyIdQuery(wudId)

    const handleEdit = (field: string) => {
        // console.log("Clcick", field)
        // Api post request update mywuds 
    }

    // TODO: Liz can add key values to the event
    // console.log('EditMyWuds', data)

    return (
        <LayoutScreen>
            <Card>
                <Text h2>EditMyWuds</Text>
                {isLoading ? <Text>Loading</Text> :
                    <EditWud data={data?.event.data} handleEdit={(field: string) => handleEdit(field)} />
                }

                <Divider width={5} />
                <Button title="Delete" />
                <Card>
                    <Location />
                </Card>
            </Card>
        </LayoutScreen>
    )
}

export default EditMyWuds