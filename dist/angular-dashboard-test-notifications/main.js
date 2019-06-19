(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/configuration/components/configuration.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/configuration/components/configuration.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  configuration works!\n</p>\n"

/***/ }),

/***/ "./src/app/configuration/components/configuration.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/configuration/components/configuration.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYXRpb24vY29tcG9uZW50cy9jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/configuration/components/configuration.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/configuration/components/configuration.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function() { return ConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigurationComponent = /** @class */ (function () {
    function ConfigurationComponent() {
    }
    ConfigurationComponent.prototype.ngOnInit = function () {
    };
    ConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-configuration',
            template: __webpack_require__(/*! ./configuration.component.html */ "./src/app/configuration/components/configuration.component.html"),
            styles: [__webpack_require__(/*! ./configuration.component.scss */ "./src/app/configuration/components/configuration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigurationComponent);
    return ConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/core-routing.module.ts":
/*!****************************************!*\
  !*** ./src/app/core-routing.module.ts ***!
  \****************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_components_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/app/app.component */ "./src/app/core/components/app/app.component.ts");
/* harmony import */ var _sign_in_components_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-in/components/sign-in.component */ "./src/app/sign-in/components/sign-in.component.ts");
/* harmony import */ var _dashboard_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/components/dashboard/dashboard.component */ "./src/app/dashboard/components/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/components/side-menu/side-menu.component */ "./src/app/dashboard/components/side-menu/side-menu.component.ts");







var routes = [
    { path: '', component: _core_components_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
    { path: 'sign-in', component: _sign_in_components_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"] },
    { path: 'dashboard', component: _dashboard_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
    { path: 'dashboard/Statistics/Projects', component: _dashboard_components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_6__["SideMenuComponent"] }
];
var CoreRoutingModule = /** @class */ (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());



/***/ }),

/***/ "./src/app/core.module.ts":
/*!********************************!*\
  !*** ./src/app/core.module.ts ***!
  \********************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/core-routing.module.ts");
/* harmony import */ var _core_components_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/app/app.component */ "./src/app/core/components/app/app.component.ts");
/* harmony import */ var _configuration_components_configuration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./configuration/components/configuration.component */ "./src/app/configuration/components/configuration.component.ts");
/* harmony import */ var _dashboard_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/components/dashboard/dashboard.component */ "./src/app/dashboard/components/dashboard/dashboard.component.ts");
/* harmony import */ var _sign_in_components_sign_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sign-in/components/sign-in.component */ "./src/app/sign-in/components/sign-in.component.ts");
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/components/header/header.component */ "./src/app/core/components/header/header.component.ts");
/* harmony import */ var _dashboard_components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/components/side-menu/side-menu.component */ "./src/app/dashboard/components/side-menu/side-menu.component.ts");
/* harmony import */ var _dashboard_components_main_content_area_main_content_area_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/components/main-content-area/main-content-area.component */ "./src/app/dashboard/components/main-content-area/main-content-area.component.ts");





//import { HttpModule } from '@angular/http';








