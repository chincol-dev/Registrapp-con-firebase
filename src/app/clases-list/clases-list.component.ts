import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Clase } from '../models/clase.model';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
    this.firebaseService.getCurrentUser().pipe(
      switchMap(user => {
        if (user && user.uid) {
          return this.firebaseService.getClasesByProfesor(user.uid);
        } else {
          this.isLoading = false;
          return [];
        }
      })
    ).subscribe(clases => {
      this.clases = clases;
      this.isLoading = false;
    });
  }
}
