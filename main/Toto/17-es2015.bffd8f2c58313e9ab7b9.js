(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "BnmD":
/*!****************************************************!*\
  !*** ./src/app/Main/dashboard/dashboard.module.ts ***!
  \****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "Kkpc");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "DC8T");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-apexcharts */ "Tczp");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-charts */ "Lnru");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");








let DashboardModule = /*@__PURE__*/ (() => {
    class DashboardModule {
    }
    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"]
            ]] });
    return DashboardModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"]] });
})();


/***/ }),

/***/ "DC8T":
/*!*******************************************************!*\
  !*** ./src/app/Main/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-apexcharts */ "Tczp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




const _c0 = ["chart"];
const _c1 = ["userChartOptions"];
const _c2 = function () { return ["/jobs/jobview"]; };
let DashboardComponent = /*@__PURE__*/ (() => {
    class DashboardComponent {
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
                        name: 'Last Month',
                        data: [3, 8, 2, 3, 2, 5, 6, 8],
                    },
                    {
                        name: "Current Month",
                        data: [7, 6, 5, 8, 6, 7, 2, 1],
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
                colors: ["#2962FF", "#4fc3f7"],
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
                series: [60, 40],
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
                labels: ['Ios', 'Android'],
                colors: ['#40c4ff', '#2961ff'],
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
    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) {
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
        }, decls: 366, vars: 87, consts: [[1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-center", "m-b-20"], [1, "font-bold", "m-b-0"], [1, "mdi", "mdi-currency-gbp"], [1, "ml-auto"], [1, "mdi", "mdi-wallet", "text-info", "display-5"], ["href", "javascript: void(0)", 1, "font-bold"], [1, "m-t-40", "d-flex", "flex-column"], [3, "series", "chart", "dataLabels", "legend", "colors", "stroke", "labels", "tooltip", "markers"], [1, "col-sm-12", "col-lg-6"], [1, "col-sm-12", "col-md-6"], [1, "card-title"], [1, "font-bold", "m-t-20", "m-b-10"], [1, "card-subtitle", "m-b-0"], [1, "text-center", "d-flex", "flex-column", 2, "height", "62px"], [3, "series", "chart", "xaxis", "yaxis", "grid", "stroke", "tooltip", "dataLabels", "legend", "colors", "markers", "fill"], [1, "d-flex", "flex-column"], [3, "series", "chart", "xaxis", "yaxis", "grid", "stroke", "tooltip", "dataLabels", "legend", "colors", "markers"], [1, "col-sm-12"], [1, "card", "order-widget"], [1, "col-sm-12", "col-md-12"], [1, "row", "m-t-20"], [1, "col-3", "border-right"], [1, "fa", "fa-circle", "text-orange"], [1, "m-b-0", "font-medium"], [1, "fa", "fa-circle", "text-cyan"], [1, "col-3"], [1, "fa", "fa-circle", "text-info"], [1, "col-sm-12", "col-lg-4"], [1, "card", "card-hover"], [1, "card-body", 2, "padding-bottom", "7.5%"], [1, "d-flex"], [1, "ti-arrow-up", "text-success"], [1, "m-t-20", "m-b-30"], [1, "text-center", "d-flex", "flex-column", 2, "height", "60px"], [3, "series", "chart", "stroke", "tooltip", "fill"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "badge", "badge-light", "badge-pill"], [1, "badge", "badge-info", "badge-pill"], [1, "card-body", 2, "padding-bottom", "12%"], [1, "d-flex", "flex-column", "m-auto"], [3, "series", "chart", "dataLabels", "legend", "colors", "stroke", "labels", "tooltip", "plotOptions"], [1, "row", "m-t-30", "m-b-15", "text-center", 2, "margin-left", "23%"], [1, "col-4", "birder-right", "text-center"], [1, "m-b-0"], [1, "ti-arrow-down", "text-danger"], [1, "feed-widget", "message-center", "ps", "ps--active-y", "scrollable"], [1, "list-style-none", "feed-body", "m-0", "p-b-20"], [3, "routerLink"], [1, "feed-item"], [1, "feed-icon", "bg-info"], [1, "ti-user"], [1, "feed-icon", "bg-success"], [1, "feed-icon", "bg-warning"], [1, "ti-user", 2, "width", "20%"], [1, "feed-icon", "bg-danger"], [1, "feed-icon", "bg-inverse"], [1, "col-md-12"], [1, "d-flex", "align-items-center", "m-b-40"], [1, "dl"], [1, "custom-select"], ["value", "0"], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], [1, "d-md-flex", "align-items-center"], [1, "card-subtitle"], ["value", "0", "selected", ""], ["value", "1"], [1, "table-responsive"], [1, "table", "table-striped"], [1, "bg-light"], [1, "border-top-0", "backgroundColor", "tdLeft"], [1, "border-top-0", "backgroundColor", "tdCenter"], [1, "border-top-0", "backgroundColor"], [1, "tdLeft"], [1, "d-flex", "align-items-center"], [1, ""], [1, "m-b-0", "font-16"], [1, "tdCenter"], [1, "label", "label-success"], ["data-toggle", "tooltip", "title", "View", 1, "text-inverse", "p-r-10", 3, "routerLink"], [1, "fas", "fa-eye"], [1, "label", "label-warning"], [1, "label", "label-danger"]], template: function DashboardComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "6,890.68");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Overview of total earning");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Comparision between last month and current month");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Last Month Summary");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "apx-chart", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Active Customer");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "1378");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Overview of total active customer");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "apx-chart", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Active Provider");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "356");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Overview of total active provider");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "apx-chart", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Jobs Status");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Overview of jobs status");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "954");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Booked Session");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "548");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Jobs");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "123");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Transaction");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "36");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Dispute Raised");
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
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h4", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Customer Per Services");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "356 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "small");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "apx-chart", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Top Active Services");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "ul", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " ISP ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "1");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Connectivity ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Wifi connection");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Ac Repair ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "14");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h4", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Device Visit");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "apx-chart", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h4", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "60% ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "small");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "i", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "iOS ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h4", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "40% ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "small");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Android ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h4", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Latest Activity ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "ul", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "i", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Alice Freeman started following you.. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "a", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 56);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " Andrew Green sent you a message. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "a", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 57);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "i", 58);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " Andrew Green sent you a message. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "a", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Jane Dean started following you. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "a", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 60);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "i", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Jane Dean started following you. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "i", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " Juan Carpenter sent you a message. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "a", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "li", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "i", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " Judith Burton shared a photo with you. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "li", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "i", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " Judith Burton shared a photo with you. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "li", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "i", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Judith Burton shared a photo with you. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 61);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h4", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Sales Performance [Total Earning ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "i", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "20,000]");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 63);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "select", 64);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "option", 65);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "2020");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "option", 66);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "2021");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "option", 67);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "2022");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "option", 68);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "2023");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "apx-chart", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 61);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 69);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "h4", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Most Recent Booking");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h5", 70);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Overview of most recent booking");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 63);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "select", 64);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "option", 71);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Monthly");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "option", 72);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Daily");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "option", 67);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Weekly");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "option", 68);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Yearly");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 73);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "table", 74);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "thead");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "tr", 75);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "th", 76);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "JOBID");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "th", 76);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "SERVICE");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "th", 77);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "TYPE");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "th", 76);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "CUSTOMER");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "th", 76);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "PROVIDER");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "th", 78);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "STATUS");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "th", 78);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "ACTION");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "1");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 80);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "h4", 82);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "New network setup");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "td", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "On-site");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Sam");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Jenny");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "label", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Done");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "a", 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "i", 86);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 80);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "h4", 82);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Ac service");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "td", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "On-site");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Mark Wood");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Jenny");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "label", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Draft");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "a", 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "i", 86);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 80);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "h4", 82);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Connectivity");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "td", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Remote");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Sam");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Ram Shekhar Jadhav");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "label", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Done");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "a", 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "i", 86);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 80);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "h4", 82);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "New network setup");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "td", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Remote");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Jenny");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Tom");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "label", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Done");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "a", 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "i", 86);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 80);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "h4", 82);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "New network conncection");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "td", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "On-site");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Sam");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Jenny");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "label", 88);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Cancel");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "a", 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "i", 86);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 80);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "h4", 82);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "Voice modulation");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "td", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "On-site");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Sam");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "td", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "Jenny");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "label", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Done");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "a", 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](365, "i", 86);
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
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.COChartOptions.series)("chart", ctx.COChartOptions.chart)("dataLabels", ctx.COChartOptions.dataLabels)("legend", ctx.COChartOptions.legends)("colors", ctx.COChartOptions.colors)("stroke", ctx.COChartOptions.stroke)("labels", ctx.COChartOptions.labels)("tooltip", ctx.COChartOptions.tooltip)("markers", ctx.COChartOptions.markers);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.totalvisitsChartOptions.series)("chart", ctx.totalvisitsChartOptions.chart)("xaxis", ctx.totalvisitsChartOptions.xaxis)("yaxis", ctx.totalvisitsChartOptions.yaxis)("grid", ctx.totalvisitsChartOptions.grid)("stroke", ctx.totalvisitsChartOptions.stroke)("tooltip", ctx.totalvisitsChartOptions.tooltip)("dataLabels", ctx.totalvisitsChartOptions.dataLabels)("legend", ctx.totalvisitsChartOptions.legend)("colors", ctx.totalvisitsChartOptions.colors)("markers", ctx.totalvisitsChartOptions.markers)("fill", ctx.totalvisitsChartOptions.fill);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.salesratioChartOptions.series)("chart", ctx.salesratioChartOptions.chart)("xaxis", ctx.salesratioChartOptions.xaxis)("yaxis", ctx.salesratioChartOptions.yaxis)("grid", ctx.salesratioChartOptions.grid)("stroke", ctx.salesratioChartOptions.stroke)("tooltip", ctx.salesratioChartOptions.tooltip)("dataLabels", ctx.salesratioChartOptions.dataLabels)("legend", ctx.salesratioChartOptions.legend)("colors", ctx.salesratioChartOptions.colors)("markers", ctx.salesratioChartOptions.markers);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.userChartOptions.series)("chart", ctx.userChartOptions.chart)("stroke", ctx.userChartOptions.stroke)("tooltip", ctx.userChartOptions.tooltip)("fill", ctx.userChartOptions.fill);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.EmailChartOptions.series)("chart", ctx.EmailChartOptions.chart)("dataLabels", ctx.EmailChartOptions.dataLabels)("legend", ctx.EmailChartOptions.legends)("colors", ctx.EmailChartOptions.colors)("stroke", ctx.EmailChartOptions.stroke)("labels", ctx.EmailChartOptions.labels)("tooltip", ctx.EmailChartOptions.tooltip)("plotOptions", ctx.EmailChartOptions.plotOptions);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](72, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](73, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](74, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](75, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](76, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](77, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](78, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](79, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](80, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("xaxis", ctx.chartOptions.xaxis)("yaxis", ctx.chartOptions.yaxis)("grid", ctx.chartOptions.grid)("stroke", ctx.chartOptions.stroke)("tooltip", ctx.chartOptions.tooltip)("dataLabels", ctx.chartOptions.dataLabels)("legend", ctx.chartOptions.legend)("colors", ctx.chartOptions.colors)("markers", ctx.chartOptions.markers);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](81, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](82, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](83, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](84, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](85, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](86, _c2));
            }
        }, directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".feed-widget[_ngcontent-%COMP%] {\r\n    height: 370px;\r\n    position: relative;\r\n  }\r\n  \r\n  .backgroundColor[_ngcontent-%COMP%] {\r\n  background-color: #2962ff;\r\n  color :white;\r\n}\r\n  .mailbox[_ngcontent-%COMP%]   .message-center[_ngcontent-%COMP%] {\r\n  height: 317px;\r\n  overflow: auto;\r\n  position: relative;\r\n}\r\n  .ps[_ngcontent-%COMP%] {\r\n  overflow: hidden !important;\r\n  overflow-anchor: none;\r\n  -ms-overflow-style: none;\r\n  touch-action: auto;\r\n  -ms-touch-action: auto;\r\n}\r\n  td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}"] });
    return DashboardComponent;
})();


/***/ }),

/***/ "Kkpc":
/*!************************************************************!*\
  !*** ./src/app/Main/dashboard/dashboard-routing.module.ts ***!
  \************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "DC8T");





const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
                data: {
                    title: 'Master Dashboard',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: '' }
                    ]
                }
            },
        ]
    }
];
let DashboardRoutingModule = /*@__PURE__*/ (() => {
    class DashboardRoutingModule {
    }
    DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
    DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return DashboardRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ })

}]);