import { getStorage, ref, getDownloadURL } from "firebase/storage";

const storage = getStorage();

export default async function downloadImage(uid: string) {
  let urlResized = await getDownloadURL(
    ref(storage, `user/pictures/${uid}_200x200`)
  )
    .then((url) => {
      return url;
    })
    .catch((error) => {
      // Handle any errors+
      console.log(error);
    });
  return urlResized;
}
