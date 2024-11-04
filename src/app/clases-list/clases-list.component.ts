import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {Clase} from '../models/clase.model';
import {UtilsService} from "../services/utils.service";

@Component({
  selector: 'app-clases-list',
  templateUrl: './clases-list.component.html',
  styleUrls: ['./clases-list.component.scss'],
})
export class ClasesListComponent implements OnInit {
  clases: Clase[] = [];
  isLoading: boolean = true;

  constructor(private firebaseService: FirebaseService, private utilsService: UtilsService) {
  }

  ngOnInit(): void {
    // Obtener el usuario autenticado y listar las clases asociadas
    const userCredentials = this.utilsService.getFromLocaleStorage('user');
    if (!userCredentials) {
      this.utilsService.routerLink('/');
    }

    if (userCredentials && userCredentials.uid && userCredentials.uid) {
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
