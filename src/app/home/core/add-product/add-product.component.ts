import { Component, OnInit } from '@angular/core';
import { MaterialForm } from 'src/app/interface/material-form.interace';
import { AngularFireDatabase } from '@angular/fire/database';

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

  userid:string;

  formMaterial: MaterialForm = { ...this.defaultMaterials};

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
  }

  // add(type, quantity){
  //   this.userid  = this.afAuth
  // }
}
