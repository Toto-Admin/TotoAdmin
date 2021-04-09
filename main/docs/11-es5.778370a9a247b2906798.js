(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11], {
    /***/
    "Jz5R":
    /*!********************************************************!*\
      !*** ./src/app/layout/layout/layout-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: LayoutRoutingModule */

    /***/
    function Jz5R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function () {
        return LayoutRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_layouts_full_full_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/layouts/full/full.component */
      "RxpE");

      var routes = [{
        path: '',
        component: src_app_layouts_full_full_component__WEBPACK_IMPORTED_MODULE_2__["FullComponent"],
        children: [{
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(10)]).then(__webpack_require__.bind(null,
            /*! ../../Main/dashboard/dashboard.module */
            "BnmD")).then(function (m) {
              return m.DashboardModule;
            });
          }
        }, {
          path: 'customer',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(7)]).then(__webpack_require__.bind(null,
            /*! ../../Main/customer/customer.module */
            "XqCq")).then(function (m) {
              return m.CustomerModule;
            });
          }
        }, {
          path: 'provider',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(5)]).then(__webpack_require__.bind(null,
            /*! ../../Main/provider/provider.module */
            "fH3i")).then(function (m) {
              return m.ProviderModule;
            });
          }
        }, {
          path: 'assessment',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            8).then(__webpack_require__.bind(null,
            /*! ../../Main/assessment/assessment.module */
            "Ipsq")).then(function (m) {
              return m.AssessmentModule;
            });
          }
        }, {
          path: 'jobs',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(6)]).then(__webpack_require__.bind(null,
            /*! ../../Main/jobs/jobs.module */
            "ODt3")).then(function (m) {
              return m.JobsModule;
            });
          }
        }, {
          path: 'payment',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e(0), __webpack_require__.e(9)]).then(__webpack_require__.bind(null,
            /*! ../../Main/payment/payment.module */
            "JLCc")).then(function (m) {
              return m.PaymentModule;
            });
          }
        }]
      }];

      var LayoutRoutingModule = /*@__PURE__*/function () {
        var LayoutRoutingModule = function LayoutRoutingModule() {
          _classCallCheck(this, LayoutRoutingModule);
        };

        LayoutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: LayoutRoutingModule
        });
        LayoutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function LayoutRoutingModule_Factory(t) {
            return new (t || LayoutRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return LayoutRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "MYni":
    /*!************************************************!*\
      !*** ./src/app/layout/layout/layout.module.ts ***!
      \************************************************/

    /*! exports provided: LayoutModule */

    /***/
    function MYni(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
        return LayoutModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout-routing.module */
      "Jz5R");

      var LayoutModule = /*@__PURE__*/function () {
        var LayoutModule = function LayoutModule() {
          _classCallCheck(this, LayoutModule);
        };

        LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: LayoutModule
        });
        LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function LayoutModule_Factory(t) {
            return new (t || LayoutModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__["LayoutRoutingModule"]]]
        });
        return LayoutModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__["LayoutRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();