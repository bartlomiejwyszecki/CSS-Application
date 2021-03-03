(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/Bartek/Desktop/CSS-Application-main/src/main.ts */"zUnb");


/***/ }),

/***/ "0RZE":
/*!********************************************!*\
  !*** ./src/app/components/assets/fonts.ts ***!
  \********************************************/
/*! exports provided: FONTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
const FONTS = [
    {
        id: 1,
        name: 'Poppins',
        description: "'Poppins', sans-serif",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    {
        id: 2,
        name: 'Montserrat',
        description: "'Montserrat', sans-serif",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    {
        id: 3,
        name: 'Roboto',
        description: "'Roboto', sans-serif",
        weights: [100, 300, 400, 500, 700, 900]
    },
    {
        id: 4,
        name: 'Open Sans',
        description: "'Open Sans', sans-serif",
        weights: [300, 400, 600, 700]
    },
    {
        id: 5,
        name: 'Lato',
        description: "'Lato', sans-serif",
        weights: [100, 300, 400, 700, 900]
    },
    {
        id: 6,
        name: 'Ubuntu',
        description: "'Ubuntu', sans-serif",
        weights: [300, 400, 500, 700]
    },
    {
        id: 7,
        name: 'Merriweather',
        description: "'Merriweather', serif",
        weights: [300, 400, 700, 900]
    },
    {
        id: 8,
        name: 'Playfair Display',
        description: "'Playfair Display', serif",
        weights: [400, 500, 600, 700, 800, 900]
    },
    {
        id: 9,
        name: 'Cormorant Garamond',
        description: "'Cormorant Garamond', serif",
        weights: [300, 400, 500, 600, 700]
    },
    {
        id: 10,
        name: 'Lora',
        description: "'Lora', serif",
        weights: [400, 500, 600, 700]
    },
    {
        id: 11,
        name: 'Bitter',
        description: "'Bitter', serif",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    {
        id: 12,
        name: 'Arvo',
        description: "'Arvo', serif",
        weights: [400, 700]
    }
];


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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 54, vars: 0, consts: [[1, "container"], [1, "inBuilding"], [1, "flex"], ["id", "angular", 1, "icon"], [1, "fab", "fa-angular"], [1, "icon", "ts"], ["data-icon", "simple-icons:typescript", "data-inline", "false", 1, "iconify"], [1, "icon"], [1, "fab", "fa-sass"], [1, "fab", "fa-bootstrap"], [1, "fab", "fa-font-awesome"], [1, "fas", "fa-smile"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Simple CSS application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome to my CSS angular application!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "This application is made to help the developer use some common CSS tools in one place. I made this application to improve my ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " skills, and also to help myself writting CSS files in the future. The tools on your left are quite simple, but I think you will find it fairly useful. I certainly hope that this tool will help you save some time, and will make you feel this time was not wasted. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "The tools description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "At the moment there are only three tools, but I'm planning to add new ones in the future. Here is a current tools description: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Shape generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " - this tool helps to make some more unusual shape from div than simple square or rectangle. It lets developer create shapes like: circle, ellipse, egg, triangle, trapezoid, diamond, and many other shapes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Gradient generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " - as the name suggests, it makes a gradient of chosen colors, and rotation degree. This tool allows to use a maximum of 10 colors, radial or linear direction, and gradient transform properties.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Banner generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " - have you ever seen a simple post on facebook, with a few words and some color or gradient in the background? This is exactly what this tool is made for. It also lets you download your effects of work.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Typography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " - a tool to check typography, while building a text content on website. Actually this component is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "in building");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ", but you can check it anyway to see a simple animation and component preliminary draft.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Technologies/tools used");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Enjoy yourself ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  padding: 0px;\n  width: 100%;\n  max-width: 700px;\n}\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: clamp(1.8em, 5vw, 2em);\n}\n.container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: clamp(1.1em, 3vw, 1.3em);\n  padding: 1.6em 0 0 0;\n}\n.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  font-weight: 300;\n  font-size: 1em;\n}\n.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-top: -5px;\n}\n.container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.2em 0 0.2em 1em;\n  font-weight: 300;\n  line-height: 1.5;\n}\n.container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .inBuilding[_ngcontent-%COMP%] {\n  color: #b71c1c;\n  font-weight: 800;\n}\n.container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 110%;\n}\n.container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  font-size: 4em;\n  padding: 0 2em 1.5em 0;\n}\n.container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .icon.ts[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  font-size: 3.4em;\n  padding-top: 12px;\n}\n.container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .fa-angular[_ngcontent-%COMP%]:hover, .container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .fa-angular[_ngcontent-%COMP%]:active {\n  color: #dd1b16;\n  transition: 0.3s;\n}\n.container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .fa-sass[_ngcontent-%COMP%]:hover, .container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .fa-sass[_ngcontent-%COMP%]:active {\n  color: #cd6799;\n  transition: 0.3s;\n}\n.container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .fa-bootstrap[_ngcontent-%COMP%]:hover, .container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .fa-bootstrap[_ngcontent-%COMP%]:active {\n  color: #563d7c;\n  transition: 0.3s;\n}\n.container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .fa-font-awesome[_ngcontent-%COMP%]:hover, .container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .fa-font-awesome[_ngcontent-%COMP%]:active {\n  color: #228ae6;\n  transition: 0.3s;\n}\n.container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .icon.ts[_ngcontent-%COMP%]:hover {\n  color: #007acc;\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLGdCQUFBO0VBQ0EsaUNBQUE7QUFFUjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG9CQUFBO0FBRVI7QUFBSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRVI7QUFEUTtFQUNJLGdCQUFBO0FBR1o7QUFBSTtFQUNJLGdCQUFBO0FBRVI7QUFEUTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUdaO0FBRlk7RUFDSSxnQkFBQTtBQUloQjtBQUZZO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBSWhCO0FBQUk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFFUjtBQURRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFHWjtBQURRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBR1o7QUFEUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUdaO0FBRFE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFHWjtBQURRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBR1o7QUFEUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUdaO0FBRFE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFHWiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgaDIge1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDEuOGVtLCA1dncsIDJlbSk7XG4gICAgfVxuICAgIGg0IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjFlbSwgM3Z3LCAxLjNlbSk7XG4gICAgICAgIHBhZGRpbmc6IDEuNmVtIDAgMCAwO1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1bCB7XG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMmVtIDAgMC4yZW0gMWVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmluQnVpbGRpbmcge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYjcxYzFjO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZsZXgge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIHdpZHRoOiAxMTAlO1xuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogNHJlbTtcbiAgICAgICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgICAgICAgICAgcGFkZGluZzogMCAyZW0gMS41ZW0gMDtcbiAgICAgICAgfVxuICAgICAgICAuaWNvbi50cyB7XG4gICAgICAgICAgICB3aWR0aDogNHJlbTtcbiAgICAgICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMy40ZW07XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgfVxuICAgICAgICAuZmEtYW5ndWxhcjpob3ZlciwgLmZhLWFuZ3VsYXI6YWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZGQxYjE2O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgfVxuICAgICAgICAuZmEtc2Fzczpob3ZlciwgLmZhLXNhc3M6YWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjY2Q2Nzk5O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgfVxuICAgICAgICAuZmEtYm9vdHN0cmFwOmhvdmVyLCAuZmEtYm9vdHN0cmFwOmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzU2M2Q3YztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgIH1cbiAgICAgICAgLmZhLWZvbnQtYXdlc29tZTpob3ZlciwgLmZhLWZvbnQtYXdlc29tZTphY3RpdmUge1xuICAgICAgICAgICAgY29sb3I6ICMyMjhhZTY7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICB9XG4gICAgICAgIC5pY29uLnRzOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDA3YWNjO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "HTQA":
/*!**************************************************************************!*\
  !*** ./src/app/components/gradient-generator/linear/linear.component.ts ***!
  \**************************************************************************/
/*! exports provided: LinearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinearComponent", function() { return LinearComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/service */ "SRUi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





const _c0 = function (a0) { return { "background": a0 }; };
function LinearComponent_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LinearComponent_ng_container_39_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.colors[i_r4].name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LinearComponent_ng_container_39_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.colors[i_r4].percentage = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LinearComponent_ng_container_39_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.delete(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, i_r4 % 2 === 0 ? "#ececec" : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4 + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", c_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.colors[i_r4].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", ctx_r1.initialColors[1].percentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", c_r3.percentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.colors[i_r4].percentage);
} }
const _c1 = function (a0) { return { "disabled": a0 }; };
class LinearComponent {
    constructor(colorsService) {
        this.colorsService = colorsService;
        this.colors = this.colorsService.colors;
        this.initialColors = [
            { name: '#ff7b00', percentage: 25 },
            { name: '#e90152', percentage: 90 }
        ];
        this.rotation = 180;
        this.check = true;
    }
    getGradient() {
        let str = '';
        for (let i = 0; i < this.colors.length; i++) {
            str += `, ${this.colors[i].name} ${this.colors[i].percentage}%`;
        }
        let obj = {
            backgroundImage: `linear-gradient(${this.rotation}deg, ${this.initialColors[0].name} ${this.initialColors[0].percentage}%, 
        ${this.initialColors[1].name} ${this.initialColors[1].percentage}%` + str + `)`
        };
        this.code = obj;
        return obj;
    }
    getRotation() {
        return {
            transform: `rotate(${this.rotation}deg)`
        };
    }
    add() {
        this.disableAdd ? alert("You can't add more colors. Maximum number is 10.") : this.colorsService.addColor('#016B7E');
    }
    delete(index) {
        this.colorsService.deleteColor(index);
    }
    ngDoCheck() {
        this.colorsService.colors.length >= 8 ? this.disableAdd = true : this.disableAdd = false;
    }
}
LinearComponent.ɵfac = function LinearComponent_Factory(t) { return new (t || LinearComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service__WEBPACK_IMPORTED_MODULE_1__["ColorsService"])); };
LinearComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinearComponent, selectors: [["app-linear"]], decls: 71, vars: 15, consts: [[1, "gradient"], [1, "content", 3, "ngStyle"], ["gradient", ""], [1, "settings"], [1, "colors"], [2, "background", "#ececec"], ["for", "colorpicker"], ["type", "color", "id", "colorpicker", "value", "#ff7b00", 3, "ngModel", "ngModelChange"], ["type", "number", "min", "0", 3, "max", "value", "ngModel", "ngModelChange"], [1, "disabled"], [1, "fas", "fa-times", "fa-2x"], ["type", "color", "id", "colorpicker", "value", "#e90152", 3, "ngModel", "ngModelChange"], ["type", "number", "min", "0", "max", "100", 3, "value", "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["colspan", "4", 1, "add"], [3, "ngClass", "click"], [1, "fas", "fa-plus", "fa-lg"], [2, "margin-top", "40px"], [1, "rotation", 2, "margin-top", "-15px", "margin-bottom", "50px"], [1, "rotationInput"], ["for", "customRange2", 1, "form-label", 2, "margin-top", "15px"], ["type", "range", "min", "0", "max", "360", "step", "1", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], [1, "rotator"], ["rotator", ""], [1, "fas", "fa-circle-notch"], [1, "code"], [1, "dot"], [1, "className"], [1, "property"], [3, "ngStyle"], ["type", "color", "id", "colorpicker", 3, "value", "ngModel", "ngModelChange"], ["type", "number", "max", "100", 3, "min", "value", "ngModel", "ngModelChange"], [3, "click"]], template: function LinearComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Colors:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Percentage [%]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LinearComponent_Template_input_ngModelChange_22_listener($event) { return ctx.initialColors[0].name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LinearComponent_Template_input_ngModelChange_24_listener($event) { return ctx.initialColors[0].percentage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LinearComponent_Template_input_ngModelChange_33_listener($event) { return ctx.initialColors[1].name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LinearComponent_Template_input_ngModelChange_35_listener($event) { return ctx.initialColors[1].percentage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, LinearComponent_ng_container_39_Template, 12, 9, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LinearComponent_Template_a_click_42_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Add new color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Rotate:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LinearComponent_Template_input_ngModelChange_51_listener($event) { return ctx.rotation = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 1, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Your code:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "shape");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " { ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "background-image: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " } ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.getGradient());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.initialColors[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx.initialColors[1].percentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.initialColors[0].percentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.initialColors[0].percentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.initialColors[1].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.initialColors[1].percentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.initialColors[1].percentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.disableAdd));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rotation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.getRotation());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.code.backgroundImage, "; ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RangeValueAccessor"]], styles: [".gradient[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: -20px;\n  box-shadow: 2px 2px 10px 0px #9e9e9e;\n}\n.gradient[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60vh;\n}\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.settings[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1em;\n  font-weight: 600;\n  margin-top: 40px;\n  margin-bottom: 15px;\n  color: #616161;\n}\n.settings[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 0.9em;\n  font-weight: 500;\n  margin-bottom: 0px;\n  color: #616161;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  color: #000000;\n  border-collapse: collapse;\n  width: 100%;\n  border-radius: 20px;\n  overflow: hidden;\n  font-size: clamp(0.8em, 2vw, 1em);\n  margin-bottom: 20px;\n  table-layout: fixed;\n  box-shadow: 2px 2px 10px 0px #9e9e9e;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n  border-radius: 10px;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: #000000;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0px;\n  margin: -10px auto -10px auto;\n  text-align: center;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span.disabled[_ngcontent-%COMP%] {\n  color: #757575;\n  font-size: 0.6em;\n  line-height: 3;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #212121;\n  font-size: 0.7em;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #c62828;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%] {\n  background: #bdbdbd;\n  height: 10px;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #212121;\n  padding: 0px;\n  margin: 0px;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 0.7em;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n  padding-right: 2em;\n  font-size: 1.3em;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%], .settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%]:hover {\n  color: #9e9e9e;\n  font-size: 0.7em;\n  cursor: not-allowed;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #00796b;\n  text-shadow: none;\n}\n.settings[_ngcontent-%COMP%]   .rotation[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.settings[_ngcontent-%COMP%]   .rotation[_ngcontent-%COMP%]   .rotationInput[_ngcontent-%COMP%] {\n  width: 80%;\n  float: left;\n}\n.settings[_ngcontent-%COMP%]   .rotation[_ngcontent-%COMP%]   .rotator[_ngcontent-%COMP%] {\n  width: 20%;\n  text-align: center;\n  font-size: 1.5em;\n}\n.code[_ngcontent-%COMP%] {\n  background-color: #212121;\n  border-radius: 10px;\n  padding: 1.5em;\n  margin-bottom: 2em;\n  color: #eeeeee;\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: 500;\n}\n.code[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  color: #64b5f6;\n}\n.code[_ngcontent-%COMP%]   .className[_ngcontent-%COMP%] {\n  color: #ff9100;\n  padding-right: 0.5em;\n}\n.code[_ngcontent-%COMP%]   .property[_ngcontent-%COMP%] {\n  color: #f48fb1;\n  padding: 0.1em 0.3em 0.1em 1.5em;\n}\nh3[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: clamp(1.1em, 3vw, 1.3em);\n  margin-top: 40px;\n  padding-top: 40px;\n  margin-bottom: 10px;\n  border-top: 2px dashed #bdbdbd;\n  color: #212121;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpbmVhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFFUjtBQUVBO0VBQ0ksZUFBQTtBQUNKO0FBR0k7RUFDSSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQVI7QUFFSTtFQUNJLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUFSO0FBRUk7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0FBQVI7QUFDUTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QUFDWjtBQUFZO0VBQ0ksa0JBQUE7QUFFaEI7QUFDZ0I7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFDcEI7QUFDZ0I7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFDcEI7QUFDZ0I7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ3BCO0FBQ2dCO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBQ3BCO0FBQ2dCO0VBQ0ksY0FBQTtBQUNwQjtBQUVZO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBQWhCO0FBQ2dCO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ3BCO0FBQW9CO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FBRXhCO0FBQW9CO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRXhCO0FBQ2dCO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDcEI7QUFDZ0I7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFDcEI7QUFJSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFGUjtBQUdRO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFEWjtBQUdRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFEWjtBQU1BO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FBSEo7QUFJSTtFQUNJLGNBQUE7QUFGUjtBQUlJO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0FBRlI7QUFJSTtFQUNJLGNBQUE7RUFDQSxnQ0FBQTtBQUZSO0FBS0E7RUFDSSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBRkoiLCJmaWxlIjoibGluZWFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYWRpZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDBweCAjOWU5ZTllO1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgIH1cclxufVxyXG5cclxuYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZXR0aW5ncyB7XHJcbiAgICBoNCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICBjb2xvcjogIzYxNjE2MTtcclxuICAgIH1cclxuICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgY29sb3I6ICM2MTYxNjE7XHJcbiAgICB9XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjhlbSwgMnZ3LCAxZW0pO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggMHB4ICM5ZTllOWU7XHJcbiAgICAgICAgdHIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZCwgdGgge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAtMTBweCBhdXRvIC0xMHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3Bhbi5kaXNhYmxlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2M2MjgyODtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWRkIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiZGJkYmQ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLmRpc2FibGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhLmRpc2FibGVkLCBhLmRpc2FibGVkOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwNzk2YjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yb3RhdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLnJvdGF0aW9uSW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJvdGF0b3Ige1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY29kZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gICAgY29sb3I6ICNlZWVlZWU7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgLmRvdCB7XHJcbiAgICAgICAgY29sb3I6ICM2NGI1ZjY7XHJcbiAgICB9XHJcbiAgICAuY2xhc3NOYW1lIHtcclxuICAgICAgICBjb2xvcjogI2ZmOTEwMDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcclxuICAgIH1cclxuICAgIC5wcm9wZXJ0eSB7XHJcbiAgICAgICAgY29sb3I6ICNmNDhmYjE7XHJcbiAgICAgICAgcGFkZGluZzogMC4xZW0gMC4zZW0gMC4xZW0gMS41ZW07XHJcbiAgICB9XHJcbn1cclxuaDMge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4xZW0sIDN2dywgMS4zZW0pO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci10b3A6IDJweCBkYXNoZWQgI2JkYmRiZDtcclxuICAgIGNvbG9yOiAjMjEyMTIxO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinearComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-linear',
                templateUrl: './linear.component.html',
                styleUrls: ['./linear.component.scss']
            }]
    }], function () { return [{ type: _services_service__WEBPACK_IMPORTED_MODULE_1__["ColorsService"] }]; }, null); })();


