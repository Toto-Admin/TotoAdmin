(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "2lh0":
/*!******************************************************************!*\
  !*** ./src/app/Main/jobs/task-details/task-details.component.ts ***!
  \******************************************************************/
/*! exports provided: TaskDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailsComponent", function() { return TaskDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



const _c0 = function () { return ["/customer/view"]; };
const _c1 = function () { return ["/provider/provider-view"]; };
let TaskDetailsComponent = /*@__PURE__*/ (() => {
    class TaskDetailsComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    TaskDetailsComponent.ɵfac = function TaskDetailsComponent_Factory(t) { return new (t || TaskDetailsComponent)(); };
    TaskDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskDetailsComponent, selectors: [["app-task-details"]], decls: 100, vars: 4, consts: [[1, "row"], [1, "col-lg-4", 2, "text-align", "left"], [1, "card", "card-hover", 2, "border", "1px solid #000000a1 !important"], [1, "card-header", "backgroundColor"], [1, "card-body"], [1, "profile-pic", "m-b-20", "m-t-20"], ["src", "assets/images/users/1.jpg", "width", "120", "alt", "Job Details", 1, "rounded-circle", "text-center", 2, "margin-left", "30%"], [1, "m-t-20", "m-b-0"], [1, "badge", "badge-pill", "badge-success", "font-14", "infoData"], [1, "badge", "badge-pill", "badge-warning", "font-14", "infoData"], [1, "col-lg-4", 2, "text-align", "center"], ["src", "assets/images/users/5.jpg", "width", "120", "alt", "user", 1, "rounded-circle"], [3, "routerLink"], ["href", "mailto:danielkristeen@gmail.com"], [1, "fa", "fa-star", "checked"], [1, "fa", "fa-star"], [1, "badge", "badge-pill", "badge-light", "font-14", "infoData"], ["src", "assets/images/users/3.jpg", "width", "120", "alt", "user", 1, "rounded-circle"]], template: function TaskDetailsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Job Details ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Poor Network Conncetion");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Price : ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "$200");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Price Type : ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Hour");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Promo Code : ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ASD34R");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Status : ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Completed");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Type : ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "On-Site");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Customer Details ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Daniel Kristeen");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "danielkristeen@gmail.com");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Royal Mail Flat 9, Wheatstone House");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "span", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "span", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "020 7946 0581");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Male");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "30/12/1993");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Reg. Date : 12/12/2020");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Active");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Provider Details ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h4", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Daniel Kristeen");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "danielkristeen@gmail.com");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Royal Mail Flat 9, Wheatstone House");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "span", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "span", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "span", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "span", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "span", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "020 7946 0581");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Male");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "30/12/1993");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Reg. Date : 12/12/2020");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Active");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "hr");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [""] });
    return TaskDetailsComponent;
})();


/***/ }),

/***/ "5sUo":
/*!**************************************************!*\
  !*** ./src/app/Main/jobs/jobs-routing.module.ts ***!
  \**************************************************/
/*! exports provided: JobsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsRoutingModule", function() { return JobsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _job_dashboard_job_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-dashboard/job-dashboard.component */ "jyF8");
/* harmony import */ var _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-details/job-details.component */ "EpRM");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task/task.component */ "qUV1");
/* harmony import */ var _unhappywithprovider_unhappywithprovider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unhappywithprovider/unhappywithprovider.component */ "zn3O");








const routes = [
    { path: '', component: _job_dashboard_job_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["JobDashboardComponent"] },
    {
        path: 'dashboard', component: _job_dashboard_job_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["JobDashboardComponent"],
        data: {
            title: 'Dashboard',
            urls: [
                { title: 'Jobs', url: '/jobs/dashboard' },
            ]
        }
    },
    {
        path: 'task', component: _task_task_component__WEBPACK_IMPORTED_MODULE_4__["TaskComponent"],
    },
    {
        path: 'jobview', component: _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_3__["JobDetailsComponent"],
    },
    {
        path: 'unhappycustomer', component: _unhappywithprovider_unhappywithprovider_component__WEBPACK_IMPORTED_MODULE_5__["UnhappywithproviderComponent"],
    },
];
let JobsRoutingModule = /*@__PURE__*/ (() => {
    class JobsRoutingModule {
    }
    JobsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: JobsRoutingModule });
    JobsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function JobsRoutingModule_Factory(t) { return new (t || JobsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return JobsRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](JobsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "EpRM":
/*!****************************************************************!*\
  !*** ./src/app/Main/jobs/job-details/job-details.component.ts ***!
  \****************************************************************/
/*! exports provided: JobDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailsComponent", function() { return JobDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task-details/task-details.component */ "2lh0");
/* harmony import */ var _task_history_task_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task-history/task-history.component */ "lD4W");
/* harmony import */ var _document_document_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../document/document.component */ "wyKc");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../payment/payment.component */ "HCii");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../activity/activity.component */ "bwL0");








