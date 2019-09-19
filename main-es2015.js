(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/disaster/summary/summary.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/disaster/summary/summary.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Disasters</h1>\r\n<div class=\"card\" style=\"width: 18rem;\">\r\n  <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Disaster</h5>\r\n    <p class=\"card-text\">Text</p>\r\n    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n  </div>\r\n</div>\r\n<div class=\"card\" style=\"width: 18rem;\">\r\n  <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Disaster</h5>\r\n    <p class=\"card-text\">Text</p>\r\n    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n  </div>\r\n</div>\r\n<div class=\"card\" style=\"width: 18rem;\">\r\n  <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Disaster</h5>\r\n    <p class=\"card-text\">Text</p>\r\n    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n  </div>\r\n</div>\r\n<div class=\"card\" style=\"width: 18rem;\">\r\n  <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Disaster</h5>\r\n    <p class=\"card-text\">Text</p>\r\n    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n  </div>\r\n</div>\r\n<div class=\"card\" style=\"width: 18rem;\">\r\n  <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Disaster</h5>\r\n    <p class=\"card-text\">Text</p>\r\n    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"holder\">\r\n    <div class=\"container-flex\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <div class=\"home-header-title\">\r\n                    <h1 style=\"margin-bottom:-0.5em\">It is time to </h1>\r\n                    <span class=\"typing-element\"></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4 login \">\r\n                <div class=\"login-container \">\r\n                    <h1>Login</h1>\r\n                    <div class=\"example-form\" [formGroup]=\"loginForm\">\r\n                        <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                            <mat-label>Email</mat-label>\r\n                            <input matInput placeholder=\"\" formControlName=\"email\">\r\n                            <mat-error *ngIf=\"isEmailInvalid()\">Email ID not valid</mat-error>\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                            <mat-label>Password</mat-label>\r\n                            <input matInput placeholder=\"\" type=\"password\" formControlName=\"password\">\r\n                            <mat-error *ngIf=\"isPasswordValid()\">Password not valid</mat-error>\r\n                        </mat-form-field>\r\n\r\n                        <button mat-flat-button color=\"primary\" [disabled]=\"loginForm.invalid\" (click)=\"login()\">Login<mat-icon\r\n                                aria-hidden=\"false\" style=\"margin-left: 0.2em\" aria-label=\"Example home icon\">\r\n                                arrow_right_alt</mat-icon>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");





const routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomeModule),
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
        path: "**",
        redirectTo: ''
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Relief Management';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _disaster_summary_summary_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./disaster/summary/summary.component */ "./src/app/disaster/summary/summary.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




















