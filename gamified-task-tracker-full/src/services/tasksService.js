// Simple Firestore wrappers. Caller must supply uid from auth.
import { db } from '../firebase';
import { collection, addDoc, doc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore';

export async function createTask(uid, task) {
  const coll = collection(db, `users/${uid}/tasks`);
  const payload = { ...task, createdAt: new Date().toISOString(), completed: false };
  const ref = await addDoc(coll, payload);
  return { id: ref.id, ...payload };
}

export async function updateTask(uid, id, patch) {
  const ref = doc(db, `users/${uid}/tasks`, id);
  await updateDoc(ref, patch);
}

export async function deleteTask(uid, id) {
  const ref = doc(db, `users/${uid}/tasks`, id);
  await deleteDoc(ref);
}

export async function fetchTasks(uid) {
  const coll = collection(db, `users/${uid}/tasks`);
  const snap = await getDocs(coll);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}
