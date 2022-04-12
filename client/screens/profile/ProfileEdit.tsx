import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { auth, updateProfile } from '../../firebase'
import { Button, Input, Image } from 'react-native-elements'
import uploadImage from '../../helpers/uploadImage'
import downloadImage from '../../helpers/downloadImage'

type Props = {}

const ProfileEdit = ({ navigation }: any) => {

    const handleEditProfile = () => {
        navigation.navigate("ProfileView")
    }

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
        //    await  uploadImage(image, auth.currentUser?.uid!)
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
        <View>
            <Text>ProfileEdit</Text>
            <Text> Name: {auth.currentUser?.displayName}</Text>
            <Input value={name} onChangeText={handleName} maxLength={10} />
            <Text> Email: {auth.currentUser?.email}</Text>
            <Text> photo</Text>
            <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
                PlaceholderContent={<ActivityIndicator />}
            />
            <Button title="Pick an image" onPress={pickImage} />

            <Button title="Profile View" onPress={handleEditProfile} />
            <Button title="Save" onPress={handleSave} />

        </View>
    )
}

export default ProfileEdit