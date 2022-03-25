(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/u1L":
/*!******************************************************!*\
  !*** ./src/app/_components/shows/shows.component.ts ***!
  \******************************************************/
/*! exports provided: ShowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsComponent", function() { return ShowsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_show_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/show.service */ "gRAX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/list.service */ "ISrb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _guards_safe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_guards/safe_pipe */ "Dblz");






function ShowsComponent_div_0_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowsComponent_div_0_div_4_div_3_Template_ion_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const show_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.addOnClick(show_r2.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const show_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", show_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", show_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](show_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](show_r2.info);
} }
function ShowsComponent_div_0_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowsComponent_div_0_div_4_div_6_Template_ion_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const show_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.addOnClick(show_r2.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const show_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", show_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", show_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](show_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](show_r2.info);
} }
function ShowsComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShowsComponent_div_0_div_4_div_3_Template, 7, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ShowsComponent_div_0_div_4_div_6_Template, 7, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "TRAILER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "iframe", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const show_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", show_r2.id % 2 !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", show_r2.id % 2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 3, show_r2.link), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
function ShowsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowsComponent_div_0_Template_ion_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Variety shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShowsComponent_div_0_div_4_Template, 17, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.shows);
} }
class ShowsComponent {
    constructor(showService, location, listService) {
        this.showService = showService;
        this.location = location;
        this.listService = listService;
        this.shows = [];
    }
    ngOnInit() {
        this.getShows();
    }
    getShows() {
        this.showService.getAllShows().subscribe(data => this.shows = data);
    }
    goBack() {
        this.location.back();
    }
    addOnClick(title) {
        let obj = {
            listItem: title
        };
        this.listService.addListItem(obj).subscribe(() => { });
    }
}
ShowsComponent.ɵfac = function ShowsComponent_Factory(t) { return new (t || ShowsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_show_service__WEBPACK_IMPORTED_MODULE_1__["ShowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_list_service__WEBPACK_IMPORTED_MODULE_3__["ListService"])); };
ShowsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowsComponent, selectors: [["app-shows"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["name", "arrow-back-outline", 1, "arrow", 3, "click"], [1, "d-flex", "justify-content-center", "title"], ["class", "container", 4, "ngFor", "ngForOf"], [1, "container"], [1, "row"], [1, "col"], ["class", "show_disc", 4, "ngIf"], [1, "col", "d-flex", "justify-content-center"], [1, "trailer"], [1, "d-flex", "justify-content-center"], ["width", "700", "height", "500", 3, "src"], [1, "show_disc"], [1, "show_img", 3, "src", "alt"], [1, "show_title"], ["name", "add-circle-outline", 3, "click"], [1, "show_info"], [1, "placed_right_show", 3, "src", "alt"]], template: function ShowsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ShowsComponent_div_0_Template, 5, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_guards_safe_pipe__WEBPACK_IMPORTED_MODULE_5__["SafePipe"]], styles: [".arrow[_ngcontent-%COMP%] {\r\n    margin-top: 2%;\r\n    margin-left: 3%;\r\n    color: #bababa;\r\n    font-size: 200%;\r\n}\r\n\r\nion-icon[_ngcontent-%COMP%] {\r\n    margin-left: 1%;\r\n}\r\n\r\nion-icon[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    font-size: 300%;\r\n    font-family: 'Domine', serif;\r\n    color: white;\r\n}\r\n\r\n.show_disc[_ngcontent-%COMP%] {\r\n    margin-top: 5%;\r\n}\r\n\r\n.show_img[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    float: left;\r\n    margin-right: 5%;\r\n    box-shadow: 5px 5px 30px 1px #000000;\r\n}\r\n\r\n.show_title[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\n.show_info[_ngcontent-%COMP%] {\r\n    color: #bababa;\r\n    font-size: 25px;\r\n}\r\n\r\n\r\n\r\n.placed_right_show[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 30%;\r\n}\r\n\r\n\r\n\r\n.trailer[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-family: 'Domine', serif;\r\n    margin-top: 7%;\r\n    margin-bottom: 3%;\r\n}\r\n\r\niframe[_ngcontent-%COMP%] {\r\n    border: none;\r\n    margin-bottom: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3dzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUJBQXVCOztBQUV2QjtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSxzQkFBc0I7O0FBRXRCO0lBQ0ksZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBRWhCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQSx3QkFBd0I7O0FBRXhCO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQSxXQUFXOztBQUVYO0lBQ0ksWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzaG93cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypCYWNrIEFycm93LGlvbi1pY29ucyovXHJcblxyXG4uYXJyb3cge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICBjb2xvcjogI2JhYmFiYTtcclxuICAgIGZvbnQtc2l6ZTogMjAwJTtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG59XHJcblxyXG5pb24taWNvbjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qQWJvdXQgVmFyaWV0eSBTaG93cyovXHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdEb21pbmUnLCBzZXJpZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNob3dfZGlzYyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLnNob3dfaW1nIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggMzBweCAxcHggIzAwMDAwMDtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMzBweCAxcHggIzAwMDAwMDtcclxufVxyXG5cclxuLnNob3dfdGl0bGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2hvd19pbmZvIHtcclxuICAgIGNvbG9yOiAjYmFiYWJhO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4vKkRpZmZlcmVudCBzdHlsZWQgc2hvdyovXHJcblxyXG4ucGxhY2VkX3JpZ2h0X3Nob3cge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLypUcmFpbGVycyovXHJcblxyXG4udHJhaWxlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ0RvbWluZScsIHNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG5cclxuaWZyYW1lIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59Il19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sörfőző Júlia\Bangtan\src\main.ts */"zUnb");


/***/ }),

/***/ "2dux":
/*!****************************************************!*\
  !*** ./src/app/_components/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/auth.service */ "7Vn+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HomeComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 62, vars: 2, consts: [[1, "container"], [1, "row"], [1, "col", "d-flex", "justify-content-center"], ["src", "assets/img/BE/be_group.jpg", "alt", "BE_GROUP_PHOTO", 1, "main"], [1, "container", "nav_items"], ["routerLink", "/members", 1, "nav_a"], ["routerLink", "/albums", 1, "nav_a"], ["routerLink", "/shows", 1, "nav_a"], ["class", "nav_a", 4, "ngIf"], [1, "col"], [1, "band_name", "d-flex", "justify-content-center"], [1, "about_bts"], [1, "row", "social_media_list_row"], ["src", "assets/img/gq_korea/group.jpg", "alt", "GQ_KOREA_GROUP_PHOTO", 1, "gq_photo"], [1, "list"], [1, "sm_list_title"], [1, "d-flex", "justify-content-end"], ["href", "https://www.youtube.com/channel/UCLkAepWjdylmXSltofFvsYQ", "target", "_blank"], ["href", "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX", "target", "_blank"], ["href", "https://twitter.com/bts_bighit", "target", "_blank"], ["href", "https://www.instagram.com/bts.bighitofficial/", "target", "_blank"], ["href", "https://www.facebook.com/bangtan.official", "target", "_blank"], ["href", "https://www.weverse.io/", "target", "_blank"], [1, "yt_video"], ["width", "420", "height", "315", "src", "https://www.youtube.com/embed/?v=WMweEpGlu_U&list=PLwN_wMJhvydYmpST5YaGouq6JcmyVyQB0"], [1, "BM_title"], [1, "about_bm"], [1, "nav_a"], ["routerLink", "/chat", 1, "chat"], ["routerLink", "/login", 1, "chat"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Discography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_14_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_div_15_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "BTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "BTS, an acronym of Bangtan Sonyeondan or \u201CBeyond the Scene,\u201D is a Grammy-nominated South Korean group that has been capturing the hearts of millions of fans globally since its debut in June 2013. The members of BTS are RM, Jin, SUGA, j-hope, Jimin, V, and Jung Kook. Gaining recognition for their authentic and self-produced music, top-notch performances, and the way they interact with their fans, BTS has established themselves as \u201C21st century Pop Icons\u201D breaking countless world records. While imparting a positive influence through activities such as the LOVE MYSELF campaign and the UN \u2018Speak Yourself\u2019 speech, the band has mobilized millions of fans across the world (named ARMY), collected four No. 1 songs in a span of 9 months, performed multiple sold-out stadium shows across the world, and been named TIME\u2019s Entertainer of the Year 2020. BTS has been nominated for Best Pop Duo/Group Performance for the 63rd Grammy Awards and recognized with numerous prestigious awards like the Billboard Music Awards, American Music Awards and MTV Video Music Awards. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Social Media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "YouTube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Spotify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Weverse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "iframe", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h1", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "BIGHIT MUSIC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "BIGHIT MUSIC is an industry-leading music label that continues to pioneer new paths driven by a strong belief in music and ceaseless support from fans. BIGHIT strives to create music heretofore unseen in the world through its inimitable way, creating the music that symbolizes an era that can resonate with fans across the world. Artists under the label includes Lee Hyun, BTS and TOMORROW X TOGETHER.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.isLoggedIn());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RouterLinkDelegate"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".main[_ngcontent-%COMP%] {\r\n    box-shadow: 5px 5px 30px 1px #000000;\r\n}\r\n\r\n.nav_items[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 10%;\r\n\r\n}\r\nnav[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    background-color: transparent;\r\n}\r\n.nav_a[_ngcontent-%COMP%] {\r\n    float: left;\r\n    color: #bababa;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    font-family: 'Domine', serif;\r\n}\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: grey;\r\n}\r\n.chat[_ngcontent-%COMP%] {\r\n    color: #bababa;\r\n}\r\n\r\n.band_name[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-family: 'Domine', serif;\r\n    margin-top: 5%;\r\n}\r\n.about_bts[_ngcontent-%COMP%] {\r\n    color: #bababa;\r\n    font-size: 25px;\r\n    text-align: justify;\r\n    text-indent: 50px;\r\n}\r\n\r\n.social_media_list_row[_ngcontent-%COMP%] {\r\n    margin-top: 4%;\r\n}\r\n.gq_photo[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n    float: right;\r\n    margin-bottom: 20px;\r\n    box-shadow: 5px 5px 30px 1px #000000;\r\n}\r\n.list[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n.sm_list_title[_ngcontent-%COMP%] {\r\n    color: #bababa;\r\n    margin-bottom: 15px;\r\n    margin-top: 30px;\r\n    margin-right: 20px;\r\n}\r\nul[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    color: #bababa;\r\n    font-size: 25px;\r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    -webkit-text-decoration: underline #bababa;\r\n            text-decoration: underline #bababa;\r\n}\r\n\r\n.yt_video[_ngcontent-%COMP%] {\r\n    margin-left: 3%;\r\n    margin-top: 3%;\r\n}\r\niframe[_ngcontent-%COMP%] {\r\n    border: none;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n    height: 1px;\r\n    color: #bababa;\r\n    background-color: #bababa;\r\n    margin-top: 5%;\r\n}\r\n\r\n.BM_title[_ngcontent-%COMP%] {\r\n    margin-top: 5%;\r\n    color: white;\r\n    font-family: 'Domine', serif;\r\n}\r\n.about_bm[_ngcontent-%COMP%] {\r\n    color: #bababa;\r\n    font-size: 24px;\r\n    text-align: justify;\r\n    text-indent: 50px;\r\n    padding-bottom: 2%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEI7SUFFSSxvQ0FBb0M7QUFDeEM7QUFFQSxTQUFTO0FBRVQ7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFFBQVE7O0FBRVo7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUEsWUFBWTtBQUVaO0lBQ0ksWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFHQSxvQkFBb0I7QUFFcEI7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUVuQixvQ0FBb0M7QUFDeEM7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFFQTtJQUNJLDBDQUFrQztZQUFsQyxrQ0FBa0M7QUFDdEM7QUFFQSxnQkFBZ0I7QUFFaEI7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBLEtBQUs7QUFFTDtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFFQSxhQUFhO0FBRWI7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKk1haW4gTmF2IHBpY3RydXJlKi9cclxuLm1haW4ge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNXB4IDMwcHggMXB4ICMwMDAwMDA7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDMwcHggMXB4ICMwMDAwMDA7XHJcbn1cclxuXHJcbi8qTmF2YmFyKi9cclxuXHJcbi5uYXZfaXRlbXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdG9wOiAxMCU7XHJcblxyXG59XHJcblxyXG5uYXYge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubmF2X2Ege1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogI2JhYmFiYTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnRG9taW5lJywgc2VyaWY7XHJcbn1cclxuXHJcbm5hdiBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4uY2hhdCB7XHJcbiAgICBjb2xvcjogI2JhYmFiYTtcclxufVxyXG5cclxuLypBYm91dCBCVFMqL1xyXG5cclxuLmJhbmRfbmFtZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ0RvbWluZScsIHNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5hYm91dF9idHMge1xyXG4gICAgY29sb3I6ICNiYWJhYmE7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgdGV4dC1pbmRlbnQ6IDUwcHg7XHJcbn1cclxuXHJcblxyXG4vKlNvY2lhbCBNZWRpYSBMaXN0Ki9cclxuXHJcbi5zb2NpYWxfbWVkaWFfbGlzdF9yb3cge1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbn1cclxuXHJcbi5ncV9waG90byB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCAzMHB4IDFweCAjMDAwMDAwO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAzMHB4IDFweCAjMDAwMDAwO1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5zbV9saXN0X3RpdGxlIHtcclxuICAgIGNvbG9yOiAjYmFiYWJhO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxudWwgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGNvbG9yOiAjYmFiYWJhO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG51bCBsaTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAjYmFiYWJhO1xyXG59XHJcblxyXG4vKllvdXR1YmUgdmlkZW8qL1xyXG5cclxuLnl0X3ZpZGVvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcblxyXG5pZnJhbWUge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4vKkhyKi9cclxuXHJcbmhyIHtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgY29sb3I6ICNiYWJhYmE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYWJhO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi8qTGFiZWwgaW5mbyovXHJcblxyXG4uQk1fdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ0RvbWluZScsIHNlcmlmO1xyXG59XHJcblxyXG4uYWJvdXRfYm0ge1xyXG4gICAgY29sb3I6ICNiYWJhYmE7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgdGV4dC1pbmRlbnQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "5f2+":
/*!******************************************************!*\
  !*** ./src/app/_components/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/shop.service */ "zE9M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/auth.service */ "7Vn+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






class LoginComponent {
    constructor(shopService, router, authService) {
        this.shopService = shopService;
        this.router = router;
        this.authService = authService;
        this.username = '';
        this.password = '';
        this.temp = false;
    }
    ngOnInit() {
    }
    onSubmit() {
        this.shopService.getAllUsers().subscribe(data => {
            if (data.length) {
                data.forEach(element => {
                    if (element.username === this.username && element.password === this.password) {
                        this.temp = true;
                        this.user = element;
                        return;
                    }
                });
                if (this.temp) {
                    this.user.token = "jwt-token";
                    console.log('Logged in: ' + JSON.stringify(this.user));
                    localStorage.setItem('user', JSON.stringify(this.user));
                    this.router.navigate(['/home']);
                    this.authService.getUsername();
                }
                else {
                    alert('Wrong username or password!');
                }
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_1__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 20, vars: 3, consts: [[1, "container", "h-100"], [1, "card", "w-50"], [1, "card-header"], [3, "ngSubmit"], ["loginForm", "ngForm"], [1, "form-group", "p-3"], ["for", "username"], ["type", "text", "id", "username", "required", "", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["for", "pw"], ["type", "password", "id", "pw", "required", "", "name", "pw", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "my-3", "mx-3", 3, "disabled"], ["routerLink", "/register", "type", "button", 1, "btn", "btn-primary", "my-3", "mx-3"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["RouterLinkDelegate"]], styles: [".container[_ngcontent-%COMP%] {\n    display: grid;\n    place-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"] });


/***/ }),

/***/ "7Vn+":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AuthService {
    constructor() { }
    isLoggedIn() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            if (user.token === 'jwt-token') {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    getUsername() {
        setTimeout(() => {
            this.user = JSON.parse(localStorage.getItem('user'));
            if (this.user) {
                this.username = this.user.username;
            }
        }, 400);
    }
    getPfpImg() {
        setTimeout(() => {
            this.user = JSON.parse(localStorage.getItem('user'));
            if (this.user.pfpImg) {
                this.pfpImg = this.user.pfpImg;
            }
            else {
                this.pfpImg = "assets/img/pfp/basic.jpg";
            }
        }, 400);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
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
    apiUrl: "http://localhost:3000"
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

/***/ "Dblz":
/*!**************************************!*\
  !*** ./src/app/_guards/safe_pipe.ts ***!
  \**************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });


/***/ }),

/***/ "ISrb":
/*!*******************************************!*\
  !*** ./src/app/_services/list.service.ts ***!
  \*******************************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const httpOption = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class ListService {
    constructor(http) {
        this.http = http;
    }
    getAllListItem() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/list`, httpOption);
    }
    addListItem(item) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/list`, item, httpOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(item => console.log(`inserted item = ${JSON.stringify(item)}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => error));
    }
    deleteItem(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/list/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(x => {
            return x;
        }));
    }
}
ListService.ɵfac = function ListService_Factory(t) { return new (t || ListService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ListService, factory: ListService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Jzhp":
/*!********************************************************!*\
  !*** ./src/app/_components/albums/albums.component.ts ***!
  \********************************************************/
/*! exports provided: AlbumsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsComponent", function() { return AlbumsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_album_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/album.service */ "rSw6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function AlbumsComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const album_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/album-detail/", album_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", album_r2.albumImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", album_r2.albumTitle);
} }
function AlbumsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlbumsComponent_div_3_div_1_Template, 3, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.albums);
} }
class AlbumsComponent {
    constructor(albumService, location) {
        this.albumService = albumService;
        this.location = location;
        this.albums = [];
    }
    ngOnInit() {
        this.getAlbums();
    }
    getAlbums() {
        this.albumService.getAllAlbums().subscribe(data => this.albums = data);
    }
    goBack() {
        this.location.back();
    }
}
AlbumsComponent.ɵfac = function AlbumsComponent_Factory(t) { return new (t || AlbumsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_album_service__WEBPACK_IMPORTED_MODULE_1__["AlbumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
AlbumsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlbumsComponent, selectors: [["app-albums"]], decls: 4, vars: 1, consts: [["name", "arrow-back-outline", 1, "arrow", 3, "click"], [1, "d-flex", "justify-content-center", "album"], ["class", "grid-container justify-content-center", 4, "ngIf"], [1, "grid-container", "justify-content-center"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "album_img", 3, "src", "alt"]], template: function AlbumsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumsComponent_Template_ion_icon_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Albums");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AlbumsComponent_div_3_Template, 2, 1, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.albums);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RouterLinkDelegate"]], styles: [".arrow[_ngcontent-%COMP%] {\r\n  margin-left: 1%;\r\n  margin-top: 2%;\r\n  margin-left: 3%;\r\n  color: #bababa;\r\n  font-size: 200%;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.album[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-family: 'Domine', serif;\r\n  margin-top: 2%;\r\n  font-size: 250%;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 25% 25% 25%;\r\n  justify-content: center;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-left: 5%;\r\n  margin-top: 5%;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.1);\r\n  transition: .8s;\r\n}\r\n\r\n.album_img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsYnVtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWE7O0FBRWI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJhbGJ1bXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qQmFjayBBcnJvdyovXHJcblxyXG4uYXJyb3cge1xyXG4gIG1hcmdpbi1sZWZ0OiAxJTtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgY29sb3I6ICNiYWJhYmE7XHJcbiAgZm9udC1zaXplOiAyMDAlO1xyXG59XHJcblxyXG4uYXJyb3c6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLypBbGJ1bXMqL1xyXG5cclxuLmFsYnVtIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdEb21pbmUnLCBzZXJpZjtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBmb250LXNpemU6IDI1MCU7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAyNSUgMjUlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIgZGl2IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIgZGl2OmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgdHJhbnNpdGlvbjogLjhzO1xyXG59XHJcblxyXG4uYWxidW1faW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Lcj9":
/*!*********************************************!*\
  !*** ./src/app/_services/member.service.ts ***!
  \*********************************************/
/*! exports provided: MemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return MemberService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const httpOption = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class MemberService {
    constructor(http) {
        this.http = http;
    }
    getAllMembers() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/members`, httpOption);
    }
    getMemberById(memberId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/members/${memberId}`, httpOption);
    }
}
MemberService.ɵfac = function MemberService_Factory(t) { return new (t || MemberService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
MemberService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MemberService, factory: MemberService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PSoG":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "7Vn+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }
        else {
            return true;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PUj0":
/*!****************************************************!*\
  !*** ./src/app/_components/chat/chat.component.ts ***!
  \****************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/chat.service */ "vJCe");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/auth.service */ "7Vn+");
