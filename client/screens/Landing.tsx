import { StyleSheet, View } from 'react-native';
import { Text, useTheme , Button} from 'react-native-elements';
import LoginScreen from '../components/Login/Login';

export interface LandingProps {
}

export function Landing(props: LandingProps) {
    const { theme } = useTheme();
    return (

        <View style={styles.view}>
            <Text
                style={styles.title}
                h1
                h1Style={{ color: theme?.colors?.secondary }}
            >
               💜DatePan💜
            </Text>
            <Text
                style={styles.text}
                h2
                h2Style={{ color: theme?.colors?.success }}
            >
                Swipe dates, not people
            </Text>
            <Text
                style={styles.text }
                h3
                h3Style={{ color: theme?.colors?.primary }}
            >
                @datepan
            </Text>
            <Text
                style={styles.text}
                h4
                h4Style={{ color: theme?.colors?.warning }}
            >
                🚧 App Under Construction 🚧
            </Text>
            <View style={styles.more}>
            {/* <Button
                title={'Early Bird Registration'}
                containerStyle={styles.button}
              /> */}
              <LoginScreen />

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1, 
        margin: 10,
        marginVertical:100
    },
    text: {
        textAlign: 'center',
        padding: 5,
    },
    title: {
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',
    },
    more: {
        marginVertical: 100,
    },
    button: {
        width: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});
