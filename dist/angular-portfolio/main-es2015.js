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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- <mat-grid-list class=\"about\" cols=\"3\" rowHeight=\"1:1\"> -->\n<div class=\"container about\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutAlign=\"center\"\n     fxLayoutGap=\"20px\"\n     fxLayoutGap.xs=\"0\">\n  <div class=\"item item-4 imgPosition\" fxFlex=\"40%\"  >\n    <img src=\"http://www.qikong.tk/img/photo.png\" alt=\"Photo of a Shiba Inu\">\n    <!-- <button mat-button>link</button> -->\n    <!-- <br>\n    <mat-icon>link</mat-icon>\n    <mat-icon>mood</mat-icon>\n     -->\n    <!-- <button mat-button>Facebook</button> -->\n  </div>\n  <div class=\"item item-5\" fxFlex=\"60%\">\n      <h1 class=\"titleBack\">Qi Kong (Claire)</h1>\n      <p class=\"ContentFont titleBack\">Front End Developer</p>\n      <button class=\"titleBack\" mat-raised-button color=\"primary\" (click)=\"downloadPdf()\">Download CV</button>\n      <button mat-raised-button color=\"accent\" routerLink=\"/contact\">Contact</button>\n\n      <table mat-table [dataSource]=\"dataSource\" >\n\n        <ng-container matColumnDef=\"name\">\n          <td mat-cell *matHeaderCellDef>  </td>\n          <td mat-cell *matCellDef=\"let element\" class=\"name \"> {{element.name}} </td>\n        </ng-container>\n      \n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"content\">\n          <td mat-cell *matHeaderCellDef>  </td>\n          <td mat-cell *matCellDef=\"let element\" ><p class=\"ContentFont\">{{element.content}}</p>  </td>\n        </ng-container>      \n      \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n\n  </div>\n</div>\n  \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <mat-sidenav-container>\n        <!--this is a place for us to add side-nav code-->\n        <mat-sidenav #sidenav role=\"navigation\">\n            <app-sidenav-list (sidenavClose)=\"sidenav.close()\"></app-sidenav-list>\n        </mat-sidenav>\n\n        <mat-sidenav-content>\n            <!--in here all the content must reside. We will add a navigation header as well-->\n            <app-header (sidenavToggle)=\"sidenav.toggle()\"></app-header>\n            \n            <main>\n                \n                <div *ngIf=\"router.url === '/'\">\n                    <app-about></app-about>\n                    <app-skills></app-skills>\n                    <app-portfolio></app-portfolio>\n                    <app-education></app-education>\n                    <app-contact></app-contact>\n\n                </div>\n                <div *ngIf=\"router.url !== '/'\">\n                    <router-outlet></router-outlet>\n                </div>\n                \n                <footer class=\"page-footer\" id=\"footerStyle\">\n                    <div class=\"footer-copyright\">\n                        <div class=\"container\">\n                            <h3>Thank you for your visting!</h3>\n                            <p>© 2020  QiKong</p>\n            \n                        </div>\n                    </div>\n                </footer>\n            </main>\n        </mat-sidenav-content>\n    </mat-sidenav-container>\n\n\n\n<!-- <router-outlet></router-outlet> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contact\">\n    <h1>Contact</h1>\n    <div class=\"row\"  *ngIf=\"showMsg\">\n        <mat-toolbar [ngStyle]=\"{'background-color': statusColor}\">{{submitResult}}</mat-toolbar>\n\n    </div>\n    <div class=\"container \" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"5%\" fxLayoutGap.xs=\"0\">\n\n        \n        <div class=\"item item-4 imgPosition\" fxFlex=\"60%\">\n\n            <mat-card class=\"card front-end\">\n                <mat-card-content>\n                    <h3>Hey There, happy to hear from you.</h3>\n                    <!-- <form class=\"example-form\" (ngSubmit) = \"onClickSubmit()\"> -->\n                        \n                    <mat-form-field class=\"example-full-width\">\n                        <input type=\"text\" \n                                placeholder=\"Name\" \n                                aria-label=\"name\" \n                                required\n                                matInput \n                                [(ngModel)]=\"inputData.name\">\n\n                    </mat-form-field>\n                    <br>\n                    <mat-form-field class=\"example-full-width\">\n\n                        <input type=\"text\" \n                                placeholder=\"Email\" \n                                aria-label=\"email\" \n                                required\n                                matInput\n                                [(ngModel)]=\"inputData.email\"\n                                >\n                    </mat-form-field>\n                    <br>\n                    <mat-form-field class=\"example-full-width\">\n\n                        <textarea type=\"text\" \n                                placeholder=\"Message\" \n                                aria-label=\"message\" \n                                matInput\n                                required\n                                [(ngModel)]=\"inputData.message\">\n                            </textarea>\n                    </mat-form-field>\n                    <mat-card-actions>\n                        <button mat-raised-button color=\"primary\" (click)=\"postMessages()\">SUBMIT</button>\n                    </mat-card-actions>\n                    <!-- </form> -->\n                </mat-card-content>\n            </mat-card>\n\n        </div>\n        <div class=\"item item-5\" fxFlex=\"40%\">\n\n            <div class=\"mapArea\">\n                <!-- app.component.html -->\n                <agm-map \n                [latitude]=\"latitude\" \n                [longitude]=\"longitude\" \n                [zoom]=\"zoom\" >\n                <agm-marker \n                [latitude]=\"latitude\" \n                [longitude]=\"longitude\"></agm-marker>\n                </agm-map>\n\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/education/education.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/education/education.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n    <h1>Education</h1>\n    <div class=\"timeline\">\n      <ul>\n        <li>\n          <div class=\"content\">\n            <h3>Nova Scotia Community College</h3>\n            <p>Diploma - IT Web development. This two-year program provide basic design skills, as well as skills in building, programming, supporting and managing websites.It combines computer programming skills with systems analysis, database design, server implementation skills.</p>\n          </div>\n          <div class=\"time\">\n            <h4>2018.9 - 2020.5</h4>\n          </div>\n        </li>\n        \n        <li>\n          <div class=\"content\">\n            <h3>Harbin Engineering University</h3>\n            <p>Master degree - Signal and Information Processing. Master students are researching in these fields and accumulate many experiences in technology.\n                During “The tenth five year plan”, we have deeply developed the research of non-linear information signal processing and visual image recognition, especially in morphology filter and stack filter technology.\n\n            </p>\n          </div>\n          <div class=\"time\">\n            <h4>2008.8 - 2011.3\n                </h4>\n          </div>\n        </li>\n        \n        <li>\n          <div class=\"content\">\n            <h3>Harbin Engineering University</h3>\n            <p>Bachelor degree - Electrical Engineering.This program gives students a broad understanding of the key principles that are responsible for the extraordinary advances in the technology of computers, micro-electronics, automation and robotics, telecommunications, and power systems.</p>\n          </div>\n          <div class=\"time\">\n            <h4>2004.9 - 2008.8\n                </h4>\n          </div>\n        </li>\n        \n        \n        <div style=\"clear:both;\"></div>\n      </ul>\n    </div>\n  </body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n    <div class=\"content\">\n    <div fxHide.gt-xs>\n        <button mat-icon-button (click)=\"onToggleSidenav()\">\n            <mat-icon>menu</mat-icon>\n        </button>\n    </div>\n    <div>\n        <a routerLink=\"/\" class=\"logofont\">Claire</a>\n    </div>\n    <div fxFlex fxLayout fxLayoutAlign=\"end\" fxHide.xs>\n        <ul fxLayout fxLayoutGap=\"15px\" class=\"navigation-items\">\n            <li>\n                <a routerLink=\"/about\">About</a>\n            </li>\n            <li>\n                <a routerLink=\"/skills\">Skills</a>\n            </li>\n            <li>\n                <a routerLink=\"/portfolio\">Portfolio</a>\n            </li>\n            \n            <li>\n                <a routerLink=\"/education\">Education</a>\n            </li>\n            <li>\n                <a routerLink=\"/contact\">Contact</a>\n            </li>\n            \n        </ul>\n    </div>\n    </div>\n  </mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/sidenav-list/sidenav-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/sidenav-list/sidenav-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wholePage\">\n    <div class=\"pic\">\n        <img src=\"../../../assets/img/person.JPG\" alt=\"Photo of a Shiba Inu\">\n        <!-- <button mat-button color=\"primary\">Linkedin</button>\n        <button mat-button color=\"primary\">Facebook</button> -->\n\n    </div>\n\n    <mat-nav-list>\n\n        <a mat-list-item routerLink=\"/\" (click)=\"onSidenavClose()\">\n            <mat-icon>home</mat-icon> <span class=\"nav-caption\">Home</span>\n        </a>\n        <a mat-list-item routerLink=\"/about\" (click)=\"onSidenavClose()\">\n            <mat-icon>assignment_ind</mat-icon> <span class=\"nav-caption\">About</span>\n        </a>\n        <a mat-list-item routerLink=\"/skills\" (click)=\"onSidenavClose()\">\n            <mat-icon>question_answer</mat-icon><span class=\"nav-caption\">Skills</span>\n        </a>\n        <a mat-list-item routerLink=\"/portfolio\" (click)=\"onSidenavClose()\">\n            <mat-icon>work</mat-icon><span class=\"nav-caption\">Portfolio</span>\n        </a>\n        <a mat-list-item routerLink=\"/education\" (click)=\"onSidenavClose()\">\n            <mat-icon>school</mat-icon><span class=\"nav-caption\">Education</span>\n        </a>\n        <a mat-list-item routerLink=\"/contact\" (click)=\"onSidenavClose()\">\n            <mat-icon>contacts</mat-icon><span class=\"nav-caption\">Contact</span>\n        </a>\n        <span mat-list-item class=\"footer\">@Qi Kong 2020</span>\n    </mat-nav-list>\n    \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"portfolio\">\n    <h1>Projects</h1>\n    <div class=\"container \" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"3%\" fxLayoutGap.xs=\"0\">\n        <div class=\"item item-4 \" fxFlex=\"50%\">\n            <mat-card class=\"example-card\">\n                <a href=\"http://www.qikong.tk/projects/phplaravel.html\" mat-menu-item>\n\n                    <img mat-card-image src=\"../../assets/img/php.png\" alt=\"Photo of a Shiba Inu\">\n                    <mat-card-content>\n                        <mat-card-title>Social feed website based on PHP Laravel</mat-card-title>\n\n                    </mat-card-content>\n                </a>\n            </mat-card>\n        </div>\n        <div class=\"item item-5\" fxFlex=\"50%\">\n            <mat-card class=\"example-card\">\n                <a href=\"http://www.qikong.tk/projects/dvbank.html\" mat-menu-item>\n\n                    <img mat-card-image src=\"../../assets/img/bankhome.png\" alt=\"Photo of a Shiba Inu\">\n                    <mat-card-content>\n                        <mat-card-title>Bank website based on ReacJS and Java Spring Boot</mat-card-title>\n\n                    </mat-card-content>\n                </a>\n            </mat-card>\n        </div>\n\n    </div>\n    <div class=\"container \" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"3%\" fxLayoutGap.xs=\"0\">\n        <div class=\"item item-4 \" fxFlex=\"50%\">\n            <mat-card class=\"example-card\">\n                <a href=\"http://www.qikong.tk/projects/jsproject.html\" mat-menu-item>\n\n                    <img mat-card-image src=\"../../assets/img/map.png\" alt=\"Photo of a Shiba Inu\">\n                    <mat-card-content>\n                        <mat-card-title>Airplane map in realtime based on feching API</mat-card-title>\n\n                    </mat-card-content>\n                </a>\n            </mat-card>\n        </div>\n        <div class=\"item item-5\" fxFlex=\"50%\">\n            <mat-card class=\"example-card\">\n                <a href=\"http://www.qikong.tk/projects/fullstack.html\" mat-menu-item>\n\n                    <img mat-card-image src=\"../../assets/img/homepage.png\" alt=\"Photo of a Shiba Inu\">\n                    <mat-card-content>\n                        <mat-card-title>Pizza's restaurants list App based on MERN</mat-card-title>\n\n                    </mat-card-content>\n\n                </a>\n            </mat-card>\n        </div>\n\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container skill\" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"5%\" fxLayoutGap.xs=\"0\">\n    <div class=\"item item-4 imgPosition\" fxFlex=\"50%\">\n        <h2>Front-end technical skills</h2>\n        <div class=\"front-end\">\n            <p>HTML</p>\n            <mat-progress-bar mode=\"determinate\" value=\"95\"></mat-progress-bar>\n            <p>CSS</p>\n            <mat-progress-bar mode=\"determinate\" value=\"90\"></mat-progress-bar>\n            <p>JavaScript</p>\n            <mat-progress-bar mode=\"determinate\" value=\"80\"></mat-progress-bar>\n            <p>Angular</p>\n            <mat-progress-bar mode=\"determinate\" value=\"75\"></mat-progress-bar>\n            <p>ReactJS</p>\n            <mat-progress-bar mode=\"determinate\" value=\"75\"></mat-progress-bar>\n            <p>Asp.net</p>\n            <mat-progress-bar mode=\"determinate\" value=\"60\"></mat-progress-bar>\n            \n        </div>\n\n    </div>\n    <div class=\"item item-5\" fxFlex=\"50%\">\n        <h2>Back-end technical skills</h2>\n        \n        <div class=\"front-end\">\n            <p>PHP/Laravel</p>\n            <mat-progress-bar mode=\"determinate\" color=\"accent\" value=\"90\" class=\"colorChange\"></mat-progress-bar>\n            <p>NodeJS/Express</p>\n            <mat-progress-bar mode=\"determinate\" color=\"accent\" value=\"80\"></mat-progress-bar>\n            <p>MySql</p>\n            <mat-progress-bar mode=\"determinate\" color=\"accent\" value=\"70\"></mat-progress-bar>\n            <p>Python</p>\n            <mat-progress-bar mode=\"determinate\" color=\"accent\" value=\"60\"></mat-progress-bar>\n            <p>Restful API</p>\n            <mat-progress-bar mode=\"determinate\" color=\"accent\" value=\"70\"></mat-progress-bar>\n            <p>Linux</p>\n            <mat-progress-bar mode=\"determinate\" color=\"accent\" value=\"70\"></mat-progress-bar>\n            \n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".about {\n    box-shadow:         1px 1px 9px 1px #ccc;\n    margin-top: 100px;\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: #ffffff;\n    margin-bottom: 100px;\n}\nimg {\n    margin-top: 40px;\n    width: 80%;\n}\n.imgPosition {\n    text-align: center;\n}\n.ContentFont {\n    color: #7b7b7b;\n    font-size: 1.2em;\n}\nbutton {\n    margin-right: 10px;\n}\n.name {\n    /* word-wrap: break-word !important;\n    white-space: unset !important;*/\n    flex: 10 0 40% !important; \n    width: 50% !important;\n    /* overflow-wrap: break-word;\n    word-wrap: break-word;\n\n    word-break: break-word; */\n}\n.titleBack {\n    margin-left: 20px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUdJLHdDQUF3QztJQUN4QyxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUdBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJO21DQUMrQjtJQUMvQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCOzs7NkJBR3lCO0FBQzdCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0IHtcbiAgICAtbW96LWJveC1zaGFkb3c6ICAgIDFweCAxcHggOXB4IDFweCAjY2NjO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCA5cHggMXB4ICNjY2M7XG4gICAgYm94LXNoYWRvdzogICAgICAgICAxcHggMXB4IDlweCAxcHggI2NjYztcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuaW1nIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIHdpZHRoOiA4MCU7XG59XG5cblxuLmltZ1Bvc2l0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5Db250ZW50Rm9udCB7XG4gICAgY29sb3I6ICM3YjdiN2I7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn1cbmJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm5hbWUge1xuICAgIC8qIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50OyovXG4gICAgZmxleDogMTAgMCA0MCUgIWltcG9ydGFudDsgXG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICAgIC8qIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDsgKi9cbn1cblxuLnRpdGxlQmFjayB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// personal information
const ELEMENT_DATA = [
    { name: 'Address: ', content: "4275 Grange St." },
    { name: 'Email: ', content: "kongqi2011@gmail.com" },
    { name: 'Phone Number: ', content: "902-414-1875" },
    { name: 'Linkedin: ', content: "www.linkedin.com/in/claire-qi-kong-454645174" }
];
const FileSaver = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
let AboutComponent = class AboutComponent {
    constructor() {
        //ng table
        this.displayedColumns = ['name', 'content'];
        this.dataSource = ELEMENT_DATA;
    }
    ngOnInit() {
    }
    //download method
    downloadPdf() {
        const pdfUrl = '../../assets/file/QiKong_resume.pdf';
        const pdfName = 'QK_resume';
        FileSaver.saveAs(pdfUrl, pdfName);
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
    })
], AboutComponent);



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
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");








