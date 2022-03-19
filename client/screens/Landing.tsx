import { AuthErrorCodes, browserPopupRedirectResolver } from 'firebase/auth';
import { StyleSheet, View } from 'react-native';
import { Text, useTheme, Button, Image } from 'react-native-elements';

import Healtcheck from '../components/Healthcheck/Healtcheck';
import LanguageButton from '../components/LanguageButton/LanguageButton';
import LoginScreen from '../components/Login/Login';

import i18n from '../in18n/in18n';


export interface LandingProps {
}

export function Landing(props: LandingProps) {
    const { theme } = useTheme();
    return (

        <View style={styles.container}>

            <View style={styles.item}>
                <Image source={require('../assets/images/wudLogo.png')} containerStyle={styles.image} />
            </View>
            <View style={styles.item}>
                <Text
                    style={styles.title}
                    h1
                    h1Style={{ color: theme?.colors?.primary }}
                >
                    WudTime
                </Text>
                <Text
                    style={styles.text}
                    h4
                    h2Style={{ color: theme?.colors?.grey2 }}
                >
                    {i18n.t('motto')}
                </Text>
            </View>
            <View style={styles.more}>
                <LoginScreen />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginVertical: 100,
        alignContent: "center",
        alignItems: 'center'
    },
    item: {
        alignContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        alignContent: 'center',

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
});