function JobDetailsComponent_ng_template_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-task-details");
    }
}
function JobDetailsComponent_ng_template_17_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-task-history");
    }
}
function JobDetailsComponent_ng_template_21_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-document");
    }
}
function JobDetailsComponent_ng_template_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-payment");
    }
}
function JobDetailsComponent_ng_template_29_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-activity");
    }
}
let JobDetailsComponent = /*@__PURE__*/ (() => {
    class JobDetailsComponent {
        constructor() {
            this.currentJustify = 'start';
            this.active = 1;
            this.activeKeep = 1;
            this.activeSelected = 1;
            this.disabled = true;
            this.tabs = [1, 2, 3, 4, 5];
            this.counter = this.tabs.length + 1;
            this.activeDynamic = 1;
        }
        ngOnInit() {
        }
        onNavChange(changeEvent) {
            if (changeEvent.nextId === 3) {
                changeEvent.preventDefault();
            }
        }
    }
    JobDetailsComponent.ɵfac = function JobDetailsComponent_Factory(t) { return new (t || JobDetailsComponent)(); };
    JobDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JobDetailsComponent, selectors: [["app-job-details"]], decls: 31, vars: 7, consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], ["ngbNavLink", "/provider-list"], [1, "mt-2", 3, "ngbNavOutlet"]], template: function JobDetailsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Job Details");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Task Descripation");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6, 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIdChange", function JobDetailsComponent_Template_ul_activeIdChange_8_listener($event) { return ctx.active = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Task Details");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, JobDetailsComponent_ng_template_13_Template, 1, 0, "ng-template", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Task History");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, JobDetailsComponent_ng_template_17_Template, 1, 0, "ng-template", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Attachment");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, JobDetailsComponent_ng_template_21_Template, 1, 0, "ng-template", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Payment");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, JobDetailsComponent_ng_template_25_Template, 1, 0, "ng-template", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Activity");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, JobDetailsComponent_ng_template_29_Template, 1, 0, "ng-template", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", ctx.active);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r0);
            }
        }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavOutlet"], _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_2__["TaskDetailsComponent"], _task_history_task_history_component__WEBPACK_IMPORTED_MODULE_3__["TaskHistoryComponent"], _document_document_component__WEBPACK_IMPORTED_MODULE_4__["DocumentComponent"], _payment_payment_component__WEBPACK_IMPORTED_MODULE_5__["PaymentComponent"], _activity_activity_component__WEBPACK_IMPORTED_MODULE_6__["ActivityComponent"]], styles: [".active[_ngcontent-%COMP%] {\r\n    background-color: #2962ff !important;\r\n    color :white !important;\r\n  }\r\n  li[_ngcontent-%COMP%]{\r\n    width:120px;\r\n    text-align: center;\r\n    }"] });
    return JobDetailsComponent;
})();


/***/ }),

/***/ "HCii":
/*!********************************************************!*\
  !*** ./src/app/Main/jobs/payment/payment.component.ts ***!
  \********************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let PaymentComponent = /*@__PURE__*/ (() => {
    class PaymentComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    PaymentComponent.ɵfac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(); };
    PaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentComponent, selectors: [["app-payment"]], decls: 2, vars: 0, template: function PaymentComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Work in progress");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, styles: [""] });
    return PaymentComponent;
})();


/***/ }),

/***/ "ODt3":
/*!******************************************!*\
  !*** ./src/app/Main/jobs/jobs.module.ts ***!
  \******************************************/
/*! exports provided: JobsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsModule", function() { return JobsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _jobs_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jobs-routing.module */ "5sUo");
/* harmony import */ var _job_dashboard_job_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-dashboard/job-dashboard.component */ "jyF8");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-apexcharts */ "Tczp");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-charts */ "Lnru");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-chartist */ "4QQT");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "LSHg");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task/task.component */ "qUV1");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ "oTcB");
/* harmony import */ var _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./job-details/job-details.component */ "EpRM");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _document_document_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./document/document.component */ "wyKc");
/* harmony import */ var _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./task-details/task-details.component */ "2lh0");
/* harmony import */ var _task_history_task_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./task-history/task-history.component */ "lD4W");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./payment/payment.component */ "HCii");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./activity/activity.component */ "bwL0");
/* harmony import */ var _unhappywithprovider_unhappywithprovider_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./unhappywithprovider/unhappywithprovider.component */ "zn3O");



// import { DashboardComponent } from './dashboard/dashboard.component';

















let JobsModule = /*@__PURE__*/ (() => {
    class JobsModule {
    }
    JobsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: JobsModule });
    JobsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function JobsModule_Factory(t) { return new (t || JobsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
                _jobs_routing_module__WEBPACK_IMPORTED_MODULE_2__["JobsRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_7__["ChartistModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"]
            ]] });
    return JobsModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](JobsModule, { declarations: [_job_dashboard_job_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["JobDashboardComponent"], _task_task_component__WEBPACK_IMPORTED_MODULE_9__["TaskComponent"], _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_11__["JobDetailsComponent"], _document_document_component__WEBPACK_IMPORTED_MODULE_13__["DocumentComponent"], _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_14__["TaskDetailsComponent"], _task_history_task_history_component__WEBPACK_IMPORTED_MODULE_15__["TaskHistoryComponent"], _payment_payment_component__WEBPACK_IMPORTED_MODULE_16__["PaymentComponent"], _activity_activity_component__WEBPACK_IMPORTED_MODULE_17__["ActivityComponent"], _unhappywithprovider_unhappywithprovider_component__WEBPACK_IMPORTED_MODULE_18__["UnhappywithproviderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
            _jobs_routing_module__WEBPACK_IMPORTED_MODULE_2__["JobsRoutingModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
            ng_chartist__WEBPACK_IMPORTED_MODULE_7__["ChartistModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"]] });
})();


/***/ }),

