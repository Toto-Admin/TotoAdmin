(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5], {
    /***/
    "//8d":
    /*!***********************************************************!*\
      !*** ./src/app/authentication/404/not-found.component.ts ***!
      \***********************************************************/

    /*! exports provided: NotfoundComponent */

    /***/
    function d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function () {
        return NotfoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var NotfoundComponent = /*@__PURE__*/function () {
        var NotfoundComponent = /*#__PURE__*/function () {
          function NotfoundComponent() {
            _classCallCheck(this, NotfoundComponent);
          }

          _createClass(NotfoundComponent, [{
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {}
          }]);

          return NotfoundComponent;
        }();

        NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) {
          return new (t || NotfoundComponent)();
        };

        NotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: NotfoundComponent,
          selectors: [["app-not-found"]],
          decls: 10,
          vars: 0,
          consts: [[1, "error-box"], [1, "error-body", "text-center"], [1, "error-title", "text-danger"], [1, "text-uppercase", "error-subtitle"], [1, "text-muted", "m-t-30", "m-b-30"], ["href", "#/dashboard/classic", 1, "btn", "btn-danger", "btn-rounded", "waves-effect", "waves-light", "m-b-40"]],
          template: function NotfoundComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "PAGE NOT FOUND !");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "YOU SEEM TO BE TRYING TO FIND HIS WAY HOME");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Back to home");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          encapsulation: 2
        });
        return NotfoundComponent;
      }();
      /***/

    },

    /***/
    "9aZm":
    /*!**********************************************************!*\
      !*** ./src/app/authentication/authentication.routing.ts ***!
      \**********************************************************/

    /*! exports provided: AuthenticationRoutes */

    /***/
    function aZm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationRoutes", function () {
        return AuthenticationRoutes;
      });
      /* harmony import */


      var _404_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./404/not-found.component */
      "//8d");
      /* harmony import */


      var _lock_lock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lock/lock.component */
      "QARk");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../login/login.component */
      "vtpD");
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup/signup.component */
      "umax");
      /* harmony import */


      var _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./signup2/signup2.component */
      "yb+p");

      var AuthenticationRoutes = [{
        path: '',
        children: [{
          path: 'lock',
          component: _lock_lock_component__WEBPACK_IMPORTED_MODULE_1__["LockComponent"]
        }, {
          path: 'login',
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
        }, {
          path: 'signup',
          component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
        }, {
          path: 'signup2',
          component: _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_4__["Signup2Component"]
        }, {
          path: '404',
          component: _404_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotfoundComponent"]
        }]
      }];
      /***/
    },

    /***/
    "OpKh":
    /*!*********************************************************!*\
      !*** ./src/app/authentication/authentication.module.ts ***!
      \*********************************************************/

    /*! exports provided: AuthenticationModule */

    /***/
    function OpKh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () {
        return AuthenticationModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var _404_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./404/not-found.component */
      "//8d");
      /* harmony import */


      var _lock_lock_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lock/lock.component */
      "QARk");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login/login.component */
      "kuBs");
      /* harmony import */


      var _login2_login2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login2/login2.component */
      "sm4a");
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./signup/signup.component */
      "umax");
      /* harmony import */


      var _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./signup2/signup2.component */
      "yb+p");
      /* harmony import */


      var _authentication_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./authentication.routing */
      "9aZm");

      var AuthenticationModule = /*@__PURE__*/function () {
        var AuthenticationModule = function AuthenticationModule() {
          _classCallCheck(this, AuthenticationModule);
        };

        AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: AuthenticationModule
        });
        AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function AuthenticationModule_Factory(t) {
            return new (t || AuthenticationModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_authentication_routing__WEBPACK_IMPORTED_MODULE_10__["AuthenticationRoutes"]), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]]]
        });
        return AuthenticationModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationModule, {
          declarations: [_404_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _lock_lock_component__WEBPACK_IMPORTED_MODULE_5__["LockComponent"], _login2_login2_component__WEBPACK_IMPORTED_MODULE_7__["Login2Component"], _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_9__["Signup2Component"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]]
        });
      })();
      /***/

    },

    /***/
    "QARk":
    /*!*******************************************************!*\
      !*** ./src/app/authentication/lock/lock.component.ts ***!
      \*******************************************************/

    /*! exports provided: LockComponent */

    /***/
    function QARk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LockComponent", function () {
        return LockComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var LockComponent = /*@__PURE__*/function () {
        var LockComponent = function LockComponent() {
          _classCallCheck(this, LockComponent);
        };

        LockComponent.ɵfac = function LockComponent_Factory(t) {
          return new (t || LockComponent)();
        };

        LockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: LockComponent,
          selectors: [["app-lock"]],
          decls: 0,
          vars: 0,
          template: function LockComponent_Template(rf, ctx) {},
          encapsulation: 2
        });
        return LockComponent;
      }();
      /***/

    },

    /***/
    "kuBs":
    /*!*********************************************************!*\
      !*** ./src/app/authentication/login/login.component.ts ***!
      \*********************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function kuBs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      var _c0 = function _c0(a0) {
        return {
          "d-none": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "d-block": a0
        };
      };

      var LoginComponent = /*@__PURE__*/function () {
        var LoginComponent = /*#__PURE__*/function () {
          function LoginComponent() {
            _classCallCheck(this, LoginComponent);

            this.loginform = true;
            this.recoverform = false;
          }

          _createClass(LoginComponent, [{
            key: "showRecoverForm",
            value: function showRecoverForm() {
              this.loginform = !this.loginform;
              this.recoverform = !this.recoverform;
            }
          }]);

          return LoginComponent;
        }();

        LoginComponent.ɵfac = function LoginComponent_Factory(t) {
          return new (t || LoginComponent)();
        };

        LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: LoginComponent,
          selectors: [["app-login"]],
          decls: 64,
          vars: 6,
          consts: [[1, "auth-wrapper", "d-flex", "no-block", "justify-content-center", "align-items-center", 2, "background", "url(assets/images/background/login-register.jpg) no-repeat center center"], [1, "auth-box", "m-3", "m-md-0"], ["id", "loginform", 3, "ngClass"], [1, "logo"], [1, "db"], ["src", "assets/images/logo-icon.png", "alt", "logo"], [1, "font-medium", "m-b-20"], [1, "row"], [1, "col-12"], ["id", "loginform", 1, "form-horizontal", "m-t-20"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], [1, "ti-user"], ["type", "text", "placeholder", "Username", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control"], ["id", "basic-addon2", 1, "input-group-text"], [1, "ti-pencil"], ["type", "text", "placeholder", "Password", "aria-label", "Password", "aria-describedby", "basic-addon1", 1, "form-control"], [1, "form-group", "row"], [1, "col-md-12"], [1, "custom-control", "custom-checkbox", "d-flex"], ["type", "checkbox", "id", "customCheck1", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label", "font-14"], ["href", "javascript:void(0)", "id", "to-recover", 1, "text-dark", "font-14", "ml-auto", 3, "click"], [1, "fa", "fa-lock", "m-r-5"], [1, "form-group", "text-center"], [1, "col-xs-12", "p-b-20"], ["href", "/dashboard/clssic", 1, "btn", "btn-block", "btn-lg", "btn-info"], [1, "col-xs-12", "col-sm-12", "col-md-12", "m-t-10", "text-center"], [1, "social"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "", "data-original-title", "Login with Facebook", 1, "btn", "btn-facebook", "mr-2"], ["aria-hidden", "true", 1, "fab", "fa-facebook"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "", "data-original-title", "Login with Google", 1, "btn", "btn-googleplus"], ["aria-hidden", "true", 1, "fab", "fa-google-plus"], [1, "form-group", "m-b-0", "m-t-10"], [1, "col-sm-12", "text-center"], ["href", "authentication/signup", 1, "text-info", "m-l-5"], ["id", "recoverform", 3, "ngClass"], [1, "row", "m-t-20"], ["type", "email", "required", "", "placeholder", "Username", 1, "form-control", "form-control-lg"], ["type", "submit", "name", "action", 1, "btn", "btn-block", "btn-lg", "btn-danger"]],
          template: function LoginComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign In to Admin");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Remember me");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_27_listener() {
                return ctx.showRecoverForm();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Forgot pwd?");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Log In");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 34);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 35);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Don't have an account? ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 36);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sign Up");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 37);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Recover Password");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Enter your Email and instructions will be sent to you!");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 38);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "form", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 39);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 38);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 40);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Reset");

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
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.recoverform));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.recoverform));
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
          encapsulation: 2
        });
        return LoginComponent;
      }();
      /***/

    },

    /***/
    "sm4a":
    /*!***********************************************************!*\
      !*** ./src/app/authentication/login2/login2.component.ts ***!
      \***********************************************************/

    /*! exports provided: Login2Component */

    /***/
    function sm4a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Login2Component", function () {
        return Login2Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      var _c0 = function _c0(a0) {
        return {
          "d-none": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "d-block": a0
        };
      };

      var Login2Component = /*@__PURE__*/function () {
        var Login2Component = /*#__PURE__*/function () {
          function Login2Component() {
            _classCallCheck(this, Login2Component);

            this.loginform = true;
            this.recoverform = false;
          }

          _createClass(Login2Component, [{
            key: "showRecoverForm",
            value: function showRecoverForm() {
              this.loginform = !this.loginform;
              this.recoverform = !this.recoverform;
            }
          }]);

          return Login2Component;
        }();

        Login2Component.ɵfac = function Login2Component_Factory(t) {
          return new (t || Login2Component)();
        };

        Login2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: Login2Component,
          selectors: [["app-login"]],
          decls: 64,
          vars: 6,
          consts: [[1, "auth-wrapper", "d-flex", "no-block", "justify-content-center", "align-items-center", 2, "background", "url(assets/images/background/login-register.jpg) no-repeat center center"], [1, "auth-box", "on-sidebar", "m-3", "m-md-0"], ["id", "loginform", 3, "ngClass"], [1, "logo"], [1, "db"], ["src", "assets/images/logo-icon.png", "alt", "logo"], [1, "font-medium", "m-b-20"], [1, "row"], [1, "col-12"], ["id", "loginform", 1, "form-horizontal", "m-t-20"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], [1, "ti-user"], ["type", "text", "placeholder", "Username", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control"], ["id", "basic-addon2", 1, "input-group-text"], [1, "ti-pencil"], ["type", "text", "placeholder", "Password", "aria-label", "Password", "aria-describedby", "basic-addon1", 1, "form-control"], [1, "form-group", "row"], [1, "col-md-12"], [1, "custom-control", "custom-checkbox", "d-flex"], ["type", "checkbox", "id", "customCheck1", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label", "font-14"], ["href", "javascript:void(0)", "id", "to-recover", 1, "text-dark", "ml-auto", "font-14", 3, "click"], [1, "fa", "fa-lock", "m-r-5"], [1, "form-group", "text-center"], [1, "col-xs-12", "p-b-20"], ["href", "/dashboard/dashboard1", 1, "btn", "btn-block", "btn-lg", "btn-info"], [1, "col-xs-12", "col-sm-12", "col-md-12", "m-t-10", "text-center"], [1, "social"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "", "data-original-title", "Login with Facebook", 1, "btn", "btn-facebook", "mr-2"], ["aria-hidden", "true", 1, "fab", "fa-facebook"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "", "data-original-title", "Login with Google", 1, "btn", "btn-googleplus"], ["aria-hidden", "true", 1, "fab", "fa-google-plus"], [1, "form-group", "m-b-0", "m-t-10"], [1, "col-sm-12", "text-center"], ["href", "/authentication/signup2", 1, "text-info", "m-l-5"], ["id", "recoverform", 3, "ngClass"], [1, "row", "m-t-20"], ["action", "index.html", 1, "col-12"], ["type", "email", "required", "", "placeholder", "Username", 1, "form-control", "form-control-lg"], ["type", "submit", "name", "action", 1, "btn", "btn-block", "btn-lg", "btn-danger"]],
          template: function Login2Component_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign In to Admin");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Remember me");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Login2Component_Template_a_click_27_listener() {
                return ctx.showRecoverForm();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Forgot pwd?");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Log In");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 34);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 35);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Don't have an account? ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 36);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sign Up");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 37);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Recover Password");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Enter your Email and instructions will be sent to you!");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 38);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "form", 39);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 40);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 38);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 41);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Reset");

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
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.recoverform));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.recoverform));
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
          encapsulation: 2
        });
        return Login2Component;
      }();
      /***/

    },

    /***/
    "umax":
    /*!***********************************************************!*\
      !*** ./src/app/authentication/signup/signup.component.ts ***!
      \***********************************************************/

    /*! exports provided: SignupComponent */

    /***/
    function umax(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var SignupComponent = /*@__PURE__*/function () {
        var SignupComponent = function SignupComponent() {
          _classCallCheck(this, SignupComponent);
        };

        SignupComponent.ɵfac = function SignupComponent_Factory(t) {
          return new (t || SignupComponent)();
        };

        SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: SignupComponent,
          selectors: [["app-signup"]],
          decls: 41,
          vars: 0,
          consts: [[1, "auth-wrapper", "d-flex", "no-block", "justify-content-center", "align-items-center", 2, "background", "url(assets/images/background/login-register.jpg) no-repeat center center"], [1, "auth-box", "m-3", "m-md-0"], [1, "logo"], [1, "db"], ["src", "assets/images/logo-icon.png", "alt", "logo"], [1, "font-medium", "m-b-20"], [1, "row"], [1, "col-12"], ["action", "index.html", 1, "form-horizontal", "m-t-20"], [1, "form-group", "row"], ["type", "text", "required", " ", "placeholder", "Name", 1, "form-control"], ["type", "text", "required", " ", "placeholder", "Email", 1, "form-control"], ["type", "password", "required", " ", "placeholder", "Password", 1, "form-control"], ["type", "password", "required", " ", "placeholder", "Confirm Password", 1, "form-control"], [1, "col-md-12"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "customCheck1", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label"], ["href", "javascript:void(0)"], [1, "form-group", "text-center"], [1, "col-xs-12", "p-b-20"], ["href", "/dashboard/dashboard1", 1, "btn", "btn-block", "btn-lg", "btn-info"], [1, "form-group", "m-b-0", "m-t-10"], [1, "col-sm-12", "text-center"], ["href", "/authentication/login", 1, "text-info", "m-l-5"]],
          template: function SignupComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign Up to Admin");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "I agree to all ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Terms");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "SIGN UP");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Already have an account? ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Sign In");

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
          },
          encapsulation: 2
        });
        return SignupComponent;
      }();
      /***/

    },

    /***/
    "yb+p":
    /*!*************************************************************!*\
      !*** ./src/app/authentication/signup2/signup2.component.ts ***!
      \*************************************************************/

    /*! exports provided: Signup2Component */

    /***/
    function ybP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Signup2Component", function () {
        return Signup2Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var Signup2Component = /*@__PURE__*/function () {
        var Signup2Component = function Signup2Component() {
          _classCallCheck(this, Signup2Component);
        };

        Signup2Component.ɵfac = function Signup2Component_Factory(t) {
          return new (t || Signup2Component)();
        };

        Signup2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: Signup2Component,
          selectors: [["app-signup"]],
          decls: 41,
          vars: 0,
          consts: [[1, "auth-wrapper", "d-flex", "no-block", "justify-content-center", "align-items-center", 2, "background", "url(assets/images/background/login-register.jpg) no-repeat center center"], [1, "auth-box", "on-sidebar", "m-3", "m-md-0"], [1, "logo"], [1, "db"], ["src", "assets/images/logo-icon.png", "alt", "logo"], [1, "font-medium", "m-b-20"], [1, "row"], [1, "col-12"], ["action", "index.html", 1, "form-horizontal", "m-t-20"], [1, "form-group", "row"], ["type", "text", "required", " ", "placeholder", "Name", 1, "form-control"], ["type", "text", "required", " ", "placeholder", "Email", 1, "form-control"], ["type", "password", "required", " ", "placeholder", "Password", 1, "form-control"], ["type", "password", "required", " ", "placeholder", "Confirm Password", 1, "form-control"], [1, "col-md-12"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "customCheck1", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label"], ["href", "javascript:void(0)"], [1, "form-group", "text-center"], [1, "col-xs-12", "p-b-20"], ["href", "/dashboard/dashboard1", 1, "btn", "btn-block", "btn-lg", "btn-info"], [1, "form-group", "m-b-0", "m-t-10"], [1, "col-sm-12", "text-center"], ["href", "/authentication/login2", 1, "text-info", "m-l-5"]],
          template: function Signup2Component_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign Up to Admin");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "I agree to all ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Terms");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "SIGN UP");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Already have an account? ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Sign In");

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
          },
          encapsulation: 2
        });
        return Signup2Component;
      }();
      /***/

    }
  }]);
})();