const routes = [{
        path: '',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    },
    {
        path: 'skills',
        component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"]
    },
    {
        path: 'portfolio',
        component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"]
    },
    {
        path: 'education',
        component: _education_education_component__WEBPACK_IMPORTED_MODULE_6__["EducationComponent"]
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n    height: 100%;\n}\n \nmat-sidenav {\n    width: 250px;\n}\n \nmain {\n    padding: 10px;\n    background-color: #eeeeee;\n}\n \n.container {\n    text-align: center;\n    margin:40px auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250YWluZXIsIG1hdC1zaWRlbmF2LWNvbnRlbnQsIG1hdC1zaWRlbmF2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4gXG5tYXQtc2lkZW5hdiB7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuIFxubWFpbiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xufVxuLmNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjo0MHB4IGF1dG87XG59XG4iXX0= */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'angular-portfolio';
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/header/header.component */ "./src/app/navigation/header/header.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigation/sidenav-list/sidenav-list.component */ "./src/app/navigation/sidenav-list/sidenav-list.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"],
            _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_12__["SidenavListComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
            _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_14__["PortfolioComponent"],
            _education_education_component__WEBPACK_IMPORTED_MODULE_15__["EducationComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_24__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyD3UXYBvd_3b2F6OHpukF5C48L8V8EmTMk',
                libraries: ['places']
            })
        ],
        exports: [
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"]
        ],
        providers: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["StyleUtils"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["StylesheetMap"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["MediaMarshaller"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["ɵMatchMedia"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["BreakPointRegistry"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["PrintHook"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexStyleBuilder"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["ShowHideStyleBuilder"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexOrderStyleBuilder"], _services_users_service__WEBPACK_IMPORTED_MODULE_20__["UsersService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contact {\n    margin-top:100px;\n    margin-top: 100px;\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n}\nmat-form-field {\n    width: 100%;\n    margin-bottom: 30px;\n}\nh1 {\n    font-size: 40px;\n}\nbutton {\n    padding: 20px auto;\n}\n.front-end {\n    background-color: #ffffff;\n    box-shadow:         1px 1px 9px 1px #ccc;\n    padding:30px;\n}\nagm-map {\n    height: 425px;\n}\n.mapArea {\n    background-color: #ffffff;\n    box-shadow:         1px 1px 9px 1px #ccc;\n}\nmat-toolbar {\n    /* background-color: #d0f0d9; */\n    margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUd6Qix3Q0FBd0M7SUFDeEMsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0lBR3pCLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3Qge1xuICAgIG1hcmdpbi10b3A6MTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbmgxIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG59XG5idXR0b24ge1xuICAgIHBhZGRpbmc6IDIwcHggYXV0bztcbn1cbi5mcm9udC1lbmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgLW1vei1ib3gtc2hhZG93OiAgICAxcHggMXB4IDlweCAxcHggI2NjYztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggOXB4IDFweCAjY2NjO1xuICAgIGJveC1zaGFkb3c6ICAgICAgICAgMXB4IDFweCA5cHggMXB4ICNjY2M7XG4gICAgcGFkZGluZzozMHB4O1xufVxuYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiA0MjVweDtcbn1cbi5tYXBBcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIC1tb3otYm94LXNoYWRvdzogICAgMXB4IDFweCA5cHggMXB4ICNjY2M7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDlweCAxcHggI2NjYztcbiAgICBib3gtc2hhZG93OiAgICAgICAgIDFweCAxcHggOXB4IDFweCAjY2NjO1xufVxubWF0LXRvb2xiYXIge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNkMGYwZDk7ICovXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _assets_js_smtp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/js/smtp.js */ "./src/assets/js/smtp.js");
/* harmony import */ var _assets_js_smtp_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_js_smtp_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let ContactComponent = class ContactComponent {
    constructor(contact, http) {
        this.contact = contact;
        this.http = http;
        this.title = 'AGM project';
        // Save contact page data
        this.inputData = {
            name: '',
            email: '',
            message: ''
        };
        this.showMsg = false; //show alert message
        this.submitResult = '';
        this.statusColor = ""; //set background color
    }
    ngOnInit() {
        this.setCurrentLocation();
    }
    // Get Current Location Coordinates
    setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                // this.latitude = position.coords.latitude;
                this.latitude = 49.266;
                // this.longitude = position.coords.longitude;
                this.longitude = -122.95;
                this.zoom = 10;
            });
        }
    }
    // send method to service
    postMessages() {
        // console.log(message)
        if (this.inputData.name === '') {
            this.showMsg = true;
            this.statusColor = "#f2dedf";
            this.submitResult = "Please fill your name.";
        }
        else if (this.inputData.email === '') {
            this.showMsg = true;
            this.statusColor = "#f2dedf";
            this.submitResult = "Please fill your email.";
        }
        else {
            this.http.post('https://formspree.io/xeqlbrrk', this.inputData).subscribe({
                next: data => {
                    this.inputData = {
                        name: '',
                        email: '',
                        message: ''
                    };
                    console.log("success");
                    this.showMsg = true;
                    this.submitResult = 'Thank you for you information';
                    this.statusColor = "#dff0d9";
                },
                error: error => {
                    console.error('There was an error!', error);
                    if (error.error.error.includes('email')) {
                        this.submitResult = "Your email is not correct.";
                        this.showMsg = true;
                        this.statusColor = "#f2dedf";
                    }
                    else {
                        this.submitResult = error.error.error;
                        this.showMsg = true;
                        this.statusColor = "#f2dedf";
                    }
                }
            });
        }
    }
};
ContactComponent.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/education/education.component.css":
/*!***************************************************!*\
  !*** ./src/app/education/education.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600');\n\nbody{\n  padding:0;\n  margin:0;\n  margin-top: 100px;\n  /* font-family: 'Montserrat', sans-serif; */\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n\n}\n\nh1{\n  font-size:40px;\n  /* text-align:left; */\n}\n\n.timeline{\n  position:relative;\n  margin:50px auto;\n  padding:40px 0;\n \n  width:1000px;\n  box-sizing:border-box;\n  /* width: 80%; */\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #ffffff;\n  margin-bottom: 100px;\n}\n\n.timeline:before{\n  content:'';\n  position:absolute;\n  left:50%;\n  width:2px;\n  height:100%;\n  background:#c5c5c5;\n}\n\n.timeline ul{\n  padding:0;\n  margin:0;\n}\n\n.timeline ul li{\n  list-style:none;\n  position:relative;\n  width:50%;\n  padding:20px 40px;\n  box-sizing:border-box;\n}\n\n.timeline ul li:nth-child(odd){\n  float:left;\n  text-align:right;\n  clear:both;\n}\n\n.timeline ul li:nth-child(even){\n  float:right;\n  text-align:left;\n  clear:both;\n}\n\n.content{\n  padding-bottom:20px;\n}\n\n.timeline ul li:nth-child(odd):before\n{\n  content:'';\n  position:absolute;\n  width:10px;\n  height:10px;\n  top:24px;\n  right:-6px;\n  background:rgba(233,33,99,1);\n  border-radius:50%;\n  box-shadow:0 0 0 3px rgba(233,33,99,0.2);\n}\n\n.timeline ul li:nth-child(even):before\n{\n  content:'';\n  position:absolute;\n  width:10px;\n  height:10px;\n  top:24px;\n  left:-4px;\n  background:rgba(233,33,99,1);\n  border-radius:50%;\n  box-shadow:0 0 0 3px rgba(233,33,99,0.2);\n}\n\n.timeline ul li h3{\n  padding:0;\n  margin:0;\n  color:rgba(233,33,99,1);\n  font-weight:600;\n}\n\n.timeline ul li p{\n  margin:10px 0 0;\n  padding:0;\n}\n\n.timeline ul li .time h4{\n  margin:0;\n  padding:0;\n  font-size:14px;\n}\n\n.timeline ul li:nth-child(odd) .time\n{\n  position:absolute;\n  top:12px;\n  right:-165px;\n  margin:0;\n  padding:8px 16px;\n  background:rgba(233,33,99,1);\n  color:#ffffff;\n  border-radius:18px;\n  box-shadow:0 0 0 3px rgba(233,33,99,0.3);\n}\n\n.timeline ul li:nth-child(even) .time\n{\n  position:absolute;\n  top:12px;\n  left:-165px;\n  margin:0;\n  padding:8px 16px;\n  background:rgba(233,33,99,1);\n  color:#fff;\n  border-radius:18px;\n  box-shadow:0 0 0 3px rgba(233,33,99,0.3);\n}\n\n@media(max-width:1000px)\n{\n  .timeline{\n    width:100%;\n  }\n}\n\n@media(max-width:767px){\n  .timeline{\n    width:100%;\n    padding-bottom:0;\n  }\n  h1{\n    font-size:40px;\n    text-align:left;\n    \n  }\n  .timeline:before{\n    left:20px;\n    height:100%;\n  }\n  .timeline ul li:nth-child(odd),\n  .timeline ul li:nth-child(even)\n  {\n    width:100%;\n    text-align:left;\n    padding-left:50px;\n    padding-bottom:50px;\n  }\n  .timeline ul li:nth-child(odd):before,\n  .timeline ul li:nth-child(even):before\n  {\n    top:-18px;\n    left:16px;\n  }\n  .timeline ul li:nth-child(odd) .time,\n  .timeline ul li:nth-child(even) .time{\n    top:-30px;\n    left:50px;\n    right:inherit;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQUE2RTs7QUFFN0U7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQiwyQ0FBMkM7RUFDM0MsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7O0FBRXBCOztBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYzs7RUFFZCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixXQUFXO0VBQ1gsUUFBUTtFQUNSLFVBQVU7RUFDViw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLHdDQUF3QztBQUMxQzs7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixXQUFXO0VBQ1gsUUFBUTtFQUNSLFNBQVM7RUFDVCw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLHdDQUF3QztBQUMxQzs7QUFDQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUNBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxjQUFjO0FBQ2hCOztBQUNBOztFQUVFLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsWUFBWTtFQUNaLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsd0NBQXdDO0FBQzFDOztBQUNBOztFQUVFLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsV0FBVztFQUNYLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsd0NBQXdDO0FBQzFDOztBQUNBOztFQUVFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGNBQWM7SUFDZCxlQUFlOztFQUVqQjtFQUNBO0lBQ0UsU0FBUztJQUNULFdBQVc7RUFDYjtFQUNBOzs7SUFHRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7RUFDQTs7O0lBR0UsU0FBUztJQUNULFNBQVM7RUFDWDtFQUNBOztJQUVFLFNBQVM7SUFDVCxTQUFTO0lBQ1QsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCw2MDAnKTtcblxuYm9keXtcbiAgcGFkZGluZzowO1xuICBtYXJnaW46MDtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIC8qIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7ICovXG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbn1cbmgxe1xuICBmb250LXNpemU6NDBweDtcbiAgLyogdGV4dC1hbGlnbjpsZWZ0OyAqL1xufVxuLnRpbWVsaW5le1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgbWFyZ2luOjUwcHggYXV0bztcbiAgcGFkZGluZzo0MHB4IDA7XG4gXG4gIHdpZHRoOjEwMDBweDtcbiAgYm94LXNpemluZzpib3JkZXItYm94O1xuICAvKiB3aWR0aDogODAlOyAqL1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cbi50aW1lbGluZTpiZWZvcmV7XG4gIGNvbnRlbnQ6Jyc7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBsZWZ0OjUwJTtcbiAgd2lkdGg6MnB4O1xuICBoZWlnaHQ6MTAwJTtcbiAgYmFja2dyb3VuZDojYzVjNWM1O1xufVxuLnRpbWVsaW5lIHVse1xuICBwYWRkaW5nOjA7XG4gIG1hcmdpbjowO1xufVxuLnRpbWVsaW5lIHVsIGxpe1xuICBsaXN0LXN0eWxlOm5vbmU7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB3aWR0aDo1MCU7XG4gIHBhZGRpbmc6MjBweCA0MHB4O1xuICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XG59XG4udGltZWxpbmUgdWwgbGk6bnRoLWNoaWxkKG9kZCl7XG4gIGZsb2F0OmxlZnQ7XG4gIHRleHQtYWxpZ246cmlnaHQ7XG4gIGNsZWFyOmJvdGg7XG59XG4udGltZWxpbmUgdWwgbGk6bnRoLWNoaWxkKGV2ZW4pe1xuICBmbG9hdDpyaWdodDtcbiAgdGV4dC1hbGlnbjpsZWZ0O1xuICBjbGVhcjpib3RoO1xufVxuLmNvbnRlbnR7XG4gIHBhZGRpbmctYm90dG9tOjIwcHg7XG59XG4udGltZWxpbmUgdWwgbGk6bnRoLWNoaWxkKG9kZCk6YmVmb3JlXG57XG4gIGNvbnRlbnQ6Jyc7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB3aWR0aDoxMHB4O1xuICBoZWlnaHQ6MTBweDtcbiAgdG9wOjI0cHg7XG4gIHJpZ2h0Oi02cHg7XG4gIGJhY2tncm91bmQ6cmdiYSgyMzMsMzMsOTksMSk7XG4gIGJvcmRlci1yYWRpdXM6NTAlO1xuICBib3gtc2hhZG93OjAgMCAwIDNweCByZ2JhKDIzMywzMyw5OSwwLjIpO1xufVxuLnRpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChldmVuKTpiZWZvcmVcbntcbiAgY29udGVudDonJztcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHdpZHRoOjEwcHg7XG4gIGhlaWdodDoxMHB4O1xuICB0b3A6MjRweDtcbiAgbGVmdDotNHB4O1xuICBiYWNrZ3JvdW5kOnJnYmEoMjMzLDMzLDk5LDEpO1xuICBib3JkZXItcmFkaXVzOjUwJTtcbiAgYm94LXNoYWRvdzowIDAgMCAzcHggcmdiYSgyMzMsMzMsOTksMC4yKTtcbn1cbi50aW1lbGluZSB1bCBsaSBoM3tcbiAgcGFkZGluZzowO1xuICBtYXJnaW46MDtcbiAgY29sb3I6cmdiYSgyMzMsMzMsOTksMSk7XG4gIGZvbnQtd2VpZ2h0OjYwMDtcbn1cbi50aW1lbGluZSB1bCBsaSBwe1xuICBtYXJnaW46MTBweCAwIDA7XG4gIHBhZGRpbmc6MDtcbn1cbi50aW1lbGluZSB1bCBsaSAudGltZSBoNHtcbiAgbWFyZ2luOjA7XG4gIHBhZGRpbmc6MDtcbiAgZm9udC1zaXplOjE0cHg7XG59XG4udGltZWxpbmUgdWwgbGk6bnRoLWNoaWxkKG9kZCkgLnRpbWVcbntcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDoxMnB4O1xuICByaWdodDotMTY1cHg7XG4gIG1hcmdpbjowO1xuICBwYWRkaW5nOjhweCAxNnB4O1xuICBiYWNrZ3JvdW5kOnJnYmEoMjMzLDMzLDk5LDEpO1xuICBjb2xvcjojZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOjE4cHg7XG4gIGJveC1zaGFkb3c6MCAwIDAgM3B4IHJnYmEoMjMzLDMzLDk5LDAuMyk7XG59XG4udGltZWxpbmUgdWwgbGk6bnRoLWNoaWxkKGV2ZW4pIC50aW1lXG57XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6MTJweDtcbiAgbGVmdDotMTY1cHg7XG4gIG1hcmdpbjowO1xuICBwYWRkaW5nOjhweCAxNnB4O1xuICBiYWNrZ3JvdW5kOnJnYmEoMjMzLDMzLDk5LDEpO1xuICBjb2xvcjojZmZmO1xuICBib3JkZXItcmFkaXVzOjE4cHg7XG4gIGJveC1zaGFkb3c6MCAwIDAgM3B4IHJnYmEoMjMzLDMzLDk5LDAuMyk7XG59XG5AbWVkaWEobWF4LXdpZHRoOjEwMDBweClcbntcbiAgLnRpbWVsaW5le1xuICAgIHdpZHRoOjEwMCU7XG4gIH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpe1xuICAudGltZWxpbmV7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTowO1xuICB9XG4gIGgxe1xuICAgIGZvbnQtc2l6ZTo0MHB4O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBcbiAgfVxuICAudGltZWxpbmU6YmVmb3Jle1xuICAgIGxlZnQ6MjBweDtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgfVxuICAudGltZWxpbmUgdWwgbGk6bnRoLWNoaWxkKG9kZCksXG4gIC50aW1lbGluZSB1bCBsaTpudGgtY2hpbGQoZXZlbilcbiAge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDo1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOjUwcHg7XG4gIH1cbiAgLnRpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChvZGQpOmJlZm9yZSxcbiAgLnRpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChldmVuKTpiZWZvcmVcbiAge1xuICAgIHRvcDotMThweDtcbiAgICBsZWZ0OjE2cHg7XG4gIH1cbiAgLnRpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChvZGQpIC50aW1lLFxuICAudGltZWxpbmUgdWwgbGk6bnRoLWNoaWxkKGV2ZW4pIC50aW1le1xuICAgIHRvcDotMzBweDtcbiAgICBsZWZ0OjUwcHg7XG4gICAgcmlnaHQ6aW5oZXJpdDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EducationComponent = class EducationComponent {
    constructor() { }
    ngOnInit() {
    }
};
EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-education',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/education/education.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./education.component.css */ "./src/app/education/education.component.css")).default]
    })
], EducationComponent);



