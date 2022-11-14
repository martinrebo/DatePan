
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';
import { useTranslation } from 'react-i18next';

import { Landing } from '../screens/Landing';
import HomeScreen from '../screens/Home/Home'
import Step1Category from '../screens/createWud/Step1Category';
import Step2Type from '../screens/createWud/Step2Type';
import Step3Activity from '../screens/createWud/Step3Activity';
import Step4Joiners from '../screens/createWud/Step4Joiners';
import Step5TimeAndPlace from '../screens/createWud/Step5TimeAndPlace';
import Step6Description from '../screens/createWud/Step6Description';
import MyWuds from '../screens/myWuds/MyWuds';
import EditMyWuds from '../screens/myWuds/EditMyWuds';
import Wudtimes from '../screens/Wudtimes/Wudtimes';
import WudTimeID from '../screens/WudTimeID/WudTimeID';
import ProfileView from '../screens/profile/ProfileView';
import ProfileEdit from '../screens/profile/ProfileEdit';
import MyJoinedWuds from '../screens/myJoinedWuds/MyJoinedWuds';
import Chat from '../screens/chat/Chat';
import JoinersCheckList from '../screens/myWuds/JoinersCheckList'
import Groups from '../screens/Groups/Groups'
import CreateGroup from '../screens/Groups/CreateGroup'

import AvatarHead from '../components/AvatarHead/AvatarHead';
import GoBackHead from '../components/GoBackHead/GoBackHead';
import GoHomeHead from '../components/GoHomeHead/GoHomeHead';

type Props = {}

const index = (props: Props) => {
    const Stack = createNativeStackNavigator();
    const { t } = useTranslation()

    const prefix = Linking.createURL('/');

    const linking = {
        prefixes: [prefix],
    };

    return (
        <NavigationContainer linking={linking} fallback={Landing}>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Landing} />

                <Stack.Group
                    screenOptions={({ navigation }) => ({
                        headerLeft: () => (<AvatarHead />),
                        headerRight: () => <GoHomeHead onPress={() => navigation.navigate("Home")} />,
                    })}
                >
                    <Stack.Screen options={{ title: t("createWudStep1.title") }}
                        name="Step1Category" component={Step1Category} />
                    <Stack.Screen
                        options={{
                            title: t("createWudStep2.title")
                        }} name="Step2Type" component={Step2Type} />
                    <Stack.Screen
                        options={{
                            title: t("createWudStep3.title")
                        }} name="Step3Activity" component={Step3Activity} />
                    <Stack.Screen
                        options={{
                            title: t("createWudStep4.title")
                        }}
                        name="Step4Joiners" component={Step4Joiners} />

                    <Stack.Screen
                        options={{ title: t("createWudStep5.title") }}
                        name="Step5TimeAndPlace" component={Step5TimeAndPlace} />
                    <Stack.Screen
                        options={{ title: t("createWudStep6.title") }}
                        name="Step6Description" component={Step6Description} />


                    <Stack.Screen
                        options={{
                            title: t('wudTimes.title')
                        }}
                        name="WudTimes" component={Wudtimes} />

                    <Stack.Screen
                        options={{ title: t('profileView.title') }}
                        name="ProfileView" component={ProfileView} />
                    <Stack.Screen
                        options={{ title: t('profileEdit.title') }}
                        name="ProfileEdit" component={ProfileEdit} />
                    <Stack.Screen
                        options={{ title: t('myJoinedWuds.title') }}
                        name="MyJoinedWuds" component={MyJoinedWuds} />

                    <Stack.Screen options={{ title: t('chat.title') }} name="Chat" component={Chat} />
                </Stack.Group>
                <Stack.Group
                    screenOptions={({ navigation }) => ({
                        headerLeft: () => (<AvatarHead />),
                        headerRight: () => <GoHomeHead onPress={() => navigation.navigate("Home")} />,
                    })}

                >

                    <Stack.Screen
                        options={{
                            title: t('wudTimes.title')
                        }}
                        name="WudTimeID" component={WudTimeID} />

                    <Stack.Screen
                        options={{ title: t('myWuds.title') }}
                        name="MyWuds" component={MyWuds} />

                    <Stack.Screen
                        options={{ title: t('myWuds.editMyWuds') }}
                        name="EditMyWuds" component={EditMyWuds} />

                    <Stack.Screen
                        options={{ title: t('myWuds.joinersCheckList') }}
                        name="JoinersCheckList" component={JoinersCheckList} />

                    <Stack.Screen options={{ title: t('wudTimes.title') }} name="Home" component={HomeScreen} />
                    <Stack.Screen options={{ title: 'Groups' }} name="Groups" component={Groups} />
                    <Stack.Screen options={{ title: 'Create Group' }} name="CreateGroup" component={CreateGroup} />

                </Stack.Group>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default index