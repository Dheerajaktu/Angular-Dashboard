var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Charts/bar-chart/bar-chart.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Charts/bar-chart/bar-chart.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<google-chart #chart\n              [title]=\"title\"\n              [type]=\"type\"\n              [data]=\"data\"\n              [columnNames]=\"columnNames\"\n              [options]=\"options\"\n              [width]=\"width\"\n              [height]=\"height\">\n</google-chart>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Charts/line-chart/line-chart.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Charts/line-chart/line-chart.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<google-chart #chart\n              [title]=\"title\"\n              [type]=\"type\"\n              [data]=\"data\"\n              [columnNames]=\"columnNames\"\n              [options]=\"options\"\n              [width]=\"width\"\n              [height]=\"height\">\n</google-chart>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Charts/pie-chart/pie-chart.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Charts/pie-chart/pie-chart.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<google-chart #chart\n              [title]=\"title\"\n              [type]=\"type\"\n              [options]=\"options\"\n              [width]=\"width\"\n              [data]=\"data\"\n              [height]=\"height\">\n</google-chart>\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Shared Components/pagination/pagination.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Shared Components/pagination/pagination.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-paginator style=\"display: none\">\n</mat-paginator>\n<div style=\"padding-top: 10px;\">\n    <ul class=\"pagination\">\n        <li class=\"page-item\" (click)=\"changePage('-2')\">\n            <<</li> <li *ngFor='let in of convertNumToArray(pageInTable); let i = index'\n                [ngClass]=\"(paginator && paginator.pageIndex == i) ? 'select-page-table' : 'unselect-page-table'\"\n                class=\"page-item\" (click)=\"changePage(i)\">{{i+1}}\n        </li>\n        <li class=\"page-item\" (click)=\"changePage('-3')\">>></li>\n    </ul>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/album/album.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/album/album.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" class=\"card-basic\">\n    <table mat-table [dataSource]=\"dataSource\">\n        <ng-container matColumnDef=\"albumId\">\n            <th width=\"20%\" class=\"bg-header-id\" mat-header-cell *matHeaderCellDef>Album Id</th>\n            <td mat-cell *matCellDef=\"let row\">{{row.albumId}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"id\">\n            <th width=\"20%\" class=\"bg-header-id\" mat-header-cell *matHeaderCellDef>Id\n                <input matInput (keyup)=\"searchById($event.target.value)\" placeholder=\"Search by Id\">\n            </th>\n            <td mat-cell *matCellDef=\"let row\">\n                {{row.id}}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"title\">\n            <th width=\"20%\" class=\"bg-header-id\" mat-header-cell *matHeaderCellDef>Title\n                <input matInput (keyup)=\"searchByTitle($event.target.value)\" placeholder=\"Search by Title\">\n            </th>\n            <td mat-cell *matCellDef=\"let row\">\n                {{row.title}}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"url\">\n            <th width=\"25%\" class=\"bg-header-id\" mat-header-cell *matHeaderCellDef>Photo</th>\n            <td mat-cell *matCellDef=\"let row\"><img src=\"{{row.url}}\" height=\"100\" width=\"100\"\n                    style=\"border-radius: 500px;margin-top: 10px;margin-bottom: 10px;\"></td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n\n    <mat-card *ngIf=\"isLoading\" style=\"display: flex; justify-content: center; align-items: center\">\n        <mat-progress-spinner color=\"primary\" mode=\"indeterminate\">\n        </mat-progress-spinner>\n    </mat-card>\n\n\n    <mat-paginator [length]=\"resultsLength\" [pageSize]=\"5\" [pageSizeOptions]=\"[10,20,50,100]\">\n    </mat-paginator>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/api/api.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/api/api.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container card-basic\">\n    <table mat-table [dataSource]=\"dataSource\">\n        <!-- id Column -->\n        <ng-container matColumnDef=\"id\">\n            <th width=\"20%\" class=\"bg-header-id\" mat-header-cell *matHeaderCellDef>Id</th>\n            <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n        </ng-container>\n\n        <!--name Column -->\n        <ng-container matColumnDef=\"name\">\n            <th width=\"50%\" class=\"bg-header\" mat-header-cell *matHeaderCellDef>Name</th>\n            <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n        </ng-container>\n\n        <!-- email Column -->\n        <ng-container matColumnDef=\"email\">\n            <th width=\"30%\" class=\"bg-header-email\" mat-header-cell *matHeaderCellDef>Email</th>\n            <td mat-cell *matCellDef=\"let row\">{{row.email}}</td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-card *ngIf=\"isLoading\" style=\"display: flex; justify-content: center; align-items: center\">\n        <mat-progress-spinner color=\"primary\" mode=\"indeterminate\">\n        </mat-progress-spinner>\n    </mat-card>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/card/card.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/card/card.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-basic\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Dheeraj</mat-card-title>\n          <mat-card-subtitle style=\"color:dodgerblue\">Software Developer</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"https://pbs.twimg.com/profile_images/1057966438814646272/M1cdrSh8.jpg\"\n          alt=\"Photo of a Shiba Inu\" >\n        <mat-card-content>\n          <p>\n            Dheeraj Sharma is the part of Jellyfish Technologies Pvt Ltd(Noida), He is learning & working with Angular\n            Technology\n            and his area of interest is Java, Angular, Physics, Data Structure, Algorithms and Blockchain!\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button class=\"btn\" style=\"color: #4d668c;\" (click)=\"getDheerajCount()\"><i class=\"fa fa-thumbs-up\"\n              aria-hidden=\"true\"></i></button>\n          {{countDheeraj}}\n          &nbsp;\n\n          <button mat-button class=\" btn\" style=\"color: #4d668c;\"><i class=\"fa fa-share\"\n              aria-hidden=\"true\"></i></button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n\n    <div class=\"col-md-3\">\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Alen</mat-card-title>\n          <mat-card-subtitle style=\"color:dodgerblue\">Software Developer</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"https://software.intel.com/sites/default/files/managed/97/d1/ISS_developer.jpg\"\n          alt=\"Photo of a Shiba Inu\">\n        <mat-card-content>\n          <p>\n            Dheeraj Sharma is the part of Jellyfish Technologies Pvt Ltd(Noida), He is learning & working with Angular\n            Technology\n            and his area of interest is Java, Angular, Physics, Data Structure, Algorithms and Blockchain!\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button class=\"btn\" style=\"color: #4d668c;\" (click)=\"getAlenCount()\"><i class=\"fa fa-thumbs-up\"\n              aria-hidden=\"true\"></i></button>\n          {{countAlen}}\n          &nbsp;\n          <button mat-button class=\" btn\" style=\"color: #4d668c;\"><i class=\"fa fa-share\"\n              aria-hidden=\"true\"></i></button>\n        </mat-card-actions>\n      </mat-card>\n\n    </div>\n\n\n    <div class=\"col-md-3\">\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Leeza</mat-card-title>\n          <mat-card-subtitle style=\"color:dodgerblue\">Software Developer</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image\n          src=\"https://ojjme2x5sm337cgpo2mhuny3-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/software-developer-shutterstock_404986099.jpg\"\n          alt=\"Photo of a Shiba Inu\">\n        <mat-card-content>\n          <p>\n            Dheeraj Sharma is the part of Jellyfish Technologies Pvt Ltd(Noida), He is learning & working with Angular\n            Technology\n            and his area of interest is Java, Angular, Physics, Data Structure, Algorithms and Blockchain!\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button class=\"btn\" style=\"color: #4d668c;\" (click)=\"getLeezaCount()\"><i class=\"fa fa-thumbs-up\"\n              aria-hidden=\"true\"></i></button>\n          {{countLeeza}}\n          &nbsp;\n          <button mat-button class=\" btn\" style=\"color: #4d668c;\"><i class=\"fa fa-share\"\n              aria-hidden=\"true\"></i></button>\n        </mat-card-actions>\n      </mat-card>\n\n    </div>\n\n\n    <div class=\"col-md-3\">\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Max Alex</mat-card-title>\n          <mat-card-subtitle style=\"color:dodgerblue\">Software Developer</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image\n          src=\"https://i0.wp.com/metalinjection.net/wp-content/uploads/2019/06/computer-user.jpg?fit=700%2C467&ssl=1\"\n          alt=\"Photo of a Shiba Inu\">\n        <mat-card-content>\n          <p>\n            Dheeraj Sharma is the part of Jellyfish Technologies Pvt Ltd(Noida), He is learning & working with Angular\n            Technology\n            and his area of interest is Java, Angular, Physics, Data Structure, Algorithms and Blockchain!\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button class=\"btn\" style=\"color: #4d668c;\" (click)=\"getAlexCount()\"><i class=\"fa fa-thumbs-up\"\n              aria-hidden=\"true\"></i></button>\n          {{countAlex}}\n          &nbsp;\n          <button mat-button class=\" btn\" style=\"color: #4d668c;\"><i class=\"fa fa-share\"\n              aria-hidden=\"true\"></i></button>\n        </mat-card-actions>\n      </mat-card>\n\n\n    </div>\n  </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/dashboard/dashboard.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/dashboard/dashboard.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--<div class=\"grid-container\">-->\n<!--&lt;!&ndash;<h1 class=\"mat-h1\">Dashboard</h1>&ndash;&gt;-->\n<!--<mat-grid-list cols=\"2\" rowHeight=\"550px\">-->\n<!--<mat-grid-tile *ngFor=\"let card of cards | async\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">-->\n<!--<mat-card class=\"dashboard-card\">-->\n<!--<mat-card-header>-->\n\n<!--<mat-card-title>-->\n<!--<button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">-->\n<!--<mat-icon>more_vert</mat-icon>-->\n<!--</button>-->\n<!--<mat-menu #menu=\"matMenu\" xPosition=\"before\">-->\n<!--<button mat-menu-item>Expand</button>-->\n<!--<button mat-menu-item>Remove</button>-->\n<!--</mat-menu>-->\n<!--</mat-card-title>-->\n<!--</mat-card-header>-->\n<!--<mat-card-content class=\"dashboard-card-content\">-->\n<!--<app-pie-chart></app-pie-chart>-->\n\n<!--</mat-card-content>-->\n<!--</mat-card>-->\n<!--</mat-grid-tile>-->\n<!--</mat-grid-list>-->\n<!--</div>-->\n\n\n<!--<mat-grid-list class=\"grid-container\">-->\n<!--<mat-card-header>-->\n<!--<mat-card-title>-->\n<!--<mat-card>-->\n<!--<app-pie-chart></app-pie-chart>-->\n<!--</mat-card>-->\n<!--</mat-card-title>-->\n<!--</mat-card-header>-->\n<!--</mat-grid-list>-->\n\n<!--<div class=\"card\" style=\"margin:10px\">-->\n<!--<div class=\"mat-card card-header\">-->\n<!--<p>Jellyfish Technologies Technology Ratio</p>-->\n<!--</div>-->\n\n<!--</div>-->\n<div>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <div class=\"mat-card card-basic\" >\n    <app-pie-chart></app-pie-chart>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"mat-card card-basic\">\n    <app-bar-chart></app-bar-chart>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <div class=\"mat-card card-basic\">\n    <app-line-chart></app-line-chart>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"mat-card card-basic\">\n    <!--<app-bar-chart></app-bar-chart>-->\n    </div>\n  </div>\n</div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/forms/forget-password/forget-password.component.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/forms/forget-password/forget-password.component.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"mat-dialog-title\" style=\"color: #4d668c\">Forget Password</h1>\n<mat-dialog-content>\n  <form [formGroup]=\"forgetPassword\" (ngSubmit)=\"onRecoverPassword()\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Enter your Registered Mail\" formControlName=\"registerdMail\">\n    <mat-error *ngIf=\"forgetPassword.controls.registerdMail.invalid && forgetPassword.controls.registerdMail.touched\">\n      <span class=\"alert-form\">Enter Valid Mail id!!!</span>\n    </mat-error>\n  </form>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close style=\"background-color: #4d668c;color:white;\" (click)=\"onRecoverPassword\">Get\n    OTP\n  </button>&nbsp;\n  <button mat-button mat-dialog-close>Cancel</button>\n</mat-dialog-actions>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/forms/forms.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/forms/forms.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-basic\" xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"card-header\">\n    <p style=\"color: #4d668c;font-size: 20px;\">Login Form</p>\n  </div>\n\n  <div class=\"card-body\">\n    <form [formGroup]=\"forgetPasswordForm\" (ngSubmit)=\"onLogin()\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <label>User Id</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"id\">\n        </div>\n      </div>\n      <mat-error *ngIf=\"forgetPasswordForm.controls.id.invalid && forgetPasswordForm.controls.id.touched\">\n        <span class=\"alert-form\">Please Enter a Valid User id</span>\n      </mat-error>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <label>Password</label>\n          <input type=\"password\" class=\"form-control\" formControlName=\"pass\">\n        </div>\n      </div>\n\n      <mat-error *ngIf=\"forgetPasswordForm.controls.pass.invalid && forgetPasswordForm.controls.pass.touched\">\n        <span class=\"alert-form\">Please Enter Password</span>\n      </mat-error>\n    </form>\n  </div>\n  <div class=\"card-footer\">\n    <button class=\"btn btn-primary\"\n            style=\"background-color: #4d668c\" (click)=\"onLogin()\">Login\n    </button>&nbsp;\n    <button class=\"mat-stroked-button\" (click)=\"forgetPassword()\">Forget Password</button>\n  </div>\n</div>\n\n<!------------------------------Signup form------------------------------------------------>\n<div class=\"card-basic\">\n  <div class=\"card-header\" style=\"background-color: #4d668c;\">\n    <p style=\"color: white;font-size: 20px;\">Signup Form</p>\n  </div>\n  <div class=\"card-body\">\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSignup()\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <label>First Name</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"firstName\">\n          <mat-error *ngIf=\"signupForm.controls.firstName.invalid && signupForm.controls.firstName.touched\">\n            <span class=\"alert-form\">Please Enter First Name</span>\n          </mat-error>\n        </div>\n\n        <div class=\"col-md-3\">\n          <label>Last Name</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"lastName\">\n          <mat-error *ngIf=\"signupForm.controls.lastName.invalid && signupForm.controls.lastName.touched\">\n            <span class=\"alert-form\">Please Enter Last Name</span>\n          </mat-error>\n        </div>\n\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <label>Email</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"email\">\n          <mat-error *ngIf=\"signupForm.controls.email.invalid && signupForm.controls.email.touched\">\n            <span class=\"alert-form\">Please Enter a Valid Email id</span>\n          </mat-error>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <label>Password</label>\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\">\n          <mat-error *ngIf=\"signupForm.controls.password.invalid && signupForm.controls.password.touched\">\n            <span class=\"alert-form\">Please Enter a Password</span>\n          </mat-error>\n        </div>\n        <div class=\"col-md-3\">\n          <label>Confirm Password</label>\n          <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\">\n          <mat-error *ngIf=\"signupForm.controls.confirmPassword.invalid && signupForm.controls.confirmPassword.touched\">\n            <span class=\"alert-form\">Please Confirm Password!</span>\n          </mat-error>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"card-footer\">\n    <button class=\"btn btn-primary\" style=\"background-color: #4d668c\" (click)=\"onSignup()\">Signup</button>&nbsp;\n    <button class=\"btn btn-danger\">Reset</button>\n  </div>\n</div>\n\n\n\n\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/location/location.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/location/location.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" class=\"card-basic\">\n  <div class=\"col-md-4\">\n    <p>Oops!!</p>\n  </div>\n  <div class=\"col-md-4\">\n    <div style=\"font-size: 60px;color: #4d668c;\">\n      <p>Error! Map Couldn't load</p>\n    </div>\n\n  </div>\n  <div class=\"col-md-4\">\n    <i class=\"fa fa-frown-o fa-5x\" aria-hidden=\"true\"></i>\n  </div>\n \n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/make-payment/make-payment.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/make-payment/make-payment.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container card-basic shadow\">\n\n    <mat-horizontal-stepper linear #stepper>\n\n        <!-- FIRST FORM HERE -->\n        <mat-step [stepControl]=\"nameForm\">\n            <form [formGroup]=\"nameForm\">\n                <ng-template matStepLabel>Fill Basic Detail</ng-template>\n                <mat-form-field class=\"input-width\">\n                    <input matInput placeholder=\"Card Holder Name\" formControlName=\"name\" required>\n                </mat-form-field>\n                <div>\n                    <button mat-button matStepperNext class=\"btn btn-success\">Next</button>\n                </div>\n            </form>\n        </mat-step>\n        <!-- NOW SECOND FORM HERE    -->\n        <mat-step [stepControl]=\"cardForm\">\n            <form [formGroup]=\"cardForm\">\n                <ng-template matStepLabel>Fill Card Number</ng-template>\n                <mat-form-field class=\"input-width\">\n                    <input type=\"number\" matInput placeholder=\"Card Nuber\" formControlName=\"cardNumber\" required>\n                </mat-form-field>\n                <!-- <mat-error *ngIf=\"cardForm.controls.cardNumber.Valid && cardForm.controls.cardNumber.touched\">\n                    <span class=\"alert-form\">Please Enter Card Number</span>\n                </mat-error> -->\n                <div>\n                    <button mat-button matStepperPrevious class=\"btn btn-danger\">Back</button>&nbsp;\n                    <button mat-button matStepperNext class=\"btn btn-success\">Next</button>\n                </div>\n            </form>\n        </mat-step>\n        <!-- NOW THIRD FORM HERE    -->\n        <mat-step [stepControl]=\"cvvForm\">\n            <form [formGroup]=\"cvvForm\">\n                <ng-template matStepLabel>Fill Card Expiry Date</ng-template>\n                <mat-form-field class=\"input-width\">\n                    <input type=\"number\" matInput placeholder=\"CVV Number\" formControlName=\"cvvNumber\" required><br><br>\n                    <!-- <input type=\"month\" matInput placeholder=\"Expiry\" formControlName=\"cvvNumber\" required> -->\n                </mat-form-field>\n                <div>\n                    <button mat-button matStepperPrevious class=\"btn btn-danger\">Back</button>&nbsp;\n                    <button mat-button matStepperNext class=\"btn btn-success\">Next</button>\n\n                </div>\n            </form>\n        </mat-step>\n\n        <mat-step>\n            <ng-template matStepLabel>Pay</ng-template>\n            You are now done.\n            <div>\n                <button mat-button matStepperPrevious class=\"btn btn-danger\">Back</button>&nbsp;\n                <button mat-button (click)=\"stepper.reset()\" class=\"btn btn-primary\">Reset</button>\n            </div>\n        </mat-step>\n\n    </mat-horizontal-stepper>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/navigation/navigation.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/navigation/navigation.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\n\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"(isHandset$ | async) === false\"\n    [ngStyle]=\"{'background-color' : this.changeDark =='Dark' ? '#000000' :(this.changeDark =='Pink' ? '#ff69b4': (this.changeDark=='defaultColor'?'#4d668c': '#4d668c'))}\">\n\n    <mat-toolbar style=\"color:white\"><i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i>&nbsp;Menu\n\n    </mat-toolbar>\n    <!----------------------------------------------------------------------------------------------------------- -->\n    <mat-nav-list>\n      <a mat-list-item [routerLink]=\"['/dashboard']\" style=\"color: white\"><i class=\"fa fa-home\"\n          aria-hidden=\"true\"></i>&nbsp;Home</a>\n      <a mat-list-item [routerLink]=\"['/profile']\" style=\"color: white\"><i class=\"fa fa-user-circle\"\n          aria-hidden=\"true\"></i>&nbsp;User Profile</a>\n      <a mat-list-item [routerLink]=\"['/location']\" style=\"color: white\"><i class=\"fa fa-globe\"\n          aria-hidden=\"true\"></i>&nbsp;Geo\n        Location</a>\n      <a mat-list-item [routerLink]=\"['/forms']\" style=\"color: white\">\n\n        <i class=\"fa fa-id-card-o\" aria-hidden=\"true\"></i>&nbsp;Forms</a>\n\n      <a mat-list-item [routerLink]=\"['/card']\" style=\"color: white\"><i class=\"fa fa-sticky-note-o\"\n          aria-hidden=\"true\"></i>&nbsp;Cards</a>\n      <a mat-list-item [routerLink]=\"['/table']\" style=\"color: white\"><i class=\"fa fa-table\"\n          aria-hidden=\"true\"></i>&nbsp;Tables</a>\n      <a mat-list-item [routerLink]=\"['/notification']\" style=\"color: white\"><i class=\"fa fa-bell-o\"\n          aria-hidden=\"true\"></i>&nbsp;Notifications</a>\n      <a mat-list-item [routerLink]=\"['/shopping']\" style=\"color: white\"><i class=\"fa fa-shopping-bag\"\n          aria-hidden=\"true\"></i>&nbsp;Shopping</a>\n      <a mat-list-item [routerLink]=\"['/makePayment']\" style=\"color: white\"><i class=\"fa fa-credit-card\"\n          aria-hidden=\"true\"></i>&nbsp;Make\n        Payment</a>\n      <a mat-list-item [routerLink]=\"['/paypal']\" style=\"color: white\"><i class=\"fa fa-paypal\"\n          aria-hidden=\"true\"></i>&nbsp;Donate\n        Paypal</a>\n      <a mat-list-item [routerLink]=\"['/api']\" style=\"color: white\"><i class=\"fa fa-plug\"\n          aria-hidden=\"true\"></i>&nbsp;Api Connection\n      </a>\n      <a mat-list-item [routerLink]=\"['/album']\" style=\"color: white\"><i class=\"fa fa-picture-o\"\n          aria-hidden=\"true\"></i>&nbsp;Album\n      </a>\n    </mat-nav-list>\n    <!-- ------------------------------------------------------------------------------ -->\n  </mat-sidenav>\n  <mat-sidenav-content>\n\n    <button class=\"navi-btn\" type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\"\n      *ngIf=\"isHandset$ | async\">\n      <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n    </button>\n\n    <div>\n      <mat-toolbar class=\"navbar mat-toolbar-info\"\n        [ngStyle]=\"{'background-color' : this.changeDark =='Dark' ? '#000000' :(this.changeDark =='Pink' ? '#ff69b4': (this.changeDark=='defaultColor'?'#4d668c': '#4d668c'))}\">\n\n\n        <span style=\"color: white;font-family:sans-serif;font-size:25px;\">\n          {{title.title}}\n        </span>\n\n        <div>\n\n          <mat-menu #themeMenu=\"matMenu\">\n            <a mat-menu-item (click)=\"darkTheme('Dark')\"><i class=\"fa fa-circle\" aria-hidden=\"true\"></i>&nbsp;Dark</a>\n\n            <a mat-menu-item (click)=\"darkTheme('Pink')\" style=\"color: deeppink\"><i class=\"fa fa-circle\"\n                aria-hidden=\"true\"></i>&nbsp;Pink</a>\n\n\n            <a mat-menu-item (click)=\"darkTheme('defaultColor')\" style=\"color:#4d668c\"><i class=\"fa fa-circle\"\n                aria-hidden=\"true\"></i>&nbsp;Default</a>\n          </mat-menu>\n          <button [mat-menu-trigger-for]=\"themeMenu\" class=\"btn btn-sm\" style=\"color: white\">\n            <i class=\"fa fa-circle\" aria-hidden=\"true\"></i>&nbsp;Themes\n          </button>\n          <mat-menu #appMenu=\"matMenu\">\n            <a mat-menu-item><i class=\"fa fa-tasks\" aria-hidden=\"true\"></i>&nbsp;New Task</a>\n            <a mat-menu-item><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>&nbsp;Inbox</a>\n            <a mat-menu-item><i class=\"fa fa-cog\" aria-hidden=\"true\"></i>&nbsp;Account Setting</a>\n            <a mat-menu-item><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>&nbsp;Logout</a>\n          </mat-menu>\n          <button [mat-menu-trigger-for]=\"appMenu\" class=\"btn btn-sm\" style=\"color: white;margin-left: 15px;\"><i\n              class=\"fa fa-user-o\" aria-hidden=\"true\"></i>&nbsp;Account\n          </button>\n        </div>\n\n      </mat-toolbar>\n    </div>\n    <!-- <div *ngIf=\"showLoder\" class=\"spinner\"></div> -->\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/notification/notification.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/notification/notification.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row-pull-left\">\n\n<div class=\"col-md-6\">\n        <mat-accordion>\n            <mat-expansion-panel (opened)=\"panelOpenState1 = true\" (closed)=\"panelOpenState1 = false\">\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        Notification 1\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        {{panelOpenState ? 'open' : 'closed'}}\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                <p>One evening, a boy called Jack and his sister called Jill went up a small hill near their house.\n                    wanted to fetch a pail of water. But on their way down, Jack's feet tripped over some roots.\n                    Jack fell down and broke the crown of his head.</p>\n            </mat-expansion-panel>\n        </mat-accordion>\n\n  </div>\n    <div class=\"col-md-6\">\n        <mat-accordion>\n            <mat-expansion-panel (opened)=\"panelOpenState2 = true\" (closed)=\"panelOpenState2 = false\">\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        Notification 2\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        {{panelOpenState ? 'open' : 'closed'}}\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                <p>One evening, a boy called Jack and his sister called Jill went up a small hill near their house.\n                    wanted to fetch a pail of water. But on their way down, Jack's feet tripped over some roots.\n                    Jack fell down and broke the crown of his head.</p>\n            </mat-expansion-panel>\n        </mat-accordion>\n    </div>\n</div>\n<div class=\"row-pull-right\">\n    <div class=\"col-md-6\">\n            <mat-accordion>\n                <mat-expansion-panel (opened)=\"panelOpenState1 = true\" (closed)=\"panelOpenState1 = false\">\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Notification 1\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            {{panelOpenState ? 'open' : 'closed'}}\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n                    <p>One evening, a boy called Jack and his sister called Jill went up a small hill near their house.\n                        wanted to fetch a pail of water. But on their way down, Jack's feet tripped over some roots.\n                        Jack fell down and broke the crown of his head.</p>\n                </mat-expansion-panel>\n            </mat-accordion>\n    \n      </div>\n        <div class=\"col-md-6\">\n            <mat-accordion>\n                <mat-expansion-panel (opened)=\"panelOpenState2 = true\" (closed)=\"panelOpenState2 = false\">\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Notification 2\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            {{panelOpenState ? 'open' : 'closed'}}\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n                    <p>One evening, a boy called Jack and his sister called Jill went up a small hill near their house.\n                        wanted to fetch a pail of water. But on their way down, Jack's feet tripped over some roots.\n                        Jack fell down and broke the crown of his head.</p>\n                </mat-expansion-panel>\n            </mat-accordion>\n        </div>\n    </div>\n<!-- \n    <div class=\"row-md-6\">\n        <mat-accordion>\n            <mat-expansion-panel (opened)=\"panelOpenState3 = true\" (closed)=\"panelOpenState3 = false\">\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        Notification 3\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        {{panelOpenState ? 'open' : 'closed'}}\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                <p>One evening, a boy called Jack and his sister called Jill went up a small hill near their house.\n                    wanted to fetch a pail of water. But on their way down, Jack's feet tripped over some roots.\n                    Jack fell down and broke the crown of his head.</p>\n            </mat-expansion-panel>\n        </mat-accordion>\n\n    </div>\n    <div class=\"row-md-6\">\n        <mat-accordion>\n            <mat-expansion-panel (opened)=\"panelOpenState4 = true\" (closed)=\"panelOpenState4 = false\">\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        Notification 4\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        {{panelOpenState ? 'open' : 'closed'}}\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                <p>One evening, a boy called Jack and his sister called Jill went up a small hill near their house.\n                    wanted to fetch a pail of water. But on their way down, Jack's feet tripped over some roots.\n                    Jack fell down and broke the crown of his head.</p>\n            </mat-expansion-panel>\n        </mat-accordion>\n    </div>\n\n\n\n\n\n\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <mat-accordion>\n                <mat-expansion-panel (opened)=\"panelOpenState5 = true\" (closed)=\"panelOpenState5 = false\">\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Self aware panel\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            {{panelOpenState ? 'open' : 'closed'}}\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n                    <p>One evening, a boy called Jack and his sister called Jill went up a small hill near their house.\n                        wanted to fetch a pail of water. But on their way down, Jack's feet tripped over some roots.\n                        Jack fell down and broke the crown of his head.</p>\n                </mat-expansion-panel>\n            </mat-accordion>\n\n\n        </div>\n        <div class=\"col-md-6\">\n            <mat-accordion>\n                <mat-expansion-panel (opened)=\"panelOpenState6 = true\" (closed)=\"panelOpenState6 = false\">\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Self aware panel\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            {{panelOpenState ? 'open' : 'closed'}}\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n                    <p>One evening, a boy called Jack and his sister called Jill went up a small hill near their house.\n                        wanted to fetch a pail of water. But on their way down, Jack's feet tripped over some roots.\n                        Jack fell down and broke the crown of his head.</p>\n                </mat-expansion-panel>\n            </mat-accordion>\n        </div>\n\n    </div>\n\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <mat-accordion>\n                <mat-expansion-panel (opened)=\"panelOpenState7 = true\" (closed)=\"panelOpenState7 = false\">\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Self aware panel\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            {{panelOpenState ? 'open' : 'closed'}}\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n                    <p>One evening, a boy called Jack and his sister called Jill went up a small hill near their house.\n                        wanted to fetch a pail of water. But on their way down, Jack's feet tripped over some roots.\n                        Jack fell down and broke the crown of his head.</p>\n                </mat-expansion-panel>\n            </mat-accordion>\n\n\n        </div>\n        <div class=\"col-md-6\">\n            <mat-accordion>\n                <mat-expansion-panel (opened)=\"panelOpenState8 = true\" (closed)=\"panelOpenState8 = false\">\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Self aware panel\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            {{panelOpenState ? 'open' : 'closed'}}\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n                    <p>One evening, a boy called Jack and his sister called Jill went up a small hill near their house.\n                        wanted to fetch a pail of water. But on their way down, Jack's feet tripped over some roots.\n                        Jack fell down and broke the crown of his head.</p>\n                </mat-expansion-panel>\n            </mat-accordion>\n        </div>\n\n    </div>\n\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <mat-accordion>\n                <mat-expansion-panel (opened)=\"panelOpenState9 = true\" (closed)=\"panelOpenState9 = false\">\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Self aware panel\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            {{panelOpenState ? 'open' : 'closed'}}\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n                    <p>One evening, a boy called Jack and his sister called Jill went up a small hill near their house.\n                        wanted to fetch a pail of water. But on their way down, Jack's feet tripped over some roots.\n                        Jack fell down and broke the crown of his head.</p>\n                </mat-expansion-panel>\n            </mat-accordion>\n\n\n        </div>\n        <div class=\"col-md-6\">\n            <mat-accordion>\n                <mat-expansion-panel (opened)=\"panelOpenState10 = true\" (closed)=\"panelOpenState10 = false\">\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Self aware panel\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            {{panelOpenState ? 'open' : 'closed'}}\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n                    <p>One evening, a boy called Jack and his sister called Jill went up a small hill near their house.\n                        wanted to fetch a pail of water. But on their way down, Jack's feet tripped over some roots.\n                        Jack fell down and broke the crown of his head.</p>\n                </mat-expansion-panel>\n            </mat-accordion>\n        </div>\n\n    </div>\n\n\n</div> -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/paypal/paypal.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/paypal/paypal.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-basic\">\n    <p>Example of Pipe Learning</p>\n    <hr>\n    <p>{{myName|uppercase}}</p>\n    <p>{{myName | titlecase}}</p>\n    <p>{{myName | lowercase}}</p>\n<hr>\n<p>{{date|date}}</p>\n\n\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/profile/profile.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/profile/profile.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <div class=\"mat-card card-basic\" style=\"background-color: #4d668c;color:white\">\n        <!--<p>Photo Here</p>-->\n        <img [src]=\"url ? url : 'https://pbs.twimg.com/profile_images/1057966438814646272/M1cdrSh8.jpg'\"\n           style=\"border-radius:200px;margin:auto;max-width:140px;\" class=\"img-responsive\"> <br />\n        <input type='file' (change)=\"onSelectFile($event)\" class=\"input-picture\">\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"mat-card card-basic\" style=\"background-color: #4d668c;color:white;border-radius: 5px;\">\n        <label style=\"color: white;font-family: serif;\">Dheeraj Sharma</label><br><p style=\"font-size: 15px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\">\n          Software Engineer @ Jellyfish Technologies</p>\n      </div>\n    </div>\n  </div>\n\n  <hr class=\"card-basic\">\n  <div class=\"row\">\n\n    <div class=\"col-md-4\">\n\n      <div class=\"mat-card card-basic\">\n        <label>Company Name</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Jelllyfish Technologies\" disabled>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n\n\n      <div class=\"mat-card card-basic\">\n        <label>Employee Code</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"A54123XZY\" disabled>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n\n\n      <div class=\"mat-card card-basic\">\n        <label>Email Address</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"dheeraj.sharma@jellyfishtechnologies.com\" disabled>\n      </div>\n    </div>\n\n\n  </div>\n\n  <div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"mat-card card-basic\">\n          <label>First Name</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Dheeraj\">\n        </div>\n\n      </div>\n\n      <div class=\"col-md-4\">\n        <div class=\"mat-card card-basic\">\n          <label>Last Name</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Sharma\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"mat-card card-basic\">\n          <label>Office Location</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"H-134, Sector 63, NOIDA\">\n        </div>\n      </div>\n\n      <div class=\"col-md-4\">\n        <div class=\"mat-card card-basic\">\n          <label>City-Country</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Noida-India\">\n        </div>\n      </div>\n\n\n      <div class=\"col-md-4\">\n        <div class=\"mat-card card-basic\">\n          <label>Zip Code</label>\n          <input type=\"number\" class=\"form-control\" placeholder=\"201301\">\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n  <hr class=\"card-basic\">\n  <div class=\"card-basic\">\n    <button type=\"button\" class=\"btn btn-success btn-sm card-basic\"\n      style=\"background-color: #4d668c\">Update</button>&nbsp;\n    <button type=\"button\" class=\"btn btn-danger btn-sm card-basic\">Edit </button>\n  </div>\n  <!--<div class=\"row card-basic\">-->\n\n  <!--<div class=\"col-md-1 \">-->\n  <!--<div class=\"mat-card card-basic\">-->\n  <!--<i class=\"fa fa-facebook-square fa-3x\" aria-hidden=\"true\"></i></div>-->\n  <!--</div>-->\n  <!--<div class=\"col-md-1\">-->\n  <!--<div class=\"mat-card card-basic\">-->\n  <!--<i class=\"fa fa-linkedin-square fa-3x\" aria-hidden=\"true\"></i>-->\n  <!--</div>-->\n  <!--</div>-->\n  <!--<div class=\"col-md-1\">-->\n  <!--<div class=\"mat-card card-basic\">-->\n  <!--<i class=\"fa fa-twitter-square fa-3x\" aria-hidden=\"true\"></i>-->\n  <!--</div>-->\n  <!--</div>-->\n  <!--<div class=\"col-md-1\">-->\n  <!--<div class=\"mat-card card-basic\">-->\n  <!--<i class=\"fa fa-instagram fa-3x\" aria-hidden=\"true\"></i>-->\n  <!--</div>-->\n  <!--</div>-->\n\n  <!--<div class=\"col-md-1\">-->\n  <!--<div class=\"mat-card card-basic\">-->\n  <!--<i class=\"fa fa-google-plus-square fa-3x\" aria-hidden=\"true\"></i>-->\n  <!--</div>-->\n  <!--</div>-->\n\n  <!--<div class=\"col-md-1\">-->\n  <!--<div class=\"mat-card card-basic\">-->\n  <!--<i class=\"fa fa-github-square fa-3x\" aria-hidden=\"true\"></i>-->\n  <!--</div>-->\n  <!--</div>-->\n  <!--<div class=\"col-md-1\">-->\n  <!--<div class=\"mat-card card-basic\">-->\n  <!--<i class=\"fa fa-stack-overflow fa-3x\" aria-hidden=\"true\"></i>-->\n  <!--</div>-->\n  <!--</div>-->\n\n  <!--</div>-->\n  <!--</div>-->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/shopping/shopping.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/shopping/shopping.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container card-basic shadow\">\n\n    <div class=\"card\">\n        <h5 class=\"card-header\">Independent Heavyweight Hooded Pullover Sweatshirt</h5>\n        <div class=\"card-body\">\n\n            <div class=\"row\">\n                <div class=\"col-md-5 inner\">\n                    <!-- <h5 class=\"card-title\">Independent Heavyweight Hooded Pullover Sweatshirt</h5> -->\n                    <img\n                        src=\"https://cdn.shopify.com/s/files/1/0055/1242/products/IND4000C-BLUA_0a0782f9-3c05-44a5-86c6-14b16f48ac73_2048x.jpg?v=1555356508\">\n                </div>\n                <div class=\"col-md-7\">\n                    <p class=\"card-text\">\n                        We need bees. They pollinate most of our food. Now bees need us. Climate change and excessive\n                        pesticide use have put them in danger of disappearing.\n                    </p>\n                    <hr>\n                    <ul>\n                        <li>Price: 120$</li>\n                        <li>Fabric: Good</li>\n                        <li>Washable: No! You can't</li>\n                        <li>Smell: Yes! 36 Types Smell You Can Feel</li>\n\n                    </ul>\n                    <button class=\"btn btn-success btn-sm\" (click)=\"addToCart()\">Add to cart</button>&nbsp;\n                    <button class=\"btn btn-primary btn-sm\">Buy</button>\n                </div>\n            </div>\n        </div>\n\n        <!-- Card 2 -->\n\n        <div class=\"card\">\n            <h5 class=\"card-header\">[77% OFF] 2019 Planet Graphic Drop Shoulder Sweatshirt In GINGER | ZAFUL Europe</h5>\n            <div class=\"card-body\">\n\n\n                <div class=\"row\">\n                    <div class=\"col-md-5 inner\">\n                        <!-- <h5 class=\"card-title\">Independent Heavyweight Hooded Pullover Sweatshirt</h5> -->\n                        <img\n                            src=\"https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2017/09/14/goods-first-img/1512949414697634331.jpg\">\n                    </div>\n                    <div class=\"col-md-7\">\n                        <p class=\"card-text\">\n                            We need bees. They pollinate most of our food. Now bees need us. Climate change and\n                            excessive pesticide use have put them in danger of disappearing.\n                        </p>\n                        <hr>\n                        <ul>\n                            <li>Price: 120$</li>\n                            <li>Fabric: Good</li>\n                            <li>Washable: No! You can't</li>\n                            <li>Smell: Yes! 36 Types Smell You Can Feel</li>\n\n                        </ul>\n                        <a href=\"#\" class=\"btn btn-success btn-sm\">Add To card</a>&nbsp;\n                        <a href=\"#\" class=\"btn btn-primary btn-sm\">Buy</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!-- Card 3 -->\n\n        <div class=\"card\">\n            <h5 class=\"card-header\">Unisex Pullover Hooded Sweatshirt</h5>\n            <div class=\"card-body\">\n\n\n                <div class=\"row\">\n                    <div class=\"col-md-5 inner\">\n                        <!-- <h5 class=\"card-title\">Independent Heavyweight Hooded Pullover Sweatshirt</h5> -->\n                        <img\n                            src=\"https://cdn.shopify.com/s/files/1/0055/1242/products/AFX90UNC-CHT_2048x.jpg?v=1554849777\">\n                    </div>\n                    <div class=\"col-md-7\">\n                        <p class=\"card-text\">\n                            We need bees. They pollinate most of our food. Now bees need us. Climate change and\n                            excessive pesticide use have put them in danger of disappearing.\n                        </p>\n                        <hr>\n                        <ul>\n                            <li>Price: 120$</li>\n                            <li>Fabric: Good</li>\n                            <li>Washable: No! You can't</li>\n                            <li>Smell: Yes! 36 Types Smell You Can Feel</li>\n\n                        </ul>\n                        <a href=\"#\" class=\"btn btn-success btn-sm\">Add To card</a>&nbsp;\n                        <a href=\"#\" class=\"btn btn-primary btn-sm\">Buy</a>\n                    </div>\n                </div>\n            </div>\n\n\n            <!-- Card 4 -->\n\n            <div class=\"card\">\n                <h5 class=\"card-header\">Nike Kid's Team Club Sweatshirt</h5>\n                <div class=\"card-body\">\n\n\n                    <div class=\"row\">\n                        <div class=\"col-md-5 inner\">\n                            <!-- <h5 class=\"card-title\">Independent Heavyweight Hooded Pullover Sweatshirt</h5> -->\n                            <img src=\"https://images-na.ssl-images-amazon.com/images/I/91ol3fRP7%2BL._UX679_.jpg\">\n                        </div>\n                        <div class=\"col-md-7\">\n                            <p class=\"card-text\">\n                                We need bees. They pollinate most of our food. Now bees need us. Climate change and\n                                excessive pesticide use have put them in danger of disappearing.\n                            </p>\n                            <hr>\n                            <ul>\n                                <li>Price: 120$</li>\n                                <li>Fabric: Good</li>\n                                <li>Washable: No! You can't</li>\n                                <li>Smell: Yes! 36 Types Smell You Can Feel</li>\n\n                            </ul>\n                            <a href=\"#\" class=\"btn btn-success btn-sm\">Add To card</a>&nbsp;\n                            <a href=\"#\" class=\"btn btn-primary btn-sm\">Buy</a>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Card 5 -->\n\n\n\n\n            </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/table/table.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/table/table.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <mat-form-field>\n\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" class=\".card-basic\">\n        <!-- position col -->\n        <ng-container matColumnDef=\"position\">\n            <th mat-header-cell *matHeaderCellDef>{{col1}}</th>\n            <td mat-cell *matCellDef=\"let elements\">{{elements.position}}</td>\n        </ng-container>\n        <!-- name col -->\n        <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef>{{col2}}</th>\n            <td mat-cell *matCellDef=\"let elements\">{{elements.name}}</td>\n        </ng-container>\n        <!-- Weight col -->\n        <ng-container matColumnDef=\"weight\">\n            <th mat-header-cell *matHeaderCellDef>{{col3}}</th>\n            <td mat-cell *matCellDef=\"let elements\">{{elements.weight}}</td>\n        </ng-container>\n        <!-- symbol Col -->\n        <ng-container matColumnDef=\"symbol\">\n            <th mat-header-cell *matHeaderCellDef>{{col4}}</th>\n            <td mat-cell *matCellDef=\"let elements\">{{elements.symbol}}</td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayCols\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayCols;\"></tr>\n\n\n    </table>\n\n\n    <mat-paginator [length]=\"resultsLength\" [pageSize]=\"5\" [pageSizeOptions]=\"[5,10,20]\">\n\n    </mat-paginator>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/Components/Charts/bar-chart/bar-chart.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/Components/Charts/bar-chart/bar-chart.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvQ2hhcnRzL2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/Components/Charts/bar-chart/bar-chart.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/Components/Charts/bar-chart/bar-chart.component.ts ***!
          \********************************************************************/
        /*! exports provided: BarChartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function () { return BarChartComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BarChartComponent = /** @class */ (function () {
                function BarChartComponent() {
                    this.title = 'Jellyfish Technologies Successfull  Project Delivery';
                    this.type = 'ComboChart';
                    this.data = [
                        ['E Comm', 3, 2, 2.5],
                        ['Bank', 2, 3, 2.5],
                        ['USA', 1, 5, 3],
                        ['Mobile', 3, 9, 6],
                        ['Research', 4, 2, 3]
                    ];
                    this.columnNames = ['One', 'Two', 'Three', 'Four'];
                    this.options = {
                        hAxis: {
                            title: 'Jellyfish Technologies Analysys'
                        },
                        vAxis: {
                            title: 'No of Projects'
                        },
                        seriesType: 'bars',
                        series: { 2: { type: 'line' } }
                    };
                    this.width = 450;
                    this.height = 380;
                }
                BarChartComponent.prototype.ngOnInit = function () {
                };
                return BarChartComponent;
            }());
            BarChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bar-chart',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bar-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Charts/bar-chart/bar-chart.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bar-chart.component.css */ "./src/app/Components/Charts/bar-chart/bar-chart.component.css")).default]
                })
            ], BarChartComponent);
            /***/ 
        }),
        /***/ "./src/app/Components/Charts/line-chart/line-chart.component.css": 
        /*!***********************************************************************!*\
          !*** ./src/app/Components/Charts/line-chart/line-chart.component.css ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvQ2hhcnRzL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/Components/Charts/line-chart/line-chart.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/Components/Charts/line-chart/line-chart.component.ts ***!
          \**********************************************************************/
        /*! exports provided: LineChartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function () { return LineChartComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LineChartComponent = /** @class */ (function () {
                function LineChartComponent() {
                    this.title = 'Average Temperature in Indian Cities';
                    this.type = 'LineChart';
                    this.data = [
                        ["Jan", 7.0, -0.2, -0.9, 3.9],
                        ["Feb", 6.9, 0.8, 0.6, 4.2],
                        ["Mar", 9.5, 5.7, 3.5, 5.7],
                        ["Apr", 14.5, 11.3, 8.4, 8.5],
                        ["May", 18.2, 17.0, 13.5, 11.9],
                        ["Jun", 21.5, 22.0, 17.0, 15.2],
                        ["Jul", 25.2, 24.8, 18.6, 17.0],
                        ["Aug", 26.5, 24.1, 17.9, 16.6],
                        ["Sep", 23.3, 20.1, 14.3, 14.2],
                        ["Oct", 18.3, 14.1, 9.0, 10.3],
                        ["Nov", 13.9, 8.6, 3.9, 6.6],
                        ["Dec", 9.6, 2.5, 1.0, 4.8]
                    ];
                    this.columnNames = ["Cities", "Noida", "Banglore", "Bareilly", "Mumbai"];
                    this.options = {
                        hAxis: {
                            title: 'Cities'
                        },
                        vAxis: {
                            title: 'Temperature'
                        },
                    };
                    this.width = 450;
                    this.height = 380;
                }
                LineChartComponent.prototype.ngOnInit = function () {
                };
                return LineChartComponent;
            }());
            LineChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-line-chart',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./line-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Charts/line-chart/line-chart.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./line-chart.component.css */ "./src/app/Components/Charts/line-chart/line-chart.component.css")).default]
                })
            ], LineChartComponent);
            /***/ 
        }),
        /***/ "./src/app/Components/Charts/pie-chart/pie-chart.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/Components/Charts/pie-chart/pie-chart.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvQ2hhcnRzL3BpZS1jaGFydC9waWUtY2hhcnQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/Components/Charts/pie-chart/pie-chart.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/Components/Charts/pie-chart/pie-chart.component.ts ***!
          \********************************************************************/
        /*! exports provided: PieChartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function () { return PieChartComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PieChartComponent = /** @class */ (function () {
                function PieChartComponent() {
                    this.type = 'PieChart';
                    this.title = 'Jellyfish Technologies Software Development Ratio';
                    this.data = [
                        ['Java', 20.0],
                        ['Angular', 20.0],
                        ['NodeJs', 10.0],
                        ['Blockchain', 5.0],
                        ['React', 10.0],
                        ['Android', 10.0],
                        ['Hybrid', 5.0],
                        ['Groovy', 5.0],
                        ['iOS', 10.0],
                        ['Others', 5.0],
                    ];
                    this.columnNames = ['Browser', 'Percentage',];
                    this.options = {
                        tooltip: { isHtml: true },
                        colors: ['#3366CC', '#109618', '#ec8f6e', '#990099', '#f6c7b6'], is3D: true
                    };
                    this.width = 450;
                    this.height = 380;
                }
                PieChartComponent.prototype.ngOnInit = function () {
                };
                return PieChartComponent;
            }());
            PieChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-pie-chart',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pie-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Charts/pie-chart/pie-chart.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pie-chart.component.css */ "./src/app/Components/Charts/pie-chart/pie-chart.component.css")).default]
                })
            ], PieChartComponent);
            /***/ 
        }),
        /***/ "./src/app/Components/Shared Components/pagination/pagination.component.css": 
        /*!**********************************************************************************!*\
          !*** ./src/app/Components/Shared Components/pagination/pagination.component.css ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvU2hhcmVkIENvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/Components/Shared Components/pagination/pagination.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/Components/Shared Components/pagination/pagination.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: PaginationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function () { return PaginationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
            /* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_3__);
            var PaginationComponent = /** @class */ (function () {
                function PaginationComponent() {
                    this.paginationData = new events__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
                }
                PaginationComponent.prototype.ngOnInit = function () {
                };
                return PaginationComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
            ], PaginationComponent.prototype, "paginator", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PaginationComponent.prototype, "pageInTable", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PaginationComponent.prototype, "paginatorIndex", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PaginationComponent.prototype, "paginationData", void 0);
            PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-pagination',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Shared Components/pagination/pagination.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pagination.component.css */ "./src/app/Components/Shared Components/pagination/pagination.component.css")).default]
                })
            ], PaginationComponent);
            /***/ 
        }),
        /***/ "./src/app/Components/album/Pipes/search-highlight.pipe.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/Components/album/Pipes/search-highlight.pipe.ts ***!
          \*****************************************************************/
        /*! exports provided: SearchHighlightPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHighlightPipe", function () { return SearchHighlightPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SearchHighlightPipe = /** @class */ (function () {
                function SearchHighlightPipe() {
                }
                SearchHighlightPipe.prototype.transform = function (value) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return null;
                };
                return SearchHighlightPipe;
            }());
            SearchHighlightPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'searchHighlight'
                })
            ], SearchHighlightPipe);
            /***/ 
        }),
        /***/ "./src/app/Components/album/album.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/Components/album/album.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.bg-header-id {\n  background-color: lightgray;\n  color: #4d668c;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 20px;\n  border-top-left-radius: 5px;\n}\n\n.bg-header-email {\n  background-color: lightgray;\n  color: #4d668c;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 20px;\n  border-top-right-radius: 5px;\n}\n\n.bg-header {\n  background-color: lightgray;\n  color: #4d668c;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 20px;\n}\n\ninput {\n  font-size: 10px;\n  font-family: monospace;\n  color: white;\n}\n\n.filter-bg-color {\n  background-color: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9hbGJ1bS9hbGJ1bS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCx5Q0FBeUM7RUFDekMsZUFBZTtFQUNmLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2FsYnVtL2FsYnVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmctaGVhZGVyLWlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBjb2xvcjogIzRkNjY4YztcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xufVxuXG4uYmctaGVhZGVyLWVtYWlsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBjb2xvcjogIzRkNjY4YztcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbn1cblxuLmJnLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgY29sb3I6ICM0ZDY2OGM7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmlucHV0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5maWx0ZXItYmctY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/Components/album/album.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/Components/album/album.component.ts ***!
          \*****************************************************/
        /*! exports provided: AlbumComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumComponent", function () { return AlbumComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_Services_album_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/album.service */ "./src/app/Services/album.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/title.service */ "./src/app/Services/title.service.ts");
            var AlbumComponent = /** @class */ (function () {
                function AlbumComponent(albumService, componentTitleService) {
                    this.albumService = albumService;
                    this.componentTitleService = componentTitleService;
                    this.tabTitle = 'Album from Server';
                    this.albumData = [];
                    this.displayedColumns = ['albumId', 'id', 'title', 'url'];
                    this.isLoading = true;
                }
                AlbumComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.albumService.httpGetAlbum().subscribe(function (res) {
                        _this.albumData = res;
                        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.albumData);
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataLength = _this.albumData.length;
                        if (_this.albumData.length > 0) {
                            _this.isLoading = false;
                        }
                    });
                    this.componentTitleService.title = this.tabTitle;
                };
                AlbumComponent.prototype.searchById = function (filterId) {
                    this.filterSeachHighlightId = this.dataSource.filter = filterId;
                    console.log('Filter ID' + this.filterSeachHighlightId);
                };
                AlbumComponent.prototype.searchByTitle = function (filterValue) {
                    this.filterSeachHighlightTitle = this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
                };
                return AlbumComponent;
            }());
            AlbumComponent.ctorParameters = function () { return [
                { type: src_app_Services_album_service__WEBPACK_IMPORTED_MODULE_2__["AlbumService"] },
                { type: src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
            ], AlbumComponent.prototype, "paginator", void 0);
            AlbumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-album',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./album.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/album/album.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./album.component.css */ "./src/app/Components/album/album.component.css")).default]
                })
            ], AlbumComponent);
            /***/ 
        }),
        /***/ "./src/app/Components/api/api.component.css": 
        /*!**************************************************!*\
          !*** ./src/app/Components/api/api.component.css ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.bg-header-id {\n  background-color: lightgray;\n  color: #4d668c;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 20px;\n  border-top-left-radius: 5px;\n}\n\n.bg-header-email {\n  background-color: lightgray;\n  color: #4d668c;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 20px;\n  border-top-right-radius: 5px;\n}\n\n.bg-header {\n  background-color: lightgray;\n  color: #4d668c;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 20px;\n}\n\ntd {\n  border-bottom: 1px solid #f5f5f5;\n  border-top: 1px solid #f5f5f5;\n  border-left: 1px solid #f5f5f5;\n  border-right: 1px solid #f5f5f5;\n  background: transparent;\n  text-align: left;\n  font-weight: bold;\n  padding: 0px;\n  color: #777777;\n}\n\n/* .spinner {\n  border: 16px solid silver;\n  border-top: 16px solid #337AB7;\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  animation: spin 700ms linear infinite;\n  top: 50%;\n  left: 50%;\n  position: absolute;\n}\n\n@keyframes span {\n  0% {\n    transform: rotate(0deg)\n  }\n  100% {\n    transform: rotate(-360deg)\n  }\n} */\n\n.loder {\n  margin-left: auto;\n  margin-right: auto;\n  float: none;\n  text-align: center;\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9hcGkvYXBpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCx5Q0FBeUM7RUFDekMsZUFBZTtFQUNmLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QseUNBQXlDO0VBQ3pDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7O0FBRUg7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvYXBpL2FwaS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJnLWhlYWRlci1pZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgY29sb3I6ICM0ZDY2OGM7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbn1cblxuLmJnLWhlYWRlci1lbWFpbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgY29sb3I6ICM0ZDY2OGM7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG59XG5cbi5iZy1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGNvbG9yOiAjNGQ2NjhjO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG50ZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNWY1O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Y1ZjVmNTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjVmNWY1O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjVmNWY1O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgY29sb3I6ICM3Nzc3Nzc7XG59XG5cbi8qIC5zcGlubmVyIHtcbiAgYm9yZGVyOiAxNnB4IHNvbGlkIHNpbHZlcjtcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzM3QUI3O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGFuaW1hdGlvbjogc3BpbiA3MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGFuIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpXG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZylcbiAgfVxufSAqL1xuXG4ubG9kZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBmbG9hdDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/Components/api/api.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/Components/api/api.component.ts ***!
          \*************************************************/
        /*! exports provided: ApiComponent, UserDataSource */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiComponent", function () { return ApiComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataSource", function () { return UserDataSource; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_Services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/http.service */ "./src/app/Services/http.service.ts");
            /* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
            /* harmony import */ var src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/title.service */ "./src/app/Services/title.service.ts");
            var ApiComponent = /** @class */ (function () {
                function ApiComponent(_service, componentTitleService) {
                    this._service = _service;
                    this.componentTitleService = componentTitleService;
                    this.dataArray = [];
                    this.isLoading = true;
                    this.tabTitle = 'API Connection';
                    this.dataSource = new UserDataSource(this._service);
                    this.displayedColumns = ['id', 'name', 'email'];
                }
                ApiComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dataSource.connect().subscribe((function (dheeraj) {
                        if (dheeraj.length > 0) {
                            _this.isLoading = false;
                        }
                    }));
                    this.componentTitleService.title = this.tabTitle;
                };
                return ApiComponent;
            }());
            ApiComponent.ctorParameters = function () { return [
                { type: src_app_Services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
                { type: src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"] }
            ]; };
            ApiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-api',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./api.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/api/api.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./api.component.css */ "./src/app/Components/api/api.component.css")).default]
                })
            ], ApiComponent);
            var UserDataSource = /** @class */ (function (_super) {
                __extends(UserDataSource, _super);
                function UserDataSource(_userService) {
                    var _this = _super.call(this) || this;
                    _this._userService = _userService;
                    return _this;
                }
                UserDataSource.prototype.connect = function () {
                    return this._userService.httpGetData();
                };
                UserDataSource.prototype.disconnect = function () { };
                UserDataSource.prototype.ngOnInit = function () { };
                return UserDataSource;
            }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["DataSource"]));
            /***/ 
        }),
        /***/ "./src/app/Components/card/card.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/Components/card/card.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".example-card {\n  max-width: 300px;\n}\n\n.inner\n{\n  overflow: hidden;\n  \n}\n\n.inner img\n{\n  transition: all 1.5s ease;\n}\n\n.inner:hover img{\n  transform: scale(1.3);\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxnQkFBZ0I7O0FBRWxCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cblxuLmlubmVyXG57XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIFxufVxuXG4uaW5uZXIgaW1nXG57XG4gIHRyYW5zaXRpb246IGFsbCAxLjVzIGVhc2U7XG59XG5cbi5pbm5lcjpob3ZlciBpbWd7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbn1cblxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/Components/card/card.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/Components/card/card.component.ts ***!
          \***************************************************/
        /*! exports provided: CardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function () { return CardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/title.service */ "./src/app/Services/title.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var CardComponent = /** @class */ (function () {
                function CardComponent(componentTitleService, titleService) {
                    this.componentTitleService = componentTitleService;
                    this.titleService = titleService;
                    this.countDheeraj = 102;
                    this.countAlen = 18;
                    this.countLeeza = 47;
                    this.countAlex = 76;
                    this.title = 'Card';
                    this.tabTitle = 'Cards';
                }
                CardComponent.prototype.ngOnInit = function () {
                    this.componentTitleService.title = this.tabTitle;
                    this.titleService.setTitle(this.tabTitle);
                };
                CardComponent.prototype.getDheerajCount = function () {
                    return this.countDheeraj++;
                };
                CardComponent.prototype.getAlenCount = function () {
                    return this.countAlen++;
                };
                CardComponent.prototype.getLeezaCount = function () {
                    return this.countLeeza++;
                };
                CardComponent.prototype.getAlexCount = function () {
                    return this.countAlex++;
                };
                return CardComponent;
            }());
            CardComponent.ctorParameters = function () { return [
                { type: src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_2__["TitleService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
            ]; };
            CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-card',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/card/card.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card.component.css */ "./src/app/Components/card/card.component.css")).default]
                })
            ], CardComponent);
            /***/ 
        }),
        /***/ "./src/app/Components/dashboard/dashboard.component.css": 
        /*!**************************************************************!*\
          !*** ./src/app/Components/dashboard/dashboard.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*.grid-container {*/\n  /*margin: 20px;*/\n  /*}*/\n  /*.dashboard-card {*/\n  /*position: absolute;*/\n  /*top: 15px;*/\n  /*left: 15px;*/\n  /*right: 15px;*/\n  /*bottom: 15px;*/\n  /*}*/\n  /*.more-button {*/\n  /*position: absolute;*/\n  /*top: 5px;*/\n  /*right: 10px;*/\n  /*}*/\n  /*.dashboard-card-content {*/\n  /*text-align: center;*/\n  /*}*/\n  .card-basic\n{\n margin: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0VBQ2xCLGdCQUFnQjtFQUNsQixJQUFJO0VBRUosb0JBQW9CO0VBQ2xCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDbEIsSUFBSTtFQUVKLGlCQUFpQjtFQUNmLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNqQixJQUFJO0VBRUosNEJBQTRCO0VBQzFCLHNCQUFzQjtFQUN4QixJQUFJO0VBRUo7O0NBRUMsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5ncmlkLWNvbnRhaW5lciB7Ki9cbiAgLyptYXJnaW46IDIwcHg7Ki9cbi8qfSovXG5cbi8qLmRhc2hib2FyZC1jYXJkIHsqL1xuICAvKnBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xuICAvKnRvcDogMTVweDsqL1xuICAvKmxlZnQ6IDE1cHg7Ki9cbiAgLypyaWdodDogMTVweDsqL1xuICAvKmJvdHRvbTogMTVweDsqL1xuLyp9Ki9cblxuLyoubW9yZS1idXR0b24geyovXG4gIC8qcG9zaXRpb246IGFic29sdXRlOyovXG4gIC8qdG9wOiA1cHg7Ki9cbiAgLypyaWdodDogMTBweDsqL1xuLyp9Ki9cblxuLyouZGFzaGJvYXJkLWNhcmQtY29udGVudCB7Ki9cbiAgLyp0ZXh0LWFsaWduOiBjZW50ZXI7Ki9cbi8qfSovXG5cbi5jYXJkLWJhc2ljXG57XG4gbWFyZ2luOiAxMHB4O1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/Components/dashboard/dashboard.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/Components/dashboard/dashboard.component.ts ***!
          \*************************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/title.service */ "./src/app/Services/title.service.ts");
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent(titleService, meta, componentTitleService) {
                    this.titleService = titleService;
                    this.meta = meta;
                    this.componentTitleService = componentTitleService;
                    this.title = 'Dashboard';
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    this.titleService.setTitle(this.title);
                    this.componentTitleService.title = this.title;
                };
                return DashboardComponent;
            }());
            DashboardComponent.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
                { type: src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"] }
            ]; };
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/dashboard/dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/Components/dashboard/dashboard.component.css")).default]
                })
            ], DashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/Components/forms/forget-password/forget-password.component.css": 
        /*!********************************************************************************!*\
          !*** ./src/app/Components/forms/forget-password/forget-password.component.css ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZm9ybXMvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/Components/forms/forget-password/forget-password.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/Components/forms/forget-password/forget-password.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: ForgetPasswordComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function () { return ForgetPasswordComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var ForgetPasswordComponent = /** @class */ (function () {
                function ForgetPasswordComponent(fb) {
                    this.fb = fb;
                }
                ForgetPasswordComponent.prototype.ngOnInit = function () {
                    this.forgetPassword = this.fb.group({
                        registerdMail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });
                };
                ForgetPasswordComponent.prototype.onRecoverPassword = function () {
                };
                return ForgetPasswordComponent;
            }());
            ForgetPasswordComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            ForgetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-forget-password',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forget-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/forms/forget-password/forget-password.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forget-password.component.css */ "./src/app/Components/forms/forget-password/forget-password.component.css")).default]
                })
            ], ForgetPasswordComponent);
            /***/ 
        }),
        /***/ "./src/app/Components/forms/forms.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/Components/forms/forms.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZm9ybXMvZm9ybXMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/Components/forms/forms.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/Components/forms/forms.component.ts ***!
          \*****************************************************/
        /*! exports provided: FormsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function () { return FormsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "./src/app/Components/forms/forget-password/forget-password.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/title.service */ "./src/app/Services/title.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var FormsComponent = /** @class */ (function () {
                function FormsComponent(dialog, fb, componentTitleService, titleService) {
                    this.dialog = dialog;
                    this.fb = fb;
                    this.componentTitleService = componentTitleService;
                    this.titleService = titleService;
                    this.title = 'Forms';
                    this.tabTitle = 'Forms';
                }
                FormsComponent.prototype.ngOnInit = function () {
                    this.forgetPasswordForm = this.fb.group({
                        id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                        // id: new FormControl('', [Validators.required]),
                        // pass: new FormControl('', [Validators.required])
                    }),
                        this.signupForm = this.fb.group({
                            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                        });
                    this.componentTitleService.title = this.title;
                    this.titleService.setTitle(this.tabTitle);
                };
                FormsComponent.prototype.onLogin = function () {
                };
                FormsComponent.prototype.onSignup = function () {
                };
                FormsComponent.prototype.forgetPassword = function () {
                    this.dialog.open(_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgetPasswordComponent"], {
                        width: '550px',
                        height: '200px'
                    });
                };
                return FormsComponent;
            }());
            FormsComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
                { type: src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_5__["TitleService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] }
            ]; };
            FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-forms',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/forms/forms.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forms.component.css */ "./src/app/Components/forms/forms.component.css")).default]
                })
            ], FormsComponent);
            /***/ 
        }),
        /***/ "./src/app/Components/location/location.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/Components/location/location.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/Components/location/location.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/Components/location/location.component.ts ***!
          \***********************************************************/
        /*! exports provided: LocationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function () { return LocationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/title.service */ "./src/app/Services/title.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var LocationComponent = /** @class */ (function () {
                function LocationComponent(componentTitleService, titleService) {
                    this.componentTitleService = componentTitleService;
                    this.titleService = titleService;
                    this.title = 'Geo Location';
                    this.tabTitle = 'Geo Location';
                    this.imgUrl = "/assets/img/car.gif";
                }
                LocationComponent.prototype.ngOnInit = function () {
                    this.componentTitleService.title = this.title;
                    this.titleService.setTitle(this.tabTitle);
                };
                LocationComponent.prototype.showAlert = function () {
                };
                return LocationComponent;
            }());
            LocationComponent.ctorParameters = function () { return [
                { type: src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_2__["TitleService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
            ]; };
            LocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-location',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./location.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/location/location.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./location.component.css */ "./src/app/Components/location/location.component.css")).default]
                })
            ], LocationComponent);
            /***/ 
        }),
        /***/ "./src/app/Components/make-payment/make-payment.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/Components/make-payment/make-payment.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".input-width{\n max-width: 305px;\n \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9tYWtlLXBheW1lbnQvbWFrZS1wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7O0FBRWpCIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9tYWtlLXBheW1lbnQvbWFrZS1wYXltZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtd2lkdGh7XG4gbWF4LXdpZHRoOiAzMDVweDtcbiBcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/Components/make-payment/make-payment.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/Components/make-payment/make-payment.component.ts ***!
          \*******************************************************************/
        /*! exports provided: MakePaymentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakePaymentComponent", function () { return MakePaymentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/title.service */ "./src/app/Services/title.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var MakePaymentComponent = /** @class */ (function () {
                function MakePaymentComponent(fb, componentTitleService, titleService) {
                    this.fb = fb;
                    this.componentTitleService = componentTitleService;
                    this.titleService = titleService;
                    this.title = 'Make Payment';
                    this.tabTitle = 'Make Payment';
                }
                MakePaymentComponent.prototype.ngOnInit = function () {
                    this.nameForm = this.fb.group({
                        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    }),
                        this.cardForm = this.fb.group({
                            cardNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        }),
                        this.cvvForm = this.fb.group({
                            cvvNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                        }),
                        this.componentTitleService.title = this.title;
                    this.titleService.setTitle(this.tabTitle);
                };
                return MakePaymentComponent;
            }());
            MakePaymentComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
            ]; };
            MakePaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-make-payment',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./make-payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/make-payment/make-payment.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./make-payment.component.css */ "./src/app/Components/make-payment/make-payment.component.css")).default]
                })
            ], MakePaymentComponent);
            /***/ 
        }),
        /***/ "./src/app/Components/navigation/navigation.component.css": 
        /*!****************************************************************!*\
          !*** ./src/app/Components/navigation/navigation.component.css ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n}\n\n.navi-btn {\n  margin-top: 10px;\n  position: relative;\n}\n\n.sidenav {\n  width: 200px;\n  background-color: #4d668c;\n}\n\n.mat-toolbar-info {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyO1xufVxuXG4ubmF2aS1idG4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ2NjhjO1xufVxuXG4ubWF0LXRvb2xiYXItaW5mbyB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMjtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/Components/navigation/navigation.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/Components/navigation/navigation.component.ts ***!
          \***************************************************************/
        /*! exports provided: NavigationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () { return NavigationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/title.service */ "./src/app/Services/title.service.ts");
            /* harmony import */ var src_app_Services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/cart.service */ "./src/app/Services/cart.service.ts");
            var NavigationComponent = /** @class */ (function () {
                function NavigationComponent(breakpointObserver, title, cartService) {
                    this.breakpointObserver = breakpointObserver;
                    this.title = title;
                    this.cartService = cartService;
                    this.opened = false;
                    // otherTheme: boolean = false;
                    this.changeDark = '';
                    this.date = new Date();
                    this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
                }
                // this is for change theme
                NavigationComponent.prototype.darkTheme = function (data) {
                    if (data == 'Dark') {
                        this.changeDark = 'Dark';
                    }
                    if (data == 'Pink') {
                        this.changeDark = 'Pink';
                    }
                    if (data == 'defaultColor') {
                        this.changeDark = 'defaultColor';
                    }
                };
                return NavigationComponent;
            }());
            NavigationComponent.ctorParameters = function () { return [
                { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
                { type: src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"] },
                { type: src_app_Services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] }
            ]; };
            NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navigation',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/navigation/navigation.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.css */ "./src/app/Components/navigation/navigation.component.css")).default]
                })
            ], NavigationComponent);
            /***/ 
        }),
        /***/ "./src/app/Components/notification/notification.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/Components/notification/notification.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("p {\n    color:indigo;\n}\n\n.expansion-header {\n    background-color: crimson;\n}\n\n.expansion-description {\n    background-color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBjb2xvcjppbmRpZ287XG59XG5cbi5leHBhbnNpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xufVxuLmV4cGFuc2lvbi1kZXNjcmlwdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/Components/notification/notification.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/Components/notification/notification.component.ts ***!
          \*******************************************************************/
        /*! exports provided: NotificationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function () { return NotificationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NotificationComponent = /** @class */ (function () {
                function NotificationComponent() {
                    this.panelOpenState1 = false;
                    this.panelOpenState2 = false;
                    this.panelOpenState3 = false;
                    this.panelOpenState4 = false;
                    this.panelOpenState5 = false;
                    this.panelOpenState6 = false;
                    this.panelOpenState7 = false;
                    this.panelOpenState8 = false;
                    this.panelOpenState9 = false;
                    this.panelOpenState10 = false;
                }
                NotificationComponent.prototype.ngOnInit = function () {
                };
                return NotificationComponent;
            }());
            NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-notification',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/notification/notification.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification.component.css */ "./src/app/Components/notification/notification.component.css")).default]
                })
            ], NotificationComponent);
            /***/ 
        }),
        /***/ "./src/app/Components/paypal/paypal.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/Components/paypal/paypal.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcGF5cGFsL3BheXBhbC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/Components/paypal/paypal.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/Components/paypal/paypal.component.ts ***!
          \*******************************************************/
        /*! exports provided: PaypalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalComponent", function () { return PaypalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/title.service */ "./src/app/Services/title.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var PaypalComponent = /** @class */ (function () {
                function PaypalComponent(componentTitleService, titleService) {
                    this.componentTitleService = componentTitleService;
                    this.titleService = titleService;
                    this.title = 'Paypal';
                    this.tabTitle = 'Paypal';
                    this.myName = 'rikcy';
                    this.date = new Date();
                }
                PaypalComponent.prototype.ngOnInit = function () {
                    this.componentTitleService.title = this.title;
                    this.titleService.setTitle(this.tabTitle);
                };
                return PaypalComponent;
            }());
            PaypalComponent.ctorParameters = function () { return [
                { type: src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_2__["TitleService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
            ]; };
            PaypalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-paypal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paypal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/paypal/paypal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paypal.component.css */ "./src/app/Components/paypal/paypal.component.css")).default]
                })
            ], PaypalComponent);
            /***/ 
        }),
        /***/ "./src/app/Components/profile/profile.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/Components/profile/profile.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("label\n{\n  font-size: 20px;\n  color: #4d668c;\n}\n\n\n.input-picture\n{\n  width: 100px;\n  color: #4d668c;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7O0FBR0E7O0VBRUUsWUFBWTtFQUNaLGNBQWM7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsXG57XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM0ZDY2OGM7XG59XG5cblxuLmlucHV0LXBpY3R1cmVcbntcbiAgd2lkdGg6IDEwMHB4O1xuICBjb2xvcjogIzRkNjY4YztcbiAgXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/Components/profile/profile.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/Components/profile/profile.component.ts ***!
          \*********************************************************/
        /*! exports provided: ProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () { return ProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/title.service */ "./src/app/Services/title.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var ProfileComponent = /** @class */ (function () {
                function ProfileComponent(componentTitleService, titleService) {
                    this.componentTitleService = componentTitleService;
                    this.titleService = titleService;
                    this.title = 'User Profile';
                    this.tabTitle = 'User Profile';
                }
                ProfileComponent.prototype.ngOnInit = function () {
                    this.componentTitleService.title = this.title;
                    this.titleService.setTitle(this.tabTitle);
                };
                ProfileComponent.prototype.onSelectFile = function (event) {
                    var _this = this;
                    if (event.target.files && event.target.files[0]) {
                        var reader = new FileReader();
                        reader.readAsDataURL(event.target.files[0]); // read file as data url
                        reader.onload = function (event) {
                            _this.url = event.target;
                        };
                    }
                };
                return ProfileComponent;
            }());
            ProfileComponent.ctorParameters = function () { return [
                { type: src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_2__["TitleService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
            ]; };
            ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/profile/profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/Components/profile/profile.component.css")).default]
                })
            ], ProfileComponent);
            /***/ 
        }),
        /***/ "./src/app/Components/shopping/shopping.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/Components/shopping/shopping.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("img{\n    width: 300px;\n    height: 300px;\n}\n\n/* .inner\n{\n  overflow: visible;\n  \n}\n\n.inner img\n{\n  transition: all 1.5s ease;\n}\n\n.inner:hover img{\n  transform: scale(2);\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9zaG9wcGluZy9zaG9wcGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7R0FhRyIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvc2hvcHBpbmcvc2hvcHBpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLyogLmlubmVyXG57XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBcbn1cblxuLmlubmVyIGltZ1xue1xuICB0cmFuc2l0aW9uOiBhbGwgMS41cyBlYXNlO1xufVxuXG4uaW5uZXI6aG92ZXIgaW1ne1xuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xufSAqLyJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/Components/shopping/shopping.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/Components/shopping/shopping.component.ts ***!
          \***********************************************************/
        /*! exports provided: ShoppingComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingComponent", function () { return ShoppingComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/title.service */ "./src/app/Services/title.service.ts");
            /* harmony import */ var src_app_Services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/cart.service */ "./src/app/Services/cart.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var ShoppingComponent = /** @class */ (function () {
                function ShoppingComponent(componentTitleService, cartService, titleService) {
                    this.componentTitleService = componentTitleService;
                    this.cartService = cartService;
                    this.titleService = titleService;
                    this.cartCounter = 0;
                    this.title = 'Shopping';
                    this.tabTitle = 'Shopping';
                }
                ShoppingComponent.prototype.ngOnInit = function () {
                    this.componentTitleService.title = this.title;
                    this.cartService.cart = this.cartCounter;
                    this.titleService.setTitle(this.tabTitle);
                };
                ShoppingComponent.prototype.addToCart = function () {
                    return this.cartCounter++;
                };
                return ShoppingComponent;
            }());
            ShoppingComponent.ctorParameters = function () { return [
                { type: src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_2__["TitleService"] },
                { type: src_app_Services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
            ]; };
            ShoppingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-shopping',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/shopping/shopping.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping.component.css */ "./src/app/Components/shopping/shopping.component.css")).default]
                })
            ], ShoppingComponent);
            /***/ 
        }),
        /***/ "./src/app/Components/table/table.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/Components/table/table.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/Components/table/table.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/Components/table/table.component.ts ***!
          \*****************************************************/
        /*! exports provided: TableComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function () { return TableComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/title.service */ "./src/app/Services/title.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var TableComponent = /** @class */ (function () {
                function TableComponent(componentTitleService, titleService) {
                    this.componentTitleService = componentTitleService;
                    this.titleService = titleService;
                    this.title = 'Tables';
                    this.tabTitle = 'Tables';
                    this.col1 = 'No.';
                    this.col2 = 'Name';
                    this.col3 = 'Weight';
                    this.col4 = 'Symbol';
                    this.displayCols = ['position', 'name', 'weight', 'symbol'];
                    this.resultsLength = 0;
                    this.ELEMENT_DATA = [
                        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
                        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
                        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
                        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
                        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
                        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
                        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
                        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
                        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
                        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
                        { position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
                        { position: 12, name: 'Helium', weight: 4.0026, symbol: 'He' },
                        { position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li' },
                        { position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
                        { position: 15, name: 'Boron', weight: 10.811, symbol: 'B' },
                        { position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C' },
                        { position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
                        { position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
                        { position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
                        { position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
                    ];
                    // dataSource= this.ELEMENT_DATA;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ELEMENT_DATA);
                }
                ;
                TableComponent.prototype.applyFilter = function (filterValue) {
                    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
                };
                TableComponent.prototype.ngOnInit = function () {
                    this.dataSource.sort = this.sort;
                    this.dataSource.paginator = this.paginator;
                    this.componentTitleService.title = this.title;
                    this.titleService.setTitle(this.tabTitle);
                };
                return TableComponent;
            }());
            TableComponent.ctorParameters = function () { return [
                { type: src_app_Services_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
            ], TableComponent.prototype, "sort", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
            ], TableComponent.prototype, "paginator", void 0);
            TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-table',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/table/table.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table.component.css */ "./src/app/Components/table/table.component.css")).default]
                })
            ], TableComponent);
            /***/ 
        }),
        /***/ "./src/app/Services/album.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/Services/album.service.ts ***!
          \*******************************************/
        /*! exports provided: AlbumService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumService", function () { return AlbumService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AlbumService = /** @class */ (function () {
                function AlbumService(http) {
                    this.http = http;
                    this.URL_ALBUM = 'https://jsonplaceholder.typicode.com/photos';
                }
                AlbumService.prototype.httpGetAlbum = function () {
                    return this.http.get(this.URL_ALBUM);
                };
                return AlbumService;
            }());
            AlbumService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AlbumService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AlbumService);
            /***/ 
        }),
        /***/ "./src/app/Services/cart.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/Services/cart.service.ts ***!
          \******************************************/
        /*! exports provided: CartService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function () { return CartService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CartService = /** @class */ (function () {
                function CartService() {
                }
                return CartService;
            }());
            CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CartService);
            /***/ 
        }),
        /***/ "./src/app/Services/http.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/Services/http.service.ts ***!
          \******************************************/
        /*! exports provided: HttpService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function () { return HttpService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            // import 'rxjs/add/operator/catch';
            // import 'rxjs/add/observable/throw';
            var HttpService = /** @class */ (function () {
                function HttpService(http) {
                    this.http = http;
                    this.API_URL = 'https://jsonplaceholder.typicode.com/posts/1/comments';
                }
                HttpService.prototype.httpGetData = function () {
                    return this.http.get(this.API_URL);
                    // ).catch(this.errorHandler);
                };
                return HttpService;
            }());
            HttpService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], HttpService);
            /***/ 
        }),
        /***/ "./src/app/Services/title.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/Services/title.service.ts ***!
          \*******************************************/
        /*! exports provided: TitleService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleService", function () { return TitleService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TitleService = /** @class */ (function () {
                function TitleService() {
                }
                return TitleService;
            }());
            TitleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TitleService);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _Components_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/profile/profile.component */ "./src/app/Components/profile/profile.component.ts");
            /* harmony import */ var _Components_location_location_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/location/location.component */ "./src/app/Components/location/location.component.ts");
            /* harmony import */ var _Components_forms_forms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/forms/forms.component */ "./src/app/Components/forms/forms.component.ts");
            /* harmony import */ var _Components_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/card/card.component */ "./src/app/Components/card/card.component.ts");
            /* harmony import */ var _Components_paypal_paypal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/paypal/paypal.component */ "./src/app/Components/paypal/paypal.component.ts");
            /* harmony import */ var _Components_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/shopping/shopping.component */ "./src/app/Components/shopping/shopping.component.ts");
            /* harmony import */ var _Components_make_payment_make_payment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/make-payment/make-payment.component */ "./src/app/Components/make-payment/make-payment.component.ts");
            /* harmony import */ var _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/dashboard/dashboard.component */ "./src/app/Components/dashboard/dashboard.component.ts");
            /* harmony import */ var _Components_forms_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/forms/forget-password/forget-password.component */ "./src/app/Components/forms/forget-password/forget-password.component.ts");
            /* harmony import */ var _Components_table_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/table/table.component */ "./src/app/Components/table/table.component.ts");
            /* harmony import */ var _Components_api_api_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/api/api.component */ "./src/app/Components/api/api.component.ts");
            /* harmony import */ var _Components_album_album_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/album/album.component */ "./src/app/Components/album/album.component.ts");
            /* harmony import */ var _Components_notification_notification_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/notification/notification.component */ "./src/app/Components/notification/notification.component.ts");
            var routes = [
                { path: '', pathMatch: 'full', component: _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"] },
                { path: 'dashboard', component: _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"] },
                { path: 'profile', component: _Components_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
                { path: 'location', component: _Components_location_location_component__WEBPACK_IMPORTED_MODULE_4__["LocationComponent"] },
                { path: 'forms', component: _Components_forms_forms_component__WEBPACK_IMPORTED_MODULE_5__["FormsComponent"] },
                { path: 'card', component: _Components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"] },
                { path: 'paypal', component: _Components_paypal_paypal_component__WEBPACK_IMPORTED_MODULE_7__["PaypalComponent"] },
                { path: 'shopping', component: _Components_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingComponent"] },
                { path: 'makePayment', component: _Components_make_payment_make_payment_component__WEBPACK_IMPORTED_MODULE_9__["MakePaymentComponent"] },
                { path: 'ForgetPassword', component: _Components_forms_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgetPasswordComponent"] },
                { path: 'table', component: _Components_table_table_component__WEBPACK_IMPORTED_MODULE_12__["TableComponent"] },
                { path: 'api', component: _Components_api_api_component__WEBPACK_IMPORTED_MODULE_13__["ApiComponent"] },
                { path: 'album', component: _Components_album_album_component__WEBPACK_IMPORTED_MODULE_14__["AlbumComponent"] },
                { path: 'notification', component: _Components_notification_notification_component__WEBPACK_IMPORTED_MODULE_15__["NotificationComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'Dashboard1';
                    // showLoader: boolean = true;
                    // constructor(private _router: Router) {
                    //   this._router.events.subscribe((routerEvent: Event) => {
                    //     if (routerEvent instanceof NavigationStart) {
                    //       this.showLoader = true;
                    //     }
                    //     if (routerEvent instanceof NavigationEnd) {
                    //       this.showLoader = false;
                    //     }
                    //   });
                    // }
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _Components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/navigation/navigation.component */ "./src/app/Components/navigation/navigation.component.ts");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            /* harmony import */ var _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/dashboard/dashboard.component */ "./src/app/Components/dashboard/dashboard.component.ts");
            /* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _Components_Charts_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/Charts/bar-chart/bar-chart.component */ "./src/app/Components/Charts/bar-chart/bar-chart.component.ts");
            /* harmony import */ var _Components_Charts_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/Charts/line-chart/line-chart.component */ "./src/app/Components/Charts/line-chart/line-chart.component.ts");
            /* harmony import */ var _Components_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Components/profile/profile.component */ "./src/app/Components/profile/profile.component.ts");
            /* harmony import */ var _Components_forms_forms_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Components/forms/forms.component */ "./src/app/Components/forms/forms.component.ts");
            /* harmony import */ var _Components_card_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Components/card/card.component */ "./src/app/Components/card/card.component.ts");
            /* harmony import */ var _Components_location_location_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Components/location/location.component */ "./src/app/Components/location/location.component.ts");
            /* harmony import */ var _Components_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Components/shopping/shopping.component */ "./src/app/Components/shopping/shopping.component.ts");
            /* harmony import */ var _Components_make_payment_make_payment_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Components/make-payment/make-payment.component */ "./src/app/Components/make-payment/make-payment.component.ts");
            /* harmony import */ var _Components_paypal_paypal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Components/paypal/paypal.component */ "./src/app/Components/paypal/paypal.component.ts");
            /* harmony import */ var _Components_Charts_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Components/Charts/pie-chart/pie-chart.component */ "./src/app/Components/Charts/pie-chart/pie-chart.component.ts");
            /* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/fesm2015/angular-google-charts.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _Components_forms_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Components/forms/forget-password/forget-password.component */ "./src/app/Components/forms/forget-password/forget-password.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _Components_table_table_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Components/table/table.component */ "./src/app/Components/table/table.component.ts");
            /* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
            /* harmony import */ var _Services_title_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Services/title.service */ "./src/app/Services/title.service.ts");
            /* harmony import */ var _Services_cart_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Services/cart.service */ "./src/app/Services/cart.service.ts");
            /* harmony import */ var _Components_api_api_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./Components/api/api.component */ "./src/app/Components/api/api.component.ts");
            /* harmony import */ var _Services_http_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Services/http.service */ "./src/app/Services/http.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
            /* harmony import */ var _Components_album_album_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./Components/album/album.component */ "./src/app/Components/album/album.component.ts");
            /* harmony import */ var _Services_album_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./Services/album.service */ "./src/app/Services/album.service.ts");
            /* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
            /* harmony import */ var _Components_Shared_Components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./Components/Shared Components/pagination/pagination.component */ "./src/app/Components/Shared Components/pagination/pagination.component.ts");
            /* harmony import */ var _Components_album_Pipes_search_highlight_pipe__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./Components/album/Pipes/search-highlight.pipe */ "./src/app/Components/album/Pipes/search-highlight.pipe.ts");
            /* harmony import */ var _Components_notification_notification_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./Components/notification/notification.component */ "./src/app/Components/notification/notification.component.ts");
            /* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    entryComponents: [
                        _Components_forms_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_30__["ForgetPasswordComponent"]
                    ],
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _Components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                        _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                        _Components_Charts_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_17__["BarChartComponent"],
                        _Components_Charts_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_18__["LineChartComponent"],
                        _Components_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"],
                        _Components_forms_forms_component__WEBPACK_IMPORTED_MODULE_20__["FormsComponent"],
                        _Components_card_card_component__WEBPACK_IMPORTED_MODULE_21__["CardComponent"],
                        _Components_location_location_component__WEBPACK_IMPORTED_MODULE_22__["LocationComponent"],
                        _Components_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_23__["ShoppingComponent"],
                        _Components_make_payment_make_payment_component__WEBPACK_IMPORTED_MODULE_24__["MakePaymentComponent"],
                        _Components_paypal_paypal_component__WEBPACK_IMPORTED_MODULE_25__["PaypalComponent"],
                        _Components_Charts_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_26__["PieChartComponent"],
                        _Components_forms_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_30__["ForgetPasswordComponent"],
                        _Components_table_table_component__WEBPACK_IMPORTED_MODULE_35__["TableComponent"],
                        _Components_api_api_component__WEBPACK_IMPORTED_MODULE_39__["ApiComponent"],
                        _Components_album_album_component__WEBPACK_IMPORTED_MODULE_43__["AlbumComponent"],
                        _Components_Shared_Components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_46__["PaginationComponent"],
                        _Components_album_Pipes_search_highlight_pipe__WEBPACK_IMPORTED_MODULE_47__["SearchHighlightPipe"],
                        _Components_notification_notification_component__WEBPACK_IMPORTED_MODULE_48__["NotificationComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
                        angular_google_charts__WEBPACK_IMPORTED_MODULE_27__["GoogleChartsModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ReactiveFormsModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatFormFieldModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_31__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_31__["MatPaginatorModule"],
                        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_36__["MatStepperModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_41__["HttpClientModule"],
                        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_42__["MatProgressSpinnerModule"],
                        ngx_pagination__WEBPACK_IMPORTED_MODULE_45__["NgxPaginationModule"],
                        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_49__["MatExpansionModule"]
                    ],
                    providers: [_angular_material__WEBPACK_IMPORTED_MODULE_31__["MatDialog"], _Services_title_service__WEBPACK_IMPORTED_MODULE_37__["TitleService"], _Services_cart_service__WEBPACK_IMPORTED_MODULE_38__["CartService"], _Services_http_service__WEBPACK_IMPORTED_MODULE_40__["HttpService"], _Services_album_service__WEBPACK_IMPORTED_MODULE_44__["AlbumService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/dheeraj/Desktop/Codebase/Assesment and Udemy Courses/Customize Dashboard/Dashboard1/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map