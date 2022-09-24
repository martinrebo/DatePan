import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { auth, updateProfile } from '../../firebase'
import { Button, Input, Image, ListItem, Card, Icon } from 'react-native-elements'
import uploadImage from '../../helpers/uploadImage'
import downloadImage from '../../helpers/downloadImage'
import LayoutScreen from '../../components/Layout/LayoutScreen';

type Props = {}

const ProfileEdit = ({ navigation }: any) => {

    const [name, setName] = React.useState(auth.currentUser?.displayName!)

    const handleName = (name: string) => {
        setName(name)
    }

    const [image, setImage] = React.useState(auth.currentUser?.photoURL!)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        })

        if (!result.cancelled) {
            let photoURL = await uploadImage(result.uri, auth.currentUser?.uid!)
            console.log(photoURL)

            setImage(photoURL)
        }

    }

    const handleSave = async () => {
        let photoResizeURL = await downloadImage(auth.currentUser?.uid!)
        await updateProfile(auth.currentUser!, {
            displayName: name,
            photoURL: photoResizeURL!
        }).then(() => {
            alert("Profile updated")
            navigation.navigate("ProfileView")
        }).catch((error) => {
            alert(error.message)
        });

    }




    return (
        <LayoutScreen>
            <Card>
                <ListItem>
                    <Icon name="user" type='evilicon' />
                    <ListItem.Content>
                        <Input placeholder="Name" value={name} onChangeText={handleName} />
                    </ListItem.Content>
                </ListItem>
            </Card>

            <Card>
                <ListItem>
                    <Icon name="mail" />
                    <ListItem.Content>
                        <Text>{auth.currentUser?.email}</Text>
                    </ListItem.Content>
                </ListItem>
            </Card>

            <Card>
                <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <Button title="Pick an image" type='outline' onPress={pickImage} />
            </Card>

            <Button title="Save" onPress={handleSave} />

        </LayoutScreen>
    )
}

export default ProfileEdit