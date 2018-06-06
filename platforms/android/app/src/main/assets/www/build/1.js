webpackJsonp([1],{

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNotePageModule", function() { return EditNotePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_note__ = __webpack_require__(475);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditNotePageModule = /** @class */ (function () {
    function EditNotePageModule() {
    }
    EditNotePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_note__["a" /* EditNotePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_note__["a" /* EditNotePage */]),
            ],
        })
    ], EditNotePageModule);
    return EditNotePageModule;
}());

//# sourceMappingURL=edit-note.module.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditNotePage; });
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



var EditNotePage = /** @class */ (function () {
    function EditNotePage(navCtrl, navParams, noteListService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noteListService = noteListService;
        this.note = {
            title: '',
            content: ''
        };
    }
    EditNotePage.prototype.ionViewDidLoad = function () {
        this.note = this.navParams.get('note');
    };
    EditNotePage.prototype.updateNote = function (note) {
        var _this = this;
        this.noteListService.updateNote(note).then(function () {
            _this.navCtrl.setRoot('HomePage');
        });
    };
    EditNotePage.prototype.removeNote = function (note) {
        var _this = this;
        this.noteListService.removeNote(note).then(function () {
            _this.navCtrl.setRoot('HomePage');
        });
    };
    EditNotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-note',template:/*ion-inline-start:"E:\crud_uas\src\pages\edit-note\edit-note.html"*/'<ion-header>\n \n  <ion-navbar>\n    <ion-title>{{note?.title}}</ion-title>\n  </ion-navbar>\n \n</ion-header>\n \n<ion-content padding>\n \n  <ion-item>\n    <ion-label>Mata Kuliah</ion-label>\n    <ion-input [(ngModel)]="note.title" placeholder="Edit Mata Kuliah"></ion-input>\n  </ion-item>\n \n  <ion-item>\n    <ion-label>Nama Dosen</ion-label>\n    <ion-textarea [(ngModel)]="note.content" placeholder="Edit Nama Dosen"></ion-textarea>\n  </ion-item>\n \n  <button ion-button block clear (click)="updateNote(note)">Simpan</button>\n  <button ion-button block clear (click)="removeNote(note)">Hapus</button>\n</ion-content>'/*ion-inline-end:"E:\crud_uas\src\pages\edit-note\edit-note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_note_list_service__["a" /* NoteListService */]])
    ], EditNotePage);
    return EditNotePage;
}());

//# sourceMappingURL=edit-note.js.map

/***/ })

});
//# sourceMappingURL=1.js.map