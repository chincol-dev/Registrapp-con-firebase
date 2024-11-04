import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
})
export class ClassComponent implements OnInit {
  clase = null;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    const claseId = this.route.snapshot.paramMap.get('id');
    if (claseId) {
      this.firebaseService.getClasesById(claseId)
        .then(data => {
          this.clase = data;
          this.isLoading = false;
        })
        .catch(error => {
          console.error('Error al obtener los detalles de la clase:', error);
          this.isLoading = false;
        });
    }
  }
}
