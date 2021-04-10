(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9], {
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


      var _payment_detail_payment_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payment-detail/payment-detail.component */
      "r2Ii");

      var routes = [{
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
      }, {
        path: 'payment-detail',
        component: _payment_detail_payment_detail_component__WEBPACK_IMPORTED_MODULE_3__["PaymentDetailComponent"]
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


      var _payment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./payment-routing.module */
      "HxhH");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "dwlO");
      /* harmony import */


      var _payment_detail_payment_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./payment-detail/payment-detail.component */
      "r2Ii");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-apexcharts */
      "Tczp");

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
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _payment_routing_module__WEBPACK_IMPORTED_MODULE_2__["PaymentRoutingModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["NgApexchartsModule"]]]
        });
        return PaymentModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaymentModule, {
          declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _payment_detail_payment_detail_component__WEBPACK_IMPORTED_MODULE_4__["PaymentDetailComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _payment_routing_module__WEBPACK_IMPORTED_MODULE_2__["PaymentRoutingModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["NgApexchartsModule"]]
        });
      })();
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
          consts: [[1, "row", "total"], [1, "col-lg-4"], [1, "card"], [1, "card-body", "pb-0"], [1, "card-title"], [1, "font-medium"], [1, "mdi", "mdi-currency-gbp"], [1, "m-t-5", "d-flex", "flex-column", 2, "height", "90px"], [3, "series", "chart", "xaxis", "yaxis", "grid", "stroke", "tooltip", "dataLabels", "legend", "colors", "markers"], [1, "card", "bg-info", "text-black", "card-hover"], [1, "card-body", 2, "background-color", "white"], [1, "d-flex", "align-items-center", "m-t-30"], [1, "mt-3", "d-flex", "flex-column", 2, "height", "60px", "width", "100px"], [3, "series", "chart", "stroke", "tooltip", "fill"], [1, "ml-auto"], [1, "font-medium", "white-text", "m-b-0"], [1, "col-6"], [1, "card", "card-hover"], [1, "card-body"], [1, "d-md-flex", "align-items-center"], [1, "card-subtitle"], [1, "ml-auto", "align-items-center"], [1, "dl"], [1, "custom-select"], ["value", "0", "selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "row", "my-4", "py-2"], [1, "col-lg-6"], [1, "m-b-20", "d-flex", "align-items-center", "flex-column"], [3, "series", "chart", "dataLabels", "legend", "colors", "stroke", "labels", "tooltip", "plotOptions"], [1, "list-style-none"], [1, "m-t-20"], [1, "fas", "fa-circle", "m-r-5", "text-cyan", "font-12"], [1, "float-right"], [1, "fas", "fa-circle", "m-r-5", "text-info", "font-12"], [1, "fas", "fa-circle", "m-r-5", "text-orange", "font-12"], [1, "fas", "fa-circle", "m-r-5", "text-primary", "font-12"], [1, "col-sm-12", "col-lg-6"], [1, "card", "bg-info"], [1, "text-black"], [1, "d-flex", "flex-column", 2, "height", "280px"], [1, "row"], [1, "col-sm-12", "col-lg-4"], [1, "d-flex", "align-items-center", "m-t-5", "m-b-5"], [1, "m-r-10"], [1, "btn", "btn-circle", "btn-lg", "btn-cyan", "text-white", "d-flex"], [1, "font-14", "op-5", "d-block"], [1, "font-16", "font-medium"], [1, "d-flex", "no-block", "align-items-center", "m-t-5", "m-b-5"]],
          template: function DashboardComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Total earning from customer");

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

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Total paid to provider");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "51,567");

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

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Total money refunded by toto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "apx-chart", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "33,501");

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

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Service wise earning");

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

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Total earning of toto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h5", 41);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "6,890.68");

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

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Product A");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 49);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "15.56K");

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

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Product B");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 49);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "15.56K");

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

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Product C");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 49);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "15.56K");

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

      var PaymentDetailComponent = /*@__PURE__*/function () {
        var PaymentDetailComponent = /*#__PURE__*/function () {
          function PaymentDetailComponent() {
            _classCallCheck(this, PaymentDetailComponent);
          }

          _createClass(PaymentDetailComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return PaymentDetailComponent;
        }();

        PaymentDetailComponent.ɵfac = function PaymentDetailComponent_Factory(t) {
          return new (t || PaymentDetailComponent)();
        };

        PaymentDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: PaymentDetailComponent,
          selectors: [["app-payment-detail"]],
          decls: 33,
          vars: 0,
          consts: [[1, "card-group"], [1, "card"], [1, "card-body", "text-center"], [1, "card-title"], [1, "profile-pic", "m-b-20", "m-t-20"], ["src", "assets/images/users/5.jpg", "width", "150", "alt", "user", 1, "rounded-circle"], [1, "m-t-20", "m-b-0"], ["href", "mailto:danielkristeen@gmail.com"], [1, "badge", "badge-pill", "badge-light", "font-16"]],
          template: function PaymentDetailComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Provider Details");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Daniel Kristeen");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "danielkristeen@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "+917276703608");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "30/12/1995");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Male");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Customer Details");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Daniel Kristeen");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "danielkristeen@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "+917276703608");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "30/12/1995");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Male");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [".card-title[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n}\r\n.card-subtitle[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n}"]
        });
        return PaymentDetailComponent;
      }();
      /***/

    }
  }]);
})();