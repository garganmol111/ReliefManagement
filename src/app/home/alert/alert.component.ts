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
	$userType;
	ngOnInit() {
		this.$userType = this._db.object(`users/${this.afAuth.auth.currentUser.uid}`).valueChanges();
		this._db.object('alert').valueChanges().subscribe((res) => {
			var lat = this._db.list('POC').valueChanges().subscribe((res) => {
				this.alerts = [];
				res.forEach((element) => {
					Object.keys(element['alert']).forEach((ele) => {
						this.alerts.push({ id: element['alert'][ele], location: element['location'] });
					});
					lat.unsubscribe();
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
