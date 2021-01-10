import { useSelector } from 'react-redux'
import { db } from 'src/constant/firebase'
import { State, User } from 'Store'
const generateFirebaseId = () => {
  return db.collection('_').doc().id
}

export const initializeUserId = () => {
  const id = window.localStorage.getItem('userId') || generateFirebaseId()
  window.localStorage.setItem('userId', id)
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

export const createPost = async () => {
  return ''
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
