webpackJsonp([2],{

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotePageModule", function() { return AddNotePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_note__ = __webpack_require__(475);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddNotePageModule = /** @class */ (function () {
    function AddNotePageModule() {
    }
    AddNotePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_note__["a" /* AddNotePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_note__["a" /* AddNotePage */]),
            ],
        })
    ], AddNotePageModule);
    return AddNotePageModule;
}());

//# sourceMappingURL=add-note.module.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_note_list_service__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddNotePage = /** @class */ (function () {
    function AddNotePage(navCtrl, navParams, noteListService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noteListService = noteListService;
        this.note = {
            title: '',
            content: ''
        };
    }
    AddNotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddNotePage');
    };
    AddNotePage.prototype.addNote = function (note) {
        var _this = this;
        this.noteListService.addNote(note).then(function (ref) {
            _this.navCtrl.setRoot('HomePage');
        });
    };
    AddNotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-note',template:/*ion-inline-start:"E:\crud_uas\src\pages\add-note\add-note.html"*/'<ion-header>\n \n  <ion-navbar>\n    <ion-title>Tambahkan Data Distro</ion-title>\n  </ion-navbar>\n \n</ion-header>\n \n<ion-content padding>\n \n  <ion-item>\n    <ion-label>Merek</ion-label>\n    <ion-input [(ngModel)]="note.title" placeholder="Masukan Nama Merek Baju"></ion-input>\n  </ion-item>\n \n  <ion-item>\n    <ion-label>Harga</ion-label>\n    <ion-textarea [(ngModel)]="note.content" placeholder=" Masukan Harga"></ion-textarea>\n  </ion-item>\n \n  <button ion-button block clear (click)="addNote(note)">Tambahkan</button>\n</ion-content>'/*ion-inline-end:"E:\crud_uas\src\pages\add-note\add-note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_note_list_service__["a" /* NoteListService */]])
    ], AddNotePage);
    return AddNotePage;
}());

//# sourceMappingURL=add-note.js.map

/***/ })

});
//# sourceMappingURL=2.js.map