/***/ "bwL0":
/*!**********************************************************!*\
  !*** ./src/app/Main/jobs/activity/activity.component.ts ***!
  \**********************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let ActivityComponent = /*@__PURE__*/ (() => {
    class ActivityComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    ActivityComponent.ɵfac = function ActivityComponent_Factory(t) { return new (t || ActivityComponent)(); };
    ActivityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivityComponent, selectors: [["app-activity"]], decls: 95, vars: 0, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "mailbox", "list-style-none", "w-100", "m-t-20", "p-t-1"], [1, "message-center"], ["href", "javascript:void(0)", "id", "chat_user_1", "data-user-id", "1", 1, "message-item"], [1, "user-img"], ["src", "assets/images/users/2.jpg", "alt", "user", 1, "rounded-circle"], [1, "profile-status", "online", "pull-right"], [1, "mail-contnet"], [1, "message-title"], [1, "mail-desc"], [1, "time"], ["href", "javascript:void(0)", "id", "chat_user_2", "data-user-id", "2", 1, "message-item"], ["src", "assets/images/users/3.jpg", "alt", "user", 1, "rounded-circle"], [1, "profile-status", "busy", "pull-right"], ["href", "javascript:void(0)", "id", "chat_user_3", "data-user-id", "3", 1, "message-item"], [1, "profile-status", "away", "pull-right"], ["href", "javascript:void(0)", "id", "chat_user_4", "data-user-id", "4", 1, "message-item"], [1, "profile-status", "offline", "pull-right"], ["href", "javascript:void(0)", "id", "chat_user_5", "data-user-id", "5", 1, "message-item"], ["href", "javascript:void(0)", "id", "chat_user_6", "data-user-id", "6", 1, "message-item"], ["href", "javascript:void(0)", "id", "chat_user_7", "data-user-id", "7", 1, "message-item"], ["href", "javascript:void(0)", "id", "chat_user_8", "data-user-id", "8", 1, "message-item"]], template: function ActivityComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ashish Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Has Accepted Your Task Request.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "9:30 AM");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Pavan kumar");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "You Have A New Request For A Job.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "9:10 AM");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Pavan kumar");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Has Accepted Your Task Request.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "9:08 AM");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Ashish Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Just see the my admin!");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "9:02 AM");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Pavan kumar");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Just see the my admin!");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "9:02 AM");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "span", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h5", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Ashish Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Just see the my admin!");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "9:02 AM");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "span", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h5", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Pavan kumar");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Just see the my admin!");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "9:02 AM");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "span", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h5", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Ashish Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Just see the my admin!");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "9:02 AM");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, styles: [""] });
    return ActivityComponent;
})();


/***/ }),

/***/ "jyF8":
/*!********************************************************************!*\
  !*** ./src/app/Main/jobs/job-dashboard/job-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: JobDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDashboardComponent", function() { return JobDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-apexcharts */ "Tczp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "hrfs");





