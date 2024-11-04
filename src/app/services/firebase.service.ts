import {inject, Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore'; // Firestore para guardar roles
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {User} from '../models/user.model';
import {updateProfile} from "@angular/fire/auth"; // Importa tu modelo de usuario
import {getFirestore, setDoc, doc, getDoc} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);


  //Iniciar sesión
  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //Registrar usuario
  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //actualizar usuario
  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, {displayName: displayName});
  }


  //Base de datos
  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }

  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }
}
