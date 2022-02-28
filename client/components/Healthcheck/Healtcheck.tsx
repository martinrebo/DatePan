import React , {useEffect, useState}from 'react'
import axios from 'axios'
import { View , StyleSheet} from 'react-native'
import { Text } from '../Themed'

type Props = {}

export default function Healtcheck({ }: Props) {
    const [state, setstate] = useState(404)

    const fetchData = () => {
        const baseURL = "https://api-dot-datepan-app.ew.r.appspot.com/api";
        axios.get(`${baseURL}/system/ping`).then((response) => { 
            setstate(response.data.status)
            console.log(response.data)
        } );
      };

      useEffect(() => {
        fetchData();
      }, []);

    return (
        <View>
            <Text style={styles.text}> Healtcheck Status: { state === 200 ? "✅": "❌"} { state } </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center"
    }
})