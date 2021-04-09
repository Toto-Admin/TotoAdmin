(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "HxhH":
/*!********************************************************!*\
  !*** ./src/app/Main/payment/payment-routing.module.ts ***!
  \********************************************************/
/*! exports provided: PaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRoutingModule", function() { return PaymentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "dwlO");
/* harmony import */ var _payment_detail_payment_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-detail/payment-detail.component */ "r2Ii");






const routes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'payment-detail', component: _payment_detail_payment_detail_component__WEBPACK_IMPORTED_MODULE_3__["PaymentDetailComponent"] }
];
let PaymentRoutingModule = /*@__PURE__*/ (() => {
    class PaymentRoutingModule {
    }
    PaymentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PaymentRoutingModule });
    PaymentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PaymentRoutingModule_Factory(t) { return new (t || PaymentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return PaymentRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaymentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "JLCc":
/*!************************************************!*\
  !*** ./src/app/Main/payment/payment.module.ts ***!
  \************************************************/
/*! exports provided: PaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModule", function() { return PaymentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-routing.module */ "HxhH");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "dwlO");
/* harmony import */ var _payment_detail_payment_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment-detail/payment-detail.component */ "r2Ii");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-apexcharts */ "Tczp");







let PaymentModule = /*@__PURE__*/ (() => {
    class PaymentModule {
    }
    PaymentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PaymentModule });
    PaymentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PaymentModule_Factory(t) { return new (t || PaymentModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _payment_routing_module__WEBPACK_IMPORTED_MODULE_2__["PaymentRoutingModule"],
                ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["NgApexchartsModule"]
            ]] });
    return PaymentModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaymentModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _payment_detail_payment_detail_component__WEBPACK_IMPORTED_MODULE_4__["PaymentDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_2__["PaymentRoutingModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["NgApexchartsModule"]] });
})();


/***/ }),

/***/ "dwlO":
/*!***************************************************************!*\
  !*** ./src/app/Main/payment/dashboard/dashboard.component.ts ***!
  \***************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-apexcharts */ "Tczp");