/* harmony import */ var src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/shop.service */ "zE9M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");











function ChatComponent_ul_9_li_1_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Edit message:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChatComponent_ul_9_li_1_ng_template_11_Template_button_click_3_listener() { const d_r7 = ctx.dismiss; return d_r7("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChatComponent_ul_9_li_1_ng_template_11_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const c_r6 = ctx.close; const message_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return c_r6(ctx_r9.updateMessage(message_r1.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r5.editMsgForm);
} }
function ChatComponent_ul_9_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChatComponent_ul_9_li_1_Template_li_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const message_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.deleteChatMessage(message_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChatComponent_ul_9_li_1_Template_li_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r15.open(_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ChatComponent_ul_9_li_1_ng_template_11_Template, 11, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", message_r1.pfpImg, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](message_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](message_r1.message);
} }
function ChatComponent_ul_9_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", message_r1.pfpImg, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](message_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](message_r1.message);
} }
function ChatComponent_ul_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ChatComponent_ul_9_li_1_Template, 22, 3, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ChatComponent_ul_9_li_2_Template, 10, 3, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.authService.username === message_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.authService.username !== message_r1.username);
} }
class ChatComponent {
    constructor(chatService, fb, authService, config, modalService, shopService, location) {
        this.chatService = chatService;
        this.fb = fb;
        this.authService = authService;
        this.modalService = modalService;
        this.shopService = shopService;
        this.location = location;
        this.messages = null;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.getMessages();
        this.createMessageForm();
        this.editMsgForm = this.fb.group({
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    getMessages() {
        this.chatService.getAllMessages().subscribe(data => this.messages = data);
    }
    createMessageForm() {
        this.messageForm = this.fb.group({
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    onSubmit() {
        let obj = {
            username: this.authService.username,
            pfpImg: this.authService.pfpImg,
            message: this.messageForm.value.message
        };
        if (this.messageForm.value.message) {
            this.chatService.addMessage(obj).subscribe(() => { this.getMessages(); });
            this.messageForm.reset();
        }
    }
    deleteChatMessage(id) {
        const message = this.messages.find(x => x.id === id);
        confirm('Are you sure you want to delete this message?') ?
            this.chatService.deleteChatMsg(id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
                .subscribe(() => this.messages = this.messages.filter(x => x.id !== id)) : "";
    }
    open(content) {
        this.modalService.open(content);
    }
    updateMessage(id) {
        const message = this.messages.find(x => x.id === id);
        let obj = {
            username: this.authService.username,
            pfpImg: this.authService.pfpImg,
            message: this.editMsgForm.value.message
        };
        this.chatService.updateMsg(id, obj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(() => this.getMessages());
    }
    goBack() {
        this.location.back();
    }
    getUsers() {
        this.shopService.getAllUsers().subscribe(data => {
            setTimeout(() => {
                this.users = data;
                console.log(this.users);
            }, 200);
        });
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_6__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])], decls: 17, vars: 2, consts: [[1, "container-fluid", "test"], ["name", "arrow-back-outline", 1, "arrow", 3, "click"], [1, "row"], [1, "col", "d-flex", "justify-content-center"], [1, "title"], [1, "container", "chat"], [1, "col"], [4, "ngFor", "ngForOf"], [1, "container", "input_message", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "row", "input_message_part"], ["type", "text", "required", "", "formControlName", "message", "placeholder", "Type something...", 1, "form-control"], [1, "col", "arrow_btn"], ["name", "send-outline", "type", "submit", 1, "btn", 3, "click"], ["class", "loggedIn_msg", 4, "ngIf"], ["class", "NotloggedIn_msg", 4, "ngIf"], [1, "loggedIn_msg"], ["ngbDropdown", "", "placement", "top-right"], ["type", "button", "ngbDropdownToggle", "", 1, "btn_editing"], ["ngbDropdownMenu", ""], ["ngbDropdownItem", "", 3, "click"], ["ngbDropdownItem", "", 1, "btn", "btn-lg", "btn-outline-primary", "editbtn", 3, "click"], ["content", ""], [1, "pfpImg", 3, "src"], ["id", "urn"], [1, "msg"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup"], ["type", "text", "formControlName", "message", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], [1, "NotloggedIn_msg"], [1, "pfpImg2", 3, "src"], ["id", "urn2"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChatComponent_Template_ion_icon_click_1_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ChatComponent_ul_9_Template, 3, 2, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ChatComponent_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChatComponent_Template_ion_icon_click_16_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.messageForm);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownItem"]], styles: [".arrow[_ngcontent-%COMP%] {\r\n    margin-top: 2%;\r\n    margin-left: 3%;\r\n    color: #bababa;\r\n    font-size: 200%;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n    color: #bababa;\r\n}\r\n\r\nion-icon[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n.test[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\n\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    font-size: 200%;\r\n    font-family: 'Domine', serif;\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n.chat[_ngcontent-%COMP%] {\r\n    background-color: #bababa;\r\n    height: 65%;\r\n    border-radius: 0.4rem;\r\n    padding: 1%;\r\n    overflow: auto;\r\n}\r\n\r\n.loggedIn_msg[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border-radius: 0.4rem;\r\n    list-style: none;\r\n    width: 40%;\r\n    margin-left: 55%;\r\n}\r\n\r\n.btn_editing[_ngcontent-%COMP%] {\r\n    float: right;\r\n    background-color: white;\r\n    font-size: 150%;\r\n    padding-bottom: 3%;\r\n}\r\n\r\n.dropdown-toggle[_ngcontent-%COMP%]::after {\r\n    display: none;\r\n}\r\n\r\n.pfpImg[_ngcontent-%COMP%] {\r\n    width: 6%;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    float: right;\r\n    margin-right: 2%;\r\n    margin-left: 1%;\r\n}\r\n\r\n.editbtn[_ngcontent-%COMP%]{\r\n    font-size:17px;\r\n}\r\n\r\n#urn[_ngcontent-%COMP%] {\r\n    font-family: 'Domine', serif;\r\n    font-weight: 600;\r\n    float: right;\r\n}\r\n\r\n.msg[_ngcontent-%COMP%] {\r\n    padding-left: 5%;\r\n    font-size: 120%;\r\n}\r\n\r\n.NotloggedIn_msg[_ngcontent-%COMP%] {\r\n    background-color: grey;\r\n    border-radius: 0.4rem;\r\n    list-style: none;\r\n    width: 40%;\r\n    float: top;\r\n    margin-top: 2%;\r\n}\r\n\r\n.pfpImg2[_ngcontent-%COMP%] {\r\n    width: 6%;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    float: right;\r\n    margin-right: 2%;\r\n    margin-left: 1%;\r\n    margin-top: 4%;\r\n}\r\n\r\n#urn2[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n    padding-right: 5%;\r\n    font-family: 'Domine', serif;\r\n    font-weight: 600;\r\n    padding-top: 5%;\r\n}\r\n\r\n\r\n\r\n.input_message[_ngcontent-%COMP%] {\r\n    margin-top: 2%;\r\n}\r\n\r\n.input_message_part[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-left: 25%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhOztBQUViO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQSxTQUFTOztBQUVUO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQSxRQUFROztBQUVSO0lBQ0ksZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztBQUVBLGlCQUFpQjs7QUFFakI7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFHQTtJQUNJLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBLE9BQU87O0FBRVA7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkJhY2sgQXJyb3cqL1xyXG5cclxuLmFycm93IHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgY29sb3I6ICNiYWJhYmE7XHJcbiAgICBmb250LXNpemU6IDIwMCU7XHJcbn1cclxuXHJcbi5hcnJvdzpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gICAgY29sb3I6ICNiYWJhYmE7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLypcImJvZHlcIiovXHJcblxyXG4udGVzdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qVGl0bGUqL1xyXG5cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnRG9taW5lJywgc2VyaWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qQ2hhdCBDb250YWluZXIqL1xyXG5cclxuLmNoYXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JhYmFiYTtcclxuICAgIGhlaWdodDogNjUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmxvZ2dlZEluX21zZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDU1JTtcclxufVxyXG5cclxuLmJ0bl9lZGl0aW5nIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucGZwSW1nIHtcclxuICAgIHdpZHRoOiA2JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG59XHJcblxyXG4uZWRpdGJ0bntcclxuICAgIGZvbnQtc2l6ZToxN3B4O1xyXG59XHJcblxyXG5cclxuI3VybiB7XHJcbiAgICBmb250LWZhbWlseTogJ0RvbWluZScsIHNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLm1zZyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgZm9udC1zaXplOiAxMjAlO1xyXG59XHJcblxyXG4uTm90bG9nZ2VkSW5fbXNnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGZsb2F0OiB0b3A7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxuLnBmcEltZzIge1xyXG4gICAgd2lkdGg6IDYlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG5cclxuI3VybjIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICAgIGZvbnQtZmFtaWx5OiAnRG9taW5lJywgc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcblxyXG4vKkZvcm0qL1xyXG5cclxuLmlucHV0X21lc3NhZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbi5pbnB1dF9tZXNzYWdlX3BhcnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG59Il19 */"] });


/***/ }),

/***/ "QQi9":
/*!********************************************************************!*\
  !*** ./src/app/_components/album-detail/album-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: AlbumDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumDetailComponent", function() { return AlbumDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_album_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/album.service */ "rSw6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/list.service */ "ISrb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _guards_safe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_guards/safe_pipe */ "Dblz");








function AlbumDetailComponent_div_0_ul_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tracklist_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tracklist_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tracklist_r4.songTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tracklist_r4.songLength);
} }
function AlbumDetailComponent_div_0_26_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const conceptPhotos_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", conceptPhotos_r5.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AlbumDetailComponent_div_0_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlbumDetailComponent_div_0_26_ng_template_0_Template, 2, 1, "ng-template", 19);
} }
function AlbumDetailComponent_div_0_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const links_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, links_r8.link), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
function AlbumDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumDetailComponent_div_0_Template_ion_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumDetailComponent_div_0_Template_ion_icon_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.addOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "TRACKS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AlbumDetailComponent_div_0_ul_18_Template, 8, 3, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "CONCEPT PHOTOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AlbumDetailComponent_div_0_26_Template, 1, 0, undefined, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "MV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AlbumDetailComponent_div_0_div_34_Template, 3, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.album.albumImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.album.albumTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.album.albumTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.album.info);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.album.trackList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.album.conceptPhotos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.album.ytLinks);
} }
class AlbumDetailComponent {
    constructor(albumService, route, location, listService) {
        this.albumService = albumService;
        this.route = route;
        this.location = location;
        this.listService = listService;
    }
    ngOnInit() {
        this.getAlbumById();
    }
    getAlbumById() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.albumService.getAlbumById(id)
            .subscribe(album => this.album = album);
        return this.album;
    }
    goBack() {
        this.location.back();
    }
    addOnClick() {
        let obj = {
            listItem: this.album.albumTitle
        };
        this.listService.addListItem(obj).subscribe(() => { });
    }
}
AlbumDetailComponent.ɵfac = function AlbumDetailComponent_Factory(t) { return new (t || AlbumDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_album_service__WEBPACK_IMPORTED_MODULE_1__["AlbumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"])); };
AlbumDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlbumDetailComponent, selectors: [["app-album-detail"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["name", "arrow-back-outline", 1, "arrow", 3, "click"], [1, "container-fluid", "album_info"], [1, "row"], [1, "col"], [1, "album_photo", 3, "src", "alt"], [1, "album_info_text"], [1, "album_title"], ["name", "add-circle-outline", 3, "click"], [1, "container"], [1, "d-flex", "justify-content-center"], [1, "col", "details_list"], [1, "tracks", "d-flex", "justify-content-center"], [4, "ngFor", "ngForOf"], [1, "col", "d-flex", "justify-content-center"], [1, "mv_cp"], [1, "song_id"], [1, "song_title"], [1, "song_length"], ["data-interval", "1000", "ngbSlide", ""], [1, "picsum-img-wrapper"], ["alt", "...", 1, "carousel_img", 3, "src"], ["width", "700", "height", "500", 3, "src"]], template: function AlbumDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlbumDetailComponent_div_0_Template, 35, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.album);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbSlide"]], pipes: [_guards_safe_pipe__WEBPACK_IMPORTED_MODULE_7__["SafePipe"]], styles: [".arrow[_ngcontent-%COMP%] {\r\n   margin-top: 2%;\r\n   margin-left: 3%;\r\n   color: #bababa;\r\n   font-size: 200%;\r\n}\r\n\r\nion-icon[_ngcontent-%COMP%] {\r\n   margin-left: 1%;\r\n}\r\n\r\nion-icon[_ngcontent-%COMP%]:hover {\r\n   cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.album_info[_ngcontent-%COMP%] {\r\n   width: 80%;\r\n   margin-top: 2%;\r\n   height: -webkit-fit-content;\r\n   height: -moz-fit-content;\r\n   height: fit-content;\r\n}\r\n\r\n.album_photo[_ngcontent-%COMP%] {\r\n   width: 40%;\r\n   float: left;\r\n   box-shadow: 5px 5px 30px 1px #000000;\r\n}\r\n\r\n.album_info_text[_ngcontent-%COMP%] {\r\n   margin-left: 45%;\r\n   color: #bababa;\r\n   font-size: 25px;\r\n   margin-bottom: 10%;\r\n}\r\n\r\n.album_title[_ngcontent-%COMP%] {\r\n   color: white;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n   color: #bababa;\r\n   font-size: 25px;\r\n}\r\n\r\n\r\n\r\n.details_list[_ngcontent-%COMP%] {\r\n   margin-top: 5%;\r\n   font-size: 25px;\r\n   max-width: 200%;\r\n   margin-bottom: 20%;\r\n\r\n}\r\n\r\n.tracks[_ngcontent-%COMP%] {\r\n   color: white;\r\n   font-family: 'Domine', serif;\r\n   margin-bottom: 10%;\r\n   font-size: 130%;\r\n\r\n}\r\n\r\n.song_id[_ngcontent-%COMP%] {\r\n   color: #bababa;\r\n   margin-right: 5%;\r\n}\r\n\r\n.song_title[_ngcontent-%COMP%] {\r\n   color: white;\r\n}\r\n\r\n.song_length[_ngcontent-%COMP%] {\r\n   color: rgba(186, 186, 186, 0.5);\r\n   margin-left: 2%;\r\n   margin-right: 5%;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n   padding: 0;\r\n\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n   list-style: none;\r\n   width: 200%;\r\n}\r\n\r\n\r\n\r\n.mv_cp[_ngcontent-%COMP%] {\r\n   font-family: 'Domine', serif;\r\n   margin-bottom: 5%;\r\n   color: white;\r\n   font-size: 200%;\r\n}\r\n\r\nngb-carousel[_ngcontent-%COMP%] {\r\n   margin-bottom: 10%;\r\n   height: 700px;\r\n}\r\n\r\n.carousel_img[_ngcontent-%COMP%] {\r\n   height: 700px;\r\n}\r\n\r\n\r\n\r\niframe[_ngcontent-%COMP%] {\r\n   border: none;\r\n   margin-bottom: 10%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsYnVtLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVCQUF1Qjs7QUFFdkI7R0FDRyxjQUFjO0dBQ2QsZUFBZTtHQUNmLGNBQWM7R0FDZCxlQUFlO0FBQ2xCOztBQUVBO0dBQ0csZUFBZTtBQUNsQjs7QUFFQTtHQUNHLGVBQWU7QUFDbEI7O0FBRUEsYUFBYTs7QUFFYjtHQUNHLFVBQVU7R0FDVixjQUFjO0dBQ2QsMkJBQW1CO0dBQW5CLHdCQUFtQjtHQUFuQixtQkFBbUI7QUFDdEI7O0FBRUE7R0FDRyxVQUFVO0dBQ1YsV0FBVztHQUVYLG9DQUFvQztBQUN2Qzs7QUFFQTtHQUNHLGdCQUFnQjtHQUNoQixjQUFjO0dBQ2QsZUFBZTtHQUNmLGtCQUFrQjtBQUNyQjs7QUFFQTtHQUNHLFlBQVk7QUFDZjs7QUFFQTtHQUNHLGNBQWM7R0FDZCxlQUFlO0FBQ2xCOztBQUVBLFlBQVk7O0FBRVo7R0FDRyxjQUFjO0dBQ2QsZUFBZTtHQUNmLGVBQWU7R0FDZixrQkFBa0I7O0FBRXJCOztBQUVBO0dBQ0csWUFBWTtHQUNaLDRCQUE0QjtHQUM1QixrQkFBa0I7R0FDbEIsZUFBZTs7QUFFbEI7O0FBRUE7R0FDRyxjQUFjO0dBQ2QsZ0JBQWdCO0FBQ25COztBQUVBO0dBQ0csWUFBWTtBQUNmOztBQUVBO0dBQ0csK0JBQStCO0dBQy9CLGVBQWU7R0FDZixnQkFBZ0I7QUFDbkI7O0FBRUE7R0FDRyxVQUFVOztBQUViOztBQUVBO0dBQ0csZ0JBQWdCO0dBQ2hCLFdBQVc7QUFDZDs7QUFFQSxpQkFBaUI7O0FBRWpCO0dBQ0csNEJBQTRCO0dBQzVCLGlCQUFpQjtHQUNqQixZQUFZO0dBQ1osZUFBZTtBQUNsQjs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQixhQUFhO0FBQ2hCOztBQUVBO0dBQ0csYUFBYTtBQUNoQjs7QUFFQSxLQUFLOztBQUVMO0dBQ0csWUFBWTtHQUNaLGtCQUFrQjtBQUNyQiIsImZpbGUiOiJhbGJ1bS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qQmFjayBBcnJvdyxpb24taWNvbnMqL1xyXG5cclxuLmFycm93IHtcclxuICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgY29sb3I6ICNiYWJhYmE7XHJcbiAgIGZvbnQtc2l6ZTogMjAwJTtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gICBtYXJnaW4tbGVmdDogMSU7XHJcbn1cclxuXHJcbmlvbi1pY29uOmhvdmVyIHtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKkFsYnVtIEluZm8qL1xyXG5cclxuLmFsYnVtX2luZm8ge1xyXG4gICB3aWR0aDogODAlO1xyXG4gICBtYXJnaW4tdG9wOiAyJTtcclxuICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmFsYnVtX3Bob3RvIHtcclxuICAgd2lkdGg6IDQwJTtcclxuICAgZmxvYXQ6IGxlZnQ7XHJcbiAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCAzMHB4IDFweCAjMDAwMDAwO1xyXG4gICBib3gtc2hhZG93OiA1cHggNXB4IDMwcHggMXB4ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5hbGJ1bV9pbmZvX3RleHQge1xyXG4gICBtYXJnaW4tbGVmdDogNDUlO1xyXG4gICBjb2xvcjogI2JhYmFiYTtcclxuICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbn1cclxuXHJcbi5hbGJ1bV90aXRsZSB7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxucCB7XHJcbiAgIGNvbG9yOiAjYmFiYWJhO1xyXG4gICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi8qVHJhY2tsaXN0Ki9cclxuXHJcbi5kZXRhaWxzX2xpc3Qge1xyXG4gICBtYXJnaW4tdG9wOiA1JTtcclxuICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICBtYXgtd2lkdGg6IDIwMCU7XHJcbiAgIG1hcmdpbi1ib3R0b206IDIwJTtcclxuXHJcbn1cclxuXHJcbi50cmFja3Mge1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbiAgIGZvbnQtZmFtaWx5OiAnRG9taW5lJywgc2VyaWY7XHJcbiAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgZm9udC1zaXplOiAxMzAlO1xyXG5cclxufVxyXG5cclxuLnNvbmdfaWQge1xyXG4gICBjb2xvcjogI2JhYmFiYTtcclxuICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuLnNvbmdfdGl0bGUge1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zb25nX2xlbmd0aCB7XHJcbiAgIGNvbG9yOiByZ2JhKDE4NiwgMTg2LCAxODYsIDAuNSk7XHJcbiAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxudWwge1xyXG4gICBwYWRkaW5nOiAwO1xyXG5cclxufVxyXG5cclxudWwgbGkge1xyXG4gICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICB3aWR0aDogMjAwJTtcclxufVxyXG5cclxuLypDb25jZXB0IFBob3RvcyovXHJcblxyXG4ubXZfY3Age1xyXG4gICBmb250LWZhbWlseTogJ0RvbWluZScsIHNlcmlmO1xyXG4gICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgY29sb3I6IHdoaXRlO1xyXG4gICBmb250LXNpemU6IDIwMCU7XHJcbn1cclxuXHJcbm5nYi1jYXJvdXNlbCB7XHJcbiAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgaGVpZ2h0OiA3MDBweDtcclxufVxyXG5cclxuLmNhcm91c2VsX2ltZyB7XHJcbiAgIGhlaWdodDogNzAwcHg7XHJcbn1cclxuXHJcbi8qTVYqL1xyXG5cclxuaWZyYW1lIHtcclxuICAgYm9yZGVyOiBub25lO1xyXG4gICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/list.service */ "ISrb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/auth.service */ "7Vn+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








function AppComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.authService.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.authService.pfpImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function AppComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Login/Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_19_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_19_li_4_Template_ion_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.deleteListItem(item_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.listItem);
} }
function AppComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Check Out Later:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppComponent_div_19_li_4_Template, 3, 1, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.items);
} }
class AppComponent {
    constructor(listService, authService) {
        this.listService = listService;
        this.authService = authService;
        this.title = 'A Guide To Bangtan';
        this.bandName = 'BTS';
        this.items = null;
    }
    ngOnInit() {
        this.listService.getAllListItem()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])())
            .subscribe(items => this.items = items);
        setTimeout(() => this.authService.getUsername(), 100);
        setTimeout(() => this.authService.getPfpImg(), 100);
    }
    deleteListItem(id) {
        const item = this.items.find(x => x.id === id);
        confirm('Are you sure you want to delete this item?') ?
            item.isDeleting =  true && this.listService.deleteItem(id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])())
                .subscribe(() => this.items = this.items.filter(x => x.id !== id)) : "";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_list_service__WEBPACK_IMPORTED_MODULE_2__["ListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 23, vars: 6, consts: [[1, "container-fluid", "title_div", "fixed-top"], [1, "row"], [1, "col", "d-flex", "justify-content-center"], ["routerLink", "/home"], [1, "title"], ["routerLink", "/account", "class", "nav-link", "aria-current", "page", 4, "ngIf"], ["routerLink", "/login", "class", "nav-link", "aria-current", "page", "class", "login_register", 4, "ngIf"], [1, "hidden"], [1, "container-fluid", "fixed-bottom"], [1, "col"], ["ngbDropdown", "", "placement", "top-end", 1, "d-inline-block", "du"], ["ngbDropdownToggle", "", 1, "btn", "btn-outline-primary", "du_button"], [1, "mylist_span"], ["ngbDropdownMenu", "", "class", "du_list", 4, "ngIf"], ["routerLink", "/account", "aria-current", "page", 1, "nav-link"], [1, "userName"], [1, "pfpImg", 3, "src"], ["routerLink", "/login", "aria-current", "page", 1, "login_register"], ["ngbDropdownMenu", "", 1, "du_list"], [1, "listTitle_div"], [1, "listTitle"], ["ngbDropdownItem", "", "class", "lista_li", 4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 1, "lista_li"], ["name", "trash-outline", 1, "trash", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppComponent_a_8_Template, 4, 2, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AppComponent_a_9_Template, 2, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AppComponent_div_19_Template, 5, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "COPYRIGHT \u00A9 2021 BIG HIT MUSIC / HYBE. ALL RIGHTS RESERVED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, ctx.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.authService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.items);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["RouterLinkDelegate"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Domine&display=swap');\r\n\r\nbody[_ngcontent-%COMP%]{\r\n  height: 100% !important;\r\n}\r\n\r\n\r\n\r\n.title_div[_ngcontent-%COMP%] {\r\n  background-color: rgba(0, 0, 0, 0.2);\r\n  height: 40px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  margin-top: 1%;\r\n  padding-top: 1%;\r\n  color: #fbf2fc;\r\n  font-family: 'Domine', serif;\r\n  font-size: 150%;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n  color: #bababa;\r\n  font-family: 'Domine', serif;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.userName[_ngcontent-%COMP%] {\r\n  left: 89%;\r\n  position: absolute;\r\n  vertical-align: middle;\r\n}\r\n\r\n.pfpImg[_ngcontent-%COMP%] {\r\n  width: 15%;\r\n  border-radius: 50%;\r\n  vertical-align: middle;\r\n\r\n}\r\n\r\n.login_register[_ngcontent-%COMP%] {\r\n  left: 88%;\r\n  position: absolute;\r\n  color: #bababa;\r\n  margin-top: 0.5%;\r\n}\r\n\r\n\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n  height: 41px;\r\n}\r\n\r\n\r\n\r\n.du[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-right: 13%;\r\n}\r\n\r\n.du_button[_ngcontent-%COMP%] {\r\n  width: 300%;\r\n  border: white solid 2px;\r\n  color: white;\r\n}\r\n\r\n.du_button[_ngcontent-%COMP%]:hover {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n.du_button[_ngcontent-%COMP%]:focus {\r\n  box-shadow: none !important;\r\n  background-color: white;\r\n  border: white;\r\n  color: black;\r\n}\r\n\r\n.du_button[_ngcontent-%COMP%]:active {\r\n  box-shadow: none !important;\r\n  background-color: white !important;\r\n  border: white;\r\n  color: black !important;\r\n}\r\n\r\n.mylist_span[_ngcontent-%COMP%] {\r\n  margin-right: 5%;\r\n}\r\n\r\n.du_list[_ngcontent-%COMP%] {\r\n  width: 300%;\r\n  height: 350px;\r\n  overflow-y: auto !important;\r\n}\r\n\r\n.listTitle_div[_ngcontent-%COMP%] {\r\n  border-bottom: rgb(37, 36, 36) 1px solid;\r\n  padding-bottom: 2.5%;\r\n}\r\n\r\n.listTitle[_ngcontent-%COMP%] {\r\n  font-size: 130%;\r\n  margin-left: 5%;\r\n\r\n}\r\n\r\n.lista_li[_ngcontent-%COMP%] {\r\n  border-bottom: #bababa solid 1px;\r\n}\r\n\r\n.trash[_ngcontent-%COMP%] {\r\n  float: right;\r\n}\r\n\r\n.trash[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\r\n\r\nion-icon[_ngcontent-%COMP%] {\r\n  font-size: 120%;\r\n  margin-left: 0.5%;\r\n}\r\n\r\n\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  color: #bababa;\r\n  background-color: #242423;\r\n  height: 5%;\r\n  text-align: center;\r\n  padding: 0.5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJFQUEyRTs7QUFFM0U7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsaUNBQWlDOztBQUVqQztFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsc0JBQXNCOztBQUV4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFHQSxhQUFhOztBQUViO0VBQ0UsWUFBWTtBQUNkOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUdBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Eb21pbmUmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5ib2R5e1xyXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKlRpdGxlIGNvbnRhaW5lcixyZWdpc3Rlci9sb2dpbiovXHJcblxyXG4udGl0bGVfZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIHBhZGRpbmctdG9wOiAxJTtcclxuICBjb2xvcjogI2ZiZjJmYztcclxuICBmb250LWZhbWlseTogJ0RvbWluZScsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICBjb2xvcjogI2JhYmFiYTtcclxuICBmb250LWZhbWlseTogJ0RvbWluZScsIHNlcmlmO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi51c2VyTmFtZSB7XHJcbiAgbGVmdDogODklO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ucGZwSW1nIHtcclxuICB3aWR0aDogMTUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxufVxyXG5cclxuLmxvZ2luX3JlZ2lzdGVyIHtcclxuICBsZWZ0OiA4OCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiAjYmFiYWJhO1xyXG4gIG1hcmdpbi10b3A6IDAuNSU7XHJcbn1cclxuXHJcblxyXG4vKkhpZGRlbiBkaXYqL1xyXG5cclxuLmhpZGRlbiB7XHJcbiAgaGVpZ2h0OiA0MXB4O1xyXG59XHJcblxyXG4vKkRyb3Bkb3duKi9cclxuXHJcbi5kdSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMTMlO1xyXG59XHJcblxyXG4uZHVfYnV0dG9uIHtcclxuICB3aWR0aDogMzAwJTtcclxuICBib3JkZXI6IHdoaXRlIHNvbGlkIDJweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kdV9idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmR1X2J1dHRvbjpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZHVfYnV0dG9uOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5teWxpc3Rfc3BhbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuLmR1X2xpc3Qge1xyXG4gIHdpZHRoOiAzMDAlO1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGlzdFRpdGxlX2RpdiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogcmdiKDM3LCAzNiwgMzYpIDFweCBzb2xpZDtcclxuICBwYWRkaW5nLWJvdHRvbTogMi41JTtcclxufVxyXG5cclxuLmxpc3RUaXRsZSB7XHJcbiAgZm9udC1zaXplOiAxMzAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuXHJcbn1cclxuXHJcbi5saXN0YV9saSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogI2JhYmFiYSBzb2xpZCAxcHg7XHJcbn1cclxuXHJcbi50cmFzaCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udHJhc2g6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTIwJTtcclxuICBtYXJnaW4tbGVmdDogMC41JTtcclxufVxyXG5cclxuLypGb290ZXIqL1xyXG5cclxuZm9vdGVyIHtcclxuICBjb2xvcjogI2JhYmFiYTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDIzO1xyXG4gIGhlaWdodDogNSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuNSU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "YXmL":
/*!**********************************************************************!*\
  !*** ./src/app/_components/member-detail/member-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: MemberDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailComponent", function() { return MemberDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/member.service */ "Lcj9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/list.service */ "ISrb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _guards_safe_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_guards/safe_pipe */ "Dblz");