const _c0 = ["chart"];
const _c1 = ["userChartOptions"];
const _c2 = function () { return ["/customer/view"]; };
const _c3 = function () { return ["#a1aab2", "#36bea6", "#2962FF", "#00FFFF", "#4863A0", "#6960EC"]; };
const _c4 = function (a0) { return { backgroundColor: a0 }; };
const _c5 = function (a0) { return [a0]; };
let JobDashboardComponent = /*@__PURE__*/ (() => {
    class JobDashboardComponent {
        constructor() {
            this.chart = Object.create(null);
            this.chart1 = Object.create(null);
            this.chart3 = Object.create(null);
            this.chart4 = Object.create(null);
            this.chart5 = Object.create(null);
            this.chart6 = Object.create(null);
            this.chart7 = Object.create(null);
            this.config = {};
            this.chart8 = Object.create(null);
            this.chart9 = Object.create(null);
            this.pieChartLabels = [
                'AC Service',
                'TV Service',
                'ISP',
                'Poor wifi Coverage',
                'Connectivity',
                'Voice Modulation'
            ];
            this.pieChartData = [100, 200, 100, 50, 300, 50];
            this.pieChartType = 'pie';
            this.pieChartLabels1 = [
                'AC Service',
                'TV Service',
                'ISP',
                'Poor wifi Coverage',
                'Connectivity',
                'Voice Modulation'
            ];
            this.pieChartData1 = [120, 240, 400, 90, 30, 50];
            this.pieChartType1 = 'pie';
            this.mEmailChartOptions = {
                series: [71, 60, 65, 77, 289, 172, 298],
                chart: {
                    fontFamily: 'Nunito Sans,sans-serif',
                    type: 'donut',
                    height: 280,
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '73px',
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '18px',
                                    color: undefined,
                                    offsetY: 10
                                },
                                value: {
                                    show: false,
                                    color: '#99abb4',
                                },
                                total: {
                                    show: true,
                                    label: 'Ratio',
                                    color: '#99abb4',
                                }
                            }
                        }
                    }
                },
                tooltip: {
                    fillSeriesColor: false,
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    width: 0
                },
                legends: {
                    show: false,
                },
                labels: ['Connectivity', 'Stove Repair Service', 'TV', 'Mobile Hardware', 'New Network Setup', 'ISP', 'Voice Modulation'],
                colors: ['#40c4ff', '#2961ff', '#ff821c', '#7e74fb', '#40c4ff', '#2961ff', '#ff821c'],
            };
            this.mEmailChartOptions1 = {
                series: [71, 60],
                chart: {
                    fontFamily: 'Nunito Sans,sans-serif',
                    type: 'donut',
                    height: 280,
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '73px',
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '18px',
                                    color: undefined,
                                    offsetY: 10
                                },
                                value: {
                                    show: false,
                                    color: '#99abb4',
                                },
                                total: {
                                    show: true,
                                    label: 'Ratio',
                                    color: '#99abb4',
                                }
                            }
                        }
                    }
                },
                tooltip: {
                    fillSeriesColor: false,
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    width: 0
                },
                legends: {
                    show: false,
                },
                labels: ['Top Performer', 'Top Rated  '],
                colors: ['#40c4ff', '#2961ff'],
            };
            this.mEmailChartOptions2 = {
                series: [71, 60, 65, 77, 289, 172, 298],
                chart: {
                    fontFamily: 'Nunito Sans,sans-serif',
                    type: 'donut',
                    height: 280,
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '73px',
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '18px',
                                    color: undefined,
                                    offsetY: 10
                                },
                                value: {
                                    show: false,
                                    color: '#99abb4',
                                },
                                total: {
                                    show: true,
                                    label: 'Ratio',
                                    color: '#99abb4',
                                }
                            }
                        }
                    }
                },
                tooltip: {
                    fillSeriesColor: false,
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    width: 0
                },
                legends: {
                    show: false,
                },
                labels: ['Connectivity', 'Stove Repair Service', 'TV', 'Mobile Hardware', 'New Network Setup', 'ISP', 'Voice Modulation'],
                colors: ['#40c4ff', '#2961ff', '#ff821c', '#7e74fb', '#40c4ff', '#2961ff', '#ff821c'],
            };
            this.chartOptions = {
                series: [
                    {
                        name: 'Sales Performance',
                        data: [30, 400, 100, 400, 150, 275, 135, 200, 218]
                    },
                ],
                chart: {
                    fontFamily: 'Nunito Sans,sans-serif',
                    height: 350,
                    type: 'area',
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                markers: {
                    size: 3,
                    strokeColors: "transparent"
                },
                stroke: {
                    curve: 'smooth',
                    width: '2',
                },
                colors: ['#2962ff'],
                legend: {
                    show: false,
                },
                fill: {
                    opacity: 0.7
                },
                grid: {
                    show: true,
                    strokeDashArray: 0,
                    borderColor: 'rgba(0,0,0,0.1)',
                },
                xaxis: {
                    type: 'category',
                    categories: [
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct'
                    ],
                    labels: {
                        style: {
                            colors: '#a1aab2'
                        }
                    }
                },
                tooltip: {
                    theme: 'dark'
                }
            };
            this.COChartOptions = {
                series: [{
                        name: 'Month wise',
                        data: [3, 8, 2, 3, 2, 5, 6, 8],
                    }],
                chart: {
                    type: 'area',
                    height: 170,
                    fontFamily: 'Nunito Sans,sans-serif',
                    sparkline: {
                        enabled: true
                    },
                    toolbar: {
                        show: false
                    }
                },
                stroke: {
                    curve: "smooth",
                    width: 1,
                },
                markers: {
                    size: 3,
                    strokeWidth: 3,
                    strokeColors: "transparent",
                },
                colors: ["#2962FF"],
                xaxis: {
                    labels: {
                        show: false,
                    },
                },
                dataLabels: {
                    enabled: false
                },
                yaxis: {
                    labels: {
                        show: false,
                    },
                },
                tooltip: {
                    x: {
                        format: "dd/MM/yy HH:mm",
                    },
                    theme: "dark",
                },
                legends: {
                    show: false,
                },
                grid: {
                    show: false,
                },
            };
            this.totalvisitsChartOptions = {
                series: [
                    {
                        name: 'Earnings',
                        data: [6, 10, 9, 11, 9, 10, 12, 10, 9, 11, 9, 10, 12, 10]
                    }
                ],
                chart: {
                    height: 60,
                    type: 'bar',
                    fontFamily: 'Nunito Sans,sans-serif',
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                dataLabels: {
                    enabled: false
                },
                markers: {
                    size: 0,
                },
                fill: {
                    colors: ['#4fc3f7'],
                    opacity: 1,
                },
                stroke: {
                    show: true,
                    width: 7,
                    colors: ["transparent"],
                },
                legend: {
                    show: false,
                },
                grid: {
                    show: false
                },
                xaxis: {
                    labels: {
                        show: false
                    }
                },
                yaxis: {
                    labels: {
                        show: false
                    }
                },
                tooltip: {
                    theme: 'dark',
                    x: {
                        show: false
                    }
                }
            };
            this.salesratioChartOptions = {
                series: [
                    {
                        name: 'sales ratio',
                        data: [5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8]
                    }
                ],
                chart: {
                    height: 60,
                    type: 'area',
                    fontFamily: 'Nunito Sans,sans-serif',
                    toolbar: {
                        show: false,
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                dataLabels: {
                    enabled: false
                },
                markers: {
                    size: 0,
                },
                stroke: {
                    curve: 'smooth',
                    width: '2',
                },
                colors: ['#2961ff'],
                legend: {
                    show: false,
                },
                grid: {
                    show: false
                },
                xaxis: {
                    labels: {
                        show: false
                    }
                },
                yaxis: {
                    labels: {
                        show: false
                    }
                },
                tooltip: {
                    theme: 'dark'
                }
            };
            this.EmailChartOptions = {
                series: [45, 15, 27, 18],
                chart: {
                    fontFamily: 'Nunito Sans,sans-serif',
                    type: 'donut',
                    height: 270
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '73px',
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '18px',
                                    color: undefined,
                                    offsetY: 10
                                },
                                value: {
                                    show: false,
                                    color: '#99abb4',
                                },
                                total: {
                                    show: true,
                                    label: 'Visits',
                                    color: '#99abb4',
                                }
                            }
                        }
                    }
                },
                tooltip: {
                    fillSeriesColor: false,
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    width: 0
                },
                legends: {
                    show: false,
                },
                labels: ['Rescheduel', 'No shows', 'Provider report', 'Return visit'],
                colors: ['#40c4ff', '#2961ff', '#ff821c', '#7e74fb'],
            };
            /***********************/
            /* Active user chart */
            /************************/
            this.userChartOptions = {
                series: [
                    {
                        name: 'Active Users',
                        data: [20, 55, 44, 30, 61, 48, 20, 20, 55, 44, 30, 61, 48, 20]
                    },
                ],
                chart: {
                    fontFamily: 'Nunito Sans,sans-serif',
                    type: 'bar',
                    height: '50',
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: '10%',
                        barHeight: '10%',
                    }
                },
                fill: {
                    colors: ['#2962ff'],
                    opacity: 1,
                },
                stroke: {
                    show: true,
                    width: 7,
                    colors: ["transparent"],
                },
                tooltip: {
                    theme: 'dark',
                    fillSeriesColor: false,
                    marker: {
                        show: false,
                    },
                    x: {
                        show: false
                    }
                }
            };
        }
        ngOnInit() {
        }
    }
    JobDashboardComponent.ɵfac = function JobDashboardComponent_Factory(t) { return new (t || JobDashboardComponent)(); };
    JobDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JobDashboardComponent, selectors: [["app-job-dashboard"]], viewQuery: function JobDashboardComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart1 = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart3 = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart4 = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart5 = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart6 = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart7 = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart8 = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart9 = _t.first);
            }
        }, decls: 298, vars: 69, consts: [[1, "row"], [1, "col-md-6"], [1, "card", 2, "height", "95%"], [1, "card-body"], [1, "d-flex", "align-items-center", "m-b-20"], [1, "font-bold", "m-b-0"], [1, "ml-auto"], [1, "mdi", "mdi-wallet", "text-info", "display-5"], ["href", "javascript: void(0)", 1, "font-bold"], [1, "m-t-40", "d-flex", "flex-column"], [3, "series", "chart", "dataLabels", "legend", "colors", "stroke", "labels", "tooltip", "markers"], [1, "col-sm-12", "col-lg-6"], [1, "col-sm-12", "col-md-6"], [1, "card"], [1, "card-title"], [1, "font-bold", "m-t-20", "m-b-10"], [1, "card-subtitle", "m-b-0"], [1, "text-center", "d-flex", "flex-column", 2, "height", "62px"], [3, "series", "chart", "xaxis", "yaxis", "grid", "stroke", "tooltip", "dataLabels", "legend", "colors", "markers", "fill"], [1, "d-flex", "flex-column"], [3, "series", "chart", "xaxis", "yaxis", "grid", "stroke", "tooltip", "dataLabels", "legend", "colors", "markers"], [1, "col-sm-12"], [1, "card", "order-widget"], [1, "col-sm-12", "col-md-12"], [1, "row", "m-t-20"], [1, "col-4", "border-right"], [1, "fa", "fa-circle", "text-cyan"], [1, "m-b-0", "font-medium"], [1, "fa", "fa-circle", "text-orange"], [1, "fa", "fa-circle", "text-info"], [1, "col-md-12"], [1, "d-md-flex", "align-items-center"], [1, "dl"], [1, "custom-select"], ["value", "0", "selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "table-responsive"], [1, "table", "v-middle", "table-striped"], [1, "bg-light"], [1, "border-top-0", "backgroundColor", "tdLeft"], [1, "border-top-0", "backgroundColor", "tdCenter"], [1, "tdLeft"], [1, "tdCenter"], [1, "d-flex", "align-items-center"], ["src", "assets/images/users/1.jpg", "height", " 32px", "width", "32px", 1, "rounded-circle"], [1, "ml-3"], [1, "font-medium", "mb-0"], [3, "routerLink"], [1, "label", "label-success"], ["src", "assets/images/users/2.jpg", "height", " 32px", "width", "32px", 1, "rounded-circle"], [1, "label", "label-warning"], ["src", "assets/images/users/3.jpg", "height", " 32px", "width", "32px", 1, "rounded-circle"], ["src", "assets/images/users/4.jpg", "height", " 32px", "width", "32px", 1, "rounded-circle"], ["src", "assets/images/users/5.jpg", "height", " 32px", "width", "32px", 1, "rounded-circle"], [1, "card", "card-hover"], [1, "card-body", 2, "padding-bottom", "8%"], [1, "d-flex", "flex-column", "m-auto"], [3, "series", "chart", "dataLabels", "legend", "colors", "stroke", "labels", "tooltip", "plotOptions"], [1, "row", "m-t-30", "m-b-15"], [1, "col-3", "birder-right", "text-left"], [1, "m-b-0"], [1, "fa", "fa-circle", 2, "color", "#40c4ff"], [1, "col-3", "birder-right", "text-center"], [1, "fa", "fa-circle", 2, "color", "#2961ff"], [1, "col-3", "text-right"], [1, "fa", "fa-circle", 2, "color", "#ff821c"], [1, "fa", "fa-circle", 2, "color", "#7e74fb"], [1, "feed-widget", 2, "overflow-y", "scroll"], [1, "list-style-none", "feed-body", "m-0", "p-b-20"], [1, "feed-item"], [1, "feed-icon", "bg-info"], [1, "ti-user"], [1, "ml-auto", "font-12", "text-muted"], [1, "feed-icon", "bg-success"], [1, "feed-icon", "bg-warning"], [1, "feed-icon", "bg-danger"], [1, "feed-icon", "bg-inverse"], [1, "col-lg-6"], [1, "card-subtitle"], ["baseChart", "", "height", "132px", 3, "data", "labels", "chartType", "colors"]], template: function JobDashboardComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "348");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Overview of total task booking details");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last Month Summary");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "apx-chart", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Active Task Customer");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "1378");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Overview of total task active customer");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "apx-chart", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Active Task Provider");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "356");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Overview of total active task provider");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "apx-chart", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Jobs Status");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Overview of jobs status");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "90");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Completed");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "54");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Dispute");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h3", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "36");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Cancelled");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h4", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Active Booking");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "select", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Monthly");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Daily");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Weekly");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "option", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Yearly");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "table", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "thead");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "tr", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "th", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "JobID");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "th", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Category");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "th", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "type");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "th", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Customer");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "th", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "status");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "th", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Time");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "1");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Connectivity");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "On-site");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "label", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Done");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "14-03-2021");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Wifi connection");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "On-site");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Sam Wood");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "label", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Working");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "13-03-2021");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Connectivity");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "On-site");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Ashitosh Parab");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "label", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Done");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "14-03-2021");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Voice modulation");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "On-site");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "img", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Prakash Jadhav");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "td", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "label", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Done");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "14-03-2021");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Connectivity");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Remote");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "img", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Sudhir Pawar");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "label", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Done");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "14-03-2021");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 56);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 57);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h4", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Task Activity");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 58);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "apx-chart", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 60);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 61);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "h4", 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "45 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "small");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "i", 63);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Reschedule ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 64);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "h4", 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "15 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "small");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "i", 65);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "No Shows ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 66);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "h4", 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "27 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "small");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "i", 67);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Provider Report ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 66);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "h4", 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "18 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "small");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "i", 68);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Return Visit ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 56);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "h4", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Provider Latest Activity ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 69);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "ul", 70);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "li", 71);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 72);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "i", 73);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, " Alice Freeman started following you.. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span", 74);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Just Now");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "li", 71);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 75);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "i", 73);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " Andrew Green sent you a message. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "span", 74);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "2 Hours ago");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "li", 71);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 76);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "i", 73);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " Garry Newman shared a public post with your group. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "span", 74);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "31 May");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "li", 71);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 77);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "i", 73);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, " Carl Henderson wants to play Fallout Shelter with you. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "span", 74);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "30 May");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "li", 71);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 78);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "i", 73);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " Jane Dean started following you. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "span", 74);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "27 May");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "li", 71);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 72);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "i", 73);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " Juan Carpenter sent you a message. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "span", 74);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Just Now");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "li", 71);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 77);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "i", 73);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, " Judith Burton shared a photo with you. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "span", 74);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "30 May");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "h4", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Booking By Task Service");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "h6", 80);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "How much task in each service");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "canvas", 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "h4", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Disputes By Service");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "h6", 80);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "How much disputes in each service");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "canvas", 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.COChartOptions.series)("chart", ctx.COChartOptions.chart)("dataLabels", ctx.COChartOptions.dataLabels)("legend", ctx.COChartOptions.legends)("colors", ctx.COChartOptions.colors)("stroke", ctx.COChartOptions.stroke)("labels", ctx.COChartOptions.labels)("tooltip", ctx.COChartOptions.tooltip)("markers", ctx.COChartOptions.markers);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.totalvisitsChartOptions.series)("chart", ctx.totalvisitsChartOptions.chart)("xaxis", ctx.totalvisitsChartOptions.xaxis)("yaxis", ctx.totalvisitsChartOptions.yaxis)("grid", ctx.totalvisitsChartOptions.grid)("stroke", ctx.totalvisitsChartOptions.stroke)("tooltip", ctx.totalvisitsChartOptions.tooltip)("dataLabels", ctx.totalvisitsChartOptions.dataLabels)("legend", ctx.totalvisitsChartOptions.legend)("colors", ctx.totalvisitsChartOptions.colors)("markers", ctx.totalvisitsChartOptions.markers)("fill", ctx.totalvisitsChartOptions.fill);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.salesratioChartOptions.series)("chart", ctx.salesratioChartOptions.chart)("xaxis", ctx.salesratioChartOptions.xaxis)("yaxis", ctx.salesratioChartOptions.yaxis)("grid", ctx.salesratioChartOptions.grid)("stroke", ctx.salesratioChartOptions.stroke)("tooltip", ctx.salesratioChartOptions.tooltip)("dataLabels", ctx.salesratioChartOptions.dataLabels)("legend", ctx.salesratioChartOptions.legend)("colors", ctx.salesratioChartOptions.colors)("markers", ctx.salesratioChartOptions.markers);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](77);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](54, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](55, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](56, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](57, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](58, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.EmailChartOptions.series)("chart", ctx.EmailChartOptions.chart)("dataLabels", ctx.EmailChartOptions.dataLabels)("legend", ctx.EmailChartOptions.legends)("colors", ctx.EmailChartOptions.colors)("stroke", ctx.EmailChartOptions.stroke)("labels", ctx.EmailChartOptions.labels)("tooltip", ctx.EmailChartOptions.tooltip)("plotOptions", ctx.EmailChartOptions.plotOptions);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](83);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.pieChartData)("labels", ctx.pieChartLabels)("chartType", ctx.pieChartType)("colors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](62, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](60, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](59, _c3))));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.pieChartData1)("labels", ctx.pieChartLabels1)("chartType", ctx.pieChartType1)("colors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](67, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](65, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](64, _c3))));
            }
        }, directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]], styles: [".feed-widget[_ngcontent-%COMP%] {\r\n    height: 370px;\r\n    position: relative;\r\n    overflow: hidden !important;\r\n    -ms-overflow-style: none;\r\n    touch-action: auto;\r\n  }"] });
    return JobDashboardComponent;
})();


