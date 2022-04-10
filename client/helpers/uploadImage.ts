import { storage, ref, uploadBytes, getDownloadURL } from "../firebase";

export default async function uploadImageToStorage(uri: any, uid: string) {
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  // @ts-ignore
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });

  const fileRef = ref(storage, `${uid}`);
  // @ts-ignore
  const result = await uploadBytes(fileRef, blob);

  // We're done with the blob, close and release it
  // @ts-ignore
  //   blob.close();

  return await getDownloadURL(fileRef);
}