function MemberDetailComponent_div_0_div_44_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r8.song);
} }
function MemberDetailComponent_div_0_div_44_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberDetailComponent_div_0_div_44_div_6_Template_ion_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const mixtape_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.addOnClick(mixtape_r6.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MemberDetailComponent_div_0_div_44_div_6_div_5_Template, 4, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mixtape_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mixtape_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", mixtape_r6.songs);
} }
function MemberDetailComponent_div_0_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mixtapes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MemberDetailComponent_div_0_div_44_div_6_Template, 6, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.member.mixtapes);
} }
function MemberDetailComponent_div_0_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Songs:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MemberDetailComponent_div_0_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const songs_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](songs_r11.song);
} }
function MemberDetailComponent_div_0_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const links_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, links_r12.link), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
function MemberDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberDetailComponent_div_0_Template_ion_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Stage name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Born: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Age: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Occupation: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Solo Works");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, MemberDetailComponent_div_0_div_44_Template, 7, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, MemberDetailComponent_div_0_div_47_Template, 3, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, MemberDetailComponent_div_0_div_50_Template, 4, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "MV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, MemberDetailComponent_div_0_div_58_Template, 3, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.member.img2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.member.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.member.stageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.member.info);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.member.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.member.stageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.member.born);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.member.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.member.occupation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.member.mixtapes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.member.soloSongs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.member.soloSongs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.member.soloYtlinks);
} }
class MemberDetailComponent {
    constructor(route, memberService, location, listService) {
        this.route = route;
        this.memberService = memberService;
        this.location = location;
        this.listService = listService;
    }
    ngOnInit() {
        this.getMemberById();
    }
    getMemberById() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.memberService.getMemberById(id)
            .subscribe(member => this.member = member);
    }
    goBack() {
        this.location.back();
    }
    addOnClick(title) {
        let obj = {
            listItem: title
        };
        this.listService.addListItem(obj).subscribe(() => { });
    }
}
MemberDetailComponent.ɵfac = function MemberDetailComponent_Factory(t) { return new (t || MemberDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"])); };
MemberDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberDetailComponent, selectors: [["app-member-detail"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["name", "arrow-back-outline", 1, "arrow", 3, "click"], [1, "container-fluid", "member_info"], [1, "row"], [1, "col"], [1, "member_photo", 3, "src", "alt"], [1, "member_info_text"], [1, "member_stageName"], [1, "container"], [1, "col", "d-flex", "justify-content-center"], [1, "info_title"], [1, "details_list", "d-flex", "justify-content-center"], [1, "details_li"], [1, "dif_styling"], [1, "solo_work_title"], [4, "ngFor", "ngForOf"], [1, "mv_title"], [1, "d-flex", "justify-content-center"], [1, "works_title"], [1, "row", "mixt_list"], ["class", "mixt_col ", 4, "ngFor", "ngForOf"], [1, "mixt_col"], [1, "mixtape_title"], ["name", "add-circle-outline", 3, "click"], [1, "list"], ["width", "700", "height", "500", 3, "src"]], template: function MemberDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MemberDetailComponent_div_0_Template, 59, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.member);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_guards_safe_pipe__WEBPACK_IMPORTED_MODULE_6__["SafePipe"]], styles: [".arrow[_ngcontent-%COMP%] {\r\n   margin-top: 2%;\r\n   margin-left: 3%;\r\n   color: #bababa;\r\n   font-size: 200%;\r\n}\r\n\r\nion-icon[_ngcontent-%COMP%] {\r\n   margin-left: 1%;\r\n   vertical-align: middle;\r\n}\r\n\r\nion-icon[_ngcontent-%COMP%]:hover {\r\n   cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.member_info[_ngcontent-%COMP%] {\r\n   width: 80%;\r\n   margin-top: 2%;\r\n   height: 100%;\r\n}\r\n\r\n.member_photo[_ngcontent-%COMP%] {\r\n   width: 40%;\r\n   float: left;\r\n   box-shadow: 5px 5px 30px 1px #000000;\r\n}\r\n\r\n.member_info_text[_ngcontent-%COMP%] {\r\n   margin-left: 45%;\r\n   color: #bababa;\r\n   font-size: 25px;\r\n}\r\n\r\n.member_stageName[_ngcontent-%COMP%] {\r\n   color: white;\r\n}\r\n\r\n.info_title[_ngcontent-%COMP%] {\r\n   color: white;\r\n   font-family: 'Domine', serif;\r\n   margin-top: 7%;\r\n   font-size: 250%;\r\n   margin-bottom: 4%;\r\n}\r\n\r\n.details_list[_ngcontent-%COMP%] {\r\n   font-size: 25px;\r\n   color: #bababa;\r\n   margin-bottom: 5%;\r\n}\r\n\r\n.details_li[_ngcontent-%COMP%] {\r\n   list-style: none;\r\n}\r\n\r\n.dif_styling[_ngcontent-%COMP%] {\r\n   color: white;\r\n   font-family: 'Domine', serif;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n   color: #bababa;\r\n   font-size: 25px;\r\n}\r\n\r\n\r\n\r\n.solo_work_title[_ngcontent-%COMP%] {\r\n   color: white;\r\n   font-family: 'Domine', serif;\r\n   margin-top: 5%;\r\n   font-size: 250%;\r\n   margin-bottom: 5%;\r\n}\r\n\r\n.works_title[_ngcontent-%COMP%] {\r\n   color: white;\r\n   font-family: 'Domine', serif;\r\n   margin-bottom: 2%;\r\n}\r\n\r\n.mixt_list[_ngcontent-%COMP%] {\r\n   margin-bottom: 5%;\r\n}\r\n\r\n.mixt_col[_ngcontent-%COMP%] {\r\n   margin-right: 5%;\r\n}\r\n\r\n.mixtape_title[_ngcontent-%COMP%] {\r\n   color: #bababa;\r\n\r\n}\r\n\r\n.list[_ngcontent-%COMP%] {\r\n   color: #bababa;\r\n}\r\n\r\n\r\n\r\n.mv_title[_ngcontent-%COMP%] {\r\n   font-family: 'Domine', serif;\r\n   margin-bottom: 5%;\r\n   color: white;\r\n   font-size: 200%;\r\n}\r\n\r\niframe[_ngcontent-%COMP%] {\r\n   border: none;\r\n   margin-bottom: 10%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFBdUI7O0FBRXZCO0dBQ0csY0FBYztHQUNkLGVBQWU7R0FDZixjQUFjO0dBQ2QsZUFBZTtBQUNsQjs7QUFFQTtHQUNHLGVBQWU7R0FDZixzQkFBc0I7QUFDekI7O0FBRUE7R0FDRyxlQUFlO0FBQ2xCOztBQUVBLG9CQUFvQjs7QUFFcEI7R0FDRyxVQUFVO0dBQ1YsY0FBYztHQUNkLFlBQVk7QUFDZjs7QUFFQTtHQUNHLFVBQVU7R0FDVixXQUFXO0dBRVgsb0NBQW9DO0FBQ3ZDOztBQUVBO0dBQ0csZ0JBQWdCO0dBQ2hCLGNBQWM7R0FDZCxlQUFlO0FBQ2xCOztBQUVBO0dBQ0csWUFBWTtBQUNmOztBQUVBO0dBQ0csWUFBWTtHQUNaLDRCQUE0QjtHQUM1QixjQUFjO0dBQ2QsZUFBZTtHQUNmLGlCQUFpQjtBQUNwQjs7QUFFQTtHQUNHLGVBQWU7R0FDZixjQUFjO0dBQ2QsaUJBQWlCO0FBQ3BCOztBQUVBO0dBQ0csZ0JBQWdCO0FBQ25COztBQUVBO0dBQ0csWUFBWTtHQUNaLDRCQUE0QjtBQUMvQjs7QUFHQTtHQUNHLGNBQWM7R0FDZCxlQUFlO0FBQ2xCOztBQUVBLFlBQVk7O0FBRVo7R0FDRyxZQUFZO0dBQ1osNEJBQTRCO0dBQzVCLGNBQWM7R0FDZCxlQUFlO0dBQ2YsaUJBQWlCO0FBQ3BCOztBQUVBO0dBQ0csWUFBWTtHQUNaLDRCQUE0QjtHQUM1QixpQkFBaUI7QUFDcEI7O0FBRUE7R0FDRyxpQkFBaUI7QUFDcEI7O0FBRUE7R0FDRyxnQkFBZ0I7QUFDbkI7O0FBRUE7R0FDRyxjQUFjOztBQUVqQjs7QUFHQTtHQUNHLGNBQWM7QUFDakI7O0FBRUEsS0FBSzs7QUFFTDtHQUNHLDRCQUE0QjtHQUM1QixpQkFBaUI7R0FDakIsWUFBWTtHQUNaLGVBQWU7QUFDbEI7O0FBRUE7R0FDRyxZQUFZO0dBQ1osa0JBQWtCO0FBQ3JCIiwiZmlsZSI6Im1lbWJlci1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qQmFjayBBcnJvdyxpb24taWNvbnMqL1xyXG5cclxuLmFycm93IHtcclxuICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgY29sb3I6ICNiYWJhYmE7XHJcbiAgIGZvbnQtc2l6ZTogMjAwJTtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbmlvbi1pY29uOmhvdmVyIHtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKkluZm8gYWJvdXQgbWVtYmVyKi9cclxuXHJcbi5tZW1iZXJfaW5mbyB7XHJcbiAgIHdpZHRoOiA4MCU7XHJcbiAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tZW1iZXJfcGhvdG8ge1xyXG4gICB3aWR0aDogNDAlO1xyXG4gICBmbG9hdDogbGVmdDtcclxuICAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNXB4IDMwcHggMXB4ICMwMDAwMDA7XHJcbiAgIGJveC1zaGFkb3c6IDVweCA1cHggMzBweCAxcHggIzAwMDAwMDtcclxufVxyXG5cclxuLm1lbWJlcl9pbmZvX3RleHQge1xyXG4gICBtYXJnaW4tbGVmdDogNDUlO1xyXG4gICBjb2xvcjogI2JhYmFiYTtcclxuICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4ubWVtYmVyX3N0YWdlTmFtZSB7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmluZm9fdGl0bGUge1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbiAgIGZvbnQtZmFtaWx5OiAnRG9taW5lJywgc2VyaWY7XHJcbiAgIG1hcmdpbi10b3A6IDclO1xyXG4gICBmb250LXNpemU6IDI1MCU7XHJcbiAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG59XHJcblxyXG4uZGV0YWlsc19saXN0IHtcclxuICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICBjb2xvcjogI2JhYmFiYTtcclxuICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5kZXRhaWxzX2xpIHtcclxuICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmRpZl9zdHlsaW5nIHtcclxuICAgY29sb3I6IHdoaXRlO1xyXG4gICBmb250LWZhbWlseTogJ0RvbWluZScsIHNlcmlmO1xyXG59XHJcblxyXG5cclxucCB7XHJcbiAgIGNvbG9yOiAjYmFiYWJhO1xyXG4gICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi8qU29sbyBXb3JrKi9cclxuXHJcbi5zb2xvX3dvcmtfdGl0bGUge1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbiAgIGZvbnQtZmFtaWx5OiAnRG9taW5lJywgc2VyaWY7XHJcbiAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICBmb250LXNpemU6IDI1MCU7XHJcbiAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4ud29ya3NfdGl0bGUge1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbiAgIGZvbnQtZmFtaWx5OiAnRG9taW5lJywgc2VyaWY7XHJcbiAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcblxyXG4ubWl4dF9saXN0IHtcclxuICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5taXh0X2NvbCB7XHJcbiAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbi5taXh0YXBlX3RpdGxlIHtcclxuICAgY29sb3I6ICNiYWJhYmE7XHJcblxyXG59XHJcblxyXG5cclxuLmxpc3Qge1xyXG4gICBjb2xvcjogI2JhYmFiYTtcclxufVxyXG5cclxuLypNViovXHJcblxyXG4ubXZfdGl0bGUge1xyXG4gICBmb250LWZhbWlseTogJ0RvbWluZScsIHNlcmlmO1xyXG4gICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgY29sb3I6IHdoaXRlO1xyXG4gICBmb250LXNpemU6IDIwMCU7XHJcbn1cclxuXHJcbmlmcmFtZSB7XHJcbiAgIGJvcmRlcjogbm9uZTtcclxuICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG59Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components/login/login.component */ "5f2+");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/register/register.component */ "ol6R");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_components/account/account.component */ "ceBG");
/* harmony import */ var _components_album_detail_album_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_components/album-detail/album-detail.component */ "QQi9");
/* harmony import */ var _components_albums_albums_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_components/albums/albums.component */ "Jzhp");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_components/chat/chat.component */ "PUj0");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_components/home/home.component */ "2dux");
/* harmony import */ var _components_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_components/member-detail/member-detail.component */ "YXmL");
/* harmony import */ var _components_members_members_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_components/members/members.component */ "si5F");
/* harmony import */ var _components_shows_shows_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_components/shows/shows.component */ "/u1L");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _guards_safe_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_guards/safe_pipe */ "Dblz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"].forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
        _components_account_account_component__WEBPACK_IMPORTED_MODULE_9__["AccountComponent"],
        _components_members_members_component__WEBPACK_IMPORTED_MODULE_15__["MembersComponent"],
        _components_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_14__["MemberDetailComponent"],
        _components_albums_albums_component__WEBPACK_IMPORTED_MODULE_11__["AlbumsComponent"],
        _components_album_detail_album_detail_component__WEBPACK_IMPORTED_MODULE_10__["AlbumDetailComponent"],
        _components_shows_shows_component__WEBPACK_IMPORTED_MODULE_16__["ShowsComponent"],
        _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_12__["ChatComponent"],
        _guards_safe_pipe__WEBPACK_IMPORTED_MODULE_18__["SafePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"]] }); })();