/***/ }),

/***/ "lD4W":
/*!******************************************************************!*\
  !*** ./src/app/Main/jobs/task-history/task-history.component.ts ***!
  \******************************************************************/
/*! exports provided: TaskHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskHistoryComponent", function() { return TaskHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let TaskHistoryComponent = /*@__PURE__*/ (() => {
    class TaskHistoryComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    TaskHistoryComponent.ɵfac = function TaskHistoryComponent_Factory(t) { return new (t || TaskHistoryComponent)(); };
    TaskHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskHistoryComponent, selectors: [["app-task-history"]], decls: 33, vars: 0, consts: [[1, "row", "text-center"], [1, "col-md-6"], [1, "card", 2, "border", "1px solid #000000a1 !important"], [1, "card-header", "backgroundColor"], [1, "card-body"], [1, "row"], [1, "m-t-30"]], template: function TaskHistoryComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Task Details History ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Date");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "03/23/2021");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Start Time");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "12:00:00");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "comment");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Task start with in time");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Time Slot");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Afternoon");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "End Time");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "15:00:00");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Created At");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "03/23/2021 04:33 PM");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, styles: [""] });
    return TaskHistoryComponent;
})();


/***/ }),

/***/ "qUV1":
/*!**************************************************!*\
  !*** ./src/app/Main/jobs/task/task.component.ts ***!
  \**************************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ "oTcB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




const _c0 = function () { return ["/customer/view"]; };
const _c1 = function () { return ["/jobs/jobview"]; };
let TaskComponent = /*@__PURE__*/ (() => {
    class TaskComponent {
        constructor() {
            this.dtOptions = {};
        }
        ngOnInit() {
            this.dtOptions = {
                pagingType: 'full_numbers',
                pageLength: 8,
                ordering: true,
                lengthMenu: [[8, 25, 50, 100, -1], [8, 25, 50, 100, 'All']],
                columnDefs: [
                    { orderable: false, targets: -1 }
                ]
            };
        }
    }
    TaskComponent.ɵfac = function TaskComponent_Factory(t) { return new (t || TaskComponent)(); };
    TaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskComponent, selectors: [["app-task"]], decls: 304, vars: 61, consts: [[1, "row"], [1, "col-12"], [1, "card", "card-body"], [1, "card-title"], [1, "card-subtitle"], [1, "col-md-12"], [1, "button-group"], ["type", "button", 1, "btn", "btn-rounded", "btn-primary"], ["type", "button", 1, "btn", "btn-rounded", "btn-secondary"], ["type", "button", 1, "btn", "btn-rounded", "btn-warning"], ["type", "button", 1, "btn", "btn-rounded", "btn-success"], ["type", "button", 1, "btn", "btn-rounded", "btn-danger"], [1, ""], ["datatable", "", 1, "row-border", "hover", "table", "table-bordered", 3, "dtOptions"], [2, "background", "#92adfc"], [1, "backgroundColor", "tdLeft"], [1, "backgroundColor"], [1, "tdLeft"], [1, "d-flex", "align-items-center"], ["src", "assets/images/users/5.jpg", "height", " 25px", "width", "25px", 1, "rounded-circle"], [1, "ml-3"], [1, "font-medium", "mb-0"], [3, "routerLink"], ["src", "assets/images/users/3.jpg", "height", " 25px", "width", "25px", 1, "rounded-circle"], [1, "fas", "fa-eye"], ["src", "assets/images/users/4.jpg", "height", " 25px", "width", "25px", 1, "rounded-circle"], ["src", "assets/images/users/2.jpg", "height", " 25px", "width", "25px", 1, "rounded-circle"], ["src", "assets/images/users/1.jpg", "height", " 25px", "width", "25px", 1, "rounded-circle"], [1, "d-flex", "justify-content-center", "mt-5"]], template: function TaskComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Task Management");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Here is the Jobs list you can filter All tasks, Pending, Scheduled, Completed and Cancelled the Jobs");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "All Tasks");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Pending");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Scheduled");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Completed");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cancelled");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "table", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "thead", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "SERVICE");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "DURATION");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "CUSTOMER");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "PROVIDER");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "TYPE");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "STATUS");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "ACTION");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Connectivity");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "2 hour");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "On-site");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Finish");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Voice modulation");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "2 hour");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "On-site");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Finish");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "New network setup");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "2 hour");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "On-site");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Finish");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Internate speed");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "2 hour");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "On-site");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Finish");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Connectivity");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "2 hour");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "img", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "On-site");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Finish");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Poor wifi coverage");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "2 hour");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "img", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "On-site");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Finish");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "i", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Mobile hardware ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "6 hour");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "img", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "img", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "On-site");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Finish");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "i", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Stove repair");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "2 hour");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "img", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Prathamesh Deasi");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "img", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Akashy Poundkar");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "On-site");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Finish");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "i", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Voice modulation");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "2 hour");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "img", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Ashitosh Jadhav");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "img", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Pradip Sutar");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Remote");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Finish");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "i", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " Poor wifi coverage");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "3 hour");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "img", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Prakash Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "img", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Remote");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Completed");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "a", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](302, "i", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](48, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](49, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](50, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](51, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](52, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](53, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](54, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](55, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](56, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](57, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](58, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](59, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](60, _c1));
            }
        }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [""] });
    return TaskComponent;
})();


