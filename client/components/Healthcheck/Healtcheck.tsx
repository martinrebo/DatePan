import React , {useEffect}from 'react'
import axios from 'axios'
import { View , StyleSheet} from 'react-native'
import { Text } from '../Themed'

type Props = {}

export default function Healtcheck({ }: Props) {

    const fetchData = () => {
        const baseURL = "http://localhost:3000/api/";
        axios.get(`${baseURL}/system/ping`).then((response) => console.log(response.data));
      };
      
      useEffect(() => {
        fetchData();
      }, []);

    return (
        <View>
            <Text style={styles.text}> Healtcheck </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center"
    }
})