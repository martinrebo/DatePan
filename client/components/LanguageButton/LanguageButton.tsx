import { View, Text, StyleSheet } from 'react-native'
import { Button, Icon } from 'react-native-elements';
import { useTranslation } from 'react-i18next';


type Props = {}

const LanguageButton = (props: Props) => {
    const { t, i18n } = useTranslation();
    const handleOnPressSpanish = () => {
        i18n.changeLanguage('es');
    }
    const handleOnPressEnglish = () => {
        i18n.changeLanguage('en');
    }

    return (
        <View style={styles.container}>
            <Button title="🇪🇸" onPress={handleOnPressSpanish} type='clear' />
            <Button title="🇺🇸" onPress={handleOnPressEnglish} type='clear' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
});

export default LanguageButton