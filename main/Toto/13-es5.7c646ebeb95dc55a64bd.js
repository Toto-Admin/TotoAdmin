(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13], {
    /***/
    "7rLz":
    /*!************************************************************************!*\
      !*** ./src/app/Main/customer/customer-edit/customer-edit.component.ts ***!
      \************************************************************************/

    /*! exports provided: CustomerEditComponent */

    /***/
    function rLz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerEditComponent", function () {
        return CustomerEditComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var CustomerEditComponent = /*@__PURE__*/function () {
        var CustomerEditComponent = /*#__PURE__*/function () {
          function CustomerEditComponent() {
            _classCallCheck(this, CustomerEditComponent);
          }

          _createClass(CustomerEditComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return CustomerEditComponent;
        }();

        CustomerEditComponent.ɵfac = function CustomerEditComponent_Factory(t) {
          return new (t || CustomerEditComponent)();
        };

        CustomerEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: CustomerEditComponent,
          selectors: [["app-customer-edit"]],
          decls: 2,
          vars: 0,
          template: function CustomerEditComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "customer-edit works!");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [""]
        });
        return CustomerEditComponent;
      }();
      /***/

    },

    /***/
    "9tNC":
    /*!************************************************************************!*\
      !*** ./src/app/Main/customer/customer-list/customer-list.component.ts ***!
      \************************************************************************/

    /*! exports provided: CustomerListComponent */

    /***/
    function tNC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function () {
        return CustomerListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-datatables */
      "oTcB");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function CustomerListComponent_ng_template_368_span_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.formsErrors.Name, " ");
        }
      }

      function CustomerListComponent_ng_template_368_span_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.formsErrors.Name, " ");
        }
      }

      function CustomerListComponent_ng_template_368_span_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.formsErrors.Position, " ");
        }
      }

      function CustomerListComponent_ng_template_368_span_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.formsErrors.Email, " ");
        }
      }

      function CustomerListComponent_ng_template_368_span_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.formsErrors.Mobile, " ");
        }
      }

      function CustomerListComponent_ng_template_368_span_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.formsErrors.Mobile, " ");
        }
      }

      function CustomerListComponent_ng_template_368_span_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.formsErrors.Mobile, " ");
        }
      }

      function CustomerListComponent_ng_template_368_span_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.formsErrors.Mobile, " ");
        }
      }

      function CustomerListComponent_ng_template_368_span_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.formsErrors.DateOfJoining, " ");
        }
      }

      function CustomerListComponent_ng_template_368_span_93_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.formsErrors.Projects, " ");
        }
      }

      function CustomerListComponent_ng_template_368_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerListComponent_ng_template_368_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.closeBtnClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomerListComponent_ng_template_368_Template_form_ngSubmit_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CustomerListComponent_ng_template_368_Template_input_blur_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.logValidationErrors(ctx_r16.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CustomerListComponent_ng_template_368_span_15_Template, 2, 1, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CustomerListComponent_ng_template_368_Template_input_blur_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.logValidationErrors(ctx_r17.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CustomerListComponent_ng_template_368_span_23_Template, 2, 1, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CustomerListComponent_ng_template_368_Template_input_blur_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.logValidationErrors(ctx_r18.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CustomerListComponent_ng_template_368_span_31_Template, 2, 1, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CustomerListComponent_ng_template_368_Template_input_blur_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.logValidationErrors(ctx_r19.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CustomerListComponent_ng_template_368_span_39_Template, 2, 1, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Latitude");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CustomerListComponent_ng_template_368_Template_input_blur_44_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.logValidationErrors(ctx_r20.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, CustomerListComponent_ng_template_368_span_45_Template, 2, 1, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Longitude");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CustomerListComponent_ng_template_368_Template_input_blur_50_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.logValidationErrors(ctx_r21.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, CustomerListComponent_ng_template_368_span_51_Template, 2, 1, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CustomerListComponent_ng_template_368_Template_input_blur_58_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.logValidationErrors(ctx_r22.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, CustomerListComponent_ng_template_368_span_59_Template, 2, 1, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Referral Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CustomerListComponent_ng_template_368_Template_input_blur_64_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.logValidationErrors(ctx_r23.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, CustomerListComponent_ng_template_368_span_65_Template, 2, 1, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Date Of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerListComponent_ng_template_368_Template_input_ngModelChange_70_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.joiningDate = $event;
          })("blur", function CustomerListComponent_ng_template_368_Template_input_blur_70_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.logValidationErrors(ctx_r25.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, CustomerListComponent_ng_template_368_span_71_Template, 2, 1, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Profile Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CustomerListComponent_ng_template_368_Template_input_blur_92_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.logValidationErrors(ctx_r26.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, CustomerListComponent_ng_template_368_span_93_Template, 2, 1, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerListComponent_ng_template_368_Template_button_click_95_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.closeBtnClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.editUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formsErrors.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formsErrors.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formsErrors.Position);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formsErrors.Email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formsErrors.Mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formsErrors.Mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formsErrors.Mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formsErrors.Mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.joiningDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formsErrors.DateOfJoining);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formsErrors.Projects);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.editUser.invalid);
        }
      }

      var _c0 = function _c0() {
        return ["/customer/view"];
      };

      var CustomerListComponent = /*@__PURE__*/function () {
        var CustomerListComponent = /*#__PURE__*/function () {
          function CustomerListComponent(fb, modalService) {
            _classCallCheck(this, CustomerListComponent);

            this.fb = fb;
            this.modalService = modalService; // editUser: FormGroup | null = null;

            this.userDetail = null;
            this.filterArray = null;
            this.joiningDate = null;
            this.editUser = null;
            this.dtOptions = {};
            this.formsErrors = [];
          }

          _createClass(CustomerListComponent, [{
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
              this.editUser = this.fb.group({
                id: [''],
                Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                Position: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                Mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                DateOfJoining: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                Salary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                Projects: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              });
            }
          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              this.datatableElement.dtInstance.then(function (dtInstance) {
                dtInstance.columns().every(function () {
                  var that = this;
                  $('input', this.header()).on('keyup change', function () {
                    debugger;
                    var data;
                    data = $(this).val();

                    if (that.search() !== data) {
                      that.search(data).draw();
                    }
                  });
                });
              });
            }
          }, {
            key: "openModal",
            value: function openModal(targetModal, user) {
              this.modalService.open(targetModal, {
                centered: true,
                backdrop: 'static'
              });
            }
          }, {
            key: "closeBtnClick",
            value: function closeBtnClick() {
              this.modalService.dismissAll();
              this.ngOnInit();
            }
          }]);

          return CustomerListComponent;
        }();

        CustomerListComponent.ɵfac = function CustomerListComponent_Factory(t) {
          return new (t || CustomerListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]));
        };

        CustomerListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: CustomerListComponent,
          selectors: [["app-customer-list"]],
          viewQuery: function CustomerListComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], 1);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.datatableElement = _t.first);
            }
          },
          decls: 370,
          vars: 49,
          consts: [[1, "row"], [1, "col-12"], [1, "card", "card-body"], [1, "card-title"], [2, "float", "right"], [1, "btn", "btn-primary", "backgroundColor", "ml-auto", 3, "click"], [1, ""], [1, "col-md-12"], ["datatable", "", 1, "row-border", "hover", "table", "table-bordered", "table-striped", 3, "dtOptions"], [2, "background", "#92adfc"], [1, "backgroundColor", "tdLeft"], [1, "backgroundColor"], [1, "tdLeft"], [1, "d-flex"], ["src", "assets/images/users/1.jpg", "height", " 25px", "width", "25px", 1, "rounded-circle"], [1, "ml-3"], [1, "font-medium", "mb-0"], [3, "routerLink"], [1, "badge", "badge-pill", "badge-success", "font-14", "infoData"], ["data-toggle", "tooltip", "title", "View", 1, "text-inverse", "p-r-10", 3, "routerLink"], [1, "fas", "fa-eye"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "Edit", 1, "text-inverse", "p-r-10"], [1, "ti-marker-alt"], ["href", "javascript:void(0)", "title", "Delete", "data-toggle", "tooltip", 1, "text-inverse"], [1, "ti-trash"], ["src", "assets/images/users/2.jpg", "height", " 25px", "width", "25px", 1, "rounded-circle"], ["src", "assets/images/users/3.jpg", "height", " 25px", "width", "25px", 1, "rounded-circle"], [1, "badge", "badge-pill", "badge-warning", "font-14", "infoData"], ["src", "assets/images/users/4.jpg", "height", " 25px", "width", "25px", 1, "rounded-circle"], ["src", "assets/images/users/5.jpg", "height", " 25px", "width", "25px", 1, "rounded-circle"], [1, "d-flex", "justify-content-center", "mt-5"], ["editUserModal", ""], [1, "modal-header", "backgroundColor", 2, "background-color", "#2962ff !important", "color", "white"], ["id", "editUserLabel", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "name", 1, "col-sm-4", "col-form-label"], [1, "reqNote"], [1, "col-sm-8"], ["type", "text", "formControlName", "Name", "id", "name", 1, "form-control", 3, "blur"], ["class", "help-block", 4, "ngIf"], ["for", "position", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "Position", "id", "position", 1, "form-control", 3, "blur"], ["for", "email", 1, "col-sm-4", "col-form-label"], ["type", "email", "formControlName", "Email", "id", "email", 1, "form-control", 3, "blur"], ["for", "mobile", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "Mobile", "id", "mobile", 1, "form-control", 3, "blur"], ["for", "doj", 1, "col-sm-4", "col-form-label"], ["type", "date", "formControlName", "DateOfJoining", "id", "doj", 1, "form-control", 3, "ngModel", "ngModelChange", "blur"], ["for", "salary", 1, "col-sm-4", "col-form-label"], [1, "form-check", "form-check-inline"], [1, "custom-control", "custom-radio"], ["type", "radio", "id", "customControlValidation2", "name", "radio-stacked", 1, "custom-control-input"], ["for", "customControlValidation2", 1, "custom-control-label"], ["type", "radio", "id", "customControlValidation3", "name", "radio-stacked", 1, "custom-control-input"], ["for", "customControlValidation3", 1, "custom-control-label"], ["for", "projects", 1, "col-sm-4", "col-form-label"], ["type", "file", "formControlName", "Projects", "id", "projects", 1, "form-control", 3, "blur"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "help-block"]],
          template: function CustomerListComponent_Template(rf, ctx) {
            if (rf & 1) {
              var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Customer List");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerListComponent_Template_button_click_6_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

                var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](369);

                return ctx.openModal(_r0, null);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Customer");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ID");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "NAME");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "EMAIL");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "MOBILE");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "REG. DATE");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "LAST LOGIN");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "STATUS");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "ACTION");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Sushant Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "sushantpatil@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "9898235323");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "12/12/2020");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "20/03/2021 3:25PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Active");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Ashish Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "ashishpatil@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "89342343543");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "14/12/2020");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "23/03/2021 3:25PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Active");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Pradhip Pawar");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "pradhippawar@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "8459495933");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "22/12/2020");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "24/03/2021 3:25PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Inactive");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Sudhir Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "sudhirpawar@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "8459495933");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "12/10/2020");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "20/03/2021 3:25PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Active");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "i", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "5");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Sushant Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "pradhippawar@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "8459495933");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "12/12/2020");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "20/03/2021 3:25PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Inactive");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "i", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "i", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "a", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "i", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "6");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "img", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Sushant Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "pradhippawar@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "8459495933");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "12/12/2020");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "20/03/2021 3:25PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Inactive");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "a", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "i", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "a", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "i", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "a", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "i", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "7");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "img", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "p", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "a", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Sushant Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "pradhippawar@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "8459495933");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "12/12/2020");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "20/03/2021 3:25PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Inactive");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "a", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "i", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "a", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "i", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "a", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "i", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "8");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "img", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "p", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "a", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Sushant Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "pradhippawar@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "8459495933");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "12/12/2020");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "20/03/2021 3:25PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Inactive");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "a", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "i", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "a", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "i", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "a", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "i", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "9");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "img", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "p", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "a", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Sushant Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "pradhippawar@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "8459495933");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "12/12/2020");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "20/03/2021 3:25PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Inactive");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "a", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "i", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "a", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "i", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "a", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "i", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "10");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "img", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "p", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "a", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Sushant Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "pradhippawar@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "8459495933");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "12/12/2020");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "20/03/2021 3:25PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Inactive");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "a", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "i", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "a", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "i", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "a", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "i", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "11");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "img", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "p", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "a", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "Sushant Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "pradhippawar@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "8459495933");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "12/12/2020");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "20/03/2021 3:25PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Inactive");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "a", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "i", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "a", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "i", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "a", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "i", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "12");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "img", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "p", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "a", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Sushant Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "pradhippawar@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "8459495933");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "12/12/2020");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "20/03/2021 3:25PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "Inactive");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "a", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "i", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "a", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "i", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "a", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](366, "i", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](367, "div", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](368, CustomerListComponent_ng_template_368_Template, 99, 13, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](48, _c0));
            }
          },
          directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
          styles: [".backgroundColor[_ngcontent-%COMP%] {\r\n    background-color: #2962ff;\r\n    color :white;\r\n}"]
        });
        return CustomerListComponent;
      }();
      /***/

    },

    /***/
    "Ep5i":
    /*!****************************************************************!*\
      !*** ./src/app/Main/customer/dashboard/dashboard.component.ts ***!
      \****************************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function Ep5i(module, __webpack_exports__, __webpack_require__) {
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
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");

      var _c0 = ["chart"];

      var _c1 = function _c1() {
        return ["/customer/view"];
      };

      var DashboardComponent = /*@__PURE__*/function () {
        var DashboardComponent = function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);

          this.chart = Object.create(null);
          this.chart2 = Object.create(null);
          this.chart1 = Object.create(null);
          this.chart4 = Object.create(null);
          this.chartOptions = {
            series: [{
              name: 'Sales Performance',
              data: [30, 400, 100, 400, 150, 275, 135, 200, 218]
            }],
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
              width: '2'
            },
            colors: ['#2962ff'],
            legend: {
              show: false
            },
            fill: {
              opacity: 0.7
            },
            grid: {
              show: true,
              strokeDashArray: 0,
              borderColor: 'rgba(0,0,0,0.1)'
            },
            xaxis: {
              type: 'category',
              categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
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
          this.CampaignStatsChartOptions = {
            series: [{
              name: 'Ac service',
              data: [5, 4, 3, 7, 5, 10, 3, 5, 4, 3, 7, 10]
            }, {
              name: "Tv Repair",
              data: [2, 6, 5, 3, 4, 9, 6, 7, 3, 8, 10, 6]
            }],
            plotOptions: {
              bar: {
                columnWidth: '45%',
                barHeight: '105%'
              }
            },
            chart: {
              type: 'bar',
              stacked: true,
              height: 250,
              fontFamily: 'Nunito Sans,sans-serif',
              toolbar: {
                show: false
              }
            },
            stroke: {
              curve: "smooth",
              width: 1
            },
            markers: {
              size: 3,
              strokeWidth: 3,
              strokeColors: "transparent"
            },
            colors: ["#2962FF", "#4fc3f7"],
            fill: {
              type: "solid",
              opacity: 1,
              colors: ["#2962FF", "#4fc3f7"]
            },
            xaxis: {
              type: 'category',
              categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              labels: {
                style: {
                  colors: '#a1aab2'
                }
              }
            },
            dataLabels: {
              enabled: false
            },
            yaxis: {
              labels: {
                style: {
                  colors: '#a1aab2'
                }
              }
            },
            tooltip: {
              x: {
                format: "dd/MM/yy HH:mm"
              },
              theme: "dark"
            },
            legends: {
              show: false
            },
            grid: {
              show: true
            }
          };
          this.mEmailChartOptions = {
            series: [71, 60, 65, 77],
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
            labels: [' AC Service', 'ISP', 'Poor Wifi Service', 'Mobile Hardware'],
            colors: ['#40c4ff', '#ff821c', '#7e74fb', '#ff29a4']
          };
          this.mEmailChartOptions1 = {
            series: [71, 60],
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
            labels: ['Not Good Service', ' unsatisfied '],
            colors: ['#40c4ff', '#2961ff']
          };
        };

        DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
          return new (t || DashboardComponent)();
        };

        DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: DashboardComponent,
          selectors: [["app-dashboard"]],
          viewQuery: function DashboardComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart2 = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart1 = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart4 = _t.first);
            }
          },
          decls: 386,
          vars: 44,
          consts: [[1, "row"], [1, "col-lg-3", "col-md-6"], [1, "card", "border-left", "card-hover", "border-orange"], [1, "card-body"], [1, "d-flex", "no-block", "align-items-center"], [1, "text-orange", "display-6"], [1, "fas", "fa-user"], [1, "ml-auto"], [1, "tdRight"], [1, "text-orange"], [1, "card", "border-left", "card-hover", "border-info"], [1, "text-info", "display-6"], [1, "text-info"], [1, "card", "border-left", "card-hover", "border-cyan"], [1, "text-cyan", "display-6"], [1, "fas", "fa-user-times"], [1, "text-cyan"], [1, "card", "border-left", "card-hover", "border-success"], [1, "text-success", "display-6"], [1, "fas", "fa-users"], [1, "text-success"], [1, "col-md-12"], [1, "card"], [1, "d-flex", "align-items-center", "m-b-40"], [1, "card-title"], [1, "dl"], [1, "custom-select"], ["value", "0"], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], [1, "d-flex", "flex-column"], [3, "series", "chart", "xaxis", "yaxis", "grid", "stroke", "tooltip", "dataLabels", "legend", "colors", "markers"], [1, "d-md-flex", "align-items-center"], ["value", "0", "selected", ""], ["value", "1"], [1, "table-responsive"], [1, "table", "table-striped"], [1, "border-top-0", "backgroundColor", "tdLeft"], [1, "border-top-0", "backgroundColor", "tdCenter"], [1, "d-flex", "align-items-center"], [1, ""], [1, "m-b-0", "font-16"], [1, "tdCenter"], [1, "label", "label-success"], [1, "fa", "fa-star", "checked"], [1, "fa", "fa-star"], ["data-toggle", "tooltip", "title", "View", 1, "text-inverse", "p-r-10", 3, "routerLink"], [1, "fas", "fa-eye"], [1, "label", "label-warning"], [1, "label", "label-danger"], [1, "col-md-6"], [1, "card", "card-hover"], [1, "ml-auto", "align-items-center"], [1, "row", "my-4", "py-2"], [1, "col-lg-8"], [1, "m-b-20", "d-flex", "align-items-center", "flex-column"], [3, "series", "chart", "dataLabels", "legend", "colors", "stroke", "labels", "tooltip", "plotOptions"], [1, "col-lg-4"], [1, "list-style-none"], [1, "m-t-20"], [1, "fas", "fa-circle", "m-r-5font-12", 2, "color", "#ff29a4"], [1, "float-right"], [1, "fas", "fa-circle", "m-r-5", "text-info", "font-12", 2, "color", "#40c4ff"], [1, "fas", "fa-circle", "m-r-5", "text-orange", "font-12", 2, "color", "#ff821c"], [1, "fas", "fa-circle", "m-r-5", "text-primary", "font-12", 2, "color", "#7e74fb"], [1, "col-lg-6"], [1, "fas", "fa-circle", "m-r-5", "text-cyan", "font-12"], [1, "fas", "fa-circle", "m-r-5", "text-info", "font-12"], [1, "col-sm-12", "col-lg-4"], [1, "card-subtitle"], [1, "font-medium", "m-t-40", "m-b-0"], [1, "text-muted"], [1, "image-box", "m-t-30", "m-b-30"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "Simmons", 1, "m-r-10"], ["src", "assets/images/users/1.jpg", "width", "45", "alt", "user", 1, "rounded-circle"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "Fitz", 1, "m-r-10"], ["src", "assets/images/users/2.jpg", "width", "45", "alt", "user", 1, "rounded-circle"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "Phil", 1, "m-r-10"], ["src", "assets/images/users/3.jpg", "width", "45", "alt", "user", 1, "rounded-circle"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "Melinda", 1, "m-r-10"], ["src", "assets/images/users/4.jpg", "width", "45", "alt", "user", 1, "rounded-circle"], ["href", "javascript:void(0)", 1, "btn", "btn-lg", "btn-info", "waves-effect", "waves-light"], [1, "col-sm-12", "col-lg-8", "border-left"], [1, "m-t-30"], [1, "mdi", "mdi-emoticon-happy", "display-5", "text-muted"], [1, "m-l-10"], [1, "m-b-0"], ["type", "success", 3, "value"], [1, "m-t-40"], [1, "mdi", "mdi-emoticon-sad", "display-5", "text-muted"], ["type", "orange", 3, "value"], [1, "m-t-40", "m-b-40"], [1, "mdi", "mdi-emoticon-neutral", "display-5", "text-muted"], ["type", "info", 3, "value"]],
          template: function DashboardComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "290");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Active");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "120");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Inactive");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "600");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h6", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Blocked");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "270");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h6", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Total");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Customer Visitor [ Total Customer Visit Count: 2345 ]");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "select", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "2020");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "2021");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "2022");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "2023");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "apx-chart", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h4", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Top Negative Rated Customer ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "select", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 34);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Monthly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 35);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Daily");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "option", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Weekly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Yearly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 36);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "table", 37);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "th", 38);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "SERVICE");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "th", 39);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "TYPE");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "th", 39);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "STATUS");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "th", 38);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "CUSTOMER");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "th", 38);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "PROVIDER");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "th", 38);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "RATING");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "th", 39);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "ACTION");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 40);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 41);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h4", 42);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "New network setup");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "On-site");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label", 44);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Done");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Sam");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Jenny");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "span", 45);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "span", 45);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "span", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "span", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "span", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 47);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "i", 48);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 40);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 41);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h4", 42);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Voice modulation");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "On-site");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "label", 49);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Draft");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Mark Wood");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Jenny");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "span", 45);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "span", 45);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "span", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "span", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "span", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 47);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "i", 48);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 40);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 41);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h4", 42);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Connectivity");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Remote");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "label", 44);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Done");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Sam");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Ram Shekhar Jadhav");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "span", 45);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "span", 45);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "span", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "span", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "span", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 47);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i", 48);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 40);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 41);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h4", 42);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "New network setup");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "td", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Remote");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "td", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "label", 44);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Done");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Jenny");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Tom");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "span", 45);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "span", 45);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "span", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "span", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "span", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "a", 47);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "i", 48);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 40);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 41);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "h4", 42);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "New network conncection");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "td", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "On-site");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "td", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "label", 50);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Cancel");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Sam");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Jenny");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "span", 45);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "span", 45);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "span", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "span", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "span", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "td", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "a", 47);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "i", 48);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 40);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 41);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "h4", 42);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Mobile");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "td", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "On-site");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "td", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "label", 44);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Done");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Sam");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Jenny");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "span", 45);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "span", 45);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "span", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "span", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "span", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "td", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "a", 47);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "i", 48);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 51);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "h4", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Unhappy Customer : Service Wise");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 53);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "select", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "option", 34);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Monthly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "option", 35);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Daily");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "option", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Weekly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "option", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Yearly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 54);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 56);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "apx-chart", 57);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 58);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "ul", 59);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "li", 60);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "i", 61);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " Mobile Hardware ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "span", 62);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "77");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "li", 60);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "i", 63);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " AC Service ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "span", 62);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "71");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "li", 60);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "i", 64);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, " ISP ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "span", 62);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "60");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "li", 60);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "i", 65);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, " Poor Wifi Service ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "span", 62);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "65");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 51);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "h4", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Reasons of Unhappiness");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 53);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "select", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "option", 34);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Monthly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "option", 35);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Daily");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "option", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Weekly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "option", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Yearly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 54);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 66);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 56);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "apx-chart", 57);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 66);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "ul", 59);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "li", 60);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "i", 67);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, " Not Good Service ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "span", 62);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "71");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "li", 60);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "i", 68);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, " Unsatisfied ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "span", 62);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "60");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 69);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "h4", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "Reviews");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "h5", 70);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Overview of review");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "h2", 71);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "2542");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "span", 72);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "This month we got 346 new reviews");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 73);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "a", 74);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "img", 75);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "a", 76);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "img", 77);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "a", 78);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](351, "img", 79);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "a", 80);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "img", 81);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "a", 82);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "Checkout All Reviews");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 83);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "ul", 59);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "li", 84);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 40);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "i", 85);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "div", 86);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "h5", 87);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Positive Reviews");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "span", 72);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "2554 Reviews");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](367, "ngb-progressbar", 88);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "li", 89);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "div", 40);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "i", 90);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "div", 86);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "h5", 87);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "Negative Reviews");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "span", 72);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "554 Reviews");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "ngb-progressbar", 91);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "li", 92);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 40);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "i", 93);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "div", 86);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "h5", 87);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Neutral Reviews");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "span", 72);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "54 Reviews");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](385, "ngb-progressbar", 94);

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
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](69);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("xaxis", ctx.chartOptions.xaxis)("yaxis", ctx.chartOptions.yaxis)("grid", ctx.chartOptions.grid)("stroke", ctx.chartOptions.stroke)("tooltip", ctx.chartOptions.tooltip)("dataLabels", ctx.chartOptions.dataLabels)("legend", ctx.chartOptions.legend)("colors", ctx.chartOptions.colors)("markers", ctx.chartOptions.markers);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](61);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.mEmailChartOptions.series)("chart", ctx.mEmailChartOptions.chart)("dataLabels", ctx.mEmailChartOptions.dataLabels)("legend", ctx.mEmailChartOptions.legends)("colors", ctx.mEmailChartOptions.colors)("stroke", ctx.mEmailChartOptions.stroke)("labels", ctx.mEmailChartOptions.labels)("tooltip", ctx.mEmailChartOptions.tooltip)("plotOptions", ctx.mEmailChartOptions.plotOptions);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.mEmailChartOptions1.series)("chart", ctx.mEmailChartOptions1.chart)("dataLabels", ctx.mEmailChartOptions1.dataLabels)("legend", ctx.mEmailChartOptions1.legends)("colors", ctx.mEmailChartOptions1.colors)("stroke", ctx.mEmailChartOptions1.stroke)("labels", ctx.mEmailChartOptions1.labels)("tooltip", ctx.mEmailChartOptions1.tooltip)("plotOptions", ctx.mEmailChartOptions1.plotOptions);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 47);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 20);
            }
          },
          directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbProgressbar"]],
          styles: [".checked[_ngcontent-%COMP%] {\r\n    color: orange;\r\n  }\r\n  .backgroundColor[_ngcontent-%COMP%] {\r\n    background-color: #2962ff;\r\n    color :white;\r\n  }"]
        });
        return DashboardComponent;
      }();
      /***/

    },

    /***/
    "GoXb":
    /*!**********************************************************************!*\
      !*** ./src/app/Main/customer/customer-add/customer-add.component.ts ***!
      \**********************************************************************/

    /*! exports provided: CustomerAddComponent */

    /***/
    function GoXb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerAddComponent", function () {
        return CustomerAddComponent;
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

      var CustomerAddComponent = /*@__PURE__*/function () {
        var CustomerAddComponent = /*#__PURE__*/function () {
          function CustomerAddComponent() {
            _classCallCheck(this, CustomerAddComponent);

            this.dtOptions = {};
          }

          _createClass(CustomerAddComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.dtOptions = {
                pagingType: 'full_numbers',
                pageLength: 5,
                lengthMenu: [5, 15, 25],
                processing: true
              };
            }
          }]);

          return CustomerAddComponent;
        }();

        CustomerAddComponent.ɵfac = function CustomerAddComponent_Factory(t) {
          return new (t || CustomerAddComponent)();
        };

        CustomerAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: CustomerAddComponent,
          selectors: [["app-customer-add"]],
          decls: 210,
          vars: 24,
          consts: [[1, "row"], [1, "col-md-12"], [1, "card", "card-hover"], [1, "card-body"], ["datatable", "", 1, "row-border", "hover", "table", "table-bordered"], [2, "background", "#92adfc"], [1, "d-flex", "align-items-center"], ["src", "assets/images/users/1.jpg", "height", " 50px", "width", "50px", 1, "rounded-circle"], [1, "ml-3"], [1, "font-medium", "mb-0"], [3, "routerLink"], ["src", "assets/images/users/2.jpg", "height", " 50px", "width", "50px", 1, "rounded-circle"], ["src", "assets/images/users/3.jpg", "height", " 50px", "width", "50px", 1, "rounded-circle"], ["src", "assets/images/users/4.jpg", "height", " 50px", "width", "50px", 1, "rounded-circle"], ["src", "assets/images/users/5.jpg", "height", " 50px", "width", "50px", 1, "rounded-circle"]],
          template: function CustomerAddComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ID");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "NAME");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "EMAIL");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "MOBILE");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "STATUS");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sushant Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "sushantpatil@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "9898235323");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Active");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Ashish Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "ashishpatil@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "89342343543");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Active");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Pradhip Pawar");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "pradhippawar@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "8459495933");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Inactive");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Sudhir Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "sudhirpawar@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "8459495933");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Active");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "5");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Sushant Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "pradhippawar@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "8459495933");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Inactive");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "6");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Sushant Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "pradhippawar@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "8459495933");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Inactive");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "7");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Sushant Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "pradhippawar@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "8459495933");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Inactive");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "8");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Sushant Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "pradhippawar@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "8459495933");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Inactive");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "9");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Sushant Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "pradhippawar@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "8459495933");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Inactive");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "10");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "img", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Sushant Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "pradhippawar@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "8459495933");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Inactive");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "11");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "img", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "a", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Sushant Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "pradhippawar@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "8459495933");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Inactive");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "12");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "img", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "p", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "a", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Sushant Patil");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "pradhippawar@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "8459495933");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Inactive");

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
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));
            }
          },
          directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
          styles: [""]
        });
        return CustomerAddComponent;
      }();
      /***/

    },

    /***/
    "XqCq":
    /*!**************************************************!*\
      !*** ./src/app/Main/customer/customer.module.ts ***!
      \**************************************************/

    /*! exports provided: CustomerModule */

    /***/
    function XqCq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerModule", function () {
        return CustomerModule;
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


      var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-datatables */
      "oTcB");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var _customer_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./customer-routing.module */
      "pV1h");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "Ep5i");
      /* harmony import */


      var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./customer-list/customer-list.component */
      "9tNC");
      /* harmony import */


      var _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./customer-add/customer-add.component */
      "GoXb");
      /* harmony import */


      var _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./customer-edit/customer-edit.component */
      "7rLz");
      /* harmony import */


      var _customer_view_customer_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./customer-view/customer-view.component */
      "qNui");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @agm/core */
      "LSHg");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-apexcharts */
      "Tczp");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/"); // import 


      var CustomerModule = /*@__PURE__*/function () {
        var CustomerModule = function CustomerModule() {
          _classCallCheck(this, CustomerModule);
        };

        CustomerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: CustomerModule
        });
        CustomerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function CustomerModule_Factory(t) {
            return new (t || CustomerModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _customer_routing_module__WEBPACK_IMPORTED_MODULE_4__["CustomerRoutingModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"], _customer_routing_module__WEBPACK_IMPORTED_MODULE_4__["CustomerRoutingModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__["NgApexchartsModule"]]]
        });
        return CustomerModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomerModule, {
          declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_6__["CustomerListComponent"], _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_7__["CustomerAddComponent"], _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_8__["CustomerEditComponent"], _customer_view_customer_view_component__WEBPACK_IMPORTED_MODULE_9__["CustomerViewComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _customer_routing_module__WEBPACK_IMPORTED_MODULE_4__["CustomerRoutingModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"], _customer_routing_module__WEBPACK_IMPORTED_MODULE_4__["CustomerRoutingModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__["NgApexchartsModule"]]
        });
      })();
      /***/

    },

    /***/
    "pV1h":
    /*!**********************************************************!*\
      !*** ./src/app/Main/customer/customer-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: CustomerRoutingModule */

    /***/
    function pV1h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerRoutingModule", function () {
        return CustomerRoutingModule;
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


      var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./customer-list/customer-list.component */
      "9tNC");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "Ep5i");
      /* harmony import */


      var _customer_view_customer_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./customer-view/customer-view.component */
      "qNui");
      /* harmony import */


      var _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./customer-add/customer-add.component */
      "GoXb");

      var routes = [{
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
      }, {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
      }, {
        path: 'customer-list',
        component: _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_2__["CustomerListComponent"]
      }, {
        path: 'view',
        component: _customer_view_customer_view_component__WEBPACK_IMPORTED_MODULE_4__["CustomerViewComponent"]
      }, {
        path: 'add',
        component: _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_5__["CustomerAddComponent"]
      }];

      var CustomerRoutingModule = /*@__PURE__*/function () {
        var CustomerRoutingModule = function CustomerRoutingModule() {
          _classCallCheck(this, CustomerRoutingModule);
        };

        CustomerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: CustomerRoutingModule
        });
        CustomerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function CustomerRoutingModule_Factory(t) {
            return new (t || CustomerRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return CustomerRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomerRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "qNui":
    /*!************************************************************************!*\
      !*** ./src/app/Main/customer/customer-view/customer-view.component.ts ***!
      \************************************************************************/

    /*! exports provided: CustomerViewComponent */

    /***/
    function qNui(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerViewComponent", function () {
        return CustomerViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @agm/core */
      "LSHg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      var _c0 = ["map4"];

      function CustomerViewComponent_ng_template_543_span_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.formsErrors.Name, " ");
        }
      }

      function CustomerViewComponent_ng_template_543_span_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.formsErrors.Name, " ");
        }
      }

      function CustomerViewComponent_ng_template_543_span_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.formsErrors.Position, " ");
        }
      }

      function CustomerViewComponent_ng_template_543_span_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.formsErrors.Email, " ");
        }
      }

      function CustomerViewComponent_ng_template_543_span_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.formsErrors.Mobile, " ");
        }
      }

      function CustomerViewComponent_ng_template_543_span_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.formsErrors.Mobile, " ");
        }
      }

      function CustomerViewComponent_ng_template_543_span_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.formsErrors.Mobile, " ");
        }
      }

      function CustomerViewComponent_ng_template_543_span_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.formsErrors.Mobile, " ");
        }
      }

      function CustomerViewComponent_ng_template_543_span_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.formsErrors.DateOfJoining, " ");
        }
      }

      function CustomerViewComponent_ng_template_543_span_93_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.formsErrors.Projects, " ");
        }
      }

      function CustomerViewComponent_ng_template_543_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerViewComponent_ng_template_543_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.closeBtnClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomerViewComponent_ng_template_543_Template_form_ngSubmit_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CustomerViewComponent_ng_template_543_Template_input_blur_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.logValidationErrors(ctx_r17.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CustomerViewComponent_ng_template_543_span_15_Template, 2, 1, "span", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CustomerViewComponent_ng_template_543_Template_input_blur_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.logValidationErrors(ctx_r18.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CustomerViewComponent_ng_template_543_span_23_Template, 2, 1, "span", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CustomerViewComponent_ng_template_543_Template_input_blur_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.logValidationErrors(ctx_r19.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CustomerViewComponent_ng_template_543_span_31_Template, 2, 1, "span", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CustomerViewComponent_ng_template_543_Template_input_blur_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.logValidationErrors(ctx_r20.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CustomerViewComponent_ng_template_543_span_39_Template, 2, 1, "span", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Latitude");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CustomerViewComponent_ng_template_543_Template_input_blur_44_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.logValidationErrors(ctx_r21.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, CustomerViewComponent_ng_template_543_span_45_Template, 2, 1, "span", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Longitude");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CustomerViewComponent_ng_template_543_Template_input_blur_50_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.logValidationErrors(ctx_r22.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, CustomerViewComponent_ng_template_543_span_51_Template, 2, 1, "span", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CustomerViewComponent_ng_template_543_Template_input_blur_58_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.logValidationErrors(ctx_r23.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, CustomerViewComponent_ng_template_543_span_59_Template, 2, 1, "span", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Referral Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CustomerViewComponent_ng_template_543_Template_input_blur_64_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.logValidationErrors(ctx_r24.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, CustomerViewComponent_ng_template_543_span_65_Template, 2, 1, "span", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Date Of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerViewComponent_ng_template_543_Template_input_ngModelChange_70_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.joiningDate = $event;
          })("blur", function CustomerViewComponent_ng_template_543_Template_input_blur_70_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.logValidationErrors(ctx_r26.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, CustomerViewComponent_ng_template_543_span_71_Template, 2, 1, "span", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Profile Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "input", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CustomerViewComponent_ng_template_543_Template_input_blur_92_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.logValidationErrors(ctx_r27.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, CustomerViewComponent_ng_template_543_span_93_Template, 2, 1, "span", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerViewComponent_ng_template_543_Template_button_click_95_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.closeBtnClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.editUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formsErrors.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formsErrors.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formsErrors.Position);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formsErrors.Email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formsErrors.Mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formsErrors.Mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formsErrors.Mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formsErrors.Mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.joiningDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formsErrors.DateOfJoining);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formsErrors.Projects);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.editUser.invalid);
        }
      }

      var _c1 = function _c1() {
        return ["/jobs/jobview"];
      };

      var _c2 = function _c2() {
        return ["/customer/view"];
      };

      var CustomerViewComponent = /*@__PURE__*/function () {
        var CustomerViewComponent = /*#__PURE__*/function () {
          function CustomerViewComponent(fb, modalService) {
            _classCallCheck(this, CustomerViewComponent);

            this.fb = fb;
            this.modalService = modalService;
            this.map4 = Object.create(null);
            this.lat = -34.397;
            this.lng = 150.644;
            this.latA = -34.754764;
            this.lngA = 149.736246;
            this.zoom = 8;
            this.styles = [{
              featureType: 'all',
              stylers: [{
                saturation: -80
              }]
            }, {
              featureType: 'road.arterial',
              elementType: 'geometry',
              stylers: [{
                hue: '#00ffee'
              }, {
                saturation: 50
              }]
            }, {
              featureType: 'poi.business',
              elementType: 'labels',
              stylers: [{
                visibility: 'off'
              }]
            }]; // editUser: FormGroup | null = null;

            this.userDetail = null;
            this.filterArray = null;
            this.joiningDate = null;
            this.editUser = null;
            this.formsErrors = [];
          }

          _createClass(CustomerViewComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.editUser = this.fb.group({
                id: [''],
                Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                Position: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                Mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                DateOfJoining: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                Salary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                Projects: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              });
            }
          }, {
            key: "openModal",
            value: function openModal(targetModal, user) {
              this.modalService.open(targetModal, {
                centered: true,
                backdrop: 'static'
              });
            }
          }, {
            key: "closeBtnClick",
            value: function closeBtnClick() {
              this.modalService.dismissAll();
              this.ngOnInit();
            }
          }]);

          return CustomerViewComponent;
        }();

        CustomerViewComponent.ɵfac = function CustomerViewComponent_Factory(t) {
          return new (t || CustomerViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]));
        };

        CustomerViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: CustomerViewComponent,
          selectors: [["app-customer-view"]],
          viewQuery: function CustomerViewComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.map4 = _t.first);
            }
          },
          decls: 545,
          vars: 47,
          consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "d-md-flex", "align-items-center"], [1, "card-title"], [1, "card-subtitle"], [1, "btn", "btn-primary", "ml-auto", 3, "click"], [1, "col-lg-4", 2, "text-align", "center"], [1, "profile-pic", "m-b-20", "m-t-20"], ["src", "assets/images/users/5.jpg", "width", "120", "alt", "user", 1, "rounded-circle"], [1, "m-t-20", "m-b-0"], ["href", "mailto:danielkristeen@gmail.com"], [1, "fa", "fa-star", "checked"], [1, "fa", "fa-star"], [1, "badge", "badge-pill", "badge-light", "font-14", "infoData"], [1, "badge", "badge-pill", "badge-info", "font-14", "infoData"], [1, "badge", "badge-pill", "badge-warning", "font-14", "infoData"], [1, "badge", "badge-pill", "badge-success", "font-14", "infoData"], [1, "col-lg-8"], [3, "latitude", "longitude", "zoom", "disableDefaultUI", "zoomControl"], ["map4", ""], [3, "latitude", "longitude"], [1, "card-body", "border-top"], [1, "row", "m-b-0"], [1, "col-lg-2", "col-md-6"], [1, "d-flex", "align-items-center"], [1, "m-r-10"], [1, "text-orange", "display-5"], [1, "mdi", "mdi-star-circle"], [1, "font-medium", "m-b-0"], [1, "text-cyan", "display-5"], [1, "mdi", "mdi-wallet"], [1, "text-info", "display-5"], [1, "mdi", "mdi-shopping"], [1, "text-primary", "display-5"], [1, "mdi", "mdi-basket"], [1, "text-danger", "display-5"], [1, "mdi", "mdi-block-helper"], [1, "mdi", "mdi-currency-gbp"], [1, "ml-auto"], [1, "dl"], [1, "custom-select"], ["value", "0", "selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "table-responsive"], [1, "table", "table-striped"], [1, "bg-light"], [1, "border-top-0", "backgroundColor", "tdLeft"], [1, "border-top-0", "backgroundColor", "tdCenter"], [1, "tdLeft"], [1, ""], [1, "m-b-0", "font-16"], [1, "tdCenter"], [1, "label", "label-success"], ["data-toggle", "tooltip", "title", "View", 1, "text-inverse", "p-r-10", 3, "routerLink"], [1, "fas", "fa-eye"], [1, "label", "label-warning"], [1, "label", "label-danger"], [1, "border-top-0", "backgroundColor", "tdRight"], [1, "tdRight"], [1, "col-md-6"], [1, "card", 2, "max-height", "76% !important", "position", "relative"], [1, "comment-widgets", 2, "overflow", "scroll !important"], [1, "d-flex", "flex-row", "comment-row", "m-t-0"], [1, "p-2"], ["src", "assets/images/users/1.jpg", "alt", "user", "width", "50", 1, "rounded-circle"], [1, "comment-text", "w-100"], [1, "font-medium"], [1, "m-b-15", "d-block"], [1, "comment-footer"], [1, "text-muted", "float-right"], [1, "label", "label-rounded", "label-primary"], [1, "d-flex", "flex-row", "comment-row"], ["src", "assets/images/users/4.jpg", "alt", "user", "width", "50", 1, "rounded-circle"], [1, "comment-text", "active", "w-100"], [1, "label", "label-success", "label-rounded"], ["src", "assets/images/users/5.jpg", "alt", "user", "width", "50", 1, "rounded-circle"], [1, "label", "label-rounded", "label-danger"], [1, "col-sm-12", "col-lg-6"], [1, "card", "card-hover", 2, "max-height", "76% !important", "position", "relative", "overflow", "scroll !important"], [1, "feed-widget"], [1, "list-style-none", "feed-body", "m-0", "p-b-20"], [3, "routerLink"], [1, "feed-item"], [1, "feed-icon", "bg-info"], [1, "ti-user"], [1, "ml-auto", "font-12", "text-muted"], [1, "feed-icon", "bg-success"], [1, "feed-icon", "bg-warning"], [1, "ti-user", 2, "width", "20%"], [1, "feed-icon", "bg-danger"], [1, "feed-icon", "bg-inverse"], ["editUserModal", ""], [1, "modal-header"], ["id", "editUserLabel", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "name", 1, "col-sm-4", "col-form-label"], [1, "reqNote"], [1, "col-sm-8"], ["type", "text", "formControlName", "Name", "id", "name", 1, "form-control", 3, "blur"], ["class", "help-block", 4, "ngIf"], ["for", "position", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "Position", "id", "position", 1, "form-control", 3, "blur"], ["for", "email", 1, "col-sm-4", "col-form-label"], ["type", "email", "formControlName", "Email", "id", "email", 1, "form-control", 3, "blur"], ["for", "mobile", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "Mobile", "id", "mobile", 1, "form-control", 3, "blur"], ["for", "doj", 1, "col-sm-4", "col-form-label"], ["type", "date", "formControlName", "DateOfJoining", "id", "doj", 1, "form-control", 3, "ngModel", "ngModelChange", "blur"], ["for", "salary", 1, "col-sm-4", "col-form-label"], [1, "form-check", "form-check-inline"], [1, "custom-control", "custom-radio"], ["type", "radio", "id", "customControlValidation2", "name", "radio-stacked", 1, "custom-control-input"], ["for", "customControlValidation2", 1, "custom-control-label"], ["type", "radio", "id", "customControlValidation3", "name", "radio-stacked", 1, "custom-control-input"], ["for", "customControlValidation3", 1, "custom-control-label"], ["for", "projects", 1, "col-sm-4", "col-form-label"], ["type", "file", "formControlName", "Projects", "id", "projects", 1, "form-control", 3, "blur"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "help-block"]],
          template: function CustomerViewComponent_Template(rf, ctx) {
            if (rf & 1) {
              var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Customer Details");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Overview of customer details");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerViewComponent_Template_button_click_10_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

                var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](544);

                return ctx.openModal(_r1, null);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit Customer");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Daniel Kristeen");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "danielkristeen@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Royal Mail Flat 9, Wheatstone House");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "020 7946 0581");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Male");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "30/12/1993");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Referral : 23423");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Reg. Date : 12/12/2020");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Active");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "agm-map", 20, 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "agm-marker", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "agm-info-window");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "InfoWindow content");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Sales Amount");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\xA33,567");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Available Balance");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\xA3769.08");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 34);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Booked Session");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "45");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 35);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 36);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Total Services");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h3", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "10");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 37);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 38);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Total Dispute");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h3", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "23");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 35);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 39);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Total Paid");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h3", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\xA323,568");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h4", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Jobs History");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h5", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Overview of jobs history");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 40);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 41);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "select", 42);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "option", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Monthly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "option", 44);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Daily");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "option", 45);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Weekly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "option", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Yearly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 47);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "table", 48);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "tr", 49);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "th", 50);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "JOBID");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "th", 50);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "SERVICE");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "th", 51);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "TYPE");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "th", 50);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "PROVIDER");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "th", 51);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "STATUS");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "th", 51);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "ACTION");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 53);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h4", 54);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "New network setup");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "On-site");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Jenny");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "label", 56);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Done");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 57);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i", 58);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 53);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h4", 54);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Poor network");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "On-site");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Jenny");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "label", 59);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Draft");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 57);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "i", 58);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 53);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "h4", 54);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Connectivity");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Remote");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Ram Shekhar Jadhav");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "label", 56);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Done");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "a", 57);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "i", 58);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 53);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "h4", 54);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Ac");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Remote");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Tom");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "label", 56);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Done");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "a", 57);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "i", 58);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 53);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "h4", 54);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "New network conncection");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "On-site");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Jenny");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "label", 60);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Cancel");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "a", 57);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "i", 58);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "5");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 53);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "h4", 54);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "New network setup");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "On-site");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Jenny");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "label", 56);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Done");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "a", 57);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "i", 58);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "h4", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Payment History");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "h5", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Overview of customer payment history");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 40);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 41);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "select", 42);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "option", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Monthly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "option", 44);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Daily");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "option", 45);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Weekly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "option", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Yearly");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 47);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "table", 48);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "tr", 49);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "th", 50);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "JOBID");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "th", 50);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "JOB");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "th", 50);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "PAYMENT ID");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "th", 50);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "PAYMENT TYPE");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "th", 61);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "AMOUNT");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "th", 51);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "STATUS");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "th", 51);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "ACTION");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Tv");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Se3#42qwe!WER");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "label", 56);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Online");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "td", 62);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, " \xA340 ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Done");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "a", 57);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "i", 58);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Voice modulation");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Se3#42qwe!WER");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "label", 56);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Online");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "td", 62);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, " \xA3200 ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "Done");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "a", 57);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "i", 58);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Connectivity");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "Se3#42qwe!WER");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "label", 56);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Online");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "td", 62);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, " \xA3340 ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "Done");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "a", 57);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](346, "i", 58);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Poor network");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "Se3#42qwe!WER");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "label", 56);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "Online");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "td", 62);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, " \xA3230 ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Pending");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "a", 57);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "i", 58);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "5");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "Tv");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Se3#42qwe!WER");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "td", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "label", 59);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "Debit");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "td", 62);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, " \xA320 ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Refund");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "td", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "a", 57);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "i", 58);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "div", 63);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "div", 64);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "h4", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "Review And Rating");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "div", 65);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "div", 66);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 67);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](390, "img", 68);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "div", 69);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "h6", 70);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "James Anderson");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "span", 71);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "jamesaderson@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "div", 72);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "span", 73);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "April 14, 2016");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "span", 74);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](400, "span", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](401, "span", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](402, "span", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](403, "span", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](404, "span", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "div", 75);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "div", 67);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](407, "img", 76);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "div", 77);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "h6", 70);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "Michael Jorden");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "span", 71);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "michaeljorden@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "div", 72);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "span", 73);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "April 14, 2016");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "span", 78);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](417, "span", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](418, "span", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](419, "span", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](420, "span", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](421, "span", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "div", 75);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "div", 67);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](424, "img", 79);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "div", 69);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "h6", 70);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "Johnathan Doeting");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "span", 71);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "johnathandoeting@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "div", 72);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "span", 73);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "April 14, 2016");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "span", 80);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](434, "span", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](435, "span", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](436, "span", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](437, "span", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](438, "span", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "div", 75);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "div", 67);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](441, "img", 68);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "div", 69);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "h6", 70);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "James Anderson");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "span", 71);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "jamesaderson@gmail.com ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "div", 72);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "span", 73);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "April 14, 2016");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "span", 74);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](451, "span", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](452, "span", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](453, "span", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](454, "span", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](455, "span", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "div", 75);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "div", 67);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](458, "img", 76);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "div", 77);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "h6", 70);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "Michael Jorden");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "span", 71);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "michaeljorden@gmail.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "div", 72);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "span", 73);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "April 14, 2016");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "span", 78);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](468, "span", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](469, "span", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](470, "span", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](471, "span", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](472, "span", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "div", 81);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "div", 82);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "h4", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "Latest Activity ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "div", 83);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "ul", 84);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "a", 85);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "li", 86);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "div", 87);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](483, "i", 88);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, " Alice Freeman started following you.. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "span", 89);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "Just Now");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "a", 85);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "li", 86);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "div", 90);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](490, "i", 88);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, " Andrew Green sent you a message. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "span", 89);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, "2 Hours ago");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "a", 85);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "li", 86);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "div", 91);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](497, "i", 92);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, " Andrew Green sent you a message. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "span", 89);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, "31 May");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "a", 85);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "li", 86);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "div", 93);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](504, "i", 88);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "Jane Dean started following you. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "span", 89);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "30 May");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "a", 85);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "li", 86);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "div", 94);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](511, "i", 88);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, " Jane Dean started following you. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "span", 89);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, "27 May");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "a", 85);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "li", 86);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "div", 87);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](518, "i", 88);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519, " Juan Carpenter sent you a message. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "span", 89);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "Just Now");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "a", 85);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "li", 86);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "div", 93);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](525, "i", 88);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, " Judith Burton shared a photo with you. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "span", 89);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528, "30 May");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "a", 85);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "li", 86);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "div", 93);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](532, "i", 88);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](533, " Judith Burton shared a photo with you. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "span", 89);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, "30 May");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "a", 85);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "li", 86);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "div", 93);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](539, "i", 88);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](540, " Judith Burton shared a photo with you. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "span", 89);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "30 May");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](543, CustomerViewComponent_ng_template_543_Template, 99, 13, "ng-template", null, 95, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("disableDefaultUI", false)("zoomControl", false);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](119);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](57);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c2));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c2));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c2));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c2));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c2));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](101);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c1));
            }
          },
          directives: [_agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMarker"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmInfoWindow"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
          styles: [".sebm-google-map-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 350px;\r\n    display: flex;\r\n  }\r\n\r\n  .checked[_ngcontent-%COMP%] {\r\n    color: orange;\r\n  }\r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    display:none;\r\n}"]
        });
        return CustomerViewComponent;
      }();
      /***/

    }
  }]);
})();