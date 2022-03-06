import { View, Text } from 'react-native'
import React , {useContext} from 'react'
import i18n from '../../in18n/in18n';
import { Icon } from 'react-native-elements';

import translation from '../../in18n/translations'

type Props = {}

const LanguageButton = (props: Props) => {

    const availableTranslations : any = {
        es: translation.es,
       en: translation.en
     };


    const changeLanguage = (languageCode: any) => {
        console.log(languageCode)
        i18n.translations = {
            [languageCode]: availableTranslations[languageCode]
        };
        i18n.locale = languageCode;
      };

    const handleOnPress = () => {
     console.log(i18n.locale)
// i18n.locale = "es"

    }
    return (
        <View>
            <Text>Language</Text>
            <Icon name='g-translate' onPress={handleOnPress} color='#00aced' />
            <Icon name='g-translate' onPress={handleOnPress} />
        </View>
    )
}

export default LanguageButton