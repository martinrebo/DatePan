// import {db} from '../firebase'
// import { collection, addDoc, getDocs, query, orderBy, onSnapshot, firestore } from 'firebase/firestore';
// //https://stackoverflow.com/questions/71108432/want-to-add-group-chat-functionality-in-my-chat-application-using-react-native-g
// const createRoom = (roomName: string) => {
// if (roomName.length > 0) {
//     firestore()
//     .collection('THREADS')
//     .add({
//       name: roomName,
//       latestMessage: {
//         text: `You have joined the room ${roomName}.`,
//         createdAt: new Date().getTime(),
//       },
//     })
//     .then(docRef => {
//       docRef.collection('MESSAGES').add({
//         text: `You have joined the room ${roomName}.`,
//         createdAt: new Date().getTime(),
//         system: true,
//       });
//     });
// }};

// export default createRoom;