// const firebaseConfig = {
//   apiKey: 'AIzaSyAEOwKnM9tqAIZT7rGO2zBomXifTHBYziE',
//   authDomain: 'teksystem-hackathon.firebaseapp.com',
//   databaseURL: 'https://teksystem-hackathon.firebaseio.com',
//   projectId: 'teksystem-hackathon',
//   storageBucket: '',
//   messagingSenderId: '1030562055942',
//   appId: '1:1030562055942:web:dbb73b1c20d3453b'
// };
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _disaster_summary_summary_component__WEBPACK_IMPORTED_MODULE_16__["SummaryComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production }),
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot(),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_18__["AngularFireDatabaseModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/disaster/summary/summary.component.css":
/*!********************************************************!*\
  !*** ./src/app/disaster/summary/summary.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc2FzdGVyL3N1bW1hcnkvc3VtbWFyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/disaster/summary/summary.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/disaster/summary/summary.component.ts ***!
  \*******************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SummaryComponent = class SummaryComponent {
    constructor() { }
    ngOnInit() {
    }
};
SummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-summary',
        template: __webpack_require__(/*! raw-loader!./summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/disaster/summary/summary.component.html"),
        styles: [__webpack_require__(/*! ./summary.component.css */ "./src/app/disaster/summary/summary.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SummaryComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".holder{\r\n    /* background-image: url('../../assets/wallpaper.jpg'); */\r\n    height: 100vh!important;\r\n    width: 90vw!important ;\r\n    background-size: contain\r\n}\r\n.col-md-3{\r\n    padding-right: 0!important\r\n}\r\n.col-md-6{\r\n    height: 100%;\r\n}\r\n.login{\r\n    background: white;\r\n    height: 100vh;\r\n    padding: 4em 0em 4em 4em\r\n}\r\n.login-container{\r\n    margin-top: 3em!important;\r\n    width: 100%\r\n}\r\n.home-header-title{\r\n    margin-left: 4em;\r\n    margin-top: 14em;\r\n}\r\n.typing-element{\r\n    font-size: 73px;\r\n    font-weight: 900;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\nh1{\r\n    font-weight: 900;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.example-form {\r\n    min-width: 100px;\r\n    max-width: 550px;\r\n    width: 100%;\r\n    margin-top: 2.5em;\r\n    \r\n  }\r\n.example-full-width {\r\n    width: 100%;\r\n  }\r\nbutton{\r\n      border-radius: 0px!important;\r\n\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlEQUF5RDtJQUN6RCx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2I7QUFDSjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCO0FBQ0o7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUNBQXFDO0FBQ3pDO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUNBQXFDO0FBQ3pDO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7O0VBRW5CO0FBRUE7SUFDRSxXQUFXO0VBQ2I7QUFFQTtNQUNJLDRCQUE0Qjs7RUFFaEMiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbGRlcntcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3dhbGxwYXBlci5qcGcnKTsgKi9cclxuICAgIGhlaWdodDogMTAwdmghaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDkwdnchaW1wb3J0YW50IDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpblxyXG59XHJcbi5jb2wtbWQtM3tcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAhaW1wb3J0YW50XHJcbn1cclxuLmNvbC1tZC02e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubG9naW57XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nOiA0ZW0gMGVtIDRlbSA0ZW1cclxufVxyXG4ubG9naW4tY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogM2VtIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlXHJcbn1cclxuXHJcbi5ob21lLWhlYWRlci10aXRsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiA0ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxNGVtO1xyXG59XHJcblxyXG4udHlwaW5nLWVsZW1lbnR7XHJcbiAgICBmb250LXNpemU6IDczcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDF7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMi41ZW07XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbntcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4IWltcG9ydGFudDtcclxuXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");









let LoginComponent = class LoginComponent {
    constructor(afAuth, _fb, _snackBar, router, afDb) {
        this.afAuth = afAuth;
        this._fb = _fb;
        this._snackBar = _snackBar;
        this.router = router;
        this.afDb = afDb;
        this.isComponentActive = true;
    }
    ngOnInit() {
        this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeWhile"])(() => this.isComponentActive)).subscribe((res) => {
            if (res)
                this.router.navigate(['']);
        });
        this.loginForm = this._fb.group({
            email: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            ],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
        let options = {
            strings: ['Donate.', 'Help.', 'Make things better.'],
            typeSpeed: 100,
            backSpeed: 100,
            showCursor: true,
            cursorChar: '|',
            loop: true
        };
        new Typed('.typing-element', options);
    }
    ngOnDestroy() {
        this.isComponentActive = false;
    }
    login() {
        this.afAuth.auth
            .signInWithEmailAndPassword(this.loginForm.value['email'], this.loginForm.value['password'])
            .then((res) => {
            this.afDb.object(`users/${res.user.uid}`).valueChanges().subscribe((res) => {
                localStorage.setItem('userType', res.toString());
                this.router.navigate(['']);
            });
        }, (err) => {
            this._snackBar.open(err.message, 'Retry', { duration: 2000, verticalPosition: 'top' });
        });
    }
    isEmailInvalid() {
        return this.loginForm.get('email').valid;
    }
    isPasswordValid() {
        return this.loginForm.get('password').valid;
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthGuard = class AuthGuard {
    constructor(_router, afAuth) {
        this._router = _router;
        this.afAuth = afAuth;
    }
    canActivate() {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            if (user)
                return true;
            else
                this.defaultBehavior();
        }));
    }
    defaultBehavior() {
        this._router.navigate(['/login']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
], AuthGuard);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyAEOwKnM9tqAIZT7rGO2zBomXifTHBYziE',
        authDomain: 'teksystem-hackathon.firebaseapp.com',
        databaseURL: 'https://teksystem-hackathon.firebaseio.com',
        projectId: 'teksystem-hackathon',
        storageBucket: '',
        messagingSenderId: '1030562055942',
        appId: '1:1030562055942:web:dbb73b1c20d3453b'
    },
    mapbox: {
        accesssToken: 'pk.eyJ1IjoiYXl1c2gtbWFoYWphbiIsImEiOiJjanptcmt4cTIwNnY5M25ueTN2NHZsNHdlIn0.pmHv4q5SGzgsIZMBJ_N_5A'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\AnmolGarg\Desktop\ReliefManagement\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map