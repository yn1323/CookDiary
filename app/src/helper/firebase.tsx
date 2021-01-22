import { useSelector } from 'react-redux'

import { isProduction, APP_NAME, LS_USER_ID } from 'src/constant'

import { db, DEV_COLLECTION } from 'src/constant/firebase'

import { Post, State, User } from 'Store'
import { FetchList } from 'Request'

const generateFirebaseId = () => {
  return db.collection('_').doc().id
}

const getId = () => {
  return window.localStorage.getItem(LS_USER_ID) || ''
}
const getCurrentPost = () => {
  const { post = {} as Post } = useSelector((state: State) => state)
  return post
}

export const updateLSUserId = (id: string) => {
  window.localStorage.setItem(LS_USER_ID, id)
}

export const initializeUserId = () => {
  const id = isProduction ? getId() || generateFirebaseId() : DEV_COLLECTION
  updateLSUserId(id)
  return id
}

const getUserId = () => {
  const { user = {} as User } = useSelector((state: State) => state)
  return user.id
}

export const getList = async (searchObj: FetchList) => {
  // const hasCondition = !!Object.keys(searchObj).length
  // const conditions = Object.keys(searchObj).map((key: string) => ({key, val: searchObj[key]}))

  const ref = db.collection(getId()).where('deleteFlg', '==', false)
  const snapshots = searchObj.tag
    ? await ref.where('tag', '==', searchObj?.tag || '').get()
    : await ref.get()
  const docs = snapshots.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  return docs
}

export const createPost = async (payload: Post) => {
  const userId = getId()
  const docId = generateFirebaseId()
  await db
    .collection(userId)
    .doc(docId)
    .set({
      ...payload,
      deleteFlg: false,
      type: APP_NAME,
    })
}

export const getPost = async (docId: string) => {
  const ref = db.collection(getId()).doc(docId)
  const snapshot = await ref.get()
  return { ...snapshot.data(), id: snapshot.id }
}

export const updatePost = async (post: Post) => {
  const ref = db.collection(getId()).doc(post.id)
  await ref.update({
    ...post,
  })
}

export const deletePost = async (docId: string) => {
  const ref = db.collection(getId()).doc(docId)
  await ref.update({
    deleteFlg: true,
  })
}