/***/ }),

/***/ "wyKc":
/*!**********************************************************!*\
  !*** ./src/app/Main/jobs/document/document.component.ts ***!
  \**********************************************************/
/*! exports provided: DocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let DocumentComponent = /*@__PURE__*/ (() => {
    class DocumentComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    DocumentComponent.ɵfac = function DocumentComponent_Factory(t) { return new (t || DocumentComponent)(); };
    DocumentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocumentComponent, selectors: [["app-document"]], decls: 25, vars: 0, consts: [[1, "row"], [1, "col-lg-3", "col-md-6"], [1, "card", "card-hover"], [1, "card-body"], [1, "col-12"], ["src", "assets/images/product/chair.png", "alt", "user", "width", "200px", "height", "200px"], ["src", "assets/images/product/chair4.png", "alt", "user", "width", "200px", "height", "200px"], ["src", "assets/images/product/chair2.png", "alt", "user", "width", "200px", "height", "200px"], ["src", "assets/images/product/chair3.png", "alt", "user", "width", "200px", "height", "200px"]], template: function DocumentComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, styles: [""] });
    return DocumentComponent;
})();


/***/ }),

/***/ "zn3O":
/*!********************************************************************************!*\
  !*** ./src/app/Main/jobs/unhappywithprovider/unhappywithprovider.component.ts ***!
  \********************************************************************************/