var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _core_components_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _configuration_components_configuration_component__WEBPACK_IMPORTED_MODULE_7__["ConfigurationComponent"],
                _dashboard_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _sign_in_components_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"],
                _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _dashboard_components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_11__["SideMenuComponent"],
                _dashboard_components_main_content_area_main_content_area_component__WEBPACK_IMPORTED_MODULE_12__["MainContentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _core_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoreRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
                ///HttpModule
            ],
            providers: [],
            bootstrap: [_core_components_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/components/app/app.component.html":
/*!********************************************************!*\
  !*** ./src/app/core/components/app/app.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main class=\"vh-100\">\n<router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ "./src/app/core/components/app/app.component.scss":
/*!********************************************************!*\
  !*** ./src/app/core/components/app/app.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/components/app/app.component.ts":
/*!******************************************************!*\
  !*** ./src/app/core/components/app/app.component.ts ***!
  \******************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-dashboard-test-notifications';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/core/components/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/core/components/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/core/components/header/header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/components/header/header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\">\n  <div class=\"navbar-item col-2\">\n    <a class=\"navbar-brand\"\n       href=\"#\">SPApp</a>\n  </div>\n  <div class=\"navbar-item col-5 offset-1\"\n       *ngIf=\"!toggleNotifications; else elseBlock\"\n       [ngClass]=\"{\n        'text-primary': randomNotification.type == 'info',\n        'text-warning': randomNotification.type == 'warning',\n        'text-danger': randomNotification.type == 'error'}\">\n    {{ randomNotification.type}} - {{ randomNotification.content}} - {{ timestamp | date:'mm:ss' }}\n  </div>\n    <ng-template #elseBlock>\n        <!-- Notifications are dismissed TO FIX -->\n            <div class=\"navbar-item col-5 offset-1\">Notifications are dismissed</div>\n    </ng-template>\n    <span class=\"d-inline float-right custom-control custom-switch p-0 m-0\">\n      <input type=\"checkbox\"\n             class=\"custom-control-input\"\n             id=\"customSwitch1\"\n             (click)=\"toggleNotification()\">\n      <label class=\"custom-control-label\"\n             for=\"customSwitch1\"></label>\n    </span>\n  <!--/div-->\n  <div class=\"navbar-item col-2 offset-2 float-right\">\n    <button type=\"button\"\n            routerLink=\"/sign-in\"\n            class=\"btn btn-outline-success nav-item float-right\">Log In</button>\n    <button type=\"button\"\n            routerLink=\"/dashboard\"\n            class=\"btn btn-outline-primary nav-item\">Configuration</button>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/core/components/header/header.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/components/header/header.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav.nav-center {\n  margin: 0;\n  float: none;\n}\n\n.navbar-inner {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb3NpYXB0YWsvRGVza3RvcC9hbmd1bGFyLWRhc2hib2FyZC10ZXN0LW5vdGlmaWNhdGlvbnMvc3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi5uYXYtY2VudGVyIHtcbiAgICBtYXJnaW46MDtcbiAgICBmbG9hdDpub25lO1xufVxuXG4ubmF2YmFyLWlubmVye1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xufSIsIi5uYXYubmF2LWNlbnRlciB7XG4gIG1hcmdpbjogMDtcbiAgZmxvYXQ6IG5vbmU7XG59XG5cbi5uYXZiYXItaW5uZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/core/components/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_sign_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/sign-in.service */ "./src/app/shared/services/sign-in.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(signInService) {
        var _this = this;
        this.signInService = signInService;
        this.notifications = [
            { content: "this is a warning notification", type: "warning" },
            { content: "this is an error notification", type: "error" },
            { content: "this is an info notification", type: "info" }
        ];
        this.randomTime = 0;
        this.toggleNotifications = false;
        this.randomNotification = this.notifications[0];
        this.timestamp = Date.now();
        this.getRandomTime = function () {
            var min = Math.ceil(5000);
            var max = Math.floor(10000);
            return _this.randomTime = Math.floor(Math.random() * (max - min + 1)) + min;
        };
        this.displayRandomNotification = function () {
            _this.randomNotification = _this.notifications[Math.floor(Math.random() * _this.notifications.length)];
        };
        this.displayNotification = function () {
            console.log(_this.toggleNotifications);
            if (_this.toggleNotifications) {
                clearInterval(_this.displayRandomNotification);
            }
            else {
                setInterval(_this.displayRandomNotification, _this.getRandomTime());
            }
        };
        this.toggleNotification = function () {
            _this.toggleNotifications = !_this.toggleNotifications;
            console.log(_this.toggleNotifications);
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.displayNotification();
        this.signInService.getStatus();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/core/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_sign_in_service__WEBPACK_IMPORTED_MODULE_2__["SignInService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/dashboard/dashboard.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/components/dashboard/dashboard.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid m-0 p-0\">\n<app-side-menu></app-side-menu>\n<app-main-content-area></app-main-content-area>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/dashboard/dashboard.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/components/dashboard/dashboard.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/dashboard/dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/components/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/components/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/main-content-area/main-content-area.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/components/main-content-area/main-content-area.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dragContainer\"\n     class=\"col-10 d-inline-block float-right vh-100 p-0\">\n  <div id=\"draggable\"\n       class=\"card w-25\">\n    <div id=\"draggable1\"\n         class=\"card-header\">\n      <h2 id=\"draggable2\"\n          class=\"mb-0\">\n        <button id=\"draggable3\"\n                class=\"btn btn-link\"\n                type=\"button\"\n                data-toggle=\"collapse\"\n                data-target=\"#collapseOne\"\n                aria-expanded=\"true\"\n                aria-controls=\"collapseOne\">\n          Collapsible window\n        </button>\n      </h2>\n    </div>\n\n    <div id=\"collapseOne\"\n         class=\"collapse show\"\n         aria-labelledby=\"draggable1\"\n         data-parent=\"#dragContainer\">\n      <div class=\"card-body\">\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, odit voluptate labore tenetur laboriosam\n        doloremque architecto ducimus harum nobis quasi.\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/components/main-content-area/main-content-area.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/components/main-content-area/main-content-area.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border-radius-reset {\n  border-radius: 0%;\n}\n\n#dragContainer {\n  margin-top: 3.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb3NpYXB0YWsvRGVza3RvcC9hbmd1bGFyLWRhc2hib2FyZC10ZXN0LW5vdGlmaWNhdGlvbnMvc3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9tYWluLWNvbnRlbnQtYXJlYS9tYWluLWNvbnRlbnQtYXJlYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvbWFpbi1jb250ZW50LWFyZWEvbWFpbi1jb250ZW50LWFyZWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL21haW4tY29udGVudC1hcmVhL21haW4tY29udGVudC1hcmVhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlci1yYWRpdXMtcmVzZXR7XG4gICAgYm9yZGVyLXJhZGl1czogMCU7XG59XG4jZHJhZ0NvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAzLjVyZW07XG59IiwiLmJvcmRlci1yYWRpdXMtcmVzZXQge1xuICBib3JkZXItcmFkaXVzOiAwJTtcbn1cblxuI2RyYWdDb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzLjVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/components/main-content-area/main-content-area.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/components/main-content-area/main-content-area.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MainContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentComponent", function() { return MainContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainContentComponent = /** @class */ (function () {
    function MainContentComponent() {
        var _this = this;
        this.active = false;
        this.xOffset = 0;
        this.yOffset = 0;
        this.addListeners = function () {
            _this.container = document.querySelector('#dragContainer');
            _this.dragItem = document.querySelector('#draggable');
            _this.dragItem1 = document.querySelector('#draggable1');
            _this.dragItem2 = document.querySelector('#draggable2');
            _this.container.addEventListener('touchstart', _this.dragStart, false);
            _this.container.addEventListener('touchend', _this.dragEnd, false);
            _this.container.addEventListener('touchmove', _this.drag, false);
            _this.container.addEventListener('mousedown', _this.dragStart, false);
            _this.container.addEventListener('mouseup', _this.dragEnd, false);
            _this.container.addEventListener('mousemove', _this.drag, false);
        };
        this.dragStart = function (e) {
            if (e.type === 'touchstart') {
                _this.initialX = e.touches[0].clientX - _this.xOffset;
                _this.initialY = e.touches[0].clientY - _this.yOffset;
            }
            else {
                _this.initialX = e.clientX - _this.xOffset;
                _this.initialY = e.clientY - _this.yOffset;
            }
            if (e.target === _this.dragItem ||
                e.target === _this.dragItem1 ||
                e.target === _this.dragItem2) {
                _this.active = true;
            }
        };
        this.dragEnd = function (e) {
            _this.initialX = _this.currentX;
            _this.initialY = _this.currentY;
            _this.active = false;
        };
        this.drag = function (e) {
            if (_this.active) {
                e.preventDefault();
                if (e.type === 'touchmove') {
                    _this.currentX = e.touches[0].clientX - _this.initialX;
                    _this.currentY = e.touches[0].clientY - _this.initialY;
                }
                else {
                    _this.currentX = e.clientX - _this.initialX;
                    _this.currentY = e.clientY - _this.initialY;
                }
                _this.xOffset = _this.currentX;
                _this.yOffset = _this.currentY;
                _this.setTranslate(_this.currentX, _this.currentY, _this.dragItem);
            }
        };
        this.setTranslate = function (xPos, yPos, el) {
            if (xPos < 0) {
                xPos = 0;
            }
            if (yPos < 0) {
                yPos = 0;
            }
            if (xPos > _this.container.offsetWidth) {
                xPos = _this.container.offsetWidth;
            }
            if (yPos > _this.container.offsetWidth) {
                yPos = _this.container.offsetWidth;
            }
            el.style.transform = 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0)';
        };
    }
    MainContentComponent.prototype.ngOnInit = function () {
        this.addListeners();
    };
    MainContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-content-area',
            template: __webpack_require__(/*! ./main-content-area.component.html */ "./src/app/dashboard/components/main-content-area/main-content-area.component.html"),
            styles: [__webpack_require__(/*! ./main-content-area.component.scss */ "./src/app/dashboard/components/main-content-area/main-content-area.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainContentComponent);
    return MainContentComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/side-menu/side-menu.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/components/side-menu/side-menu.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-2 mt-1 p-0 d-inline-block\">\n    <div id=\"MainMenu\">\n        <div class=\"list-group panel\">\n            <a href=\"#\"\n               class=\"list-group-item\"\n               data-parent=\"#MainMenu\">Dashboard</a>\n            <a href=\"#statistics\"\n               class=\"list-group-item nav-link\"\n               data-toggle=\"collapse\"\n               data-parent=\"#MainMenu\">Statistics</a>\n            <div class=\"collapse\"\n                 id=\"statistics\">\n                <a href=\"#\"\n                   class=\"list-group-item\"> - Tests</a>\n                <a href=\"#\"\n                   class=\"list-group-item\"> - Devices</a>\n                   <a href=\"#\"\n                   class=\"list-group-item\"> - Builds</a>\n                   <a href=\"#\"\n                   class=\"list-group-item\"> - Services</a>\n                   <a routerLink=\"/dashboard\"\n                   class=\"list-group-item\"> - Projects</a>\n            </div>\n            <a href=\"#reports\"\n               class=\"list-group-item nav-link\"\n               data-toggle=\"collapse\"\n               data-parent=\"#MainMenu\">Reports</a>\n            <div class=\"collapse\"\n                 id=\"reports\">\n                 <a href=\"#\"\n                 class=\"list-group-item\"> - Tests</a>\n              <a href=\"#\"\n                 class=\"list-group-item\"> - Devices</a>\n                 <a href=\"#\"\n                 class=\"list-group-item\"> - Builds</a>\n                 <a href=\"#\"\n                 class=\"list-group-item\"> - Services</a>\n                 <a href=\"#\"\n                 class=\"list-group-item\"> - Projects</a>\n            </div>\n            <a href=\"#\"\n            class=\"list-group-item\"\n            data-parent=\"#MainMenu\">Configurations</a>\n        </div>\n        <a href=\"#overview\"\n        class=\"list-group-item nav-link\"\n        data-toggle=\"collapse\"\n        data-parent=\"#MainMenu\">Overview</a>\n     <div class=\"collapse\"\n          id=\"overview\">\n          <a href=\"#\"\n          class=\"list-group-item\"> - Tests</a>\n       <a href=\"#\"\n          class=\"list-group-item\"> - Devices</a>\n          <a href=\"#\"\n          class=\"list-group-item\"> - Builds</a>\n          <a href=\"#\"\n          class=\"list-group-item\"> - Services</a>\n          <a href=\"#\"\n          class=\"list-group-item\"> - Projects</a>\n     </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/side-menu/side-menu.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/components/side-menu/side-menu.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item[data-toggle].collapsed:after {\n  content: \"+\";\n}\n\n.list-group-item[data-toggle]:not(.collapsed):after {\n  content: \"-\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb3NpYXB0YWsvRGVza3RvcC9hbmd1bGFyLWRhc2hib2FyZC10ZXN0LW5vdGlmaWNhdGlvbnMvc3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtBQ0FKOztBREVBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmxpc3QtZ3JvdXAtaXRlbVtkYXRhLXRvZ2dsZV0uY29sbGFwc2VkOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIitcIjtcbn1cbi5saXN0LWdyb3VwLWl0ZW1bZGF0YS10b2dnbGVdOm5vdCguY29sbGFwc2VkKTphZnRlciB7XG4gICAgY29udGVudDogXCItXCI7XG59IiwiLmxpc3QtZ3JvdXAtaXRlbVtkYXRhLXRvZ2dsZV0uY29sbGFwc2VkOmFmdGVyIHtcbiAgY29udGVudDogXCIrXCI7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW1bZGF0YS10b2dnbGVdOm5vdCguY29sbGFwc2VkKTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiLVwiO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/side-menu/side-menu.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/components/side-menu/side-menu.component.ts ***!
  \***********************************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent(rte) {
        this.rte = rte;
    }
    SideMenuComponent.prototype.ngOnInit = function () {
        this.route = this.rte.url;
        console.log(109, this.route);
    };
    SideMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-menu',
            template: __webpack_require__(/*! ./side-menu.component.html */ "./src/app/dashboard/components/side-menu/side-menu.component.html"),
            styles: [__webpack_require__(/*! ./side-menu.component.scss */ "./src/app/dashboard/components/side-menu/side-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/sign-in.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/sign-in.service.ts ***!
  \****************************************************/
/*! exports provided: SignInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInService", function() { return SignInService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SignInService = /** @class */ (function () {
    function SignInService(http) {
        this.http = http;
        this.url = 'http://localhost:5000/Login';
    }
    SignInService.prototype.getUserFromRequest = function (login, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, fetch(this.url, {
                        method: 'POST',
                        body: JSON.stringify({
                            login: login,
                            password: password,
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(function (res) { return res.json(); })
                        .then(function (response) {
                        _this.data = JSON.stringify(response);
                        console.log(56, _this.data);
                        return _this.data;
                    })];
            });
        });
    };
    SignInService.prototype.getStatus = function () {
        console.log(65, this.data);
        return this.data;
    };
    SignInService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SignInService);
    return SignInService;
}());



/***/ }),

/***/ "./src/app/sign-in/components/sign-in.component.html":
/*!***********************************************************!*\
  !*** ./src/app/sign-in/components/sign-in.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container d-flex vh-100\">\n  <div class=\"row align-self-center w-100\">\n    <div class=\"col-6 mx-auto\">\n      <div class=\"card m-0 p-0\">\n        <span *ngIf=\"errorMessage\"\n              class=\"alert alert-danger login-result-message\"\n              role=\"alert\">\n          {{ errorMessage }}\n        </span>\n        <div class=\"card-body\">\n          <form (ngSubmit)=\"handleSubmit()\"\n                #loginForm=\"ngForm\"\n                novalidate>\n            <div class=\"form-group\">\n              <label for=\"inlineFormInputLogin\">User Name\n                <sup class=\"text-danger\">*</sup>\n              </label>\n              <input required\n                     #login=\"ngModel\"\n                     [(ngModel)]=\"user.login\"\n                     [class.is-invalid]=\"login.invalid && login.touched\"\n                     type=\"login\"\n                     name=\"login\"\n                     class=\"form-control\"\n                     id=\"inlineFormInputLogin\"\n                     placeholder=\"Enter Username\">\n              <small class=\"text-danger\"\n                     *ngIf=\"login.touched\">\n                <span *ngIf=\"login.errors?.required\">\n                  Pole\n                  <em>User name</em>\n                  jest puste\n                </span>\n              </small>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Password\n                <sup class=\"text-danger\">*</sup>\n              </label>\n              <input required\n                     type=\"password\"\n                     class=\"form-control field-password\"\n                     #password=\"ngModel\"\n                     [(ngModel)]=\"user.password\"\n                     name=\"password\"\n                     id=\"exampleInputPassword1\"\n                     placeholder=\"Password\">\n\n              <small class=\"text-danger\"\n                     *ngIf=\"password.touched\">\n                <span *ngIf=\"password.errors?.required\">\n                  Pole\n                  <em>password</em>\n                  jest puste\n                </span>\n              </small>\n            </div>\n\n            <button type=\"submit\"\n                    class=\"btn btn-primary submit-form\"\n                    [disabled]=\"loginForm.invalid\">\n              Zaloguj się\n            </button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sign-in/components/sign-in.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/sign-in/components/sign-in.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.col-4 {\n  border: 1px solid #a09f9f;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb3NpYXB0YWsvRGVza3RvcC9hbmd1bGFyLWRhc2hib2FyZC10ZXN0LW5vdGlmaWNhdGlvbnMvc3JjL2FwcC9zaWduLWluL2NvbXBvbmVudHMvc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lnbi1pbi9jb21wb25lbnRzL3NpZ24taW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaWduLWluL2NvbXBvbmVudHMvc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5jb2wtNCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2MCwgMTU5LCAxNTkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iLCJkaXYuY29sLTQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTA5ZjlmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/sign-in/components/sign-in.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/sign-in/components/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_sign_in_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/sign-in.service */ "./src/app/shared/services/sign-in.service.ts");




var SignInComponent = /** @class */ (function () {
    function SignInComponent(router, signInService) {
        var _this = this;
        this.router = router;
        this.signInService = signInService;
        this.login = false;
        this.errorMessage = '';
        this.user = {
            login: null,
            password: null
        };
        this.checkUser = function () {
            _this.signInService.getUserFromRequest(_this.user.login, _this.user.password).then(function (response) {
                if (response === '200') {
                    _this.login = true;
                    _this.router.navigateByUrl('/dashboard');
                }
                else {
                    _this.errorMessage = 'Niepoprawny email lub hasło';
                }
            });
        };
    }
    SignInComponent.prototype.ngOnDestroy = function () { };
    SignInComponent.prototype.handleSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.checkUser();
                return [2 /*return*/];
            });
        });
    };
    SignInComponent.prototype.ngOnInit = function () { };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/components/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/sign-in/components/sign-in.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_sign_in_service__WEBPACK_IMPORTED_MODULE_3__["SignInService"]])
    ], SignInComponent);
    return SignInComponent;
}());



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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/core.module */ "./src/app/core.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gosiaptak/Desktop/angular-dashboard-test-notifications/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map