/***/ }),

/***/ "I2xi":
/*!*************************************************************************!*\
  !*** ./src/app/components/shape-generator/shape-generator.component.ts ***!
  \*************************************************************************/
/*! exports provided: ShapeGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeGeneratorComponent", function() { return ShapeGeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ShapeGeneratorComponent {
}
ShapeGeneratorComponent.ɵfac = function ShapeGeneratorComponent_Factory(t) { return new (t || ShapeGeneratorComponent)(); };
ShapeGeneratorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShapeGeneratorComponent, selectors: [["app-shape-generator"]], decls: 27, vars: 0, consts: [[1, "container-fluid"], [1, "method"], ["routerLink", "/shape-generator/circle-shapes", "routerLinkActive", "active"], [1, "nonActive"], [1, "bi", "bi-circle"], [1, "whenActive"], [1, "bi", "bi-circle-fill"], ["routerLink", "/shape-generator/triangle-shapes", "routerLinkActive", "active"], [1, "bi", "bi-triangle"], [1, "bi", "bi-triangle-fill"], ["routerLink", "/shape-generator/quadrangle-shapes", "routerLinkActive", "active"], [1, "bi", "bi-diamond"], [1, "bi", "bi-diamond-fill"]], template: function ShapeGeneratorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Choose method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Circle shapes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Triangle shapes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Quadrangle shapes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap\");\n.container-fluid[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.container-fluid[_ngcontent-%COMP%]   .method[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.container-fluid[_ngcontent-%COMP%]   .method[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: clamp(1.1em, 3vw, 1.3em);\n  color: #212121;\n}\n.container-fluid[_ngcontent-%COMP%]   .method[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.container-fluid[_ngcontent-%COMP%]   .method[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.container-fluid[_ngcontent-%COMP%]   .method[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #212121;\n  font-weight: 500;\n  font-size: 1em;\n  display: inline-flex;\n  padding: 0.5em 1em 0.5em 1em;\n}\n.container-fluid[_ngcontent-%COMP%]   .method[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-right: 0.5em;\n}\n.container-fluid[_ngcontent-%COMP%]   .method[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #3d5afe;\n}\n.container-fluid[_ngcontent-%COMP%]   .method[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .whenActive[_ngcontent-%COMP%] {\n  display: none;\n}\n.container-fluid[_ngcontent-%COMP%]   .method[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .nonActive[_ngcontent-%COMP%] {\n  display: block;\n}\n.container-fluid[_ngcontent-%COMP%]   .method[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  transition: 1s;\n}\n.container-fluid[_ngcontent-%COMP%]   .method[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .whenActive[_ngcontent-%COMP%] {\n  color: #3d5afe;\n  display: block;\n  transition: 1s;\n}\n.container-fluid[_ngcontent-%COMP%]   .method[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .nonActive[_ngcontent-%COMP%] {\n  display: none;\n  transition: 1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NoYXBlLWdlbmVyYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxnR0FBQTtBQUVSO0VBQ0ksZUFBQTtBQUFKO0FBQ0k7RUFDSSxtQkFBQTtBQUNSO0FBQVE7RUFDSSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsY0FBQTtBQUVaO0FBQVE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQUVaO0FBRFk7RUFDSSxvQkFBQTtBQUdoQjtBQUZnQjtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7QUFJcEI7QUFIb0I7RUFDSSxvQkFBQTtBQUt4QjtBQUZnQjtFQUNJLGNBQUE7QUFJcEI7QUFEWTtFQUNJLGFBQUE7QUFHaEI7QUFEWTtFQUNJLGNBQUE7QUFHaEI7QUFEWTtFQUNJLGNBQUE7QUFHaEI7QUFGZ0I7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFJcEI7QUFGZ0I7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUlwQiIsImZpbGUiOiJzaGFwZS1nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHU6d2dodEAzMDA7NDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIC5tZXRob2Qge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IGNsYW1wKDEuMWVtLCAzdncsIDEuM2VtKTtcclxuICAgICAgICAgICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbSAwLjVlbSAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjM2Q1YWZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC53aGVuQWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5vbkFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgICAgICAgICAgICAgLndoZW5BY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjM2Q1YWZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5vbkFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShapeGeneratorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shape-generator',
                templateUrl: './shape-generator.component.html',
                styleUrls: ['./shape-generator.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "JzmT":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 9, vars: 0, consts: [[1, "flexbox"], [1, "header"], [1, "bi", "bi-search"], [1, "content"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Oops, looks like the page you are looking for does not exist.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Check if your website adress is correct.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".flexbox[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; align-items: center; margin-top: 100px; }", ".header[_ngcontent-%COMP%] { width: 100% }", "h1[_ngcontent-%COMP%] { text-align: center; }", ".content[_ngcontent-%COMP%] { width: 100%; text-align: center; margin-top: 50px; }", "span[_ngcontent-%COMP%] { font-weight: 600; width: 100%; display: inline-block; line-height: 1.6; font-size: 1.3em; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                template: `
    <div class="flexbox">
      <div class="header">
        <h1><i class="bi bi-search"></i></h1>
      </div>
      <div class="content">
        <span>Oops, looks like the page you are looking for does not exist.</span>
        <span>Check if your website adress is correct.</span>
      </div>
    </div>
  `,
                styles: [
                    '.flexbox { display: flex; flex-wrap: wrap; align-items: center; margin-top: 100px; }',
                    '.header { width: 100% }',
                    'h1 { text-align: center; }',
                    '.content { width: 100%; text-align: center; margin-top: 50px; }',
                    'span { font-weight: 600; width: 100%; display: inline-block; line-height: 1.6; font-size: 1.3em; }'
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Lft8":
/*!*******************************************************************************!*\
  !*** ./src/app/components/gradient-generator/gradient-generator.component.ts ***!
  \*******************************************************************************/
/*! exports provided: GradientGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientGeneratorComponent", function() { return GradientGeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class GradientGeneratorComponent {
    constructor() {
        this.width = 100;
        this.height = 75;
        this.background = 'green';
    }
    getGradient() {
        return {
            background: `${this.background}`
        };
    }
}
GradientGeneratorComponent.ɵfac = function GradientGeneratorComponent_Factory(t) { return new (t || GradientGeneratorComponent)(); };
GradientGeneratorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GradientGeneratorComponent, selectors: [["app-gradient-generator"]], decls: 20, vars: 0, consts: [[1, "container-fluid"], [1, "method"], ["routerLink", "/gradient-generator/linear", "routerLinkActive", "active"], [1, "nonActive"], [1, "bi", "bi-circle"], [1, "whenActive"], [1, "bi", "bi-circle-fill"], ["routerLink", "/gradient-generator/radial", "routerLinkActive", "active"]], template: function GradientGeneratorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Choose method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Linear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Radial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap\");\n.method[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.method[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: clamp(1.1em, 3vw, 1.3em);\n  color: #212121;\n}\n.method[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.method[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.method[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #212121;\n  font-weight: 500;\n  font-size: 1em;\n  display: inline-flex;\n  padding: 0.5em 1em 0.5em 1em;\n}\n.method[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-right: 0.5em;\n  font-size: 0.8em;\n}\n.method[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #3d5afe;\n}\n.method[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .whenActive[_ngcontent-%COMP%] {\n  display: none;\n}\n.method[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .nonActive[_ngcontent-%COMP%] {\n  display: block;\n}\n.method[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  transition: 1s;\n}\n.method[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .whenActive[_ngcontent-%COMP%] {\n  color: #3d5afe;\n  display: block;\n  transition: 1s;\n}\n.method[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .nonActive[_ngcontent-%COMP%] {\n  display: none;\n  transition: 1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dyYWRpZW50LWdlbmVyYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxnR0FBQTtBQUVSO0VBQ0ksbUJBQUE7QUFBSjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7QUFDUjtBQUNJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFDUjtBQUFRO0VBQ0ksb0JBQUE7QUFFWjtBQURZO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtBQUdoQjtBQUZnQjtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7QUFJcEI7QUFEWTtFQUNJLGNBQUE7QUFHaEI7QUFBUTtFQUNJLGFBQUE7QUFFWjtBQUFRO0VBQ0ksY0FBQTtBQUVaO0FBQVE7RUFDSSxjQUFBO0FBRVo7QUFEWTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUdoQjtBQURZO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFHaEIiLCJmaWxlIjoiZ3JhZGllbnQtZ2VuZXJhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VWJ1bnR1OndnaHRAMzAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLm1ldGhvZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgaDQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjFlbSwgM3Z3LCAxLjNlbSk7XHJcbiAgICAgICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gMWVtIDAuNWVtIDFlbTtcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzNkNWFmZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAud2hlbkFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ub25BY3RpdmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgICAgICAgICAud2hlbkFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzNkNWFmZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5vbkFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GradientGeneratorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gradient-generator',
                templateUrl: './gradient-generator.component.html',
                styleUrls: ['./gradient-generator.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "QhSr":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TypographyComponent {
    constructor() { }
    ngOnInit() {
    }
}
TypographyComponent.ɵfac = function TypographyComponent_Factory(t) { return new (t || TypographyComponent)(); };
TypographyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TypographyComponent, selectors: [["app-typography"]], decls: 45, vars: 0, consts: [[1, "information"], [1, "hammer"], [1, "fas", "fa-hammer"], [1, "container"], [1, "textarea"], [1, "content"], ["src", "https://www.shillingtoneducation.com/content-blog/uploads/2019/09/Typography_Anatomy.jpg", "alt", "Typography", 2, "width", "90%", "box-shadow", "1px 1px 3px grey"], [1, "settings"]], template: function TypographyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "In building");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "This is article header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "This is figcaption to typography header - Typography, 2021.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Chapter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Subchapter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "This is article content. Check quote below in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "blockquote element");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ", which consists of paragraph(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "<p>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, ") and footer(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "<footer>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "The greatest glory in living lies not in never falling, but in rising every time we fall.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Nelson Mandela");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "This is the second paragraph of article. The quick brown fox jumps over the lazy dog. Jived fox nymph grabs quick waltz. Glib jocks quiz nymph to vex dwarf. Sphinx of black quartz, judge my vow. How vexingly quick daft zebras jump! The five boxing wizards jump quickly. Jackdaws love my big sphinx of quartz. Pack my box with five dozen liquor jugs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "This is the third paragraph of article. The quick brown fox jumps over the lazy dog. Jived fox nymph grabs quick waltz. Glib jocks quiz nymph to vex dwarf. Sphinx of black quartz, judge my vow. How vexingly quick daft zebras jump! The five boxing wizards jump quickly. Jackdaws love my big sphinx of quartz. Pack my box with five dozen liquor jugs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".information[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100vw;\n  height: 110vh;\n  left: 0;\n  top: 0;\n  background: rgba(238, 238, 238, 0.8);\n  text-align: center;\n}\n.information[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n  position: relative;\n  color: #004d40;\n  top: 32%;\n  left: 5%;\n  text-shadow: 1px 1px 3px #757575;\n}\n.information[_ngcontent-%COMP%]   .hammer[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n  left: 5%;\n  top: 35%;\n  font-size: 2.8em;\n  color: #212121;\n  animation: rotation 1.5s infinite linear;\n  animation-direction: alternate;\n}\n.container[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n.textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: -20px;\n}\n.textarea[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  text-align: center;\n}\n@keyframes rotation {\n  0% {\n    transform: rotate(-90deg);\n  }\n  50% {\n    font-size: 3.5em;\n    color: #004d40;\n  }\n  100% {\n    transfrom: rotate(90deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3R5cG9ncmFwaHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHdDQUFBO0VBQ0EsOEJBQUE7QUFFUjtBQUVBO0VBQ0ksaUJBQUE7QUFDSjtBQUVBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0FBRVI7QUFFQTtFQUNJO0lBQ0kseUJBQUE7RUFDTjtFQUNFO0lBQ0ksZ0JBQUE7SUFDQSxjQUFBO0VBQ047RUFDRTtJQUNJLHdCQUFBO0VBQ047QUFDRiIsImZpbGUiOiJ0eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm9ybWF0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTEwdmg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzgsIDIzOCwgMjM4LCAwLjgpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGNvbG9yOiAjMDA0ZDQwO1xyXG4gICAgICAgIHRvcDogMzIlO1xyXG4gICAgICAgIGxlZnQ6IDUlO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCAjNzU3NTc1O1xyXG4gICAgfVxyXG4gICAgLmhhbW1lciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiA1JTtcclxuICAgICAgICB0b3A6IDM1JTtcclxuICAgICAgICBmb250LXNpemU6IDIuOGVtO1xyXG4gICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICAgIGFuaW1hdGlvbjogcm90YXRpb24gMS41cyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG4udGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIGZpZ3VyZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBmb250LXNpemU6IDMuNWVtO1xyXG4gICAgICAgIGNvbG9yOiAjMDA0ZDQwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmcm9tOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypographyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-typography',
                templateUrl: './typography.component.html',
                styleUrls: ['./typography.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SRUi":
/*!*******************************************************************!*\
  !*** ./src/app/components/gradient-generator/services/service.ts ***!
  \*******************************************************************/