/*! exports provided: UnhappywithproviderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnhappywithproviderComponent", function() { return UnhappywithproviderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ "oTcB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




const _c0 = function () { return ["/customer/view"]; };
const _c1 = function () { return ["/jobs/jobview"]; };
let UnhappywithproviderComponent = /*@__PURE__*/ (() => {
    class UnhappywithproviderComponent {
        constructor() {
            this.dtOptions = {};
        }
        ngOnInit() {
            this.dtOptions = {
                pagingType: 'full_numbers',
                pageLength: 10,
                ordering: true,
                lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, 'All']],
                columnDefs: [
                    { orderable: false, targets: -1 }
                ]
            };
        }
    }
    UnhappywithproviderComponent.ɵfac = function UnhappywithproviderComponent_Factory(t) { return new (t || UnhappywithproviderComponent)(); };
    UnhappywithproviderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnhappywithproviderComponent, selectors: [["app-unhappywithprovider"]], decls: 129, vars: 31, consts: [[1, "row"], [1, "col-12"], [1, "card", "card-body"], [1, "card-title"], [1, "card-subtitle"], [1, ""], [1, "col-md-12"], ["datatable", "", 1, "row-border", "hover", "table", "table-bordered", 3, "dtOptions"], [2, "background", "#92adfc"], [1, "backgroundColor", "tdLeft"], [1, "backgroundColor"], [1, "tdLeft"], [1, "d-flex", "align-items-center"], ["src", "assets/images/users/5.jpg", "height", " 30px", "width", "30px", 1, "rounded-circle"], [1, "ml-3"], [1, "font-medium", "mb-0"], [3, "routerLink"], ["src", "assets/images/users/3.jpg", "height", " 30px", "width", "30px", 1, "rounded-circle"], ["src", "assets/images/users/4.jpg", "height", " 30px", "width", "30px", 1, "rounded-circle"], ["src", "assets/images/users/2.jpg", "height", " 30px", "width", "30px", 1, "rounded-circle"], ["src", "assets/images/users/1.jpg", "height", " 30px", "width", "30px", 1, "rounded-circle"], [1, "d-flex", "justify-content-center", "mt-5"]], template: function UnhappywithproviderComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Unhappy With Provider");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "h5", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "UNHAPPY REASON");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "CUSTOMER");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "PROVIDER");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "ACTION");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Tell Us Your Name And Your Address And Your\t");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "View");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " | Dispute | Resolve");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Tell Us About Your Task With Eme");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "View");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " | Dispute | Resolve");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Tell Me About The Day I Just Got To The Gym");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "View");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " | Dispute | Resolve");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Tell Us Your Name And Your Address And Address");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "View");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " | Dispute | Resolve");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Special Instructions App I Have To Do With The");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Sushant Patil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "View");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " | Dispute | Resolve");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c1));
            }
        }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [""] });
    return UnhappywithproviderComponent;
})();


/***/ })

}]);