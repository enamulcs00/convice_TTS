(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./src/$$_lazy_route_resource lazy recursive":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function src$$_lazy_route_resourceLazyRecursive(module, exports) {
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
      webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: Approutes */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Approutes", function () {
        return Approutes;
      });
      /* harmony import */


      var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layouts/full/full.component */
      "./src/app/layouts/full/full.component.ts");
      /* harmony import */


      var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layouts/blank/blank.component */
      "./src/app/layouts/blank/blank.component.ts");
      /* harmony import */


      var _privacylink_privacylink_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./privacylink/privacylink.component */
      "./src/app/privacylink/privacylink.component.ts");
      /* harmony import */


      var _supportlink_supportlink_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./supportlink/supportlink.component */
      "./src/app/supportlink/supportlink.component.ts");

      var Approutes = [{
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__["FullComponent"],
        children: [{
          path: '',
          redirectTo: '',
          pathMatch: 'full'
        }, {
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | dashboards-dashboard-module */
            [__webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module~pages-pages-module"), __webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module~pages-pages-module"), __webpack_require__.e("default~dashboards-dashboard-module~pages-pages-module~table-tables-module"), __webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module~form-forms-module"), __webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module"), __webpack_require__.e("dashboards-dashboard-module")]).then(__webpack_require__.bind(null,
            /*! ./dashboards/dashboard.module */
            "./src/app/dashboards/dashboard.module.ts")).then(function (m) {
              return m.DashboardModule;
            });
          }
        }, {
          path: 'starter',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | starter-starter-module */
            "starter-starter-module").then(__webpack_require__.bind(null,
            /*! ./starter/starter.module */
            "./src/app/starter/starter.module.ts")).then(function (m) {
              return m.StarterModule;
            });
          }
        }, {
          path: 'component',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | component-component-module */
            "component-component-module").then(__webpack_require__.bind(null,
            /*! ./component/component.module */
            "./src/app/component/component.module.ts")).then(function (m) {
              return m.ComponentsModule;
            });
          }
        }, {
          path: 'cards',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | cards-cards-module */
            "cards-cards-module").then(__webpack_require__.bind(null,
            /*! ./cards/cards.module */
            "./src/app/cards/cards.module.ts")).then(function (m) {
              return m.CardsModule;
            });
          }
        }, {
          path: 'icons',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | icons-icons-module */
            "icons-icons-module").then(__webpack_require__.bind(null,
            /*! ./icons/icons.module */
            "./src/app/icons/icons.module.ts")).then(function (m) {
              return m.IconsModule;
            });
          }
        }, {
          path: 'forms',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | form-forms-module */
            [__webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module~form-forms-module"), __webpack_require__.e("form-forms-module")]).then(__webpack_require__.bind(null,
            /*! ./form/forms.module */
            "./src/app/form/forms.module.ts")).then(function (m) {
              return m.FormModule;
            });
          }
        }, {
          path: 'auth',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | authentication-authentication-module */
            [__webpack_require__.e("default~authentication-authentication-module~pages-pages-module"), __webpack_require__.e("authentication-authentication-module")]).then(__webpack_require__.bind(null,
            /*! ./authentication/authentication.module */
            "./src/app/authentication/authentication.module.ts")).then(function (m) {
              return m.AuthenticationModule;
            });
          }
        }, {
          path: 'tables',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | table-tables-module */
            [__webpack_require__.e("default~dashboards-dashboard-module~pages-pages-module~table-tables-module"), __webpack_require__.e("table-tables-module")]).then(__webpack_require__.bind(null,
            /*! ./table/tables.module */
            "./src/app/table/tables.module.ts")).then(function (m) {
              return m.TablesModule;
            });
          }
        }, {
          path: 'charts',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | charts-charts-module */
            [__webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module~pages-pages-module"), __webpack_require__.e("charts-charts-module")]).then(__webpack_require__.bind(null,
            /*! ./charts/charts.module */
            "./src/app/charts/charts.module.ts")).then(function (m) {
              return m.ChartModule;
            });
          }
        }, {
          path: 'widgets',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | widgets-widgets-module */
            "widgets-widgets-module").then(__webpack_require__.bind(null,
            /*! ./widgets/widgets.module */
            "./src/app/widgets/widgets.module.ts")).then(function (m) {
              return m.WidgetsModule;
            });
          }
        }, {
          path: 'ecom',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | ecommerce-ecom-module */
            "ecommerce-ecom-module").then(__webpack_require__.bind(null,
            /*! ./ecommerce/ecom.module */
            "./src/app/ecommerce/ecom.module.ts")).then(function (m) {
              return m.EcomModule;
            });
          }
        }, {
          path: 'timeline',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | timeline-timeline-module */
            "timeline-timeline-module").then(__webpack_require__.bind(null,
            /*! ./timeline/timeline.module */
            "./src/app/timeline/timeline.module.ts")).then(function (m) {
              return m.TimelineModule;
            });
          }
        }, {
          path: 'extra-component',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | extra-component-extra-component-module */
            "extra-component-extra-component-module").then(__webpack_require__.bind(null,
            /*! ./extra-component/extra-component.module */
            "./src/app/extra-component/extra-component.module.ts")).then(function (m) {
              return m.ExtraComponentModule;
            });
          }
        }, {
          path: 'apps',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | apps-apps-module */
            [__webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module~pages-pages-module"), __webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module~form-forms-module"), __webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module"), __webpack_require__.e("default~apps-apps-module~pages-pages-module"), __webpack_require__.e("apps-apps-module")]).then(__webpack_require__.bind(null,
            /*! ./apps/apps.module */
            "./src/app/apps/apps.module.ts")).then(function (m) {
              return m.AppsModule;
            });
          }
        }, {
          path: 'apps/email',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | apps-email-mail-module */
            "apps-email-mail-module").then(__webpack_require__.bind(null,
            /*! ./apps/email/mail.module */
            "./src/app/apps/email/mail.module.ts")).then(function (m) {
              return m.MailModule;
            });
          }
        }, {
          path: 'maps',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | maps-maps-module */
            "maps-maps-module").then(__webpack_require__.bind(null,
            /*! ./maps/maps.module */
            "./src/app/maps/maps.module.ts")).then(function (m) {
              return m.MapsModule;
            });
          }
        }, {
          path: 'pages',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-pages-module */
            [__webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module~pages-pages-module"), __webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module~pages-pages-module"), __webpack_require__.e("default~dashboards-dashboard-module~pages-pages-module~table-tables-module"), __webpack_require__.e("default~authentication-authentication-module~pages-pages-module"), __webpack_require__.e("default~apps-apps-module~pages-pages-module"), __webpack_require__.e("pages-pages-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/pages.module */
            "./src/app/pages/pages.module.ts")).then(function (m) {
              return m.PagesModule;
            });
          }
        }]
      }, {
        path: '',
        component: _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__["BlankComponent"],
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | authentication-authentication-module */
            [__webpack_require__.e("default~authentication-authentication-module~pages-pages-module"), __webpack_require__.e("authentication-authentication-module")]).then(__webpack_require__.bind(null,
            /*! ./authentication/authentication.module */
            "./src/app/authentication/authentication.module.ts")).then(function (m) {
              return m.AuthenticationModule;
            });
          }
        }]
      }, {
        path: 'supportlink',
        redirectTo: 'supportlink'
      }, {
        path: 'privacylink',
        component: _privacylink_privacylink_component__WEBPACK_IMPORTED_MODULE_2__["PrivacylinkComponent"]
      }, {
        path: 'supportlink',
        component: _supportlink_supportlink_component__WEBPACK_IMPORTED_MODULE_3__["SupportlinkComponent"]
      }];
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/spinner.component */
      "./src/app/shared/spinner.component.ts");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'app';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]],
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


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
      /* harmony import */


      var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./layouts/full/full.component */
      "./src/app/layouts/full/full.component.ts");
      /* harmony import */


      var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./layouts/blank/blank.component */
      "./src/app/layouts/blank/blank.component.ts");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng2-search-filter */
      "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
      /* harmony import */


      var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./shared/header-navigation/navigation.component */
      "./src/app/shared/header-navigation/navigation.component.ts");
      /* harmony import */


      var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./shared/sidebar/sidebar.component */
      "./src/app/shared/sidebar/sidebar.component.ts");
      /* harmony import */


      var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./shared/breadcrumb/breadcrumb.component */
      "./src/app/shared/breadcrumb/breadcrumb.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./shared/spinner.component */
      "./src/app/shared/spinner.component.ts");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var _privacylink_privacylink_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./privacylink/privacylink.component */
      "./src/app/privacylink/privacylink.component.ts");
      /* harmony import */


      var _supportlink_supportlink_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./supportlink/supportlink.component */
      "./src/app/supportlink/supportlink.component.ts");

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true,
        wheelSpeed: 1,
        wheelPropagation: true,
        minScrollbarLength: 20
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PERFECT_SCROLLBAR_CONFIG"],
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_18__["Approutes"], {
          useHash: false
        }), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PerfectScrollbarModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipeModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["NgMultiSelectDropDownModule"].forRoot(), _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
          apiKey: 'AIzaSyBUb3jDWJQ28vDJhuQZxkC0NXr_zycm8D0'
        }), _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_20__["SpinnerComponent"], _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_11__["FullComponent"], _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_12__["BlankComponent"], _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_15__["NavigationComponent"], _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"], _privacylink_privacylink_component__WEBPACK_IMPORTED_MODULE_23__["PrivacylinkComponent"], _supportlink_supportlink_component__WEBPACK_IMPORTED_MODULE_24__["SupportlinkComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PerfectScrollbarModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipeModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["NgMultiSelectDropDownModule"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_20__["SpinnerComponent"], _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_11__["FullComponent"], _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_12__["BlankComponent"], _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_15__["NavigationComponent"], _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"], _privacylink_privacylink_component__WEBPACK_IMPORTED_MODULE_23__["PrivacylinkComponent"], _supportlink_supportlink_component__WEBPACK_IMPORTED_MODULE_24__["SupportlinkComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_18__["Approutes"], {
              useHash: false
            }), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PerfectScrollbarModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipeModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["NgMultiSelectDropDownModule"].forRoot(), _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
              apiKey: 'AIzaSyBUb3jDWJQ28vDJhuQZxkC0NXr_zycm8D0'
            }), _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"]],
            providers: [{
              provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PERFECT_SCROLLBAR_CONFIG"],
              useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }, {
              provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
              useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/convservice.service.ts":
    /*!****************************************!*\
      !*** ./src/app/convservice.service.ts ***!
      \****************************************/

    /*! exports provided: ConvserviceService */

    /***/
    function srcAppConvserviceServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConvserviceService", function () {
        return ConvserviceService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var ConvserviceService = /*#__PURE__*/function () {
        function ConvserviceService(http) {
          _classCallCheck(this, ConvserviceService);

          this.http = http;
          this.search_value = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
          this.$searchvalue = this.search_value.asObservable();
          this.baseUrl = 'https://api.convoiceapp.com/api/v1/';
        }

        _createClass(ConvserviceService, [{
          key: "login",
          value: function login(data) {
            return this.http.post("".concat(this.baseUrl, "admin/login"), data);
          } //******* Profile ********/

        }, {
          key: "getProfile",
          value: function getProfile() {
            var authorization = localStorage.getItem('token');
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Authorization': authorization
              })
            }; //Authtoken//

            return this.http.get("".concat(this.baseUrl, "admin/getProfile"), httpOptions);
          }
        }, {
          key: "updateProfile",
          value: function updateProfile(data) {
            //Auth token//
            var authorization = localStorage.getItem('token');
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Authorization': authorization
              })
            };
            return this.http.put("".concat(this.baseUrl, "admin/updateProfile"), data, httpOptions);
          }
        }, {
          key: "uploadPro",
          value: function uploadPro(data) {
            var authorization = localStorage.getItem('token');
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Authorization': authorization
              })
            };
            return this.http.post("".concat(this.baseUrl, "admin/uploadFile"), data, httpOptions);
          } // ************  ************** //

        }, {
          key: "changePass",
          value: function changePass(data) {
            var authorization = localStorage.getItem('token');
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Authorization': authorization
              })
            };
            return this.http.post("".concat(this.baseUrl, "admin/changePassword"), data, httpOptions);
          }
        }, {
          key: "Forgotpassword",
          value: function Forgotpassword(data) {
            return this.http.post("".concat(this.baseUrl, "admin/forgotPassword"), data);
          }
        }, {
          key: "searchdata",
          value: function searchdata() {
            this.search_value.next('12');
          }
        }, {
          key: "Allusers",
          value: function Allusers(data) {
            var authorization = localStorage.getItem('token');
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Authorization': authorization
              })
            };
            return this.http.post("".concat(this.baseUrl, "admin/allUsers"), data, httpOptions);
          }
        }, {
          key: "DeleteUsers",
          value: function DeleteUsers(id) {
            var authorization = localStorage.getItem('token');
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Authorization': authorization
              })
            };
            return this.http["delete"]("".concat(this.baseUrl, "admin/users/").concat(id), httpOptions);
          }
        }, {
          key: "EditUsers",
          value: function EditUsers(id, data) {
            var authorization = localStorage.getItem('token');
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Authorization': authorization
              })
            };
            return this.http.put("".concat(this.baseUrl, "admin/users/").concat(id), data, httpOptions);
          }
        }, {
          key: "addUser",
          value: function addUser(data) {
            var authorization = localStorage.getItem('token');
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Authorization': authorization
              })
            };
            return this.http.post("".concat(this.baseUrl, "admin/users"), data, httpOptions);
          }
        }, {
          key: "changeStatus",
          value: function changeStatus(id) {
            return this.http.post("".concat(this.baseUrl, "admin/changeStatus/").concat(id), '');
          }
        }, {
          key: "setCmscond",
          value: function setCmscond(data) {
            var authorization = localStorage.getItem('token');
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Authorization': authorization
              })
            };
            return this.http.post("".concat(this.baseUrl, "admin/setSettings"), data, httpOptions);
          }
        }, {
          key: "getTerms",
          value: function getTerms() {
            var authorization = localStorage.getItem('token');
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Authorization': authorization
              })
            };
            return this.http.get("".concat(this.baseUrl, "admin/getSettings"), httpOptions);
          }
        }, {
          key: "getdashboard",
          value: function getdashboard() {
            var authorization = localStorage.getItem('token');
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Authorization': authorization
              })
            };
            return this.http.post("".concat(this.baseUrl, "admin/dashboard"), '', httpOptions);
          }
        }, {
          key: "getUserslist",
          value: function getUserslist(data) {
            var authorization = localStorage.getItem('token');
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Authorization': authorization
              })
            };
            return this.http.post("".concat(this.baseUrl, "admin/dashboard/user/").concat(data.type), '', httpOptions);
          }
        }, {
          key: "getPackagelist",
          value: function getPackagelist(data) {
            var authorization = localStorage.getItem('token');
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Authorization': authorization
              })
            };
            return this.http.post("".concat(this.baseUrl, "admin/dashboard/package/").concat(data.type), '', httpOptions);
          }
        }]);

        return ConvserviceService;
      }();

      ConvserviceService.ɵfac = function ConvserviceService_Factory(t) {
        return new (t || ConvserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      ConvserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ConvserviceService,
        factory: ConvserviceService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConvserviceService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/layouts/blank/blank.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/layouts/blank/blank.component.ts ***!
      \**************************************************/

    /*! exports provided: BlankComponent */

    /***/
    function srcAppLayoutsBlankBlankComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlankComponent", function () {
        return BlankComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var BlankComponent = function BlankComponent() {
        _classCallCheck(this, BlankComponent);
      };

      BlankComponent.ɵfac = function BlankComponent_Factory(t) {
        return new (t || BlankComponent)();
      };

      BlankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BlankComponent,
        selectors: [["app-blank-layout"]],
        decls: 1,
        vars: 0,
        template: function BlankComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-blank-layout',
            templateUrl: './blank.component.html',
            styleUrls: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/layouts/full/full.component.ts":
    /*!************************************************!*\
      !*** ./src/app/layouts/full/full.component.ts ***!
      \************************************************/

    /*! exports provided: FullComponent */

    /***/
    function srcAppLayoutsFullFullComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullComponent", function () {
        return FullComponent;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/header-navigation/navigation.component */
      "./src/app/shared/header-navigation/navigation.component.ts");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/sidebar/sidebar.component */
      "./src/app/shared/sidebar/sidebar.component.ts");
      /* harmony import */


      var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/breadcrumb/breadcrumb.component */
      "./src/app/shared/breadcrumb/breadcrumb.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      function FullComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 28);
        }
      }

      function FullComponent_ng_template_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Layout Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_31_Template_input_change_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.options.theme = ctx_r2.options.theme == "light" ? "dark" : "light";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dark Theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_31_Template_input_change_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.options.sidebarpos = ctx_r4.options.sidebarpos == "fixed" ? "absolute" : "fixed";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Fixed Sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_31_Template_input_change_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.options.headerpos = ctx_r5.options.headerpos == "fixed" ? "absolute" : "fixed";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Fixed Header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_31_Template_input_change_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.options.boxed = ctx_r6.options.boxed == "full" ? "boxed" : "full";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Boxed Layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_31_Template_input_change_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.options.dir = ctx_r7.options.dir == "rtl" ? "ltr" : "rtl";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "RTL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sidebar Types");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_ng_template_31_Template_input_ngModelChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.options.sidebartype = $event;
          })("change", function FullComponent_ng_template_31_Template_input_change_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.options.sidebartype = "mini-sidebar";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Mini Sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_ng_template_31_Template_input_ngModelChange_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.options.sidebartype = $event;
          })("change", function FullComponent_ng_template_31_Template_input_change_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.options.sidebartype = "iconbar";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Icon Sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_ng_template_31_Template_input_ngModelChange_35_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.options.sidebartype = $event;
          })("change", function FullComponent_ng_template_31_Template_input_change_35_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.options.sidebartype = "overlay";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Overlay Sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_ng_template_31_Template_input_ngModelChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.options.sidebartype = $event;
          })("change", function FullComponent_ng_template_31_Template_input_change_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.options.sidebartype = "full";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Full Sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Logo Backgrounds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.options.logobg = "skin1";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_49_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.options.logobg = "skin2";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_51_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.options.logobg = "skin3";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_53_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.options.logobg = "skin4";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_55_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.options.logobg = "skin5";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_57_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.options.logobg = "skin6";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Navbar Backgrounds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_63_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.options.navbarbg = "skin1";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_65_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.options.navbarbg = "skin2";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_67_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.options.navbarbg = "skin3";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_69_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.options.navbarbg = "skin4";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_71_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.options.navbarbg = "skin5";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_73_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.options.navbarbg = "skin6";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Sidebar Backgrounds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "ul", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_79_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.options.sidebarbg = "skin1";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_81_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.options.sidebarbg = "skin2";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_83_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.options.sidebarbg = "skin3";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_85_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.options.sidebarbg = "skin4";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_87_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.options.sidebarbg = "skin5";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_89_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.options.sidebarbg = "skin6";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r1.options.theme == "dark" ? "checked" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r1.options.sidebarpos == "fixed" ? "checked" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r1.options.headerpos == "fixed" ? "checked" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r1.options.boxed == "boxed" ? "checked" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r1.options.dir == "rtl" ? "checked" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.options.sidebartype);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.options.sidebartype);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.options.sidebartype);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.options.sidebartype);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "show-sidebar": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "show-service-panel": a0
        };
      };

      var FullComponent = /*#__PURE__*/function () {
        function FullComponent(router) {
          _classCallCheck(this, FullComponent);

          this.router = router;
          this.config = {};
          this.tabStatus = 'justified';
          this.isCollapsed = false;
          this.showSettings = false;
          this.showMobileMenu = false;
          this.expandLogo = false;
          this.options = {
            theme: 'light',
            dir: 'ltr',
            layout: 'vertical',
            sidebartype: 'full',
            sidebarpos: 'fixed',
            headerpos: 'fixed',
            boxed: 'full',
            navbarbg: 'skin6',
            sidebarbg: 'skin5',
            logobg: 'skin5' // six possible values: skin(1/2/3/4/5/6)

          };
        }

        _createClass(FullComponent, [{
          key: "Logo",
          value: function Logo() {
            this.expandLogo = !this.expandLogo;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.router.url === '/') {
              this.router.navigate(['/dashboard']);
            }

            this.defaultSidebar = this.options.sidebartype;
            this.handleSidebar();
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.handleSidebar();
          }
        }, {
          key: "handleSidebar",
          value: function handleSidebar() {
            this.innerWidth = window.innerWidth;

            switch (this.defaultSidebar) {
              case 'full':
              case 'iconbar':
                if (this.innerWidth < 1170) {
                  this.options.sidebartype = 'mini-sidebar';
                } else {
                  this.options.sidebartype = this.defaultSidebar;
                }

                break;

              case 'overlay':
                if (this.innerWidth < 767) {
                  this.options.sidebartype = 'mini-sidebar';
                } else {
                  this.options.sidebartype = this.defaultSidebar;
                }

                break;

              default:
            }
          }
        }, {
          key: "toggleSidebarType",
          value: function toggleSidebarType() {
            switch (this.options.sidebartype) {
              case 'full':
              case 'iconbar':
                this.options.sidebartype = 'mini-sidebar';
                break;

              case 'overlay':
                this.showMobileMenu = !this.showMobileMenu;
                break;

              case 'mini-sidebar':
                if (this.defaultSidebar === 'mini-sidebar') {
                  this.options.sidebartype = 'full';
                } else {
                  this.options.sidebartype = this.defaultSidebar;
                }

                break;

              default:
            }
          }
        }]);

        return FullComponent;
      }();

      FullComponent.ɵfac = function FullComponent_Factory(t) {
        return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      FullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FullComponent,
        selectors: [["app-full-layout"]],
        hostBindings: function FullComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function FullComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 33,
        vars: 25,
        consts: [["id", "main-wrapper", "data-layout", "vertical", "data-sidebartype", "full", 3, "ngClass", "dir"], [1, "topbar"], [1, "d-flex", "top-navbar", "navbar-expand-md", 3, "ngClass"], [1, "navbar-header", 3, "ngClass"], ["href", "javascript:void(0)", 1, "nav-toggler", "waves-effect", "waves-light", "d-block", "d-md-none", 3, "click"], [3, "ngClass"], ["routerLink", "javascript:void()", 1, "navbar-brand", "bg-white"], [1, "logo-icon"], ["width", "50px", "src", "assets/images/logo.png", "alt", "homepage", 1, "light-logo", "logo-sidebar"], [1, "logo-text"], ["src", "assets/images/Convoice.png", "alt", "homepage", 1, "logo-content"], ["href", "javascript:void(0)", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", 1, "topbartoggler", "d-block", "d-md-none", "waves-effect", "waves-light", 3, "click"], [1, "ti-more"], ["id", "navbarSupportedContent", 1, "navbar-collapse", "collapse", 3, "ngbCollapse"], [1, "w-100", 3, "toggleSidebar"], [1, "left-sidebar", "sidebar-bg", 3, "mouseover", "mouseout"], [1, "scroll-sidebar", 3, "perfectScrollbar"], [1, "page-wrapper"], [1, "container-fluid"], [1, "footer", "text-center"], [1, "customizer", "d-none", 3, "ngClass"], ["href", "javascript:void(0)", 1, "service-panel-toggle", 3, "click"], [1, "fa", "fa-spin", "fa-cog"], [1, "customizer-body", "custom-pills", 3, "perfectScrollbar"], ["type", "pills", 3, "justify"], ["ngbTabTitle", ""], ["ngbTabContent", ""], [1, "chat-windows"], [1, "mdi", "mdi-wrench", "font-20"], [1, "p-15", "border-bottom"], [1, "font-medium", "m-b-20", "m-t-10"], [1, "custom-control", "custom-checkbox", "m-t-10"], ["type", "checkbox", "name", "theme-view", "id", "theme-view", 1, "custom-control-input", 3, "change"], ["for", "theme-view", 1, "custom-control-label"], ["type", "checkbox", "name", "sidebar-position", "id", "sidebar-position", 1, "custom-control-input", 3, "change"], ["for", "sidebar-position", 1, "custom-control-label"], ["type", "checkbox", "name", "header-position", "id", "header-position", 1, "custom-control-input", 3, "change"], ["for", "header-position", 1, "custom-control-label"], ["type", "checkbox", "name", "boxed-layout", "id", "boxed-layout", 1, "custom-control-input", 3, "change"], ["for", "boxed-layout", 1, "custom-control-label"], ["type", "checkbox", "name", "rtl-layout", "id", "rtl-layout", 1, "custom-control-input", 3, "change"], ["for", "rtl-layout", 1, "custom-control-label"], [1, "custom-control", "custom-radio", "m-t-10"], ["type", "radio", "name", "sidebar", "value", "mini-sidebar", "id", "minisidebar", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "minisidebar", 1, "custom-control-label"], ["type", "radio", "name", "sidebar", "value", "iconbar", "id", "iconsidebar", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "iconsidebar", 1, "custom-control-label"], ["type", "radio", "name", "sidebar", "value", "overlay", "id", "overlaysidebar", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "overlaysidebar", 1, "custom-control-label"], ["type", "radio", "name", "sidebar", "value", "full", "id", "fullsidebar", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "fullsidebar", 1, "custom-control-label"], [1, "theme-color"], [1, "theme-item"], ["href", "javascript:void(0)", "data-logobg", "skin1", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin2", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin3", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin4", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin5", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin6", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin1", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin2", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin3", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin4", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin5", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin6", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin1", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin2", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin3", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin4", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin5", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin6", 1, "theme-link", 3, "click"]],
        template: function FullComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_a_click_4_listener() {
              return ctx.showMobileMenu = !ctx.showMobileMenu;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_a_click_11_listener() {
              return ctx.isCollapsed = !ctx.isCollapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-navigation", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleSidebar", function FullComponent_Template_app_navigation_toggleSidebar_14_listener() {
              return ctx.toggleSidebarType();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "aside", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function FullComponent_Template_aside_mouseover_15_listener() {
              return ctx.Logo();
            })("mouseout", function FullComponent_Template_aside_mouseout_15_listener() {
              return ctx.Logo();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "footer", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Copyright \xA9 Convoice 2021 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "aside", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_a_click_25_listener() {
              return ctx.showSettings = !ctx.showSettings;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ngb-tabset", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, FullComponent_ng_template_30_Template, 1, 0, "ng-template", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, FullComponent_ng_template_31_Template, 90, 9, "ng-template", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.showMobileMenu))("dir", ctx.options.dir);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-theme", ctx.options.theme)("data-layout", ctx.options.layout)("data-sidebartype", ctx.options.sidebartype)("data-sidebar-position", ctx.options.sidebarpos)("data-header-position", ctx.options.headerpos)("data-boxed-layout", ctx.options.boxed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-navbarbg", ctx.options.navbarbg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.options.navbarbg == "skin6" ? "navbar-light" : "navbar-dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.expandLogo ? "expand-logo" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-logobg", ctx.options.logobg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showMobileMenu ? "ti-close" : "ti-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", !ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-navbarbg", ctx.options.navbarbg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-sidebarbg", ctx.options.sidebarbg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.config);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, ctx.showSettings));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.config);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("justify", ctx.tabStatus);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Dir"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapse"], _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarDirective"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]],
        styles: [".logo-svg[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  margin-right: 5px;\n}\n\n.logo-svg[_ngcontent-%COMP%]   .st0[_ngcontent-%COMP%] {\n  fill: #FBB03B;\n}\n\n.logo-content[_ngcontent-%COMP%] {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9mdWxsL2Z1bGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUN6Qjs7QUFKSTtFQUlTLGFBQVk7QUFJekI7O0FBQUk7RUFDSSxZQUFXO0FBR25CIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9mdWxsL2Z1bGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLmxvZ28tc3Zne1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAuc3Qwe2ZpbGw6I0ZCQjAzQjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gICAgLmxvZ28tY29udGVudHtcclxuICAgICAgICB3aWR0aDoxMjBweDtcclxuICAgIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-full-layout',
            templateUrl: './full.component.html',
            styleUrls: ['./full.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, {
          onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/privacylink/privacylink.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/privacylink/privacylink.component.ts ***!
      \******************************************************/

    /*! exports provided: PrivacylinkComponent */

    /***/
    function srcAppPrivacylinkPrivacylinkComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacylinkComponent", function () {
        return PrivacylinkComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var PrivacylinkComponent = /*#__PURE__*/function () {
        function PrivacylinkComponent(http) {
          _classCallCheck(this, PrivacylinkComponent);

          this.http = http;
        }

        _createClass(PrivacylinkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.http.get("https://api.convoiceapp.com/api/v1/admin/getSettings").subscribe(function (res) {
              console.log(res);
              _this.termscond = res.data.find(function (i) {
                return i.key == 'Privacy';
              }).value;
            });
          }
        }]);

        return PrivacylinkComponent;
      }();

      PrivacylinkComponent.ɵfac = function PrivacylinkComponent_Factory(t) {
        return new (t || PrivacylinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      PrivacylinkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PrivacylinkComponent,
        selectors: [["app-privacylink"]],
        decls: 4,
        vars: 0,
        consts: [[2, "text-align", "center"]],
        template: function PrivacylinkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Privacy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Privacy Policy Updated at 2021-03-12 Convoice (\u201Cwe,\u201D \u201Cour,\u201D or \u201Cus\u201D) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Convoice. This Privacy Policy applies to our website, and its associated subdomains (collectively, our \u201CService\u201D) alongside our application, Convoice. By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service. Definitions and key terms To help explain things as clearly as possible in this Privacy Policy, every time any of these terms are referenced, are strictly defined as: -Cookie: small amount of data generated by a website and saved by your web browser. It is used to identify your browser, provide analytics, remember information about you such as your language preference or login information. -Company: when this policy mentions \u201CCompany,\u201D \u201Cwe,\u201D \u201Cus,\u201D or \u201Cour,\u201D it refers to Convoice, (Bahrain ) that is responsible for your information under this Privacy Policy. -Country: where Convoice or the owners/founders of Convoice are based, in this case is bahrain -Customer: refers to the company, organization or person that signs up to use the Convoice Service to manage the relationships with your consumers or service users. -Device: any internet connected device such as a phone, tablet, computer or any other device that can be used to visit Convoice and use the services. -IP address: Every device connected to the Internet is assigned a number known as an Internet protocol (IP) address. These numbers are usually assigned in geographic blocks. An IP address can often be used to identify the location from which a device is connecting to the Internet. -Personnel: refers to those individuals who are employed by Convoice or are under contract to perform a service on behalf of one of the parties. -Personal Data: any information that directly, indirectly, or in connection with other information \u2014 including a personal identification number \u2014 allows for the identification or identifiability of a natural person. -Service: refers to the service provided by Convoice as described in the relative terms (if available) and on this platform. -Third-party service: refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you. -Website: Convoice.\"\u2019s\" site, which can be accessed via this URL: convoiceapp.com -You: a person or entity that is registered with Convoice to use the Services. What Information Do We Collect? We collect information from you when you visit our website/app, register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form. -Name / Username -Phone Numbers -Email Addresses -Mailing Addresses -Debit/credit card numbers -Age -Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3lsaW5rL3ByaXZhY3lsaW5rLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacylinkComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-privacylink',
            templateUrl: './privacylink.component.html',
            styleUrls: ['./privacylink.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/breadcrumb/breadcrumb.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
      \***********************************************************/

    /*! exports provided: BreadcrumbComponent */

    /***/
    function srcAppSharedBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
        return BreadcrumbComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function BreadcrumbComponent_ng_template_10_li_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var url_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", url_r1.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](url_r1.title);
        }
      }

      function BreadcrumbComponent_ng_template_10_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var url_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](url_r1.title);
        }
      }

      function BreadcrumbComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BreadcrumbComponent_ng_template_10_li_0_Template, 3, 2, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ng_template_10_li_1_Template, 2, 1, "li", 11);
        }

        if (rf & 2) {
          var last_r2 = ctx.last;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r2);
        }
      }

      var BreadcrumbComponent = /*#__PURE__*/function () {
        function BreadcrumbComponent(router, activatedRoute, titleService) {
          var _this2 = this;

          _classCallCheck(this, BreadcrumbComponent);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.titleService = titleService;
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return _this2.activatedRoute;
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (route) {
            while (route.firstChild) {
              route = route.firstChild;
            }

            return route;
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (route) {
            return route.outlet === 'primary';
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (route) {
            return route.data;
          })).subscribe(function (event) {
            _this2.titleService.setTitle(event['title']);

            _this2.pageInfo = event;
          });
        }

        _createClass(BreadcrumbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BreadcrumbComponent;
      }();

      BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
        return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]));
      };

      BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BreadcrumbComponent,
        selectors: [["app-breadcrumb"]],
        inputs: {
          layout: "layout"
        },
        decls: 11,
        vars: 2,
        consts: [[1, "page-breadcrumb"], [1, "row"], [1, "col-5", "align-self-center"], [1, "page-title"], [1, "d-flex", "align-items-center"], [1, "col-7", "align-self-center"], [1, "d-flex", "no-block", "justify-content-end", "align-items-center"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], ["ngFor", "", 3, "ngForOf"], ["class", "breadcrumb-item", 3, "routerLink", 4, "ngIf"], ["class", "breadcrumb-item active", 4, "ngIf"], [1, "breadcrumb-item", 3, "routerLink"], ["href", "javascript:void(0)"], [1, "breadcrumb-item", "active"]],
        template: function BreadcrumbComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ol", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BreadcrumbComponent_ng_template_10_Template, 2, 2, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageInfo == null ? null : ctx.pageInfo.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageInfo == null ? null : ctx.pageInfo.urls);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-breadcrumb',
            templateUrl: './breadcrumb.component.html'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
          }];
        }, {
          layout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/header-navigation/navigation.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/shared/header-navigation/navigation.component.ts ***!
      \******************************************************************/

    /*! exports provided: NavigationComponent */

    /***/
    function srcAppSharedHeaderNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
        return NavigationComponent;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var src_app_convservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/convservice.service */
      "./src/app/convservice.service.ts");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function NavigationComponent_ng_template_6_a_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bike Booked");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bike ID : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " #4626462 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " is booked ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 10:30 AM ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var notification_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-circle ", notification_r6.btn, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](notification_r6.icon);
        }
      }

      function NavigationComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_ng_template_6_Template_button_click_0_listener() {
            var modal_r4 = ctx.$implicit;
            return modal_r4.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavigationComponent_ng_template_6_a_8_Template, 13, 6, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx_r1.config);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.notifications);
        }
      }

      function NavigationComponent_a_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bike Booked");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bike ID : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " #4626462 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " is booked ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 10:30 AM ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var notification_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-circle ", notification_r8.btn, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](notification_r8.icon);
        }
      }

      function NavigationComponent_a_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bike Booked");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bike ID : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " #4626462 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " is booked ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 10:30 AM ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var notification_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-circle ", notification_r9.btn, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](notification_r9.icon);
        }
      }

      var NavigationComponent = /*#__PURE__*/function () {
        function NavigationComponent(modalService, Srvc, router) {
          var _this3 = this;

          _classCallCheck(this, NavigationComponent);

          this.modalService = modalService;
          this.Srvc = Srvc;
          this.router = router;
          this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.config = {};
          this.showSearch = false; // This is for Notifications

          this.notifications = [{
            btn: 'btn-danger',
            icon: 'ti-link',
            title: 'Luanch Admin',
            subject: 'Just see the my new admin!',
            time: '9:30 AM'
          }, {
            btn: 'btn-success',
            icon: 'ti-calendar',
            title: 'Event today',
            subject: 'Just a reminder that you have event',
            time: '9:10 AM'
          }, {
            btn: 'btn-info',
            icon: 'ti-settings',
            title: 'Settings',
            subject: 'You can customize this template as you want',
            time: '9:08 AM'
          }, {
            btn: 'btn-primary',
            icon: 'ti-user',
            title: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:00 AM'
          }]; // This is for Mymessages

          this.mymessages = [{
            useravatar: 'assets/images/users/1.jpg',
            status: 'online',
            from: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:30 AM'
          }, {
            useravatar: 'assets/images/users/2.jpg',
            status: 'busy',
            from: 'Sonu Nigam',
            subject: 'I have sung a song! See you at',
            time: '9:10 AM'
          }, {
            useravatar: 'assets/images/users/2.jpg',
            status: 'away',
            from: 'Arijit Sinh',
            subject: 'I am a singer!',
            time: '9:08 AM'
          }, {
            useravatar: 'assets/images/users/4.jpg',
            status: 'offline',
            from: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:00 AM'
          }];
          this.Srvc.$searchvalue.subscribe(function (res) {
            _this3.getProfile();
          });
        }

        _createClass(NavigationComponent, [{
          key: "getProfile",
          value: function getProfile() {
            var _this4 = this;

            this.Srvc.getProfile().subscribe(function (res) {
              _this4.name = res.data.fullName;
              _this4.email = res.data.email;
              _this4.profilepic = res.data.image;
            });
          }
        }, {
          key: "addBikeModal",
          value: function addBikeModal(addBike) {
            this.modalService.open(addBike, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'lg',
              backdrop: "static"
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "openBox",
          value: function openBox() {
            var element = document.getElementById("notification");
            element.classList.toggle("sidebar_slide");
          }
        }, {
          key: "closeBox",
          value: function closeBox() {
            var element1 = document.getElementById("arrow-close").parentElement;
            element1.classList.remove("sidebar_slide");
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
          }
        }]);

        return NavigationComponent;
      }();

      NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
        return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_convservice_service__WEBPACK_IMPORTED_MODULE_3__["ConvserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavigationComponent,
        selectors: [["app-navigation"]],
        outputs: {
          toggleSidebar: "toggleSidebar"
        },
        decls: 42,
        vars: 7,
        consts: [[1, "navbar-nav", "float-left", "mr-auto"], [1, "nav-item", "d-none", "d-md-block"], ["href", "javascript:void(0)", "data-sidebartype", "mini-sidebar", 1, "nav-link", "sidebartoggler", "waves-effect", "waves-light", 3, "click"], [1, "sl-icon-menu", "font-20"], [1, "notify"], ["addBike", ""], [1, "navbar-nav", "float-right"], ["ngbDropdown", "", "placement", "bottom-right", 1, "nav-item"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "text-muted", "waves-effect", "waves-dark", "pro-pic"], ["alt", "user", "width", "31", 1, "rounded-circle", 3, "src"], ["ngbDropdownMenu", "", 1, "dropdown-menu-right", "user-dd"], [1, "with-arrow"], [1, "bg-primary"], [1, "d-flex", "no-block", "align-items-center", "p-15", "bg-primary", "text-white", "m-b-10"], [1, ""], ["alt", "user", "width", "60", 1, "img-circle", 3, "src"], [1, "m-l-10"], [1, "m-b-0"], ["routerLink", "pages/profile", 1, "dropdown-item"], [1, "ti-user", "m-r-5", "m-l-5"], ["routerLink", "/changepassword", 1, "dropdown-item"], [1, "fas", "fa-lock", "m-r-5", "m-l-5"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "click"], [1, "fa", "fa-power-off", "m-r-5", "m-l-5"], ["id", "notification", 1, "aside-box", "mailbox", "shadow"], ["href", "javascript:void(0)", "id", "arrow-close", 3, "click"], [1, "mdi", "mdi-close", "font-20"], [1, "list-style-none"], [1, "message-center", "notifications", "pb-5", 3, "perfectScrollbar"], ["href", "javascript:void(0)", "class", "message-item", 4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "drop-title", "bg-primary", "text-white"], [1, "font-light"], [1, "message-center", "notifications", 3, "perfectScrollbar"], ["href", "javascript:void(0)", 1, "message-item"], [1, "mail-contnet"], [1, "message-title"], [1, "mail-desc"], [1, "time"]],
        template: function NavigationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_2_listener() {
              return ctx.toggleSidebar.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavigationComponent_ng_template_6_Template, 9, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " My Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Change Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_30_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "aside", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_35_listener() {
              return ctx.closeBox();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, NavigationComponent_a_40_Template, 13, 6, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, NavigationComponent_a_41_Template, 13, 6, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.profilepic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.profilepic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.config);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        styles: ["@import url(\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\");\n\n\n\n\n\n\n\n\n\n\n\n\n.aside-box[_ngcontent-%COMP%] {\n  width: 275px;\n  height: 100vh;\n  position: absolute;\n  background-color: #fff;\n  z-index: 999;\n  right: 0;\n  padding: 10px;\n  transform: translateX(285px);\n  transition: 0.3s ease-in-out;\n}\n.aside-box.sidebar_slide[_ngcontent-%COMP%] {\n  transform: translateX(0px);\n}\n.aside-box[_ngcontent-%COMP%]   .message-center[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy92YXJpYWJsZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQvaGVhZGVyLW5hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUEsa0ZBQVk7QUFOWixnQ0FBQTtBQUlBLGdDQUFBO0FBSUEsZUFBQTtBQWNBLGdCQUFBO0FBU0EsaUJBQUE7QUFjQSxxQkFBQTtBQUlBLFNBQUE7QUFPQSxnQkFBQTtBQUlBLHdCQUFBO0FBc0JBLGtDQUFBO0FBSUEsa0NBQUE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O21CQzlEbUI7QUExQm5CO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JEc0dRO0VDckdSLFlBQVc7RUFDYixRQUFRO0VBQ04sYUFBYTtFQUNiLDRCQUE2QjtFQUM3Qiw0QkFBNEI7QUE0QmhDO0FBckNBO0VBV1EsMEJBQTJCO0FBOEJuQztBQXpDQTtFQWNZLGFBQWE7QUErQnpCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci1uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8vIEN1c3RvbSBWYXJpYWJsZXNcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjMwMCw0MDAsNTAwLDYwMCw3MDAnKTtcclxuXHJcbi8qVGhlbWUgQ29sb3JzKi9cclxuXHJcbiR0aGVtZWNvbG9yOiAjRkZBRDJCO1xyXG4kdGhlbWVjb2xvci1kYXJrOiAjMDI4ZWUxO1xyXG4kdGhlbWVjb2xvci1hbHQ6ICMyNmM2ZGE7XHJcbiR0aGVtZS1saWdodDogI2ZmZjtcclxuJHRoZW1lLWRhcms6ICMyMTI1Mjk7XHJcbiRza2luMTogIzM1ODdkODtcclxuJHNraW4yOiAjZDgzOTM5O1xyXG4kc2tpbjM6ICMxN2E5OTE7XHJcbiRza2luNDogIzY2NTlmNztcclxuJHNraW41OiAjZmZmO1xyXG4kc2tpbjY6ICNGRkFEMkI7XHJcblxyXG4vKlRvcGJhciBDb2xvcnMqL1xyXG5cclxuJHRvcGJhcjogJHRoZW1lLWxpZ2h0O1xyXG4kdG9wYmFyLWhlaWdodDogNjRweDtcclxuJHRvcGJhci1uYXZsaW5rLXBhZGRpbmc6IDBweCAxNXB4O1xyXG4kdG9wYmFyLW5hdmxpbmstZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJHRvcGJhci1uYXZsaW5rLWhlaWdodDogNjRweDtcclxuJHRvcGJhci1uYXZicmFuZC1wYWRkaW5nOiAwIDE1cHggMCAxNXB4O1xyXG5cclxuLypTaWRlYmFyIENvbG9ycyovXHJcblxyXG4kc2lkZWJhcjogJHRoZW1lLWxpZ2h0O1xyXG4kc2lkZWJhci1hbHQ6ICNlOGVmZjA7XHJcbiRzaWRlYmFyLXRleHQ6ICNmZmY7XHJcbiRzaWRlYmFyLWljb25zOiByZ2IoMCxcclxuMCxcclxuMCk7XHJcbiRzaWRlYmFyLXRleHQtZGFyazogIzIxMjUyOTtcclxuJHNpZGViYXItaWNvbnMtZGFyazogIzRmNTQ2NztcclxuJHNpZGViYXItd2lkdGgtZnVsbDogMjUwcHg7XHJcbiRzaWRlYmFyLXdpZHRoLWljb25iYXI6IDE4MHB4O1xyXG4kc2lkZWJhci13aWR0aC1taW5pOiA3MHB4O1xyXG5cclxuLypCb3hlZCBsYXlvdXQgd2lkdGgqL1xyXG5cclxuJGJveGVkLXdpZHRoOiAxMjAwcHg7XHJcblxyXG4vKlNoYWRvdyovXHJcblxyXG4kc2hhZG93OiAxcHggMHB4IDIwcHggcmdiYSgwLFxyXG4wLFxyXG4wLFxyXG4wLjA4KTtcclxuXHJcbi8qIHRyYW5zaXRpb25zICovXHJcblxyXG4kdHJhbnNpdGlvbnM6IDAuMnMgZWFzZS1pbjtcclxuXHJcbi8qIERhcmsgdHJhbnNwYXJlbnQgYmcgKi9cclxuXHJcbiR0cmFuc3BhcmVudC1kYXJrLWJnOiByZ2JhKDAsXHJcbjAsXHJcbjAsXHJcbjAuMDUpO1xyXG4kbGZ0OiBsZWZ0O1xyXG4kcmd0OiByaWdodDtcclxuJGNhcmQtYWx0OiAjZTRlOWVmO1xyXG4lc3F1YXJlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG5cclxuJXJvdGF0ZTQ1IHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbi8vIEJvb3RzdHJhcCBvdmVycmlkZXNcclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG5cclxuLyogKlxyXG4gKiBUYWJsZSBPZiBDb250ZW50XHJcbiAqXHJcbiAqICAxLiBDb2xvciBzeXN0ZW1cclxuICogIDIuIE9wdGlvbnNcclxuICogIDMuIEJvZHlcclxuICogIDQuIFR5cG9ncmFwaHlcclxuICogIDUuIEJyZWFkY3J1bWJzXHJcbiAqICA2LiBDYXJkc1xyXG4gKiAgNy4gRHJvcGRvd25zXHJcbiAqICA4LiBCdXR0b25zXHJcbiAqICA5LiBUeXBvZ3JhcGh5XHJcbiAqICAxMC4gUHJvZ3Jlc3MgYmFyc1xyXG4gKiAgMTEuIFRhYmxlc1xyXG4gKiAgMTIuIEZvcm1zXHJcbiAqICAxNC4gQ29tcG9uZW50ICovXHJcblxyXG4vL0NvbG9yIHN5c3RlbVxyXG4kd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XHJcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcclxuJGdyYXktMjAwOiAjZTllY2VmICFkZWZhdWx0O1xyXG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XHJcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcclxuJGdyYXktNTAwOiAjYTFhYWIyICFkZWZhdWx0O1xyXG4kZ3JheS02MDA6ICM2Yzc1N2QgIWRlZmF1bHQ7XHJcbiRncmF5LTcwMDogIzRmNTQ2NyAhZGVmYXVsdDtcclxuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xyXG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XHJcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcclxuJGJsdWU6ICNmYmIwM2IgIWRlZmF1bHQ7XHJcbiRpbmRpZ286ICM2NjEwZjIgIWRlZmF1bHQ7XHJcbiRwdXJwbGU6ICM3NDYwZWUgIWRlZmF1bHQ7XHJcbiRwaW5rOiAjZTgzZThjICFkZWZhdWx0O1xyXG4kcmVkOiAjZWY2ZTZlICFkZWZhdWx0O1xyXG4kbGlnaHQtaW5mbzogI2U2ZjJmYSAhZGVmYXVsdDtcclxuJGxpZ2h0LWRhbmdlcjogI2ZhZTZlNiAhZGVmYXVsdDtcclxuJGxpZ2h0LXN1Y2Nlc3M6ICNlOWY5ZjcgIWRlZmF1bHQ7XHJcbiRsaWdodC13YXJuaW5nOiAjZjhlZmQ3ICFkZWZhdWx0O1xyXG4kb3JhbmdlOiAjZmI4YzAwICFkZWZhdWx0O1xyXG4keWVsbG93OiAjZmZiYzM0ICFkZWZhdWx0O1xyXG4kZ3JlZW46ICMyMmM2YWIgIWRlZmF1bHQ7XHJcbiRncmVlbjE6ICM1YWU1MGUgIWRlZmF1bHQ7XHJcbiR0ZWFsOiAjMjBjOTk3ICFkZWZhdWx0O1xyXG4kY3lhbjogIzAxYzBjOCAhZGVmYXVsdDtcclxuJHByaW1hcnk6ICNGRkFEMkIgIWRlZmF1bHQ7XHJcbiR0ZXh0LW11dGVkOiAkZ3JheS01MDAgIWRlZmF1bHQ7XHJcbiRjb2xvcnM6ICggYmx1ZTogJGJsdWUsXHJcbmluZGlnbzogJGluZGlnbyxcclxucHVycGxlOiAkcHVycGxlLFxyXG5waW5rOiAkcGluayxcclxucmVkOiAkcmVkLFxyXG5vcmFuZ2U6ICRvcmFuZ2UsXHJcbnllbGxvdzogJHllbGxvdyxcclxuZ3JlZW46ICRncmVlbixcclxudGVhbDogJHRlYWwsXHJcbmN5YW46ICRjeWFuLFxyXG53aGl0ZTogJHdoaXRlLFxyXG5ncmF5OiAkZ3JheS02MDAsXHJcbmdyYXktZGFyazogJGdyYXktODAwLFxyXG5saWdodC1pbmZvOiAkbGlnaHQtaW5mbyxcclxubGlnaHQtZGFuZ2VyOiAkbGlnaHQtZGFuZ2VyLFxyXG5saWdodC1zdWNjZXNzOiAkbGlnaHQtc3VjY2VzcyxcclxubGlnaHQtd2FybmluZzogJGxpZ2h0LXdhcm5pbmcpO1xyXG4kcHJpbWFyeTogJGJsdWUgIWRlZmF1bHQ7XHJcbiRzZWNvbmRhcnk6ICRncmF5LTYwMCAhZGVmYXVsdDtcclxuJHN1Y2Nlc3M6ICRncmVlbiAhZGVmYXVsdDtcclxuJGluZm86ICRibHVlICFkZWZhdWx0O1xyXG4kd2FybmluZzogJHllbGxvdyAhZGVmYXVsdDtcclxuJGRhbmdlcjogJHJlZCAhZGVmYXVsdDtcclxuJGxpZ2h0OiAkZ3JheS0xMDAgIWRlZmF1bHQ7XHJcbiRkYXJrOiAkZ3JheS04MDAgIWRlZmF1bHQ7XHJcbiRjeWFuOiAkY3lhbiAhZGVmYXVsdDtcclxuJG9yYW5nZTogJG9yYW5nZSAhZGVmYXVsdDtcclxuJHRoZW1lLWNvbG9yczogKCkgIWRlZmF1bHQ7XHJcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZSggKCAncHJpbWFyeSc6ICRwcmltYXJ5LCAnc2Vjb25kYXJ5JzogJHNlY29uZGFyeSwgJ3N1Y2Nlc3MnOiAkc3VjY2VzcywgJ2luZm8nOiAkaW5mbywgJ3dhcm5pbmcnOiAkd2FybmluZywgJ2Rhbmdlcic6ICRkYW5nZXIsICdsaWdodCc6ICRsaWdodCwgJ2RhcmsnOiAkZGFyaywgJ2N5YW4nOiAkY3lhbiwgJ29yYW5nZSc6ICRvcmFuZ2UsICdwdXJwbGUnOiAkcHVycGxlLCAnbGlnaHQtaW5mbyc6ICRsaWdodC1pbmZvLCAnbGlnaHQtZGFuZ2VyJzogJGxpZ2h0LWRhbmdlciwgJ2xpZ2h0LXN1Y2Nlc3MnOiAkbGlnaHQtc3VjY2VzcywgJ2xpZ2h0LXdhcm5pbmcnOiAkbGlnaHQtd2FybmluZyksXHJcbiR0aGVtZS1jb2xvcnMpO1xyXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXHJcbiRlbmFibGUtY2FyZXQ6IHRydWUgIWRlZmF1bHQ7XHJcbiRlbmFibGUtcm91bmRlZDogdHJ1ZSAhZGVmYXVsdDtcclxuJGVuYWJsZS1zaGFkb3dzOiBmYWxzZSAhZGVmYXVsdDtcclxuJGVuYWJsZS1ncmFkaWVudHM6IGZhbHNlICFkZWZhdWx0O1xyXG4kZW5hYmxlLXRyYW5zaXRpb25zOiB0cnVlICFkZWZhdWx0O1xyXG4kZW5hYmxlLWhvdmVyLW1lZGlhLXF1ZXJ5OiBmYWxzZSAhZGVmYXVsdDtcclxuJGVuYWJsZS1ncmlkLWNsYXNzZXM6IHRydWUgIWRlZmF1bHQ7XHJcbiRlbmFibGUtcHJpbnQtc3R5bGVzOiB0cnVlICFkZWZhdWx0O1xyXG4vLyBCb2R5XHJcbi8vIFNldHRpbmdzIGZvciB0aGUgIGVsZW1lbnQuXHJcbiRtYWluLWJvZHktYmc6ICNmZmYgIWRlZmF1bHQ7XHJcbiRib2R5LWJnOiAjZmZmO1xyXG4kYm9keS1jb2xvcjogIzNlNTU2OSAhZGVmYXVsdDtcclxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAyMHB4ICFkZWZhdWx0O1xyXG4vLyBUeXBvZ3JhcGh5XHJcbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxyXG4kZm9udC1zaXplLWJhc2U6IDAuODc1cmVtO1xyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ1BvcHBpbnMnLFxyXG5zYW5zLXNlcmlmICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDMwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogMzAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtbWVkaXVtOiA1MDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1ib2xkOiA2MDAgIWRlZmF1bHQ7XHJcbiRoMS1mb250LXNpemU6IDM2cHggIWRlZmF1bHQ7XHJcbiRoMi1mb250LXNpemU6IDMwcHggIWRlZmF1bHQ7XHJcbiRoMy1mb250LXNpemU6IDIycHggIWRlZmF1bHQ7XHJcbiRoNC1mb250LXNpemU6IDE4cHggIWRlZmF1bHQ7XHJcbiRoNS1mb250LXNpemU6IDE2cHggIWRlZmF1bHQ7XHJcbiRoNi1mb250LXNpemU6IDE0cHggIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAoMXJlbSAvIDIpICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IDUwMCAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWNvbG9yOiBpbmhlcml0ICFkZWZhdWx0O1xyXG4vLyBCcmVhZGNydW1ic1xyXG4kYnJlYWRjcnVtYi1iZzogJGJvZHktYmc7XHJcbiRicmVhZGNydW1iLW1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuLy8gQ2FyZHNcclxuJGNhcmQtYm9yZGVyLXdpZHRoOiAxcHggIWRlZmF1bHQ7XHJcbiRjYXJkLWJvcmRlci1jb2xvcjogJGdyYXktMjAwICFkZWZhdWx0O1xyXG4kY2FyZC1ib3JkZXItcmFkaXVzOiAwcHggIWRlZmF1bHQ7XHJcbi8vIERyb3Bkb3duc1xyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6IDFyZW0gIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogMC42NXJlbSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogJGdyYXktMjAwO1xyXG4kZHJvcGRvd24tZGl2aWRlci1iZzogJGdyYXktMTAwO1xyXG4vLyBCdXR0b25zXHJcbiRidG4tc2Vjb25kYXJ5LWJvcmRlcjogJGdyYXktMzAwO1xyXG4vLyBQcm9ncmVzcyBiYXJzXHJcbiRwcm9ncmVzcy1iZzogJGdyYXktMTAwO1xyXG4vLyBUYWJsZXNcclxuJHRhYmxlLWJnLWFjY2VudDogJGdyYXktMTAwO1xyXG4kdGFibGUtYmctaG92ZXI6ICRncmF5LTEwMDtcclxuJHRhYmxlLWhvdmVyLWJnOiAkZ3JheS0xMDAgIWRlZmF1bHQ7XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmc6IDFyZW0gIWRlZmF1bHQ7XHJcbiR0YWJsZS1iZy1sZXZlbDogLTEwICFkZWZhdWx0O1xyXG4kdGFibGUtYmctbGV2ZWwyOiAxICFkZWZhdWx0O1xyXG4kdGFibGUtYmctbGV2ZWwzOiAtNSAhZGVmYXVsdDtcclxuLy8gQ29tcG9uZW50c1xyXG4kY29tcG9uZW50LWFjdGl2ZS1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xyXG4kY29tcG9uZW50LWFjdGl2ZS1iZzogJHRoZW1lY29sb3IgIWRlZmF1bHQ7XHJcbiRiYWRnZS1waWxsLXBhZGRpbmcteDogMC4yZW0gIWRlZmF1bHQ7XHJcbiRiYWRnZS1waWxsLXBhZGRpbmcteTogMWVtICFkZWZhdWx0O1xyXG4vLyBGb3Jtc1xyXG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6ICRncmF5LTEwMDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJGdyYXktMjAwO1xyXG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAkZ3JheS0yMDA7XHJcbiRpbnB1dC1idG4tZm9jdXMtY29sb3I6IHJnYmEoMCxcclxuMCxcclxuMCxcclxuMC4yNSkgIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6IHJnYmEoMCxcclxuMCxcclxuMCxcclxuMC4yNSkgIWRlZmF1bHQ7XHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiByZ2JhKDAsXHJcbjAsXHJcbjAsXHJcbjM1JSkgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvY3VzdG9tLXNlbGVjdC5wbmcpICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiBzdHItcmVwbGFjZSh1cmwoJycpLFxyXG4nJTIzJykgIWRlZmF1bHQ7XHJcbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cclxuJGJvcmRlci13aWR0aDogMXB4ICFkZWZhdWx0O1xyXG4kYm9yZGVyLWNvbG9yOiAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzOiAycHggIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLWxnOiAycHggIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLXNtOiAxcHggIWRlZmF1bHQ7XHJcbi8vIFByb2dyZXNzIGJhcnNcclxuJHByb2dyZXNzLWhlaWdodDogNXB4ICFkZWZhdWx0O1xyXG4vLyBUYWJzXHJcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogJHdoaXRlICFkZWZhdWx0O1xyXG4vLyBHcmlkIGJyZWFrcG9pbnRzXHJcbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxyXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXHJcbiRncmlkLWJyZWFrcG9pbnRzOiAoIHhzOiAwLFxyXG5zbTogNTc2cHgsXHJcbm1kOiA3NjhweCxcclxubGc6IDk5MnB4LFxyXG54bDogMTYwMHB4KSAhZGVmYXVsdDtcclxuLy8gTmF2YmFyXHJcbiRuYXZiYXItZGFyay1jb2xvcjogcmdiYSgkd2hpdGUsXHJcbjAuOCkgIWRlZmF1bHQ7XHJcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogcmdiYSgkd2hpdGUsXHJcbjEpICFkZWZhdWx0O1xyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZS5zY3NzJztcclxuLmFzaWRlLWJveHtcclxuICAgIHdpZHRoOiAyNzVweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICB6LWluZGV4Ojk5OTtcclxuICByaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoIDI4NXB4KTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAmLnNpZGViYXJfc2xpZGV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCAwcHgpO1xyXG4gICAgfVxyXG4gICAgIC5tZXNzYWdlLWNlbnRlcntcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navigation',
            templateUrl: './navigation.component.html',
            styleUrls: ['./navigation.component.scss']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
          }, {
            type: src_app_convservice_service__WEBPACK_IMPORTED_MODULE_3__["ConvserviceService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, {
          toggleSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/sidebar/menu-items.ts":
    /*!**********************************************!*\
      !*** ./src/app/shared/sidebar/menu-items.ts ***!
      \**********************************************/

    /*! exports provided: ROUTES */

    /***/
    function srcAppSharedSidebarMenuItemsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });

      var ROUTES = [// {
      //     path: '',
      //     title: 'Personal',
      //     icon: 'mdi mdi-dots-horizontal',
      //     class: 'nav-small-cap',
      //     extralink: true,
      //     submenu: []
      // },
      {
        path: '/dashboard',
        title: 'Dashboard',
        icon: 'mdi mdi-view-dashboard',
        "class": '',
        extralink: false,
        submenu: []
      }, {
        path: '/pages/users',
        title: 'Users',
        icon: 'sl-icon-user',
        "class": '',
        extralink: false,
        submenu: []
      }, {
        path: '/pages/vendors',
        title: 'Packages',
        icon: ' sl-icon-book-open',
        "class": '',
        extralink: false,
        submenu: []
      }, // {
      //     path: '/pages/foodcategories',
      //     title: 'Food Categories',
      //     icon: 'mdi mdi-bowl',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      //  {
      //     path: '/pages/orderlist',
      //     title: 'Order List',
      //     icon: ' far fa-list-alt',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/banner',
      //     title: 'Banner',
      //     icon: 'far fa-images',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/Inventory',
      //     title: 'Invetory',
      //     icon: 'mdi mdi-calendar-text',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      //  {
      //     path: '/pages/revenue',
      //     title: 'Revenue',
      //     icon: 'mdi mdi-chart-areaspline',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/reviews',
      //     title: 'Reviews',
      //     icon: 'mdi mdi-account-star-variant',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/calculator',
      //     title: 'Calculator',
      //     icon: 'mdi mdi-calculator',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/rewards',
      //     title: 'Discount',
      //     icon: 'ti-gift',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/promocode',
      //     title: 'Promo',
      //     icon: 'fas fa-percent',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/notification',
      //     title: 'Brodcast Notification',
      //     icon: 'sl-icon-bell',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/analytics',
      //     title: 'Analytics',
      //     icon: 'mdi mdi-chart-arc',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/manage_admin',
      //     title: 'Admin',
      //     icon: 'mdi mdi-chart-arc',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '',
      //     title: 'Apps',
      //     icon: 'mdi mdi-dots-horizontal',
      //     class: 'nav-small-cap',
      //     extralink: true,
      //     submenu: []
      // },
      // {
      //     path: '/apps/email',
      //     title: 'Email',
      //     icon: 'icon-Mailbox-Empty',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '',
      //     title: 'Ticket',
      //     icon: 'icon-Ticket',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/apps/ticketlist',
      //             title: 'Ticket List',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/apps/ticketdetails',
      //             title: 'Ticket Details',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         }
      //     ]
      // },
      // {
      //     path: '',
      //     title: 'Extra',
      //     icon: 'icon-Sunglasses-Smiley',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/apps/chat',
      //             title: 'Chat App',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/apps/fullcalendar',
      //             title: 'Calendar',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/apps/taskboard',
      //             title: '',
      //             icon: 'mdi mdi-bulletin-board',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         }
      //     ]
      // },
      // {
      //     path: '',
      //     title: 'UI',
      //     icon: 'mdi mdi-dots-horizontal',
      //     class: 'nav-small-cap',
      //     extralink: true,
      //     submenu: []
      // },
      // {
      //     path: '',
      //     title: 'UI Elements',
      //     icon: 'icon-Paint-Brush',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/component/accordion',
      //             title: 'Accordion',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/alert',
      //             title: 'Alert',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/carousel',
      //             title: 'Carousel',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/dropdown',
      //             title: 'Dropdown',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/modal',
      //             title: 'Modal',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/pagination',
      //             title: 'Pagination',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/poptool',
      //             title: 'Popover & Tooltip',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/progressbar',
      //             title: 'Progressbar',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/rating',
      //             title: 'Ratings',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/tabs',
      //             title: 'Tabs',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/timepicker',
      //             title: 'Timepicker',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/buttons',
      //             title: 'Button',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/notifier',
      //             title: 'Notifier',
      //             icon: 'mdi mdi-bandcamp',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         }
      //     ]
      // },
      // {
      //     path: '',
      //     title: 'Cards',
      //     icon: 'icon-Folder-Add',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/cards/basiccards',
      //             title: 'Basic Cards',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/cards/customcards',
      //             title: 'Custom Cards',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/cards/weathercards',
      //             title: 'Weather Cards',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         }
      //     ]
      // },
      // {
      //     path: '',
      //     title: 'Extra Components',
      //     icon: 'icon-Idea-5',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/extra-component/toastr',
      //             title: 'Toastr',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/extra-component/editor',
      //             title: 'Editor',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/extra-component/dragndrop',
      //             title: 'Drag n Drop',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         }
      //     ]
      // },
      // {
      //     path: '',
      //     title: 'Widgets',
      //     icon: 'icon-Wrench',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/widgets/apps',
      //             title: 'Widget Apps',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/widgets/data',
      //             title: 'Widget Data',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         }
      //     ]
      // },
      // {
      //     path: '',
      //     title: 'Forms',
      //     icon: 'mdi mdi-dots-horizontal',
      //     class: 'nav-small-cap',
      //     extralink: true,
      //     submenu: []
      // },
      // {
      //     path: '',
      //     title: 'Form Elements',
      //     icon: 'icon-Receipt-4',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/forms/forminputs',
      //             title: 'Form Inputs',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/forms/inputgroups',
      //             title: 'Input Groups',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/forms/inputgrid',
      //             title: 'Input Grid',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/forms/checkboxandradio',
      //             title: 'Checkbox & Radio',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/forms/multiselect',
      //             title: 'Multiselect',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         }
      //     ]
      // },
      // {
      //     path: '',
      //     title: 'Form Layouts',
      //     icon: 'icon-Receipt-2',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/forms/formbasic',
      //             title: 'Basic Forms',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/forms/formhorizontal',
      //             title: 'Horizontal Forms',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/forms/formactions',
      //             title: 'Form Actions',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/forms/formrowseparator',
      //             title: 'Row Separator',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/forms/formstripedrows',
      //             title: 'Striped Rows',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/forms/formdetail',
      //             title: 'Detail Forms',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         }
      //     ]
      // },
      // {
      //     path: '',
      //     title: 'Form Addons',
      //     icon: 'icon-Add',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/forms/formvalidation',
      //             title: 'Form Validation',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/typehead',
      //             title: 'Form Typehead',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/datepicker',
      //             title: 'Datepicker',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/language-datepicker',
      //             title: 'Language Datepicker',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/forms/ngx',
      //             title: 'Form Wizard / Steps',
      //             icon: 'mdi mdi-attachment',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         }
      //     ]
      // },
      // {
      //     path: '',
      //     title: 'Tables',
      //     icon: 'mdi mdi-dots-horizontal',
      //     class: 'nav-small-cap',
      //     extralink: true,
      //     submenu: []
      // },
      // {
      //     path: '',
      //     title: 'Bootstrap Tables',
      //     icon: 'mdi mdi-border-none',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/tables/basictables',
      //             title: 'Basic Tables',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/tables/darktables',
      //             title: 'Dark Basic Tables',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/tables/colortables',
      //             title: 'Colored Tables',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/tables/tablesizing',
      //             title: 'Table Sizing',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         }
      //     ]
      // },
      // {
      //     path: '/tables/datatable',
      //     title: 'Data Tables',
      //     icon: 'mdi mdi-border-vertical',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '',
      //     title: 'Charts',
      //     icon: 'mdi mdi-dots-horizontal',
      //     class: 'nav-small-cap',
      //     extralink: true,
      //     submenu: []
      // },
      // {
      //     path: '/charts/chartjs',
      //     title: 'Chart Js',
      //    icon: '',
      //      class: '',
      //       extralink: false,
      //       submenu: []
      //   },
      // {
      //     path: '',
      //     title: 'Charts',
      //     icon: 'icon-Pie-Chart',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/charts/chartjs',
      //             title: 'Chart Js',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/charts/chartistjs',
      //             title: 'Chartist Js',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/charts/ngxchart',
      //             title: 'Ngx Charts',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         }
      //     ]
      // },
      // {
      //     path: '',
      //     title: 'Maps',
      //     icon: 'mdi mdi-dots-horizontal',
      //     class: 'nav-small-cap',
      //     extralink: true,
      //     submenu: []
      // },
      // {
      //     path: '/maps/google',
      //     title: 'Google Maps',
      //     icon: 'icon-Location-2',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '',
      //     title: 'Pages',
      //     icon: 'mdi mdi-dots-horizontal',
      //     class: 'nav-small-cap',
      //     extralink: true,
      //     submenu: []
      // },
      // {
      //     path: '/pages/tours',
      //     title: 'Tours',
      //     icon: 'sl-icon-globe',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/destination',
      //     title: 'Destination',
      //     icon: 'sl-icon-map',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/hotels',
      //     title: 'Hotels',
      //     icon: 'mdi mdi-hospital-building',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      {
        path: '',
        title: 'CMS Pages',
        icon: 'icon-Car-Wheel',
        "class": 'has-arrow',
        extralink: false,
        submenu: [{
          path: '/pages/terms',
          title: 'Terms and Conditions ',
          icon: '',
          "class": '',
          extralink: false,
          submenu: []
        }, {
          path: '/pages/contact',
          title: 'Contact Us',
          icon: '',
          "class": '',
          extralink: false,
          submenu: []
        }, {
          path: '/pages/faq',
          title: 'FAQ',
          icon: '',
          "class": '',
          extralink: false,
          submenu: []
        }, {
          path: '/pages/support',
          title: 'About Us',
          icon: '',
          "class": '',
          extralink: false,
          submenu: []
        }, {
          path: '/pages/privacy',
          title: 'Privacy Policy',
          icon: '',
          "class": '',
          extralink: false,
          submenu: []
        }]
      }];
      /***/
    },

    /***/
    "./src/app/shared/sidebar/sidebar.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
      \*****************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function srcAppSharedSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menu-items */
      "./src/app/shared/sidebar/menu-items.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var src_app_convservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/convservice.service */
      "./src/app/convservice.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function SidebarComponent_li_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, sidebarnavItem_r1.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sidebarnavItem_r1.title);
        }
      }

      function SidebarComponent_li_14_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_li_14_a_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.addExpandClass(sidebarnavItem_r1.title);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", sidebarnavItem_r1["class"] === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, sidebarnavItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, sidebarnavItem_r1["class"]))("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, sidebarnavItem_r1.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sidebarnavItem_r1.title);
        }
      }

      function SidebarComponent_li_14_ul_3_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_li_14_ul_3_li_1_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var sidebarnavSubItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r14.addActiveClass(sidebarnavSubItem_r11.title);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", sidebarnavSubItem_r11.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, sidebarnavSubItem_r11.path))("routerLinkActive", sidebarnavSubItem_r11.submenu.length > 0 ? "" : "router-link-active")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, sidebarnavSubItem_r11["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, sidebarnavSubItem_r11.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sidebarnavSubItem_r11.title);
        }
      }

      function SidebarComponent_li_14_ul_3_li_1_ul_2_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubsubItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, sidebarnavSubsubItem_r19.path))("routerLinkActive", sidebarnavSubsubItem_r19.submenu.length > 0 ? "" : "router-link-active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, sidebarnavSubsubItem_r19.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sidebarnavSubsubItem_r19.title);
        }
      }

      function SidebarComponent_li_14_ul_3_li_1_ul_2_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_14_ul_3_li_1_ul_2_li_1_a_1_Template, 4, 8, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubsubItem_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, sidebarnavSubsubItem_r19["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sidebarnavSubsubItem_r19.extralink);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "in": a0
        };
      };

      function SidebarComponent_li_14_ul_3_li_1_ul_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_14_ul_3_li_1_ul_2_li_1_Template, 2, 4, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r13.showSubMenu === sidebarnavSubItem_r11.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sidebarnavSubItem_r11.submenu);
        }
      }

      function SidebarComponent_li_14_ul_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_14_ul_3_li_1_a_1_Template, 4, 11, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_li_14_ul_3_li_1_ul_2_Template, 2, 4, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubItem_r11 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r10.showSubMenu === sidebarnavSubItem_r11.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", sidebarnavSubItem_r11.submenu.length > 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sidebarnavSubItem_r11.extralink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavSubItem_r11.submenu.length > 0);
        }
      }

      function SidebarComponent_li_14_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_14_ul_3_li_1_Template, 3, 5, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r4.showMenu === sidebarnavItem_r1.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sidebarnavItem_r1.submenu);
        }
      }

      function SidebarComponent_li_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_14_div_1_Template, 4, 4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_li_14_a_2_Template, 4, 11, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_li_14_ul_3_Template, 2, 4, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavItem_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r0.showMenu === sidebarnavItem_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.extralink === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sidebarnavItem_r1.extralink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.submenu.length > 0);
        }
      }

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(modalService, router, route, Srvc) {
          var _this5 = this;

          _classCallCheck(this, SidebarComponent);

          this.modalService = modalService;
          this.router = router;
          this.route = route;
          this.Srvc = Srvc;
          this.showMenu = '';
          this.showSubMenu = '';
          this.getbannerP();
          this.Srvc.$searchvalue.subscribe(function (res) {
            _this5.getbannerP();
          });
        } // this is for the open close


        _createClass(SidebarComponent, [{
          key: "addExpandClass",
          value: function addExpandClass(element) {
            if (element === this.showMenu) {
              this.showMenu = '0';
            } else {
              this.showMenu = element;
            }
          }
        }, {
          key: "addActiveClass",
          value: function addActiveClass(element) {
            if (element === this.showSubMenu) {
              this.showSubMenu = '0';
            } else {
              this.showSubMenu = element;
            }
          }
        }, {
          key: "getbannerP",
          value: function getbannerP() {
            var _this6 = this;

            this.Srvc.getProfile().subscribe(function (res) {
              _this6.profilepic = res.data.image;
            });
          } // End open close

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sidebarnavItems = _menu_items__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (sidebarnavItem) {
              return sidebarnavItem;
            });
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_convservice_service__WEBPACK_IMPORTED_MODULE_4__["ConvserviceService"]));
      };

      SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarComponent,
        selectors: [["app-sidebar"]],
        decls: 15,
        vars: 2,
        consts: [[1, "sidebar-nav", "pt-3"], ["id", "sidebarnav"], ["ngbDropdown", "", 1, "user-profile", "m-t-20"], [1, "user-pic"], ["alt", "users", 1, "rounded-circle", "img-fluid", 3, "src"], [1, "user-content", "hide-menu", "m-t-10"], [1, "m-b-10", "user-name", "font-medium"], ["aria-labelledby", "Userdd", "ngbDropdownMenu", "", 1, "animated", "flipInY"], ["routerLink", "pages/profile", 1, "dropdown-item"], [1, "ti-user", "m-r-5", "m-l-5"], [1, "dropdown-divider"], ["class", "sidebar-item", 3, "selected", "routerLinkActive", 4, "ngFor", "ngForOf"], [1, "sidebar-item", 3, "routerLinkActive"], ["class", "nav-small-cap", 4, "ngIf"], ["class", "sidebar-link waves-effect waves-dark", 3, "routerLink", "ngClass", "routerLinkActive", "click", 4, "ngIf"], ["aria-expanded", "false", "class", "collapse first-level", 3, "ngClass", 4, "ngIf"], [1, "nav-small-cap"], [3, "ngClass"], [1, "hide-menu"], [1, "sidebar-link", "waves-effect", "waves-dark", 3, "routerLink", "ngClass", "routerLinkActive", "click"], ["aria-expanded", "false", 1, "collapse", "first-level", 3, "ngClass"], ["class", "sidebar-item", 3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], ["class", "sidebar-link", 3, "routerLink", "routerLinkActive", "ngClass", "click", 4, "ngIf"], ["aria-expanded", "false", "class", "collapse second-level", 3, "ngClass", 4, "ngIf"], [1, "sidebar-link", 3, "routerLink", "routerLinkActive", "ngClass", "click"], ["aria-expanded", "false", 1, "collapse", "second-level", 3, "ngClass"], ["class", "sidebar-item", "routerLinkActive", "active", 3, "ngClass", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "sidebar-item", 3, "ngClass"], ["class", "sidebar-link", 3, "routerLink", "routerLinkActive", 4, "ngIf"], [1, "sidebar-link", 3, "routerLink", "routerLinkActive"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Steave Jobs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " My Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SidebarComponent_li_14_Template, 4, 6, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.profilepic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sidebarnavItems);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html'
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: src_app_convservice_service__WEBPACK_IMPORTED_MODULE_4__["ConvserviceService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/spinner.component.ts":
    /*!*********************************************!*\
      !*** ./src/app/shared/spinner.component.ts ***!
      \*********************************************/

    /*! exports provided: SpinnerComponent */

    /***/
    function srcAppSharedSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
        return SpinnerComponent;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function SpinnerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SpinnerComponent = /*#__PURE__*/function () {
        function SpinnerComponent(router, document) {
          var _this7 = this;

          _classCallCheck(this, SpinnerComponent);

          this.router = router;
          this.document = document;
          this.isSpinnerVisible = true;
          this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
              _this7.isSpinnerVisible = true;
            } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
              _this7.isSpinnerVisible = false;
            }
          }, function () {
            _this7.isSpinnerVisible = false;
          });
        }

        _createClass(SpinnerComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.isSpinnerVisible = false;
          }
        }]);

        return SpinnerComponent;
      }();

      SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
        return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      };

      SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SpinnerComponent,
        selectors: [["app-spinner"]],
        inputs: {
          backgroundColor: "backgroundColor"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]],
        template: function SpinnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 4, 0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-spinner',
            template: "<div class=\"preloader\" *ngIf=\"isSpinnerVisible\">\n        <div class=\"spinner\">\n          <div class=\"double-bounce1\"></div>\n          <div class=\"double-bounce2\"></div>\n        </div>\n    </div>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }];
        }, {
          backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/supportlink/supportlink.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/supportlink/supportlink.component.ts ***!
      \******************************************************/

    /*! exports provided: SupportlinkComponent */

    /***/
    function srcAppSupportlinkSupportlinkComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportlinkComponent", function () {
        return SupportlinkComponent;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SupportlinkComponent = /*#__PURE__*/function () {
        function SupportlinkComponent(http) {
          _classCallCheck(this, SupportlinkComponent);

          this.http = http;
        }

        _createClass(SupportlinkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.http.get("https://api.convoiceapp.com/api/v1/admin/getSettings").subscribe(function (res) {
              console.log(res);
              _this8.termscond = res.data.find(function (i) {
                return i.key == 'AboutUs';
              }).value;
            });
          }
        }]);

        return SupportlinkComponent;
      }();

      SupportlinkComponent.ɵfac = function SupportlinkComponent_Factory(t) {
        return new (t || SupportlinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      SupportlinkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SupportlinkComponent,
        selectors: [["app-supportlink"]],
        decls: 4,
        vars: 0,
        consts: [[2, "text-align", "center"]],
        template: function SupportlinkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Go ahead, find a free software that convert text to voice, and you will always end up with that 80\u2019s broken robot voice. Five seconds into it, and your ears will scream \u201Cmake it stop\u201D. Maybe you want to convert text to voice for your education purposes, or reaching more audience through sound content, or maybe you are simply a better listener than reader. Whether you want to consume content quickly, or you are a content creator, educational organization, or advertiser, we provide you with the latest tech of text-to-speech conversion. Convoice is your tool to consume and share content by converting any text into a human-like voice. We believe in transparency and integrity. That\u2019s why our packages are as real as you can get out there. Believe us, any app that claims free voice conversion will give you that 80\u2019s robot voice. Instead, we studied the market and made the ultimate packages for your convenience. No hidden fees, no hidden number of characters, and no free crappy stuff. We just provide the ultimate technology out there for you. P.S be careful, free stuff means you are the product, that\u2019s why we don\u2019t even take that much of your personal info! Dyslectic? Hates reading? Busy all day? No problem, we got you. Driving and want to read articles or books? Use Convoice. Content creator and want to reach a wider audience? Use Convoice. Studying and have no time to read? Use Convoice. With three simple steps only, convert any text to a human-like voice, save it, share it, use it, it\u2019s yours. Convoice NOW!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBvcnRsaW5rL3N1cHBvcnRsaW5rLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SupportlinkComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-supportlink',
            templateUrl: './supportlink.component.html',
            styleUrls: ['./supportlink.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }];
        }, null);
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
      // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * In development mode, to ignore zone related error stack frames such as
       * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
       * import the following file, but please comment it out in production mode
       * because it will have performance impact when throw error
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
        return console.log(err);
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
      /*! /home/apptunix/Downloads/updated  tts/TTS/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map