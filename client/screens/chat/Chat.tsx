import React, { useCallback, useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { auth, db } from '../../firebase';
import { collection, addDoc, getDocs, query, orderBy, onSnapshot } from 'firebase/firestore';
import { GiftedChat } from 'react-native-gifted-chat';


const Chat = ({ navigation, route }: any) => {

    const [messages, setMessages] = useState([] as any);

    const { wudId } = route.params;


    useLayoutEffect(() => {

        const q = query(collection(db, `${wudId}`), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => setMessages(
            snapshot.docs.map(doc => ({
                _id: doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user,
            }))
        ));

        return () => {
            unsubscribe();
        };

    }, [navigation]);

    const onSend = useCallback((messages = []) => {
        const { _id, createdAt, text, user, } = messages[0]

        addDoc(collection(db, `${wudId}`), { _id, createdAt, text, user });
    }, []);

    return (

        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.email!,
                name: auth?.currentUser?.displayName!,
                avatar: auth?.currentUser?.photoURL!
            }}
        />


    );
}

export default Chat;