import { Component, OnInit } from '@angular/core';
import { MaterialForm } from 'src/app/interface/material-form.interace';

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

  formMaterial: MaterialForm = { ...this.defaultMaterials};
  constructor() { }

  ngOnInit() {
  }

}