/***/ }),

/***/ "./src/app/navigation/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/navigation/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n    font-family: 'MAGNETOB';\n    src: url('MAGNETOB.TTF') format(\"truetype\");\n}\n\n.logofont {\n    font-family: 'MAGNETOB';\n    font-size: 30px;\n}\n\na {\n    text-decoration: none;\n    color: white;\n}\n\na:hover, a:active{\n    color: lightgray;\n}\n\n.navigation-items{\n    list-style-type: none;\n    padding: 0;\n    margin: 0 ;\n    \n}\n\nmat-icon {\n    margin-right: 10px;\n}\n\nmat-toolbar{\n    border-radius: 3px;\n    position: fixed;\n    z-index: 100;\n}\n\n.content{\n    width: 80%;\n    margin:0 auto;\n}\n\n@media(max-width: 959px){\n    mat-toolbar{\n        border-radius: 0px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsMkNBQWdFO0FBQ3BFOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsVUFBVTs7QUFFZDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdNQUdORVRPQic7XG4gICAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udC9NQUdORVRPQi5UVEZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbi5sb2dvZm9udCB7XG4gICAgZm9udC1mYW1pbHk6ICdNQUdORVRPQic7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiBcbmE6aG92ZXIsIGE6YWN0aXZle1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG59XG4gXG4ubmF2aWdhdGlvbi1pdGVtc3tcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDAgO1xuICAgIFxufVxuXG5tYXQtaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuIFxubWF0LXRvb2xiYXJ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxMDA7XG59XG4uY29udGVudHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjowIGF1dG87XG59XG4gXG5AbWVkaWEobWF4LXdpZHRoOiA5NTlweCl7XG4gICAgbWF0LXRvb2xiYXJ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/navigation/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onToggleSidenav = () => {
            this.sidenavToggle.emit();
        };
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HeaderComponent.prototype, "sidenavToggle", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/navigation/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wholePage {\n    background-color: #272727;\n}\na {\n    text-decoration: none;\n    color: white;\n}\na:hover, a:active{\n    color: lightgray;\n}\n.nav-caption{\n    display: inline-block;\n    padding-left: 6px;\n}\nspan {\n    color: #878787\n}\nimg {\n    width: 70%;\n}\n.pic {\n    padding-top: 40px;\n    padding-bottom: 20px;\n    text-align: center;\n}\n.footer {\n    text-align: center;\n    position: fixed;\n    bottom: 0;\n    margin-left:30px;\n    color: #ffffff;\n}\nmat-nav-list {\n    background-color: #272727;\n    padding-bottom: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9zaWRlbmF2LWxpc3Qvc2lkZW5hdi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJO0FBQ0o7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsU0FBUztJQUNULGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9zaWRlbmF2LWxpc3Qvc2lkZW5hdi1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hvbGVQYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3O1xufVxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiBcbmE6aG92ZXIsIGE6YWN0aXZle1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG59XG4gXG4ubmF2LWNhcHRpb257XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctbGVmdDogNnB4O1xufVxuc3BhbiB7XG4gICAgY29sb3I6ICM4Nzg3ODdcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogNzAlO1xufVxuLnBpYyB7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvb3RlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luLWxlZnQ6MzBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cbm1hdC1uYXYtbGlzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyNztcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidenavListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavListComponent", function() { return SidenavListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidenavListComponent = class SidenavListComponent {
    constructor() {
        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSidenavClose = () => {
            this.sidenavClose.emit();
        };
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SidenavListComponent.prototype, "sidenavClose", void 0);
SidenavListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidenav-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidenav-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/sidenav-list/sidenav-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidenav-list.component.css */ "./src/app/navigation/sidenav-list/sidenav-list.component.css")).default]
    })
], SidenavListComponent);



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".portfolio {\n    \n    margin-top: 100px;\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n    /* background-color: #ffffff; */\n    margin-bottom: 100px;\n}\nmat-card {\n    background-color: #ffffff;\n    box-shadow:         1px 1px 9px 1px #ccc;\n    margin-bottom: 40px;\n    \n}\nh1 {\n    font-size:40px;\n}\na {\n    text-decoration: none;\n}\na:hover {\n    color: #ee407a;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0Isb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSx5QkFBeUI7SUFHekIsd0NBQXdDO0lBQ3hDLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3J0Zm9saW8ge1xuICAgIFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7ICovXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5tYXQtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAtbW96LWJveC1zaGFkb3c6ICAgIDFweCAxcHggOXB4IDFweCAjY2NjO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCA5cHggMXB4ICNjY2M7XG4gICAgYm94LXNoYWRvdzogICAgICAgICAxcHggMXB4IDlweCAxcHggI2NjYztcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIFxufVxuaDEge1xuICAgIGZvbnQtc2l6ZTo0MHB4O1xufVxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYTpob3ZlciB7XG4gICAgY29sb3I6ICNlZTQwN2E7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PortfolioComponent = class PortfolioComponent {
    constructor() { }
    ngOnInit() {
    }
};
PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portfolio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./portfolio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")).default]
    })
], PortfolioComponent);



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const users = [{
        name: 'Address',
        value: 'test123'
    },
    {
        name: 'Email',
        value: 'kongqi2011@gmail.com'
    }
];
let UsersService = class UsersService {
    constructor() { }
    sendMessage() {
        console.log("email");
    }
};
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsersService);



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".skill {\n    /* margin-top: 100px; */\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 50px;\n}\n\nh2 {\n    margin:40px auto;\n}\n\n.front-end {\n    background-color: #ffffff;\n    box-shadow:         1px 1px 9px 1px #ccc;\n    padding:30px;\n}\n\n.colorChange {\n    background-color: green !important;\n}\n\n.mat-progress-bar {\n    background-color: #000000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLHlCQUF5QjtJQUd6Qix3Q0FBd0M7SUFDeEMsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFDQTtJQUNJLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5za2lsbCB7XG4gICAgLyogbWFyZ2luLXRvcDogMTAwcHg7ICovXG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuaDIge1xuICAgIG1hcmdpbjo0MHB4IGF1dG87XG59XG4uZnJvbnQtZW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIC1tb3otYm94LXNoYWRvdzogICAgMXB4IDFweCA5cHggMXB4ICNjY2M7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDlweCAxcHggI2NjYztcbiAgICBib3gtc2hhZG93OiAgICAgICAgIDFweCAxcHggOXB4IDFweCAjY2NjO1xuICAgIHBhZGRpbmc6MzBweDtcbn1cbi5jb2xvckNoYW5nZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcbn1cbi5tYXQtcHJvZ3Jlc3MtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkillsComponent = class SkillsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")).default]
    })
], SkillsComponent);



/***/ }),

/***/ "./src/assets/js/smtp.js":
/*!*******************************!*\
  !*** ./src/assets/js/smtp.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

﻿/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://formspree.io/meqonzyd", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/qikong/Documents/angular/angular-portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map