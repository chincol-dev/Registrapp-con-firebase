import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Clase } from '../models/clase.model';

@Component({
  selector: 'app-clases-list',
  templateUrl: './clases-list.component.html',
  styleUrls: ['./clases-list.component.scss'],
})
export class ClasesListComponent implements OnInit {
  clases: Clase[] = [];
  isLoading: boolean = true;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    // Obtener el usuario autenticado y listar las clases asociadas
    const userCredentials = this.firebaseService.getCurrentUser();
    if (userCredentials && userCredentials.uid && userCredentials.uid) {
      console.log('Usuario autenticado:', userCredentials); // Verifica que el usuario se obtiene correctamente
      this.firebaseService.getClasesByProfesor(userCredentials.uid).subscribe(clases => {
        this.clases = clases;
        this.isLoading = false;
      });
    } else {
      console.warn('No se encontró un usuario autenticado.');
      this.isLoading = false;
    }
  }
}
