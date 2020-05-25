function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/Components/change-password/change-password.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/Components/change-password/change-password.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ChangePasswordComponent */

  /***/
  function srcAppComponentsChangePasswordChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
      return ChangePasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/Services/jwtauthentication.service */
    "./src/app/Services/jwtauthentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ChangePasswordComponent_div_24_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_24_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password needs to be of minimum 5 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangePasswordComponent_div_24_div_1_Template, 2, 0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChangePasswordComponent_div_24_div_2_Template, 2, 0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r44.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r44.errors.minlength);
      }
    }

    var ChangePasswordComponent = /*#__PURE__*/function () {
      function ChangePasswordComponent(jwtService, router) {
        _classCallCheck(this, ChangePasswordComponent);

        this.jwtService = jwtService;
        this.router = router;
      }

      _createClass(ChangePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.jwtService.getAuthUser();
        }
      }, {
        key: "changePassword",
        value: function changePassword() {
          var _this = this;

          this.jwtService.changePassword({
            "username": this.user,
            "password": this.password
          }).subscribe(function (response) {
            if (response == true) {
              _this.router.navigate(['welcome']);
            } else {
              console.log("Some Error Occurred");
            }
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return ChangePasswordComponent;
    }();

    ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) {
      return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__["JWTAuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChangePasswordComponent,
      selectors: [["app-change-password"]],
      decls: 31,
      vars: 3,
      consts: [["id", "login"], [1, "text-center", "text-black", "pt-5"], [1, "container"], ["id", "login-row", 1, "row", "justify-content-center", "align-items-center"], ["id", "login-column", 1, "col-md-6"], ["id", "login-box", 1, "col-md-12"], ["id", "login-form", 1, "form", 3, "ngSubmit"], ["login", "ngForm"], [1, "text-center", "text-info"], [1, "form-group"], ["for", "username", 1, "text-info"], ["type", "text", "name", "user", "id", "username", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["for", "password", 1, "text-info"], ["type", "password", "name", "password", "id", "password", "required", "required", "minlength", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pass", "ngModel"], [4, "ngIf"], ["type", "submit", "name", "submit", "value", "Update", 1, "btn", "btn-info", "btn-md"], ["style", "color: red;", 4, "ngIf"], [2, "color", "red"]],
      template: function ChangePasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            return !_r42.invalid && ctx.changePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.user = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ChangePasswordComponent_div_24_Template, 3, 2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r44.invalid && (_r44.dirty || _r44.touched));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: lightgoldenrodyellow;\r\n    height: 90vh;\r\n  }\r\n  #login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #login-row[_ngcontent-%COMP%]   #login-column[_ngcontent-%COMP%]   #login-box[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    max-width: 600px;\r\n    height: 450px;\r\n    border: 1px solid #9C9C9C;\r\n    background-color: #EAEAEA;\r\n  }\r\n  #login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #login-row[_ngcontent-%COMP%]   #login-column[_ngcontent-%COMP%]   #login-box[_ngcontent-%COMP%]   #login-form[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n  }\r\n  #login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #login-row[_ngcontent-%COMP%]   #login-column[_ngcontent-%COMP%]   #login-box[_ngcontent-%COMP%]   #login-form[_ngcontent-%COMP%]   #register-link[_ngcontent-%COMP%] {\r\n    margin-top: -85px;\r\n  }\r\n  .cent[_ngcontent-%COMP%]{\r\n    align-self: center;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNDQUFzQztJQUN0QyxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gIH1cclxuICAjbG9naW4gLmNvbnRhaW5lciAjbG9naW4tcm93ICNsb2dpbi1jb2x1bW4gI2xvZ2luLWJveCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOUM5QzlDO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VBRUFFQTtcclxuICB9XHJcbiAgI2xvZ2luIC5jb250YWluZXIgI2xvZ2luLXJvdyAjbG9naW4tY29sdW1uICNsb2dpbi1ib3ggI2xvZ2luLWZvcm0ge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgI2xvZ2luIC5jb250YWluZXIgI2xvZ2luLXJvdyAjbG9naW4tY29sdW1uICNsb2dpbi1ib3ggI2xvZ2luLWZvcm0gI3JlZ2lzdGVyLWxpbmsge1xyXG4gICAgbWFyZ2luLXRvcDogLTg1cHg7XHJcbiAgfVxyXG4gIC5jZW50e1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-change-password',
          templateUrl: './change-password.component.html',
          styleUrls: ['./change-password.component.css']
        }]
      }], function () {
        return [{
          type: src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__["JWTAuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 3,
      vars: 0,
      consts: [[1, "footer"], [1, "container", "white"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " All rights reserved 2020 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".footer[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 20px;\r\n    background-color: blue;\r\n}\r\n\r\n.white[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLndoaXRle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/forgot-password/forgot-password.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/Components/forgot-password/forgot-password.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppComponentsForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/Services/jwtauthentication.service */
    "./src/app/Services/jwtauthentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ForgotPasswordComponent_div_18_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email Id is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgotPasswordComponent_div_18_div_1_Template, 2, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r37.errors.required);
      }
    }

    function ForgotPasswordComponent_pre_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email Id is not registered");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent(jwtService, router) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.jwtService = jwtService;
        this.router = router;
        this.error = false;
        this.x = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.password = "";
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "generatePassword",
        value: function generatePassword() {
          for (this.index = 1; this.index <= 10; this.index++) {
            this.c = Math.floor(Math.random() * this.x.length + 0);
            this.password += this.x.charAt(this.c);
          }
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword() {
          var _this2 = this;

          this.generatePassword();
          this.jwtService.forgotPassword({
            "username": this.username,
            "password": this.password
          }).subscribe(function (response) {
            if (response == true) {
              _this2.error = false;

              _this2.router.navigate(['login']);
            } else {
              _this2.error = true;
            }
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
      return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__["JWTAuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["app-forgot-password"]],
      decls: 24,
      vars: 3,
      consts: [["id", "login"], [1, "text-center", "text-black", "pt-5"], [1, "container"], ["id", "login-row", 1, "row", "justify-content-center", "align-items-center"], ["id", "login-column", 1, "col-md-6"], ["id", "login-box", 1, "col-md-12"], ["id", "login-form", 1, "form", 3, "ngSubmit"], ["reg", "ngForm"], [1, "text-center", "text-info"], [1, "form-group"], ["for", "user", 1, "text-info"], ["type", "text", "name", "username", "id", "user", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], ["n", "ngModel"], ["style", "color: red;", 4, "ngIf"], ["type", "submit", "name", "submit", "value", "Reset", 1, "btn", "btn-info", "btn-md"], ["class", "alert alert-warning", 4, "ngIf"], [2, "color", "red"], [4, "ngIf"], [1, "alert", "alert-warning"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Forgot Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            return !_r36.invalid && ctx.forgotPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ForgotPasswordComponent_div_18_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ForgotPasswordComponent_pre_23_Template, 2, 0, "pre", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r37.invalid && (_r37.dirty || _r37.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: lightgoldenrodyellow;\r\n    height: 90vh;\r\n  }\r\n  #login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #login-row[_ngcontent-%COMP%]   #login-column[_ngcontent-%COMP%]   #login-box[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    max-width: 600px;\r\n    height: 350px;\r\n    border: 1px solid #9C9C9C;\r\n    background-color: #EAEAEA;\r\n  }\r\n  #login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #login-row[_ngcontent-%COMP%]   #login-column[_ngcontent-%COMP%]   #login-box[_ngcontent-%COMP%]   #login-form[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n  }\r\n  #login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #login-row[_ngcontent-%COMP%]   #login-column[_ngcontent-%COMP%]   #login-box[_ngcontent-%COMP%]   #login-form[_ngcontent-%COMP%]   #register-link[_ngcontent-%COMP%] {\r\n    margin-top: -85px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNDQUFzQztJQUN0QyxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdvbGRlbnJvZHllbGxvdztcclxuICAgIGhlaWdodDogOTB2aDtcclxuICB9XHJcbiAgI2xvZ2luIC5jb250YWluZXIgI2xvZ2luLXJvdyAjbG9naW4tY29sdW1uICNsb2dpbi1ib3gge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzlDOUM5QztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQUVBRUE7XHJcbiAgfVxyXG4gICNsb2dpbiAuY29udGFpbmVyICNsb2dpbi1yb3cgI2xvZ2luLWNvbHVtbiAjbG9naW4tYm94ICNsb2dpbi1mb3JtIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gICNsb2dpbiAuY29udGFpbmVyICNsb2dpbi1yb3cgI2xvZ2luLWNvbHVtbiAjbG9naW4tYm94ICNsb2dpbi1mb3JtICNyZWdpc3Rlci1saW5rIHtcclxuICAgIG1hcmdpbi10b3A6IC04NXB4O1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forgot-password',
          templateUrl: './forgot-password.component.html',
          styleUrls: ['./forgot-password.component.css']
        }]
      }], function () {
        return [{
          type: src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__["JWTAuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent, Doctor */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Doctor", function () {
      return Doctor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/Services/jwtauthentication.service */
    "./src/app/Services/jwtauthentication.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function HeaderComponent_a_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "(current)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_a_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Join Meeting ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Click here to Join Meeting");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_a_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Host Meeting ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Click here to Host Meeting");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_a_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change Password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Change Your Account Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_a_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_a_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(jwtAuth) {
        _classCallCheck(this, HeaderComponent);

        this.jwtAuth = jwtAuth;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__["JWTAuthenticationService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 21,
      vars: 6,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "dark"], [1, "navbar-brand", 2, "color", "white"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarText", "aria-controls", "navbarText", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["class", "nav-link", "routerLink", "/welcome", 4, "ngIf"], ["class", "nav-link d", "routerLink", "joinMeeting", 4, "ngIf"], ["class", "nav-link ab", "routerLink", "hostMeeting", 4, "ngIf"], ["class", "nav-link ef", "routerLink", "changePassword", 4, "ngIf"], [1, "navbar-nav", "navbar-right"], [1, "nav-item"], ["class", "nav-link whi r", "style", "color: white;", "href", "#", 4, "ngIf"], ["class", "nav-link whi m", "style", "color: white;", "routerLink", "/logout", "href", "#", 4, "ngIf"], ["routerLink", "/welcome", 1, "nav-link"], [1, "sr-only"], ["routerLink", "joinMeeting", 1, "nav-link", "d"], [1, "s"], ["routerLink", "hostMeeting", 1, "nav-link", "ab"], [1, "cd"], ["routerLink", "changePassword", 1, "nav-link", "ef"], [1, "gh"], ["href", "#", 1, "nav-link", "whi", "r", 2, "color", "white"], [1, "p"], ["routerLink", "/logout", "href", "#", 1, "nav-link", "whi", "m", 2, "color", "white"], [1, "n"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "VEUBE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_a_9_Template, 4, 0, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_a_11_Template, 4, 0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_a_13_Template, 4, 0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_a_15_Template, 4, 0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HeaderComponent_a_18_Template, 4, 0, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HeaderComponent_a_20_Template, 4, 0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jwtAuth.isAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jwtAuth.isAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jwtAuth.isAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jwtAuth.isAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.jwtAuth.isAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jwtAuth.isAuthenticated());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: [".dark[_ngcontent-%COMP%]{\r\n    background-color:blue;    \r\n    }\r\n    \r\n    .whi[_ngcontent-%COMP%]{\r\n        color: white;\r\n    }\r\n    \r\n    .whi[_ngcontent-%COMP%]:hover{\r\n        color: white;\r\n    }\r\n    \r\n    .white[_ngcontent-%COMP%]{\r\n        color:white;\r\n    }\r\n    \r\n    a.d[_ngcontent-%COMP%]:hover{\r\n        z-index: 30;\r\n    }\r\n    \r\n    a.d[_ngcontent-%COMP%]   span.s[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    \r\n    a.d[_ngcontent-%COMP%]:hover   span.s[_ngcontent-%COMP%]{\r\n        \r\n        display: block;\r\n        position: absolute;\r\n        font-size: 15px;\r\n        line-height: 18px;\r\n        border: 1px solid #666666;\r\n        background-color: lightblue;\r\n        text-align: left;\r\n        color: black;\r\n        width: auto;\r\n        font-weight: normal;\r\n        padding: 5px;\r\n\r\n    }\r\n    \r\n    a.ab[_ngcontent-%COMP%]:hover{\r\n        z-index: 30;\r\n    }\r\n    \r\n    a.ab[_ngcontent-%COMP%]   span.cd[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    \r\n    a.ab[_ngcontent-%COMP%]:hover   span.cd[_ngcontent-%COMP%]{\r\n        \r\n        display: block;\r\n        position: absolute;\r\n        font-size: 15px;\r\n        line-height: 18px;\r\n        border: 1px solid #666666;\r\n        background-color: lightblue;\r\n        text-align: left;\r\n        color: black;\r\n        width: auto;\r\n        font-weight: normal;\r\n        padding: 5px;\r\n\r\n    }\r\n    \r\n    a.ef[_ngcontent-%COMP%]:hover{\r\n        z-index: 30;\r\n    }\r\n    \r\n    a.ef[_ngcontent-%COMP%]   span.gh[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    \r\n    a.ef[_ngcontent-%COMP%]:hover   span.gh[_ngcontent-%COMP%]{\r\n        \r\n        display: block;\r\n        position: absolute;\r\n        font-size: 15px;\r\n        line-height: 18px;\r\n        border: 1px solid #666666;\r\n        background-color: lightblue;\r\n        text-align: left;\r\n        color: black;\r\n        width: auto;\r\n        font-weight: normal;\r\n        padding: 5px;\r\n\r\n    }\r\n    \r\n    a.m[_ngcontent-%COMP%]:hover{\r\n        z-index: 30;\r\n    }\r\n    \r\n    a.m[_ngcontent-%COMP%]   span.n[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    \r\n    a.m[_ngcontent-%COMP%]:hover   span.n[_ngcontent-%COMP%]{\r\n        \r\n        display: block;\r\n        position: absolute;\r\n        font-size: 15px;\r\n        line-height: 18px;\r\n        border: 1px solid #666666;\r\n        background-color: lightblue;\r\n        text-align: left;\r\n        color: black;\r\n        width: auto;\r\n        font-weight: normal;\r\n        padding: 5px;\r\n\r\n    }\r\n    \r\n    a.r[_ngcontent-%COMP%]:hover{\r\n        z-index: 30;\r\n    }\r\n    \r\n    a.r[_ngcontent-%COMP%]   span.p[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    \r\n    a.r[_ngcontent-%COMP%]:hover   span.p[_ngcontent-%COMP%]{\r\n        \r\n        display: block;\r\n        position: absolute;\r\n        font-size: 15px;\r\n        line-height: 18px;\r\n        border: 1px solid #666666;\r\n        background-color: lightblue;\r\n        text-align: left;\r\n        color: black;\r\n        width: auto;\r\n        font-weight: normal;\r\n        padding: 5px;\r\n\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IklBQUk7SUFDQSxxQkFBcUI7SUFDckI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7O1FBRUksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLHlCQUF5QjtRQUN6QiwyQkFBMkI7UUFDM0IsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLFlBQVk7O0lBRWhCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTs7UUFFSSxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIseUJBQXlCO1FBQ3pCLDJCQUEyQjtRQUMzQixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsWUFBWTs7SUFFaEI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBOztRQUVJLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsMkJBQTJCO1FBQzNCLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixZQUFZOztJQUVoQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7O1FBRUksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLHlCQUF5QjtRQUN6QiwyQkFBMkI7UUFDM0IsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLFlBQVk7O0lBRWhCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTs7UUFFSSxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIseUJBQXlCO1FBQ3pCLDJCQUEyQjtRQUMzQixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsWUFBWTs7SUFFaEIiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAuZGFya3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6Ymx1ZTsgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC53aGl7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAud2hpOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLndoaXRle1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGEuZDpob3ZlcntcclxuICAgICAgICB6LWluZGV4OiAzMDtcclxuICAgIH1cclxuXHJcbiAgICBhLmQgc3Bhbi5ze1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgYS5kOmhvdmVyIHNwYW4uc3tcclxuICAgICAgICBcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY2NjY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhLmFiOmhvdmVye1xyXG4gICAgICAgIHotaW5kZXg6IDMwO1xyXG4gICAgfVxyXG5cclxuICAgIGEuYWIgc3Bhbi5jZHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGEuYWI6aG92ZXIgc3Bhbi5jZHtcclxuICAgICAgICBcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY2NjY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhLmVmOmhvdmVye1xyXG4gICAgICAgIHotaW5kZXg6IDMwO1xyXG4gICAgfVxyXG5cclxuICAgIGEuZWYgc3Bhbi5naHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGEuZWY6aG92ZXIgc3Bhbi5naHtcclxuICAgICAgICBcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY2NjY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhLm06aG92ZXJ7XHJcbiAgICAgICAgei1pbmRleDogMzA7XHJcbiAgICB9XHJcblxyXG4gICAgYS5tIHNwYW4ubntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGEubTpob3ZlciBzcGFuLm57XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2NjY2O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYS5yOmhvdmVye1xyXG4gICAgICAgIHotaW5kZXg6IDMwO1xyXG4gICAgfVxyXG5cclxuICAgIGEuciBzcGFuLnB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBhLnI6aG92ZXIgc3Bhbi5we1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjY2NjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcblxyXG4gICAgfVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__["JWTAuthenticationService"]
        }];
      }, null);
    })();

    var Doctor = function Doctor(doctorId, doctorname, doctoremail, designation) {
      _classCallCheck(this, Doctor);

      this.doctorId = doctorId;
      this.doctorname = doctorname;
      this.doctoremail = doctoremail;
      this.designation = designation;
    };
    /***/

  },

  /***/
  "./src/app/Components/host-meeting/host-meeting.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/Components/host-meeting/host-meeting.component.ts ***!
    \*******************************************************************/

  /*! exports provided: HostMeetingComponent */

  /***/
  function srcAppComponentsHostMeetingHostMeetingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HostMeetingComponent", function () {
      return HostMeetingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/Services/jwtauthentication.service */
    "./src/app/Services/jwtauthentication.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HostMeetingComponent_pre_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Room already exists!!!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HostMeetingComponent = /*#__PURE__*/function () {
      function HostMeetingComponent(_service) {
        _classCallCheck(this, HostMeetingComponent);

        this._service = _service;
        this.error = false;
        this.x = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }

      _createClass(HostMeetingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.room = "";

          this._service.getByUsername().subscribe(function (response) {
            console.log(response);
            _this3.username = response.name;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "generatePassword",
        value: function generatePassword() {
          for (this.index = 1; this.index <= 7; this.index++) {
            this.c = Math.floor(Math.random() * this.x.length + 0);
            this.room += this.x.charAt(this.c);
          }
        }
      }, {
        key: "hostMeeting",
        value: function hostMeeting() {
          var _this4 = this;

          this.generatePassword();

          this._service.addRoom(this.room, this.username).subscribe(function (response) {
            if (response == true) {
              window.location.href = 'http://localhost:3000' + '?room=' + _this4.room;
              _this4.error = false;
            } else {
              _this4.error = true;
            }
          });
        }
      }]);

      return HostMeetingComponent;
    }();

    HostMeetingComponent.ɵfac = function HostMeetingComponent_Factory(t) {
      return new (t || HostMeetingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__["JWTAuthenticationService"]));
    };

    HostMeetingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HostMeetingComponent,
      selectors: [["app-host-meeting"]],
      decls: 18,
      vars: 2,
      consts: [["rel", "icon", "href", "../../../assets/logo.PNG"], [1, "centered-form"], [1, "centered-form__box"], ["type", "text", "name", "room", "placeholder", "Room", "required", "", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [3, "click"], ["class", "alert alert-warning", 4, "ngIf"], [1, "alert", "alert-warning"]],
      template: function HostMeetingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Chat Application");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Host Meeting");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HostMeetingComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.room = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HostMeetingComponent_Template_button_click_14_listener() {
            return ctx.hostMeeting();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Host");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HostMeetingComponent_pre_17_Template, 2, 0, "pre", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.room);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}html[_ngcontent-%COMP%]{font-size:16px}input[_ngcontent-%COMP%]{font-size:14px}body[_ngcontent-%COMP%]{line-height:1.4;color:#333;font-family:Helvetica,Arial,sans-serif}h1[_ngcontent-%COMP%]{margin-bottom:16px}label[_ngcontent-%COMP%]{display:block;font-size:14px;margin-bottom:8px;color:#777}input[_ngcontent-%COMP%]{border:1px solid #eee;padding:12px;outline:none}button[_ngcontent-%COMP%]{cursor:pointer;padding:12px;background:#7C5CBF;border:none;color:#fff;font-size:16px;transition:background .3s ease}button[_ngcontent-%COMP%]:hover{background:#6b47b8}button[_ngcontent-%COMP%]:disabled{cursor:default;background:#7c5cbf94}.centered-form[_ngcontent-%COMP%]{background:#333744;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center}.centered-form__box[_ngcontent-%COMP%]{box-shadow:0 0 17px 1px #1D1F26;background:#F7F7FA;padding:24px;width:500px; height: -webkit-max-content; height: -moz-max-content; height: max-content;}.centered-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.centered-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-bottom:16px;width:100%}.chat[_ngcontent-%COMP%]{display:flex}.chat__sidebar[_ngcontent-%COMP%]{height:100vh;color:#fff;background:#333744;width:225px;overflow-y:scroll}.chat__main[_ngcontent-%COMP%]{flex-grow:1;display:flex;flex-direction:column;max-height:100vh}.chat__messages[_ngcontent-%COMP%]{flex-grow:1;padding:24px 24px 0;overflow-y:scroll}.message[_ngcontent-%COMP%]{margin-bottom:16px}.message__name[_ngcontent-%COMP%]{font-weight:600;font-size:14px;margin-right:8px}.message__meta[_ngcontent-%COMP%]{color:#777;font-size:14px}.message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#0070CC}.compose[_ngcontent-%COMP%]{display:flex;flex-shrink:0;margin-top:16px;padding:24px}.compose[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-grow:1;margin-right:16px}.compose[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid #eee;width:100%;padding:12px;margin:0 16px 0 0;flex-grow:1}.compose[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:14px}.room-title[_ngcontent-%COMP%]{font-weight:400;font-size:22px;background:#2c2f3a;padding:24px}.list-title[_ngcontent-%COMP%]{font-weight:500;font-size:18px;margin-bottom:4px;padding:12px 24px 0}.users[_ngcontent-%COMP%]{list-style-type:none;font-weight:300;padding:12px 24px 0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9ob3N0LW1lZXRpbmcvaG9zdC1tZWV0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLEtBQUssY0FBYyxDQUFDLE1BQU0sY0FBYyxDQUFDLEtBQUssZUFBZSxDQUFDLFVBQVUsQ0FBQyxzQ0FBc0MsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sYUFBYSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsTUFBTSxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE9BQU8sY0FBYyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyw4QkFBOEIsQ0FBQyxhQUFhLGtCQUFrQixDQUFDLGdCQUFnQixjQUFjLENBQUMsb0JBQW9CLENBQUMsZUFBZSxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsK0JBQStCLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSwyQkFBbUIsRUFBbkIsd0JBQW1CLEVBQW5CLG1CQUFtQixDQUFDLENBQUMsc0JBQXNCLFVBQVUsQ0FBQyxxQkFBcUIsa0JBQWtCLENBQUMsVUFBVSxDQUFDLE1BQU0sWUFBWSxDQUFDLGVBQWUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsWUFBWSxXQUFXLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixXQUFXLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsU0FBUyxrQkFBa0IsQ0FBQyxlQUFlLGVBQWUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxVQUFVLENBQUMsY0FBYyxDQUFDLFdBQVcsYUFBYSxDQUFDLFNBQVMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLGNBQWMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLGdCQUFnQixjQUFjLENBQUMsWUFBWSxlQUFlLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxZQUFZLGVBQWUsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsbUJBQW1CIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9ob3N0LW1lZXRpbmcvaG9zdC1tZWV0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe21hcmdpbjowO3BhZGRpbmc6MDtib3gtc2l6aW5nOmJvcmRlci1ib3h9aHRtbHtmb250LXNpemU6MTZweH1pbnB1dHtmb250LXNpemU6MTRweH1ib2R5e2xpbmUtaGVpZ2h0OjEuNDtjb2xvcjojMzMzO2ZvbnQtZmFtaWx5OkhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmfWgxe21hcmdpbi1ib3R0b206MTZweH1sYWJlbHtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZToxNHB4O21hcmdpbi1ib3R0b206OHB4O2NvbG9yOiM3Nzd9aW5wdXR7Ym9yZGVyOjFweCBzb2xpZCAjZWVlO3BhZGRpbmc6MTJweDtvdXRsaW5lOm5vbmV9YnV0dG9ue2N1cnNvcjpwb2ludGVyO3BhZGRpbmc6MTJweDtiYWNrZ3JvdW5kOiM3QzVDQkY7Ym9yZGVyOm5vbmU7Y29sb3I6I2ZmZjtmb250LXNpemU6MTZweDt0cmFuc2l0aW9uOmJhY2tncm91bmQgLjNzIGVhc2V9YnV0dG9uOmhvdmVye2JhY2tncm91bmQ6IzZiNDdiOH1idXR0b246ZGlzYWJsZWR7Y3Vyc29yOmRlZmF1bHQ7YmFja2dyb3VuZDojN2M1Y2JmOTR9LmNlbnRlcmVkLWZvcm17YmFja2dyb3VuZDojMzMzNzQ0O3dpZHRoOjEwMHZ3O2hlaWdodDoxMDB2aDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9LmNlbnRlcmVkLWZvcm1fX2JveHtib3gtc2hhZG93OjAgMCAxN3B4IDFweCAjMUQxRjI2O2JhY2tncm91bmQ6I0Y3RjdGQTtwYWRkaW5nOjI0cHg7d2lkdGg6NTAwcHg7IGhlaWdodDogbWF4LWNvbnRlbnQ7fS5jZW50ZXJlZC1mb3JtIGJ1dHRvbnt3aWR0aDoxMDAlfS5jZW50ZXJlZC1mb3JtIGlucHV0e21hcmdpbi1ib3R0b206MTZweDt3aWR0aDoxMDAlfS5jaGF0e2Rpc3BsYXk6ZmxleH0uY2hhdF9fc2lkZWJhcntoZWlnaHQ6MTAwdmg7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiMzMzM3NDQ7d2lkdGg6MjI1cHg7b3ZlcmZsb3cteTpzY3JvbGx9LmNoYXRfX21haW57ZmxleC1ncm93OjE7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXgtaGVpZ2h0OjEwMHZofS5jaGF0X19tZXNzYWdlc3tmbGV4LWdyb3c6MTtwYWRkaW5nOjI0cHggMjRweCAwO292ZXJmbG93LXk6c2Nyb2xsfS5tZXNzYWdle21hcmdpbi1ib3R0b206MTZweH0ubWVzc2FnZV9fbmFtZXtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjE0cHg7bWFyZ2luLXJpZ2h0OjhweH0ubWVzc2FnZV9fbWV0YXtjb2xvcjojNzc3O2ZvbnQtc2l6ZToxNHB4fS5tZXNzYWdlIGF7Y29sb3I6IzAwNzBDQ30uY29tcG9zZXtkaXNwbGF5OmZsZXg7ZmxleC1zaHJpbms6MDttYXJnaW4tdG9wOjE2cHg7cGFkZGluZzoyNHB4fS5jb21wb3NlIGZvcm17ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzoxO21hcmdpbi1yaWdodDoxNnB4fS5jb21wb3NlIGlucHV0e2JvcmRlcjoxcHggc29saWQgI2VlZTt3aWR0aDoxMDAlO3BhZGRpbmc6MTJweDttYXJnaW46MCAxNnB4IDAgMDtmbGV4LWdyb3c6MX0uY29tcG9zZSBidXR0b257Zm9udC1zaXplOjE0cHh9LnJvb20tdGl0bGV7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc2l6ZToyMnB4O2JhY2tncm91bmQ6IzJjMmYzYTtwYWRkaW5nOjI0cHh9Lmxpc3QtdGl0bGV7Zm9udC13ZWlnaHQ6NTAwO2ZvbnQtc2l6ZToxOHB4O21hcmdpbi1ib3R0b206NHB4O3BhZGRpbmc6MTJweCAyNHB4IDB9LnVzZXJze2xpc3Qtc3R5bGUtdHlwZTpub25lO2ZvbnQtd2VpZ2h0OjMwMDtwYWRkaW5nOjEycHggMjRweCAwfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HostMeetingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-host-meeting',
          templateUrl: './host-meeting.component.html',
          styleUrls: ['./host-meeting.component.css']
        }]
      }], function () {
        return [{
          type: src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__["JWTAuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/join-meeting/join-meeting.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/Components/join-meeting/join-meeting.component.ts ***!
    \*******************************************************************/

  /*! exports provided: JoinMeetingComponent */

  /***/
  function srcAppComponentsJoinMeetingJoinMeetingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JoinMeetingComponent", function () {
      return JoinMeetingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Services/jwtauthentication.service */
    "./src/app/Services/jwtauthentication.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function JoinMeetingComponent_pre_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Room does not exist!!!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var JoinMeetingComponent = /*#__PURE__*/function () {
      function JoinMeetingComponent(router, cookie, _service) {
        _classCallCheck(this, JoinMeetingComponent);

        this.router = router;
        this.cookie = cookie;
        this._service = _service;
        this.error = false;
      }

      _createClass(JoinMeetingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.error = false;

          this._service.getByUsername().subscribe(function (response) {
            console.log(response);
            _this5.username = response.name;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "joinMeeting",
        value: function joinMeeting() {
          var _this6 = this;

          this._service.joinRoom(this.room, this.username).subscribe(function (response) {
            if (response == true) {
              window.location.href = 'http://localhost:3000/?' + 'room=' + _this6.room;
              _this6.error = false;
            } else {
              _this6.error = true;
            }
          });
        }
      }]);

      return JoinMeetingComponent;
    }();

    JoinMeetingComponent.ɵfac = function JoinMeetingComponent_Factory(t) {
      return new (t || JoinMeetingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_3__["JWTAuthenticationService"]));
    };

    JoinMeetingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JoinMeetingComponent,
      selectors: [["app-join-meeting"]],
      decls: 18,
      vars: 2,
      consts: [["rel", "icon", "href", "../../../assets/logo.PNG"], [1, "centered-form"], [1, "centered-form__box"], ["type", "text", "name", "room", "placeholder", "Room", "required", "", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [3, "click"], ["class", "alert alert-warning", 4, "ngIf"], [1, "alert", "alert-warning"]],
      template: function JoinMeetingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Chat Application");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Join");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JoinMeetingComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.room = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinMeetingComponent_Template_button_click_14_listener() {
            return ctx.joinMeeting();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Join");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, JoinMeetingComponent_pre_17_Template, 2, 0, "pre", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.room);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}html[_ngcontent-%COMP%]{font-size:16px}input[_ngcontent-%COMP%]{font-size:14px}body[_ngcontent-%COMP%]{line-height:1.4;color:#333;font-family:Helvetica,Arial,sans-serif}h1[_ngcontent-%COMP%]{margin-bottom:16px}label[_ngcontent-%COMP%]{display:block;font-size:14px;margin-bottom:8px;color:#777}input[_ngcontent-%COMP%]{border:1px solid #eee;padding:12px;outline:none}button[_ngcontent-%COMP%]{cursor:pointer;padding:12px;background:#7C5CBF;border:none;color:#fff;font-size:16px;transition:background .3s ease}button[_ngcontent-%COMP%]:hover{background:#6b47b8}button[_ngcontent-%COMP%]:disabled{cursor:default;background:#7c5cbf94}.centered-form[_ngcontent-%COMP%]{background:#333744;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center}.centered-form__box[_ngcontent-%COMP%]{box-shadow:0 0 17px 1px #1D1F26;background:#F7F7FA;padding:24px;width:500px; height: -webkit-max-content; height: -moz-max-content; height: max-content;}.centered-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.centered-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-bottom:16px;width:100%}.chat[_ngcontent-%COMP%]{display:flex}.chat__sidebar[_ngcontent-%COMP%]{height:100vh;color:#fff;background:#333744;width:225px;overflow-y:scroll}.chat__main[_ngcontent-%COMP%]{flex-grow:1;display:flex;flex-direction:column;max-height:100vh}.chat__messages[_ngcontent-%COMP%]{flex-grow:1;padding:24px 24px 0;overflow-y:scroll}.message[_ngcontent-%COMP%]{margin-bottom:16px}.message__name[_ngcontent-%COMP%]{font-weight:600;font-size:14px;margin-right:8px}.message__meta[_ngcontent-%COMP%]{color:#777;font-size:14px}.message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#0070CC}.compose[_ngcontent-%COMP%]{display:flex;flex-shrink:0;margin-top:16px;padding:24px}.compose[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-grow:1;margin-right:16px}.compose[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid #eee;width:100%;padding:12px;margin:0 16px 0 0;flex-grow:1}.compose[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:14px}.room-title[_ngcontent-%COMP%]{font-weight:400;font-size:22px;background:#2c2f3a;padding:24px}.list-title[_ngcontent-%COMP%]{font-weight:500;font-size:18px;margin-bottom:4px;padding:12px 24px 0}.users[_ngcontent-%COMP%]{list-style-type:none;font-weight:300;padding:12px 24px 0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9qb2luLW1lZXRpbmcvam9pbi1tZWV0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLEtBQUssY0FBYyxDQUFDLE1BQU0sY0FBYyxDQUFDLEtBQUssZUFBZSxDQUFDLFVBQVUsQ0FBQyxzQ0FBc0MsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sYUFBYSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsTUFBTSxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE9BQU8sY0FBYyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyw4QkFBOEIsQ0FBQyxhQUFhLGtCQUFrQixDQUFDLGdCQUFnQixjQUFjLENBQUMsb0JBQW9CLENBQUMsZUFBZSxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsK0JBQStCLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSwyQkFBbUIsRUFBbkIsd0JBQW1CLEVBQW5CLG1CQUFtQixDQUFDLENBQUMsc0JBQXNCLFVBQVUsQ0FBQyxxQkFBcUIsa0JBQWtCLENBQUMsVUFBVSxDQUFDLE1BQU0sWUFBWSxDQUFDLGVBQWUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsWUFBWSxXQUFXLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixXQUFXLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsU0FBUyxrQkFBa0IsQ0FBQyxlQUFlLGVBQWUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxVQUFVLENBQUMsY0FBYyxDQUFDLFdBQVcsYUFBYSxDQUFDLFNBQVMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLGNBQWMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLGdCQUFnQixjQUFjLENBQUMsWUFBWSxlQUFlLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxZQUFZLGVBQWUsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsbUJBQW1CIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9qb2luLW1lZXRpbmcvam9pbi1tZWV0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe21hcmdpbjowO3BhZGRpbmc6MDtib3gtc2l6aW5nOmJvcmRlci1ib3h9aHRtbHtmb250LXNpemU6MTZweH1pbnB1dHtmb250LXNpemU6MTRweH1ib2R5e2xpbmUtaGVpZ2h0OjEuNDtjb2xvcjojMzMzO2ZvbnQtZmFtaWx5OkhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmfWgxe21hcmdpbi1ib3R0b206MTZweH1sYWJlbHtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZToxNHB4O21hcmdpbi1ib3R0b206OHB4O2NvbG9yOiM3Nzd9aW5wdXR7Ym9yZGVyOjFweCBzb2xpZCAjZWVlO3BhZGRpbmc6MTJweDtvdXRsaW5lOm5vbmV9YnV0dG9ue2N1cnNvcjpwb2ludGVyO3BhZGRpbmc6MTJweDtiYWNrZ3JvdW5kOiM3QzVDQkY7Ym9yZGVyOm5vbmU7Y29sb3I6I2ZmZjtmb250LXNpemU6MTZweDt0cmFuc2l0aW9uOmJhY2tncm91bmQgLjNzIGVhc2V9YnV0dG9uOmhvdmVye2JhY2tncm91bmQ6IzZiNDdiOH1idXR0b246ZGlzYWJsZWR7Y3Vyc29yOmRlZmF1bHQ7YmFja2dyb3VuZDojN2M1Y2JmOTR9LmNlbnRlcmVkLWZvcm17YmFja2dyb3VuZDojMzMzNzQ0O3dpZHRoOjEwMHZ3O2hlaWdodDoxMDB2aDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9LmNlbnRlcmVkLWZvcm1fX2JveHtib3gtc2hhZG93OjAgMCAxN3B4IDFweCAjMUQxRjI2O2JhY2tncm91bmQ6I0Y3RjdGQTtwYWRkaW5nOjI0cHg7d2lkdGg6NTAwcHg7IGhlaWdodDogbWF4LWNvbnRlbnQ7fS5jZW50ZXJlZC1mb3JtIGJ1dHRvbnt3aWR0aDoxMDAlfS5jZW50ZXJlZC1mb3JtIGlucHV0e21hcmdpbi1ib3R0b206MTZweDt3aWR0aDoxMDAlfS5jaGF0e2Rpc3BsYXk6ZmxleH0uY2hhdF9fc2lkZWJhcntoZWlnaHQ6MTAwdmg7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiMzMzM3NDQ7d2lkdGg6MjI1cHg7b3ZlcmZsb3cteTpzY3JvbGx9LmNoYXRfX21haW57ZmxleC1ncm93OjE7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXgtaGVpZ2h0OjEwMHZofS5jaGF0X19tZXNzYWdlc3tmbGV4LWdyb3c6MTtwYWRkaW5nOjI0cHggMjRweCAwO292ZXJmbG93LXk6c2Nyb2xsfS5tZXNzYWdle21hcmdpbi1ib3R0b206MTZweH0ubWVzc2FnZV9fbmFtZXtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjE0cHg7bWFyZ2luLXJpZ2h0OjhweH0ubWVzc2FnZV9fbWV0YXtjb2xvcjojNzc3O2ZvbnQtc2l6ZToxNHB4fS5tZXNzYWdlIGF7Y29sb3I6IzAwNzBDQ30uY29tcG9zZXtkaXNwbGF5OmZsZXg7ZmxleC1zaHJpbms6MDttYXJnaW4tdG9wOjE2cHg7cGFkZGluZzoyNHB4fS5jb21wb3NlIGZvcm17ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzoxO21hcmdpbi1yaWdodDoxNnB4fS5jb21wb3NlIGlucHV0e2JvcmRlcjoxcHggc29saWQgI2VlZTt3aWR0aDoxMDAlO3BhZGRpbmc6MTJweDttYXJnaW46MCAxNnB4IDAgMDtmbGV4LWdyb3c6MX0uY29tcG9zZSBidXR0b257Zm9udC1zaXplOjE0cHh9LnJvb20tdGl0bGV7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc2l6ZToyMnB4O2JhY2tncm91bmQ6IzJjMmYzYTtwYWRkaW5nOjI0cHh9Lmxpc3QtdGl0bGV7Zm9udC13ZWlnaHQ6NTAwO2ZvbnQtc2l6ZToxOHB4O21hcmdpbi1ib3R0b206NHB4O3BhZGRpbmc6MTJweCAyNHB4IDB9LnVzZXJze2xpc3Qtc3R5bGUtdHlwZTpub25lO2ZvbnQtd2VpZ2h0OjMwMDtwYWRkaW5nOjEycHggMjRweCAwfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinMeetingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-join-meeting',
          templateUrl: './join-meeting.component.html',
          styleUrls: ['./join-meeting.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
        }, {
          type: src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_3__["JWTAuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/Services/jwtauthentication.service */
    "./src/app/Services/jwtauthentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_18_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User Name is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_18_div_1_Template, 2, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
      }
    }

    function LoginComponent_div_25_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_25_div_1_Template, 2, 0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
      }
    }

    function LoginComponent_pre_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.message);
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(_service, router) {
        _classCallCheck(this, LoginComponent);

        this._service = _service;
        this.router = router;
        this.message = "Please enter valid credentials";
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleJWTLogin",
        value: function handleJWTLogin() {
          var _this7 = this;

          this._service.executeJWTAuthenticationService(this.username, this.password).subscribe(function (data) {
            console.log(data);
            _this7.invalidLogin = false;

            _this7.router.navigate(['welcome']);
          }, function (error) {
            console.log(error);
            _this7.invalidLogin = true;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__["JWTAuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 43,
      vars: 5,
      consts: [["id", "login"], [1, "text-center", "text-black", "pt-5"], [1, "container"], ["id", "login-row", 1, "row", "justify-content-center", "align-items-center"], ["id", "login-column", 1, "col-md-6"], ["id", "login-box", 1, "col-md-12"], ["id", "login-form", 1, "form", 3, "ngSubmit"], ["login", "ngForm"], [1, "text-center", "text-info"], [1, "form-group"], ["for", "username", 1, "text-info"], ["type", "text", "name", "username", "id", "username", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["style", "color: red;", 4, "ngIf"], ["for", "password", 1, "text-info"], ["type", "password", "name", "password", "id", "password", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pass", "ngModel"], [4, "ngIf"], ["type", "submit", "name", "submit", "value", "Login", 1, "btn", "btn-info", "btn-md"], ["id", "register-link", 1, "text-right"], ["routerLink", "/register", 1, "text-info"], ["routerLink", "/forgotpassword", 1, "text-info"], ["class", "alert alert-warning", "id", "disa", 4, "ngIf"], [2, "color", "red"], ["id", "disa", 1, "alert", "alert-warning"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            return !_r0.invalid && ctx.handleJWTLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LoginComponent_div_25_Template, 2, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Forgot Your Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, LoginComponent_pre_42_Template, 2, 1, "pre", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidLogin);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: lightgoldenrodyellow;\r\n    height: 90vh;\r\n  }\r\n  #login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #login-row[_ngcontent-%COMP%]   #login-column[_ngcontent-%COMP%]   #login-box[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    max-width: 600px;\r\n    height: 450px;\r\n    border: 1px solid #9C9C9C;\r\n    background-color: #EAEAEA;\r\n  }\r\n  #login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #login-row[_ngcontent-%COMP%]   #login-column[_ngcontent-%COMP%]   #login-box[_ngcontent-%COMP%]   #login-form[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n  }\r\n  #login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #login-row[_ngcontent-%COMP%]   #login-column[_ngcontent-%COMP%]   #login-box[_ngcontent-%COMP%]   #login-form[_ngcontent-%COMP%]   #register-link[_ngcontent-%COMP%] {\r\n    margin-top: -85px;\r\n  }\r\n  .cent[_ngcontent-%COMP%]{\r\n    align-self: center;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQ0FBc0M7SUFDdEMsWUFBWTtFQUNkO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0pDIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgfVxyXG4gICNsb2dpbiAuY29udGFpbmVyICNsb2dpbi1yb3cgI2xvZ2luLWNvbHVtbiAjbG9naW4tYm94IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5QzlDOUM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFFQUVBO1xyXG4gIH1cclxuICAjbG9naW4gLmNvbnRhaW5lciAjbG9naW4tcm93ICNsb2dpbi1jb2x1bW4gI2xvZ2luLWJveCAjbG9naW4tZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICAjbG9naW4gLmNvbnRhaW5lciAjbG9naW4tcm93ICNsb2dpbi1jb2x1bW4gI2xvZ2luLWJveCAjbG9naW4tZm9ybSAjcmVnaXN0ZXItbGluayB7XHJcbiAgICBtYXJnaW4tdG9wOiAtODVweDtcclxuICB9XHJcbiAgLmNlbnR7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAvKiBAY2hhcnNldCBcInV0Zi04XCI7XHJcblx0Lk5vcm1hbENoYXJhY3RlclN0eWxlNFxyXG57XHJcblx0Zm9udC1mYW1pbHkgOiBPcGVuIFNhbnM7XHJcblx0Zm9udC1zaXplIDogMTFweDtcclxuXHRjb2xvciA6ICNGRkZGRkY7XHJcblx0Y29sb3IgOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuLk5vcm1hbENoYXJhY3RlclN0eWxlM1xyXG57XHJcblx0Zm9udC1mYW1pbHkgOiBPcGVuIFNhbnM7XHJcblx0Zm9udC1zaXplIDogOHB4O1xyXG5cdGNvbG9yIDogIzAwMDAwMDtcclxuXHRjb2xvciA6IHJnYigwLCAwLCAwKTtcclxuXHRvcGFjaXR5IDogMC4yNTtcclxuXHRmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MjUpIHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShvcGFjaXR5PTI1KSA7XHJcbn1cclxuLnN0MFxyXG57XHJcblx0Ym9yZGVyLXN0eWxlIDogU29saWQ7XHJcblx0Ym9yZGVyLWNvbG9yIDogIzIyMjUyODtcclxuXHRib3JkZXItY29sb3IgOiByZ2JhKDM0LCAzNywgNDAsIDEpO1xyXG5cdGJvcmRlci13aWR0aCA6IDJweDtcclxufVxyXG4uc3QxXHJcbntcclxuXHRiYWNrZ3JvdW5kIDogIzJFMkUzQTtcclxuXHRiYWNrZ3JvdW5kIDogcmdiYSg0NiwgNDYsIDU4LCAxKTtcclxuXHRib3JkZXItcmFkaXVzIDogMTBweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXMgOiAxMHB4O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1cyA6IDEwcHg7XHJcbn1cclxuLnN0MlxyXG57XHJcblx0Ym9yZGVyLXN0eWxlIDogU29saWQ7XHJcblx0Ym9yZGVyLWNvbG9yIDogI0ZGRkZGRjtcclxuXHRib3JkZXItY29sb3IgOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG5cdGJvcmRlci13aWR0aCA6IDFweDtcclxuXHRib3JkZXItcmFkaXVzIDogMTBweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXMgOiAxMHB4O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1cyA6IDEwcHg7XHJcbn1cclxuLnN0M1xyXG57XHJcblx0YmFja2dyb3VuZCA6ICNGRkZGRkY7XHJcblx0YmFja2dyb3VuZCA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcblx0Ym9yZGVyLXJhZGl1cyA6IDZweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXMgOiA2cHg7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzIDogNnB4O1xyXG59XHJcbi5zdDRcclxue1xyXG5cdGJvcmRlci1zdHlsZSA6IFNvbGlkO1xyXG5cdGJvcmRlci1jb2xvciA6ICNGRkZGRkY7XHJcblx0Ym9yZGVyLWNvbG9yIDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuXHRib3JkZXItd2lkdGggOiAxcHg7XHJcbn1cclxuLmltYWdlNFxyXG57XHJcblx0YmFja2dyb3VuZC1pbWFnZSA6IHVybChpbWFnZTQucG5nKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdCA6IG5vLXJlcGVhdDtcclxufVxyXG4uaW1hZ2U1XHJcbntcclxuXHRiYWNrZ3JvdW5kLWltYWdlIDogdXJsKGltYWdlNS5wbmcpO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0IDogbm8tcmVwZWF0O1xyXG59XHJcbi5pbWFnZTNcclxue1xyXG5cdGJhY2tncm91bmQtaW1hZ2UgOiB1cmwoaW1hZ2UzLnBuZyk7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQgOiBuby1yZXBlYXQ7XHJcbn1cclxuLmltYWdlMlxyXG57XHJcblx0YmFja2dyb3VuZC1pbWFnZSA6IHVybChpbWFnZTIucG5nKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdCA6IG5vLXJlcGVhdDtcclxufVxyXG4uaW1hZ2Vcclxue1xyXG5cdGJhY2tncm91bmQtaW1hZ2UgOiB1cmwoaW1hZ2UucG5nKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdCA6IG5vLXJlcGVhdDtcclxufVxyXG4uaW1hZ2UxXHJcbntcclxuXHRiYWNrZ3JvdW5kLWltYWdlIDogdXJsKGltYWdlMS5wbmcpO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0IDogbm8tcmVwZWF0O1xyXG59XHJcbi5Ob3JtYWxDaGFyYWN0ZXJTdHlsZTJcclxue1xyXG5cdGZvbnQtZmFtaWx5IDogT3BlbiBTYW5zO1xyXG5cdGZvbnQtc2l6ZSA6IDEwcHg7XHJcblx0Y29sb3IgOiAjRkZGRkZGO1xyXG5cdGNvbG9yIDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcbi5Ob3JtYWxDaGFyYWN0ZXJTdHlsZTFcclxue1xyXG5cdGZvbnQtZmFtaWx5IDogT3BlbiBTYW5zO1xyXG5cdGZvbnQtc2l6ZSA6IDEycHg7XHJcblx0bGV0dGVyLXNwYWNpbmcgOiAwLjI0cHg7XHJcblx0Y29sb3IgOiAjNzM4QUQ5O1xyXG5cdGNvbG9yIDogcmdiKDExNSwgMTM4LCAyMTcpO1xyXG5cdHRleHQtb3V0bGluZSA6ICM3MzhBRDk7XHJcblx0dGV4dC1vdXRsaW5lIDogcmdiKDExNSwgMTM4LCAyMTcpO1xyXG59XHJcbi5Ob3JtYWxDaGFyYWN0ZXJTdHlsZVxyXG57XHJcblx0Zm9udC1mYW1pbHkgOiBPcGVuIFNhbnM7XHJcblx0Zm9udC1zaXplIDogMTJweDtcclxuXHRsZXR0ZXItc3BhY2luZyA6IDAuMjRweDtcclxuXHRjb2xvciA6ICM3MzhBRDk7XHJcblx0Y29sb3IgOiByZ2IoMTE1LCAxMzgsIDIxNyk7XHJcblx0dGV4dC1vdXRsaW5lIDogIzczOEFEOTtcclxuXHR0ZXh0LW91dGxpbmUgOiByZ2IoMTE1LCAxMzgsIDIxNyk7XHJcbn1cclxuLk5vcm1hbENoYXJhY3RlclN0eWxlOVxyXG57XHJcblx0Zm9udC1mYW1pbHkgOiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcblx0Zm9udC1zaXplIDogMjRweDtcclxuXHRsZXR0ZXItc3BhY2luZyA6IDAuNDhweDtcclxuXHRjb2xvciA6ICM0NzQ3NDc7XHJcblx0Y29sb3IgOiByZ2IoNzEsIDcxLCA3MSk7XHJcbn1cclxuLk5vcm1hbENoYXJhY3RlclN0eWxlOFxyXG57XHJcblx0Zm9udC1mYW1pbHkgOiBPcGVuIFNhbnM7XHJcblx0Zm9udC1zaXplIDogMThweDtcclxuXHRsZXR0ZXItc3BhY2luZyA6IDEuNDRweDtcclxuXHRjb2xvciA6ICMyMjI1Mjg7XHJcblx0Y29sb3IgOiByZ2IoMzQsIDM3LCA0MCk7XHJcbn1cclxuLk5vcm1hbENoYXJhY3RlclN0eWxlN1xyXG57XHJcblx0Zm9udC1mYW1pbHkgOiBPcGVuIFNhbnM7XHJcblx0Zm9udC1zaXplIDogMThweDtcclxuXHRsZXR0ZXItc3BhY2luZyA6IDEuNDRweDtcclxuXHRjb2xvciA6ICMyMjI1Mjg7XHJcblx0Y29sb3IgOiByZ2IoMzQsIDM3LCA0MCk7XHJcbn1cclxuLk5vcm1hbENoYXJhY3RlclN0eWxlNVxyXG57XHJcblx0Zm9udC1mYW1pbHkgOiBPcGVuIFNhbnM7XHJcblx0Zm9udC1zaXplIDogMTFweDtcclxuXHRjb2xvciA6ICNGRkZGRkY7XHJcblx0Y29sb3IgOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuLk5vcm1hbENoYXJhY3RlclN0eWxlNlxyXG57XHJcblx0Zm9udC1mYW1pbHkgOiBPcGVuIFNhbnM7XHJcblx0Zm9udC1zaXplIDogMThweDtcclxuXHRsZXR0ZXItc3BhY2luZyA6IDEuNDRweDtcclxuXHRjb2xvciA6ICMyMjI1Mjg7XHJcblx0Y29sb3IgOiByZ2IoMzQsIDM3LCA0MCk7XHJcbn0gKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__["JWTAuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/logout/logout.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Components/logout/logout.component.ts ***!
    \*******************************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppComponentsLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/Services/jwtauthentication.service */
    "./src/app/Services/jwtauthentication.service.ts");

    var LogoutComponent = /*#__PURE__*/function () {
      function LogoutComponent(jwtAuth) {
        _classCallCheck(this, LogoutComponent);

        this.jwtAuth = jwtAuth;
      }

      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.jwtAuth.logout();
        }
      }]);

      return LogoutComponent;
    }();

    LogoutComponent.ɵfac = function LogoutComponent_Factory(t) {
      return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__["JWTAuthenticationService"]));
    };

    LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogoutComponent,
      selectors: [["app-logout"]],
      decls: 4,
      vars: 0,
      consts: [[1, "container"]],
      template: function LogoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Thank You for using our website");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["body[_ngcontent-%COMP%]{\r\n  \r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: lightgoldenrodyellow;\r\n    height: 89vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksU0FBUztJQUNULFVBQVU7SUFDVixzQ0FBc0M7SUFDdEMsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICBcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdvbGRlbnJvZHllbGxvdztcclxuICAgIGhlaWdodDogODl2aDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-logout',
          templateUrl: './logout.component.html',
          styleUrls: ['./logout.component.css']
        }]
      }], function () {
        return [{
          type: src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__["JWTAuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/otp/otp.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/Components/otp/otp.component.ts ***!
    \*************************************************/

  /*! exports provided: OtpComponent, UPO */

  /***/
  function srcAppComponentsOtpOtpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtpComponent", function () {
      return OtpComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPO", function () {
      return UPO;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Services/jwtauthentication.service */
    "./src/app/Services/jwtauthentication.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function OtpComponent_div_20_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Otp is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OtpComponent_div_20_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Otp should be of 7 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OtpComponent_div_20_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Otp should be of 7 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OtpComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OtpComponent_div_20_div_1_Template, 2, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OtpComponent_div_20_div_2_Template, 2, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OtpComponent_div_20_div_3_Template, 2, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r29.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r29.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r29.errors.maxlength);
      }
    }

    function OtpComponent_pre_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid Otp entered");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var OtpComponent = /*#__PURE__*/function () {
      function OtpComponent(ActiRouter, jwtService, router) {
        _classCallCheck(this, OtpComponent);

        this.ActiRouter = ActiRouter;
        this.jwtService = jwtService;
        this.router = router;
        this.error = false;
      }

      _createClass(OtpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.upo = new UPO("", "", "", "");
          this.ActiRouter.queryParams.subscribe(function (response) {
            // this.upo.username= response.p1;
            // this.upo.password= response.p2;
            _this8.data = response;
            console.log(response);
          });
          this.upo.username = this.data.p1;
          this.upo.password = this.data.p2;
          this.upo.name = this.data.p3;
          this.o = this.data.p4;
          this.send = {
            "username": this.upo.username,
            "otp": this.o
          };
          setTimeout(function () {
            _this8.jwtService.deleteForOtp(_this8.send).subscribe(function (response) {
              if (response == true) {
                console.log("Deletion Successful");
              } else {
                console.log("Some problem in deletion occured");
              }
            }, function (error) {
              console.log(error);
            });
          }, 300000);
        } // deleteOtp():any{
        //   this.jwtService.deleteForOtp(this.send).subscribe((response:any)=>{
        //     if(response==true){
        //       console.log("Deletion Successful");
        //     }
        //     else{
        //       console.log("Some problem in deletion occured");
        //     }
        //   },(error:any)=>{
        //     console.log(error);
        //   })
        // }

      }, {
        key: "submitOTP",
        value: function submitOTP() {
          var _this9 = this;

          this.jwtService.registerotp(this.upo).subscribe(function (response) {
            if (response == true) {
              _this9.error = false;

              _this9.router.navigate(['login']);
            } else {
              _this9.error = true;
            }
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return OtpComponent;
    }();

    OtpComponent.ɵfac = function OtpComponent_Factory(t) {
      return new (t || OtpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_2__["JWTAuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    OtpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OtpComponent,
      selectors: [["app-otp"]],
      decls: 26,
      vars: 3,
      consts: [["id", "login"], [1, "text-center", "text-black", "pt-5"], [1, "container"], ["id", "login-row", 1, "row", "justify-content-center", "align-items-center"], ["id", "login-column", 1, "col-md-6"], ["id", "login-box", 1, "col-md-12"], ["id", "login-form", 1, "form", 3, "ngSubmit"], ["reg", "ngForm"], [1, "text-center", "text-info"], [1, "form-group"], ["for", "username", 1, "text-info"], ["type", "text", "name", "otp", "id", "username", "required", "required", "minlength", "7", "maxlength", "7", 1, "form-control", 3, "ngModel", "ngModelChange"], ["n", "ngModel"], ["style", "color: red;", 4, "ngIf"], ["type", "submit", "name", "submit", "value", "Verify", 1, "btn", "btn-info", "btn-md"], ["class", "alert alert-warning", 4, "ngIf"], [2, "color", "red"], [4, "ngIf"], [1, "alert", "alert-warning"]],
      template: function OtpComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please Enter Otp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function OtpComponent_Template_form_ngSubmit_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            return !_r28.invalid && ctx.submitOTP();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Otp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Otp is valid only for 5 minutes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "OTP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OtpComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.upo.otp = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, OtpComponent_div_20_Template, 4, 3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, OtpComponent_pre_25_Template, 2, 0, "pre", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.upo.otp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r29.invalid && (_r29.dirty || _r29.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: lightgoldenrodyellow;\r\n    height: 90vh;\r\n  }\r\n  #login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #login-row[_ngcontent-%COMP%]   #login-column[_ngcontent-%COMP%]   #login-box[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    max-width: 600px;\r\n    height: 350px;\r\n    border: 1px solid #9C9C9C;\r\n    background-color: #EAEAEA;\r\n  }\r\n  #login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #login-row[_ngcontent-%COMP%]   #login-column[_ngcontent-%COMP%]   #login-box[_ngcontent-%COMP%]   #login-form[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n  }\r\n  #login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #login-row[_ngcontent-%COMP%]   #login-column[_ngcontent-%COMP%]   #login-box[_ngcontent-%COMP%]   #login-form[_ngcontent-%COMP%]   #register-link[_ngcontent-%COMP%] {\r\n    margin-top: -85px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9vdHAvb3RwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNDQUFzQztJQUN0QyxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9vdHAvb3RwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdvbGRlbnJvZHllbGxvdztcclxuICAgIGhlaWdodDogOTB2aDtcclxuICB9XHJcbiAgI2xvZ2luIC5jb250YWluZXIgI2xvZ2luLXJvdyAjbG9naW4tY29sdW1uICNsb2dpbi1ib3gge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzlDOUM5QztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQUVBRUE7XHJcbiAgfVxyXG4gICNsb2dpbiAuY29udGFpbmVyICNsb2dpbi1yb3cgI2xvZ2luLWNvbHVtbiAjbG9naW4tYm94ICNsb2dpbi1mb3JtIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gICNsb2dpbiAuY29udGFpbmVyICNsb2dpbi1yb3cgI2xvZ2luLWNvbHVtbiAjbG9naW4tYm94ICNsb2dpbi1mb3JtICNyZWdpc3Rlci1saW5rIHtcclxuICAgIG1hcmdpbi10b3A6IC04NXB4O1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-otp',
          templateUrl: './otp.component.html',
          styleUrls: ['./otp.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_2__["JWTAuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();

    var UPO = function UPO(username, password, otp, name) {
      _classCallCheck(this, UPO);

      this.username = username;
      this.password = password;
      this.otp = otp;
      this.name = name;
    };
    /***/

  },

  /***/
  "./src/app/Components/register/register.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Components/register/register.component.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterComponent, Register */

  /***/
  function srcAppComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Register", function () {
      return Register;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/Services/jwtauthentication.service */
    "./src/app/Services/jwtauthentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegisterComponent_div_18_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_18_div_1_Template, 2, 0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors.required);
      }
    }

    function RegisterComponent_div_25_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User Name is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_25_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User Name must be of minimum 5 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_25_div_1_Template, 2, 0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_25_div_2_Template, 2, 0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.errors.minlength);
      }
    }

    function RegisterComponent_div_37_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_37_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be of minimum 5 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_37_div_1_Template, 2, 0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_37_div_2_Template, 2, 0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r14.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r14.errors.minlength);
      }
    }

    function RegisterComponent_div_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.checker);
      }
    }

    function RegisterComponent_pre_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.registered);
      }
    }

    function RegisterComponent_pre_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.error);
      }
    }

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(_service, router) {
        _classCallCheck(this, RegisterComponent);

        this._service = _service;
        this.router = router;
        this.m = "";
        this.checker = "";
        this.bool = false;
        this.numbers = "0123456789";
        this.err = false;
        this.opt = "";
        this.registered = "Successfully Registered";
        this.error = "Some Error Occured!! Please contact ADMIN!!!";
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.register = new Register("", "", "", "");
        }
      }, {
        key: "generateOtp",
        value: function generateOtp() {
          for (this.i = 0; this.i < 7; this.i++) {
            this.opt += Math.floor(Math.random() * 10);
          }

          return this.opt;
        }
      }, {
        key: "RegisterUser",
        value: function RegisterUser() {
          var _this10 = this;

          this.checker = "";
          this.o = this.generateOtp();
          this.register.otp = this.o;

          if (this.register.password == this.confirm) {
            console.log(this.register);

            this._service.RegisteringUsers(this.register).subscribe(function (response) {
              if (response == true) {
                _this10.bool = true;
                _this10.err = false;
                _this10.confirm = "";

                _this10.router.navigate(['/otp'], {
                  queryParams: {
                    p1: _this10.register.username,
                    p2: _this10.register.password,
                    p3: _this10.register.name,
                    p4: _this10.register.otp
                  },
                  skipLocationChange: true
                });
              } else {
                _this10.bool = false;
                _this10.err = true;
              }
            });
          } else {
            this.checker = "Passwords do not match";
            this.confirm = "";
          }
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__["JWTAuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 55,
      vars: 10,
      consts: [["id", "login"], [1, "text-center", "text-black", "pt-5"], [1, "container"], ["id", "login-row", 1, "row", "justify-content-center", "align-items-center"], ["id", "login-column", 1, "col-md-6"], ["id", "login-box", 1, "col-md-12"], ["id", "login-form", 1, "form", 3, "ngSubmit"], ["reg", "ngForm"], [1, "text-center", "text-info"], [1, "form-group"], ["for", "username", 1, "text-info"], ["type", "text", "name", "name", "id", "username", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], ["n", "ngModel"], ["style", "color: red;", 4, "ngIf"], ["type", "text", "name", "username", "id", "username", "required", "required", "minlength", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["type", "file", "id", "username", 1, "form-control"], ["for", "password", 1, "text-info"], ["type", "password", "name", "password", "id", "password", "required", "required", "minlength", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pass", "ngModel"], ["type", "password", "id", "password", "name", "confirm", 1, "form-control", 3, "ngModel", "ngModelChange"], ["c", "ngModel"], ["type", "submit", "name", "submit", "value", "Register", 1, "btn", "btn-info", "btn-md"], ["id", "register-link", 1, "text-right"], ["routerLink", "/login", 1, "text-info"], ["class", "alert alert-warning", "id", "disa", 4, "ngIf"], [2, "color", "red"], [4, "ngIf"], ["id", "disa", 1, "alert", "alert-warning"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            return !_r9.invalid && ctx.RegisterUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.register.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegisterComponent_div_18_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.register.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegisterComponent_div_25_Template, 3, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Image Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_35_listener($event) {
            return ctx.register.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RegisterComponent_div_37_Template, 3, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_42_listener($event) {
            return ctx.confirm = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, RegisterComponent_div_44_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, RegisterComponent_pre_53_Template, 2, 1, "pre", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, RegisterComponent_pre_54_Template, 2, 1, "pre", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.register.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.invalid && (_r10.dirty || _r10.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.register.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.invalid && (_r12.dirty || _r12.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.register.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r14.invalid && (_r14.dirty || _r14.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checker != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bool);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.err);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: lightgoldenrodyellow;\r\n    min-height: 110vh;\r\n    height: -webkit-max-content;\r\n    height: -moz-max-content;\r\n    height: max-content;\r\n  }\r\n  #login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #login-row[_ngcontent-%COMP%]   #login-column[_ngcontent-%COMP%]   #login-box[_ngcontent-%COMP%] {\r\n    margin-top: 1px;\r\n    max-width: 600px;\r\n    height: 610px;\r\n    border: 1px solid #9C9C9C;\r\n    background-color: #EAEAEA;\r\n  }\r\n  #login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #login-row[_ngcontent-%COMP%]   #login-column[_ngcontent-%COMP%]   #login-box[_ngcontent-%COMP%]   #login-form[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n  }\r\n  #login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #login-row[_ngcontent-%COMP%]   #login-column[_ngcontent-%COMP%]   #login-box[_ngcontent-%COMP%]   #login-form[_ngcontent-%COMP%]   #register-link[_ngcontent-%COMP%] {\r\n    margin-top: -85px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBQ2pCLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xyXG4gICAgbWluLWhlaWdodDogMTEwdmg7XHJcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIH1cclxuICAjbG9naW4gLmNvbnRhaW5lciAjbG9naW4tcm93ICNsb2dpbi1jb2x1bW4gI2xvZ2luLWJveCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgaGVpZ2h0OiA2MTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5QzlDOUM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFFQUVBO1xyXG4gIH1cclxuICAjbG9naW4gLmNvbnRhaW5lciAjbG9naW4tcm93ICNsb2dpbi1jb2x1bW4gI2xvZ2luLWJveCAjbG9naW4tZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICAjbG9naW4gLmNvbnRhaW5lciAjbG9naW4tcm93ICNsb2dpbi1jb2x1bW4gI2xvZ2luLWJveCAjbG9naW4tZm9ybSAjcmVnaXN0ZXItbGluayB7XHJcbiAgICBtYXJnaW4tdG9wOiAtODVweDtcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
        }]
      }], function () {
        return [{
          type: src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__["JWTAuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();

    var Register = function Register(name, username, password, otp) {
      _classCallCheck(this, Register);

      this.name = name;
      this.username = username;
      this.password = password;
      this.otp = otp;
    };
    /***/

  },

  /***/
  "./src/app/Components/welcome/welcome.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Components/welcome/welcome.component.ts ***!
    \*********************************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppComponentsWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/Services/jwtauthentication.service */
    "./src/app/Services/jwtauthentication.service.ts");

    var WelcomeComponent = /*#__PURE__*/function () {
      function WelcomeComponent(_service) {
        _classCallCheck(this, WelcomeComponent);

        this._service = _service;
        this.page = {
          title: 'Home',
          subtitle: 'Welcome Home!',
          content: 'Some home content.',
          image: 'assets/bg00.jpeg'
        };
      }

      _createClass(WelcomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this._service.getAuthenticatedUser();
        }
      }]);

      return WelcomeComponent;
    }();

    WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) {
      return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__["JWTAuthenticationService"]));
    };

    WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WelcomeComponent,
      selectors: [["app-welcome"]],
      decls: 6,
      vars: 1,
      consts: [[1, "container"], [1, "hero", "is-info", "is-fullheight", "is-bold"], [1, "hero-body"], [1, "title"]],
      template: function WelcomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx.user, "");
        }
      },
      styles: [".hero[_ngcontent-%COMP%] {\r\n    background-image: url('/assets/img/auto.jpg') !important;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    min-height: 90vh;\r\n    height: -webkit-max-content;\r\n    height: -moz-max-content;\r\n    height: max-content;\r\n  }\r\nbody[_ngcontent-%COMP%]{\r\n      background-color: lightskyblue;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSDs7OztLQUlLO0FBRUg7SUFDRSx3REFBd0Q7SUFDeEQsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7RUFDckI7QUFFQTtNQUNJLDhCQUE4QjtFQUNsQyIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBib2R5e1xyXG4gIFxyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcclxuICAgIGhlaWdodDogODl2aDtcclxufSAqL1xyXG4vKiBib2R5IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvaG9zcGkuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB9ICovXHJcblxyXG4gIC5oZXJvIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvYXV0by5qcGcnKSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICB9XHJcblxyXG4gIGJvZHl7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcclxuICB9XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-welcome',
          templateUrl: './welcome.component.html',
          styleUrls: ['./welcome.component.css']
        }]
      }], function () {
        return [{
          type: src_app_Services_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__["JWTAuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Services/Guard/route-guard.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Services/Guard/route-guard.service.ts ***!
    \*******************************************************/

  /*! exports provided: RouteGuardService */

  /***/
  function srcAppServicesGuardRouteGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteGuardService", function () {
      return RouteGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../jwtauthentication.service */
    "./src/app/Services/jwtauthentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RouteGuardService = /*#__PURE__*/function () {
      function RouteGuardService(jwtAuthentication, router) {
        _classCallCheck(this, RouteGuardService);

        this.jwtAuthentication = jwtAuthentication;
        this.router = router;
      }

      _createClass(RouteGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.jwtAuthentication.isAuthenticated()) {
            return true;
          }

          this.router.navigate(['login']);
          return false;
        }
      }]);

      return RouteGuardService;
    }();

    RouteGuardService.ɵfac = function RouteGuardService_Factory(t) {
      return new (t || RouteGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__["JWTAuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    RouteGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RouteGuardService,
      factory: RouteGuardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__["JWTAuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Services/Interceptors/http-interceptor-jwt.service.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/Services/Interceptors/http-interceptor-jwt.service.ts ***!
    \***********************************************************************/

  /*! exports provided: HttpInterceptorJwtService */

  /***/
  function srcAppServicesInterceptorsHttpInterceptorJwtServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpInterceptorJwtService", function () {
      return HttpInterceptorJwtService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../jwtauthentication.service */
    "./src/app/Services/jwtauthentication.service.ts");

    var HttpInterceptorJwtService = /*#__PURE__*/function () {
      function HttpInterceptorJwtService(jwtAuthenticationService) {
        _classCallCheck(this, HttpInterceptorJwtService);

        this.jwtAuthenticationService = jwtAuthenticationService;
      }

      _createClass(HttpInterceptorJwtService, [{
        key: "intercept",
        value: function intercept(request, next) {
          var authenticationToken = this.jwtAuthenticationService.getAuthenticationToken();
          var username = this.jwtAuthenticationService.getAuthenticatedUser();
          var basicAuthHeader = authenticationToken;

          if (authenticationToken && username) {
            request = request.clone({
              setHeaders: {
                Authorization: basicAuthHeader
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return HttpInterceptorJwtService;
    }();

    HttpInterceptorJwtService.ɵfac = function HttpInterceptorJwtService_Factory(t) {
      return new (t || HttpInterceptorJwtService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__["JWTAuthenticationService"]));
    };

    HttpInterceptorJwtService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HttpInterceptorJwtService,
      factory: HttpInterceptorJwtService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpInterceptorJwtService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _jwtauthentication_service__WEBPACK_IMPORTED_MODULE_1__["JWTAuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Services/jwtauthentication.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Services/jwtauthentication.service.ts ***!
    \*******************************************************/

  /*! exports provided: USER, TOKEN, JWTAuthenticationService, AuthenticationBean */

  /***/
  function srcAppServicesJwtauthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "USER", function () {
      return USER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TOKEN", function () {
      return TOKEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JWTAuthenticationService", function () {
      return JWTAuthenticationService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationBean", function () {
      return AuthenticationBean;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.constant */
    "./src/app/app.constant.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var USER = 'auth-user';
    var TOKEN = 'auth-token';

    var JWTAuthenticationService = /*#__PURE__*/function () {
      function JWTAuthenticationService(_http) {
        _classCallCheck(this, JWTAuthenticationService);

        this._http = _http;
      }

      _createClass(JWTAuthenticationService, [{
        key: "executeJWTAuthenticationService",
        value: function executeJWTAuthenticationService(username, password) {
          return this._http.post("".concat(_app_constant__WEBPACK_IMPORTED_MODULE_2__["URI"], "/authenticate"), {
            username: username,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            sessionStorage.setItem(USER, username);
            sessionStorage.setItem(TOKEN, "Bearer ".concat(data.token));
            return data;
          }));
        }
      }, {
        key: "RegisteringUsers",
        value: function RegisteringUsers(data) {
          return this._http.post("".concat(_app_constant__WEBPACK_IMPORTED_MODULE_2__["URI"], "/otpgenerated"), data);
        }
      }, {
        key: "deleteForOtp",
        value: function deleteForOtp(data) {
          return this._http.post("".concat(_app_constant__WEBPACK_IMPORTED_MODULE_2__["URI"], "/deleteForOtp"), data);
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          var user = sessionStorage.getItem(USER);
          return !(user == null);
        }
      }, {
        key: "getAuthUser",
        value: function getAuthUser() {
          return sessionStorage.getItem(USER);
        }
      }, {
        key: "registerotp",
        value: function registerotp(data) {
          return this._http.post("".concat(_app_constant__WEBPACK_IMPORTED_MODULE_2__["URI"], "/register"), data);
        }
      }, {
        key: "getByUsername",
        value: function getByUsername() {
          var username = sessionStorage.getItem('auth-user');
          var u = {
            "username": username
          };
          console.log(u);
          return this._http.post("".concat(_app_constant__WEBPACK_IMPORTED_MODULE_2__["URI"], "/getUsername"), u);
        }
      }, {
        key: "changePassword",
        value: function changePassword(data) {
          return this._http.post("".concat(_app_constant__WEBPACK_IMPORTED_MODULE_2__["URI"], "/changePassword"), data);
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword(data) {
          return this._http.post("".concat(_app_constant__WEBPACK_IMPORTED_MODULE_2__["URI"], "/forgotPassword"), data);
        }
      }, {
        key: "addRoom",
        value: function addRoom(room, use) {
          var username = sessionStorage.getItem('auth-user');
          return this._http.post("".concat(_app_constant__WEBPACK_IMPORTED_MODULE_2__["URI"], "/addRooms"), {
            "username": username,
            "room": room,
            "name": use
          });
        }
      }, {
        key: "joinRoom",
        value: function joinRoom(room, use) {
          var username = sessionStorage.getItem('auth-user');
          return this._http.post("".concat(_app_constant__WEBPACK_IMPORTED_MODULE_2__["URI"], "/joinRooms"), {
            "username": username,
            "room": room,
            "name": use
          });
        } // executeAuthenticationService(username:any,password:any):any{
        //   let basicAuthHeader= "Basic "+window.btoa(username+':'+ password);
        //   let headers= new HttpHeaders({
        //     Authorization: basicAuthHeader
        //   })
        //   return  this._http.get<AuthenticationBean>(`${URI}/basicAuth`,{headers}).pipe(map(data=>{
        //     sessionStorage.setItem(USER,username);
        //     sessionStorage.setItem(TOKEN,basicAuthHeader);
        //     return data;
        //   }));
        // }

      }, {
        key: "getAuthenticatedUser",
        value: function getAuthenticatedUser() {
          return sessionStorage.getItem(USER);
        }
      }, {
        key: "getAuthenticationToken",
        value: function getAuthenticationToken() {
          return sessionStorage.getItem(TOKEN);
        }
      }, {
        key: "logout",
        value: function logout() {
          sessionStorage.removeItem(USER);
          sessionStorage.removeItem(TOKEN);
        }
      }]);

      return JWTAuthenticationService;
    }();

    JWTAuthenticationService.ɵfac = function JWTAuthenticationService_Factory(t) {
      return new (t || JWTAuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    JWTAuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JWTAuthenticationService,
      factory: JWTAuthenticationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JWTAuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();

    var AuthenticationBean = function AuthenticationBean(message) {
      _classCallCheck(this, AuthenticationBean);

      this.message = message;
    };
    /***/

  },

  /***/
  "./src/app/_modal/index.ts":
  /*!*********************************!*\
    !*** ./src/app/_modal/index.ts ***!
    \*********************************/

  /*! exports provided: ModalModule, ModalService */

  /***/
  function srcApp_modalIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _modal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./modal.module */
    "./src/app/_modal/modal.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalModule", function () {
      return _modal_module__WEBPACK_IMPORTED_MODULE_0__["ModalModule"];
    });
    /* harmony import */


    var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./modal.service */
    "./src/app/_modal/modal.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalService", function () {
      return _modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"];
    });
    /***/

  },

  /***/
  "./src/app/_modal/modal.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/_modal/modal.component.ts ***!
    \*******************************************/

  /*! exports provided: ModalComponent */

  /***/
  function srcApp_modalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./modal.service */
    "./src/app/_modal/modal.service.ts");

    var _c0 = ["*"];

    var ModalComponent = /*#__PURE__*/function () {
      function ModalComponent(modalService, el) {
        _classCallCheck(this, ModalComponent);

        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
      }

      _createClass(ModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          // ensure id attribute exists
          if (!this.id) {
            console.error('modal must have an id');
            return;
          } // move element to bottom of page (just before </body>) so it can be displayed above everything else


          document.body.appendChild(this.element); // close modal on background click

          this.element.addEventListener('click', function (el) {
            if (el.target.className === 'jw-modal') {
              _this11.close();
            }
          }); // add self (this modal instance) to the modal service so it's accessible from controllers

          this.modalService.add(this);
        } // remove self from modal service when component is destroyed

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.modalService.remove(this.id);
          this.element.remove();
        } // open modal

      }, {
        key: "open",
        value: function open() {
          this.element.style.display = 'block';
          document.body.classList.add('jw-modal-open');
        } // close modal

      }, {
        key: "close",
        value: function close() {
          this.element.style.display = 'none';
          document.body.classList.remove('jw-modal-open');
        }
      }]);

      return ModalComponent;
    }();

    ModalComponent.ɵfac = function ModalComponent_Factory(t) {
      return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalComponent,
      selectors: [["jw-modal"]],
      inputs: {
        id: "id"
      },
      ngContentSelectors: _c0,
      decls: 4,
      vars: 0,
      consts: [[1, "jw-modal"], [1, "jw-modal-body"], [1, "jw-modal-background"]],
      template: function ModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        }
      },
      styles: ["jw-modal {\n  /* modals are hidden by default */\n  display: none;\n}\njw-modal .jw-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\njw-modal .jw-modal .jw-modal-body {\n  padding: 20px;\n  background: #fff;\n  /* margin exposes part of the modal background */\n  margin: 40px;\n}\njw-modal .jw-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\nbody.jw-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX21vZGFsL0M6L1VzZXJzL2hwL0Rlc2t0b3AvTm9kZSBKUy9VbWJlb1Byb2plY3Qvc3JjL2FwcC9fbW9kYWwvbW9kYWwuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL19tb2RhbC9tb2RhbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQ0NFLGlDQUFpQztFREMvQixhQUFBO0FDQ0o7QURIQTtFQ0tFLDhDQUE4QztFREN4QyxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQ0NOLHFEQUFxRDtFREUvQyxhQUFBO0VDQU4sc0NBQXNDO0VER2hDLGNBQUE7QUNEUjtBRGZBO0VBbUJZLGFBQUE7RUFDQSxnQkFBQTtFQ0RWLGdEQUFnRDtFREl0QyxZQUFBO0FDRlo7QURyQkE7RUN1QkUsK0NBQStDO0VETXpDLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VDSk4sNEJBQTRCO0VET3RCLHNCQUFBO0VBQ0EsYUFBQTtFQ0xOLCtEQUErRDtFRFF6RCxZQUFBO0FDTlI7QURVQTtFQ1JFLDZFQUE2RTtFRFUzRSxnQkFBQTtBQ1JKIiwiZmlsZSI6InNyYy9hcHAvX21vZGFsL21vZGFsLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsianctbW9kYWwge1xuICAgIC8qIG1vZGFscyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgLmp3LW1vZGFsIHtcbiAgICAgICAgLyogbW9kYWwgY29udGFpbmVyIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgLyogei1pbmRleCBtdXN0IGJlIGhpZ2hlciB0aGFuIC5qdy1tb2RhbC1iYWNrZ3JvdW5kICovXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgIFxuICAgICAgICAvKiBlbmFibGVzIHNjcm9sbGluZyBmb3IgdGFsbCBtb2RhbHMgKi9cbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAgICAgLmp3LW1vZGFsLWJvZHkge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICAgICAgICAgIC8qIG1hcmdpbiBleHBvc2VzIHBhcnQgb2YgdGhlIG1vZGFsIGJhY2tncm91bmQgKi9cbiAgICAgICAgICAgIG1hcmdpbjogNDBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5qdy1tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgLyogbW9kYWwgYmFja2dyb3VuZCBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgIC8qIHNlbWktdHJhbnNwYXJlbnQgYmxhY2sgICovXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgIFxuICAgICAgICAvKiB6LWluZGV4IG11c3QgYmUgYmVsb3cgLmp3LW1vZGFsIGFuZCBhYm92ZSBldmVyeXRoaW5nIGVsc2UgICovXG4gICAgICAgIHotaW5kZXg6IDkwMDtcbiAgICB9XG59XG5cbmJvZHkuanctbW9kYWwtb3BlbiB7XG4gICAgLyogYm9keSBvdmVyZmxvdyBpcyBoaWRkZW4gdG8gaGlkZSBtYWluIHNjcm9sbGJhciB3aGVuIG1vZGFsIHdpbmRvdyBpcyBvcGVuICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iLCJqdy1tb2RhbCB7XG4gIC8qIG1vZGFscyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgZGlzcGxheTogbm9uZTtcbn1cbmp3LW1vZGFsIC5qdy1tb2RhbCB7XG4gIC8qIG1vZGFsIGNvbnRhaW5lciBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICAvKiB6LWluZGV4IG11c3QgYmUgaGlnaGVyIHRoYW4gLmp3LW1vZGFsLWJhY2tncm91bmQgKi9cbiAgei1pbmRleDogMTAwMDtcbiAgLyogZW5hYmxlcyBzY3JvbGxpbmcgZm9yIHRhbGwgbW9kYWxzICovXG4gIG92ZXJmbG93OiBhdXRvO1xufVxuanctbW9kYWwgLmp3LW1vZGFsIC5qdy1tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgLyogbWFyZ2luIGV4cG9zZXMgcGFydCBvZiB0aGUgbW9kYWwgYmFja2dyb3VuZCAqL1xuICBtYXJnaW46IDQwcHg7XG59XG5qdy1tb2RhbCAuanctbW9kYWwtYmFja2dyb3VuZCB7XG4gIC8qIG1vZGFsIGJhY2tncm91bmQgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgLyogc2VtaS10cmFuc3BhcmVudCBibGFjayAgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC43NTtcbiAgLyogei1pbmRleCBtdXN0IGJlIGJlbG93IC5qdy1tb2RhbCBhbmQgYWJvdmUgZXZlcnl0aGluZyBlbHNlICAqL1xuICB6LWluZGV4OiA5MDA7XG59XG5ib2R5Lmp3LW1vZGFsLW9wZW4ge1xuICAvKiBib2R5IG92ZXJmbG93IGlzIGhpZGRlbiB0byBoaWRlIG1haW4gc2Nyb2xsYmFyIHdoZW4gbW9kYWwgd2luZG93IGlzIG9wZW4gKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'jw-modal',
          templateUrl: 'modal.component.html',
          styleUrls: ['modal.component.less'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/_modal/modal.module.ts":
  /*!****************************************!*\
    !*** ./src/app/_modal/modal.module.ts ***!
    \****************************************/

  /*! exports provided: ModalModule */

  /***/
  function srcApp_modalModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalModule", function () {
      return ModalModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modal.component */
    "./src/app/_modal/modal.component.ts");

    var ModalModule = function ModalModule() {
      _classCallCheck(this, ModalModule);
    };

    ModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModalModule
    });
    ModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModalModule_Factory(t) {
        return new (t || ModalModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalModule, {
        declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]],
          exports: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/_modal/modal.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/_modal/modal.service.ts ***!
    \*****************************************/

  /*! exports provided: ModalService */

  /***/
  function srcApp_modalModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalService", function () {
      return ModalService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ModalService = /*#__PURE__*/function () {
      function ModalService() {
        _classCallCheck(this, ModalService);

        this.modals = [];
      }

      _createClass(ModalService, [{
        key: "add",
        value: function add(modal) {
          // add modal to array of active modals
          this.modals.push(modal);
        }
      }, {
        key: "remove",
        value: function remove(id) {
          // remove modal from array of active modals
          this.modals = this.modals.filter(function (x) {
            return x.id !== id;
          });
        }
      }, {
        key: "open",
        value: function open(id) {
          // open modal specified by id
          var modal = this.modals.find(function (x) {
            return x.id === id;
          });
          modal.open();
        }
      }, {
        key: "close",
        value: function close(id) {
          // close modal specified by id
          var modal = this.modals.find(function (x) {
            return x.id === id;
          });
          modal.close();
        }
      }]);

      return ModalService;
    }();

    ModalService.ɵfac = function ModalService_Factory(t) {
      return new (t || ModalService)();
    };

    ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModalService,
      factory: ModalService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Components/login/login.component */
    "./src/app/Components/login/login.component.ts");
    /* harmony import */


    var _Components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Components/register/register.component */
    "./src/app/Components/register/register.component.ts");
    /* harmony import */


    var _Components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Components/welcome/welcome.component */
    "./src/app/Components/welcome/welcome.component.ts");
    /* harmony import */


    var _Components_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Components/logout/logout.component */
    "./src/app/Components/logout/logout.component.ts");
    /* harmony import */


    var _Services_Guard_route_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Services/Guard/route-guard.service */
    "./src/app/Services/Guard/route-guard.service.ts");
    /* harmony import */


    var _Components_join_meeting_join_meeting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Components/join-meeting/join-meeting.component */
    "./src/app/Components/join-meeting/join-meeting.component.ts");
    /* harmony import */


    var _Components_host_meeting_host_meeting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./Components/host-meeting/host-meeting.component */
    "./src/app/Components/host-meeting/host-meeting.component.ts");
    /* harmony import */


    var _Components_otp_otp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Components/otp/otp.component */
    "./src/app/Components/otp/otp.component.ts");
    /* harmony import */


    var _Components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./Components/forgot-password/forgot-password.component */
    "./src/app/Components/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _Components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./Components/change-password/change-password.component */
    "./src/app/Components/change-password/change-password.component.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: "login"
    }, {
      path: 'login',
      component: _Components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'register',
      component: _Components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }, {
      path: 'welcome',
      component: _Components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"],
      canActivate: [_Services_Guard_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, {
      path: 'logout',
      component: _Components_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"],
      canActivate: [_Services_Guard_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, {
      path: 'joinMeeting',
      component: _Components_join_meeting_join_meeting_component__WEBPACK_IMPORTED_MODULE_7__["JoinMeetingComponent"],
      canActivate: [_Services_Guard_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, {
      path: 'hostMeeting',
      component: _Components_host_meeting_host_meeting_component__WEBPACK_IMPORTED_MODULE_8__["HostMeetingComponent"],
      canActivate: [_Services_Guard_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, {
      path: 'otp',
      component: _Components_otp_otp_component__WEBPACK_IMPORTED_MODULE_9__["OtpComponent"]
    }, {
      path: 'forgotpassword',
      component: _Components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__["ForgotPasswordComponent"]
    }, {
      path: 'changePassword',
      component: _Components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_11__["ChangePasswordComponent"],
      canActivate: [_Services_Guard_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Components/header/header.component */
    "./src/app/Components/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Components/footer/footer.component */
    "./src/app/Components/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Umbeo Technologies';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        }
      },
      directives: [_Components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.constant.ts":
  /*!*********************************!*\
    !*** ./src/app/app.constant.ts ***!
    \*********************************/

  /*! exports provided: URI */

  /***/
  function srcAppAppConstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "URI", function () {
      return URI;
    }); // export const URI= "http://Ummodi-env.eba-tt5qhrb5.us-east-1.elasticbeanstalk.com:8080";
    // export const URI= "http://localhost:8080";


    var URI = "http://umbeoapploadbalancer-1151668968.us-east-2.elb.amazonaws.com";
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _Components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Components/register/register.component */
    "./src/app/Components/register/register.component.ts");
    /* harmony import */


    var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Components/login/login.component */
    "./src/app/Components/login/login.component.ts");
    /* harmony import */


    var _Components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Components/header/header.component */
    "./src/app/Components/header/header.component.ts");
    /* harmony import */


    var _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Components/footer/footer.component */
    "./src/app/Components/footer/footer.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _Components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Components/welcome/welcome.component */
    "./src/app/Components/welcome/welcome.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _Components_logout_logout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./Components/logout/logout.component */
    "./src/app/Components/logout/logout.component.ts");
    /* harmony import */


    var _Services_Interceptors_http_interceptor_jwt_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./Services/Interceptors/http-interceptor-jwt.service */
    "./src/app/Services/Interceptors/http-interceptor-jwt.service.ts");
    /* harmony import */


    var _modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./_modal */
    "./src/app/_modal/index.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _Components_join_meeting_join_meeting_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./Components/join-meeting/join-meeting.component */
    "./src/app/Components/join-meeting/join-meeting.component.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _Components_host_meeting_host_meeting_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./Components/host-meeting/host-meeting.component */
    "./src/app/Components/host-meeting/host-meeting.component.ts");
    /* harmony import */


    var _Components_otp_otp_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./Components/otp/otp.component */
    "./src/app/Components/otp/otp.component.ts");
    /* harmony import */


    var _Components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./Components/forgot-password/forgot-password.component */
    "./src/app/Components/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _Components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./Components/change-password/change-password.component */
    "./src/app/Components/change-password/change-password.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _Services_Interceptors_http_interceptor_jwt_service__WEBPACK_IMPORTED_MODULE_12__["HttpInterceptorJwtService"],
        multi: true
      }, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_16__["CookieService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _Components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], _Components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _Components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _Components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"], _Components_logout_logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"], _Components_join_meeting_join_meeting_component__WEBPACK_IMPORTED_MODULE_15__["JoinMeetingComponent"], _Components_host_meeting_host_meeting_component__WEBPACK_IMPORTED_MODULE_17__["HostMeetingComponent"], _Components_otp_otp_component__WEBPACK_IMPORTED_MODULE_18__["OtpComponent"], _Components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_19__["ForgotPasswordComponent"], _Components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_20__["ChangePasswordComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _Components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], _Components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _Components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _Components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"], _Components_logout_logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"], _Components_join_meeting_join_meeting_component__WEBPACK_IMPORTED_MODULE_15__["JoinMeetingComponent"], _Components_host_meeting_host_meeting_component__WEBPACK_IMPORTED_MODULE_17__["HostMeetingComponent"], _Components_otp_otp_component__WEBPACK_IMPORTED_MODULE_18__["OtpComponent"], _Components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_19__["ForgotPasswordComponent"], _Components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_20__["ChangePasswordComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: _Services_Interceptors_http_interceptor_jwt_service__WEBPACK_IMPORTED_MODULE_12__["HttpInterceptorJwtService"],
            multi: true
          }, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_16__["CookieService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\hp\Desktop\Node JS\UmbeoProject\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map