/*! exports provided: ColorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsService", function() { return ColorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ColorsService {
    constructor() {
        this.colors = [];
        this.count = 0;
    }
    addColor(colorName) {
        this.colors.push({
            name: colorName,
            percentage: 100
        });
    }
    deleteColor(index) {
        this.colors.splice(index, 1);
    }
}
ColorsService.ɵfac = function ColorsService_Factory(t) { return new (t || ColorsService)(); };
ColorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ColorsService, factory: ColorsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a0) { return { "active": a0 }; };
class AppComponent {
    constructor() {
        this.title = 'angularapp';
        this.toggle = true;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 7, consts: [[1, "overflow-hidden"], [1, "flexbox"], [1, "side"], [3, "toggler"], [1, "container-fluid", 3, "ngClass"], [1, "row", "col-12"], [1, "toggler", 3, "ngClass", "click"], [1, "waves-effect", "waves-light", "btn"], [1, "fas", "fa-bars"], [1, "container"], [1, "router"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_6_listener() { return ctx.toggle = !ctx.toggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toggler", ctx.toggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.toggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.toggle));
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n.flexbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: flex-start;\n}\n.flexbox[_ngcontent-%COMP%]   .side[_ngcontent-%COMP%] {\n  height: 100%;\n  position: fixed;\n  z-index: 3;\n}\n.flexbox[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  transition: 1s;\n  height: auto;\n  z-index: 2;\n}\n.flexbox[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  margin: -5px 0 0 0px;\n}\n.flexbox[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: linear-gradient(171deg, #004d40 0%, #00796b 30%, #00796b 70%, #009688);\n  color: #eeeeee;\n  font-weight: 400;\n  font-family: \"Poppins\", sans-serif;\n  padding-right: 1.4em;\n  padding-left: 1.4em;\n  box-shadow: 3px 3px 10px -2px #212121;\n  font-size: clamp(0.8rem, 1vw, 0.9rem);\n}\n.flexbox[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 1em;\n}\n.flexbox[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .router[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  color: #212121;\n  margin-top: 50px;\n}\n.flexbox[_ngcontent-%COMP%]   .container-fluid.active[_ngcontent-%COMP%] {\n  transition: 1s;\n}\n@media only screen and (min-width: 1200px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    margin-left: 17vw;\n  }\n\n  .container-fluid.active[_ngcontent-%COMP%] {\n    margin-left: 4vw;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    margin-left: 18vw;\n  }\n\n  .container-fluid.active[_ngcontent-%COMP%] {\n    margin-left: 5vw;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    margin-left: 25vw;\n  }\n\n  .container-fluid.active[_ngcontent-%COMP%] {\n    margin-left: 8vw;\n  }\n}\n@media only screen and (min-width: 480px) and (max-width: 768px) {\n  ul[_ngcontent-%COMP%] {\n    margin-top: 0px;\n  }\n\n  .container-fluid[_ngcontent-%COMP%] {\n    margin-left: 30vw;\n  }\n\n  .container-fluid.active[_ngcontent-%COMP%] {\n    margin-left: 10vw;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    margin-left: 40vw;\n  }\n\n  .container-fluid.active[_ngcontent-%COMP%] {\n    margin-left: 13vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx3SEFBQTtBQUNBLHFIQUFBO0FBTVI7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFKSjtBQUtJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBSFI7QUFLSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBSFI7QUFJUTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFGWjtBQUdZO0VBQ0ksa0ZBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0FBRGhCO0FBR1k7RUFDSSxpQkFBQTtBQURoQjtBQUlRO0VBQ0ksa0NBcENGO0VBcUNFLGNBbkNKO0VBb0NJLGdCQUFBO0FBRlo7QUFLSTtFQUNJLGNBQUE7QUFIUjtBQU9BO0VBQ0k7SUFDSSxpQkFBQTtFQUpOOztFQU1FO0lBQ0ksZ0JBQUE7RUFITjtBQUNGO0FBTUE7RUFDSTtJQUNJLGlCQUFBO0VBSk47O0VBTUU7SUFDSSxnQkFBQTtFQUhOO0FBQ0Y7QUFNQTtFQUNJO0lBQ0ksaUJBQUE7RUFKTjs7RUFNRTtJQUNJLGdCQUFBO0VBSE47QUFDRjtBQU1BO0VBQ0k7SUFDSSxlQUFBO0VBSk47O0VBTUU7SUFDSSxpQkFBQTtFQUhOOztFQUtFO0lBQ0ksaUJBQUE7RUFGTjtBQUNGO0FBS0E7RUFDSTtJQUNJLGlCQUFBO0VBSE47O0VBS0U7SUFDSSxpQkFBQTtFQUZOO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xuXG4kcG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuJG1vbnRzZXJyYXQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiRibGFjazogIzIxMjEyMTtcblxuLmZsZXhib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICAuc2lkZSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiAzO1xuICAgIH1cbiAgICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgIHRyYW5zaXRpb246IDFzO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIC50b2dnbGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgICBtYXJnaW46IC01cHggMCAwIDBweDtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNzFkZWcsIHJnYmEoMCw3Nyw2NCwxKSAwJSwgcmdiYSgwLDEyMSwxMDcsMSkgMzAlLCByZ2JhKDAsMTIxLDEwNywxKSA3MCUsIHJnYmEoMCwxNTAsMTM2LDEpKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2VlZWVlZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMS40ZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjRlbTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggLTJweCAkYmxhY2s7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDF2dywgMC45cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5yb3V0ZXIge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xuICAgICAgICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNvbnRhaW5lci1mbHVpZC5hY3RpdmUge1xuICAgICAgICB0cmFuc2l0aW9uOiAxcztcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgLmNvbnRhaW5lci1mbHVpZCB7IFxuICAgICAgICBtYXJnaW4tbGVmdDogMTd2dztcbiAgICB9XG4gICAgLmNvbnRhaW5lci1mbHVpZC5hY3RpdmUge1xuICAgICAgICBtYXJnaW4tbGVmdDogNHZ3O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIC5jb250YWluZXItZmx1aWQgeyBcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4dnc7XG4gICAgfVxuICAgIC5jb250YWluZXItZmx1aWQuYWN0aXZlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIC5jb250YWluZXItZmx1aWQgeyBcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1dnc7XG4gICAgfVxuICAgIC5jb250YWluZXItZmx1aWQuYWN0aXZlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDh2dztcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHVsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIH1cbiAgICAuY29udGFpbmVyLWZsdWlkIHsgXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHZ3O1xuICAgIH1cbiAgICAuY29udGFpbmVyLWZsdWlkLmFjdGl2ZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5jb250YWluZXItZmx1aWQgeyBcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwdnc7XG4gICAgfVxuICAgIC5jb250YWluZXItZmx1aWQuYWN0aXZlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEzdnc7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "WRw1":
/*!***************************************************************************!*\
  !*** ./src/app/components/banner-generator/banner-generator.component.ts ***!
  \***************************************************************************/
