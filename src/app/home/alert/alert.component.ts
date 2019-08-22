import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  items: Observable<{}>;
  id: String;
  constructor(private afAuth: AngularFireAuth, private _db: AngularFireDatabase, private _router: Router) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(res => {
      this.id = res.uid.substring(17, res.uid.length)
      this.items = this._db.object("users/" + res.uid).valueChanges()
    })
  }

  logout() {
    this.afAuth.auth.signOut().then(res => { this._router.navigate(['/login']) })
  }


}
