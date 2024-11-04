import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Firestore para guardar roles
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { User } from '../models/user.model';
import { updateProfile } from '@angular/fire/auth'; // Importa tu modelo de usuario
import { getFirestore, setDoc, doc, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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

  // Método para obtener el usuario autenticado
  getCurrentUser() {
    return getAuth(); // Retorna un observable con el estado de autenticación
  }

  // Método para obtener clases basadas en el ID del profesor
  getClasesByProfesor(profesorId: string): Observable<any[]> {
    return this.firestore.collection('Clases', ref =>
      ref.where('profesorId', '==', profesorId)
    ).valueChanges({ idField: 'id' });
  }

  // Método para obtener clases basadas en el ID del alumno
  getClasesByAlumno(alumnoId: string): Observable<any[]> {
    return this.firestore.collection('Clases', ref =>
      ref.where('alumnos', 'array-contains', { alumnoId: alumnoId })
    ).valueChanges({ idField: 'id' });
  }
}