/*! exports provided: BannerGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerGeneratorComponent", function() { return BannerGeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/fonts */ "0RZE");
/* harmony import */ var _assets_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/colors */ "xaDe");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-to-image */ "cLAn");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function BannerGeneratorComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerGeneratorComponent_div_27_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const c_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.color1 = c_r6; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", c_r6);
} }
function BannerGeneratorComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerGeneratorComponent_div_41_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const c_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.color2 = c_r9; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", c_r9);
} }
function BannerGeneratorComponent_option_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-family", f_r12.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r12.name);
} }
function BannerGeneratorComponent_ng_container_55_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r14);
} }
function BannerGeneratorComponent_ng_container_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BannerGeneratorComponent_ng_container_55_option_1_Template, 2, 1, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.fonts[ctx_r4.id - 1].weights);
} }
function BannerGeneratorComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerGeneratorComponent_div_66_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const c_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.fontColor = c_r15; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", c_r15);
} }
const _c0 = function (a0) { return { "activated": a0 }; };
class BannerGeneratorComponent {
    constructor() {
        //Width and height
        this.width = 500;
        this.height = 400;
        //Colors variables
        this.color1 = '#b71c1c';
        this.percentage1 = 0;
        this.color2 = '#f44336';
        this.percentage2 = 100;
        this.colors = _assets_colors__WEBPACK_IMPORTED_MODULE_2__["COLORS"];
        this.colorsToggler = true;
        this.colorsToggler2 = true;
        this.fontSize = 24;
        this.fontColor = '#eeeeee';
        this.fonts = _assets_fonts__WEBPACK_IMPORTED_MODULE_1__["FONTS"];
        this.fontColors = _assets_colors__WEBPACK_IMPORTED_MODULE_2__["FONTCOLORS"];
        this.fontColorToggler = true;
    }
    //Methods
    getBannerStyles() {
        return {
            width: `${this.width}px`,
            height: `${this.height}px`,
            fontFamily: `${this.font}`,
            fontSize: `${this.fontSize}px`,
            fontWeight: `${this.fontWeight}`,
            backgroundImage: `linear-gradient(to bottom, ${this.color1} ${this.percentage1}%, ${this.color2} ${this.percentage2}%)`,
            color: `${this.fontColor}`
        };
    }
    saveImage(element) {
        dom_to_image__WEBPACK_IMPORTED_MODULE_4___default.a.toBlob(element).then(blob => Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(blob));
    }
    ngDoCheck() {
        if (this.font) {
            this.id = this.fonts.find(f => f.name === this.font).id;
        }
    }
}
BannerGeneratorComponent.ɵfac = function BannerGeneratorComponent_Factory(t) { return new (t || BannerGeneratorComponent)(); };
BannerGeneratorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerGeneratorComponent, selectors: [["app-banner-generator"]], decls: 74, vars: 40, consts: [[1, "container-fluid"], [1, "banner"], [1, "content", 3, "ngStyle"], ["banner", ""], ["contenteditable", "true"], [1, "settings"], ["for", "customRange2", 1, "form-label"], ["type", "range", "min", "100", "max", "1000", "step", "20", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], [1, "colorsSection"], [1, "colorsLabel"], [1, "form-label"], [1, "colorToggler"], [1, "button", 3, "ngClass"], [1, "waves-effect", "waves-light", 3, "click"], [1, "fas", "fa-arrow-alt-circle-up"], [1, "colorsContainer", 3, "ngClass"], ["type", "range", "min", "0", "max", "100", "step", "1", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], [1, "colors"], ["class", "color", 3, "background", "click", 4, "ngFor", "ngForOf"], [1, "colorsLabel", 2, "padding-top", "20px"], [1, "fontSection", 2, "border-top", "2px dashed #e0e0e0", "margin-top", "20px"], ["for", "customRange2", 1, "form-label", 2, "margin-top", "20px"], ["type", "range", "min", "2", "max", "72", "step", "2", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], [1, "form-group"], ["for", "sel1"], ["id", "sel1", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "fontFamily", 4, "ngFor", "ngForOf"], ["id", "sel1", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], [4, "ngIf"], [1, "download"], [1, "waves-effect", "waves-light", "btn", 3, "click"], [1, "fas", "fa-download"], [1, "color", 3, "click"], [4, "ngFor", "ngForOf"]], template: function BannerGeneratorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tu wpisz sw\u00F3j tekst");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BannerGeneratorComponent_Template_input_ngModelChange_9_listener($event) { return ctx.width = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BannerGeneratorComponent_Template_input_ngModelChange_12_listener($event) { return ctx.height = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerGeneratorComponent_Template_a_click_20_listener() { return ctx.colorsToggler = !ctx.colorsToggler; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BannerGeneratorComponent_Template_input_ngModelChange_25_listener($event) { return ctx.percentage1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, BannerGeneratorComponent_div_27_Template, 1, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerGeneratorComponent_Template_a_click_34_listener() { return ctx.colorsToggler2 = !ctx.colorsToggler2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BannerGeneratorComponent_Template_input_ngModelChange_39_listener($event) { return ctx.percentage2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, BannerGeneratorComponent_div_41_Template, 1, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BannerGeneratorComponent_Template_input_ngModelChange_45_listener($event) { return ctx.fontSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Font-family: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BannerGeneratorComponent_Template_select_ngModelChange_49_listener($event) { return ctx.font = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, BannerGeneratorComponent_option_50_Template, 2, 3, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Font-weight:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BannerGeneratorComponent_Template_select_ngModelChange_54_listener($event) { return ctx.fontWeight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, BannerGeneratorComponent_ng_container_55_Template, 2, 1, "ng-container", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerGeneratorComponent_Template_a_click_62_listener() { return ctx.fontColorToggler = !ctx.fontColorToggler; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, BannerGeneratorComponent_div_66_Template, 1, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Click below to download your banner!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerGeneratorComponent_Template_a_click_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.saveImage(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.getBannerStyles());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Width: ", ctx.width, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Height: ", ctx.height, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Color 1: ", ctx.color1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.colorsToggler));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, ctx.colorsToggler));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Color 1 percentage: ", ctx.percentage1, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.percentage1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Color 2: ", ctx.color2, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c0, ctx.colorsToggler2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c0, ctx.colorsToggler2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Color 2 percentage: ", ctx.percentage2, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.percentage2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Font size: ", ctx.fontSize, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fontSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.font);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fonts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fontWeight)("disabled", !ctx.font);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Font color: ", ctx.fontColor, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c0, ctx.fontColorToggler));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c0, ctx.fontColorToggler));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fontColors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Bitter:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap\");\n.container-fluid[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 50px;\n}\n.container-fluid[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.container-fluid[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: table;\n  margin: 0 auto;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%] {\n  margin-top: -20px;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 500;\n  margin-bottom: 0px;\n  color: #616161;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  font-weight: 500;\n  margin-bottom: 0px;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .colorsLabel[_ngcontent-%COMP%]   .colorToggler[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 500;\n  padding: 0.2em 0em 0.2em 0.4em;\n  color: #9e9e9e;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .colorsLabel[_ngcontent-%COMP%]   .colorToggler[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  font-size: 1.1em;\n  transition: 0.8s;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .colorsLabel[_ngcontent-%COMP%]   .colorToggler[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #3d5afe;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .colorsLabel[_ngcontent-%COMP%]   .colorToggler[_ngcontent-%COMP%]   .activated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  transition: 0.8s;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .colorsContainer[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .colorsContainer[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]:hover {\n  transform: scale(2, 2);\n  transition: 0.4s;\n  box-shadow: 0px 0px 8px #424242;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .colorsContainer[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  max-width: 90%;\n  margin-left: 15px;\n  margin-right: auto;\n  color: #212121;\n  font-weight: 700;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .colorsContainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  max-width: 90%;\n  margin-left: 15px;\n  margin-right: auto;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .activated[_ngcontent-%COMP%] {\n  display: none;\n}\n.container-fluid[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  margin-bottom: 20px;\n  text-align: center;\n  border-top: 2px dashed #bdbdbd;\n}\n.container-fluid[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: clamp(1.1em, 3vw, 1.3em);\n  padding-top: 30px;\n  margin-bottom: 20px;\n  color: #212121;\n}\n.container-fluid[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: linear-gradient(171deg, #004d40 0%, #00796b 30%, #00796b 70%, #009688);\n  color: #eeeeee;\n  font-weight: 400;\n  font-family: \"Poppins\", sans-serif;\n  padding-right: 1.4em;\n  padding-left: 1.4em;\n  box-shadow: 3px 3px 10px -2px #212121;\n  font-size: clamp(0.8rem, 1vw, 0.9rem);\n}\n.container-fluid[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 1em;\n}\n@media only screen and (min-width: 992px) {\n  .colors[_ngcontent-%COMP%] {\n    width: 94%;\n  }\n  .colors[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n    margin: 3px;\n  }\n}\n@media only screen and (max-width: 992px) {\n  .container-fluid[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    margin: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Jhbm5lci1nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsd0dBQUE7QUFDQSx1R0FBQTtBQUNBLGtHQUFBO0FBQ0EsZ0dBQUE7QUFDQSxzR0FBQTtBQUNBLGdIQUFBO0FBQ0Esa0hBQUE7QUFDQSw4RkFBQTtBQUNBLG9IQUFBO0FBQ0Esc0ZBQUE7QUFHSjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRFI7QUFFUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBWjtBQUNZO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFDaEI7QUFHSTtFQUNJLGlCQUFBO0FBRFI7QUFFUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFBWjtBQUVRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQVo7QUFDWTtFQUNJLGdCQUFBO0FBQ2hCO0FBRVE7RUFDSSxlQUFBO0FBQVo7QUFHWTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFEWjtBQUVnQjtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFwQjtBQUNvQjtFQUNJLGNBQUE7QUFDeEI7QUFFZ0I7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FBQXBCO0FBS1k7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQUhoQjtBQUlnQjtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQUZwQjtBQUtZO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUhoQjtBQUtZO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFIaEI7QUFNUTtFQUNJLGFBQUE7QUFKWjtBQU9JO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFMUjtBQU1RO0VBQ0ksZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSlo7QUFNUTtFQUNJLGtGQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtBQUpaO0FBTVE7RUFBTyxpQkFBQTtBQUhmO0FBT0E7RUFDSTtJQUNJLFVBQUE7RUFKTjtFQUtNO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VBSFY7QUFDRjtBQU9BO0VBRVE7SUFDSSxXQUFBO0VBTlY7RUFPVTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQUxkO0FBQ0YiLCJmaWxlIjoiYmFubmVyLWdlbmVyYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwOzUwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRAMTAwOzMwMDs0MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VWJ1bnR1OndnaHRAMzAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJyaXdlYXRoZXI6d2dodEAzMDA7NDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvcm1vcmFudCtHYXJhbW9uZDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6d2dodEA0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9yYTp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Qml0dGVyOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFydm86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAuYmFubmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2V0dGluZ3Mge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgICAgIC5mb3JtLWxhYmVsLCBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICM2MTYxNjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIG9wdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sb3JzTGFiZWwge1xyXG4gICAgICAgICAgICAuY29sb3JUb2dnbGVyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4yZW0gMGVtIDAuMmVtIDAuNGVtO1xyXG4gICAgICAgICAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgICAgICAgICAgICAgIC5idXR0b24geyBcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuOHM7XHJcbiAgICAgICAgICAgICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjM2Q1YWZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hY3RpdmF0ZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC44cztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sb3JzQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgLmNvbG9ycyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgLmNvbG9yOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIsIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggIzQyNDI0MjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3RpdmF0ZWQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kb3dubG9hZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItdG9wOiAycHggZGFzaGVkICNiZGJkYmQ7XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IGNsYW1wKDEuMWVtLCAzdncsIDEuM2VtKTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE3MWRlZywgcmdiYSgwLDc3LDY0LDEpIDAlLCByZ2JhKDAsMTIxLDEwNywxKSAzMCUsIHJnYmEoMCwxMjEsMTA3LDEpIDcwJSwgcmdiYSgwLDE1MCwxMzYsMSkpO1xyXG4gICAgICAgICAgICBjb2xvcjogI2VlZWVlZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMS40ZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMS40ZW07XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCAtMnB4ICMyMTIxMjE7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAxdncsIDAuOXJlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4geyBwYWRkaW5nLWxlZnQ6IDFlbTsgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuY29sb3JzIHtcclxuICAgICAgICB3aWR0aDogOTQlO1xyXG4gICAgICAgIC5jb2xvciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgICAgLmNvbG9ycyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAuY29sb3Ige1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerGeneratorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner-generator',
                templateUrl: './banner-generator.component.html',
                styleUrls: ['./banner-generator.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_shape_generator_shape_generator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shape-generator/shape-generator.component */ "I2xi");
/* harmony import */ var _components_gradient_generator_gradient_generator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/gradient-generator/gradient-generator.component */ "Lft8");
/* harmony import */ var _components_banner_generator_banner_generator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/banner-generator/banner-generator.component */ "WRw1");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "JzmT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_shape_generator_circle_shapes_circle_shapes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/shape-generator/circle-shapes/circle-shapes.component */ "fw4J");
/* harmony import */ var _components_shape_generator_triangle_shapes_triangle_shapes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/shape-generator/triangle-shapes/triangle-shapes.component */ "qa4/");
/* harmony import */ var _components_shape_generator_quadrangle_shapes_quadrangle_shapes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/shape-generator/quadrangle-shapes/quadrangle-shapes.component */ "kno3");
/* harmony import */ var _components_gradient_generator_linear_linear_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/gradient-generator/linear/linear.component */ "HTQA");
/* harmony import */ var _components_gradient_generator_radial_radial_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/gradient-generator/radial/radial.component */ "iOlF");
/* harmony import */ var _components_typography_typography_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/typography/typography.component */ "QhSr");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _components_shape_generator_shape_generator_component__WEBPACK_IMPORTED_MODULE_7__["ShapeGeneratorComponent"],
        _components_gradient_generator_gradient_generator_component__WEBPACK_IMPORTED_MODULE_8__["GradientGeneratorComponent"],
        _components_banner_generator_banner_generator_component__WEBPACK_IMPORTED_MODULE_9__["BannerGeneratorComponent"],
        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
        _components_shape_generator_circle_shapes_circle_shapes_component__WEBPACK_IMPORTED_MODULE_12__["CircleShapesComponent"],
        _components_shape_generator_triangle_shapes_triangle_shapes_component__WEBPACK_IMPORTED_MODULE_13__["TriangleShapesComponent"],
        _components_shape_generator_quadrangle_shapes_quadrangle_shapes_component__WEBPACK_IMPORTED_MODULE_14__["QuadrangleShapesComponent"],
        _components_gradient_generator_linear_linear_component__WEBPACK_IMPORTED_MODULE_15__["LinearComponent"],
        _components_gradient_generator_radial_radial_component__WEBPACK_IMPORTED_MODULE_16__["RadialComponent"],
        _components_typography_typography_component__WEBPACK_IMPORTED_MODULE_17__["TypographyComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _components_shape_generator_shape_generator_component__WEBPACK_IMPORTED_MODULE_7__["ShapeGeneratorComponent"],
                    _components_gradient_generator_gradient_generator_component__WEBPACK_IMPORTED_MODULE_8__["GradientGeneratorComponent"],
                    _components_banner_generator_banner_generator_component__WEBPACK_IMPORTED_MODULE_9__["BannerGeneratorComponent"],
                    _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                    _components_shape_generator_circle_shapes_circle_shapes_component__WEBPACK_IMPORTED_MODULE_12__["CircleShapesComponent"],
                    _components_shape_generator_triangle_shapes_triangle_shapes_component__WEBPACK_IMPORTED_MODULE_13__["TriangleShapesComponent"],
                    _components_shape_generator_quadrangle_shapes_quadrangle_shapes_component__WEBPACK_IMPORTED_MODULE_14__["QuadrangleShapesComponent"],
                    _components_gradient_generator_linear_linear_component__WEBPACK_IMPORTED_MODULE_15__["LinearComponent"],
                    _components_gradient_generator_radial_radial_component__WEBPACK_IMPORTED_MODULE_16__["RadialComponent"],
                    _components_typography_typography_component__WEBPACK_IMPORTED_MODULE_17__["TypographyComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fw4J":
/*!*************************************************************************************!*\
  !*** ./src/app/components/shape-generator/circle-shapes/circle-shapes.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CircleShapesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleShapesComponent", function() { return CircleShapesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/colors */ "xaDe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function CircleShapesComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CircleShapesComponent_div_27_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const c_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.background = c_r3; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", c_r3);
} }
function CircleShapesComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CircleShapesComponent_div_76_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const c_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.shadowColor = c_r6; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", c_r6);
} }
const _c0 = function (a0) { return { "activated": a0 }; };
const _c1 = function (a0) { return { "basicsHide": a0 }; };
const _c2 = function (a0) { return { "basicsColorsHide": a0 }; };
const _c3 = function (a0) { return { "bordersHide": a0 }; };
const _c4 = function (a0) { return { "boxshadowHide": a0 }; };
const _c5 = function (a0) { return { "shadowColorHide": a0 }; };
const _c6 = function (a0) { return { "transformHide": a0 }; };
class CircleShapesComponent {
    constructor() {
        //Basics
        this.background = '#3d5afe';
        this.width = 250;
        this.height = 250;
        this.colors = _assets_colors__WEBPACK_IMPORTED_MODULE_1__["COLORS"];
        //Shape ranges
        this.topLeftRadius = 100;
        this.topRightRadius = 100;
        this.bottomRightRadius = 100;
        this.bottomLeftRadius = 0;
        //Boxshadow ranges
        this.verticalOffset = 0;
        this.horizontalOffset = 0;
        this.blur = 0;
        this.spread = 0;
        this.shadowColor = '#9e9e9e';
        //Transform
        this.rotate = 0;
        this.skewX = 0;
        this.skewY = 0;
        //togglers
        this.bordersToggle = true;
        this.boxshadowToggle = true;
        this.basicsToggle = true;
        this.basicsColorsToggle = true;
        this.shadowColorToggle = true;
        this.transformToggle = true;
    }
    getShape() {
        return {
            width: `${this.width}px`,
            height: `${this.height}px`,
            background: `${this.background}`,
            borderRadius: `${this.topLeftRadius}px ${this.topRightRadius}px ${this.bottomRightRadius}px ${this.bottomLeftRadius}px`,
            boxShadow: `${this.horizontalOffset}px ${this.verticalOffset}px ${this.blur}px ${this.spread}px ${this.shadowColor}`,
            transform: `rotate(${this.rotate}deg) skewX(${this.skewX}deg) skewY(${this.skewY}deg)`
        };
    }
}
CircleShapesComponent.ɵfac = function CircleShapesComponent_Factory(t) { return new (t || CircleShapesComponent)(); };
CircleShapesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CircleShapesComponent, selectors: [["app-circle-shapes"]], decls: 129, vars: 81, consts: [[1, "container-fluid"], [1, "shape"], [1, "content", 3, "ngStyle"], ["shape", ""], [1, "settings"], [1, "toggler"], [1, "button", 3, "ngClass"], [1, "waves-effect", "waves-light", 3, "click"], [1, "fas", "fa-arrow-alt-circle-up"], [1, "basics", 3, "ngClass"], ["for", "customRange2", 1, "form-label", 2, "margin-top", "15px"], ["type", "range", "min", "0", "max", "1000", "step", "20", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], ["for", "customRange2", 1, "form-label"], [1, "colors", 3, "ngClass"], ["class", "color", 3, "background", "click", 4, "ngFor", "ngForOf"], [1, "borders", 3, "ngClass"], ["type", "range", "min", "0", "max", "1000", "step", "1", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], [1, "boxshadow", 3, "ngClass"], ["type", "range", "min", "-200", "max", "200", "step", "2", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "0", "max", "200", "step", "1", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "0", "max", "50", "step", "1", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "-50", "max", "50", "step", "1", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "0", "max", "360", "step", "1", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "-90", "max", "90", "step", "1", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], [1, "code"], [1, "dot"], [1, "className"], [1, "property"], [1, "color", 3, "click"]], template: function CircleShapesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Basics:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CircleShapesComponent_Template_a_click_10_listener() { return ctx.basicsToggle = !ctx.basicsToggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CircleShapesComponent_Template_input_ngModelChange_15_listener($event) { return ctx.width = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CircleShapesComponent_Template_input_ngModelChange_18_listener($event) { return ctx.height = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Background color:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CircleShapesComponent_Template_a_click_24_listener() { return ctx.basicsColorsToggle = !ctx.basicsColorsToggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CircleShapesComponent_div_27_Template, 1, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Border-radius");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CircleShapesComponent_Template_a_click_33_listener() { return ctx.bordersToggle = !ctx.bordersToggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CircleShapesComponent_Template_input_ngModelChange_38_listener($event) { return ctx.topLeftRadius = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CircleShapesComponent_Template_input_ngModelChange_41_listener($event) { return ctx.topRightRadius = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CircleShapesComponent_Template_input_ngModelChange_44_listener($event) { return ctx.bottomRightRadius = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CircleShapesComponent_Template_input_ngModelChange_47_listener($event) { return ctx.bottomLeftRadius = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Box shadow:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CircleShapesComponent_Template_a_click_53_listener() { return ctx.boxshadowToggle = !ctx.boxshadowToggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CircleShapesComponent_Template_input_ngModelChange_58_listener($event) { return ctx.horizontalOffset = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CircleShapesComponent_Template_input_ngModelChange_61_listener($event) { return ctx.verticalOffset = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CircleShapesComponent_Template_input_ngModelChange_64_listener($event) { return ctx.blur = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CircleShapesComponent_Template_input_ngModelChange_67_listener($event) { return ctx.spread = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CircleShapesComponent_Template_a_click_73_listener() { return ctx.shadowColorToggle = !ctx.shadowColorToggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, CircleShapesComponent_div_76_Template, 1, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Transform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CircleShapesComponent_Template_a_click_82_listener() { return ctx.transformToggle = !ctx.transformToggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CircleShapesComponent_Template_input_ngModelChange_87_listener($event) { return ctx.rotate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CircleShapesComponent_Template_input_ngModelChange_90_listener($event) { return ctx.skewX = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CircleShapesComponent_Template_input_ngModelChange_93_listener($event) { return ctx.skewY = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Your code:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "shape");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " { ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "background: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "width: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "height: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "border-radius: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "box-shadow: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "transform: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " } ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.getShape());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](57, _c0, ctx.basicsToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](59, _c1, ctx.basicsToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Width: ", ctx.width, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Height: ", ctx.height, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](61, _c0, ctx.basicsColorsToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](63, _c2, ctx.basicsColorsToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](65, _c0, ctx.bordersToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](67, _c3, ctx.bordersToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Top-left: ", ctx.topLeftRadius, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.topLeftRadius);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Top-right: ", ctx.topRightRadius, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.topRightRadius);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bottom-right: ", ctx.bottomRightRadius, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bottomRightRadius);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bottom-left: ", ctx.bottomLeftRadius, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bottomLeftRadius);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](69, _c0, ctx.boxshadowToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](71, _c4, ctx.boxshadowToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Horizontal offset: ", ctx.horizontalOffset, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.horizontalOffset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Vertical offset: ", ctx.verticalOffset, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.verticalOffset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Blur: ", ctx.blur, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.blur);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Spread: ", ctx.spread, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.spread);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Box-shadow color: ", ctx.shadowColor, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](73, _c0, ctx.shadowColorToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](75, _c5, ctx.shadowColorToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](77, _c0, ctx.transformToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](79, _c6, ctx.transformToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rotate: ", ctx.rotate, "deg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rotate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("SkewX: ", ctx.skewX, "deg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.skewX);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("SkewY: ", ctx.skewY, "deg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.skewY);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.background, "px; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.width, "px; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.height, "px; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", ctx.topLeftRadius, "px ", ctx.topRightRadius, "px ", ctx.bottomRightRadius, "px ", ctx.bottomLeftRadius, "px; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"]("", ctx.horizontalOffset, "px ", ctx.verticalOffset, "px ", ctx.blur, "px ", ctx.spread, "px ", ctx.shadowColor, "; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("rotate(", ctx.rotate, "deg) skewX(", ctx.skewX, "deg) skewY(", ctx.skewY, "deg); ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".container-fluid[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  max-width: 100%;\n  margin-bottom: 50px;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 500;\n  margin-bottom: 0px;\n  color: #616161;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: 500;\n  margin-bottom: 0px;\n  color: #616161;\n  border-top: 2px dashed #e0e0e0;\n  margin-top: 20px;\n  padding-top: 25px;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 500;\n  margin-bottom: 0px;\n  color: #616161;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 500;\n  padding: 0.2em 0em 0.2em 0.4em;\n  color: #9e9e9e;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  font-size: 1.1em;\n  transition: 0.8s;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #3d5afe;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]   .activated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  transition: 0.8s;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]:hover {\n  transform: scale(2, 2);\n  transition: 0.4s;\n  box-shadow: 0px 0px 8px #424242;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .bordersHide[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .boxshadowHide[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .basicsHide[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .basicsColorsHide[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .shadowColorHide[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .transformHide[_ngcontent-%COMP%] {\n  display: none;\n}\n.container-fluid[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%] {\n  background-color: #212121;\n  border-radius: 10px;\n  padding: 1.5em;\n  margin-bottom: 2em;\n  color: #eeeeee;\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: 500;\n}\n.container-fluid[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  color: #64b5f6;\n}\n.container-fluid[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]   .className[_ngcontent-%COMP%] {\n  color: #ff9100;\n  padding-right: 0.5em;\n}\n.container-fluid[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]   .property[_ngcontent-%COMP%] {\n  color: #f48fb1;\n  padding: 0.1em 0.3em 0.1em 1.5em;\n}\n.container-fluid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: clamp(1.1em, 3vw, 1.3em);\n  margin-top: 40px;\n  padding-top: 40px;\n  margin-bottom: 10px;\n  border-top: 2px dashed #bdbdbd;\n  color: #212121;\n}\n@media only screen and (min-width: 992px) {\n  .colors[_ngcontent-%COMP%] {\n    width: 96%;\n  }\n  .colors[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n    margin: 3px;\n  }\n}\n@media only screen and (max-width: 992px) {\n  .colors[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .colors[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    margin: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NpcmNsZS1zaGFwZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFISjtBQVFJO0VBQ0ksaUJBQUE7QUFOUjtBQU9RO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUxaO0FBT1E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFMWjtBQU9RO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUxaO0FBT1E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBTFo7QUFNZ0I7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFKcEI7QUFLb0I7RUFDSSxjQUFBO0FBSHhCO0FBTWdCO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUpwQjtBQU9RO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFMWjtBQU1ZO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBSmhCO0FBT1E7RUFDSSxhQUFBO0FBTFo7QUFXSTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQVRSO0FBVVE7RUFDSSxjQUFBO0FBUlo7QUFVUTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtBQVJaO0FBVVE7RUFDSSxjQUFBO0VBQ0EsZ0NBQUE7QUFSWjtBQVdJO0VBQ0ksZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQVRSO0FBYUE7RUFDSTtJQUNJLFVBQUE7RUFWTjtFQVdNO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VBVFY7QUFDRjtBQWFBO0VBQ0k7SUFDSSxXQUFBO0VBWE47RUFZTTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQVZWO0FBQ0YiLCJmaWxlIjoiY2lyY2xlLXNoYXBlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG5cclxuICAgIC8vIFNIQVBFIFxyXG5cclxuICAgIC5zaGFwZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8vU0VUVElOR1MgXHJcblxyXG4gICAgLnNldHRpbmdzIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgICAgICAuZm9ybS1sYWJlbCwgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjE2MTYxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjE2MTYxO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAycHggZGFzaGVkICNlMGUwZTA7IFxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4OyBcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzYxNjE2MTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvZ2dsZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjJlbSAwZW0gMC4yZW0gMC40ZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgICAgICAgICAgICAgLmJ1dHRvbiB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC44cztcclxuICAgICAgICAgICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzZDVhZmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFjdGl2YXRlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjhzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sb3JzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAuY29sb3I6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyLCAyKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAjNDI0MjQyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3JkZXJzSGlkZSwgLmJveHNoYWRvd0hpZGUsIC5iYXNpY3NIaWRlLCAuYmFzaWNzQ29sb3JzSGlkZSwgLnNoYWRvd0NvbG9ySGlkZSwgLnRyYW5zZm9ybUhpZGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL0NPREVcclxuXHJcbiAgICAuY29kZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNWVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgICAgICBjb2xvcjogI2VlZWVlZTtcclxuICAgICAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAuZG90IHtcclxuICAgICAgICAgICAgY29sb3I6ICM2NGI1ZjY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jbGFzc05hbWUge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmOTEwMDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMC41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9wZXJ0eSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjQ4ZmIxO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjFlbSAwLjNlbSAwLjFlbSAxLjVlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDEuMWVtLCAzdncsIDEuM2VtKTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMnB4IGRhc2hlZCAjYmRiZGJkO1xyXG4gICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuY29sb3JzIHtcclxuICAgICAgICB3aWR0aDogOTYlO1xyXG4gICAgICAgIC5jb2xvciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmNvbG9ycyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLmNvbG9yIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CircleShapesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-circle-shapes',
                templateUrl: './circle-shapes.component.html',
                styleUrls: ['./circle-shapes.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "iOlF":
/*!**************************************************************************!*\
  !*** ./src/app/components/gradient-generator/radial/radial.component.ts ***!
  \**************************************************************************/
/*! exports provided: RadialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadialComponent", function() { return RadialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/service */ "SRUi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





const _c0 = function (a0) { return { "background": a0 }; };
function RadialComponent_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RadialComponent_ng_container_39_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.colors[i_r4].name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RadialComponent_ng_container_39_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.colors[i_r4].percentage = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RadialComponent_ng_container_39_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.delete(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, i_r4 % 2 === 0 ? "#ececec" : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4 + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", c_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.colors[i_r4].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", ctx_r1.initialColors[1].percentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", c_r3.percentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.colors[i_r4].percentage);
} }
function RadialComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RadialComponent_div_68_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.rotation = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.rotation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.getGradient());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.rotation);
} }
const _c1 = function (a0) { return { "disabled": a0 }; };
class RadialComponent {
    constructor(colorsService) {
        this.colorsService = colorsService;
        this.colors = this.colorsService.colors;
        this.initialColors = [
            { name: '#ff7b00', percentage: 25 },
            { name: '#e90152', percentage: 90 }
        ];
        this.rotation = 50;
        this.check = true;
        this.checked = 'circle at';
        this.disableAdd = false;
    }
    getGradient() {
        let str = '';
        let property = '';
        this.checked === 'circle at' ? property = `${this.checked} ${this.rotation}%, ` : property = `${this.checked}, `;
        for (let i = 0; i < this.colors.length; i++) {
            str += `, ${this.colors[i].name} ${this.colors[i].percentage}%`;
        }
        let obj = {
            backgroundImage: `radial-gradient(${property} ${this.initialColors[0].name} ${this.initialColors[0].percentage}%, 
        ${this.initialColors[1].name} ${this.initialColors[1].percentage}%` + str + `)`
        };
        this.code = obj;
        return obj;
    }
    getRotation() {
        return {
            transform: `rotate(${this.rotation}deg)`
        };
    }
    add() {
        this.disableAdd ? alert("You can't add more colors. Maximum number is 10.") : this.colorsService.addColor('#016B7E');
    }
    delete(index) {
        this.colorsService.deleteColor(index);
    }
    ngDoCheck() {
        this.colorsService.colors.length >= 8 ? this.disableAdd = true : this.disableAdd = false;
    }
}
RadialComponent.ɵfac = function RadialComponent_Factory(t) { return new (t || RadialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service__WEBPACK_IMPORTED_MODULE_1__["ColorsService"])); };
RadialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RadialComponent, selectors: [["app-radial"]], decls: 84, vars: 19, consts: [[1, "gradient"], [1, "content", 3, "ngStyle"], ["gradient", ""], [1, "settings"], [1, "colors"], [2, "background", "#ececec"], ["for", "colorpicker"], ["type", "color", "id", "colorpicker", "value", "#ff7b00", 3, "ngModel", "ngModelChange"], ["type", "number", "min", "0", 3, "max", "value", "ngModel", "ngModelChange"], [1, "disabled"], [1, "fas", "fa-times", "fa-2x"], ["type", "color", "id", "colorpicker", "value", "#e90152", 3, "ngModel", "ngModelChange"], ["type", "number", "min", "0", "max", "100", 3, "value", "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["colspan", "4", 1, "add"], [3, "ngClass", "click"], [1, "fas", "fa-plus", "fa-lg"], [2, "margin-top", "40px"], [1, "form-check"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios1", "value", "closest-side", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "exampleRadios1", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios2", "value", "closest-corner", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "exampleRadios2", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios3", "value", "farthest-side", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "exampleRadios3", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios4", "value", "farthest-corner", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "exampleRadios4", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios5", "value", "circle at", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "exampleRadios5", 1, "form-check-label"], ["class", "rotation", "style", "margin-top: 20px; margin-bottom: 50px;", 4, "ngIf"], [1, "code"], [1, "dot"], [1, "className"], [1, "property"], [3, "ngStyle"], ["type", "color", "id", "colorpicker", 3, "value", "ngModel", "ngModelChange"], ["type", "number", "max", "100", 3, "min", "value", "ngModel", "ngModelChange"], [3, "click"], [1, "rotation", 2, "margin-top", "20px", "margin-bottom", "50px"], [1, "rotationInput"], ["for", "customRange2", 1, "form-label", 2, "margin-top", "15px"], ["type", "range", "min", "0", "max", "100", "step", "1", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], [1, "rotator"], ["rotator", ""]], template: function RadialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Colors:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Percentage [%]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RadialComponent_Template_input_ngModelChange_22_listener($event) { return ctx.initialColors[0].name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RadialComponent_Template_input_ngModelChange_24_listener($event) { return ctx.initialColors[0].percentage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RadialComponent_Template_input_ngModelChange_33_listener($event) { return ctx.initialColors[1].name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RadialComponent_Template_input_ngModelChange_35_listener($event) { return ctx.initialColors[1].percentage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, RadialComponent_ng_container_39_Template, 12, 9, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RadialComponent_Template_a_click_42_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Add new color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Direction/transform:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RadialComponent_Template_input_ngModelChange_49_listener($event) { return ctx.checked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Closest side ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RadialComponent_Template_input_ngModelChange_53_listener($event) { return ctx.checked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Closest corner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RadialComponent_Template_input_ngModelChange_57_listener($event) { return ctx.checked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Farthest side ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RadialComponent_Template_input_ngModelChange_61_listener($event) { return ctx.checked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Farthest corner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RadialComponent_Template_input_ngModelChange_65_listener($event) { return ctx.checked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Circle at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, RadialComponent_div_68_Template, 9, 3, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Your code:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "shape");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " { ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "background-image: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " } ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.getGradient());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.initialColors[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx.initialColors[1].percentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.initialColors[0].percentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.initialColors[0].percentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.initialColors[1].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.initialColors[1].percentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.initialColors[1].percentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, ctx.disableAdd));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checked === "circle at");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.code.backgroundImage, "; ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RangeValueAccessor"]], styles: [".gradient[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: -20px;\n  box-shadow: 2px 2px 10px 0px #9e9e9e;\n}\n.gradient[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60vh;\n}\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.settings[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1em;\n  font-weight: 600;\n  margin-top: 40px;\n  margin-bottom: 15px;\n  color: #616161;\n}\n.settings[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 0.9em;\n  font-weight: 500;\n  margin-bottom: 0px;\n  color: #616161;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  color: #000000;\n  border-collapse: collapse;\n  width: 100%;\n  border-radius: 20px;\n  overflow: hidden;\n  font-size: clamp(0.8em, 2vw, 1em);\n  margin-bottom: 20px;\n  table-layout: fixed;\n  box-shadow: 2px 2px 10px 0px #9e9e9e;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n  border-radius: 10px;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: #000000;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0px;\n  margin: -10px auto -10px auto;\n  text-align: center;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span.disabled[_ngcontent-%COMP%] {\n  color: #757575;\n  font-size: 0.6em;\n  line-height: 3;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #212121;\n  font-size: 0.7em;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #c62828;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%] {\n  background: #bdbdbd;\n  height: 10px;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #212121;\n  padding: 0px;\n  margin: 0px;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n  padding-right: 2em;\n  font-size: 1.3em;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%], .settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%]:hover {\n  color: #9e9e9e;\n  font-size: 0.7em;\n  cursor: not-allowed;\n}\n.settings[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #00796b;\n  text-shadow: none;\n}\n.settings[_ngcontent-%COMP%]   .rotation[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.settings[_ngcontent-%COMP%]   .rotation[_ngcontent-%COMP%]   .rotationInput[_ngcontent-%COMP%] {\n  width: calc(100% - 80px);\n  float: left;\n}\n.settings[_ngcontent-%COMP%]   .rotation[_ngcontent-%COMP%]   .rotator[_ngcontent-%COMP%] {\n  width: 50px;\n  line-height: 3.3;\n  text-align: center;\n  font-size: 1em;\n  color: #eeeeee;\n  position: relative;\n  bottom: 10px;\n  box-shadow: 1px 1px 5px #212121;\n  text-shadow: 1px 1px 2px black;\n}\n.code[_ngcontent-%COMP%] {\n  background-color: #212121;\n  border-radius: 10px;\n  padding: 1.5em;\n  margin-bottom: 2em;\n  color: #eeeeee;\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: 500;\n}\n.code[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  color: #64b5f6;\n}\n.code[_ngcontent-%COMP%]   .className[_ngcontent-%COMP%] {\n  color: #ff9100;\n  padding-right: 0.5em;\n}\n.code[_ngcontent-%COMP%]   .property[_ngcontent-%COMP%] {\n  color: #f48fb1;\n  padding: 0.1em 0.3em 0.1em 1.5em;\n}\nh3[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: clamp(1.1em, 3vw, 1.3em);\n  margin-top: 40px;\n  padding-top: 40px;\n  margin-bottom: 10px;\n  border-top: 2px dashed #bdbdbd;\n  color: #212121;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JhZGlhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFFUjtBQUVBO0VBQ0ksZUFBQTtBQUNKO0FBR0k7RUFDSSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQVI7QUFFSTtFQUNJLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUFSO0FBRUk7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0FBQVI7QUFDUTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QUFDWjtBQUFZO0VBQ0ksa0JBQUE7QUFFaEI7QUFDZ0I7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFDcEI7QUFDZ0I7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFDcEI7QUFDZ0I7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ3BCO0FBQ2dCO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBQ3BCO0FBQ2dCO0VBQ0ksY0FBQTtBQUNwQjtBQUVZO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBQWhCO0FBQ2dCO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ3BCO0FBQW9CO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRXhCO0FBQ2dCO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDcEI7QUFDZ0I7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFDcEI7QUFJSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFGUjtBQUdRO0VBQ0ksd0JBQUE7RUFDQSxXQUFBO0FBRFo7QUFHUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0FBRFo7QUFNQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQUhKO0FBSUk7RUFDSSxjQUFBO0FBRlI7QUFJSTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtBQUZSO0FBSUk7RUFDSSxjQUFBO0VBQ0EsZ0NBQUE7QUFGUjtBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQUZKIiwiZmlsZSI6InJhZGlhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmFkaWVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAwcHggIzllOWU5ZTtcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2V0dGluZ3Mge1xyXG4gICAgaDQge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICM2MTYxNjE7XHJcbiAgICB9XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNjE2MTYxO1xyXG4gICAgfVxyXG4gICAgdGFibGUge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44ZW0sIDJ2dywgMWVtKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDBweCAjOWU5ZTllO1xyXG4gICAgICAgIHRyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2UwZTBlMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgdGQsIHRoIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLTEwcHggYXV0byAtMTBweCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwYW4uZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjNjI4Mjg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFkZCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmRiZGJkO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYS5kaXNhYmxlZCwgYS5kaXNhYmxlZDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5ZTllOWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDc5NmI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucm90YXRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC5yb3RhdGlvbklucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJvdGF0b3Ige1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMuMztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgY29sb3I6ICNlZWVlZWU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAjMjEyMTIxO1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY29kZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gICAgY29sb3I6ICNlZWVlZWU7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgLmRvdCB7XHJcbiAgICAgICAgY29sb3I6ICM2NGI1ZjY7XHJcbiAgICB9XHJcbiAgICAuY2xhc3NOYW1lIHtcclxuICAgICAgICBjb2xvcjogI2ZmOTEwMDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcclxuICAgIH1cclxuICAgIC5wcm9wZXJ0eSB7XHJcbiAgICAgICAgY29sb3I6ICNmNDhmYjE7XHJcbiAgICAgICAgcGFkZGluZzogMC4xZW0gMC4zZW0gMC4xZW0gMS41ZW07XHJcbiAgICB9XHJcbn1cclxuaDMge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4xZW0sIDN2dywgMS4zZW0pO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci10b3A6IDJweCBkYXNoZWQgI2JkYmRiZDtcclxuICAgIGNvbG9yOiAjMjEyMTIxO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-radial',
                templateUrl: './radial.component.html',
                styleUrls: ['./radial.component.scss']
            }]
    }], function () { return [{ type: _services_service__WEBPACK_IMPORTED_MODULE_1__["ColorsService"] }]; }, null); })();


/***/ }),

