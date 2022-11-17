
import { StyleSheet, View } from 'react-native';
import { Text, useTheme, Image } from 'react-native-elements';

import LoginScreen from '../components/Login/Login';
import { useTranslation } from 'react-i18next';
import LayoutScreen from '../components/Layout/LayoutScreen';


export interface LandingProps {
}

export function Landing(props: LandingProps) {
    const { theme } = useTheme()
    const { t } = useTranslation()
    return (
        <LayoutScreen>
            <View style={styles.container}>
                <View style={styles.item}>
                    <Image source={require(`../assets/images/logos/${process.env.BRAND}-Logo.png`)} containerStyle={styles.image} />
                </View>
                <View style={styles.item}>
                    <Text
                        style={styles.title}
                        h1
                        h1Style={{ color: theme?.colors?.primary }}
                    >
                        {t('brandName')}
                    </Text>
                    <Text
                        style={styles.text}
                        h4
                        h2Style={{ color: theme?.colors?.grey2 }}
                    >
                        {t('motto')}
                    </Text>
                    <Text style={styles.text}>
                        {t('welcome')}
                    </Text>
                </View>
                <View style={styles.more}>
                    <LoginScreen />
                </View>
            </View>
        </LayoutScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        // marginVertical: 100,
        alignContent: "center",
        alignItems: 'center'
    },
    item: {
        alignContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
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
