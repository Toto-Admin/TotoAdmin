(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12], {
    /***/
    "D+TG":
    /*!***********************************************************!*\
      !*** ./src/app/Main/payment/details/details.component.ts ***!
      \***********************************************************/

    /*! exports provided: DetailsComponent */

    /***/
    function DTG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsComponent", function () {
        return DetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../task-detail/task-detail.component */
      "PwUX");
      /* harmony import */


      var _total_payment_total_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../total-payment/total-payment.component */
      "e3Cw");
      /* harmony import */


      var _report_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../report/report.component */
      "yuBD");

      function DetailsComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-task-detail");
        }
      }

      function DetailsComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-total-payment");
        }
      }

      function DetailsComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-report");
        }
      }

      var DetailsComponent = /*@__PURE__*/function () {
        var DetailsComponent = /*#__PURE__*/function () {
          function DetailsComponent() {
            _classCallCheck(this, DetailsComponent);

            this.currentJustify = 'start';
            this.active = 1;
            this.activeKeep = 1;
            this.activeSelected = 1;
            this.disabled = true;
            this.tabs = [1, 2, 3, 4, 5];
            this.counter = this.tabs.length + 1;
            this.activeDynamic = 1;
          }

          _createClass(DetailsComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "onNavChange",
            value: function onNavChange(changeEvent) {
              if (changeEvent.nextId === 3) {
                changeEvent.preventDefault();
              }
            }
          }, {
            key: "toggleDisabled",
            value: function toggleDisabled() {
              this.disabled = !this.disabled;

              if (this.disabled) {
                this.activeSelected = 1;
              }
            }
          }, {
            key: "close",
            value: function close(event, toRemove) {
              this.tabs = this.tabs.filter(function (id) {
                return id !== toRemove;
              });
              event.preventDefault();
              event.stopImmediatePropagation();
            }
          }, {
            key: "add",
            value: function add(event) {
              this.tabs.push(this.counter++);
              event.preventDefault();
            }
          }]);

          return DetailsComponent;
        }();

        DetailsComponent.ɵfac = function DetailsComponent_Factory(t) {
          return new (t || DetailsComponent)();
        };

        DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: DetailsComponent,
          selectors: [["app-details"]],
          decls: 21,
          vars: 5,
          consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-title"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"]],
          template: function DetailsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Payment History In Details");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5, 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIdChange", function DetailsComponent_Template_ul_activeIdChange_6_listener($event) {
                return ctx.active = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Task Details");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DetailsComponent_ng_template_11_Template, 1, 0, "ng-template", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Payment details");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DetailsComponent_ng_template_15_Template, 1, 0, "ng-template", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Report");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DetailsComponent_ng_template_19_Template, 1, 0, "ng-template", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", ctx.active);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r0);
            }
          },
          directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavOutlet"], _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_2__["TaskDetailComponent"], _total_payment_total_payment_component__WEBPACK_IMPORTED_MODULE_3__["TotalPaymentComponent"], _report_report_component__WEBPACK_IMPORTED_MODULE_4__["ReportComponent"]],
          styles: [".active[_ngcontent-%COMP%] {\r\n    background-color: #2962ff !important;\r\n    color :white !important;\r\n  }\r\n  li[_ngcontent-%COMP%]{\r\n    width:170px;\r\n   text-align: center; \r\n    }"]
        });
        return DetailsComponent;
      }();
      /***/

    },

    /***/
    "HxhH":
    /*!********************************************************!*\
      !*** ./src/app/Main/payment/payment-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: PaymentRoutingModule */

    /***/
    function HxhH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentRoutingModule", function () {
        return PaymentRoutingModule;
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


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "dwlO");
      /* harmony import */


      var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./details/details.component */
      "D+TG");
      /* harmony import */


      var _payment_detail_payment_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./payment-detail/payment-detail.component */
      "r2Ii");
      /* harmony import */


      var _report_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./report/report.component */
      "yuBD");
      /* harmony import */


      var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./task-detail/task-detail.component */
      "PwUX");
      /* harmony import */


      var _total_payment_total_payment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./total-payment/total-payment.component */
      "e3Cw");

      var routes = [{
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
      }, {
        path: 'payment-detail',
        component: _payment_detail_payment_detail_component__WEBPACK_IMPORTED_MODULE_4__["PaymentDetailComponent"]
      }, {
        path: 'task-detail',
        component: _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_6__["TaskDetailComponent"]
      }, {
        path: 'total-payment',
        component: _total_payment_total_payment_component__WEBPACK_IMPORTED_MODULE_7__["TotalPaymentComponent"]
      }, {
        path: 'details',
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"]
      }, {
        path: 'report',
        component: _report_report_component__WEBPACK_IMPORTED_MODULE_5__["ReportComponent"]
      }];

      var PaymentRoutingModule = /*@__PURE__*/function () {
        var PaymentRoutingModule = function PaymentRoutingModule() {
          _classCallCheck(this, PaymentRoutingModule);
        };

        PaymentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: PaymentRoutingModule
        });
        PaymentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function PaymentRoutingModule_Factory(t) {
            return new (t || PaymentRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return PaymentRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaymentRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "JLCc":
    /*!************************************************!*\
      !*** ./src/app/Main/payment/payment.module.ts ***!
      \************************************************/

    /*! exports provided: PaymentModule */

    /***/
    function JLCc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentModule", function () {
        return PaymentModule;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var _payment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payment-routing.module */
      "HxhH");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "dwlO");
      /* harmony import */


      var _payment_detail_payment_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./payment-detail/payment-detail.component */
      "r2Ii");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-apexcharts */
      "Tczp");
      /* harmony import */


      var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./task-detail/task-detail.component */
      "PwUX");
      /* harmony import */


      var _total_payment_total_payment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./total-payment/total-payment.component */
      "e3Cw");
      /* harmony import */


      var _details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./details/details.component */
      "D+TG");
      /* harmony import */


      var _report_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./report/report.component */
      "yuBD");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! angular-datatables */
      "oTcB");

      var PaymentModule = /*@__PURE__*/function () {
        var PaymentModule = function PaymentModule() {
          _classCallCheck(this, PaymentModule);
        };

        PaymentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: PaymentModule
        });
        PaymentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function PaymentModule_Factory(t) {
            return new (t || PaymentModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _payment_routing_module__WEBPACK_IMPORTED_MODULE_3__["PaymentRoutingModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__["NgApexchartsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"]]]
        });
        return PaymentModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaymentModule, {
          declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _payment_detail_payment_detail_component__WEBPACK_IMPORTED_MODULE_5__["PaymentDetailComponent"], _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_7__["TaskDetailComponent"], _total_payment_total_payment_component__WEBPACK_IMPORTED_MODULE_8__["TotalPaymentComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"], _report_report_component__WEBPACK_IMPORTED_MODULE_10__["ReportComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _payment_routing_module__WEBPACK_IMPORTED_MODULE_3__["PaymentRoutingModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__["NgApexchartsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"]]
        });
      })();
      /***/

    },

    /***/
    "PwUX":
    /*!*******************************************************************!*\
      !*** ./src/app/Main/payment/task-detail/task-detail.component.ts ***!
      \*******************************************************************/

    /*! exports provided: TaskDetailComponent */

    /***/
    function PwUX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskDetailComponent", function () {
        return TaskDetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function TaskDetailComponent_ng_template_98_span_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.formsErrors.Name, " ");
        }
      }

      function TaskDetailComponent_ng_template_98_span_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.formsErrors.Name, " ");
        }
      }

      function TaskDetailComponent_ng_template_98_span_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.formsErrors.Position, " ");
        }
      }

      function TaskDetailComponent_ng_template_98_span_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.formsErrors.Email, " ");
        }
      }

      function TaskDetailComponent_ng_template_98_span_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.formsErrors.Mobile, " ");
        }
      }

      function TaskDetailComponent_ng_template_98_span_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.formsErrors.Projects, " ");
        }
      }

      function TaskDetailComponent_ng_template_98_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Provider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailComponent_ng_template_98_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.closeBtnClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TaskDetailComponent_ng_template_98_Template_form_ngSubmit_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function TaskDetailComponent_ng_template_98_Template_input_blur_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.logValidationErrors(ctx_r12.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TaskDetailComponent_ng_template_98_span_13_Template, 2, 1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function TaskDetailComponent_ng_template_98_Template_input_blur_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.logValidationErrors(ctx_r13.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TaskDetailComponent_ng_template_98_span_19_Template, 2, 1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function TaskDetailComponent_ng_template_98_Template_input_blur_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.logValidationErrors(ctx_r14.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TaskDetailComponent_ng_template_98_span_25_Template, 2, 1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function TaskDetailComponent_ng_template_98_Template_input_blur_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.logValidationErrors(ctx_r15.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TaskDetailComponent_ng_template_98_span_31_Template, 2, 1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function TaskDetailComponent_ng_template_98_Template_input_blur_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.logValidationErrors(ctx_r16.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, TaskDetailComponent_ng_template_98_span_37_Template, 2, 1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Date of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function TaskDetailComponent_ng_template_98_Template_input_blur_42_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.logValidationErrors(ctx_r17.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, TaskDetailComponent_ng_template_98_span_43_Template, 2, 1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailComponent_ng_template_98_Template_button_click_45_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.closeBtnClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.editUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formsErrors.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formsErrors.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formsErrors.Position);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formsErrors.Email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formsErrors.Mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formsErrors.Projects);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.editUser.invalid);
        }
      }

      var TaskDetailComponent = /*@__PURE__*/function () {
        var TaskDetailComponent = /*#__PURE__*/function () {
          function TaskDetailComponent() {
            _classCallCheck(this, TaskDetailComponent);
          }

          _createClass(TaskDetailComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return TaskDetailComponent;
        }();

        TaskDetailComponent.ɵfac = function TaskDetailComponent_Factory(t) {
          return new (t || TaskDetailComponent)();
        };

        TaskDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: TaskDetailComponent,
          selectors: [["app-task-detail"]],
          decls: 100,
          vars: 0,
          consts: [[1, "row"], [1, "col-12"], [1, "card", "card-body"], [1, "table-responsive", "table-bordered"], [1, "table", "table-striped", "mb-0", "no-wrap", "v-middle"], ["scope", "col", 1, "tdLeft", "backgroundColor"], ["scope", "col", 1, "tdCenter", "backgroundColor"], [1, "tdLeft"], [1, "tdCenter"], [1, "d-flex", "justify-content-center", "mt-5"], ["editUserModal", ""], [1, "modal-header"], ["id", "editUserLabel", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "name", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "formControlName", "Name", "id", "name", 1, "form-control", 3, "blur"], ["class", "help-block", 4, "ngIf"], ["for", "position", 1, "col-sm-4", "col-form-label"], ["type", "email", "formControlName", "Position", "id", "position", 1, "form-control", 3, "blur"], ["for", "Password", 1, "col-sm-4", "col-form-label"], ["type", "email", "formControlName", "Email", "id", "email", 1, "form-control", 3, "blur"], ["for", "mobile", 1, "col-sm-4", "col-form-label"], ["type", "tel", "formControlName", "Mobile", "id", "mobile", 1, "form-control", 3, "blur"], ["for", "projects", 1, "col-sm-4", "col-form-label"], ["type", "Date", "formControlName", "Projects", "id", "projects", 1, "form-control", 3, "blur"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "help-block"]],
          template: function TaskDetailComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "TYPE");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "DESCRIPTION");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "WORK TIME");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "PAYMENT STATUS");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "CREATED AT");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "UPDATED AT");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Remote");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Description");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "02:05:00");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Paid");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "04/09/2021 04:27 PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "04/09/2021 07:27 PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Remote");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Description");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "02:05:00");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Paid");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "04/09/2021 04:27 PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "04/09/2021 07:27 PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "On-site");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Description");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "02:05:00");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Unpaid");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "04/09/2021 04:27 PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "04/09/2021 07:27 PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Remote");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Description");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "02:05:00");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Paid");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "04/09/2021 04:27 PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "04/09/2021 07:27 PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "5");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "On-site");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Description");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "02:05:00");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "UnPaid");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "04/09/2021 04:27 PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "04/09/2021 07:27 PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, TaskDetailComponent_ng_template_98_Template, 49, 8, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
          styles: ["*[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}"]
        });
        return TaskDetailComponent;
      }();
      /***/

    },

    /***/
    "dwlO":
    /*!***************************************************************!*\
      !*** ./src/app/Main/payment/dashboard/dashboard.component.ts ***!
      \***************************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function dwlO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng-apexcharts */
      "Tczp");

      var _c0 = ["chart"];
      var _c1 = ["revenuechart"];
      var _c2 = ["emailchart"];

      var DashboardComponent = /*@__PURE__*/function () {
        var DashboardComponent = /*#__PURE__*/function () {
          function DashboardComponent() {
            _classCallCheck(this, DashboardComponent);

            this.chart = Object.create(null);
            this.revenuechart = Object.create(null);
            this.emailchart = Object.create(null);
            this.chart2 = Object.create(null);
            this.earningboxChartOptions = {
              series: [{
                name: 'Earnings',
                data: [5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8]
              }],
              chart: {
                type: 'area',
                fontFamily: 'Nunito Sans,sans-serif',
                toolbar: {
                  show: false
                },
                height: 90,
                sparkline: {
                  enabled: true
                }
              },
              dataLabels: {
                enabled: false
              },
              markers: {
                size: 0
              },
              stroke: {
                curve: 'smooth',
                width: '2'
              },
              colors: ['#4fc3f7'],
              legend: {
                show: false
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
            this.RevenueChartOptions = {
              series: [{
                name: '',
                data: [20, 55, 44, 30, 61, 48, 20]
              }],
              chart: {
                type: 'bar',
                fontFamily: 'Nunito Sans,sans-serif',
                height: 80,
                sparkline: {
                  enabled: true
                }
              },
              fill: {
                colors: ['black'],
                opacity: 0.7
              },
              stroke: {
                show: true,
                width: 7,
                colors: ["transparent"]
              },
              tooltip: {
                theme: 'dark',
                fillSeriesColor: false,
                marker: {
                  show: false
                },
                x: {
                  show: false
                }
              }
            };
            this.mEmailChartOptions = {
              series: [45, 15, 27, 18],
              chart: {
                fontFamily: 'Nunito Sans,sans-serif',
                type: 'donut',
                height: 280
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
                        color: '#99abb4'
                      },
                      total: {
                        show: true,
                        label: 'Ratio',
                        color: '#99abb4'
                      }
                    }
                  }
                }
              },
              tooltip: {
                fillSeriesColor: false
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                width: 0
              },
              legends: {
                show: false
              },
              labels: ['Ac Service', 'Voice Modulation', 'Isp', 'Poor Wifi Coverage'],
              colors: ['#40c4ff', '#2961ff', '#ff821c', '#7e74fb', '#ff820c']
            };
            this.earningChartOptions = {
              series: [{
                name: 'Earnings',
                data: [0, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8]
              }],
              chart: {
                height: 145,
                type: 'line',
                fontFamily: 'Nunito Sans,sans-serif',
                sparkline: {
                  enabled: true
                }
              },
              dataLabels: {
                enabled: false
              },
              markers: {
                size: 0
              },
              stroke: {
                curve: 'smooth',
                width: '1'
              },
              colors: ['#668cff'],
              legend: {
                show: false
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
          }

          _createClass(DashboardComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {}
          }]);

          return DashboardComponent;
        }();

        DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
          return new (t || DashboardComponent)();
        };

        DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: DashboardComponent,
          selectors: [["app-dashboard"]],
          viewQuery: function DashboardComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.revenuechart = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.emailchart = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart2 = _t.first);
            }
          },
          decls: 131,
          vars: 47,
          consts: [[1, "row", "total"], [1, "col-lg-4"], [1, "card"], [1, "card-body", "pb-0"], [1, "card-title"], [1, "font-medium"], [1, "mdi", "mdi-currency-gbp"], [1, "m-t-5", "d-flex", "flex-column", 2, "height", "90px"], [3, "series", "chart", "xaxis", "yaxis", "grid", "stroke", "tooltip", "dataLabels", "legend", "colors", "markers"], [1, "card", "bg-info", "text-black", "card-hover"], [1, "card-body", 2, "background-color", "white"], [1, "d-flex", "align-items-center", "m-t-30"], [1, "mt-3", "d-flex", "flex-column", 2, "height", "60px", "width", "100px"], [3, "series", "chart", "stroke", "tooltip", "fill"], [1, "ml-auto"], [1, "font-medium", "white-text", "m-b-0"], [1, "col-md-6", "col-sm-12"], [1, "card", "card-hover"], [1, "card-body"], [1, "d-md-flex", "align-items-center"], [1, "card-subtitle"], [1, "ml-auto", "align-items-center"], [1, "dl"], [1, "custom-select"], ["value", "0", "selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "row", "my-4", "py-2"], [1, "col-lg-6"], [1, "m-b-20", "d-flex", "align-items-center", "flex-column"], [3, "series", "chart", "dataLabels", "legend", "colors", "stroke", "labels", "tooltip", "plotOptions"], [1, "list-style-none"], [1, "m-t-20"], [1, "fas", "fa-circle", "m-r-5", "text-cyan", "font-12"], [1, "float-right"], [1, "fas", "fa-circle", "m-r-5", "text-info", "font-12"], [1, "fas", "fa-circle", "m-r-5", "text-orange", "font-12"], [1, "fas", "fa-circle", "m-r-5", "text-primary", "font-12"], [1, "col-sm-12", "col-lg-6"], [1, "card", "bg-info"], [1, "text-black"], [1, "d-flex", "flex-column", 2, "height", "280px"], [1, "row"], [1, "col-sm-12", "col-lg-4"], [1, "d-flex", "align-items-center", "m-t-5", "m-b-5"], [1, "m-r-10"], [1, "btn", "btn-circle", "btn-lg", "btn-cyan", "text-white", "d-flex"], [1, "font-14", "op-5", "d-block"], [1, "font-16", "font-medium"], [1, "d-flex", "no-block", "align-items-center", "m-t-5", "m-b-5"]],
          template: function DashboardComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Total Earning From Customer");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "43,567.53");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "apx-chart", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Total Paid To Provider");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "32,236");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "apx-chart", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Total Refund");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Total money refunded by Toto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "apx-chart", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "21,500,00");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Service Wise Earning");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Total amount of earned by service");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "select", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Monthly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Daily");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Weekly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Yearly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "apx-chart", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Services");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ul", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 34);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Ac Service ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 35);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "23,000");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 36);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Voice Modulation ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 35);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "41,000");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li", 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 37);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Internate Speed ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 35);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "23,890");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li", 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 38);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Poor Wifi Coverage ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 35);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "09,000");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 39);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 40);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Total Earning Of Toto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h5", 41);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "60,890.68");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 42);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "apx-chart", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 44);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 45);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 47);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "EA");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 41);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 48);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "AC");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 49);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "25,500,00");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 44);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 50);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 47);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "EA");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 41);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 48);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "TV ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 49);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "15,250.00");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 44);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 50);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 47);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "EA");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 41);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 48);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Mobile");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 49);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "20,360,00");

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

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.earningboxChartOptions.series)("chart", ctx.earningboxChartOptions.chart)("xaxis", ctx.earningboxChartOptions.xaxis)("yaxis", ctx.earningboxChartOptions.yaxis)("grid", ctx.earningboxChartOptions.grid)("stroke", ctx.earningboxChartOptions.stroke)("tooltip", ctx.earningboxChartOptions.tooltip)("dataLabels", ctx.earningboxChartOptions.dataLabels)("legend", ctx.earningboxChartOptions.legend)("colors", ctx.earningboxChartOptions.colors)("markers", ctx.earningboxChartOptions.markers);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.earningboxChartOptions.series)("chart", ctx.earningboxChartOptions.chart)("xaxis", ctx.earningboxChartOptions.xaxis)("yaxis", ctx.earningboxChartOptions.yaxis)("grid", ctx.earningboxChartOptions.grid)("stroke", ctx.earningboxChartOptions.stroke)("tooltip", ctx.earningboxChartOptions.tooltip)("dataLabels", ctx.earningboxChartOptions.dataLabels)("legend", ctx.earningboxChartOptions.legend)("colors", ctx.earningboxChartOptions.colors)("markers", ctx.earningboxChartOptions.markers);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.RevenueChartOptions.series)("chart", ctx.RevenueChartOptions.chart)("stroke", ctx.RevenueChartOptions.stroke)("tooltip", ctx.RevenueChartOptions.tooltip)("fill", ctx.RevenueChartOptions.fill);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.mEmailChartOptions.series)("chart", ctx.mEmailChartOptions.chart)("dataLabels", ctx.mEmailChartOptions.dataLabels)("legend", ctx.mEmailChartOptions.legends)("colors", ctx.mEmailChartOptions.colors)("stroke", ctx.mEmailChartOptions.stroke)("labels", ctx.mEmailChartOptions.labels)("tooltip", ctx.mEmailChartOptions.tooltip)("plotOptions", ctx.mEmailChartOptions.plotOptions);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.earningChartOptions.series)("chart", ctx.earningChartOptions.chart)("xaxis", ctx.earningChartOptions.xaxis)("yaxis", ctx.earningChartOptions.yaxis)("grid", ctx.earningChartOptions.grid)("stroke", ctx.earningChartOptions.stroke)("tooltip", ctx.earningChartOptions.tooltip)("dataLabels", ctx.earningChartOptions.dataLabels)("legend", ctx.earningChartOptions.legend)("colors", ctx.earningChartOptions.colors)("markers", ctx.earningChartOptions.markers);
            }
          },
          directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"]],
          styles: [""]
        });
        return DashboardComponent;
      }();
      /***/

    },

    /***/
    "e3Cw":
    /*!***********************************************************************!*\
      !*** ./src/app/Main/payment/total-payment/total-payment.component.ts ***!
      \***********************************************************************/

    /*! exports provided: TotalPaymentComponent */

    /***/
    function e3Cw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TotalPaymentComponent", function () {
        return TotalPaymentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var TotalPaymentComponent = /*@__PURE__*/function () {
        var TotalPaymentComponent = /*#__PURE__*/function () {
          function TotalPaymentComponent() {
            _classCallCheck(this, TotalPaymentComponent);
          }

          _createClass(TotalPaymentComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return TotalPaymentComponent;
        }();

        TotalPaymentComponent.ɵfac = function TotalPaymentComponent_Factory(t) {
          return new (t || TotalPaymentComponent)();
        };

        TotalPaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: TotalPaymentComponent,
          selectors: [["app-total-payment"]],
          decls: 112,
          vars: 0,
          consts: [[1, "row"], [1, "col-md-12"], [1, "card", "card-body", "printableArea"], [1, "table-responsive", "m-t-40", 2, "clear", "both"], [1, "table", "table-hover"], [1, "tdLeft", "backgroundColor"], [1, "tdRight", "backgroundColor"], [1, "tdLeft"], [1, "tdRight"], [1, "mdi", "mdi-currency-gbp"], [2, "width", "100%", "text-align", "left", "margin-left", "0"], [1, "row", 2, "padding-left", "40px"], [1, "col-md-6"], [1, "pull-right", "m-t-30"], [1, "clearfix"], [1, ""], ["type", "submit", 1, "btn", "btn-danger"]],
          template: function TotalPaymentComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "TRANSACTION ID");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "PAYMENT TYPE");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "TYPE");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "DATE");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "AMOUNT");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "txn_1IeKjgAW3ioFkN7zMH6v");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Debit");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Remote");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " 2021-04-09 04:28 PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "i", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "13,848,00");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "txn_1IeKjgAW3ioFkN7zMH6v");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Debit");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Remote");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " 2021-04-09 04:28 PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "i", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "20,900,00");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "txn_1IeKjgAW3ioFkN7zMH6v");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Debit");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Remote");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " 2021-04-09 04:28 PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "i", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "20,900,00");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "hr", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Provider Payment");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Total amount: ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "i", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "13,848");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "vat (10%) : ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "i", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "138");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "b");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Total :");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "i", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "13,986");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Proceed to payment ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Customer Payment");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Total amount: ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "i", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "13,848");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "vat (10%) : ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "i", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "138");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "b");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Total :");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "i", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "13,986");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Proceed to payment ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: ["td[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}"]
        });
        return TotalPaymentComponent;
      }();
      /***/

    },

    /***/
    "r2Ii":
    /*!*************************************************************************!*\
      !*** ./src/app/Main/payment/payment-detail/payment-detail.component.ts ***!
      \*************************************************************************/

    /*! exports provided: PaymentDetailComponent */

    /***/
    function r2Ii(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentDetailComponent", function () {
        return PaymentDetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-datatables */
      "oTcB");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var _c0 = function _c0() {
        return ["/customer/view"];
      };

      var _c1 = function _c1() {
        return ["/provider/provider-view"];
      };

      var _c2 = function _c2() {
        return ["/payment/details"];
      };

      var PaymentDetailComponent = /*@__PURE__*/function () {
        var PaymentDetailComponent = /*#__PURE__*/function () {
          function PaymentDetailComponent() {
            _classCallCheck(this, PaymentDetailComponent);

            this.dtOptions = {};
          }

          _createClass(PaymentDetailComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.dtOptions = {
                pagingType: 'full_numbers',
                pageLength: 10,
                ordering: true,
                lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, 'All']],
                columnDefs: [{
                  orderable: false,
                  targets: -1
                }]
              };
            }
          }]);

          return PaymentDetailComponent;
        }();

        PaymentDetailComponent.ɵfac = function PaymentDetailComponent_Factory(t) {
          return new (t || PaymentDetailComponent)();
        };

        PaymentDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: PaymentDetailComponent,
          selectors: [["app-payment-detail"]],
          decls: 198,
          vars: 31,
          consts: [[1, "row"], [1, "col-12"], [1, "card", "card-body"], ["lass", "card-title", 2, "text-align", "left"], [1, ""], [1, "col-md-12"], ["datatable", "", 1, "row-border", "hover", "table", "table-bordered", "table-striped", 3, "dtOptions"], [1, "backgroundColor", "tdLeft"], [1, "backgroundColor", "tdRight"], [1, "backgroundColor"], [1, "tdLeft"], [1, "d-flex", "align-items-center"], ["src", "assets/images/users/1.jpg", "height", " 25px", "width", "25px", 1, "rounded-circle"], [1, "ml-3"], [1, "font-medium", "mb-0"], [3, "routerLink"], [1, "tdRight"], [1, "mdi", "mdi-currency-gbp"], [1, "tdCenter"], ["data-toggle", "tooltip", "title", "View", 1, "text-inverse", "p-r-10", 3, "routerLink"], [1, "fas", "fa-eye"], [1, "d-flex", "justify-content-center", "mt-5"]],
          template: function PaymentDetailComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Payment Details");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ID");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "CUSTOMER ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "PROVIDER");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "SERVICE");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "TYPE");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "DESCRIPTION");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "PAYMENT STATUS");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "DATE");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "AMOUNT");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "ACTION");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Sushant Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Raj Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Ac");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Remote");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Debit");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Refund");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "20/03/2021");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "20");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Sakshi Mali");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Sachin Kulkarni");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Mobile");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Remote");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Debit");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Paid");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "20/03/2021");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "30");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Sushant Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Rohan Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Poor wifi coverage");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "On-site");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Credit");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Refund");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "20/03/2021");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "40");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "img", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Kiran Mane");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "img", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "a", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Mona Joshi");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Isp ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Remote");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Debit");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Paid");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "20/03/2021");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "10");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "td", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "i", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "5");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "img", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Manohar Mahadik");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "img", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Sushant Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Tv");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "On-site");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Credit");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Pending");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "20/03/2021");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "i", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "20");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "a", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "i", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "div", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c2));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c2));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c2));
            }
          },
          directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
          styles: [".card-title[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n}\r\n.card-subtitle[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}"]
        });
        return PaymentDetailComponent;
      }();
      /***/

    },

    /***/
    "yuBD":
    /*!*********************************************************!*\
      !*** ./src/app/Main/payment/report/report.component.ts ***!
      \*********************************************************/

    /*! exports provided: ReportComponent */

    /***/
    function yuBD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportComponent", function () {
        return ReportComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng-apexcharts */
      "Tczp");

      var _c0 = ["chart"];

      var ReportComponent = /*@__PURE__*/function () {
        var ReportComponent = function ReportComponent() {
          _classCallCheck(this, ReportComponent);

          this.chart = Object.create(null);
          this.mEmailChartOptions = {
            series: [45, 15, 27],
            chart: {
              fontFamily: 'Nunito Sans,sans-serif',
              type: 'donut',
              height: 280
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
                      color: '#99abb4'
                    },
                    total: {
                      show: true,
                      label: 'Ratio',
                      color: '#99abb4'
                    }
                  }
                }
              }
            },
            tooltip: {
              fillSeriesColor: false
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: 0
            },
            legends: {
              show: false
            },
            labels: ['How much get payment from customer', 'How much payment paid to provider', 'How much amount get to toto'],
            colors: ['#40c4ff', '#2961ff', '#ff821c']
          };
        };

        ReportComponent.ɵfac = function ReportComponent_Factory(t) {
          return new (t || ReportComponent)();
        };

        ReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ReportComponent,
          selectors: [["app-report"]],
          viewQuery: function ReportComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
            }
          },
          decls: 43,
          vars: 9,
          consts: [[1, "card", "card-hover"], [1, "card-body"], [1, "d-md-flex", "align-items-center"], [1, "ml-auto", "align-items-center"], [1, "dl"], [1, "custom-select"], ["value", "0", "selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "row", "my-4", "py-2"], [1, "col-lg-6"], [1, "m-b-20", "d-flex", "align-items-center", "flex-column"], [3, "series", "chart", "dataLabels", "legend", "colors", "stroke", "labels", "tooltip", "plotOptions"], [1, "list-style-none"], [1, "m-t-20"], [1, "fas", "fa-circle", "m-r-5", "text-cyan", "font-12"], [1, "float-right"], [1, "mdi", "mdi-currency-gbp"], [1, "fas", "fa-circle", "m-r-5", "text-info", "font-12"], [1, "fas", "fa-circle", "m-r-5", "text-orange", "font-12"]],
          template: function ReportComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Overview of Report History");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Monthly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Daily");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Weekly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Yearly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "apx-chart", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Report in detail ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Customer ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "45,500,09");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Provider ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "14,500,00");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Toto ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "35,100,90");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.mEmailChartOptions.series)("chart", ctx.mEmailChartOptions.chart)("dataLabels", ctx.mEmailChartOptions.dataLabels)("legend", ctx.mEmailChartOptions.legends)("colors", ctx.mEmailChartOptions.colors)("stroke", ctx.mEmailChartOptions.stroke)("labels", ctx.mEmailChartOptions.labels)("tooltip", ctx.mEmailChartOptions.tooltip)("plotOptions", ctx.mEmailChartOptions.plotOptions);
            }
          },
          directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"]],
          styles: [""]
        });
        return ReportComponent;
      }();
      /***/

    }
  }]);
})();