/***/ "kno3":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/shape-generator/quadrangle-shapes/quadrangle-shapes.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: QuadrangleShapesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuadrangleShapesComponent", function() { return QuadrangleShapesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../assets/colors */ "xaDe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function QuadrangleShapesComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuadrangleShapesComponent_div_24_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const c_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.background = c_r3; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", c_r3);
} }
function QuadrangleShapesComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuadrangleShapesComponent_div_67_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const c_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.shadowColor = c_r6; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", c_r6);
} }
const _c0 = function (a0) { return { "activated": a0 }; };
const _c1 = function (a0) { return { "basicsHide": a0 }; };
const _c2 = function (a0) { return { "basicsColorsHide": a0 }; };
const _c3 = function (a0) { return { "bordersHide": a0 }; };
const _c4 = function (a0) { return { "boxshadowHide": a0 }; };
const _c5 = function (a0) { return { "shadowColorHide": a0 }; };
const _c6 = function (a0) { return { "transformHide": a0 }; };
class QuadrangleShapesComponent {
    constructor() {
        //Basics
        this.background = '#3d5afe';
        this.width = 350;
        this.height = 0;
        this.colors = _assets_colors__WEBPACK_IMPORTED_MODULE_1__["COLORS"];
        //Shape ranges
        this.leftBorder = 90;
        this.rightBorder = 90;
        this.bottomBorder = 200;
        //Boxshadow ranges
        this.verticalOffset = 0;
        this.horizontalOffset = 0;
        this.blur = 0;
        this.shadowColor = '#9e9e9e';
        //Transform
        this.rotate = 0;
        this.skewX = 0;
        this.skewY = 0;
        //togglers
        this.basicsToggle = true;
        this.basicsColorsToggle = true;
        this.bordersToggle = true;
        this.boxshadowToggle = true;
        this.shadowColorToggle = true;
        this.transformToggle = true;
    }
    getShape() {
        return {
            width: `${this.width}px`,
            height: `${this.height}px`,
            borderLeft: `${this.leftBorder}px solid transparent`,
            borderRight: `${this.rightBorder}px solid transparent`,
            borderBottom: `${this.bottomBorder}px solid ${this.background}`,
            filter: `drop-shadow(${this.horizontalOffset}px ${this.verticalOffset}px ${this.blur}px ${this.shadowColor})`,
            transform: `rotate(${this.rotate}deg) skewX(${this.skewX}deg) skewY(${this.skewY}deg)`
        };
    }
}
QuadrangleShapesComponent.ɵfac = function QuadrangleShapesComponent_Factory(t) { return new (t || QuadrangleShapesComponent)(); };
QuadrangleShapesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuadrangleShapesComponent, selectors: [["app-quadrangle-shapes"]], decls: 124, vars: 73, consts: [[1, "container-fluid"], [1, "shape"], [1, "content", 3, "ngStyle"], ["shape", ""], [1, "settings"], [1, "toggler"], [1, "button", 3, "ngClass"], [1, "waves-effect", "waves-light", 3, "click"], [1, "fas", "fa-arrow-alt-circle-up"], [1, "basics", 3, "ngClass"], ["for", "customRange2", 1, "form-label", 2, "margin-top", "15px"], ["type", "range", "min", "0", "max", "1000", "step", "20", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], [1, "colors", 3, "ngClass"], ["class", "color", 3, "background", "click", 4, "ngFor", "ngForOf"], [1, "borders", 3, "ngClass"], ["type", "range", "min", "0", "max", "1000", "step", "1", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], ["for", "customRange2", 1, "form-label"], [1, "boxshadow", 3, "ngClass"], ["type", "range", "min", "-200", "max", "200", "step", "2", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "-200", "max", "200", "step", "1", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "0", "max", "50", "step", "1", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "0", "max", "360", "step", "1", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "-90", "max", "90", "step", "1", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], [1, "code"], [1, "dot"], [1, "className"], [1, "property"], [1, "color", 3, "click"]], template: function QuadrangleShapesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Basics:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuadrangleShapesComponent_Template_a_click_10_listener() { return ctx.basicsToggle = !ctx.basicsToggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuadrangleShapesComponent_Template_input_ngModelChange_15_listener($event) { return ctx.width = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Background color:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuadrangleShapesComponent_Template_a_click_21_listener() { return ctx.basicsColorsToggle = !ctx.basicsColorsToggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, QuadrangleShapesComponent_div_24_Template, 1, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Borders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuadrangleShapesComponent_Template_a_click_30_listener() { return ctx.bordersToggle = !ctx.bordersToggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuadrangleShapesComponent_Template_input_ngModelChange_35_listener($event) { return ctx.leftBorder = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuadrangleShapesComponent_Template_input_ngModelChange_38_listener($event) { return ctx.rightBorder = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuadrangleShapesComponent_Template_input_ngModelChange_41_listener($event) { return ctx.bottomBorder = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Box shadow:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuadrangleShapesComponent_Template_a_click_47_listener() { return ctx.boxshadowToggle = !ctx.boxshadowToggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuadrangleShapesComponent_Template_input_ngModelChange_52_listener($event) { return ctx.horizontalOffset = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuadrangleShapesComponent_Template_input_ngModelChange_55_listener($event) { return ctx.verticalOffset = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuadrangleShapesComponent_Template_input_ngModelChange_58_listener($event) { return ctx.blur = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuadrangleShapesComponent_Template_a_click_64_listener() { return ctx.shadowColorToggle = !ctx.shadowColorToggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, QuadrangleShapesComponent_div_67_Template, 1, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Transform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuadrangleShapesComponent_Template_a_click_73_listener() { return ctx.transformToggle = !ctx.transformToggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuadrangleShapesComponent_Template_input_ngModelChange_78_listener($event) { return ctx.rotate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuadrangleShapesComponent_Template_input_ngModelChange_81_listener($event) { return ctx.skewX = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuadrangleShapesComponent_Template_input_ngModelChange_84_listener($event) { return ctx.skewY = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Your code:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "shape");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " { ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "width: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "height: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "border-left: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "border-right: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "border-bottom: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "filter: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "transform: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " } ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.getShape());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](49, _c0, ctx.basicsToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](51, _c1, ctx.basicsToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Width: ", ctx.width, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](53, _c0, ctx.basicsColorsToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](55, _c2, ctx.basicsColorsToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](57, _c0, ctx.bordersToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](59, _c3, ctx.bordersToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Border-left: ", ctx.leftBorder, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.leftBorder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Border-right: ", ctx.rightBorder, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rightBorder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Border-bottom: ", ctx.bottomBorder, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bottomBorder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](61, _c0, ctx.boxshadowToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](63, _c4, ctx.boxshadowToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Horizontal offset: ", ctx.horizontalOffset, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.horizontalOffset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Vertical offset: ", ctx.verticalOffset, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.verticalOffset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Blur: ", ctx.blur, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.blur);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Box-shadow color: ", ctx.shadowColor, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](65, _c0, ctx.shadowColorToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](67, _c5, ctx.shadowColorToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](69, _c0, ctx.transformToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](71, _c6, ctx.transformToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rotate: ", ctx.rotate, "deg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rotate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("SkewX: ", ctx.skewX, "deg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.skewX);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("SkewY: ", ctx.skewY, "deg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.skewY);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.width, "px; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.height, "px; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.leftBorder, "px solid transparent; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.rightBorder, "px solid transparent; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.bottomBorder, "px solid ", ctx.background, "; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("drop-shadow(", ctx.horizontalOffset, "px ", ctx.verticalOffset, "px ", ctx.blur, "px ", ctx.shadowColor, "); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("rotate(", ctx.rotate, "deg) skewX(", ctx.skewX, "deg) skewY(", ctx.skewY, "deg); ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".container-fluid[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  max-width: 100%;\n  margin-bottom: 50px;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 500;\n  margin-bottom: 0px;\n  color: #616161;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: 500;\n  margin-bottom: 0px;\n  color: #616161;\n  border-top: 2px dashed #e0e0e0;\n  margin-top: 20px;\n  padding-top: 25px;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 500;\n  margin-bottom: 0px;\n  color: #616161;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 500;\n  padding: 0.2em 0em 0.2em 0.4em;\n  color: #9e9e9e;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  font-size: 1.1em;\n  transition: 0.8s;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #3d5afe;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]   .activated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  transition: 0.8s;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]:hover {\n  transform: scale(2, 2);\n  transition: 0.4s;\n  box-shadow: 0px 0px 8px #424242;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .basicsHide[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .bordersHide[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .boxshadowHide[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .basicsColorsHide[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .shadowColorHide[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .transformHide[_ngcontent-%COMP%] {\n  display: none;\n}\n.container-fluid[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%] {\n  background-color: #212121;\n  border-radius: 10px;\n  padding: 1.5em;\n  margin-bottom: 2em;\n  color: #eeeeee;\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: 500;\n}\n.container-fluid[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  color: #64b5f6;\n}\n.container-fluid[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]   .className[_ngcontent-%COMP%] {\n  color: #ff9100;\n  padding-right: 0.5em;\n}\n.container-fluid[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]   .property[_ngcontent-%COMP%] {\n  color: #f48fb1;\n  padding: 0.1em 0.3em 0.1em 1.5em;\n}\n.container-fluid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: clamp(1.1em, 3vw, 1.3em);\n  margin-top: 40px;\n  padding-top: 40px;\n  margin-bottom: 10px;\n  border-top: 2px dashed #bdbdbd;\n  color: #212121;\n}\n@media only screen and (min-width: 992px) {\n  .colors[_ngcontent-%COMP%] {\n    width: 96%;\n  }\n  .colors[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n    margin: 3px;\n  }\n}\n@media only screen and (max-width: 992px) {\n  .colors[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .colors[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    margin: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3F1YWRyYW5nbGUtc2hhcGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSEo7QUFRSTtFQUNJLGlCQUFBO0FBTlI7QUFPUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFMWjtBQU9RO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBTFo7QUFPUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFMWjtBQU9RO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQUxaO0FBTWdCO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSnBCO0FBS29CO0VBQ0ksY0FBQTtBQUh4QjtBQU1nQjtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUFKcEI7QUFPUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBTFo7QUFNWTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQUpoQjtBQU9RO0VBQ0ksYUFBQTtBQUxaO0FBV0k7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUFUUjtBQVVRO0VBQ0ksY0FBQTtBQVJaO0FBVVE7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7QUFSWjtBQVVRO0VBQ0ksY0FBQTtFQUNBLGdDQUFBO0FBUlo7QUFXSTtFQUNJLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFUUjtBQWFBO0VBQ0k7SUFDSSxVQUFBO0VBVk47RUFXTTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQVRWO0FBQ0Y7QUFhQTtFQUNJO0lBQ0ksV0FBQTtFQVhOO0VBWU07SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUFWVjtBQUNGIiwiZmlsZSI6InF1YWRyYW5nbGUtc2hhcGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcblxyXG4gICAgLy8gU0hBUEUgXHJcblxyXG4gICAgLnNoYXBlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLy9TRVRUSU5HUyBcclxuXHJcbiAgICAuc2V0dGluZ3Mge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgICAgIC5mb3JtLWxhYmVsLCBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICM2MTYxNjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg1IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICM2MTYxNjE7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBkYXNoZWQgI2UwZTBlMDsgXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7IFxyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDYge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjE2MTYxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9nZ2xlciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMmVtIDBlbSAwLjJlbSAwLjRlbTtcclxuICAgICAgICAgICAgY29sb3I6ICM5ZTllOWU7XHJcbiAgICAgICAgICAgICAgICAuYnV0dG9uIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjhzO1xyXG4gICAgICAgICAgICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzNkNWFmZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYWN0aXZhdGVkIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuOHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2xvcnMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIC5jb2xvcjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIsIDIpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICM0MjQyNDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJhc2ljc0hpZGUsIC5ib3JkZXJzSGlkZSwgLmJveHNoYWRvd0hpZGUsIC5iYXNpY3NDb2xvcnNIaWRlLCAuc2hhZG93Q29sb3JIaWRlLCAudHJhbnNmb3JtSGlkZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vQ09ERVxyXG5cclxuICAgIC5jb2RlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMS41ZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZWVlZWVlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIC5kb3Qge1xyXG4gICAgICAgICAgICBjb2xvcjogIzY0YjVmNjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNsYXNzTmFtZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmY5MTAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb3BlcnR5IHtcclxuICAgICAgICAgICAgY29sb3I6ICNmNDhmYjE7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMWVtIDAuM2VtIDAuMWVtIDEuNWVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4xZW0sIDN2dywgMS4zZW0pO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBib3JkZXItdG9wOiAycHggZGFzaGVkICNiZGJkYmQ7XHJcbiAgICAgICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5jb2xvcnMge1xyXG4gICAgICAgIHdpZHRoOiA5NiU7XHJcbiAgICAgICAgLmNvbG9yIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuY29sb3JzIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAuY29sb3Ige1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuadrangleShapesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quadrangle-shapes',
                templateUrl: './quadrangle-shapes.component.html',
                styleUrls: ['./quadrangle-shapes.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "qa4/":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/shape-generator/triangle-shapes/triangle-shapes.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TriangleShapesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriangleShapesComponent", function() { return TriangleShapesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../assets/colors */ "xaDe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function TriangleShapesComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TriangleShapesComponent_div_13_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const c_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.background = c_r3; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", c_r3);
} }
function TriangleShapesComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TriangleShapesComponent_div_56_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const c_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.shadowColor = c_r6; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", c_r6);
} }
const _c0 = function (a0) { return { "activated": a0 }; };
const _c1 = function (a0) { return { "colorsHide": a0 }; };
const _c2 = function (a0) { return { "bordersHide": a0 }; };
const _c3 = function (a0) { return { "boxshadowHide": a0 }; };
const _c4 = function (a0) { return { "shadowColorHide": a0 }; };
const _c5 = function (a0) { return { "transformHide": a0 }; };
class TriangleShapesComponent {
    constructor() {
        //Basics
        this.background = '#3d5afe';
        this.width = 0;
        this.height = 0;
        this.colors = _assets_colors__WEBPACK_IMPORTED_MODULE_1__["COLORS"];
        //Shape ranges
        this.leftBorder = 133;
        this.rightBorder = 133;
        this.bottomBorder = 200;
        //Boxshadow ranges
        this.verticalOffset = 0;
        this.horizontalOffset = 0;
        this.blur = 0;
        this.shadowColor = '#9e9e9e';
        //Transform
        this.rotate = 0;
        this.skewX = 0;
        this.skewY = 0;
        //togglers
        this.bordersToggle = true;
        this.boxshadowToggle = true;
        this.colorsToggle = true;
        this.shadowColorToggle = true;
        this.transformToggle = true;
    }
    getShape() {
        return {
            width: `${this.width}px`,
            height: `${this.height}px`,
            borderLeft: `${this.leftBorder}px solid transparent`,
            borderRight: `${this.rightBorder}px solid transparent`,
            borderBottom: `${this.bottomBorder}px solid ${this.background}`,
            filter: `drop-shadow(${this.horizontalOffset}px ${this.verticalOffset}px ${this.blur}px ${this.shadowColor})`,
            transform: `rotate(${this.rotate}deg) skewX(${this.skewX}deg) skewY(${this.skewY}deg)`
        };
    }
}
TriangleShapesComponent.ɵfac = function TriangleShapesComponent_Factory(t) { return new (t || TriangleShapesComponent)(); };
TriangleShapesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TriangleShapesComponent, selectors: [["app-triangle-shapes"]], decls: 113, vars: 66, consts: [[1, "container-fluid"], [1, "shape"], [1, "content", 3, "ngStyle"], ["shape", ""], [1, "settings"], [1, "toggler"], [1, "button", 3, "ngClass"], [1, "waves-effect", "waves-light", 3, "click"], [1, "fas", "fa-arrow-alt-circle-up"], [1, "colors", 3, "ngClass"], ["class", "color", 3, "background", "click", 4, "ngFor", "ngForOf"], [1, "borders", 3, "ngClass"], ["for", "customRange2", 1, "form-label", 2, "margin-top", "15px"], ["type", "range", "min", "0", "max", "1000", "step", "1", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], ["for", "customRange2", 1, "form-label"], [1, "boxshadow", 3, "ngClass"], ["type", "range", "min", "-200", "max", "200", "step", "2", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "-200", "max", "200", "step", "1", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "0", "max", "50", "step", "1", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "0", "max", "360", "step", "1", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "-90", "max", "90", "step", "1", "id", "customRange2", 1, "form-range", 3, "ngModel", "ngModelChange"], [1, "code"], [1, "dot"], [1, "className"], [1, "property"], [1, "color", 3, "click"]], template: function TriangleShapesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TriangleShapesComponent_Template_a_click_10_listener() { return ctx.colorsToggle = !ctx.colorsToggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TriangleShapesComponent_div_13_Template, 1, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Borders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TriangleShapesComponent_Template_a_click_19_listener() { return ctx.bordersToggle = !ctx.bordersToggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TriangleShapesComponent_Template_input_ngModelChange_24_listener($event) { return ctx.leftBorder = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TriangleShapesComponent_Template_input_ngModelChange_27_listener($event) { return ctx.rightBorder = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TriangleShapesComponent_Template_input_ngModelChange_30_listener($event) { return ctx.bottomBorder = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Box shadow:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TriangleShapesComponent_Template_a_click_36_listener() { return ctx.boxshadowToggle = !ctx.boxshadowToggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TriangleShapesComponent_Template_input_ngModelChange_41_listener($event) { return ctx.horizontalOffset = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TriangleShapesComponent_Template_input_ngModelChange_44_listener($event) { return ctx.verticalOffset = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TriangleShapesComponent_Template_input_ngModelChange_47_listener($event) { return ctx.blur = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TriangleShapesComponent_Template_a_click_53_listener() { return ctx.shadowColorToggle = !ctx.shadowColorToggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, TriangleShapesComponent_div_56_Template, 1, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Transform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TriangleShapesComponent_Template_a_click_62_listener() { return ctx.transformToggle = !ctx.transformToggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TriangleShapesComponent_Template_input_ngModelChange_67_listener($event) { return ctx.rotate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TriangleShapesComponent_Template_input_ngModelChange_70_listener($event) { return ctx.skewX = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TriangleShapesComponent_Template_input_ngModelChange_73_listener($event) { return ctx.skewY = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Your code:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "shape");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " { ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "width: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "height: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "border-left: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "border-right: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "border-bottom: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "filter: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "transform: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " } ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.getShape());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Background-color: ", ctx.background, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c0, ctx.colorsToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c1, ctx.colorsToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](50, _c0, ctx.bordersToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c2, ctx.bordersToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Border-left: ", ctx.leftBorder, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.leftBorder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Border-right: ", ctx.rightBorder, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rightBorder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Border-bottom: ", ctx.bottomBorder, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bottomBorder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](54, _c0, ctx.boxshadowToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](56, _c3, ctx.boxshadowToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Horizontal offset: ", ctx.horizontalOffset, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.horizontalOffset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Vertical offset: ", ctx.verticalOffset, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.verticalOffset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Blur: ", ctx.blur, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.blur);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Box-shadow color: ", ctx.shadowColor, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](58, _c0, ctx.shadowColorToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](60, _c4, ctx.shadowColorToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](62, _c0, ctx.transformToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](64, _c5, ctx.transformToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rotate: ", ctx.rotate, "deg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rotate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("SkewX: ", ctx.skewX, "deg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.skewX);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("SkewY: ", ctx.skewY, "deg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.skewY);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.width, "px; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.height, "px; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.leftBorder, "px solid transparent; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.rightBorder, "px solid transparent; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.bottomBorder, "px solid ", ctx.background, "; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("drop-shadow(", ctx.horizontalOffset, "px ", ctx.verticalOffset, "px ", ctx.blur, "px ", ctx.shadowColor, "); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("rotate(", ctx.rotate, "deg) skewX(", ctx.skewX, "deg) skewY(", ctx.skewY, "deg); ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".container-fluid[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  max-width: 100%;\n  margin-bottom: 50px;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 500;\n  margin-bottom: 0px;\n  color: #616161;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: 500;\n  margin-bottom: 0px;\n  color: #616161;\n  border-top: 2px dashed #e0e0e0;\n  margin-top: 20px;\n  padding-top: 25px;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 500;\n  margin-bottom: 0px;\n  color: #616161;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 500;\n  padding: 0.2em 0em 0.2em 0.4em;\n  color: #9e9e9e;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  font-size: 1.1em;\n  transition: 0.8s;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #3d5afe;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]   .activated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  transition: 0.8s;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]:hover {\n  transform: scale(2, 2);\n  transition: 0.4s;\n  box-shadow: 0px 0px 8px #424242;\n}\n.container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .bordersHide[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .boxshadowHide[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .colorsHide[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .shadowColorHide[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .transformHide[_ngcontent-%COMP%] {\n  display: none;\n}\n.container-fluid[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%] {\n  background-color: #212121;\n  border-radius: 10px;\n  padding: 1.5em;\n  margin-bottom: 2em;\n  color: #eeeeee;\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: 500;\n}\n.container-fluid[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  color: #64b5f6;\n}\n.container-fluid[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]   .className[_ngcontent-%COMP%] {\n  color: #ff9100;\n  padding-right: 0.5em;\n}\n.container-fluid[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]   .property[_ngcontent-%COMP%] {\n  color: #f48fb1;\n  padding: 0.1em 0.3em 0.1em 1.5em;\n}\n.container-fluid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: clamp(1.1em, 3vw, 1.3em);\n  margin-top: 40px;\n  padding-top: 40px;\n  margin-bottom: 10px;\n  border-top: 2px dashed #bdbdbd;\n  color: #212121;\n}\n@media only screen and (min-width: 992px) {\n  .colors[_ngcontent-%COMP%] {\n    width: 96%;\n  }\n  .colors[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n    margin: 3px;\n  }\n}\n@media only screen and (max-width: 992px) {\n  .colors[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .colors[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    margin: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RyaWFuZ2xlLXNoYXBlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJSTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUhKO0FBUUk7RUFDSSxpQkFBQTtBQU5SO0FBT1E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBTFo7QUFPUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUxaO0FBT1E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBTFo7QUFPUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFMWjtBQU1nQjtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUpwQjtBQUtvQjtFQUNJLGNBQUE7QUFIeEI7QUFNZ0I7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FBSnBCO0FBT1E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQUxaO0FBTVk7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFKaEI7QUFPUTtFQUNJLGFBQUE7QUFMWjtBQVdJO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FBVFI7QUFVUTtFQUNJLGNBQUE7QUFSWjtBQVVRO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0FBUlo7QUFVUTtFQUNJLGNBQUE7RUFDQSxnQ0FBQTtBQVJaO0FBV0k7RUFDSSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBVFI7QUFhQTtFQUNJO0lBQ0ksVUFBQTtFQVZOO0VBV007SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUFUVjtBQUNGO0FBYUE7RUFDSTtJQUNJLFdBQUE7RUFYTjtFQVlNO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VBVlY7QUFDRiIsImZpbGUiOiJ0cmlhbmdsZS1zaGFwZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuXHJcbiAgICAvLyBTSEFQRSBcclxuXHJcbiAgICAuc2hhcGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAvL1NFVFRJTkdTIFxyXG5cclxuICAgIC5zZXR0aW5ncyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgLmZvcm0tbGFiZWwsIGxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzYxNjE2MTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzYxNjE2MTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IGRhc2hlZCAjZTBlMGUwOyBcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDsgXHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICM2MTYxNjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2dnbGVyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4yZW0gMGVtIDAuMmVtIDAuNGVtO1xyXG4gICAgICAgICAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgICAgICAgICAgICAgIC5idXR0b24geyBcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuOHM7XHJcbiAgICAgICAgICAgICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjM2Q1YWZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hY3RpdmF0ZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC44cztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbG9ycyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgLmNvbG9yOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMiwgMik7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggIzQyNDI0MjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYm9yZGVyc0hpZGUsIC5ib3hzaGFkb3dIaWRlLCAuY29sb3JzSGlkZSwgLnNoYWRvd0NvbG9ySGlkZSwgLnRyYW5zZm9ybUhpZGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL0NPREVcclxuXHJcbiAgICAuY29kZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNWVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgICAgICBjb2xvcjogI2VlZWVlZTtcclxuICAgICAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAuZG90IHtcclxuICAgICAgICAgICAgY29sb3I6ICM2NGI1ZjY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jbGFzc05hbWUge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmOTEwMDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMC41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9wZXJ0eSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjQ4ZmIxO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjFlbSAwLjNlbSAwLjFlbSAxLjVlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDEuMWVtLCAzdncsIDEuM2VtKTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMnB4IGRhc2hlZCAjYmRiZGJkO1xyXG4gICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuY29sb3JzIHtcclxuICAgICAgICB3aWR0aDogOTYlO1xyXG4gICAgICAgIC5jb2xvciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmNvbG9ycyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLmNvbG9yIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TriangleShapesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-triangle-shapes',
                templateUrl: './triangle-shapes.component.html',
                styleUrls: ['./triangle-shapes.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_banner_generator_banner_generator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/banner-generator/banner-generator.component */ "WRw1");
/* harmony import */ var _components_gradient_generator_gradient_generator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/gradient-generator/gradient-generator.component */ "Lft8");
/* harmony import */ var _components_gradient_generator_linear_linear_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/gradient-generator/linear/linear.component */ "HTQA");
/* harmony import */ var _components_gradient_generator_radial_radial_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/gradient-generator/radial/radial.component */ "iOlF");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "JzmT");
/* harmony import */ var _components_shape_generator_circle_shapes_circle_shapes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/shape-generator/circle-shapes/circle-shapes.component */ "fw4J");
/* harmony import */ var _components_shape_generator_quadrangle_shapes_quadrangle_shapes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shape-generator/quadrangle-shapes/quadrangle-shapes.component */ "kno3");
/* harmony import */ var _components_shape_generator_shape_generator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/shape-generator/shape-generator.component */ "I2xi");
/* harmony import */ var _components_shape_generator_triangle_shapes_triangle_shapes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/shape-generator/triangle-shapes/triangle-shapes.component */ "qa4/");
/* harmony import */ var _components_typography_typography_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/typography/typography.component */ "QhSr");















const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'shape-generator', component: _components_shape_generator_shape_generator_component__WEBPACK_IMPORTED_MODULE_10__["ShapeGeneratorComponent"],
        children: [
            { path: '', redirectTo: '/shape-generator/circle-shapes', pathMatch: 'full' },
            { path: 'circle-shapes', component: _components_shape_generator_circle_shapes_circle_shapes_component__WEBPACK_IMPORTED_MODULE_8__["CircleShapesComponent"] },
            { path: 'triangle-shapes', component: _components_shape_generator_triangle_shapes_triangle_shapes_component__WEBPACK_IMPORTED_MODULE_11__["TriangleShapesComponent"] },
            { path: 'quadrangle-shapes', component: _components_shape_generator_quadrangle_shapes_quadrangle_shapes_component__WEBPACK_IMPORTED_MODULE_9__["QuadrangleShapesComponent"] }
        ]
    },
    { path: 'gradient-generator', component: _components_gradient_generator_gradient_generator_component__WEBPACK_IMPORTED_MODULE_3__["GradientGeneratorComponent"],
        children: [
            { path: '', redirectTo: '/gradient-generator/linear', pathMatch: 'full' },
            { path: 'linear', component: _components_gradient_generator_linear_linear_component__WEBPACK_IMPORTED_MODULE_4__["LinearComponent"] },
            { path: 'radial', component: _components_gradient_generator_radial_radial_component__WEBPACK_IMPORTED_MODULE_5__["RadialComponent"] }
        ]
    },
    { path: 'banner-generator', component: _components_banner_generator_banner_generator_component__WEBPACK_IMPORTED_MODULE_2__["BannerGeneratorComponent"] },
    { path: 'typography', component: _components_typography_typography_component__WEBPACK_IMPORTED_MODULE_12__["TypographyComponent"] },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xaDe":
/*!*********************************************!*\
  !*** ./src/app/components/assets/colors.ts ***!
  \*********************************************/
/*! exports provided: COLORS, FONTCOLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTCOLORS", function() { return FONTCOLORS; });
const COLORS = [
    //Red 
    "#ffebee", "#ffcdd2", "#ef9a9a", "#e57373", "#ef5350", "#f44336", "#e53935", "#d32f2f", "#c62828", "#b71c1c", "#ff8a80", "#ff5252", "#ff1744", "#d50000",
    //Pink
    "#fce4ec", "#f8bbd0", "#f48fb1", "#f06292", "#ec407a", "#e91e63", "#d81b60", "#c2185b", "#ad1457", "#880e4f", "#ff80ab", "#ff4081", "#f50057", "#c51162",
    //Purple
    "#f3e5f5", "#e1bee7", "#ce93d8", "#ba68c8", "#ab47bc", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c", "#ea80fc", "#e040fb", "#d500f9", "#aa00ff",
    //Deep purple
    "#ede7f6", "#d1c4e9", "#b39ddb", "#9575cd", "#7e57c2", "#673ab7", "#5e35b1", "#512da8", "#4527a0", "#311b92", "#b388ff", "#7c4dff", "#651fff", "#6200ea",
    //Indigo
    "#e8eaf6", "#c5cae9", "#9fa8da", "#7986cb", "#5c6bc0", "#3f51b5", "#3949ab", "#303f9f", "#283593", "#1a237e", "#8c9eff", "#536dfe", "#3d5afe", "#304ffe",
    //Blue
    "#e3f2fd", "#bbdefb", "#90caf9", "#64b5f6", "#42a5f5", "#2196f3", "#1e88e5", "#1976d2", "#1565c0", "#0d47a1", "#82b1ff", "#448aff", "#2979ff", "#2962ff",
    //Light Blue
    "#e1f5fe", "#b3e5fc", "#81d4fa", "#4fc3f7", "#29b6f6", "#03a9f4", "#039be5", "#0288d1", "#0277bd", "#01579b", "#80d8ff", "#40c4ff", "#00b0ff", "#0091ea",
    //Cyan
    "#e0f7fa", "#b2ebf2", "#80deea", "#4dd0e1", "#26c6da", "#00bcd4", "#00acc1", "#0097a7", "#00838f", "#006064", "#84ffff", "#18ffff", "#00e5ff", "#00b8d4",
    //Teal
    "#e0f2f1", "#b2dfdb", "#80cbc4", "#4db6ac", "#26a69a", "#009688", "#00897b", "#00796b", "#00695c", "#004d40", "#a7ffeb", "#64ffda", "#1de9b6", "#00bfa5",
    //Green
    "#e8f5e9", "#c8e6c9", "#a5d6a7", "#81c784", "#66bb6a", "#4caf50", "#43a047", "#388e3c", "#2e7d32", "#1b5e20", "#b9f6ca", "#69f0ae", "#00e676", "#00c853",
    //Light Green
    "#f1f8e9", "#dcedc8", "#c5e1a5", "#aed581", "#9ccc65", "#8bc34a", "#7cb342", "#689f38", "#558b2f", "#33691e", "#ccff90", "#b2ff59", "#76ff03", "#64dd17",
    //Lime
    "#f9fbe7", "#f0f4c3", "#e6ee9c", "#dce775", "#d4e157", "#cddc39", "#c0ca33", "#afb42b", "#9e9d24", "#827717", "#f4ff81", "#eeff41", "#c6ff00", "#aeea00",
    //Yellow
    "#fffde7", "#fff9c4", "#fff59d", "#fff176", "#ffee58", "#ffeb3b", "#fdd835", "#fbc02d", "#f9a825", "#f57f17", "#ffff8d", "#ffff00", "#ffea00", "#ffd600",
    //Amber
    "#fff8e1", "#ffecb3", "#ffe082", "#ffd54f", "#ffca28", "#ffc107", "#ffb300", "#ffa000", "#ff8f00", "#ff6f00", "#ffe57f", "#ffd740", "#ffc400", "#ffab00",
    //Orange
    "#fff3e0", "#ffe0b2", "#ffcc80", "#ffb74d", "#ffa726", "#ff9800", "#fb8c00", "#f57c00", "#ef6c00", "#e65100", "#ffd180", "#ffab40", "#ff9100", "#ff6d00",
    //Deep Orange
    "#fbe9e7", "#ffccbc", "#ffab91", "#ff8a65", "#ff7043", "#ff5722", "#f4511e", "#e64a19", "#d84315", "#bf360c", "#ff9e80", "#ff6e40", "#ff3d00", "#dd2c00",
    //Brown
    "#efebe9", "#d7ccc8", "#bcaaa4", "#a1887f", "#8d6e63", "#795548", "#6d4c41", "#5d4037", "#4e342e", "#3e2723",
    //Grey
    "#fafafa", "#f5f5f5", "#eeeeee", "#e0e0e0", "#bdbdbd", "#9e9e9e", "#757575", "#616161", "#424242", "#212121",
    //Blue Grey
    "#eceff1", "#cfd8dc", "#b0bec5", "#90a4ae", "#78909c", "#607d8b", "#546e7a", "#455a64", "#37474f", "#263238",
    //Black and White
    "000000", "ffffff"
];
const FONTCOLORS = [
    //Grey
    "#fafafa", "#f5f5f5", "#eeeeee", "#e0e0e0", "#bdbdbd", "#9e9e9e", "#757575", "#616161", "#424242", "#212121",
    //Blue Grey
    "#eceff1", "#cfd8dc", "#b0bec5", "#90a4ae", "#78909c", "#607d8b", "#546e7a", "#455a64", "#37474f", "#263238",
    //Black and White
    "000000", "ffffff"
];


/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function (a0) { return { "active": a0 }; };
class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], inputs: { toggler: "toggler" }, decls: 42, vars: 3, consts: [["id", "sidebar", 3, "ngClass"], [1, "md"], [1, "first"], ["routerLink", "/home", "routerLinkActive", "activeRoute", 1, "waves-effect", "waves-light"], [1, "fas", "fa-home", "fa-lg"], ["routerLink", "/shape-generator", "routerLinkActive", "activeRoute", 1, "waves-effect", "waves-light"], [1, "fas", "fa-shapes", "fa-lg"], ["routerLink", "/gradient-generator", "routerLinkActive", "activeRoute", 1, "waves-effect", "waves-light"], [1, "fas", "fa-palette", "fa-lg"], ["routerLink", "/banner-generator", "routerLinkActive", "activeRoute", 1, "waves-effect", "waves-light"], [1, "fas", "fa-spray-can", "fa-lg"], ["routerLink", "/typography", "routerLinkActive", "activeRoute", 1, "waves-effect", "waves-light"], [1, "fas", "fa-text-height", "fa-lg"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "idebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DASHBOARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "TOOLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Shape generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Gradient generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Banner generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Typography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Bart\u0142omiej Wyszecki");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " 2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.toggler));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap\");\n#sidebar[_ngcontent-%COMP%] {\n  height: 100%;\n  color: #fafafa;\n  padding-top: 2vh;\n  transition: 1s;\n  overflow: inherit;\n  box-shadow: 5px 0px 35px -5px rgba(66, 66, 66, 0.9);\n  background: linear-gradient(171deg, #004d40 0%, #00796b 30%, #00796b 70%, #009688);\n}\n#sidebar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 700;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  padding: 0 0 0.7em 0;\n  transition: 1s;\n  font-size: clamp(1.4rem, 2.6vw, 2rem);\n  border-bottom: 2px dashed #00897b;\n}\n#sidebar[_ngcontent-%COMP%]   h2.sd[_ngcontent-%COMP%] {\n  display: none;\n}\n#sidebar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  font-size: 0.8em;\n  color: #80cbc4;\n  text-align: center;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: clamp(0.4em, 2vw, 1em);\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #eeeeee;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  width: 100%;\n  font-size: clamp(0.9em, 2.5vw, 1em);\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.7em 0.7em 0.7em 1em;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #004d40;\n  transition: all 0.5s;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .activeRoute[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n  border-left: 4px solid #eeeeee;\n  background: #26a69a;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .activeRoute[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #004d40;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #26a69a;\n}\n#sidebar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 300;\n  font-size: 0.6em;\n  color: #80cbc4;\n  transition: 1s;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  bottom: 0px;\n  border-top: 1px dashed #26a69a;\n  padding-top: 10px;\n}\n#sidebar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transition: 1s;\n}\n.active[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n}\n.active[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: none;\n}\n.active[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%] {\n  margin-top: -1.4em;\n  margin-bottom: 0;\n  padding-bottom: -10px;\n  border-bottom: 2px dashed #009688;\n}\n@media only screen and (min-width: 1200px) {\n  #sidebar[_ngcontent-%COMP%] {\n    width: 17vw;\n  }\n\n  .active[_ngcontent-%COMP%] {\n    width: 4vw !important;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  #sidebar[_ngcontent-%COMP%] {\n    width: 18vw;\n  }\n\n  .active[_ngcontent-%COMP%] {\n    width: 5vw !important;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  #sidebar[_ngcontent-%COMP%] {\n    width: 25vw;\n  }\n\n  .active[_ngcontent-%COMP%] {\n    width: 8vw !important;\n  }\n}\n@media only screen and (min-width: 480px) and (max-width: 768px) {\n  #sidebar[_ngcontent-%COMP%] {\n    width: 30vw;\n  }\n\n  .active[_ngcontent-%COMP%] {\n    width: 10vw !important;\n  }\n}\n@media only screen and (max-width: 480px) {\n  #sidebar[_ngcontent-%COMP%] {\n    width: 40vw;\n  }\n  #sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .activeRoute[_ngcontent-%COMP%] {\n    border-left: 3px solid #eeeeee;\n  }\n\n  .active[_ngcontent-%COMP%] {\n    width: 13vw !important;\n  }\n\n  .activeRoute[_ngcontent-%COMP%] {\n    border-left: 2px solid #eeeeee;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsb0hBQUE7QUFFSjtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFFQSxtREFBQTtFQUNBLGtGQUFBO0FBQVI7QUFDUTtFQUNJLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0VBQ0EsaUNBQUE7QUFDWjtBQUNRO0VBQ0ksYUFBQTtBQUNaO0FBQ1E7RUFDSSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDWjtBQUVZO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0FBQVo7QUFFWTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7QUFBaEI7QUFDZ0I7RUFDSSw4QkFBQTtBQUNwQjtBQUNnQjtFQUNJLFlBQUE7QUFDcEI7QUFFWTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtBQUFoQjtBQUVZO0VBQ0ksb0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQWhCO0FBQ2dCO0VBQ0ksY0FBQTtBQUNwQjtBQUVZO0VBQ0ksbUJBQUE7QUFBaEI7QUFHUTtFQUNJLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQURaO0FBRVk7RUFDSSxjQUFBO0FBQWhCO0FBS1E7RUFBSyxrQkFBQTtBQURiO0FBRVE7RUFBTyxhQUFBO0FBQ2Y7QUFBUTtFQUFLLGFBQUE7QUFHYjtBQUZRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUFJWjtBQUFBO0VBQ0k7SUFDSSxXQUFBO0VBR047O0VBREU7SUFDSSxxQkFBQTtFQUlOO0FBQ0Y7QUFEQTtFQUNJO0lBQ0ksV0FBQTtFQUdOOztFQURFO0lBQ0kscUJBQUE7RUFJTjtBQUNGO0FBREE7RUFDSTtJQUNJLFdBQUE7RUFHTjs7RUFERTtJQUNJLHFCQUFBO0VBSU47QUFDRjtBQURBO0VBQ0k7SUFDSSxXQUFBO0VBR047O0VBREU7SUFDSSxzQkFBQTtFQUlOO0FBQ0Y7QUFEQTtFQUNJO0lBQ0ksV0FBQTtFQUdOO0VBRFU7SUFDSSw4QkFBQTtFQUdkOztFQUNFO0lBQ0ksc0JBQUE7RUFFTjs7RUFBRTtJQUNJLDhCQUFBO0VBR047QUFDRiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XG5cbiAgICAjc2lkZWJhciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgY29sb3I6ICNmYWZhZmE7XG4gICAgICAgIHBhZGRpbmctdG9wOiAydmg7XG4gICAgICAgIHRyYW5zaXRpb246IDFzO1xuICAgICAgICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggMHB4IDM1cHggLTEycHggcmdiYSg2Niw2Niw2NiwwLjkpOyBcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDBweCAzNXB4IC01cHggcmdiYSg2Niw2Niw2NiwwLjkpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTcxZGVnLCByZ2JhKDAsNzcsNjQsMSkgMCUsIHJnYmEoMCwxMjEsMTA3LDEpIDMwJSwgcmdiYSgwLDEyMSwxMDcsMSkgNzAlLCByZ2JhKDAsMTUwLDEzNiwxKSk7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAuN2VtIDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAxcztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS40cmVtLCAyLjZ2dywgMnJlbSk7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDg5N2I7XG4gICAgICAgIH1cbiAgICAgICAgaDIuc2Qge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICBjb2xvcjogIzgwY2JjNDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IGNsYW1wKDAuNGVtLCAydncsIDFlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNlZWVlZWU7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC45ZW0sIDIuNXZ3LCAxZW0pO1xuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjdlbSAwLjdlbSAwLjdlbSAxZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDRkNDA7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWN0aXZlUm91dGUge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2VlZWVlZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAgIzI2YTY5YTtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDRkNDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGk6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNmE2OWE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaDQge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNmVtO1xuICAgICAgICAgICAgY29sb3I6ICM4MGNiYzQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAxcztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICMyNmE2OWE7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDFzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5hY3RpdmUge1xuICAgICAgICBsaSB7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgICAgICBzcGFuIHsgZGlzcGxheTogbm9uZTsgfVxuICAgICAgICBoMyB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgICAgICAgLmZpcnN0IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xLjRlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogLTEwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDk2ODg7XG4gICAgICAgIH1cbiAgICB9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgI3NpZGViYXIge1xuICAgICAgICB3aWR0aDogMTd2dztcbiAgICB9XG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIHdpZHRoOiA0dncgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAjc2lkZWJhciB7XG4gICAgICAgIHdpZHRoOiAxOHZ3O1xuICAgIH1cbiAgICAuYWN0aXZlIHtcbiAgICAgICAgd2lkdGg6IDV2dyAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgI3NpZGViYXIge1xuICAgICAgICB3aWR0aDogMjV2dztcbiAgICB9XG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIHdpZHRoOiA4dncgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICNzaWRlYmFyIHtcbiAgICAgICAgd2lkdGg6IDMwdnc7XG4gICAgfVxuICAgIC5hY3RpdmUge1xuICAgICAgICB3aWR0aDogMTB2dyAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICNzaWRlYmFyIHtcbiAgICAgICAgd2lkdGg6IDQwdnc7XG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIC5hY3RpdmVSb3V0ZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZWVlZWVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5hY3RpdmUge1xuICAgICAgICB3aWR0aDogMTN2dyAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYWN0aXZlUm91dGUge1xuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNlZWVlZWU7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return []; }, { toggler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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