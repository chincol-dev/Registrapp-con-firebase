import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss'],
})
export class TestsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
