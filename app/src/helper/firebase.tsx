import { useSelector } from 'react-redux'

import { APP_NAME, LS_USER_ID } from 'src/constant'

import { db } from 'src/constant/firebase'

import { Post, State, User } from 'Store'
import { encodeHtmlLineBreak } from './common'

const generateFirebaseId = () => {
  return db.collection('_').doc().id
}

const getId = () => {
  return window.localStorage.getItem(LS_USER_ID) || ''
}

export const updateLSUserId = (id: string) => {
  window.localStorage.setItem(LS_USER_ID, id)
}

export const initializeUserId = () => {
  const id = getId() || generateFirebaseId()
  updateLSUserId(id)
  return id
}

const getUserId = () => {
  const { user = {} as User } = useSelector((state: State) => state)
  return user.id
}

export const getList = async () => {
  const colRef = db.collection('users' || getUserId()).limit(10)
  const snapshots = await colRef.get()
  const docs = snapshots.docs.map(doc => doc.data())
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
      // ingredients: encodeHtmlLineBreak(payload.ingredients),
      // tips: encodeHtmlLineBreak(payload.tips),
      // steps: encodeHtmlLineBreak(payload.steps),
      deleteFlg: false,
      type: APP_NAME,
    })
}

export const getPost = async () => {
  return ''
}

export const updatePost = async () => {
  return ''
}

export const delPost = async () => {
  return ''
}
