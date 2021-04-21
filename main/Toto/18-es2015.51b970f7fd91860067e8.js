(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "Jz5R":
/*!********************************************************!*\
  !*** ./src/app/layout/layout/layout-routing.module.ts ***!
  \********************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_layouts_full_full_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/layouts/full/full.component */ "RxpE");





const routes = [
    {
        path: '',
        component: src_app_layouts_full_full_component__WEBPACK_IMPORTED_MODULE_2__["FullComponent"],
        children: [
            {
                path: 'dashboard', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, /*! ../../Main/dashboard/dashboard.module */ "BnmD")).then(m => m.DashboardModule)
            },
            {
                path: 'customer', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! ../../Main/customer/customer.module */ "XqCq")).then(m => m.CustomerModule)
            },
            {
                path: 'provider', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ../../Main/provider/provider.module */ "fH3i")).then(m => m.ProviderModule)
            },
            {
                path: 'assessment', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, /*! ../../Main/assessment/assessment.module */ "Ipsq")).then(m => m.AssessmentModule)
            },
            {
                path: 'jobs', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! ../../Main/jobs/jobs.module */ "ODt3")).then(m => m.JobsModule)
            },
            {
                path: 'payment', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! ../../Main/payment/payment.module */ "JLCc")).then(m => m.PaymentModule)
            },
            {
                path: 'mobile-apps', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(7), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ../../Main/mobile-apps/mobile-apps.module */ "N6+B")).then(m => m.MobileAppsModule)
            },
            {
                path: 'master', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, /*! ../../Main/master/master.module */ "wj+y")).then(m => m.MasterModule)
            },
            {
                path: 'marketing', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, /*! ../../Main/marketing/marketing.module */ "2v7I")).then(m => m.MarketingModule)
            },
            {
                path: 'setting', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(7), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! ../../Main/setting/setting.module */ "Iw8v")).then(m => m.SettingModule)
            }
        ]
    },
];
let LayoutRoutingModule = /*@__PURE__*/ (() => {
    class LayoutRoutingModule {
    }
    LayoutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutRoutingModule });
    LayoutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutRoutingModule_Factory(t) { return new (t || LayoutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return LayoutRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "MYni":
/*!************************************************!*\
  !*** ./src/app/layout/layout/layout.module.ts ***!
  \************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-routing.module */ "Jz5R");




let LayoutModule = /*@__PURE__*/ (() => {
    class LayoutModule {
    }
    LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutModule });
    LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__["LayoutRoutingModule"]
            ]] });
    return LayoutModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__["LayoutRoutingModule"]] });
})();


/***/ })

}]);