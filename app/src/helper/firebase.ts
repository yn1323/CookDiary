import moment from 'moment-timezone'
import { isProduction, APP_NAME, LS_USER_ID } from 'src/constant'

import { db, storage, DEV_COLLECTION } from 'src/constant/firebase'

import { Post, State, User } from 'Store'
import { FetchList } from 'Request'

export const generateFirebaseId = () => {
  return db.collection('_').doc().id
}

export const getId = () => {
  const returnId = window.localStorage.getItem(LS_USER_ID) || ''
  return returnId
}

export const updateLSUserId = (id: string) => {
  window.localStorage.setItem(LS_USER_ID, id)
}

export const initializeUserId = () => {
  const id = isProduction ? getId() || generateFirebaseId() : DEV_COLLECTION
  updateLSUserId(id)
  return id
}

export const getList = async (searchObj: FetchList) => {
  // const hasCondition = !!Object.keys(searchObj).length
  // const conditions = Object.keys(searchObj).map((key: string) => ({key, val: searchObj[key]}))

  const ref = db.collection(getId()).where('deleteFlg', '==', false)
  const snapshots = searchObj.tag
    ? await ref
        .where('tag', '==', searchObj?.tag || '')
        .orderBy('date', 'desc')
        .get()
    : await ref.orderBy('date', 'desc').get()
  const docs = snapshots.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    date: moment(doc.data().date?.toDate() || '').format('YYYY/M/D'),
  }))
  return docs
}

export const createPost = async (post: Post) => {
  const userId = getId()
  console.log(userId)
  console.log({ ...post })
  await db
    .collection(userId)
    .doc(post.id)
    .set({
      ...post,
      date: new Date(),
      deleteFlg: false,
      type: APP_NAME,
    })
}

export const getPost = async (docId: string) => {
  const ref = db.collection(getId()).doc(docId)
  const snapshot = await ref.get()
  return {
    ...snapshot.data(),
    id: snapshot.id,
    date: moment(snapshot.data()?.date?.toDate() || '').format('YYYY/M/D'),
  }
}

export const updatePost = async (post: Post) => {
  const ref = db.collection(getId()).doc(post.id)
  await ref.update({
    ...post,
    date: new Date(),
  })
}

export const deletePost = async (docId: string) => {
  const ref = db.collection(getId()).doc(docId)
  await ref.update({
    deleteFlg: true,
  })
  await deleteImage(`${getId()}/${docId}`)
}

export const createImage = async (file: any, path: string) => {
  const storageRef = storage.ref(path)
  const uploadTaskSnapshot = await storageRef.put(file)
  const downloadURL = await uploadTaskSnapshot.ref.getDownloadURL()
  return downloadURL
}

export const deleteImage = async (path: string) => {
  const deleteRef = storage.ref(`${path}_400x400`)
  deleteRef.delete()
}

export const getImage = async () => {
  const storageRef = storage.ref(getId())
  const result = await storageRef.listAll()
  const ret: any = {}
  await Promise.all(
    result.items.map(async imgRef => {
      // 画像追加、削除後のエラーを予防
      try {
        const id = imgRef.name.replace('_400x400', '')
        const url = await getImageUrl(imgRef)
        ret[id] = url
      } catch (e) {
        console.warn(e)
      }
    })
  )
  return ret
}

const getImageUrl = async (imgRef: any) => {
  return await imgRef.getDownloadURL()
}