/***/ }),

/***/ "ceBG":
/*!**********************************************************!*\
  !*** ./src/app/_components/account/account.component.ts ***!
  \**********************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/shop.service */ "zE9M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AccountComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Old password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountComponent_div_16_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.oldpass = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.oldpass);
} }
function AccountComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 17, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountComponent_div_17_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.newpass = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.newpass);
} }
function AccountComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
} }
function AccountComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); ctx_r14.editing(); return _r0.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete user");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.editing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AccountComponent {
    constructor(router, shopService) {
        this.router = router;
        this.shopService = shopService;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    onSubmit() {
        if (this.oldpass === this.user.password) {
            this.user.password = this.newpass;
            localStorage.setItem('user', JSON.stringify(this.user));
            this.shopService.updateUser(this.user).subscribe(() => {
                this.shopService.getAllUsers();
            });
            this.editing();
        }
        else {
            alert('Your old password is incorrect');
        }
    }
    delete() {
        confirm('Are you sure you want to delete your user? You will be logged out.') ?
            this.shopService.deleteUser(this.user.id).subscribe(() => {
                setTimeout(() => {
                    this.shopService.getAllUsers();
                    localStorage.removeItem('user');
                    this.router.navigate(['/home']);
                }, 100);
            })
            : "";
    }
    logout() {
        if (confirm('Are you sure you want to log out?')) {
            this.user.token = '';
            localStorage.setItem('user', JSON.stringify(this.user));
            this.router.navigate(['/home']);
            console.log('Logged out: ' + this.user.username + ' ' + JSON.stringify(this.user));
        }
    }
    editing() {
        this.edit = !this.edit;
        if (this.edit) {
            this.oldpass = '';
            this.newpass = '';
        }
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"])); };
AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-account"]], decls: 23, vars: 9, consts: [[1, "container", "h-100"], [1, "card", "w-50"], [1, "card-header"], [3, "ngSubmit"], ["accountForm", "ngForm"], [1, "form-group", "p-3"], ["for", "username"], [1, "p-2"], ["for", "email"], ["class", "form-group p-3", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary my-3 mx-3", 3, "disabled", 4, "ngIf"], ["type", "button", "class", "btn btn-primary my-3 mx-3", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-danger my-3 mx-3", 3, "click", 4, "ngIf"], ["for", "oldpw"], ["type", "password", "id", "oldpw", "required", "", "name", "oldpw", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["for", "newpw"], ["type", "password", "id", "newpw", "required", "", "name", "newpw", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "my-3", "mx-3", 3, "disabled"], ["type", "button", 1, "btn", "btn-primary", "my-3", "mx-3", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "my-3", "mx-3", 3, "click"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " User profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AccountComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "E-mail:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AccountComponent_div_16_Template, 5, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AccountComponent_div_17_Template, 5, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AccountComponent_button_18_Template, 2, 1, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AccountComponent_button_19_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AccountComponent_button_20_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AccountComponent_button_21_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AccountComponent_button_22_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".container[_ngcontent-%COMP%] {\n    display: grid;\n    place-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkIiLCJmaWxlIjoiYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xufSJdfQ== */"] });


/***/ }),

/***/ "gRAX":
/*!*******************************************!*\
  !*** ./src/app/_services/show.service.ts ***!
  \*******************************************/
/*! exports provided: ShowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowService", function() { return ShowService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const httpOption = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class ShowService {
    constructor(http) {
        this.http = http;
    }
    getAllShows() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/shows`, httpOption);
    }
}
ShowService.ɵfac = function ShowService_Factory(t) { return new (t || ShowService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ShowService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ShowService, factory: ShowService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "ol6R":
/*!************************************************************!*\
  !*** ./src/app/_components/register/register.component.ts ***!
  \************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/shop.service */ "zE9M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





class RegisterComponent {
    constructor(shopService, router) {
        this.shopService = shopService;
        this.router = router;
        this.token = '';
        this.temp = true;
    }
    ngOnInit() {
        this.getUsers();
    }
    onSubmit() {
        this.getUsers();
        this.users.forEach(element => {
            if (this.username === element.username && this.email === element.email) {
                this.temp = false;
                alert('This username and e-mail address is already taken.');
            }
            else if (this.username === element.username) {
                this.temp = false;
                alert('This username is already taken.');
            }
            else if (this.email === element.email) {
                this.temp = false;
                alert('This e-mail address is already taken.');
            }
        });
        if (this.temp) {
            this.getId();
            if (this.password !== this.password2) {
                alert('The two passwords do not match!');
            }
            else {
                this.pw = this.password;
                let obj = {
                    id: this.id,
                    username: this.username,
                    password: this.pw,
                    pfpImg: this.pfpImg,
                    email: this.email,
                    token: this.token
                };
                this.shopService.addUser(obj).subscribe(() => {
                    this.shopService.getAllUsers();
                });
                alert('User successfully registered. Log in!');
                this.router.navigate(['/login']);
            }
        }
    }
    getId() {
        this.id = 0;
        this.shopService.getAllUsers().subscribe(data => {
            this.id = data.length + 1;
        });
    }
    getUsers() {
        this.shopService.getAllUsers().subscribe(data => {
            setTimeout(() => {
                this.users = data;
                console.log(this.users);
            }, 200);
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_1__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 35, vars: 6, consts: [[1, "container", "h-100"], [1, "card", "w-50"], [1, "card-header"], [3, "ngSubmit"], ["registerForm", "ngForm"], [1, "form-group", "p-3"], ["for", "username"], ["type", "text", "id", "username", "required", "", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["for", "email"], ["type", "email", "id", "email", "required", "", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "pw"], ["type", "password", "id", "pw", "required", "", "name", "pw", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "pw2"], ["type", "password", "id", "pw2", "required", "", "name", "pw2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "pfpImg"], ["type", "file", "id", "pfpImg", "name", "pfImg", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "my-3", "mx-3", 3, "disabled"], ["routerLink", "/login", "type", "button", 1, "btn", "btn-primary", "my-3", "mx-3"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_9_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "E-mail:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_19_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Password again:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_24_listener($event) { return ctx.password2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Profile Picture:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 16, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_29_listener($event) { return ctx.pfpImg = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Already have an account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pfpImg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RouterLinkDelegate"]], styles: [".container[_ngcontent-%COMP%] {\n    display: grid;\n    place-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"] });


/***/ }),

/***/ "rSw6":
/*!********************************************!*\
  !*** ./src/app/_services/album.service.ts ***!
  \********************************************/
/*! exports provided: AlbumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumService", function() { return AlbumService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const httpOption = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class AlbumService {
    constructor(http) {
        this.http = http;
    }
    getAllAlbums() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/albums`, httpOption);
    }
    getAlbumById(albumId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/albums/${albumId}`, httpOption);
    }
}
AlbumService.ɵfac = function AlbumService_Factory(t) { return new (t || AlbumService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AlbumService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AlbumService, factory: AlbumService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "si5F":
/*!**********************************************************!*\
  !*** ./src/app/_components/members/members.component.ts ***!
  \**********************************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/member.service */ "Lcj9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function MembersComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", member_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", member_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", member_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", member_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r2.position);
} }
function MembersComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MembersComponent_div_6_div_1_Template, 10, 6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.members);
} }
class MembersComponent {
    constructor(memberService, location) {
        this.memberService = memberService;
        this.location = location;
        this.members = [];
    }
    ngOnInit() {
        this.getMembers();
    }
    getMembers() {
        this.memberService.getAllMembers()
            .subscribe(members => this.members = members);
        ;
    }
    goBack() {
        this.location.back();
    }
}
MembersComponent.ɵfac = function MembersComponent_Factory(t) { return new (t || MembersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
MembersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MembersComponent, selectors: [["app-members"]], decls: 7, vars: 1, consts: [["name", "arrow-back-outline", 1, "arrow", 3, "click"], [1, "container"], [1, "row"], [1, "col"], [1, "d-flex", "justify-content-center", "title"], ["class", "row", 4, "ngIf"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "card", 2, "width", "18rem"], [3, "routerLink"], [1, "card-img-top", 3, "src", "alt"], [1, "card-body"], [1, "card-title"]], template: function MembersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MembersComponent_Template_ion_icon_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MembersComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.members);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RouterLinkDelegate"]], styles: [".arrow[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  margin-left: 3%;\n  color: #bababa;\n  font-size: 200%;\n}\n\n.arrow[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  margin-left: 1%;\n}\n\n\n\n.title[_ngcontent-%COMP%] {\n  text-decoration: none;\n  margin-bottom: 50px;\n  font-size: 50px;\n  font-family: 'Domine', serif;\n  color: white;\n}\n\n\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  margin-bottom: 50px;\n  box-shadow: 5px 5px 30px 1px #000000;\n  border-radius: 0.4rem;\n  color: white;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: .8s;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  background-color: #bababa;\n  border-radius: 0rem 0rem 0.4rem 0.4rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.card-title[_ngcontent-%COMP%]:hover {\n  -webkit-text-decoration: underline white;\n          text-decoration: underline white;\n}\n\na[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhOztBQUViO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLFFBQVE7O0FBRVI7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkOztBQUVBLFFBQVE7O0FBRVI7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBRW5CLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0NBQWdDO1VBQWhDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJtZW1iZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkJhY2sgQXJyb3cqL1xuXG4uYXJyb3cge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBjb2xvcjogI2JhYmFiYTtcbiAgZm9udC1zaXplOiAyMDAlO1xufVxuXG4uYXJyb3c6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlvbi1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDElO1xufVxuXG4vKlRpdGxlKi9cblxuLnRpdGxlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiAnRG9taW5lJywgc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLypDYXJkcyovXG5cbi5jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggMzBweCAxcHggIzAwMDAwMDtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAzMHB4IDFweCAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zaXRpb246IC44cztcbn1cblxuLmNhcmQtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWJhYmE7XG4gIGJvcmRlci1yYWRpdXM6IDByZW0gMHJlbSAwLjRyZW0gMC40cmVtO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcmQtdGl0bGU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSB3aGl0ZTtcbn1cblxuYSB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */"] });


/***/ }),

/***/ "vJCe":
/*!*******************************************!*\
  !*** ./src/app/_services/chat.service.ts ***!
  \*******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const httpOption = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class ChatService {
    constructor(http) {
        this.http = http;
    }
    getAllMessages() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/messages`, httpOption);
    }
    addMessage(message) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/messages`, message, httpOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(message => console.log(`inserted message = ${JSON.stringify(message)}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => error));
    }
    deleteChatMsg(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/messages/${id}`, httpOption)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(x => {
            return x;
        }));
    }
    updateMsg(id, message) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/messages/${id}`, message, httpOption)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(x => {
            return x;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => error));
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_components/account/account.component */ "ceBG");
/* harmony import */ var _components_album_detail_album_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/album-detail/album-detail.component */ "QQi9");
/* harmony import */ var _components_albums_albums_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/albums/albums.component */ "Jzhp");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/chat/chat.component */ "PUj0");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components/home/home.component */ "2dux");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/login/login.component */ "5f2+");
/* harmony import */ var _components_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components/member-detail/member-detail.component */ "YXmL");
/* harmony import */ var _components_members_members_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/members/members.component */ "si5F");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_components/register/register.component */ "ol6R");
/* harmony import */ var _components_shows_shows_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_components/shows/shows.component */ "/u1L");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_guards/auth.guard */ "PSoG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'account', component: _components_account_account_component__WEBPACK_IMPORTED_MODULE_1__["AccountComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'members', component: _components_members_members_component__WEBPACK_IMPORTED_MODULE_8__["MembersComponent"] },
    { path: 'detail/:id', component: _components_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_7__["MemberDetailComponent"] },
    { path: 'album-detail/:id', component: _components_album_detail_album_detail_component__WEBPACK_IMPORTED_MODULE_2__["AlbumDetailComponent"] },
    { path: 'albums', component: _components_albums_albums_component__WEBPACK_IMPORTED_MODULE_3__["AlbumsComponent"] },
    { path: 'chat', component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"] },
    { path: 'shows', component: _components_shows_shows_component__WEBPACK_IMPORTED_MODULE_10__["ShowsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zE9M":
/*!*******************************************!*\
  !*** ./src/app/_services/shop.service.ts ***!
  \*******************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const httpOption = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class ShopService {
    constructor(http) {
        this.http = http;
        this.qty = 0;
    }
    helper() {
        setTimeout(() => {
            if (this.qty) {
                this.temp = true;
            }
            else {
                this.temp = false;
            }
        }, 300);
    }
    getAllUsers() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users`, httpOption);
    }
    getUserById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users/${id}`, httpOption);
    }
    deleteUser(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users/${id}`, httpOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => console.log(`Removed from users = ${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => error));
    }
    updateUser(user) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users/${user.id}`, user, httpOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => console.log(`Changed password for = ${user.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => error));
    }
    addUser(user) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users`, user, httpOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((user) => console.log(`Added user = ${JSON.stringify(user)}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => error));
    }
}
ShopService.ɵfac = function ShopService_Factory(t) { return new (t || ShopService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ShopService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ShopService, factory: ShopService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map