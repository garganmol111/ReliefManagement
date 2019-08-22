import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styleUrls: [ './alert.component.css' ]
})
export class AlertComponent implements OnInit {
	constructor(private afAuth: AngularFireAuth, private _db: AngularFireDatabase, private _router: Router) {}
	alerts: { 'id': string; 'location': string }[] = [];

	ngOnInit() {
		this._db.object('alert').valueChanges().subscribe((res) => {
			console.log(Object.keys(res));
			Object.keys(res).forEach((element) => {
				this.alerts = [];
				this._db.list('POC').valueChanges().subscribe((res) => {
					res.forEach((ele) => {
						this.alerts.push({ id: element, location: ele['location'] });
					});
					console.log(this.alerts);
				});
			});
		});
	}

	logout() {
		this.afAuth.auth.signOut().then((res) => {
			this._router.navigate([ '/login' ]);
		});
	}
}
