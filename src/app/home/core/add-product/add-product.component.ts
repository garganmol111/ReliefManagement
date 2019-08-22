import { Component, OnInit } from '@angular/core';
import { MaterialForm } from 'src/app/interface/material-form.interace';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  defaultMaterials: MaterialForm = {
    type: 'food',
    quantity: 0
  };

  uid;
  users: any;

  formMaterial: MaterialForm = { ...this.defaultMaterials};

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  add(type: string, quantity: number){
    this.uid = this.db.object(`users/${this.afAuth.auth.currentUser.uid}`).valueChanges();
  }
}
