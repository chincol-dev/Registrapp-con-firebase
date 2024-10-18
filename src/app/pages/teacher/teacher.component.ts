import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  qrCodeValue: string;

  constructor() { }

  ngOnInit(): void {
    // Asignar el valor del QR directamente
    this.qrCodeValue = 'https://example.com';
  }
}