const _c0 = ["chart"];
const _c1 = ["revenuechart"];
const _c2 = ["emailchart"];
let DashboardComponent = /*@__PURE__*/ (() => {
    class DashboardComponent {
        constructor() {
            this.chart = Object.create(null);
            this.revenuechart = Object.create(null);
            this.emailchart = Object.create(null);
            this.chart2 = Object.create(null);
            this.earningboxChartOptions = {
                series: [
                    {
                        name: 'Earnings',
                        data: [5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8]
                    }
                ],
                chart: {
                    type: 'area',
                    fontFamily: 'Nunito Sans,sans-serif',
                    toolbar: {
                        show: false,
                    },
                    height: 90,
                    sparkline: { enabled: true },
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
                colors: ['#4fc3f7'],
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
            this.RevenueChartOptions = {
                series: [
                    {
                        name: '',
                        data: [20, 55, 44, 30, 61, 48, 20]
                    },
                ],
                chart: {
                    type: 'bar',
                    fontFamily: 'Nunito Sans,sans-serif',
                    height: 80,
                    sparkline: {
                        enabled: true
                    }
                },
                fill: {
                    colors: ['#fff'],
                    opacity: 0.7,
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
                    },
                }
            };
            this.mEmailChartOptions = {
                series: [45, 15, 27, 18],
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
                labels: ['Ac Service', 'Voice Modulation', 'Isp', 'Poor Wifi Coverage'],
                colors: ['#40c4ff', '#2961ff', '#ff821c', '#7e74fb', '#ff820c',],
            };
            this.earningChartOptions = {
                series: [
                    {
                        name: 'Earnings',
                        data: [0, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8]
                    }
                ],
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
                    size: 0,
                },
                stroke: {
                    curve: 'smooth',
                    width: '1',
                },
                colors: ['#fff'],
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
        }
        ngOnInit() {
        }
        ngAfterViewInit() {
        }
    }
    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.revenuechart = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.emailchart = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart2 = _t.first);
            }
        }, decls: 135, vars: 47, consts: [[1, "row"], [1, "col-lg-4"], [1, "card"], [1, "card-body", "pb-0"], [1, "card-title"], [1, "card-subtitle"], [1, "font-medium"], [1, "mdi", "mdi-currency-gbp"], [1, "m-t-5", "d-flex", "flex-column", 2, "height", "90px"], [3, "series", "chart", "xaxis", "yaxis", "grid", "stroke", "tooltip", "dataLabels", "legend", "colors", "markers"], [1, "card", "bg-info", "text-white", "card-hover"], [1, "card-body"], [1, "d-flex", "align-items-center", "m-t-30"], [1, "mt-3", "d-flex", "flex-column", 2, "height", "75px", "width", "100px"], [3, "series", "chart", "stroke", "tooltip", "fill"], [1, "ml-auto"], [1, "font-medium", "white-text", "m-b-0"], [1, "col-6"], [1, "card", "card-hover"], [1, "d-md-flex", "align-items-center"], [1, "ml-auto", "align-items-center"], [1, "dl"], [1, "custom-select"], ["value", "0", "selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "row", "my-4", "py-2"], [1, "col-lg-6"], [1, "m-b-20", "d-flex", "align-items-center", "flex-column"], [3, "series", "chart", "dataLabels", "legend", "colors", "stroke", "labels", "tooltip", "plotOptions"], [1, "list-style-none"], [1, "m-t-20"], [1, "fas", "fa-circle", "m-r-5", "text-cyan", "font-12"], [1, "float-right"], [1, "fas", "fa-circle", "m-r-5", "text-info", "font-12"], [1, "fas", "fa-circle", "m-r-5", "text-orange", "font-12"], [1, "fas", "fa-circle", "m-r-5", "text-primary", "font-12"], [1, "col-sm-12", "col-lg-6"], [1, "card", "bg-info"], [1, "text-white"], [1, "d-flex", "flex-column", 2, "height", "260px"], [1, "col-sm-12", "col-lg-4"], [1, "d-flex", "align-items-center", "m-t-5", "m-b-5"], [1, "m-r-10"], [1, "btn", "btn-circle", "btn-lg", "btn-cyan", "text-white", "d-flex"], [1, "font-14", "op-5", "d-block"], [1, "font-16", "font-medium"], [1, "d-flex", "no-block", "align-items-center", "m-t-5", "m-b-5"]], template: function DashboardComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Earnings");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Total earnings from customer");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "43,567.53");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "apx-chart", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Earnings");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Total paid to provider");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "51,567");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "apx-chart", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Total Refund");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Total money refunded by toto");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "apx-chart", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "33,501");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Service wise earning");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Total amount of earned by service");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "select", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Monthly");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Daily");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Weekly");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Yearly");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "apx-chart", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Services");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Ac Service ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "23,000");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Voice Modulation ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "41,000");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Internate Speed ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "23,890");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Poor Wifi Coverage ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "09,000");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Total earning of Toto");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h2", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "6,890.68");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "apx-chart", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "EA");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Product A");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "15.56K");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "EA");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Product B");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "15.56K");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "EA");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Product C");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "15.56K");
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
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.earningboxChartOptions.series)("chart", ctx.earningboxChartOptions.chart)("xaxis", ctx.earningboxChartOptions.xaxis)("yaxis", ctx.earningboxChartOptions.yaxis)("grid", ctx.earningboxChartOptions.grid)("stroke", ctx.earningboxChartOptions.stroke)("tooltip", ctx.earningboxChartOptions.tooltip)("dataLabels", ctx.earningboxChartOptions.dataLabels)("legend", ctx.earningboxChartOptions.legend)("colors", ctx.earningboxChartOptions.colors)("markers", ctx.earningboxChartOptions.markers);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.earningboxChartOptions.series)("chart", ctx.earningboxChartOptions.chart)("xaxis", ctx.earningboxChartOptions.xaxis)("yaxis", ctx.earningboxChartOptions.yaxis)("grid", ctx.earningboxChartOptions.grid)("stroke", ctx.earningboxChartOptions.stroke)("tooltip", ctx.earningboxChartOptions.tooltip)("dataLabels", ctx.earningboxChartOptions.dataLabels)("legend", ctx.earningboxChartOptions.legend)("colors", ctx.earningboxChartOptions.colors)("markers", ctx.earningboxChartOptions.markers);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.RevenueChartOptions.series)("chart", ctx.RevenueChartOptions.chart)("stroke", ctx.RevenueChartOptions.stroke)("tooltip", ctx.RevenueChartOptions.tooltip)("fill", ctx.RevenueChartOptions.fill);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.mEmailChartOptions.series)("chart", ctx.mEmailChartOptions.chart)("dataLabels", ctx.mEmailChartOptions.dataLabels)("legend", ctx.mEmailChartOptions.legends)("colors", ctx.mEmailChartOptions.colors)("stroke", ctx.mEmailChartOptions.stroke)("labels", ctx.mEmailChartOptions.labels)("tooltip", ctx.mEmailChartOptions.tooltip)("plotOptions", ctx.mEmailChartOptions.plotOptions);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.earningChartOptions.series)("chart", ctx.earningChartOptions.chart)("xaxis", ctx.earningChartOptions.xaxis)("yaxis", ctx.earningChartOptions.yaxis)("grid", ctx.earningChartOptions.grid)("stroke", ctx.earningChartOptions.stroke)("tooltip", ctx.earningChartOptions.tooltip)("dataLabels", ctx.earningChartOptions.dataLabels)("legend", ctx.earningChartOptions.legend)("colors", ctx.earningChartOptions.colors)("markers", ctx.earningChartOptions.markers);
            }
        }, directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"]], styles: [""] });
    return DashboardComponent;
})();


/***/ }),

/***/ "r2Ii":
/*!*************************************************************************!*\
  !*** ./src/app/Main/payment/payment-detail/payment-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: PaymentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailComponent", function() { return PaymentDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let PaymentDetailComponent = /*@__PURE__*/ (() => {
    class PaymentDetailComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    PaymentDetailComponent.ɵfac = function PaymentDetailComponent_Factory(t) { return new (t || PaymentDetailComponent)(); };
    PaymentDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentDetailComponent, selectors: [["app-payment-detail"]], decls: 2, vars: 0, template: function PaymentDetailComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "payment-detail works!");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, styles: [""] });
    return PaymentDetailComponent;
})();


/***/ })

}]);