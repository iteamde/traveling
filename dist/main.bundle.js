webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<ng4-loading-spinner> </ng4-loading-spinner>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ":host/deep/ .slider-item:hover, :host/deep/ .see-more-link:hover {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_module__ = __webpack_require__("./src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_effects_auth_effects__ = __webpack_require__("./src/app/auth/effects/auth.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_services_api_service__ = __webpack_require__("./src/app/core/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__trip_planner_trip_planner_module__ = __webpack_require__("./src/app/trip-planner/trip-planner.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__trip_planner_effects_trip_planner_effects__ = __webpack_require__("./src/app/trip-planner/effects/trip-planner.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_effects_router_effects__ = __webpack_require__("./src/app/core/effects/router.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_module__ = __webpack_require__("./src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__auth_helpers_jwt_interceptor__ = __webpack_require__("./src/app/auth/helpers/jwt.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__country_country_module__ = __webpack_require__("./src/app/country/country.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__country_effects_country_effects__ = __webpack_require__("./src/app/country/effects/country.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ngrx_store_devtools__ = __webpack_require__("./node_modules/@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__places_places_module__ = __webpack_require__("./src/app/places/places.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__places_effects_places_effects__ = __webpack_require__("./src/app/places/effects/places.effects.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var effectsArr = [
    __WEBPACK_IMPORTED_MODULE_9__auth_effects_auth_effects__["a" /* AuthEffects */],
    __WEBPACK_IMPORTED_MODULE_15__trip_planner_effects_trip_planner_effects__["a" /* TripPlannerEffects */],
    __WEBPACK_IMPORTED_MODULE_16__core_effects_router_effects__["a" /* RouterEffects */],
    __WEBPACK_IMPORTED_MODULE_21__country_effects_country_effects__["a" /* CountryEffects */],
    __WEBPACK_IMPORTED_MODULE_24__places_effects_places_effects__["a" /* PlacesEffects */]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_4__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_17__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_10__ngrx_effects__["c" /* EffectsModule */].forRoot(effectsArr),
                __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["j" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__core_reducers__["A" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_22__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({
                    maxAge: 10
                }),
                __WEBPACK_IMPORTED_MODULE_13_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_19_ngx_toastr__["a" /* ToastrModule */].forRoot({ positionClass: 'toast-top-right' }),
                __WEBPACK_IMPORTED_MODULE_14__trip_planner_trip_planner_module__["a" /* TripPlannerModule */],
                __WEBPACK_IMPORTED_MODULE_20__country_country_module__["a" /* CountryModule */],
                __WEBPACK_IMPORTED_MODULE_23__places_places_module__["a" /* PlacesModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__core_services_api_service__["a" /* ApiService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_18__auth_helpers_jwt_interceptor__["a" /* JwtInterceptor */],
                    multi: true
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_routing__ = __webpack_require__("./src/app/auth/auth.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trip_planner_trip_planner_routing__ = __webpack_require__("./src/app/trip-planner/trip-planner.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_routing__ = __webpack_require__("./src/app/home/home.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_components_privacy_policy_privacy_policy_component__ = __webpack_require__("./src/app/core/components/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_components_terms_of_service_terms_of_service_component__ = __webpack_require__("./src/app/core/components/terms-of-service/terms-of-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_components_error_error_component__ = __webpack_require__("./src/app/core/components/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__country_country_routing__ = __webpack_require__("./src/app/country/country.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__places_places_routing__ = __webpack_require__("./src/app/places/places.routing.ts");










var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */],
        children: __WEBPACK_IMPORTED_MODULE_2__auth_auth_routing__["a" /* AuthRoutes */].concat(__WEBPACK_IMPORTED_MODULE_3__trip_planner_trip_planner_routing__["a" /* TripPlannerRoutes */], __WEBPACK_IMPORTED_MODULE_4__home_home_routing__["a" /* HomeRoutes */], __WEBPACK_IMPORTED_MODULE_8__country_country_routing__["a" /* CountryRoutes */], __WEBPACK_IMPORTED_MODULE_9__places_places_routing__["a" /* PlacesRoutes */]),
    },
    {
        path: 'privacy-policy',
        component: __WEBPACK_IMPORTED_MODULE_5__core_components_privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */]
    },
    {
        path: 'terms-of-service',
        component: __WEBPACK_IMPORTED_MODULE_6__core_components_terms_of_service_terms_of_service_component__["a" /* TermsOfServiceComponent */]
    },
    {
        path: 'error',
        component: __WEBPACK_IMPORTED_MODULE_7__core_components_error_error_component__["a" /* ErrorComponent */]
    },
    {
        path: '**',
        redirectTo: '/'
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/auth/actions/auth.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SET_REGISTRATION_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return REGISTRATION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return RESET_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return RESET_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SET_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SET_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLEAR_PASSWORD_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LoginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LoginSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return RegisterAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return RegistrationSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SetRegistrationStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ResetPasswordAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SetPasswordAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SetPasswordSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ClearPasswordStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ResetPasswordSuccessAction; });
var REGISTER = '[Auth] Register user';
var SET_REGISTRATION_STEP = '[Auth] set registration step';
var REGISTRATION_SUCCESS = '[Auth] registration success';
var LOGIN = '[Auth] login user';
var LOGIN_SUCCESS = '[Auth] login success';
var RESET_PASSWORD = '[Auth] reset password email request';
var RESET_PASSWORD_SUCCESS = '[Auth] reset password email request success';
var SET_PASSWORD = '[Auth] set password';
var SET_PASSWORD_SUCCESS = '[Auth] set password success';
var CLEAR_PASSWORD_STATUS = '[Auth] clear password status';
/**
 * Registers new user. (Currently just with given email and password)
 */
var LoginAction = /** @class */ (function () {
    /**
     * Default constructor
     * @param payload
     */
    function LoginAction(payload) {
        this.payload = payload;
        this.type = LOGIN;
    }
    return LoginAction;
}());

var LoginSuccessAction = /** @class */ (function () {
    /**
     * Default constructor
     * @param payload
     */
    function LoginSuccessAction(payload) {
        this.payload = payload;
        this.type = LOGIN_SUCCESS;
    }
    return LoginSuccessAction;
}());

/**
 * Registers new user. (Currently just with given email and password)
 */
var RegisterAction = /** @class */ (function () {
    /**
     * Default constructor
     * @param payload
     */
    function RegisterAction(payload) {
        this.payload = payload;
        this.type = REGISTER;
    }
    return RegisterAction;
}());

/**
 * Registration success action
 */
var RegistrationSuccessAction = /** @class */ (function () {
    function RegistrationSuccessAction(payload) {
        this.payload = payload;
        this.type = REGISTRATION_SUCCESS;
    }
    return RegistrationSuccessAction;
}());

var SetRegistrationStep = /** @class */ (function () {
    function SetRegistrationStep(payload) {
        this.payload = payload;
        this.type = SET_REGISTRATION_STEP;
    }
    return SetRegistrationStep;
}());

var ResetPasswordAction = /** @class */ (function () {
    function ResetPasswordAction(payload) {
        this.payload = payload;
        this.type = RESET_PASSWORD;
    }
    return ResetPasswordAction;
}());

var SetPasswordAction = /** @class */ (function () {
    function SetPasswordAction(payload) {
        this.payload = payload;
        this.type = SET_PASSWORD;
    }
    return SetPasswordAction;
}());

var SetPasswordSuccessAction = /** @class */ (function () {
    function SetPasswordSuccessAction(payload) {
        this.payload = payload;
        this.type = SET_PASSWORD_SUCCESS;
    }
    return SetPasswordSuccessAction;
}());

var ClearPasswordStatus = /** @class */ (function () {
    function ClearPasswordStatus() {
        this.type = CLEAR_PASSWORD_STATUS;
    }
    return ClearPasswordStatus;
}());

var ResetPasswordSuccessAction = /** @class */ (function () {
    function ResetPasswordSuccessAction(payload) {
        this.payload = payload;
        this.type = RESET_PASSWORD_SUCCESS;
    }
    return ResetPasswordSuccessAction;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper login-layer\">\r\n  <app-header></app-header>\r\n</div>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthComponent = /** @class */ (function () {
    function AuthComponent(router, store) {
        var _this = this;
        this.router = router;
        this.store = store;
        this.path = '';
        this.loginStatus = false;
        this.path = router.url;
        store.select(__WEBPACK_IMPORTED_MODULE_3__core_reducers__["o" /* getLoginStatus */]).subscribe(function (res) { return _this.loginStatus = res; });
    }
    AuthComponent.prototype.ngOnInit = function () {
        if ((this.path === '/')) {
            this.router.navigate([this.loginStatus ? '/home' : '/login']);
        }
    };
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__("./src/app/auth/auth.component.html"),
            styles: [__webpack_require__("./src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_component__ = __webpack_require__("./src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_login_modal_login_modal_component__ = __webpack_require__("./src/app/auth/modals/login-modal/login-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modals_register_modal_register_modal_component__ = __webpack_require__("./src/app/auth/modals/register-modal/register-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_register_modal_step_2_register_modal_step_2_component__ = __webpack_require__("./src/app/auth/modals/register-modal-step-2/register-modal-step-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_services_validation__ = __webpack_require__("./src/app/core/services/validation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modals_register_modal_step_3_register_modal_step_3_component__ = __webpack_require__("./src/app/auth/modals/register-modal-step-3/register-modal-step-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_scroll_event__ = __webpack_require__("./node_modules/ngx-scroll-event/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_scroll_event___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ngx_scroll_event__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__helpers_search_box_search_box_component__ = __webpack_require__("./src/app/auth/helpers/search-box/search-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modals_register_modal_step_4_register_modal_step_4_component__ = __webpack_require__("./src/app/auth/modals/register-modal-step-4/register-modal-step-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modals_register_modal_step_5_register_modal_step_5_component__ = __webpack_require__("./src/app/auth/modals/register-modal-step-5/register-modal-step-5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modals_signup_done_signup_done_component__ = __webpack_require__("./src/app/auth/modals/signup-done/signup-done.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_facebook_service__ = __webpack_require__("./src/app/auth/services/facebook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_registration_guard__ = __webpack_require__("./src/app/auth/guards/registration.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_forgot_password_forgot_password_component__ = __webpack_require__("./src/app/auth/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_reset_password_reset_password_component__ = __webpack_require__("./src/app/auth/components/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_can_activate_guard__ = __webpack_require__("./src/app/auth/guards/can-activate.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__helpers_auth_helper__ = __webpack_require__("./src/app/auth/helpers/auth.helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__auth_component__["a" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_4__modals_login_modal_login_modal_component__["a" /* LoginModalComponent */],
                __WEBPACK_IMPORTED_MODULE_5__modals_register_modal_register_modal_component__["a" /* RegisterModalComponent */],
                __WEBPACK_IMPORTED_MODULE_6__modals_register_modal_step_2_register_modal_step_2_component__["a" /* RegisterModalStep2Component */],
                __WEBPACK_IMPORTED_MODULE_9__modals_register_modal_step_3_register_modal_step_3_component__["a" /* RegisterModalStep3Component */],
                __WEBPACK_IMPORTED_MODULE_11__helpers_search_box_search_box_component__["a" /* SearchBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_12__modals_register_modal_step_4_register_modal_step_4_component__["a" /* RegisterModalStep4Component */],
                __WEBPACK_IMPORTED_MODULE_13__modals_register_modal_step_5_register_modal_step_5_component__["a" /* RegisterModalStep5Component */],
                __WEBPACK_IMPORTED_MODULE_14__modals_signup_done_signup_done_component__["a" /* SignupDoneComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_reset_password_reset_password_component__["a" /* ResetPasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_scroll_event__["ScrollEventModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__guards_can_activate_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_8__core_services_validation__["a" /* ValidationService */],
                __WEBPACK_IMPORTED_MODULE_15__services_facebook_service__["a" /* FacebookService */],
                __WEBPACK_IMPORTED_MODULE_16__guards_registration_guard__["a" /* RegistrationGuard */],
                __WEBPACK_IMPORTED_MODULE_20__helpers_auth_helper__["a" /* AuthHelper */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__modals_register_modal_register_modal_component__["a" /* RegisterModalComponent */],
                __WEBPACK_IMPORTED_MODULE_4__modals_login_modal_login_modal_component__["a" /* LoginModalComponent */],
                __WEBPACK_IMPORTED_MODULE_6__modals_register_modal_step_2_register_modal_step_2_component__["a" /* RegisterModalStep2Component */],
                __WEBPACK_IMPORTED_MODULE_9__modals_register_modal_step_3_register_modal_step_3_component__["a" /* RegisterModalStep3Component */],
                __WEBPACK_IMPORTED_MODULE_12__modals_register_modal_step_4_register_modal_step_4_component__["a" /* RegisterModalStep4Component */],
                __WEBPACK_IMPORTED_MODULE_13__modals_register_modal_step_5_register_modal_step_5_component__["a" /* RegisterModalStep5Component */],
                __WEBPACK_IMPORTED_MODULE_14__modals_signup_done_signup_done_component__["a" /* SignupDoneComponent */]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_component__ = __webpack_require__("./src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_registration_guard__ = __webpack_require__("./src/app/auth/guards/registration.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_forgot_password_forgot_password_component__ = __webpack_require__("./src/app/auth/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_reset_password_reset_password_component__ = __webpack_require__("./src/app/auth/components/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_components_modal_wrapper_modal_wrapper_component__ = __webpack_require__("./src/app/core/components/modal-wrapper/modal-wrapper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modals_login_modal_login_modal_component__ = __webpack_require__("./src/app/auth/modals/login-modal/login-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_register_modal_register_modal_component__ = __webpack_require__("./src/app/auth/modals/register-modal/register-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modals_register_modal_step_2_register_modal_step_2_component__ = __webpack_require__("./src/app/auth/modals/register-modal-step-2/register-modal-step-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modals_register_modal_step_3_register_modal_step_3_component__ = __webpack_require__("./src/app/auth/modals/register-modal-step-3/register-modal-step-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modals_register_modal_step_4_register_modal_step_4_component__ = __webpack_require__("./src/app/auth/modals/register-modal-step-4/register-modal-step-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modals_register_modal_step_5_register_modal_step_5_component__ = __webpack_require__("./src/app/auth/modals/register-modal-step-5/register-modal-step-5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modals_signup_done_signup_done_component__ = __webpack_require__("./src/app/auth/modals/signup-done/signup-done.component.ts");












var AuthRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__auth_component__["a" /* AuthComponent */],
        children: [
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_4__core_components_modal_wrapper_modal_wrapper_component__["a" /* ModalWrapperComponent */],
                data: { modal: __WEBPACK_IMPORTED_MODULE_5__modals_login_modal_login_modal_component__["a" /* LoginModalComponent */] }
            },
            {
                path: 'signup',
                component: __WEBPACK_IMPORTED_MODULE_4__core_components_modal_wrapper_modal_wrapper_component__["a" /* ModalWrapperComponent */],
                data: { modal: __WEBPACK_IMPORTED_MODULE_6__modals_register_modal_register_modal_component__["a" /* RegisterModalComponent */] }
            },
            {
                path: 'signup/step2',
                component: __WEBPACK_IMPORTED_MODULE_4__core_components_modal_wrapper_modal_wrapper_component__["a" /* ModalWrapperComponent */],
                data: { modal: __WEBPACK_IMPORTED_MODULE_7__modals_register_modal_step_2_register_modal_step_2_component__["a" /* RegisterModalStep2Component */] },
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_registration_guard__["a" /* RegistrationGuard */]]
            },
            {
                path: 'signup/step3',
                component: __WEBPACK_IMPORTED_MODULE_4__core_components_modal_wrapper_modal_wrapper_component__["a" /* ModalWrapperComponent */],
                data: { modal: __WEBPACK_IMPORTED_MODULE_8__modals_register_modal_step_3_register_modal_step_3_component__["a" /* RegisterModalStep3Component */] },
            },
            {
                path: 'signup/step4',
                component: __WEBPACK_IMPORTED_MODULE_4__core_components_modal_wrapper_modal_wrapper_component__["a" /* ModalWrapperComponent */],
                data: { modal: __WEBPACK_IMPORTED_MODULE_9__modals_register_modal_step_4_register_modal_step_4_component__["a" /* RegisterModalStep4Component */] },
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_registration_guard__["a" /* RegistrationGuard */]]
            },
            {
                path: 'signup/step5',
                component: __WEBPACK_IMPORTED_MODULE_4__core_components_modal_wrapper_modal_wrapper_component__["a" /* ModalWrapperComponent */],
                data: { modal: __WEBPACK_IMPORTED_MODULE_10__modals_register_modal_step_5_register_modal_step_5_component__["a" /* RegisterModalStep5Component */] },
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_registration_guard__["a" /* RegistrationGuard */]]
            },
            {
                path: 'signup/done',
                component: __WEBPACK_IMPORTED_MODULE_4__core_components_modal_wrapper_modal_wrapper_component__["a" /* ModalWrapperComponent */],
                data: { modal: __WEBPACK_IMPORTED_MODULE_11__modals_signup_done_signup_done_component__["a" /* SignupDoneComponent */] },
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_registration_guard__["a" /* RegistrationGuard */]]
            },
        ],
    },
    {
        path: 'forgot-password',
        component: __WEBPACK_IMPORTED_MODULE_2__components_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]
    },
    {
        path: 'reset-password',
        component: __WEBPACK_IMPORTED_MODULE_3__components_reset_password_reset_password_component__["a" /* ResetPasswordComponent */]
    }
];


/***/ }),

/***/ "./src/app/auth/components/forgot-password/forgot-password.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/components/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forget-wrapper\">\r\n  <a href=\"#\" class=\"main-logo\">\r\n    <img src=\"./assets/image/large-logo.png\" alt=\"logo\">\r\n  </a>\r\n\r\n\r\n  <div class=\"forget-main-block\" *ngIf=\"(resetPasswordStatus$ | async) === 'emailSent'\">\r\n    <div class=\"forget-content\">\r\n      <h3 class=\"ttl\">Email sent!</h3>\r\n      <p>We sent a message to <a href=\"mailto:test@gmail.com\">{{userForm.get('email').value}}</a> so you can pick your new password.</p>\r\n      <p>Didn't get the email? <a href=\"#\" class=\"try-link\">Try these tips from our Help Center</a></p>\r\n      <p>Not your email address? <a href=\"#\" class=\"try-link\">Try again</a></p>\r\n    </div>\r\n    <div class=\"forget-foot\">\r\n      <a href=\"#\" class=\"sign-in-link\" routerLink=\"/login\">Back to Sign In</a>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"forget-main-block\" *ngIf=\"(errorFromServer$ | async) || (resetPasswordStatus$ | async)===''\">\r\n    <div class=\"forget-content \" [ngClass]=\"{ 'error-event': formErrors.email || (errorFromServer$ | async) }\">\r\n      <div class=\"error-alert\" *ngIf=\" formErrors.email\">\r\n        {{ formErrors.email }}\r\n      </div>\r\n      <div class=\"error-alert\" *ngIf=\"(errorFromServer$ | async)\">\r\n        No user was found with that email address.\r\n      </div>\r\n      <h3 class=\"ttl\">Reset Password</h3>\r\n      <p>Enter the email address you used when you joined and we'll send you instructions to reset your password.</p>\r\n      <form action=\"/\" class=\"insert-form\" [formGroup]=\"userForm\" (ngSubmit)=\"userForm.valid && reset()\">\r\n        <div class=\"field-row\">\r\n          <div class=\"input-wrap\">\r\n            <input type=\"text\" placeholder=\"Email Address\" formControlName=\"email\"  id=\"email\">\r\n          </div>\r\n          <button class=\"btn btn-light-primary btn-bordered\" (click)=\"validation.onValueChange(userForm, formErrors, true)\">Send</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"forget-foot\">\r\n      <a href=\"#\" class=\"sign-in-link\" routerLink=\"/login\">Back to Sign In</a>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/auth/components/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_validation__ = __webpack_require__("./src/app/core/services/validation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_validators_custom_validators__ = __webpack_require__("./src/app/core/validators/custom-validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_auth_actions__ = __webpack_require__("./src/app/auth/actions/auth.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(store, fb, validation) {
        this.store = store;
        this.fb = fb;
        this.validation = validation;
        this.user = {
            email: "",
        };
        this.formErrors = {
            email: "",
        };
        this.resetPasswordStatus$ = store.select(__WEBPACK_IMPORTED_MODULE_1__core_reducers__["x" /* getResetPasswordStatus */]);
        this.errorFromServer$ = store.select(__WEBPACK_IMPORTED_MODULE_1__core_reducers__["k" /* getErrorFromServer */]);
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_auth_actions__["b" /* ClearPasswordStatus */]());
        this.buildForm();
    };
    ForgotPasswordComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            email: [this.user.email, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_5__core_validators_custom_validators__["a" /* emailValidator */]
                ]]
        });
        this.userForm.valueChanges
            .subscribe(function () {
            _this.formErrors = _this.validation.onValueChange(_this.userForm, _this.formErrors, false);
        });
    };
    ForgotPasswordComponent.prototype.reset = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_auth_actions__["m" /* ResetPasswordAction */]({ data: this.userForm.value, queryUrl: 'users/forgot' }));
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__("./src/app/auth/components/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("./src/app/auth/components/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__core_services_validation__["a" /* ValidationService */]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/auth/components/reset-password/reset-password.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/components/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forget-wrapper\">\r\n  <a href=\"#\" class=\"main-logo\">\r\n    <img src=\"./assets/image/large-logo.png\" alt=\"logo\">\r\n  </a>\r\n\r\n <div class=\"forget-main-block\"  *ngIf=\"(resetPasswordStatus$ | async) === ''\">\r\n      <div class=\"forget-content\" [ngClass]=\"{ 'error-event': formErrors.password || formErrors.password_confirmation || (errorFromServer$ | async)}\">\r\n        <div class=\"error-alert\" *ngIf=\"formErrors.password || formErrors.password_confirmation\">\r\n          {{ formErrors.password }} {{formErrors.password_confirmation}}\r\n        </div>\r\n        <div class=\"error-alert\" *ngIf=\"(errorFromServer$ | async)\">\r\n          {{(errorFromServer$ | async).message[0]}}\r\n        </div>\r\n        <h3 class=\"ttl\">New Password</h3>\r\n        <p>Enter a new password for your account</p>\r\n        <form  class=\"insert-form\"  [formGroup]=\"userForm\" >\r\n          <div class=\"field-row\">\r\n            <div class=\"input-wrap\">\r\n              <input  placeholder=\"New password\" type=\"password\"  formControlName=\"password\">\r\n            </div>\r\n          </div>\r\n          <div class=\"field-row\">\r\n            <div class=\"input-wrap\">\r\n              <input  type=\"password\"  formControlName=\"password_confirmation\" placeholder=\"Confirm password\">\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n     <div class=\"forget-foot\">\r\n       <button class=\"btn btn-light-primary btn-bordered\" type=\"submit\"\r\n               (click)=\"validation.onValueChange(userForm, formErrors, true);userForm.valid && reset()\" >Reset Password</button>\r\n     </div>\r\n\r\n    </div>\r\n\r\n\r\n <div class=\"forget-main-block\" *ngIf=\"(resetPasswordStatus$ | async) === 'success'\">\r\n      <div class=\"forget-content\">\r\n        <h3 class=\"ttl green\">Success!</h3>\r\n        <p>You are ready to login to your account using the new password</p>\r\n      </div>\r\n      <div class=\"forget-foot\">\r\n        <a href=\"#\" class=\"sign-in-link\" routerLink=\"/login\">Sign In Now</a>\r\n      </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/auth/components/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_validation__ = __webpack_require__("./src/app/core/services/validation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_validators_custom_validators__ = __webpack_require__("./src/app/core/validators/custom-validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_auth_actions__ = __webpack_require__("./src/app/auth/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(store, fb, validation, route) {
        var _this = this;
        this.store = store;
        this.fb = fb;
        this.validation = validation;
        this.route = route;
        this.user = {
            password: "",
            password_confirmation: "",
        };
        this.formErrors = {
            password: "",
            password_confirmation: "",
        };
        this.route.queryParams.subscribe(function (params) {
            _this.token = params['token'];
        });
        this.resetPasswordStatus$ = store.select(__WEBPACK_IMPORTED_MODULE_1__core_reducers__["x" /* getResetPasswordStatus */]);
        this.errorFromServer$ = store.select(__WEBPACK_IMPORTED_MODULE_1__core_reducers__["k" /* getErrorFromServer */]);
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_auth_actions__["b" /* ClearPasswordStatus */]());
        this.buildForm();
    };
    ResetPasswordComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            password: [this.user.password, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].maxLength(20)
                ]],
            password_confirmation: [this.user.password_confirmation, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
                ]]
        }, { validator: __WEBPACK_IMPORTED_MODULE_5__core_validators_custom_validators__["b" /* matchPasswordValidator */] });
        this.userForm.valueChanges
            .subscribe(function () {
            _this.formErrors = _this.validation.onValueChange(_this.userForm, _this.formErrors, false);
        });
    };
    ResetPasswordComponent.prototype.reset = function () {
        var data = {
            token: this.token,
            newpassword: this.userForm.value.password,
            newpassword_confirmation: this.userForm.value.password_confirmation
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_auth_actions__["r" /* SetPasswordAction */]({ data: data, queryUrl: 'users/reset' }));
    };
    ResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__("./src/app/auth/components/reset-password/reset-password.component.html"),
            styles: [__webpack_require__("./src/app/auth/components/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__core_services_validation__["a" /* ValidationService */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/auth/effects/auth.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_auth_actions__ = __webpack_require__("./src/app/auth/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_actions_error_actions__ = __webpack_require__("./src/app/core/actions/error.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_actions_router_actions__ = __webpack_require__("./src/app/core/actions/router.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_services_api_service__ = __webpack_require__("./src/app/core/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helpers_auth_helper__ = __webpack_require__("./src/app/auth/helpers/auth.helper.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AuthEffects = /** @class */ (function () {
    /**
     * Default constructor
     * @param actions$
     * @param ApiService
     * @param AuthHelper
     */
    function AuthEffects(actions$, apiService, authHelper) {
        var _this = this;
        this.actions$ = actions$;
        this.apiService = apiService;
        this.authHelper = authHelper;
        /**
         * Registers user
         */
        this.register$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_2__actions_auth_actions__["g" /* REGISTER */])
            .switchMap(function (action) { return _this.apiService.post(action.payload.queryUrl, __assign({}, action.payload.data))
            .map(function (res) { return res.success ?
            new __WEBPACK_IMPORTED_MODULE_2__actions_auth_actions__["l" /* RegistrationSuccessAction */]({ res: res, urlTo: action.payload.urlTo }) :
            new __WEBPACK_IMPORTED_MODULE_3__core_actions_error_actions__["b" /* AddErrorAction */](res.data); }); });
        /**
         * Registers user success
         */
        this.registerSuccess$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_2__actions_auth_actions__["h" /* REGISTRATION_SUCCESS */])
            .map(function (action) { return Object(__WEBPACK_IMPORTED_MODULE_4__core_actions_router_actions__["e" /* go */])(action.payload.urlTo); });
        /**
         * Login user
         */
        this.login$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_2__actions_auth_actions__["c" /* LOGIN */])
            .switchMap(function (action) { return _this.apiService.post(action.payload.queryUrl, __assign({}, action.payload.data))
            .map(function (res) { return res.success ? new __WEBPACK_IMPORTED_MODULE_2__actions_auth_actions__["f" /* LoginSuccessAction */](__assign({}, res, { returnUrl: action.payload.returnUrl })) : new __WEBPACK_IMPORTED_MODULE_3__core_actions_error_actions__["b" /* AddErrorAction */](res.data); }); });
        /**
         * Login user success
         */
        this.loginSuccess$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_2__actions_auth_actions__["d" /* LOGIN_SUCCESS */])
            .do(function (action) { return _this.authHelper.setAuthToken(action.payload.data.token); })
            .map(function (action) { return Object(__WEBPACK_IMPORTED_MODULE_4__core_actions_router_actions__["e" /* go */])(action.payload.returnUrl); });
        /**
         * Reset password request
         */
        this.reset$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_2__actions_auth_actions__["i" /* RESET_PASSWORD */])
            .switchMap(function (action) { return _this.apiService.post(action.payload.queryUrl, __assign({}, action.payload.data))
            .map(function (res) { return res.success ? new __WEBPACK_IMPORTED_MODULE_2__actions_auth_actions__["n" /* ResetPasswordSuccessAction */](res) : new __WEBPACK_IMPORTED_MODULE_3__core_actions_error_actions__["b" /* AddErrorAction */](res.data); }); });
        /**
         * Set new password
         */
        this.setPassword$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_2__actions_auth_actions__["o" /* SET_PASSWORD */])
            .switchMap(function (action) { return _this.apiService.post(action.payload.queryUrl, __assign({}, action.payload.data))
            .map(function (res) { return res.success ? new __WEBPACK_IMPORTED_MODULE_2__actions_auth_actions__["s" /* SetPasswordSuccessAction */](res) : new __WEBPACK_IMPORTED_MODULE_3__core_actions_error_actions__["b" /* AddErrorAction */](res.data); }); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "register$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "registerSuccess$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "login$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "loginSuccess$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "reset$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "setPassword$", void 0);
    AuthEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_5__core_services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_9__helpers_auth_helper__["a" /* AuthHelper */]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/auth/guards/can-activate.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_auth_helper__ = __webpack_require__("./src/app/auth/helpers/auth.helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authHelper) {
        this.router = router;
        this.authHelper = authHelper;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authHelper.getAuthToken()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__helpers_auth_helper__["a" /* AuthHelper */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/guards/registration.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_skipUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/skipUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegistrationGuard = /** @class */ (function () {
    /**
     * Default constructor
     * @param store
     * @param router
     */
    function RegistrationGuard(store, router) {
        this.store = store;
        this.router = router;
        this.relation = {
            '/login': 0,
            '/signup': 1,
            '/signup/step2': 2,
            '/signup/step3': 3,
            '/signup/step4': 4,
            '/signup/step5': 5,
            '/signup/done': 6
        };
        this.registrationStep$ = store.select(__WEBPACK_IMPORTED_MODULE_6__core_reducers__["w" /* getRegistationStep */]);
    }
    /**
     * Checks if user is logged in and in case he is not - redirects to login page
     * @param next
     * @param state
     * @return {Observable<T>}
     */
    RegistrationGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.registrationStep$.map(function (res) {
            if (res === _this.relation[state.url]) {
                return true;
            }
            else {
                _this.router.navigate(['/signup']);
                return false;
            }
        });
    };
    RegistrationGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], RegistrationGuard);
    return RegistrationGuard;
}());



/***/ }),

/***/ "./src/app/auth/helpers/auth.helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TOKEN_NAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TOKEN_NAME = 'currentUser';
var AuthHelper = /** @class */ (function () {
    function AuthHelper() {
    }
    /**
     * Returns authentication token stored at local storage
     * @return {string|null}
     */
    AuthHelper.prototype.getAuthToken = function () {
        return localStorage.getItem(TOKEN_NAME);
    };
    /**
     * Stores authentication token
     * @param token
     */
    AuthHelper.prototype.setAuthToken = function (token) {
        localStorage.setItem(TOKEN_NAME, token);
    };
    AuthHelper.prototype.clearAuthToken = function () {
        localStorage.removeItem(TOKEN_NAME);
    };
    AuthHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthHelper);
    return AuthHelper;
}());



/***/ }),

/***/ "./src/app/auth/helpers/jwt.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_helper__ = __webpack_require__("./src/app/auth/helpers/auth.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_actions_error_actions__ = __webpack_require__("./src/app/core/actions/error.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authHelper, router, spinnerService, store) {
        this.authHelper = authHelper;
        this.router = router;
        this.spinnerService = spinnerService;
        this.store = store;
        this.spinnerCounter = 0;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        //UI helpers
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__core_actions_error_actions__["d" /* RemoveErrorAction */]());
        this.spinnerService.show();
        this.spinnerCounter++;
        // add authorization header with jwt token if available
        var userToken = this.authHelper.getAuthToken();
        if (userToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + userToken
                }
            });
        }
        return next.handle(request).do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpResponse */]) {
                _this.spinnerCounter--;
                if (!_this.spinnerCounter)
                    _this.spinnerService.hide();
            }
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 401) {
                    var loc = __assign({}, document.location);
                    return _this.router.navigate(['/login'], { queryParams: { returnUrl: loc.pathname } });
                    // redirect to the login route
                    // or show a modal
                }
            }
        })
            .catch(function (err) {
            _this.spinnerCounter = 0;
            _this.spinnerService.hide();
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 401) {
                    // this.router.navigate(['/login']);
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
                }
            }
            _this.router.navigate(['/error']);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    JwtInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_helper__["a" /* AuthHelper */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["h" /* Store */]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/helpers/search-box/search-box.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/helpers/search-box/search-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\r\n  <div class=\"search-block-wrap\">\r\n    <div class=\"search-block\" [formGroup]=\"form\">\r\n      <a class=\"search-btn\"><i class=\"fa fa-search\"></i></a>\r\n      <input type=\"text\" formControlName=\"query\" placeholder=\"Item or city...\">\r\n    </div>\r\n  </div>\r\n  <div class=\"check-block-wrap\" detect-scroll (onScroll)=\"handleScroll($event)\" [bottomOffset]=\"1\" [topOffset]=\"0\">\r\n    <div class=\"check-block\" [ngClass]=\"{'checked-block': item.selected}\"\r\n         [ngStyle]=\"{'background-image': item.cover_image || 'url(http://placehold.it/181x181)'}\"\r\n         (click)=\"selectItem(item)\"\r\n         *ngFor=\"let item of choosenItems\">\r\n      <div class=\"check-ttl\">\r\n        <h4>{{item.name}}</h4>\r\n        <p>{{item.id}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"check-block\" [ngClass]=\"{'checked-block': item.selected}\"\r\n         [ngStyle]=\"{'background-image': item.cover_image || 'url(http://placehold.it/181x181)'}\"\r\n         (click)=\"selectItem(item)\"\r\n         *ngFor=\"let item of items\">\r\n      <div class=\"check-ttl\">\r\n        <h4>{{item.name}}</h4>\r\n        <p>{{item.id}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" disabled *ngIf=\"(settings.itemToChoose > choosenItems.length)\" class=\"btn btn-grey\">Select {{settings.itemToChoose - choosenItems.length}} More</button>\r\n  <button type=\"button\" (click)=\"register()\" *ngIf=\"(settings.itemToChoose <= choosenItems.length)\"class=\"btn btn-primary\">Continue</button>\r\n  <p class=\"sub-info\">(Next Step: Favorite Places)</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/helpers/search-box/search-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_api_service__ = __webpack_require__("./src/app/core/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_auth_actions__ = __webpack_require__("./src/app/auth/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent(apiService, store, fb) {
        this.apiService = apiService;
        this.store = store;
        this.fb = fb;
        this.items = [];
        this.choosenItems = [];
        this.itemToChoose = 5;
        this.limit = 20;
        this.offset = 0;
        this.user$ = store.select(__WEBPACK_IMPORTED_MODULE_3__core_reducers__["n" /* getLoggedUser */]);
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            query: ''
        });
        this.searchItemSubscription$ = this.form.valueChanges
            .debounceTime(500)
            .subscribe(function (res) { return _this.getItems(false); });
        this.getItems(false);
    };
    SearchBoxComponent.prototype.selectItem = function (item) {
        var _this = this;
        item.selected = !item.selected;
        if (item.selected) {
            this.choosenItems.push(item);
            this.items.forEach(function (elem, index) {
                if (item.id === elem.id) {
                    return _this.items.splice(index, 1);
                }
            });
        }
        else {
            this.choosenItems.forEach(function (elem, index) {
                if (item.id === elem.id) {
                    return _this.choosenItems.splice(index, 1);
                }
            });
        }
    };
    SearchBoxComponent.prototype.handleScroll = function (event) {
        if (event.isReachingBottom) {
            this.offset += this.limit;
            this.getItems(true);
        }
    };
    SearchBoxComponent.prototype.getItems = function (fromScrollEvent) {
        var _this = this;
        var details = {
            query: this.form.get('query').value,
            limit: this.limit,
            offset: this.offset,
            language_id: 1
        };
        this.apiService.post(this.settings.getDataUrl, details).take(1).subscribe(function (res) {
            var data = _this.settings.itemsType === 'places' ? res.data.places : res.data;
            fromScrollEvent ? _this.items = _this.items.concat(data) : _this.items = data;
        });
    };
    SearchBoxComponent.prototype.register = function () {
        var _this = this;
        this.user$.take(1).subscribe(function (user) {
            var payload = {
                data: (_a = {}, _a[_this.settings.itemsType] = _this.choosenItems, _a.user_id = user && user.id, _a),
                queryUrl: _this.settings.queryUrl,
                urlTo: _this.settings.urlTo
            };
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_auth_actions__["k" /* RegisterAction */](payload));
            var _a;
        });
    };
    SearchBoxComponent.prototype.ngOnDestroy = function () {
        this.searchItemSubscription$.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SearchBoxComponent.prototype, "settings", void 0);
    SearchBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search-box',
            template: __webpack_require__("./src/app/auth/helpers/search-box/search-box.component.html"),
            styles: [__webpack_require__("./src/app/auth/helpers/search-box/search-box.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormBuilder */]])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());



/***/ }),

/***/ "./src/app/auth/modals/login-modal/login-modal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/modals/login-modal/login-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog sign-up-style\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <button  *ngIf=\"(loginStatus$ | async)\" type=\"button\" class=\"close\" mat-button  [mat-dialog-close]=\"true\" routerLink=\"/\" >\r\n        <span >&times;</span>\r\n      </button>\r\n      <div class=\"modal-body\">\r\n        <div class=\"top-layer\">\r\n          <a routerLink=\"/\" class=\"logo-wrap\">\r\n            <img src=\"./assets/image/main-logo.png\" alt=\"\">\r\n          </a>\r\n          <h4 class=\"title\">Login to your account</h4>\r\n          <p *ngIf=\"formErrors.email\" class=\"sub-ttl error-message\">{{ formErrors.email }}</p>\r\n          <p *ngIf=\"formErrors.password\" class=\"sub-ttl error-message\">{{ formErrors.password }}</p>\r\n          <div *ngIf=\"(authError$ | async)\">\r\n            <p   class=\"sub-ttl error-message\">{{(authError$ | async).message}}</p>\r\n          </div>\r\n        </div>\r\n        <form class=\"login-form\" [formGroup]=\"userForm\" (ngSubmit)=\"userForm.valid && login()\">\r\n          <div class=\"form-group\" [ngClass]=\"{ 'has-danger': formErrors.email }\">\r\n            <input type=\"email\" class=\"form-control\"  formControlName=\"email\"  id=\"email\"  placeholder=\"Email address\">\r\n          </div>\r\n          <div class=\"form-group\"  [ngClass]=\"{ 'has-danger': formErrors.password }\">\r\n            <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"password\"  placeholder=\"Password\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <a routerLink=\"/forgot-password\" class=\"forget-password-link\">Forget your password?</a>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button type=\"submit\" (click)=\"validation.onValueChange(userForm, formErrors, true)\" class=\"btn btn-primary\">Log In</button>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <p class=\"simple-txt\">Or</p>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button type=\"button\" class=\"btn btn-primary 11\" (click)=\"facebookLogin()\">\r\n              <i class=\"fa fa-facebook side-icon\"></i>\r\n              Continue with Facebook</button>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button type=\"button\" class=\"btn btn-info\"  (click)=\"twitterLogin()\">\r\n              <i class=\"fa fa-twitter side-icon\"></i>\r\n              Continue with Twitter</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <p class=\"foot-txt\">You are not a member yet?</p>\r\n        <button type=\"button\"  routerLink=\"signup\" class=\"btn btn-grey\">Sign Up</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/auth/modals/login-modal/login-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_facebook_service__ = __webpack_require__("./src/app/auth/services/facebook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_validators_custom_validators__ = __webpack_require__("./src/app/core/validators/custom-validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_validation__ = __webpack_require__("./src/app/core/services/validation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_auth_actions__ = __webpack_require__("./src/app/auth/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_services_api_service__ = __webpack_require__("./src/app/core/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginModalComponent = /** @class */ (function () {
    function LoginModalComponent(route, store, facebookService, api, fb, validation) {
        this.route = route;
        this.store = store;
        this.facebookService = facebookService;
        this.api = api;
        this.fb = fb;
        this.validation = validation;
        this.user = {
            email: '',
            password: '',
        };
        this.formErrors = {
            email: '',
            password: '',
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__actions_auth_actions__["t" /* SetRegistrationStep */](0));
        this.authError$ = store.select(__WEBPACK_IMPORTED_MODULE_5__core_reducers__["k" /* getErrorFromServer */]);
        this.loginStatus$ = store.select(__WEBPACK_IMPORTED_MODULE_5__core_reducers__["o" /* getLoginStatus */]);
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }
    LoginModalComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.facebookService.FBLoadStatus$();
    };
    LoginModalComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            email: [this.user.email, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__core_validators_custom_validators__["a" /* emailValidator */]
                ]],
            password: [this.user.password, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].maxLength(20)
                ]],
        });
        this.userForm.valueChanges
            .subscribe(function () {
            _this.formErrors = _this.validation.onValueChange(_this.userForm, _this.formErrors, false);
        });
    };
    LoginModalComponent.prototype.facebookLogin = function () {
        var _this = this;
        this.facebookService.login()
            .then(function (res) { return _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__actions_auth_actions__["e" /* LoginAction */]({ data: res, queryUrl: 'users/create/facebook' })); });
    };
    LoginModalComponent.prototype.twitterLogin = function () {
        this.popupCenter('http://uat.travooo.com/api/users/create/twitter/login', 'Twitter', '900', '600');
    };
    LoginModalComponent.prototype.login = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__actions_auth_actions__["e" /* LoginAction */]({ data: this.userForm.value, queryUrl: 'users/login', returnUrl: this.returnUrl }));
    };
    LoginModalComponent.prototype.popupCenter = function (url, title, w, h) {
        // Fixes dual-screen position                         Most browsers      Firefox
        var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
        var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;
        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 2) - (h / 2)) + dualScreenTop;
        var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
        // Puts focus on the newWindow
        if (window.focus) {
            newWindow.focus();
        }
        newWindow.onfocus = function () {
            console.log('HEre is this', this);
        };
    };
    LoginModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-modal',
            template: __webpack_require__("./src/app/auth/modals/login-modal/login-modal.component.html"),
            styles: [__webpack_require__("./src/app/auth/modals/login-modal/login-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1__services_facebook_service__["a" /* FacebookService */],
            __WEBPACK_IMPORTED_MODULE_9__core_services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__core_services_validation__["a" /* ValidationService */]])
    ], LoginModalComponent);
    return LoginModalComponent;
}());



/***/ }),

/***/ "./src/app/auth/modals/register-modal-step-2/register-modal-step-2.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/modals/register-modal-step-2/register-modal-step-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog sign-up-style\" role=\"document\">\r\n  <div class=\"modal-content\">\r\n    <button type=\"button\" class=\"close\"  aria-label=\"Close\" mat-button  [mat-dialog-close]=\"true\" routerLink=\"signup\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n    <div class=\"modal-body body-create\">\r\n      <div class=\"top-layer\">\r\n        <a href=\"#\" class=\"logo-wrap\">\r\n          <img src=\"./assets/image/main-logo.png\" alt=\"\">\r\n        </a>\r\n        <h4 class=\"title\">Create a free account</h4>\r\n        <p *ngIf=\"formErrors.name\" class=\"sub-ttl error-message\">{{ formErrors.name }}</p>\r\n        <p *ngIf=\"formErrors.age\" class=\"sub-ttl error-message\">{{ formErrors.age }}</p>\r\n        <p *ngIf=\"formErrors.gender\" class=\"sub-ttl error-message\">{{ formErrors.gender }}</p>\r\n        <div *ngIf=\"(authError$ | async)\">\r\n          <p  *ngFor=\"let err of  (authError$ | async)\" class=\"sub-ttl error-message\">{{ err }}</p>\r\n        </div>\r\n      </div>\r\n      <form class=\"login-form\" name=\"signupForm2\" [formGroup]=\"userForm\" (ngSubmit)=\"userForm.valid && register()\" >\r\n        <div class=\"step-2\">\r\n          <div class=\"form-group\" *ngIf=\"(user$ | async)\" >\r\n            <p class=\"email-field\">{{(user$ | async).email}}</p>\r\n          </div>\r\n          <div class=\"form-group flex-custom\">\r\n            <div class=\"flex-input\"  [ngClass]=\"{ 'has-danger': formErrors.name }\">\r\n              <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"Full Name\" aria-describedby=\"full name\" />\r\n            </div>\r\n            <div class=\"form-group\"  [ngClass]=\"{ 'has-danger': formErrors.age }\">\r\n              <select class=\"custom-select form-control\" id=\"age\" formControlName=\"age\" [ngStyle]=\"{'height':'52px'}\">\r\n                <option [selected]=\"true\" [value]=\"false\"  disabled>Age</option>\r\n                <option *ngFor=\"let a of ageArray\" [value]=\"a\">{{a}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-check flex-custom\" >\r\n            <div class=\"custom-check-label\">\r\n              <input type=\"radio\" class=\"custom-check-input\" name=\"gender\" id=\"male\" formControlName=\"gender\"  value=\"0\">\r\n              <label for=\"male\">Male</label>\r\n            </div>\r\n            <div class=\"custom-check-label\">\r\n              <input type=\"radio\" class=\"custom-check-input\" name=\"gender\" id=\"female\" formControlName=\"gender\"  value=\"1\">\r\n              <label for=\"female\">Female</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button type=\"submit\" (click)=\"validation.onValueChange(userForm, formErrors, true)\" class=\"btn btn-info\">Sign Up</button>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button type=\"button\"  routerLink=\"signup\" class=\"btn btn-transp\">\r\n              <i class=\"fa fa-angle-left\"></i>\r\n              <span>Back</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group bottom-txt-group\">\r\n          <p class=\"bottom-txt\">Creating an account means you're okay with</p>\r\n          <ul class=\"link-list\">\r\n            <li>\r\n              <b>Travooo's</b>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\"> Terms of Service,</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\"> Privacy Policy</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <p class=\"foot-txt\">Already a member?</p>\r\n      <button type=\"button\"  routerLink=\"login\" class=\"btn btn-grey\">Log In</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/modals/register-modal-step-2/register-modal-step-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModalStep2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_validators_custom_validators__ = __webpack_require__("./src/app/core/validators/custom-validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_services_validation__ = __webpack_require__("./src/app/core/services/validation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_auth_actions__ = __webpack_require__("./src/app/auth/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_range__ = __webpack_require__("./node_modules/lodash/range.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_range__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegisterModalStep2Component = /** @class */ (function () {
    function RegisterModalStep2Component(store, fb, validation) {
        this.store = store;
        this.fb = fb;
        this.validation = validation;
        this.ageArray = __WEBPACK_IMPORTED_MODULE_8_lodash_range__(13, 81);
        this.user = {
            name: '',
            age: '',
            gender: ''
        };
        this.formErrors = {
            name: '',
            age: '',
            gender: ''
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__actions_auth_actions__["t" /* SetRegistrationStep */](2));
        this.user$ = store.select(__WEBPACK_IMPORTED_MODULE_2__core_reducers__["n" /* getLoggedUser */]);
        this.authError$ = store.select(__WEBPACK_IMPORTED_MODULE_2__core_reducers__["k" /* getErrorFromServer */]);
    }
    RegisterModalStep2Component.prototype.ngOnInit = function () {
        this.buildForm();
    };
    RegisterModalStep2Component.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            name: [this.user.name, [
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_4__core_validators_custom_validators__["c" /* nameValidator */]
                ]],
            age: [this.user.age, [
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].required,
                ]],
            gender: [this.user.gender, [
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].required,
                ]]
        });
        this.userForm.valueChanges
            .subscribe(function () {
            _this.formErrors = _this.validation.onValueChange(_this.userForm, _this.formErrors, false);
        });
    };
    RegisterModalStep2Component.prototype.register = function () {
        var _this = this;
        this.user$.take(1).subscribe(function (user) {
            var payload = {
                data: __assign({}, _this.userForm.value, { user_id: user && user.id }),
                queryUrl: 'users/create/step2',
                urlTo: 'signup/step3'
            };
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__actions_auth_actions__["k" /* RegisterAction */](payload));
        });
    };
    RegisterModalStep2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register-modal-step-2',
            template: __webpack_require__("./src/app/auth/modals/register-modal-step-2/register-modal-step-2.component.html"),
            styles: [__webpack_require__("./src/app/auth/modals/register-modal-step-2/register-modal-step-2.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__core_services_validation__["a" /* ValidationService */]])
    ], RegisterModalStep2Component);
    return RegisterModalStep2Component;
}());



/***/ }),

/***/ "./src/app/auth/modals/register-modal-step-3/register-modal-step-3.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/modals/register-modal-step-3/register-modal-step-3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog sign-up-step\" role=\"document\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"title-layer\">\r\n      <h3 class=\"step-ttl\">Select at least 5 favorite <span>countries or cities</span></h3>\r\n      <div class=\"step-info\">\r\n        Step 3 <span>of 5</span>\r\n      </div>\r\n    </div>\r\n  <app-search-box [settings]=\"settings\"></app-search-box>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/modals/register-modal-step-3/register-modal-step-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModalStep3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterModalStep3Component = /** @class */ (function () {
    function RegisterModalStep3Component() {
        this.settings = {
            queryUrl: 'users/set/fav_countries',
            getDataUrl: 'countries/search',
            urlTo: 'signup/step4',
            itemToChoose: 5,
            itemsType: 'countries'
        };
    }
    RegisterModalStep3Component.prototype.ngOnInit = function () {
    };
    RegisterModalStep3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register-modal-step-3',
            template: __webpack_require__("./src/app/auth/modals/register-modal-step-3/register-modal-step-3.component.html"),
            styles: [__webpack_require__("./src/app/auth/modals/register-modal-step-3/register-modal-step-3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterModalStep3Component);
    return RegisterModalStep3Component;
}());



/***/ }),

/***/ "./src/app/auth/modals/register-modal-step-4/register-modal-step-4.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/modals/register-modal-step-4/register-modal-step-4.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog sign-up-step\" role=\"document\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"title-layer\">\r\n      <h3 class=\"step-ttl\">Select 3 <span>favorite places</span> around the world</h3>\r\n      <div class=\"step-info\">\r\n        Step 4 <span>of 5</span>\r\n      </div>\r\n    </div>\r\n    <app-search-box [settings]=\"settings\"></app-search-box>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/modals/register-modal-step-4/register-modal-step-4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModalStep4Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterModalStep4Component = /** @class */ (function () {
    function RegisterModalStep4Component() {
        this.settings = {
            queryUrl: 'users/set/fav_places',
            getDataUrl: 'places/search',
            urlTo: 'signup/step5',
            itemToChoose: 3,
            itemsType: 'places'
        };
    }
    RegisterModalStep4Component.prototype.ngOnInit = function () {
    };
    RegisterModalStep4Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register-modal-step-4',
            template: __webpack_require__("./src/app/auth/modals/register-modal-step-4/register-modal-step-4.component.html"),
            styles: [__webpack_require__("./src/app/auth/modals/register-modal-step-4/register-modal-step-4.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterModalStep4Component);
    return RegisterModalStep4Component;
}());



/***/ }),

/***/ "./src/app/auth/modals/register-modal-step-5/register-modal-step-5.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/modals/register-modal-step-5/register-modal-step-5.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog sign-up-step\" role=\"document\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"title-layer\">\r\n      <h3 class=\"step-ttl\">Select your preferred <span>travel styles</span></h3>\r\n      <div class=\"step-info\">\r\n        Step 5 <span>of 5</span>\r\n      </div>\r\n    </div>\r\n    <app-search-box [settings]=\"settings\"></app-search-box>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/modals/register-modal-step-5/register-modal-step-5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModalStep5Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterModalStep5Component = /** @class */ (function () {
    function RegisterModalStep5Component() {
        this.settings = {
            queryUrl: 'users/set/travel_styles',
            getDataUrl: 'travelstyles/search ',
            urlTo: 'signup/done',
            itemToChoose: 3,
            itemsType: 'travel_styles'
        };
    }
    RegisterModalStep5Component.prototype.ngOnInit = function () {
    };
    RegisterModalStep5Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register-modal-step-5',
            template: __webpack_require__("./src/app/auth/modals/register-modal-step-5/register-modal-step-5.component.html"),
            styles: [__webpack_require__("./src/app/auth/modals/register-modal-step-5/register-modal-step-5.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterModalStep5Component);
    return RegisterModalStep5Component;
}());



/***/ }),

/***/ "./src/app/auth/modals/register-modal/register-modal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/modals/register-modal/register-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog sign-up-style\" >\r\n  <div class=\"modal-content\">\r\n    <!--<button type=\"button\" class=\"close\"  mat-button  [mat-dialog-close]=\"true\" routerLink=\"/\">\r\n      <span >&times;</span>\r\n    </button>-->\r\n    <div class=\"modal-body body-create\">\r\n      <div class=\"top-layer\">\r\n        <a routerLink=\"/\" class=\"logo-wrap\">\r\n          <img src=\"./assets/image/main-logo.png\" alt=\"\">\r\n        </a>\r\n        <h4 class=\"title\">Create a free account</h4>\r\n       <!-- TODO MOVE FORMS ERROR BLOCK TO COMPONENT-->\r\n        <p *ngIf=\"formErrors.username\" class=\"sub-ttl error-message\">{{ formErrors.username }}</p>\r\n        <p *ngIf=\"formErrors.email\" class=\"sub-ttl error-message\">{{ formErrors.email }}</p>\r\n        <p *ngIf=\"formErrors.password\" class=\"sub-ttl error-message\">{{ formErrors.password }}</p>\r\n        <p *ngIf=\"formErrors.password_confirmation\" class=\"sub-ttl error-message\">{{ formErrors.password_confirmation }}</p>\r\n        <div *ngIf=\"(authError$ | async)\">\r\n          <p   class=\"sub-ttl error-message\">{{ (authError$ | async).message }}</p>\r\n        </div>\r\n      </div>\r\n\r\n      <form class=\"login-form\" [formGroup]=\"userForm\" (ngSubmit)=\"userForm.valid && register()\" >\r\n        <div class=\"step-1\">\r\n          <div class=\"form-group\" [ngClass]=\"{ 'has-danger': formErrors.username }\">\r\n            <input type=\"text\" id=\"username\" class=\"form-control\" formControlName=\"username\"  placeholder=\"Username\" /></div>\r\n\r\n          <div class=\"form-group\" [ngClass]=\"{ 'has-danger': formErrors.email }\">\r\n            <input id=\"email\" type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\"  />\r\n          </div>\r\n          <div class=\"form-group\" [ngClass]=\"{ 'has-danger': formErrors.password }\">\r\n            <input id=\"password\" type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" />\r\n          </div>\r\n          <div class=\"form-group\" [ngClass]=\"{ 'has-danger': formErrors.password_confirmation }\">\r\n            <input id=\"password_confirmation\" type=\"password\" class=\"form-control\" formControlName=\"password_confirmation\" placeholder=\"Password confirmation\" />\r\n          </div>\r\n          <div class=\"form-margin\"></div>\r\n          <div class=\"form-group\">\r\n            <button type=\"submit\" (click)=\"validation.onValueChange(userForm, formErrors, true)\" class=\"btn btn-success\">Continue</button>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <p class=\"simple-txt\">Or</p>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button type=\"button\" class=\"btn btn-primary\">\r\n              <i class=\"fa fa-facebook side-icon\"></i>\r\n              Continue with Facebook</button>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button type=\"button\" class=\"btn btn-info\">\r\n              <i class=\"fa fa-twitter side-icon\"></i>\r\n              Continue with Twitter</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group bottom-txt-group\">\r\n          <p class=\"bottom-txt\">Creating an account means you're okay with</p>\r\n          <ul class=\"link-list\">\r\n            <li><b>Travooo's</b></li>\r\n            <li>\r\n              <a routerLink=\"/terms-of-service\"> Terms of Service,</a>\r\n            </li>\r\n            <li>\r\n              <a routerLink=\"/privacy-policy\"> Privacy Policy</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <p class=\"foot-txt\">Already a member?</p>\r\n      <button type=\"button\" routerLink=\"login\" class=\"btn btn-grey\">Log In</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/modals/register-modal/register-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_auth_actions__ = __webpack_require__("./src/app/auth/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_validators_custom_validators__ = __webpack_require__("./src/app/core/validators/custom-validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_services_validation__ = __webpack_require__("./src/app/core/services/validation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_services_modal_manager_service__ = __webpack_require__("./src/app/core/services/modal-manager.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterModalComponent = /** @class */ (function () {
    function RegisterModalComponent(store, fb, validation, modalManager) {
        this.store = store;
        this.fb = fb;
        this.validation = validation;
        this.modalManager = modalManager;
        this.user = {
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
        };
        this.formErrors = {
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_auth_actions__["t" /* SetRegistrationStep */](1));
        this.authError$ = store.select(__WEBPACK_IMPORTED_MODULE_4__core_reducers__["k" /* getErrorFromServer */]);
    }
    RegisterModalComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    RegisterModalComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            username: [this.user.username, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_5__core_validators_custom_validators__["c" /* nameValidator */]
                ]],
            email: [this.user.email, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_5__core_validators_custom_validators__["a" /* emailValidator */]
                ]],
            password: [this.user.password, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(20)
                ]],
            password_confirmation: [this.user.password_confirmation, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
                ]]
        }, { validator: __WEBPACK_IMPORTED_MODULE_5__core_validators_custom_validators__["b" /* matchPasswordValidator */] });
        this.userForm.valueChanges
            .subscribe(function () {
            _this.formErrors = _this.validation.onValueChange(_this.userForm, _this.formErrors, false);
        });
    };
    RegisterModalComponent.prototype.register = function () {
        var payload = {
            data: __assign({}, this.userForm.value),
            queryUrl: 'users/create',
            urlTo: 'signup/step2'
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_auth_actions__["k" /* RegisterAction */](payload));
    };
    RegisterModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register-modal',
            template: __webpack_require__("./src/app/auth/modals/register-modal/register-modal.component.html"),
            styles: [__webpack_require__("./src/app/auth/modals/register-modal/register-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__core_services_validation__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_7__core_services_modal_manager_service__["a" /* ModalManager */]])
    ], RegisterModalComponent);
    return RegisterModalComponent;
}());



/***/ }),

/***/ "./src/app/auth/modals/signup-done/signup-done.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/modals/signup-done/signup-done.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog sign-up-step final-step\" role=\"document\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-body\">\r\n      <div class=\"modal-header\">\r\n        <i class=\"trav-check-circle-icon\"></i>\r\n      </div>\r\n      <div class=\"modal-main\">\r\n        <h4 class=\"ttl\">Signup Successful!</h4>\r\n        <p>Welcome! We're excited to have you in our community, Your signup is complete and you're all set to start enjoying Travooo.</p>\r\n        <button type=\"button\" routerLink=\"/home\" class=\"btn btn-light-primary btn-bordered\">Get Started!</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/modals/signup-done/signup-done.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupDoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupDoneComponent = /** @class */ (function () {
    function SignupDoneComponent() {
    }
    SignupDoneComponent.prototype.ngOnInit = function () {
    };
    SignupDoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup-done',
            template: __webpack_require__("./src/app/auth/modals/signup-done/signup-done.component.html"),
            styles: [__webpack_require__("./src/app/auth/modals/signup-done/signup-done.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupDoneComponent);
    return SignupDoneComponent;
}());



/***/ }),

/***/ "./src/app/auth/reducers/auth.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export INIT_STATE */
/* harmony export (immutable) */ __webpack_exports__["f"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLoggedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getRegistrationStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getResetPasswordStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoginStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getUserId; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_auth_actions__ = __webpack_require__("./src/app/auth/actions/auth.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var INIT_STATE = {
    user: null,
    registrationStep: 0,
    isLoggedIn: false,
    resetPasswordStatus: ''
};
/**
 * Exports reducing function
 * @param state
 * @param action
 */
function reducer(state, action) {
    if (state === void 0) { state = INIT_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_actions__["c" /* LOGIN */]:
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_actions__["d" /* LOGIN_SUCCESS */]:
            return __assign({}, state, { user: action.payload.data, isLoggedIn: true });
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_actions__["q" /* SET_REGISTRATION_STEP */]:
            return __assign({}, state, { registrationStep: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_actions__["g" /* REGISTER */]:
            return __assign({}, state, { user: __assign({}, state.user, action.payload.data) });
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_actions__["h" /* REGISTRATION_SUCCESS */]:
            return __assign({}, state, { user: __assign({}, state.user, (state.registrationStep === 1 ? { id: action.payload.res.data } : state.user)), registrationStep: state.registrationStep + 1, authError: null });
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_actions__["j" /* RESET_PASSWORD_SUCCESS */]:
            return __assign({}, state, { resetPasswordStatus: 'emailSent' });
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_actions__["p" /* SET_PASSWORD_SUCCESS */]:
            return __assign({}, state, { resetPasswordStatus: 'success' });
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_actions__["a" /* CLEAR_PASSWORD_STATUS */]:
            return __assign({}, state, { resetPasswordStatus: '' });
        default:
            return state;
    }
}
var getLoggedUser = function (state) { return state.user; };
var getRegistrationStep = function (state) { return state.registrationStep; };
var getResetPasswordStatus = function (state) { return state.resetPasswordStatus; };
var getLoginStatus = function (state) { return state.isLoggedIn; };
var getUserId = function (state) { return state.user.user_id; };


/***/ }),

/***/ "./src/app/auth/services/facebook.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromPromise.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JSScript;
var FacebookService = /** @class */ (function () {
    /**
     * Default constructor
     */
    function FacebookService(zone) {
        var _this = this;
        this.zone = zone;
        /**
         * Handler that will unsubscribe all registered subscription
         * @type {Subject<void>}
         */
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        // Shows if FB SDK is laoded or not
        // Can be used outside the module to draw Loading status of button
        this.FBLoadStatus$ = function () {
            var fn = function (d, s, id) {
                return new Promise(function (resolve, reject) {
                    if (JSScript) {
                        return resolve({ loaded: true, loading: false, error: undefined });
                    }
                    var js;
                    var fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) {
                        return;
                    }
                    js = d.createElement(s);
                    js.id = id;
                    js.src = '//connect.facebook.net/en_US/all.js';
                    fjs.parentNode.insertBefore(js, fjs);
                    js.onload = function (ev) { return _this.zone.run(function () {
                        JSScript = js;
                        _this.initFB();
                        resolve({ loaded: true, loading: false, error: undefined });
                    }); };
                    js.onerror = function (err) { return resolve({ loaded: false, loading: false, error: err }); };
                });
            };
            var promise = fn(document, 'script', 'facebook-jssdk');
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].fromPromise(promise);
        };
    }
    FacebookService.prototype.initFB = function () {
        return new Promise(function (resolve, reject) {
            window['fbAsyncInit'] = function () {
                window['FB'].init({
                    appId: '171887576639276',
                    version: 'v2.7',
                    status: true
                });
                resolve();
                // Additional initialization code here
            };
        });
    };
    /**
     * Log in using facebook
     */
    FacebookService.prototype.login = function () {
        return new Promise(function (resolve, reject) {
            FB.login(function (response) {
                if (response.authResponse) {
                    FB.api('/me?fields=id,first_name,email,last_name', function (res) {
                        res.error ? reject() : resolve({ fbuid: res.id, email: res.email });
                    });
                }
            }, { scope: 'email' });
        });
    };
    FacebookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], FacebookService);
    return FacebookService;
}());



/***/ }),

/***/ "./src/app/core/actions/core.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OPEN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLOSE_OPENED_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return OpenModalAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CloseOpenedModalAction; });
var OPEN_MODAL = '[Core] Open modal';
var CLOSE_OPENED_MODAL = '[Core] Close opened modal';
/**
 * Open  modal
 */
var OpenModalAction = /** @class */ (function () {
    /**
     * Default constructor
     * @param payload
     */
    function OpenModalAction(payload) {
        this.payload = payload;
        this.type = OPEN_MODAL;
    }
    return OpenModalAction;
}());

var CloseOpenedModalAction = /** @class */ (function () {
    function CloseOpenedModalAction() {
        this.type = CLOSE_OPENED_MODAL;
    }
    return CloseOpenedModalAction;
}());



/***/ }),

/***/ "./src/app/core/actions/error.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REMOVE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddErrorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RemoveErrorAction; });
var ADD_ERROR = '[Error] Add error';
var REMOVE_ERROR = '[Error] Remove error';
/**
 * Add error from server
 */
var AddErrorAction = /** @class */ (function () {
    /**
     * Default constructor
     * @param payload
     */
    function AddErrorAction(payload) {
        this.payload = payload;
        this.type = ADD_ERROR;
    }
    return AddErrorAction;
}());

/**
 * Remove error from server
 */
var RemoveErrorAction = /** @class */ (function () {
    function RemoveErrorAction() {
        this.type = REMOVE_ERROR;
        /**
         * Default constructor
         * @param payload
         */
    }
    return RemoveErrorAction;
}());



/***/ }),

/***/ "./src/app/core/actions/router.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FORWARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SEARCH; });
/* unused harmony export GoAction */
/* unused harmony export BackAction */
/* unused harmony export ForwardAction */
/* unused harmony export SearchAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return go; });
/* unused harmony export back */
/* unused harmony export search */
var GO = '[Router] Go';
var BACK = '[Router] Back';
var FORWARD = '[Router] Forward';
var SEARCH = '[Router] Search';
var GoAction = /** @class */ (function () {
    function GoAction(payload) {
        this.payload = payload;
        this.type = GO;
    }
    return GoAction;
}());

/**
 * Navigates back
 */
var BackAction = /** @class */ (function () {
    function BackAction() {
        this.type = BACK;
    }
    return BackAction;
}());

/**
 * Navigates forward
 */
var ForwardAction = /** @class */ (function () {
    function ForwardAction() {
        this.type = FORWARD;
    }
    return ForwardAction;
}());

/**
 * Navigate with changing quesry params
 */
var SearchAction = /** @class */ (function () {
    function SearchAction(payload) {
        this.payload = payload;
        this.type = SEARCH;
    }
    ;
    return SearchAction;
}());

/**
 * Temporary function for faster migration to v4 of th ngrx. Creates Go action
 */
var go = function (path, query) { return new GoAction({ path: [path], query: query }); };
/**
 * Temporary function for faster migration to v4 of th ngrx. Creates Back action
 */
var back = function () { return new BackAction(); };
/**
 * Temporary function for faster migration to v4 of th ngrx. Creates Search
 */
var search = function (query) { return new SearchAction(query); };


/***/ }),

/***/ "./src/app/core/components/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h1 class=\"text-center\">Opps , something went wrong\r\n</h1>\r\n"

/***/ }),

/***/ "./src/app/core/components/error/error.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error',
            template: __webpack_require__("./src/app/core/components/error/error.component.html"),
            styles: [__webpack_require__("./src/app/core/components/error/error.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/core/components/follow-button/follow-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn  btn-bordered btn-icon-side btn-icon-right\"\r\n        [ngClass] =\"{'btn-light-grey': !isFollowed, 'btn-light-primary': isFollowed }\"\r\n        (click)=\"toggleFollow()\">\r\n  <i class=\"trav-comment-plus-icon\"></i>\r\n  <span> {{isFollowed ? 'Unfollow' : 'Follow'}}</span>\r\n  <span class=\"icon-wrap\"><i class=\"trav-view-plan-icon\"></i></span>\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/core/components/follow-button/follow-button.component.scss":
/***/ (function(module, exports) {

module.exports = ".btn.btn-light-primary:hover {\n  background: #4080ff; }\n"

/***/ }),

/***/ "./src/app/core/components/follow-button/follow-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_auto_unsubscribe__ = __webpack_require__("./node_modules/ngx-auto-unsubscribe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__country_actions_country_actions__ = __webpack_require__("./src/app/country/actions/country.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FollowButtonComponent = /** @class */ (function () {
    function FollowButtonComponent(store) {
        var _this = this;
        this.store = store;
        this.subscriptions = [
            this.store.select(__WEBPACK_IMPORTED_MODULE_1__reducers__["e" /* getCountryId */]).subscribe(function (id) { return _this.id = id; }),
            this.store.select(__WEBPACK_IMPORTED_MODULE_1__reducers__["m" /* getFollowStatus */]).subscribe(function (status) { return _this.isFollowed = status; })
        ];
    }
    FollowButtonComponent.prototype.ngOnInit = function () {
    };
    FollowButtonComponent.prototype.toggleFollow = function () {
        console.log(this.isFollowed);
        this.isFollowed ?
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__country_actions_country_actions__["i" /* UnfollowCountryAction */](this.id)) :
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__country_actions_country_actions__["c" /* FollowCountryAction */](this.id));
    };
    FollowButtonComponent.prototype.ngOnDestroy = function () {
    };
    FollowButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3_ngx_auto_unsubscribe__["a" /* AutoUnsubscribe */])({ includeArrays: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-follow-button',
            template: __webpack_require__("./src/app/core/components/follow-button/follow-button.component.html"),
            styles: [__webpack_require__("./src/app/core/components/follow-button/follow-button.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
    ], FollowButtonComponent);
    return FollowButtonComponent;
}());



/***/ }),

/***/ "./src/app/core/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"foot-top\">\r\n    <ul class=\"aside-foot-menu\">\r\n      <li><a href=\"#\">About</a></li>\r\n      <li><a href=\"#\">Careers</a></li>\r\n      <li><a href=\"#\">Sitemap</a></li>\r\n      <li><a href=\"#\">Privacy</a></li>\r\n      <li><a href=\"#\">Terms</a></li>\r\n      <li><a href=\"#\">Contact</a></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"foot-bottom\">\r\n    <p class=\"copyright\">Travooo © 2017</p>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/core/components/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/core/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/core/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/components/gallery-modal/gallery-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"lg-outer main-gallery-block  lg-slide lg-grab lg-show-after-load lg-pull-caption-up lg-has-thumb lg-visible lg-thumb-open\"\r\n      [ngClass]=\"{'lg-dropdown-active': isActiveSocialShare}\">\r\n  <div class=\"lg\" style=\"width:100%; height:100%\">\r\n    <div class=\"lg-inner\">\r\n      <div class=\"lg-item lg-current lg-complete\" style=\"display: block!important\">\r\n        <div class=\"lg-img-wrap\">\r\n          <a href=\"{{'https://s3.amazonaws.com/travooo-images2/' + medias[currentIndex].url}}\" target=\"_blank\">\r\n            <img class=\"lg-object lg-image\"\r\n                 src=\"{{'https://s3.amazonaws.com/travooo-images2/' + medias[currentIndex].url}}\">\r\n          </a>\r\n        </div>\r\n        <div class=\"cover-block\" style=\"width: 1140px;\">\r\n          <div class=\"cover-block-inner comment-block\" style=\"width: 1140px;\">\r\n            <ul class=\"modal-outside-link-list white-bg\">\r\n              <li class=\"outside-link\">\r\n                <a (click)=\"closeModal()\">\r\n                  <div class=\"round-icon\">\r\n                    <i class=\"trav-angle-left\"></i>\r\n                  </div>\r\n                  <span>Back</span>\r\n                </a>\r\n              </li>\r\n              <li class=\"outside-link\">\r\n                <a (click)=\"reportMedia()\">\r\n                  <div class=\"round-icon\">\r\n                    <i class=\"trav-flag-icon\"></i>\r\n                  </div>\r\n                  <span>Report</span>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n            <div class=\"gallery-comment-wrap\">\r\n              <div class=\"gallery-comment-inner mCustomScrollbar _mCS_4\">\r\n                <div id=\"mCSB_4\" class=\"mCustomScrollBox mCS-light mCSB_vertical mCSB_inside\" style=\"max-height: none;\"\r\n                     tabindex=\"0\">\r\n                  <div id=\"mCSB_4_container\" class=\"mCSB_container\" style=\"position: relative; top: 0px; left: 0px;\"\r\n                       dir=\"ltr\">\r\n                    <div class=\"top-gallery-content gallery-comment-top\">\r\n                      <div class=\"top-info-layer\">\r\n                        <div class=\"top-avatar-wrap\">\r\n                          <img src=\"http://placehold.it/50x50\" *ngIf=\"!medias[currentIndex].users || !medias[currentIndex].users.length\" alt=\"\" class=\"mCS_img_loaded\">\r\n                          <img src=\"{{'https://s3.amazonaws.com/travooo-images2/users/profile/' + medias[currentIndex].users[0].id + '/' + medias[currentIndex].users[0].profile_picture }}\" *ngIf=\"medias[currentIndex].users && medias[currentIndex].users.length\" alt=\"\" class=\"mCS_img_loaded\">\r\n                        </div>\r\n                        <div class=\"top-info-txt\">\r\n                          <div class=\"preview-txt\">\r\n                            <a class=\"dest-name\" *ngIf=\"!medias[currentIndex].users || !medias[currentIndex].users.length\">Hardcoded on front</a>\r\n                            <a class=\"dest-name\" *ngIf=\"medias[currentIndex].users && medias[currentIndex].users.length\">{{medias[currentIndex].users[0].name}}</a>\r\n                            <p class=\"dest-place\" *ngIf=\"medias[currentIndex].uploaded_at\">uploaded a <b>photo</b> <span class=\"date\">{{ medias[currentIndex].uploaded_at | timeAgo}}</span></p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"gallery-comment-txt\">\r\n                        <p>This is an amazing street to walk around and do some shopping</p>\r\n                      </div>\r\n                      <div class=\"gal-com-footer-info\" *ngIf=\"medias[currentIndex].reactions\">\r\n                        <div class=\"post-foot-block post-reaction\" (click)=\"likeMedia()\">\r\n                          <i class=\"trav-heart-fill-icon\"></i>\r\n                          <span><b>{{medias[currentIndex].reactions.likes.length}}</b></span>\r\n                        </div>\r\n                        <div class=\"post-foot-block post-comment-place\">\r\n                          <i class=\"trav-location\"></i>\r\n                          <span class=\"place-name\">510 LaGuardia Pl, Paris, France</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"post-comment-layer\" *ngIf=\"medias[currentIndex].reactions\">\r\n                      <div class=\"post-comment-top-info\">\r\n                        <div class=\"comm-count-info\">\r\n                          {{medias[currentIndex].reactions.comments.length}} Comments\r\n                        </div>\r\n                        <div class=\"comm-count-info\">\r\n                          <!--3 / 20-->\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"post-comment-wrapper\" *ngIf=\"medias[currentIndex].reactions\">\r\n                        <div class=\"post-comment-row\" *ngFor=\"let comment of medias[currentIndex].reactions.comments\">\r\n                          <div class=\"post-com-avatar-wrap\">\r\n                            <img src=\"http://placehold.it/45x45\" *ngIf=\"!comment.user || !comment.user.profile_picture\" >\r\n                            <img src=\"{{'https://s3.amazonaws.com/travooo-images2/users/profile/' + comment.users_id + '/' + comment.user.profile_picture }}\" *ngIf=\"comment.user && comment.user.profile_picture\">\r\n                          </div>\r\n                          <div class=\"post-comment-text\">\r\n                            <div class=\"post-com-name-layer\">\r\n                              <a  class=\"comment-name\">{{comment.user.name}}</a>\r\n                              <a  class=\"comment-nickname\">@{{comment.user.username}}</a>\r\n                            </div>\r\n                            <div class=\"comment-txt\">\r\n                              <p><b>{{comment.reply_to.id ? comment.reply_to.user.name + \", \" : ''}}</b>{{comment.comment}}</p>\r\n                            </div>\r\n                            <div class=\"comment-bottom-info\">\r\n                               <div class=\"com-reaction pull-left\" (click)=\"likeComment(comment)\">\r\n                                 <img src=\"./assets/image/icon-like.png\" alt=\"\" class=\"mCS_img_loaded\">\r\n                                 <span>{{comment.likes.length}}</span>\r\n                               </div>\r\n                              <div class=\"com-time pull-left\" >{{comment.created_at | timeAgo}}</div>\r\n                              <div class=\"com-time reply-to pull-right\" (click)=\"setReplyTo(comment.id, comment.user.name)\">reply</div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div id=\"mCSB_4_scrollbar_vertical\"\r\n                       class=\"mCSB_scrollTools mCSB_4_scrollbar mCS-light mCSB_scrollTools_vertical\"\r\n                       style=\"display: block;\">\r\n                    <div class=\"mCSB_draggerContainer\">\r\n                      <div id=\"mCSB_4_dragger_vertical\" class=\"mCSB_dragger\"\r\n                           style=\"position: absolute; min-height: 30px; top: 0px; display: block; height: 445px; max-height: 540px;\">\r\n                        <div class=\"mCSB_dragger_bar\" style=\"line-height: 30px;\"></div>\r\n                      </div>\r\n                      <div class=\"mCSB_draggerRail\"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-add-comment-block\">\r\n                <div class=\"avatar-wrap\">\r\n                  <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-add-com-input\">\r\n                  <input type=\"text\" #comment (keyup.enter)=\"sendComment()\" [(ngModel)]=\"currentComment\"\r\n                         placeholder=\"Write a commenttt\">\r\n                </div>\r\n                <div class=\"pull-right reply\" *ngIf=\"replayTo.id\">Reply to:\r\n                  <b>{{replayTo.name}}</b>\r\n                  <span (click)=\"setReplyTo(0,'')\">+</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"lg-toolbar lg-group\">\r\n      <span class=\"lg-icon lg-close\" (click)=\"closeModal()\"></span>\r\n      <span id=\"lg-share\" class=\"lg-icon\" (click)=\"isActiveSocialShare = !isActiveSocialShare\"></span>\r\n      <ul class=\"lg-dropdown\" style=\"position: absolute;\">\r\n        <li>\r\n          <a id=\"lg-share-facebook\"  class=\"text-left\" target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u={{pageUrlEncoded}}\">\r\n            <span class=\"lg-icon\"></span>\r\n            <span class=\"lg-dropdown-text\">Facebook</span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a id=\"lg-share-twitter\" target=\"_blank\" href=\"https://twitter.com/intent/tweet?url={{pageUrl}}\">\r\n            <span class=\"lg-icon\"></span><span class=\"lg-dropdown-text\">Twitter</span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a id=\"lg-share-googleplus\" target=\"_blank\" href=\"https://plus.google.com/share?url={{pageUrl}}\">\r\n            <span class=\"lg-icon\"></span>\r\n            <span class=\"lg-dropdown-text\">GooglePlus</span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a id=\"lg-share-pinterest\" target=\"_blank\" href=\"http://www.pinterest.com/pin/create/button/?url={{pageUrl}}\">\r\n            <span class=\"lg-icon\"></span>\r\n            <span class=\"lg-dropdown-text\">Pinterest</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"lg-actions\">\r\n      <button (click)=\"prevSlide()\" *ngIf=\"currentIndex > 0\" class=\"lg-prev lg-icon\"><i class=\"trav-angle-left\"></i>\r\n      </button>\r\n      <button (click)=\"nextSlide()\" *ngIf=\"currentIndex < medias.length - 1\" class=\"lg-next lg-icon\"><i\r\n        class=\"trav-angle-right\"></i></button>\r\n    </div>\r\n    <div class=\"lg-thumb-outer lg-grab\" style=\"height: 180px;\">\r\n      <div class=\"lg-thumb lg-group\">\r\n        <div class=\"lg-thumb-item\" *ngFor=\"let media of medias; let i = index\"\r\n             [ngClass]=\"{'active' : currentIndex === i}\"\r\n             (click)=\"selectMedia(i)\">\r\n          <img src=\"{{'https://s3.amazonaws.com/travooo-images2/' + media.url}}\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/core/components/gallery-modal/gallery-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ".lg-toolbar .lg-close {\n  position: relative;\n  cursor: pointer; }\n  .lg-toolbar .lg-close .trav-close-icon:before {\n    color: #fff;\n    position: absolute;\n    top: 5px;\n    left: 6px;\n    cursor: pointer; }\n  .lg-outer .lg-item.lg-current {\n  width: 1140px; }\n  .lg-outer .lg-item.lg-current:before {\n    display: none; }\n  .main-gallery-block.lg-outer .lg-item .lg-img-wrap {\n  left: 0;\n  height: 100%;\n  position: relative;\n  width: 750px;\n  z-index: 900;\n  display: block; }\n  .main-gallery-block.lg-outer .lg-item .lg-img-wrap:before {\n    display: none; }\n  .main-gallery-block.lg-outer .lg-item .lg-img-wrap a {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    left: calc(50%);\n    max-height: 640px;\n    display: block; }\n  .main-gallery-block.lg-outer .lg-item .lg-img-wrap a img {\n      max-height: 640px !important; }\n  .lg-outer.lg-has-thumb .lg-item {\n  padding-bottom: 0; }\n  .main-gallery-block.lg-outer .lg-thumb.lg-group {\n  width: 1200px;\n  position: relative;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n  -webkit-transition-duration: 600ms;\n          transition-duration: 600ms; }\n  .main-gallery-block.lg-outer .lg-thumb.lg-group .lg-thumb-item {\n    width: 100px;\n    height: 100%;\n    margin-right: 20px; }\n  .main-gallery-block.lg-outer .lg-thumb.lg-group .lg-thumb-item.active {\n      opacity: 1; }\n  .modal-outside-link-list li a {\n  cursor: pointer; }\n  .post-foot-block.post-reaction {\n  cursor: pointer; }\n  .lg-outer .lg-dropdown {\n  right: 60px; }\n  .lg-outer .lg-dropdown a {\n    width: 120px;\n    white-space: normal; }\n  .lg-outer .lg-dropdown a .lg-dropdown-text {\n      margin-top: 0; }\n  .reply-to {\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  cursor: pointer;\n  opacity: 0; }\n  .post-comment-row:hover .reply-to {\n  opacity: 1; }\n  .post-comment-wrapper .post-comment-row .post-comment-text .comment-bottom-info {\n  display: block; }\n  .reply {\n  color: #404040;\n  position: relative;\n  font-size: 12px;\n  height: 50px;\n  padding: 12px 0px 8px 2px;\n  margin-right: 10px; }\n  .reply span {\n    position: absolute;\n    font-size: 16px;\n    font-weight: bold;\n    right: 0;\n    top: 0;\n    margin-top: 5px;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    cursor: pointer; }\n  .post-comment-wrapper .post-comment-row .post-comment-text .post-com-name-layer a.comment-nickname {\n  font-size: 12px; }\n  .com-reaction {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/core/components/gallery-modal/gallery-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_auto_unsubscribe__ = __webpack_require__("./node_modules/ngx-auto-unsubscribe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_findIndex__ = __webpack_require__("./node_modules/lodash/findIndex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_findIndex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_findIndex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__country_services_country_service__ = __webpack_require__("./src/app/country/services/country.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var GalleryModalComponent = /** @class */ (function () {
    function GalleryModalComponent(data, store, countryService, toastr, router) {
        this.data = data;
        this.store = store;
        this.countryService = countryService;
        this.toastr = toastr;
        this.router = router;
        this.currentIndex = 0;
        this.pageUrl = window.location.href;
        this.pageUrlEncoded = encodeURIComponent(window.location.href);
        this.isActiveSocialShare = false;
        this.replayTo = {
            id: 0,
            name: ''
        };
        this.subscriptions = [];
        this.medias = this.data.data;
        this.url = this.router.url.substr(0, this.router.url.lastIndexOf('/') + 1);
    }
    GalleryModalComponent.prototype.ngOnInit = function () {
        console.log("data.params", this.data);
        this.currentIndex = __WEBPACK_IMPORTED_MODULE_7_lodash_findIndex__(this.medias, { id: +this.data.params.mediaId });
        this.currentIndex = (this.currentIndex === -1) ? 0 : this.currentIndex;
        this.getReactions();
    };
    GalleryModalComponent.prototype.setReplyTo = function (id, name) {
        this.replayTo.id = id;
        this.replayTo.name = name;
    };
    GalleryModalComponent.prototype.sendComment = function () {
        var _this = this;
        console.log("Enter pressed", this.currentComment);
        this.countryService.sendComment(this.medias[this.currentIndex].id, this.currentComment, this.replayTo.id)
            .subscribe(function (res) { return res.status ? _this.addComment() : _this.toastrError(); });
    };
    GalleryModalComponent.prototype.toastrError = function (err) {
        this.toastr.error(err || 'Oops , something went wrong');
    };
    GalleryModalComponent.prototype.toastrSuccess = function (err) {
        this.toastr.success(err || 'Succesfully completed');
    };
    GalleryModalComponent.prototype.nextSlide = function () {
        this.currentIndex++;
        this.changeNavigation();
        this.getReactions();
    };
    GalleryModalComponent.prototype.prevSlide = function () {
        this.currentIndex--;
        this.changeNavigation();
        this.getReactions();
    };
    GalleryModalComponent.prototype.selectMedia = function (i) {
        this.currentIndex = i;
        this.changeNavigation();
        this.getReactions();
    };
    GalleryModalComponent.prototype.closeModal = function () {
        this.data.close();
        this.subscriptions.push(this.store.select(__WEBPACK_IMPORTED_MODULE_3__core_reducers__["p" /* getOpenedModalRef */]).take(1).subscribe(function (res) { return res && res.close(); }));
    };
    GalleryModalComponent.prototype.changeNavigation = function () {
        this.router.navigate([this.url + this.medias[this.currentIndex].id]);
    };
    GalleryModalComponent.prototype.getReactions = function () {
        var _this = this;
        if (!this.medias[this.currentIndex].reactions) {
            this.countryService.getReactions(this.medias[this.currentIndex].id)
                .subscribe(function (res) { return _this.medias[_this.currentIndex].reactions = res.data; });
        }
    };
    GalleryModalComponent.prototype.reportMedia = function () {
        var _this = this;
        this.countryService.reportMedia(this.medias[this.currentIndex].id)
            .subscribe(function (res) { return res.status ? _this.toastrSuccess(res.data.message) : _this.toastrError(res.data.message); });
    };
    GalleryModalComponent.prototype.likeMedia = function () {
        var _this = this;
        this.countryService.likeMedia(this.medias[this.currentIndex].id)
            .subscribe(function (res) { return res.liked ? _this.likedSuccess() : _this.removeLike(); });
    };
    GalleryModalComponent.prototype.likeComment = function (comment) {
        var _this = this;
        this.countryService.likeComment(this.medias[this.currentIndex].id, comment.id)
            .subscribe(function (res) { return res.liked ?
            _this.commentLikedSuccess(comment) :
            _this.commentRemoveLike(comment); });
    };
    GalleryModalComponent.prototype.commentLikedSuccess = function (comment) {
        comment.likes.length++;
        this.toastrSuccess('Liked successfully added');
    };
    GalleryModalComponent.prototype.commentRemoveLike = function (comment) {
        comment.likes.length--;
        this.toastrError('Like  removed');
    };
    GalleryModalComponent.prototype.likedSuccess = function () {
        this.medias[this.currentIndex].reactions.likes.length++;
        this.toastrSuccess('Liked successfully added');
    };
    GalleryModalComponent.prototype.removeLike = function () {
        this.medias[this.currentIndex].reactions.likes.length--;
        this.toastrError('Like  removed');
    };
    GalleryModalComponent.prototype.addComment = function () {
        var commentModel = {
            comment: this.currentComment,
            user: { name: "hardcoded name" },
            reply_to: {
                id: this.replayTo.id,
                user: {
                    name: this.replayTo.name
                }
            },
            created_at: new Date()
        };
        this.medias[this.currentIndex].reactions.comments.push(commentModel);
        this.currentComment = '';
        this.replayTo.id = 0;
    };
    GalleryModalComponent.prototype.ngOnDestroy = function () {
    };
    GalleryModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4_ngx_auto_unsubscribe__["a" /* AutoUnsubscribe */])({ includeArrays: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gallery-modal',
            template: __webpack_require__("./src/app/core/components/gallery-modal/gallery-modal.component.html"),
            styles: [__webpack_require__("./src/app/core/components/gallery-modal/gallery-modal.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_8__country_services_country_service__["a" /* CountryService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */]])
    ], GalleryModalComponent);
    return GalleryModalComponent;
}());



/***/ }),

/***/ "./src/app/core/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<header class=\"main-header step-header\">\r\n\r\n  <div class=\"container\">\r\n    <nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"./assets/image/main-small-logo.png\" alt=\"\">\r\n      </a>\r\n\r\n\r\n      <!--  PROGRESS SECTION START -->\r\n\r\n      <div class=\"progress-block signUpProgress\" *ngIf=\"(registrationStep$ | async)\">\r\n        <div class=\"progress-wrapper\">\r\n          <div class=\"progress-point\">Start</div>\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" [attr.aria-valuenow]=\"(registrationStep$ | async)\" aria-valuemin=\"0\" aria-valuemax=\"6\" [style.width]=\"1\"></div>\r\n          </div>\r\n          <div class=\"progress-point\">Finish</div>\r\n        </div>\r\n      </div>\r\n\r\n      <!--  PROGRESS SECTION END -->\r\n\r\n\r\n\r\n    </nav>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/core/components/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_index__ = __webpack_require__("./src/app/core/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(store) {
        this.store = store;
        this.registrationStep$ = store.select(__WEBPACK_IMPORTED_MODULE_2__reducers_index__["w" /* getRegistationStep */]);
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/core/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/core/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/components/main-header/main-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\r\n  <div class=\"container-fluid\">\r\n    <nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\r\n      <button (click)=\"isMenuOpen=!isMenuOpen\" class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <i class=\"trav-bars\"></i>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"./assets/image/main-circle-logo.png\" alt=\"\">\r\n      </a>\r\n\r\n      <div class=\"collapse navbar-collapse\" [ngClass]=\"{'show': isMenuOpen}\" id=\"navbarSupportedContent\">\r\n        <div class=\"header-search-block\">\r\n          <div class=\"head-search-inner\">\r\n            <div class=\"search-block\">\r\n              <a class=\"search-btn\" href=\"#\"><i class=\"trav-search-icon\"></i></a>\r\n              <input type=\"text\" class=\"\" id=\"messageSearchInput\" placeholder=\"Search...\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav\">\r\n          <li class=\"nav-item active\">\r\n            <a class=\"nav-link\" href=\"#\">Messages</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\">Help</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link btn btn-light-primary\" [routerLink]=\"['/trip/new']\">Plan trip</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"profile-link\" href=\"#\">\r\n              <img src=\"http://placehold.it/36x36\" alt=\"\">\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/core/components/main-header/main-header.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/main-header/main-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainHeaderComponent = /** @class */ (function () {
    function MainHeaderComponent() {
        this.isMenuOpen = false;
    }
    MainHeaderComponent.prototype.ngOnInit = function () {
    };
    MainHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-header',
            template: __webpack_require__("./src/app/core/components/main-header/main-header.component.html"),
            styles: [__webpack_require__("./src/app/core/components/main-header/main-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainHeaderComponent);
    return MainHeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/components/modal-wrapper/modal-wrapper.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/core/components/modal-wrapper/modal-wrapper.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/modal-wrapper/modal-wrapper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalWrapperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_modal_manager_service__ = __webpack_require__("./src/app/core/services/modal-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalWrapperComponent = /** @class */ (function () {
    function ModalWrapperComponent(modalManager, store, route, router) {
        var _this = this;
        this.modalManager = modalManager;
        this.store = store;
        this.route = route;
        this.router = router;
        this.component = this.route.snapshot.data.modal;
        if (this.route.snapshot.data.getFunc) {
            this.store.select(this.route.snapshot.data.getFunc).subscribe(function (res) { return _this.modalData = res; });
        }
        if (this.route.snapshot.data.skipClose) {
            this.skipClose = this.route.snapshot.data.skipClose;
        }
        this.routeParams = this.route.snapshot.params;
    }
    ModalWrapperComponent.prototype.ngOnInit = function () {
        this.modalManager.openModalFromLCH(this.component, this.modalData ? { data: this.modalData, params: this.routeParams, close: this.close.bind(this) } : this.routeParams, this.skipClose);
    };
    ModalWrapperComponent.prototype.close = function () {
        this.router.navigate(['../../'], { relativeTo: this.route });
    };
    ModalWrapperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal-wrapper',
            template: __webpack_require__("./src/app/core/components/modal-wrapper/modal-wrapper.component.html"),
            styles: [__webpack_require__("./src/app/core/components/modal-wrapper/modal-wrapper.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_modal_manager_service__["a" /* ModalManager */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], ModalWrapperComponent);
    return ModalWrapperComponent;
}());



/***/ }),

/***/ "./src/app/core/components/modals/confirm/confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- would visit place popup -->\r\n<div  class=\"modal-wrapper\">\r\n  <button class=\"modal-close\" type=\"button\" mat-button  [mat-dialog-close]=\"true\">\r\n    <i class=\"trav-close-icon\"></i>\r\n  </button>\r\n  <div class=\"modal-dialog modal-custom-style modal-650\" role=\"document\">\r\n    <div class=\"modal-custom-block\">\r\n      <div class=\"post-block post-modal-add-place\">\r\n        <h3 class=\"place-title\">{{data.title}}</h3>\r\n        <div class=\"clearfix\">\r\n          <div class=\"add-footer pull-right\">\r\n            <button type=\"button\" class=\"btn btn-light-primary btn-bordered\"  mat-button  [mat-dialog-close]=\"true\" (click)=\"onReject()\"> No</button>\r\n            <button type=\"button\" class=\"btn btn-transp btn-cancel\"  (click)=\"onSuccess()\">Yes</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/core/components/modals/confirm/confirm.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/modals/confirm/confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(data) {
        this.data = data;
    }
    ConfirmComponent.prototype.ngOnInit = function () {
    };
    ConfirmComponent.prototype.onSuccess = function () {
        if (this.data.onSuccess)
            this.data.onSuccess();
    };
    ConfirmComponent.prototype.onReject = function () {
        if (this.data.onReject)
            this.data.onReject();
    };
    ConfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm',
            template: __webpack_require__("./src/app/core/components/modals/confirm/confirm.component.html"),
            styles: [__webpack_require__("./src/app/core/components/modals/confirm/confirm.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "./src/app/core/components/privacy-policy/privacy-policy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\r\n\t<header class=\"main-header step-header\">\r\n\t\t<!-- use class .step-header for set header above of modal-backgrop layer -->\r\n\t\t<div class=\"container\">\r\n\t\t\t<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\r\n\t\t\t\t<!-- <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mainMenuLayer\" aria-controls=\"mainMenuLayer\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n          </button> -->\r\n\t\t\t\t<a class=\"navbar-brand\" routerLink=\"/\">\r\n\t\t\t\t\t<img src=\"./assets/image/main-small-logo.png\" alt=\"\">\r\n\t\t\t\t</a>\r\n\r\n\t\t\t</nav>\r\n\r\n\t\t</div>\r\n  </header>\r\n  <div class=\"container\">\r\n      <h1 style=\"text-align: center;\">Travoo Privacy Policy</h1>\r\n      <br>\r\n      <p>Please read these privacy policies carefully before using Travoo.</p>\r\n      <br>\r\n      <p>We will provide our services to you, which are subject to the conditions stated below in this document. Every time you\r\n        visit this website, use its services or make a purchase, you accept the following conditions. This is why we urge you\r\n        to read them carefully.</p>\r\n      <br>\r\n      <b>Privacy Policy</b>\r\n      <br><br>\r\n      <p>Before you continue using our website we advise you to read our privacy policy regarding our user\r\n        data collection. It will help you better understand our practices.</p>\r\n      <br>\r\n      <b>Copyright</b>\r\n      <br><br>\r\n      <p>Content published on this website (digital downloads, images, texts, graphics, logos) is the property of its content creators\r\n        and protected by international copyright laws.</p>\r\n      <br>\r\n      <b>Communications</b>\r\n      <br><br>\r\n      <p>The entire communication with us is electronic. Every time you send us an email or visit our website, you are going to\r\n        be communicating with us. You hereby consent to receive communications from us. If you subscribe to the news on our website,\r\n        you are going to receive regular emails from us. We will continue to communicate with you by posting news and notices\r\n        on our website and by sending you emails. You also agree that all notices, disclosures, agreements and other communications\r\n        we provide to you electronically meet the legal requirements that such communications be in writing.</p>\r\n      <br>\r\n      <b>Applicable Law</b>\r\n      <br><br>\r\n      <p>By visiting this website, you agree that the laws of the country, without regard to principles of\r\n        conflict laws, will govern these terms of service, or any dispute of any sort that might come between [name] and you, or\r\n        its business partners and associates.</p>\r\n      <br>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/components/privacy-policy/privacy-policy.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/privacy-policy/privacy-policy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacyPolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__("./src/app/core/components/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__("./src/app/core/components/privacy-policy/privacy-policy.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/core/components/slider-wrapper/slider-wrapper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderWrapperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_hammerjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Helper component to add dynamic components
var SliderWrapperComponent = /** @class */ (function () {
    function SliderWrapperComponent(componentFactoryResolver, compiler, cdRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.compiler = compiler;
        this.cdRef = cdRef;
        this.x = 0;
        this.isViewInitialized = false;
    }
    SliderWrapperComponent.prototype.updateComponent = function () {
        if (!this.isViewInitialized) {
            return;
        }
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        var factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
        this.cmpRef = this.target.createComponent(factory);
        this.cmpRef.instance.settings = this.settings;
        // to access the created instance use
        // this.compRef.instance.someProperty = 'someValue';
        // this.compRef.instance.someOutput.subscribe(val => doSomething());
        this.cdRef.detectChanges();
    };
    SliderWrapperComponent.prototype.ngOnChanges = function () {
        this.updateComponent();
    };
    SliderWrapperComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.isViewInitialized = true;
        this.updateComponent();
        var ul = this.target.element.nativeElement.nextSibling.getElementsByClassName('post-slider')[0];
        var next = this.target.element.nativeElement.nextSibling.getElementsByClassName('trav-angle-right')[0];
        var prev = this.target.element.nativeElement.nextSibling.getElementsByClassName('trav-angle-left')[0];
        var containerWidth = this.target.element.nativeElement.nextSibling.getElementsByClassName('post-slide-wrap')[0].offsetWidth;
        var fullWidth = (this.settings.width + 20) * this.settings.count - 20;
        /**
         *  Hammer -> for swiping img-sliders on mobile  devices
         */
        __WEBPACK_IMPORTED_MODULE_1_hammerjs__(ul).on('swipeleft', function () { return moveForvard(); });
        __WEBPACK_IMPORTED_MODULE_1_hammerjs__(ul).on('swiperight', function () { return moveBackvard(); });
        next.onclick = function () {
            moveForvard();
        };
        prev.onclick = function () {
            moveBackvard();
        };
        var moveForvard = function () {
            switch (true) {
                case (_this.x === containerWidth - fullWidth):
                    _this.x = 0;
                    break;
                case ((_this.x - _this.settings.width - 20) >= containerWidth - fullWidth):
                    _this.x = _this.x - _this.settings.width - 20;
                    break;
                case ((_this.x - _this.settings.width - 20) < containerWidth - fullWidth):
                    _this.x = containerWidth - fullWidth;
                    break;
            }
            return _this.transform(ul, _this.x);
        };
        var moveBackvard = function () {
            switch (true) {
                case (_this.x === 0):
                    _this.x = containerWidth - fullWidth;
                    break;
                case ((_this.x + _this.settings.width + 20) <= 0):
                    _this.x = _this.x + _this.settings.width + 20;
                    break;
                case ((_this.x + _this.settings.width + 20) > 0):
                    _this.x = 0;
                    break;
            }
            return _this.transform(ul, _this.x);
        };
        this.target.element.nativeElement.nextSibling.getElementsByClassName('post-slider')[0].style.width = fullWidth + 'px';
    };
    SliderWrapperComponent.prototype.ngOnDestroy = function () {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    };
    SliderWrapperComponent.prototype.transform = function (ul, x) {
        ul.style.transform = "translateX(" + x + "px)";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('target', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], SliderWrapperComponent.prototype, "target", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SliderWrapperComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SliderWrapperComponent.prototype, "settings", void 0);
    SliderWrapperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dcl-slider-wrapper',
            template: "\n    <div #target></div>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], SliderWrapperComponent);
    return SliderWrapperComponent;
}());



/***/ }),

/***/ "./src/app/core/components/terms-of-service/terms-of-service.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\r\n\t<header class=\"main-header step-header\">\r\n\t\t<!-- use class .step-header for set header above of modal-backgrop layer -->\r\n\t\t<div class=\"container\">\r\n\t\t\t<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\r\n\t\t\t\t<!-- <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mainMenuLayer\" aria-controls=\"mainMenuLayer\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n          </button> -->\r\n\t\t\t\t<a class=\"navbar-brand\" routerLink=\"/\">\r\n\t\t\t\t\t<img src=\"./assets/image/main-small-logo.png\" alt=\"\">\r\n\t\t\t\t</a>\r\n\r\n\t\t\t</nav>\r\n\r\n\t\t</div>\r\n\t</header>\r\n\t<div class=\"container\">\r\n\t\t<h1 style=\"text-align: center;\">Travoo Terms of Service</h1>\r\n\t\t<br>\r\n\t\t<p>Please read these terms of service carefully before using Travoo.</p>\r\n\t\t<br>\r\n\t\t<p>We will provide our services to you, which are subject to the conditions stated below in this document. Every time you\r\n\t\t\tvisit this website, use its services or make a purchase, you accept the following conditions. This is why we urge you\r\n\t\t\tto read them carefully.</p>\r\n\t\t<br>\r\n\t\t<b>Privacy Policy</b>\r\n\t\t<br><br>\r\n\t\t<p>Before you continue using our website we advise you to read our privacy policy regarding our user\r\n\t\t\tdata collection. It will help you better understand our practices.</p>\r\n\t\t<br>\r\n\t\t<b>Copyright</b>\r\n\t\t<br><br>\r\n\t\t<p>Content published on this website (digital downloads, images, texts, graphics, logos) is the property of its content creators\r\n\t\t\tand protected by international copyright laws.</p>\r\n\t\t<br>\r\n\t\t<b>Communications</b>\r\n\t\t<br><br>\r\n\t\t<p>The entire communication with us is electronic. Every time you send us an email or visit our website, you are going to\r\n\t\t\tbe communicating with us. You hereby consent to receive communications from us. If you subscribe to the news on our website,\r\n\t\t\tyou are going to receive regular emails from us. We will continue to communicate with you by posting news and notices\r\n\t\t\ton our website and by sending you emails. You also agree that all notices, disclosures, agreements and other communications\r\n\t\t\twe provide to you electronically meet the legal requirements that such communications be in writing.</p>\r\n\t\t<br>\r\n\t\t<b>Applicable Law</b>\r\n\t\t<br><br>\r\n\t\t<p>By visiting this website, you agree that the laws of the country, without regard to principles of\r\n\t\t\tconflict laws, will govern these terms of service, or any dispute of any sort that might come between [name] and you, or\r\n\t\t\tits business partners and associates.</p>\r\n\t\t<br>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/components/terms-of-service/terms-of-service.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/terms-of-service/terms-of-service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsOfServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsOfServiceComponent = /** @class */ (function () {
    function TermsOfServiceComponent() {
    }
    TermsOfServiceComponent.prototype.ngOnInit = function () {
    };
    TermsOfServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-terms-of-service',
            template: __webpack_require__("./src/app/core/components/terms-of-service/terms-of-service.component.html"),
            styles: [__webpack_require__("./src/app/core/components/terms-of-service/terms-of-service.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsOfServiceComponent);
    return TermsOfServiceComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__effects_core_effects__ = __webpack_require__("./src/app/core/effects/core.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_validation__ = __webpack_require__("./src/app/core/services/validation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_modal_manager_service__ = __webpack_require__("./src/app/core/services/modal-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_terms_of_service_terms_of_service_component__ = __webpack_require__("./src/app/core/components/terms-of-service/terms-of-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_privacy_policy_privacy_policy_component__ = __webpack_require__("./src/app/core/components/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_error_error_component__ = __webpack_require__("./src/app/core/components/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_modal_wrapper_modal_wrapper_component__ = __webpack_require__("./src/app/core/components/modal-wrapper/modal-wrapper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_modals_confirm_confirm_component__ = __webpack_require__("./src/app/core/components/modals/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_header_header_component__ = __webpack_require__("./src/app/core/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_footer_footer_component__ = __webpack_require__("./src/app/core/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_main_header_main_header_component__ = __webpack_require__("./src/app/core/components/main-header/main-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_gallery_modal_gallery_modal_component__ = __webpack_require__("./src/app/core/components/gallery-modal/gallery-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_time_ago_pipe__ = __webpack_require__("./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_slider_wrapper_slider_wrapper_component__ = __webpack_require__("./src/app/core/components/slider-wrapper/slider-wrapper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipes_matchPipe__ = __webpack_require__("./src/app/core/pipes/matchPipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_follow_button_follow_button_component__ = __webpack_require__("./src/app/core/components/follow-button/follow-button.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};























var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_5__effects_core_effects__["a" /* CoreEffects */]]),
                __WEBPACK_IMPORTED_MODULE_19__agm_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAXf0rOLWAEcQn2pAqRyZeighQ_y8NtNYY'
                }),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_validation__["a" /* ValidationService */],
                __WEBPACK_IMPORTED_MODULE_8__services_modal_manager_service__["a" /* ModalManager */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__components_terms_of_service_terms_of_service_component__["a" /* TermsOfServiceComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_error_error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_modal_wrapper_modal_wrapper_component__["a" /* ModalWrapperComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_modals_confirm_confirm_component__["a" /* ConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_main_header_main_header_component__["a" /* MainHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_gallery_modal_gallery_modal_component__["a" /* GalleryModalComponent */],
                __WEBPACK_IMPORTED_MODULE_18_time_ago_pipe__["a" /* TimeAgoPipe */],
                __WEBPACK_IMPORTED_MODULE_20__components_slider_wrapper_slider_wrapper_component__["a" /* SliderWrapperComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pipes_matchPipe__["a" /* RegexPipe */],
                __WEBPACK_IMPORTED_MODULE_22__components_follow_button_follow_button_component__["a" /* FollowButtonComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_14__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_main_header_main_header_component__["a" /* MainHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_gallery_modal_gallery_modal_component__["a" /* GalleryModalComponent */],
                __WEBPACK_IMPORTED_MODULE_19__agm_core__["AgmCoreModule"],
                __WEBPACK_IMPORTED_MODULE_20__components_slider_wrapper_slider_wrapper_component__["a" /* SliderWrapperComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pipes_matchPipe__["a" /* RegexPipe */],
                __WEBPACK_IMPORTED_MODULE_22__components_follow_button_follow_button_component__["a" /* FollowButtonComponent */]
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/effects/core.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_core_actions__ = __webpack_require__("./src/app/core/actions/core.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CoreEffects = /** @class */ (function () {
    function CoreEffects(actions$, store) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.navigateBack$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_2__actions_core_actions__["a" /* CLOSE_OPENED_MODAL */])
            .do(function () { return _this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["p" /* getOpenedModalRef */]).take(1).subscribe(function (res) { return res && res.close(); }); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], CoreEffects.prototype, "navigateBack$", void 0);
    CoreEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */]])
    ], CoreEffects);
    return CoreEffects;
}());



/***/ }),

/***/ "./src/app/core/effects/router.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_router_actions__ = __webpack_require__("./src/app/core/actions/router.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RouterEffects = /** @class */ (function () {
    /**
     * Default constructor
     * @param actions$
     * @param router
     * @param location
     */
    function RouterEffects(actions$, router, location) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.location = location;
        /**
         * Navigates to given path
         */
        this.navigate$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_6__actions_router_actions__["c" /* GO */])
            .map(function (action) { return action.payload; })
            .do(function (_a) {
            var path = _a.path, queryParams = _a.query, extras = _a.extras;
            return _this.router.navigate(path, __assign({ queryParams: queryParams }, extras));
        });
        /**
         * Navigates back
         */
        this.navigateBack$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_6__actions_router_actions__["a" /* BACK */])
            .do(function () { return _this.location.back(); });
        /**
         * Navigates forward
         */
        this.navigateForward$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_6__actions_router_actions__["b" /* FORWARD */])
            .do(function () { return _this.location.forward(); });
        /**
         * Replaces search query
         */
        this.navigateSearch$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_6__actions_router_actions__["d" /* SEARCH */])
            .do(function (action) {
            var urlTree = _this.router.parseUrl(_this.router.url);
            urlTree.queryParams = action.payload;
            _this.router.navigateByUrl(urlTree);
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RouterEffects.prototype, "navigate$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RouterEffects.prototype, "navigateBack$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RouterEffects.prototype, "navigateForward$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RouterEffects.prototype, "navigateSearch$", void 0);
    RouterEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]])
    ], RouterEffects);
    return RouterEffects;
}());



/***/ }),

/***/ "./src/app/core/pipes/keysPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keys' })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "./src/app/core/pipes/matchPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegexPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegexPipe = /** @class */ (function () {
    function RegexPipe() {
    }
    RegexPipe.prototype.transform = function (item, reg, pos) {
        var result = item.match(new RegExp(reg));
        return result && result[pos || 0];
    };
    RegexPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'match' })
    ], RegexPipe);
    return RegexPipe;
}());



/***/ }),

/***/ "./src/app/core/pipes/mathRandomPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MathRandomPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MathRandomPipe = /** @class */ (function () {
    function MathRandomPipe() {
    }
    MathRandomPipe.prototype.transform = function (item) {
        return item[Math.floor(Math.random() * item.length)];
    };
    MathRandomPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'mathRandom' })
    ], MathRandomPipe);
    return MathRandomPipe;
}());



/***/ }),

/***/ "./src/app/core/pipes/sanitizeHtmlPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanitizeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SanitizeHtmlPipe = /** @class */ (function () {
    function SanitizeHtmlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeHtmlPipe.prototype.transform = function (v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    SanitizeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'sanitizeHtml' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SanitizeHtmlPipe);
    return SanitizeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/core/reducers/core.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export INIT_STATE */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getOpenedModalRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_core_actions__ = __webpack_require__("./src/app/core/actions/core.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var INIT_STATE = {
    openedModalRef: null
};
/**
 * Exports reducing function
 * @param state
 * @param action
 */
function reducer(state, action) {
    if (state === void 0) { state = INIT_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_core_actions__["c" /* OPEN_MODAL */]:
            return __assign({}, state, { openedModalRef: action.payload.ref });
        default: {
            return state;
        }
    }
}
var getOpenedModalRef = function (state) { return state.openedModalRef; };


/***/ }),

/***/ "./src/app/core/reducers/error.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export INIT_STATE */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getErrorFromServer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_error_actions__ = __webpack_require__("./src/app/core/actions/error.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var INIT_STATE = {
    errorFromServer: null
};
/**
 * Exports reducing function
 * @param state
 * @param action
 */
function reducer(state, action) {
    if (state === void 0) { state = INIT_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_error_actions__["a" /* ADD_ERROR */]:
            return __assign({}, state, { errorFromServer: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_error_actions__["c" /* REMOVE_ERROR */]:
            return __assign({}, state, { errorFromServer: null });
        default: {
            return state;
        }
    }
}
var getErrorFromServer = function (state) { return state.errorFromServer; };


/***/ }),

/***/ "./src/app/core/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return reducers; });
/* unused harmony export getCoreState */
/* unused harmony export getAuthState */
/* unused harmony export getErrorState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return getTripPlannerState; });
/* unused harmony export getCountryState */
/* unused harmony export getPlacesState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getOpenedModalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getErrorFromServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getLoggedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return getRegistationStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return getResetPasswordStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getLoginStatus; });
/* unused harmony export getUserId */
/* unused harmony export getTripId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCitiesInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAlreadySpent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getCountryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getCountryStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getCountryId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getFollowStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getCountryPlaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCountryHolidays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getCountryMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return getTripMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return getPlacesMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getCountryTrendingPlaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getPlaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return getPlacesId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getFollowPlacesStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return getPlacesNearby; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return getPlacesImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return getPlacesPlans; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__("./node_modules/reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_reducer__ = __webpack_require__("./src/app/core/reducers/core.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_reducer__ = __webpack_require__("./src/app/core/reducers/error.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_reducers_auth_reducer__ = __webpack_require__("./src/app/auth/reducers/auth.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trip_planner_reducers_trip_planner_reducer__ = __webpack_require__("./src/app/trip-planner/reducers/trip-planner.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__country_reducers_country_reducer__ = __webpack_require__("./src/app/country/reducers/country.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__places_reducers_places_reducer__ = __webpack_require__("./src/app/places/reducers/places.reducer.ts");

/**
 * Import from reducers
 */






/**
 * Map of the reducers
 */
var reducers = {
    core: __WEBPACK_IMPORTED_MODULE_1__core_reducer__["b" /* reducer */],
    auth: __WEBPACK_IMPORTED_MODULE_3__auth_reducers_auth_reducer__["f" /* reducer */],
    error: __WEBPACK_IMPORTED_MODULE_2__error_reducer__["b" /* reducer */],
    tripPlanner: __WEBPACK_IMPORTED_MODULE_4__trip_planner_reducers_trip_planner_reducer__["d" /* reducer */],
    country: __WEBPACK_IMPORTED_MODULE_5__country_reducers_country_reducer__["l" /* reducer */],
    places: __WEBPACK_IMPORTED_MODULE_6__places_reducers_places_reducer__["g" /* reducer */]
};
/**
 * Selectors returns smaller piece of state out of the root state
 */
var getCoreState = function (state) { return state.core; };
var getAuthState = function (state) { return state.auth; };
var getErrorState = function (state) { return state.error; };
var getTripPlannerState = function (state) { return state.tripPlanner; };
var getCountryState = function (state) { return state.country; };
var getPlacesState = function (state) { return state.places; };
/**
 *  Core selectors
 */
var getOpenedModalRef = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCoreState, __WEBPACK_IMPORTED_MODULE_1__core_reducer__["a" /* getOpenedModalRef */]);
/**
 *  Error selectors
 */
var getErrorFromServer = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getErrorState, __WEBPACK_IMPORTED_MODULE_2__error_reducer__["a" /* getErrorFromServer */]);
/**
 *  Auth selectors selectors
 */
var getLoggedUser = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getAuthState, __WEBPACK_IMPORTED_MODULE_3__auth_reducers_auth_reducer__["a" /* getLoggedUser */]);
var getRegistationStep = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getAuthState, __WEBPACK_IMPORTED_MODULE_3__auth_reducers_auth_reducer__["c" /* getRegistrationStep */]);
var getResetPasswordStatus = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getAuthState, __WEBPACK_IMPORTED_MODULE_3__auth_reducers_auth_reducer__["d" /* getResetPasswordStatus */]);
var getLoginStatus = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getAuthState, __WEBPACK_IMPORTED_MODULE_3__auth_reducers_auth_reducer__["b" /* getLoginStatus */]);
var getUserId = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getAuthState, __WEBPACK_IMPORTED_MODULE_3__auth_reducers_auth_reducer__["e" /* getUserId */]);
/**
 * Trip planner selectors
 */
var getTripId = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getTripPlannerState, __WEBPACK_IMPORTED_MODULE_4__trip_planner_reducers_trip_planner_reducer__["c" /* getTripId */]);
var getCitiesInfo = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getTripPlannerState, __WEBPACK_IMPORTED_MODULE_4__trip_planner_reducers_trip_planner_reducer__["b" /* getCitiesInfo */]);
var getAlreadySpent = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getTripPlannerState, __WEBPACK_IMPORTED_MODULE_4__trip_planner_reducers_trip_planner_reducer__["a" /* getAlreadySpent */]);
/**
 * Trip module selectors
 */
// country + city
var getCountry = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCountryState, __WEBPACK_IMPORTED_MODULE_5__country_reducers_country_reducer__["a" /* getCountry */]);
var getCountryInfo = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCountryState, __WEBPACK_IMPORTED_MODULE_5__country_reducers_country_reducer__["d" /* getCountryInfo */]);
var getCountryStats = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCountryState, __WEBPACK_IMPORTED_MODULE_5__country_reducers_country_reducer__["g" /* getCountryStats */]);
var getCountryId = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCountryState, __WEBPACK_IMPORTED_MODULE_5__country_reducers_country_reducer__["c" /* getCountryId */]);
var getFollowStatus = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCountryState, __WEBPACK_IMPORTED_MODULE_5__country_reducers_country_reducer__["i" /* getFollowStatus */]);
var getCountryPlaces = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCountryState, __WEBPACK_IMPORTED_MODULE_5__country_reducers_country_reducer__["f" /* getCountryPlaces */]);
var getCountryHolidays = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCountryState, __WEBPACK_IMPORTED_MODULE_5__country_reducers_country_reducer__["b" /* getCountryHolidays */]);
var getCountryMedia = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCountryState, __WEBPACK_IMPORTED_MODULE_5__country_reducers_country_reducer__["e" /* getCountryMedia */]);
var getTripMedia = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCountryState, __WEBPACK_IMPORTED_MODULE_5__country_reducers_country_reducer__["k" /* getTripMedia */]);
var getPlacesMedia = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCountryState, __WEBPACK_IMPORTED_MODULE_5__country_reducers_country_reducer__["j" /* getPlacesMedia */]);
var getCountryTrendingPlaces = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCountryState, __WEBPACK_IMPORTED_MODULE_5__country_reducers_country_reducer__["h" /* getCountryTrendingPlaces */]);
// places
var getPlaces = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getPlacesState, __WEBPACK_IMPORTED_MODULE_6__places_reducers_places_reducer__["b" /* getPlaces */]);
var getPlacesId = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getPlacesState, __WEBPACK_IMPORTED_MODULE_6__places_reducers_places_reducer__["c" /* getPlacesId */]);
var getFollowPlacesStatus = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getPlacesState, __WEBPACK_IMPORTED_MODULE_6__places_reducers_places_reducer__["a" /* getFollowPlacesStatus */]);
var getPlacesNearby = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getPlacesState, __WEBPACK_IMPORTED_MODULE_6__places_reducers_places_reducer__["e" /* getPlacesNearby */]);
var getPlacesImg = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getPlacesState, __WEBPACK_IMPORTED_MODULE_6__places_reducers_places_reducer__["d" /* getPlacesImg */]);
var getPlacesPlans = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getPlacesState, __WEBPACK_IMPORTED_MODULE_6__places_reducers_places_reducer__["f" /* getPlacesPlans */]);


/***/ }),

/***/ "./src/app/core/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.post = function (url, details, config) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + url, details);
    };
    ApiService.prototype.get = function (url, config) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + url);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/core/services/convert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConvertService = /** @class */ (function () {
    function ConvertService() {
    }
    ConvertService.prototype.convertSwitch = function (property, pattern) {
        if (!property)
            return;
        if (/\r\n\r\n\u2022/.test(property)) {
            return this.convertOneStr(property, pattern);
        }
        else {
            return this.convertMany(property, pattern);
        }
    };
    ConvertService.prototype.convertMany = function (property, pattern) {
        /**
         * Convert data
         * @property -> string to be converted in object
         * @pattern -> split string by this pattern
         */
        var jsonStrig = '{';
        var data = property.split(pattern);
        data.forEach(function (item) {
            var current = item.split(':');
            jsonStrig += '"' + current[0] + '":"' + current[1] + '",';
        });
        jsonStrig = jsonStrig.substr(0, jsonStrig.length - 1);
        jsonStrig += '}';
        var obj = JSON.parse(jsonStrig);
        return obj;
    };
    ConvertService.prototype.convertOneStr = function (property, pattern) {
        var current = property.split('\r\n\r\n\u2022');
        current[1] = current[1].split('\r\n\u2022');
        var obj = {};
        obj[current[0]] = current[1];
        return obj;
    };
    ConvertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConvertService);
    return ConvertService;
}());



/***/ }),

/***/ "./src/app/core/services/immutable-helper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmutableHelperService; });
var ImmutableHelperService = /** @class */ (function () {
    function ImmutableHelperService() {
    }
    ImmutableHelperService.prototype.setItemProperty = function (array, data) {
        var newArray = array.slice();
        newArray[data.index][data.property] = data.value;
        return newArray;
    };
    ImmutableHelperService.prototype.replaceItem = function (array, data) {
        var newArray = array.slice();
        newArray[data.index] = data.item;
        return newArray;
    };
    ImmutableHelperService.prototype.pushItem = function (array, item) {
        var newArray = array.slice();
        newArray.push(item);
        return newArray;
    };
    ImmutableHelperService.prototype.removeItem = function (array, data) {
        var newArray = array.slice();
        newArray.splice(data.index, 1);
        return newArray;
    };
    return ImmutableHelperService;
}());



/***/ }),

/***/ "./src/app/core/services/modal-manager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_core_actions__ = __webpack_require__("./src/app/core/actions/core.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_error_actions__ = __webpack_require__("./src/app/core/actions/error.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_skipLast__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/skipLast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ModalManager = /** @class */ (function () {
    function ModalManager(dialog, router, store) {
        var _this = this;
        this.dialog = dialog;
        this.router = router;
        this.store = store;
        this.skip = false;
        router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]; }).subscribe(function (res) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_error_actions__["d" /* RemoveErrorAction */]());
            return !_this.skip && _this.dialog.closeAll();
        });
        this.modalRef$ = store.select(__WEBPACK_IMPORTED_MODULE_5__reducers__["p" /* getOpenedModalRef */]);
        this.modalRef$.skipLast(1).subscribe(function (res) {
            if (res)
                res.close();
        });
    }
    ModalManager.prototype.openModalFromLCH = function (component, data, skip) {
        var _this = this;
        this.skip = skip;
        setTimeout(function () {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_core_actions__["d" /* OpenModalAction */]({ ref: _this.dialog.open(component, { data: data }) }));
        }, 1);
    };
    ModalManager.prototype.openModal = function (component, data) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_core_actions__["d" /* OpenModalAction */]({ ref: this.dialog.open(component, { data: data }) }));
    };
    ModalManager = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
    ], ModalManager);
    return ModalManager;
}());



/***/ }),

/***/ "./src/app/core/services/validation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var validationMessages = {
    username: {
        required: "Username field is required",
        nameValidator: "Username must contain only letters",
        minlength: "Username should be at least 8 characters",
    },
    email: {
        required: "Email field is required",
        emailValidator: "Please enter correct email"
    },
    password: {
        required: "Password field is required",
        minlength: "Password should be at least 6 characters",
        maxlength: "Password should be less than 20 symbols"
    },
    password_confirmation: {
        required: "Password confirmation field is required",
        MatchPassword: "Password confirmation field must be equal to password field"
    },
    name: {
        required: "Name field is required",
        nameValidator: "Name must contain only letters",
        minlength: "Name should be at least 8 characters",
    },
    age: {
        required: "Age  is required",
    },
    gender: {
        required: "Gender is required",
    },
    title: {
        required: "Title is required",
        minlength: "Title should be at least 3 characters",
        maxlength: "Title should be less than 255 symbols"
    },
    date: {
        required: "Date is required",
    },
};
var ValidationService = /** @class */ (function () {
    function ValidationService() {
        /**
         * Handles when form value is changed
         */
        this.onValueChange = function (form, formErrors, fromContinueButton) {
            for (var field in formErrors) {
                formErrors[field] = '';
                // form.get - получение элемента управления
                var control = form.get(field);
                if (control && (fromContinueButton || control.dirty) && !control.valid) {
                    var message = validationMessages[field];
                    for (var key in control.errors) {
                        formErrors[field] += message[key] + ' ';
                    }
                }
            }
            return formErrors;
        };
    }
    ValidationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/core/validators/custom-validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = emailValidator;
/* harmony export (immutable) */ __webpack_exports__["c"] = nameValidator;
/* harmony export (immutable) */ __webpack_exports__["b"] = matchPasswordValidator;
function emailValidator(control) {
    var emailRegex = /[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;
    var value = control.value;
    var result = emailRegex.test(value);
    if (result) {
        return null;
    }
    else {
        return { "emailValidator": { value: value } };
    }
}
function nameValidator(control) {
    var nameRegex = /^[a-zA-Z]+$/;
    var value = control.value;
    var result = nameRegex.test(value);
    if (result) {
        return null;
    }
    else {
        return { "nameValidator": { value: value } };
    }
}
function matchPasswordValidator(control) {
    var password = control.get('password');
    var passwordRepeat = control.get('password_confirmation');
    if (!password || !passwordRepeat)
        return null;
    if (password.value === passwordRepeat.value) {
        return null;
    }
    else {
        passwordRepeat.setErrors({ MatchPassword: true });
    }
}


/***/ }),

/***/ "./src/app/country/actions/country.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FOLLOW_COUNTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return UNFOLLOW_COUNTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SET_COUNTRY_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FollowCountryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SetCountryInfoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FollowSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return UnfollowCountryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return UnfollowSuccessAction; });
var FOLLOW_COUNTRY = '[Country] follow country';
var UNFOLLOW_COUNTRY = '[Country] unfollow country';
var SET_COUNTRY_INFO = '[Country] set country info';
var FOLLOW_SUCCESS = '[Country] follow country success';
var UNFOLLOW_SUCCESS = '[Country] unfollow country success';
var FollowCountryAction = /** @class */ (function () {
    function FollowCountryAction(payload) {
        this.payload = payload;
        this.type = FOLLOW_COUNTRY;
    }
    return FollowCountryAction;
}());

var SetCountryInfoAction = /** @class */ (function () {
    function SetCountryInfoAction(payload) {
        this.payload = payload;
        this.type = SET_COUNTRY_INFO;
    }
    return SetCountryInfoAction;
}());

var FollowSuccessAction = /** @class */ (function () {
    function FollowSuccessAction() {
        this.type = FOLLOW_SUCCESS;
    }
    return FollowSuccessAction;
}());

var UnfollowCountryAction = /** @class */ (function () {
    function UnfollowCountryAction(payload) {
        this.payload = payload;
        this.type = UNFOLLOW_COUNTRY;
    }
    return UnfollowCountryAction;
}());

var UnfollowSuccessAction = /** @class */ (function () {
    function UnfollowSuccessAction() {
        this.type = UNFOLLOW_SUCCESS;
    }
    return UnfollowSuccessAction;
}());



/***/ }),

/***/ "./src/app/country/components/country-about-box/country-about-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-block post-country-block\">\r\n  <div class=\"post-side-top\">\r\n    <h3 class=\"side-ttl\">About the {{ isCountry ? 'country' : 'city' }}</h3>\r\n  </div>\r\n  <div class=\"post-country-inner\">\r\n    <div class=\"post-footer-info\">\r\n      <div class=\"post-foot-block\">\r\n        <i class=\"trav-comment-icon\"></i>\r\n        <span class=\"blue-txt\">Discussed</span>&nbsp;\r\n        <span>by</span>&nbsp;\r\n        <b>john moline, pitter garmen, richerd</b>&nbsp;\r\n        <span>and 437 more</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"post-txt-wrap\">\r\n      <p class=\"post-txt\">{{info.trans[0]?.description ? info.trans[0].description : 'No description'}}</p>\r\n    </div>\r\n    <div class=\"post-map-block\">\r\n      <div class=\"post-map-inner\">\r\n        <agm-map *ngIf=\"info.lat && info.lng\" [latitude]=\"+info.lat\" [longitude]=\"+info.lng\"></agm-map>\r\n        <div class=\"post-top-map-info\">\r\n          <div class=\"info-block\">\r\n            <div class=\"info-icon\">\r\n              <i class=\"trav-popularity-icon\"></i>\r\n            </div>\r\n            <div class=\"info-txt\">\r\n              <div *ngIf=\"info.trans[0]?.population\" class=\"info-ttl\">{{info.trans[0]?.population}}</div>\r\n              <div class=\"info-smpl\">Population</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"post-map-flag\">\r\n          <img *ngIf=\"info?.iso_code\" class=\"flag-image\" src=\"{{'https://s3-us-west-2.amazonaws.com/travooo-assets/images/countryflags/medium/' + info?.iso_code.toLowerCase() + '.png'}}\" alt=\"flag\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/country/components/country-about-box/country-about-box.component.scss":
/***/ (function(module, exports) {

module.exports = "agm-map {\n  width: 100%;\n  height: 360px; }\n\n.flag-image {\n  width: 50px;\n  height: 50px;\n  -o-object-fit: fill;\n     object-fit: fill; }\n"

/***/ }),

/***/ "./src/app/country/components/country-about-box/country-about-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryAboutBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountryAboutBoxComponent = /** @class */ (function () {
    function CountryAboutBoxComponent() {
    }
    CountryAboutBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CountryAboutBoxComponent.prototype, "info", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CountryAboutBoxComponent.prototype, "isCountry", void 0);
    CountryAboutBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-country-about-box',
            template: __webpack_require__("./src/app/country/components/country-about-box/country-about-box.component.html"),
            styles: [__webpack_require__("./src/app/country/components/country-about-box/country-about-box.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CountryAboutBoxComponent);
    return CountryAboutBoxComponent;
}());



/***/ }),

/***/ "./src/app/country/components/country-about-box2/country-about-box2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-block post-tips-list-block\" *ngIf=\"info.trans.length\">\r\n  <div class=\"post-list-inner\">\r\n    <div class=\"post-tip-row\" >\r\n      <div class=\"row-label\"><i class=\"trav-about-icon\"></i><b>Nationality</b></div>\r\n      <div class=\"row-txt\">\r\n        <span>{{isCountry ? info.trans[0]?.nationality : info.country.trans[0]?.nationality}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"post-tip-row\" *ngIf=\"info?.languages.length\">\r\n      <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Languages spoken</b></div>\r\n      <div class=\"row-txt\">\r\n        <!--<span>{{ isCountry ? info.languages[0].trans.title : info.languages[0].title }}</span>-->\r\n        <span>{{ info.languages[0]?.title }}</span>\r\n        <a *ngIf=\"info?.languages.length - 1\" (click)=\"showPopup()\" class=\"more-link\">+{{info?.languages.length - 1}} More</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"post-tip-row\">\r\n      <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Currencies</b></div>\r\n      <div class=\"row-txt\">\r\n        <span>{{info.currencies[0].trans[0]?.title }}</span>\r\n        <a *ngIf=\"info?.currencies.length - 1\" (click)=\"showPopup()\" class=\"more-link\">+{{info.currencies.length - 1}} More</a>\r\n\r\n        <!--\r\n                <span class=\"currency\">(1 USD = 9.23 MAD)</span>\r\n        -->\r\n      </div>\r\n    </div>\r\n    <div class=\"post-tip-row\" *ngIf=\"info?.religions.length - 1\">\r\n      <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Timings</b></div>\r\n      <div class=\"row-txt\">\r\n        <span>{{info.timezone.time_zone_name}}</span>\r\n<!--\r\n        <a href=\"#\" class=\"more-link\">+3 More</a>\r\n-->\r\n      </div>\r\n    </div>\r\n    <div class=\"post-tip-row\" *ngIf=\"info?.religions.length\">\r\n      <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Religions</b></div>\r\n      <div class=\"row-txt\">\r\n        <span>{{info.religions[0].trans[0]?.title }}</span>\r\n        <a *ngIf=\"info?.religions.length - 1\" (click)=\"showPopup()\" class=\"more-link\">+{{info.religions.length - 1}} More</a>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"post-tip-row\">\r\n      <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Phone Code</b></div>\r\n      <div class=\"row-txt\">\r\n        <span>{{info?.code}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"post-tip-row\" *ngIf=\"info.trans[0]?.metrics || (info?.country && info.country.trans[0]?.metrics)\">\r\n      <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Units of measurement</b></div>\r\n      <div class=\"row-txt\">\r\n        <span >{{(isCountry ? info.trans[0]?.metrics : info.country.trans[0]?.metrics ) | match:'\\\\((.*?)\\\\)': 1}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"post-tip-row\">\r\n      <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Working days</b></div>\r\n      <div class=\"row-txt\">\r\n        <span>{{info.trans[0]?.working_days}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"post-tip-row\">\r\n      <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Transportation Methods</b></div>\r\n      <div class=\"row-txt\" *ngIf=\"info.trans[0]?.transportation\">\r\n        <span>{{info.trans[0]?.transportation.split(',')[0]}}</span>\r\n        <a *ngIf=\"info.trans[0]?.transportation.split(',').length - 1\" (click)=\"showPopup()\" class=\"more-link\">+{{info.trans[0]?.transportation.split(',').length - 1}} More</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"post-tip-row\">\r\n      <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Speed Limit</b></div>\r\n      <div class=\"row-txt\" *ngIf=\"info.trans[0].speed_limit\">\r\n        <span>{{info.trans[0]?.speed_limit.split('\\r\\n\\r\\n')[0]}}</span>\r\n        <a *ngIf=\"info.trans[0]?.speed_limit.split('\\r\\n\\r\\n').length - 1\" (click)=\"showPopup()\" class=\"more-link\">+{{info.trans[0]?.speed_limit.split('\\r\\n\\r\\n').length - 1}} More</a>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/country/components/country-about-box2/country-about-box2.component.scss":
/***/ (function(module, exports) {

module.exports = "a.more-link {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/country/components/country-about-box2/country-about-box2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryAboutBox2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_modal_manager_service__ = __webpack_require__("./src/app/core/services/modal-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_country_accordion_modal_country_accordion_modal_component__ = __webpack_require__("./src/app/country/modals/country-accordion-modal/country-accordion-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_country_service__ = __webpack_require__("./src/app/country/services/country.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountryAboutBox2Component = /** @class */ (function () {
    function CountryAboutBox2Component(modalService, countryService) {
        this.modalService = modalService;
        this.countryService = countryService;
    }
    CountryAboutBox2Component.prototype.ngOnInit = function () {
    };
    CountryAboutBox2Component.prototype.showPopup = function () {
        this.modalService.openModal(__WEBPACK_IMPORTED_MODULE_2__modals_country_accordion_modal_country_accordion_modal_component__["a" /* CountryAccordionModalComponent */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CountryAboutBox2Component.prototype, "info", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CountryAboutBox2Component.prototype, "isCountry", void 0);
    CountryAboutBox2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-country-about-box2',
            template: __webpack_require__("./src/app/country/components/country-about-box2/country-about-box2.component.html"),
            styles: [__webpack_require__("./src/app/country/components/country-about-box2/country-about-box2.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_modal_manager_service__["a" /* ModalManager */], __WEBPACK_IMPORTED_MODULE_3__services_country_service__["a" /* CountryService */]])
    ], CountryAboutBox2Component);
    return CountryAboutBox2Component;
}());



/***/ }),

/***/ "./src/app/country/components/country-budget-box/country-budget-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-block post-tips-list-block\">\r\n  <div class=\"post-top-layer\">\r\n    <div class=\"top-left\">\r\n      <ul class=\"foot-avatar-list\">\r\n        <li><img class=\"small-ava\" src=\"http://placehold.it/28x28\" alt=\"ava\"></li><!--\r\n\t\t\t\t\t\t\t\t\t\t--><li><img class=\"small-ava\" src=\"http://placehold.it/28x28\" alt=\"ava\"></li><!--\r\n\t\t\t\t\t\t\t\t\t\t--><li><img class=\"small-ava\" src=\"http://placehold.it/28x28\" alt=\"ava\"></li>\r\n      </ul>&nbsp;\r\n      <div class=\"post-top-txt\">\r\n        <!--<span class=\"name\">John mobile</span>-->\r\n        <!--<span>and 7 more are talking about this</span>-->\r\n      </div>\r\n    </div>\r\n    <div class=\"top-right\">\r\n      <div class=\"top-comment-icon\">\r\n        <i class=\"trav-talk-icon\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"post-list-inner\">\r\n    <div class=\"post-tip-row\" *ngFor=\"let item of data.split('\\r\\n\\r\\n')\">\r\n      <div class=\"row-label\">{{item | match : '.*\\\\s'}} &nbsp;<b>{{item | match : '\\\\s.*'}}</b></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/country/components/country-budget-box/country-budget-box.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/country/components/country-budget-box/country-budget-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryBudgetBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountryBudgetBoxComponent = /** @class */ (function () {
    function CountryBudgetBoxComponent() {
    }
    CountryBudgetBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CountryBudgetBoxComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CountryBudgetBoxComponent.prototype, "isCountry", void 0);
    CountryBudgetBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-country-budget-box',
            template: __webpack_require__("./src/app/country/components/country-budget-box/country-budget-box.component.html"),
            styles: [__webpack_require__("./src/app/country/components/country-budget-box/country-budget-box.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CountryBudgetBoxComponent);
    return CountryBudgetBoxComponent;
}());



/***/ }),

/***/ "./src/app/country/components/country-emergency-number/country-emergency-number.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-block post-tips-list-block\">\r\n  <div class=\"post-top-layer\">\r\n    <div class=\"top-left\">\r\n      <h3 class=\"post-tip-ttl_lg\">Emergency Number &nbsp;<span>{{info.length}}</span></h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"post-list-inner\">\r\n    <div class=\"post-tip-row\"  *ngFor=\"let item of info\">\r\n      <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>{{item.trans[0]?.description}}</b></div>\r\n      <div class=\"row-txt\">\r\n        <span>{{item.trans[0]?.title}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/country/components/country-emergency-number/country-emergency-number.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/country/components/country-emergency-number/country-emergency-number.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryEmergencyNumberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountryEmergencyNumberComponent = /** @class */ (function () {
    function CountryEmergencyNumberComponent() {
    }
    CountryEmergencyNumberComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CountryEmergencyNumberComponent.prototype, "info", void 0);
    CountryEmergencyNumberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-country-emergency-number',
            template: __webpack_require__("./src/app/country/components/country-emergency-number/country-emergency-number.component.html"),
            styles: [__webpack_require__("./src/app/country/components/country-emergency-number/country-emergency-number.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CountryEmergencyNumberComponent);
    return CountryEmergencyNumberComponent;
}());



/***/ }),

/***/ "./src/app/country/components/country-gallery-box/country-gallery-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-block post-board\" (click)=\"openGallery()\">\r\n  <div class=\"post-side-top\">\r\n    <h3 class=\"side-ttl\">{{info?.title}}</h3>\r\n    <div class=\"side-right-control\">\r\n      <div class=\"side-count\">{{info?.count}}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"post-side-inner\">\r\n    <div class=\"board-photo-list\" >\r\n      <div class=\"board-image full-image\">\r\n        <img  *ngIf=\"info?.media[0] && info?.media[0].url\" src=\"{{'https://s3.amazonaws.com/travooo-images2/' + info.media[0]?.url}}\" alt=\"photo\">\r\n        <img  *ngIf=\"!info?.media[0] || !info?.media[0].url\" src=\"http://placehold.it/185x115\" alt=\"photo\">\r\n      </div>\r\n      <div class=\"board-image half-image\">\r\n        <img  *ngIf=\"info?.media[1] && info?.media[1].url\" src=\"{{'https://s3.amazonaws.com/travooo-images2/' + info.media[1]?.url}}\" alt=\"photo\">\r\n        <img  *ngIf=\"!info?.media[1] || !info?.media[1].url\" src=\"http://placehold.it/85x90\" alt=\"photo\">\r\n      </div>\r\n      <div class=\"board-image half-image\">\r\n        <img  *ngIf=\"info?.media[2] && info?.media[2].url\" src=\"{{'https://s3.amazonaws.com/travooo-images2/' + info.media[2]?.url}}\" alt=\"photo\">\r\n        <img  *ngIf=\"!info?.media[2] || !info?.media[2].url\" src=\"http://placehold.it/85x90\" alt=\"photo\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/country/components/country-gallery-box/country-gallery-box.component.scss":
/***/ (function(module, exports) {

module.exports = ".post-board .board-photo-list .board-image.half-image img {\n  width: 84px;\n  height: 89px; }\n\n.post-board .board-photo-list .board-image img {\n  width: 178px;\n  height: 111px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.post-board {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/country/components/country-gallery-box/country-gallery-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryGalleryBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountryGalleryBoxComponent = /** @class */ (function () {
    function CountryGalleryBoxComponent(router) {
        this.router = router;
    }
    CountryGalleryBoxComponent.prototype.ngOnInit = function () {
    };
    CountryGalleryBoxComponent.prototype.openGallery = function () {
        if (this.info.media.length && this.info.media[0].id) {
            this.router.navigate([this.router.url + "/" + this.info.routePath + "/" + this.info.media[0].id]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CountryGalleryBoxComponent.prototype, "info", void 0);
    CountryGalleryBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-country-gallery-box',
            template: __webpack_require__("./src/app/country/components/country-gallery-box/country-gallery-box.component.html"),
            styles: [__webpack_require__("./src/app/country/components/country-gallery-box/country-gallery-box.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], CountryGalleryBoxComponent);
    return CountryGalleryBoxComponent;
}());



/***/ }),

/***/ "./src/app/country/components/country-indexes-box/country-indexes-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-block post-tips-list-block\">\r\n  <div class=\"post-top-layer\">\r\n    <div class=\"top-left\">\r\n      <h3 class=\"post-tip-ttl_lg\">{{isCountry ? 'Country ' : 'City'}} Indexes</h3>\r\n    </div>\r\n    <div class=\"top-right\">\r\n      <a  class=\"tip-link\">Map Index</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"post-list-inner\">\r\n    <div class=\"post-tip-row\" *ngIf=\"info.trans[0].indexes?.pollution || info.trans[0]?.pollution_index\">\r\n      <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Pollution</b></div>\r\n      <div class=\"row-txt\">\r\n        <div class=\"index-slider-wrap\">\r\n          <div class=\"counter\">\r\n            <span id=\"current\">{{isCountry ? info.trans[0].pollution_index : info.trans[0].indexes.pollution}}</span>/100<span></span>\r\n          </div>\r\n          <mat-slider min=\"0\" max=\"100\" disabled=\"true\"  value=\"{{isCountry ? info.trans[0].pollution_index : info.trans[0].indexes.pollution}}\"></mat-slider>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"post-tip-row\" *ngIf=\"info.trans[0]?.cost_of_living \">\r\n      <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Cost of Living</b></div>\r\n      <div class=\"row-txt\">\r\n        <div class=\"index-slider-wrap\">\r\n          <div class=\"counter\">\r\n            <span>{{info.trans[0].cost_of_living}}</span>/100<span></span>\r\n          </div>\r\n          <mat-slider min=\"0\" max=\"100\" disabled=\"true\"  value=\"{{info.trans[0].cost_of_living }}\"></mat-slider>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"post-tip-row\" *ngIf=\"info.trans[0].indexes?.crime_rate || info.trans[0]?.crime_rate\">\r\n      <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Crime Rate</b></div>\r\n      <div class=\"row-txt\">\r\n        <div class=\"index-slider-wrap\">\r\n          <div class=\"counter\">\r\n            <span>{{isCountry ? info.trans[0].crime_rate : info.trans[0].indexes.crime_rate}}</span>/100<span></span>\r\n          </div>\r\n          <mat-slider min=\"0\" max=\"100\" disabled=\"true\"  value=\"{{isCountry ? info.trans[0].crime_rate : info.trans[0].indexes.crime_rate}}\"></mat-slider>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"post-tip-row\" *ngIf=\"info.trans[0].indexes?.quality_of_life || info.trans[0]?.quality_of_life\">\r\n      <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Quality of Life</b></div>\r\n      <div class=\"row-txt\">\r\n        <div class=\"index-slider-wrap\">\r\n          <div class=\"counter\">\r\n            <span>{{isCountry ? info.trans[0].quality_of_life : info.trans[0].indexes.quality_of_life}}</span>/100<span></span>\r\n          </div>\r\n          <mat-slider min=\"0\" max=\"100\" disabled=\"true\"  value=\"{{info.trans[0].quality_of_life}}\"></mat-slider>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/country/components/country-indexes-box/country-indexes-box.component.scss":
/***/ (function(module, exports) {

module.exports = ".post-block.post-tips-list-block .post-tip-row {\n  padding: 4px 0; }\n  .post-block.post-tips-list-block .post-tip-row .mat-slider-horizontal {\n    min-width: 200px; }\n"

/***/ }),

/***/ "./src/app/country/components/country-indexes-box/country-indexes-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryIndexesBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountryIndexesBoxComponent = /** @class */ (function () {
    function CountryIndexesBoxComponent() {
    }
    CountryIndexesBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CountryIndexesBoxComponent.prototype, "info", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CountryIndexesBoxComponent.prototype, "isCountry", void 0);
    CountryIndexesBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-country-indexes-box',
            template: __webpack_require__("./src/app/country/components/country-indexes-box/country-indexes-box.component.html"),
            styles: [__webpack_require__("./src/app/country/components/country-indexes-box/country-indexes-box.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CountryIndexesBoxComponent);
    return CountryIndexesBoxComponent;
}());



/***/ }),

/***/ "./src/app/country/components/country-middle-banner/country-middle-banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top-banner-wrap\">\r\n  <img class=\"banner-city\" *ngIf=\"!data.media.length\" src=\"http://placehold.it/1070x215\" alt=\"banner\">\r\n  <img class=\"banner-city\" *ngIf=\"data.media.length\" src=\"{{'https://s3.amazonaws.com/travooo-images2/' + data.media[0].url}}\" alt=\"banner\">\r\n  <div class=\"banner-cover-txt\">\r\n    <div class=\"banner-name\">\r\n      <div *ngIf=\"data.info.trans[0]?.title\" class=\"banner-ttl\">{{data.info.trans[0]?.title}}</div>\r\n      <div *ngIf=\"data.info?.region\" class=\"sub-ttl\">Country in {{data.info.region.trans[0]?.title}}</div>\r\n    </div>\r\n    <div class=\"banner-btn\">\r\n      <app-follow-button></app-follow-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/country/components/country-middle-banner/country-middle-banner.component.scss":
/***/ (function(module, exports) {

module.exports = ".top-banner-wrap img {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/country/components/country-middle-banner/country-middle-banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryMiddleBannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountryMiddleBannerComponent = /** @class */ (function () {
    function CountryMiddleBannerComponent() {
    }
    CountryMiddleBannerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CountryMiddleBannerComponent.prototype, "data", void 0);
    CountryMiddleBannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-country-middle-banner',
            template: __webpack_require__("./src/app/country/components/country-middle-banner/country-middle-banner.component.html"),
            styles: [__webpack_require__("./src/app/country/components/country-middle-banner/country-middle-banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CountryMiddleBannerComponent);
    return CountryMiddleBannerComponent;
}());



/***/ }),

/***/ "./src/app/country/components/country-top-banner/country-top-banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top-banner-wrap\">\r\n  <div class=\"post-block post-flage-detail\">\r\n    <div class=\"post-event-block\">\r\n      <div class=\"post-event-image\">\r\n        <img class=\"event-cover\"  *ngIf=\"!data?.media.length\" src=\"https://www.runnersworld.com/sites/runnersworld.com/files/styles/article_main_custom_user_phone_1x/public/articles/2016/09/nyc_marathon.jpg?itok=mrgDghrv&amp;timestamp=1473862824\" alt=\"photo\">\r\n        <img class=\"event-cover\" *ngIf=\"data?.media.length\" src=\"{{'https://s3.amazonaws.com/travooo-images2/' + data.media[0]?.url}}\">\r\n      </div>\r\n      <div class=\"post-event-main\">\r\n        <div class=\"flag-wrap\" *ngIf=\"data.info?.iso_code\">\r\n          <img src=\"{{'https://s3-us-west-2.amazonaws.com/travooo-assets/images/countryflags/medium/' + data.info?.iso_code.toLowerCase() + '.png'}}\" alt=\"flag\">\r\n        </div>\r\n        <div class=\"post-placement-info\">\r\n          <h2 *ngIf=\"data.info.trans[0]?.title\" class=\"place-name\">{{data.info.trans[0]?.title}}</h2>\r\n          <div class=\"event-info-layer\">\r\n            <span *ngIf=\"data.info?.region\" class=\"placement-place\">Country in <a href=\"#\" class=\"place-link\">{{data.info.region.trans[0]?.title}}</a></span>\r\n            <span  *ngIf=\"!data.info?.region\" class=\"placement-place\">City in <a [routerLink]=\"['/country', data.info.countries_id]\" class=\"place-link\">{{data.info.country.trans[0]?.title}}</a></span>\r\n            <div class=\"event-foot-info\">\r\n              <ul class=\"foot-avatar-list\">\r\n                <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n              </ul>\r\n            </div>\r\n            <i class=\"trav-talk-icon icon-grey-comment\"></i>\r\n            <span class=\"talking\">64K Talking about this</span>\r\n          </div>\r\n          <div class=\"event-main-content\">\r\n            <p>{{data.info.trans[0]?.description}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"follow-bottom-link\">\r\n        <app-follow-button></app-follow-button>\r\n        <a  class=\"follow-link\">{{data?.numOfFollowers}} {{data.numOfFollowers > 1 ? 'Followers':'Follower'}}</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/country/components/country-top-banner/country-top-banner.component.scss":
/***/ (function(module, exports) {

module.exports = ".flag-wrap img {\n  -o-object-fit: fill;\n     object-fit: fill;\n  width: 155px;\n  height: 77px; }\n"

/***/ }),

/***/ "./src/app/country/components/country-top-banner/country-top-banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryTopBannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountryTopBannerComponent = /** @class */ (function () {
    function CountryTopBannerComponent() {
    }
    CountryTopBannerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CountryTopBannerComponent.prototype, "data", void 0);
    CountryTopBannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-country-top-banner',
            template: __webpack_require__("./src/app/country/components/country-top-banner/country-top-banner.component.html"),
            styles: [__webpack_require__("./src/app/country/components/country-top-banner/country-top-banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CountryTopBannerComponent);
    return CountryTopBannerComponent;
}());



/***/ }),

/***/ "./src/app/country/components/holidays-list/holidays-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-block\">\r\n  <div class=\"post-side-top\">\r\n    <h3 class=\"side-ttl\">National holidays <span class=\"count\">{{(data | async).length}}</span></h3>\r\n    <div class=\"side-right-control\">\r\n      <a  class=\"see-more-link\">See all</a>\r\n      <a  class=\"slide-link slide-prev\"><i class=\"trav-angle-left\"></i></a>\r\n      <a  class=\"slide-link slide-next\"><i class=\"trav-angle-right\"></i></a>\r\n    </div>\r\n  </div>\r\n  <div class=\"post-side-inner\">\r\n    <div class=\"post-slide-wrap slide-hide-right-margin\">\r\n      <ul id=\"nationalHoliday\" class=\"post-slider\">\r\n        <li class=\"post-card\" *ngFor=\"let item of (data | async)\" [ngStyle]=\"{'width.px': settings.width}\">\r\n          <div class=\"image-wrap\">\r\n            <img src=\"http://placehold.it/274x234\" alt=\"\">\r\n<!--            <div class=\"card-cover\">\r\n              <span class=\"date\">4</span>\r\n              <span class=\"month\">Jul</span>\r\n            </div>-->\r\n          </div>\r\n          <div class=\"post-slider-caption\">\r\n            <p class=\"post-card-name\">{{item.trans[0]?.title}}</p>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/country/components/holidays-list/holidays-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".post-block .post-slide-wrap ul.post-slider li.post-card .image-wrap {\n  border: none; }\n"

/***/ }),

/***/ "./src/app/country/components/holidays-list/holidays-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HolidaysListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HolidaysListComponent = /** @class */ (function () {
    function HolidaysListComponent(store) {
        this.store = store;
        this.data = this.store.select(__WEBPACK_IMPORTED_MODULE_2__core_reducers__["d" /* getCountryHolidays */]);
    }
    HolidaysListComponent.prototype.ngOnInit = function () {
    };
    HolidaysListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-holidays-list',
            template: __webpack_require__("./src/app/country/components/holidays-list/holidays-list.component.html"),
            styles: [__webpack_require__("./src/app/country/components/holidays-list/holidays-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], HolidaysListComponent);
    return HolidaysListComponent;
}());



/***/ }),

/***/ "./src/app/country/components/left-outside-menu/left-outside-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"left-outside-menu-wrap\" id=\"leftOutsideMenu\">\r\n  <ul class=\"left-outside-menu\">\r\n    <li class=\"active\"><a href=\"#\">\r\n      <i class=\"trav-about-icon\"></i>\r\n      <span>About</span>\r\n    </a></li>\r\n    <li><a href=\"#\">\r\n      <i class=\"trav-trips-tips-icon\"></i>\r\n      <span>Trips tips</span>\r\n    </a></li>\r\n    <li><a href=\"#\">\r\n      <i class=\"trav-weather-cloud-icon\"></i>\r\n      <span>Weather</span>\r\n    </a></li>\r\n    <li><a href=\"#\">\r\n      <i class=\"trav-etiquette-icon\"></i>\r\n      <span>Etiquette</span>\r\n    </a></li>\r\n    <li><a href=\"#\">\r\n      <i class=\"trav-health-hand-icon\"></i>\r\n      <span>Health</span>\r\n    </a></li>\r\n    <li><a href=\"#\">\r\n      <i class=\"trav-visa-embassy-icon\"></i>\r\n      <span>Visa</span>\r\n    </a></li>\r\n    <li><a href=\"#\">\r\n      <i class=\"trav-flights-icon\"></i>\r\n      <span>When to go</span>\r\n    </a></li>\r\n    <li><a href=\"#\">\r\n      <i class=\"trav-caution-icon\"></i>\r\n      <span>Caution</span>\r\n    </a></li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/country/components/left-outside-menu/left-outside-menu.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/country/components/left-outside-menu/left-outside-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftOutsideMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftOutsideMenuComponent = /** @class */ (function () {
    function LeftOutsideMenuComponent() {
    }
    LeftOutsideMenuComponent.prototype.ngOnInit = function () {
    };
    LeftOutsideMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-left-outside-menu',
            template: __webpack_require__("./src/app/country/components/left-outside-menu/left-outside-menu.component.html"),
            styles: [__webpack_require__("./src/app/country/components/left-outside-menu/left-outside-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftOutsideMenuComponent);
    return LeftOutsideMenuComponent;
}());



/***/ }),

/***/ "./src/app/country/components/places-list/places-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-block\">\r\n  <div class=\"post-side-top\">\r\n    <h3 class=\"side-ttl\">Places <span class=\"count\">{{(stats | async).places}}</span></h3>\r\n    <div class=\"side-right-control\">\r\n      <a  class=\"see-more-link\">See all</a>\r\n      <a  class=\"slide-link slide-prev\"><i class=\"trav-angle-left\"></i></a>\r\n      <a  class=\"slide-link slide-next\"><i class=\"trav-angle-right\"></i></a>\r\n    </div>\r\n  </div>\r\n  <div class=\"post-side-inner\">\r\n    <div class=\"post-slide-wrap slide-hide-right-margin\">\r\n      <ul id=\"citiesSlider\" class=\"post-slider clearfix\">\r\n        <li  class=\"slider-item\" *ngFor=\"let item of (data | async)\"\r\n             [ngStyle]=\"{'width.px': settings.width,'height.px': settings.height}\" (click)=\"navigateToPlace(item.id)\">\r\n          <img *ngIf=\"!item.medias.length\" src=\"http://placehold.it/230x300\" alt=\"\">\r\n          <img [ngStyle]=\"{'width.px': settings.width,'height.px': settings.height}\" *ngIf=\"item.medias.length\"\r\n               src=\"{{'https://s3.amazonaws.com/travooo-images2/' + item.medias[0].url}}\" alt=\"\">\r\n          <div class=\"post-slider-caption transparent-caption\">\r\n            <p class=\"post-slide-name\">{{item.trans[0]?.title}}</p>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/country/components/places-list/places-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/country/components/places-list/places-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlacesListComponent = /** @class */ (function () {
    function PlacesListComponent(store, router) {
        this.store = store;
        this.router = router;
        this.data = this.store.select(__WEBPACK_IMPORTED_MODULE_2__core_reducers__["h" /* getCountryPlaces */]);
        this.stats = this.store.select(__WEBPACK_IMPORTED_MODULE_2__core_reducers__["i" /* getCountryStats */]);
    }
    PlacesListComponent.prototype.ngOnInit = function () {
        // this.data.subscribe(res => console.log('PlacesList', res))
    };
    PlacesListComponent.prototype.navigateToPlace = function (id) {
        if (id)
            this.router.navigate(['/places/', id]);
    };
    PlacesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-places-list',
            template: __webpack_require__("./src/app/country/components/places-list/places-list.component.html"),
            styles: [__webpack_require__("./src/app/country/components/places-list/places-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], PlacesListComponent);
    return PlacesListComponent;
}());



/***/ }),

/***/ "./src/app/country/components/sidebar-about-box/sidebar-about-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-block post-card-block\">\r\n  <div class=\"post-place-info-card\">\r\n    <div class=\"image-wrap\">\r\n      <img src=\"http://placehold.it/400x210\" alt=\"\">\r\n      <div class=\"post-place-image-info\">\r\n        <div class=\"place-flag-image\">\r\n          <img *ngIf=\"data.info?.iso_code\" class=\"flag-image\" src=\"{{'https://s3-us-west-2.amazonaws.com/travooo-assets/images/countryflags/medium/' + data.info.iso_code.toLowerCase() + '.png'}}\" alt=\"flag\">\r\n        </div>\r\n        <div class=\"follow-btn-wrap\">\r\n          <app-follow-button></app-follow-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"post-slider-caption\">\r\n      <p class=\"post-place-name\" >{{data.info.trans[0]?.title}}</p>\r\n      <p *ngIf=\"data.info?.region\" class=\"post-card-placement\">\r\n        Country in <a >{{data.info.region.trans[0]?.title}}</a>\r\n      </p>\r\n      <p *ngIf=\"!data.info?.region\" class=\"post-card-placement\">\r\n        City in <a [routerLink]=\"['/country', data.info.countries_id]\">{{data.info.country.trans[0]?.title}}</a>\r\n      </p>\r\n      <ul class=\"post-footer-info-list\">\r\n        <li>\r\n          <p class=\"info-count\">{{data?.numOfFollowers}}</p>\r\n          <p class=\"info-label\">Followers</p>\r\n        </li>\r\n        <li>\r\n          <p class=\"info-count\">{{data.stats?.trips}}</p>\r\n          <p class=\"info-label\">Trip Plans</p>\r\n        </li>\r\n        <li>\r\n          <p class=\"info-count\">64.857</p>\r\n          <p class=\"info-label\">Talking about it</p>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/country/components/sidebar-about-box/sidebar-about-box.component.scss":
/***/ (function(module, exports) {

module.exports = ".flag-image {\n  width: 105px;\n  height: 53px;\n  -o-object-fit: fill;\n     object-fit: fill; }\n"

/***/ }),

/***/ "./src/app/country/components/sidebar-about-box/sidebar-about-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarAboutBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarAboutBoxComponent = /** @class */ (function () {
    function SidebarAboutBoxComponent() {
    }
    SidebarAboutBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SidebarAboutBoxComponent.prototype, "data", void 0);
    SidebarAboutBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-about-box',
            template: __webpack_require__("./src/app/country/components/sidebar-about-box/sidebar-about-box.component.html"),
            styles: [__webpack_require__("./src/app/country/components/sidebar-about-box/sidebar-about-box.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarAboutBoxComponent);
    return SidebarAboutBoxComponent;
}());



/***/ }),

/***/ "./src/app/country/country.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<div class=\"main-wrapper\" *ngIf=\"showComponent\">\r\n <app-main-header></app-main-header>\r\n  <div class=\"content-wrap\">\r\n\r\n    <button class=\"btn btn-mobile-side sidebar-toggler\" id=\"sidebarToggler\">\r\n      <i class=\"trav-cog\"></i>\r\n    </button>\r\n    <button class=\"btn btn-mobile-side left-outside-btn\" id=\"filterToggler\">\r\n      <i class=\"trav-filter\"></i>\r\n    </button>\r\n\r\n    <div class=\"container-fluid\">\r\n      <!-- left outside menu -->\r\n      <app-left-outside-menu></app-left-outside-menu>\r\n\r\n      <app-country-top-banner  [data]=\"data\" ></app-country-top-banner>\r\n\r\n      <div class=\"top-board-wrap\">\r\n        <app-country-gallery-box  [info]=\"countryMediaData\"></app-country-gallery-box>\r\n        <app-country-gallery-box  [info]=\"plansMediaData\"></app-country-gallery-box>\r\n        <app-country-gallery-box  [info]=\"placesMediaData\"></app-country-gallery-box>\r\n        <div class=\"post-block post-board\">\r\n          <div class=\"post-side-top\">\r\n            <h3 class=\"side-ttl\">events</h3>\r\n            <div class=\"side-right-control\">\r\n              <div class=\"side-count\">241</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"post-side-inner\">\r\n            <div class=\"board-photo-list\">\r\n              <div class=\"board-image full-image\">\r\n                <img src=\"http://placehold.it/185x115\" alt=\"photo\">\r\n              </div>\r\n              <div class=\"board-image half-image\">\r\n                <img src=\"http://placehold.it/85x90\" alt=\"photo\">\r\n              </div>\r\n              <div class=\"board-image half-image\">\r\n                <img src=\"http://placehold.it/85x90\" alt=\"photo\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"post-block post-board\">\r\n          <div class=\"post-side-top\">\r\n            <h3 class=\"side-ttl\">Stories</h3>\r\n            <div class=\"side-right-control\">\r\n              <div class=\"side-count\">14</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"post-side-inner\">\r\n            <div class=\"board-photo-list\">\r\n              <div class=\"board-image full-image\">\r\n                <img src=\"http://placehold.it/185x115\" alt=\"photo\">\r\n              </div>\r\n              <div class=\"board-image half-image\">\r\n                <img src=\"http://placehold.it/85x90\" alt=\"photo\">\r\n              </div>\r\n              <div class=\"board-image half-image\">\r\n                <img src=\"http://placehold.it/85x90\" alt=\"photo\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <app-country-middle-banner  [data]=\"data\"></app-country-middle-banner>\r\n\r\n      <div class=\"custom-row\">\r\n        <!-- MAIN-CONTENT -->\r\n        <div class=\"main-content-layer\">\r\n          <app-country-about-box [info]=\"data.info\" [isCountry]=\"isCountry\"></app-country-about-box>\r\n          <app-country-about-box2  [info]=\"data.info\" [isCountry]=\"isCountry\"></app-country-about-box2>\r\n          <app-country-indexes-box  [info]=\"data.info\" [isCountry]=\"isCountry\"></app-country-indexes-box>\r\n\r\n          <app-country-emergency-number [info]=\"data.info.emergency\"></app-country-emergency-number>\r\n\r\n          <app-dcl-slider-wrapper *ngIf=\"showComponent && data?.places.length\" [type]=\"placesList\"\r\n                                  [settings]=\"{\r\n                                    width: 230,\r\n                                    height: 300,\r\n                                    count: data.places.length\r\n                                  }\">\r\n          </app-dcl-slider-wrapper>\r\n          <app-dcl-slider-wrapper  *ngIf=\"showComponent && data.info?.holidays.length\" [type]=\"holidaysList\"\r\n                                  [settings]=\"{\r\n                                    width: 274,\r\n                                    height: 234,\r\n                                    count: data.info.holidays.length\r\n                                  }\">\r\n          </app-dcl-slider-wrapper>\r\n\r\n\r\n          <div class=\"post-block post-country-block\">\r\n            <div class=\"post-side-top\">\r\n              <h3 class=\"side-ttl\">Accessibility</h3>\r\n            </div>\r\n            <div class=\"post-country-inner post-full-inner\">\r\n              <div class=\"post-map-block\">\r\n\r\n                <div class=\"post-map-inner\">\r\n                  <!--<img src=\"http://placehold.it/595x360\" alt=\"map\">-->\r\n                  <agm-map *ngIf=\"data.info?.lat && data.info?.lng\" [latitude]=\"+data.info.lat\" [longitude]=\"+data.info.lng\"></agm-map>\r\n\r\n                  <div class=\"post-top-map-tabs\">\r\n\r\n                    <div class=\"map-tab\" data-tab=\"atmTxt\" (click)=\"setCurrentTab(0)\" [ngClass]=\"{'current' : activeTab === 0 }\">\r\n                      <div class=\"tab-icon\"><i class=\"trav-atms-icon\"></i></div>\r\n                      <div class=\"tab-txt\">ATMs</div>\r\n                    </div>\r\n\r\n                    <div class=\"map-tab\" data-tab=\"wifiTxt\" (click)=\"setCurrentTab(1)\" [ngClass]=\"{'current' : activeTab === 1 }\">\r\n                      <div class=\"tab-icon\"><i class=\"trav-internet-icon\"></i></div>\r\n                      <div class=\"tab-txt\">Internet</div>\r\n                    </div>\r\n\r\n                    <div class=\"map-tab\" data-tab=\"socketTxt\" (click)=\"setCurrentTab(2)\" [ngClass]=\"{'current' : activeTab === 2 }\">\r\n                      <div class=\"tab-icon\"><i class=\"trav-sockets-icon\"></i></div>\r\n                      <div class=\"tab-txt\">Sockets</div>\r\n                    </div>\r\n\r\n                    <!--<div class=\"map-tab current\" data-tab=\"hotelTxt\">-->\r\n                      <!--<div class=\"tab-icon\"><i class=\"trav-hotels-icon\"></i></div>-->\r\n                      <!--<div class=\"tab-txt\">Hotels</div>-->\r\n                    <!--</div>-->\r\n                  </div>\r\n\r\n                  <div class=\"post-map-area\">\r\n                    <div class=\"area-txt\" id=\"atmTxt\" *ngIf=\"activeTab === 0\">\r\n                      <h5 class=\"ttl\">425,000</h5>\r\n                      <p>ATM machines</p>\r\n                    </div>\r\n\r\n                    <div class=\"area-txt\" id=\"wifiTxt\" *ngIf=\"activeTab === 1\">\r\n                      <p>{{data.info.trans[0].internet}}</p>\r\n                    </div>\r\n\r\n                    <div class=\"area-txt\" id=\"socketsTxt\" *ngIf=\"activeTab === 2\">\r\n                      <p>{{data.info.trans[0].sockets}}</p>\r\n                    </div>\r\n\r\n                    <!--<div class=\"area-txt\" id=\"socketTxt\" style=\"display:none;\">-->\r\n                      <!--<img src=\"./assets/image/types-blue-icons.png\" alt=\"icons\">-->\r\n                    <!--</div>-->\r\n                    <!--<div class=\"area-txt\" id=\"hotelTxt\">-->\r\n                      <!--<h5 class=\"ttl\">37,000</h5>-->\r\n                      <!--<p>Available Hotels</p>-->\r\n                    <!--</div>-->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-tab-block post-tip-tab\">\r\n            <div class=\"post-tab-inner post-tip-tab\" id=\"postTabBlock\">\r\n              <!--<div class=\"tab-item active-tab\">-->\r\n                <!--Trips Tips &nbsp;<span>57</span>-->\r\n              <!--</div>-->\r\n              <div class=\"tab-item active-tab \">\r\n                Packing Tips\r\n              </div>\r\n              <div class=\"tab-item\">\r\n                Daily Costs\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n         <!-- <div class=\"post-block post-tips-block\">\r\n            <div class=\"post-tips-block-inner\">\r\n              <div class=\"post-top-info-layer\">\r\n                <div class=\"post-top-info-wrap\">\r\n                  <div class=\"post-top-avatar-wrap\">\r\n                    <img src=\"http://placehold.it/30x30\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"post-top-info-txt\">\r\n                    <div class=\"post-top-name profile-name\">\r\n                      By\r\n                      <a class=\"post-name-link\" href=\"#\">Suzanne</a>\r\n                      from the trip plan\r\n                      <a href=\"#\" class=\"post-name-link\">What to See In New York City</a>\r\n                    </div>\r\n                    <div class=\"post-info-date\">\r\n                      5 days ago\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-tips\">\r\n                <div class=\"post-tips_block-wrap\">\r\n                  <div class=\"post-tips_block\">\r\n                    <div class=\"tips-content\">\r\n                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eveniet, architecto vel magnam accusamus nemo odio unde autem, provident eos itaque quas at, vitae ducimus. Earum magnam quod a tempore.</p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"tips-footer\">\r\n                    <ul class=\"tip-right-info-list\">\r\n                      <li class=\"round\">\r\n                        <i class=\"trav-bookmark-icon\"></i>\r\n                      </li>\r\n                      <li class=\"round\">\r\n                        <i class=\"trav-flag-icon\"></i>\r\n                      </li>\r\n                      <li class=\"round blue\">\r\n                        <i class=\"trav-chevron-up\"></i>\r\n                      </li>\r\n                      <li class=\"count\">\r\n                        <span>5</span>\r\n                      </li>\r\n                    </ul>\r\n                    <div class=\"tips-foot-link\">\r\n                      <a href=\"#\" class=\"tip-link\">+3 Tips by Suzanne</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-tips-block-inner\">\r\n              <div class=\"post-top-info-layer\">\r\n                <div class=\"post-top-info-wrap\">\r\n                  <div class=\"post-top-avatar-wrap\">\r\n                    <img src=\"http://placehold.it/30x30\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"post-top-info-txt\">\r\n                    <div class=\"post-top-name profile-name\">\r\n                      By\r\n                      <a class=\"post-name-link\" href=\"#\">Suzanne</a>\r\n                      from the trip plan\r\n                      <a href=\"#\" class=\"post-name-link\">What to See In New York City</a>\r\n                    </div>\r\n                    <div class=\"post-info-date\">\r\n                      5 days ago\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-tips\">\r\n                <div class=\"post-tips_block-wrap\">\r\n                  <div class=\"post-tips_block\">\r\n                    <div class=\"tips-content\">\r\n                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eveniet, architecto vel magnam accusamus nemo odio unde autem, provident eos itaque quas at, vitae ducimus. Earum magnam quod a tempore.</p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"tips-footer\">\r\n                    <ul class=\"tip-right-info-list\">\r\n                      <li class=\"round\">\r\n                        <i class=\"trav-bookmark-icon\"></i>\r\n                      </li>\r\n                      <li class=\"round\">\r\n                        <i class=\"trav-flag-icon\"></i>\r\n                      </li>\r\n                      <li class=\"round blue\">\r\n                        <i class=\"trav-chevron-up\"></i>\r\n                      </li>\r\n                      <li class=\"count\">\r\n                        <span>5</span>\r\n                      </li>\r\n                    </ul>\r\n                    <div class=\"tips-foot-link\">\r\n                      <a href=\"#\" class=\"tip-link\">+3 Tips by Suzanne</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-tips-block-inner\">\r\n              <div class=\"post-top-info-layer\">\r\n                <div class=\"post-top-info-wrap\">\r\n                  <div class=\"post-top-avatar-wrap\">\r\n                    <img src=\"http://placehold.it/30x30\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"post-top-info-txt\">\r\n                    <div class=\"post-top-name profile-name\">\r\n                      By\r\n                      <a class=\"post-name-link\" href=\"#\">Suzanne</a>\r\n                      from the trip plan\r\n                      <a href=\"#\" class=\"post-name-link\">What to See In New York City</a>\r\n                    </div>\r\n                    <div class=\"post-info-date\">\r\n                      5 days ago\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-tips\">\r\n                <div class=\"post-tips_block-wrap\">\r\n                  <div class=\"post-tips_block\">\r\n                    <div class=\"tips-content\">\r\n                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eveniet, architecto vel magnam accusamus nemo odio unde autem, provident eos itaque quas at, vitae ducimus. Earum magnam quod a tempore.</p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"tips-footer\">\r\n                    <ul class=\"tip-right-info-list\">\r\n                      <li class=\"round\">\r\n                        <i class=\"trav-bookmark-icon\"></i>\r\n                      </li>\r\n                      <li class=\"round\">\r\n                        <i class=\"trav-flag-icon\"></i>\r\n                      </li>\r\n                      <li class=\"round blue\">\r\n                        <i class=\"trav-chevron-up\"></i>\r\n                      </li>\r\n                      <li class=\"count\">\r\n                        <span>5</span>\r\n                      </li>\r\n                    </ul>\r\n                    <div class=\"tips-foot-link\">\r\n                      <a href=\"#\" class=\"tip-link\">+3 Tips by Suzanne</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-load-txt\">\r\n              Loading...\r\n            </div>\r\n          </div>-->\r\n\r\n          <app-country-budget-box *ngIf=\"data.info.trans[0]?.other && showComponent\" [data]=\"data.info.trans[0].other\"></app-country-budget-box>\r\n\r\n          <div class=\"post-block post-tips-list-block\">\r\n            <div class=\"post-top-layer\">\r\n              <div class=\"top-left\">\r\n                <ul class=\"foot-avatar-list\">\r\n                  <li><img class=\"small-ava\" src=\"http://placehold.it/28x28\" alt=\"ava\"></li><!--\r\n\t\t\t\t\t\t\t\t\t\t--><li><img class=\"small-ava\" src=\"http://placehold.it/28x28\" alt=\"ava\"></li><!--\r\n\t\t\t\t\t\t\t\t\t\t--><li><img class=\"small-ava\" src=\"http://placehold.it/28x28\" alt=\"ava\"></li>\r\n                </ul>&nbsp;\r\n                <!--<div class=\"post-top-txt\">-->\r\n                  <!--<span class=\"name\">John mobile</span>-->\r\n                  <!--<span>and 7 more are talking about this</span>-->\r\n                <!--</div>-->\r\n              </div>\r\n              <div class=\"top-right\">\r\n                <div class=\"top-comment-icon\">\r\n                  <i class=\"trav-talk-icon\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"post-list-inner\" *ngIf=\"data.info.trans[0]?.planning_tips\">\r\n\r\n                <div class=\"tips-container\" *ngFor=\"let item of planningTips | keys\">\r\n\r\n                  <div class=\"post-tip-row tip-txt\" *ngIf=\"checkDataType(planningTips)\">\r\n                    <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>{{item.key}}</b></div>\r\n                    <div class=\"row-txt\"><span>{{item.value}}</span></div>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"post-tip-row tip-txt\" *ngIf=\"!checkDataType(planningTips)\">\r\n                    <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>{{item.key}}</b></div>\r\n                    <div class=\"row-txt\">\r\n                      <ul>\r\n                        <li *ngFor=\"let value of item.value\" >{{value}}</li>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Shoes</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Aenean viverra mi at varius venenatis.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Umbrella</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Proin cursus erat at lorem placerat, bibendum tincidunt.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Backpack</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Mauris laoreet nibh nec odio porta consectetur.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Sunglasses</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Aenean viverra mi at varius venenatis.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>ID</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Proin cursus erat at lorem placerat, bibendum tincidunt.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Camera</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Mauris laoreet nibh nec odio porta consectetur.</span></div>-->\r\n              <!--</div>-->\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-tab-block post-tip-tab\">\r\n            <div class=\"post-tab-inner post-tip-tab\" id=\"\">\r\n              <div class=\"tab-item active-tab\">\r\n                Etiquette and Restrictions\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-tips-list-block\">\r\n            <div class=\"post-top-layer\">\r\n              <div class=\"top-left\">\r\n                <ul class=\"foot-avatar-list\">\r\n                  <li><img class=\"small-ava\" src=\"http://placehold.it/28x28\" alt=\"ava\"></li><!--\r\n\t\t\t\t\t\t\t\t\t\t--><li><img class=\"small-ava\" src=\"http://placehold.it/28x28\" alt=\"ava\"></li><!--\r\n\t\t\t\t\t\t\t\t\t\t--><li><img class=\"small-ava\" src=\"http://placehold.it/28x28\" alt=\"ava\"></li>\r\n                </ul>&nbsp;\r\n                <!--<div class=\"post-top-txt\">-->\r\n                  <!--<span class=\"name\">John mobile</span>-->\r\n                  <!--<span>and 7 more are talking about this</span>-->\r\n                <!--</div>-->\r\n              </div>\r\n              <div class=\"top-right\">\r\n                <div class=\"top-comment-icon\">\r\n                  <i class=\"trav-talk-icon\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"post-list-inner\" *ngIf=\"data.info.trans[0]?.etiquette && data.info.trans[0]?.restrictions\">\r\n              <div class=\"post-tip-row tip-txt\" *ngFor=\"let item of etiquette | keys\">\r\n                <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>{{item.key}}</b></div>\r\n                <div class=\"row-txt\"><span>{{item.value}}</span></div>\r\n              </div>\r\n\r\n              <div class=\"post-tip-row tip-txt\" *ngFor=\"let item of restrictions | keys\">\r\n                <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>{{item.key}}</b></div>\r\n                <div class=\"row-txt\"><span>{{item.value}}</span></div>\r\n              </div>\r\n\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Greeting</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Aenean viverra mi at varius venenatis.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Lines</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Proin cursus erat lorem placerat bibendum tincidunt sem.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Seats</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Mauris laoreet nibh nec odio porta consectetur.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Tips</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Duis egestas massa at feugiat tincidunt.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Dress Code</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Vivamus eu massa non tellus consequat euismod ut erat.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Photography</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Etiam eu enim a est imperdiet euismod.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Eating & Drinking</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Nulla porta felis id maximus aliquet.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Gestures</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Proin sit amet est finibus, auctor eros condimentum nisi.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Communication</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Vivamus ut ligula et urna pharetra lacinia.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Language</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Fusce lacinia dui quis nibh tincidunt pulvinar.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Religion</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Quisque eget dui aliquet, laoreet ante quis, sollicitudin.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Smoking</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Proin ullamcorper diam vel nibh placerat iaculis.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Visiting</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Nullam pharetra ipsum eu placerat dictum.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Hijab and Burqa</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Aenean viverra mi at varius venenatis.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Alcohol</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Proin cursus erat at lorem placerat, bibendum tincidunt.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Drugs</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Mauris laoreet nibh nec odio porta consectetur.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Prostitution</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Duis egestas massa at feugiat tincidunt.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Dress Code</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Vivamus eu massa non tellus consequat euismod.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Photography</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Etiam eu enim a est imperdiet euismod.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Driving</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Nulla porta felis id maximus aliquet.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Pork</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Proin sit amet est finibus, auctor eros non, condimentum.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Freedom of Religion</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Vivamus ut ligula et urna pharetra lacinia.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Freedom of Speech</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Fusce lacinia dui quis nibh tincidunt pulvinar.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Gambling</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Quisque eget dui aliquet, laoreet ante quis, sollicitudin.</span></div>-->\r\n              <!--</div>-->\r\n            </div>\r\n          </div>\r\n\r\n          <!--<div class=\"post-block post-tips-list-block\">-->\r\n            <!--<div class=\"post-top-layer\">-->\r\n              <!--<div class=\"top-left\">-->\r\n                <!--<h3 class=\"post-tip-ttl\">Recommended Vaccination</h3>-->\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"post-list-inner\">-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Immunizations</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Laoreet nibh nec odio porta consectetur.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Hepatitis B</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Proin cursus erat at lorem placerat, bibendum tincidunt.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Typhoid Fever</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Mauris laoreet nibh nec odio porta consectetur.</span></div>-->\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n\r\n          <div class=\"post-block post-tips-list-block\"  *ngIf=\"data.info.trans[0]?.health_notes\">\r\n            <div class=\"post-top-layer\">\r\n              <div class=\"top-left\">\r\n                <h3 class=\"post-tip-ttl\">Risk of Disease</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-list-inner\">\r\n\r\n              <div class=\"post-tip-row tip-txt\" *ngFor=\"let item of (healthNotes | keys) | slice:1\">\r\n                <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>{{item.key}}</b></div>\r\n                <div class=\"row-txt\"><span>{{item.value}}</span></div>\r\n              </div>\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Malaria</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Laoreet nibh nec odio porta consectetur.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Dengue</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Proin cursus erat at lorem placerat, bibendum tincidunt.</span></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"post-tip-row tip-txt\">-->\r\n                <!--<div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Hepatits</b></div>-->\r\n                <!--<div class=\"row-txt\"><span>Mauris laoreet nibh nec odio porta consectetur.</span></div>-->\r\n              <!--</div>-->\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-tab-block post-tip-tab\">\r\n            <div class=\"post-tab-inner post-tip-tab\" id=\"postTabBlock\">\r\n              <div class=\"tab-item\">\r\n                Potential Dangers\r\n              </div>\r\n              <div class=\"tab-item active-tab\">\r\n                Indexes\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-tips-list-block\">\r\n            <div class=\"post-top-layer\">\r\n              <div class=\"top-left\">\r\n                <ul class=\"foot-avatar-list\">\r\n                  <li><img class=\"small-ava\" src=\"http://placehold.it/28x28\" alt=\"ava\"></li><!--\r\n\t\t\t\t\t\t\t\t\t\t--><li><img class=\"small-ava\" src=\"http://placehold.it/28x28\" alt=\"ava\"></li><!--\r\n\t\t\t\t\t\t\t\t\t\t--><li><img class=\"small-ava\" src=\"http://placehold.it/28x28\" alt=\"ava\"></li>\r\n                </ul>&nbsp;\r\n                <!--<div class=\"post-top-txt\">-->\r\n                  <!--<span class=\"name\">John mobile</span>-->\r\n                  <!--<span>and 7 more are talking about this</span>-->\r\n                <!--</div>-->\r\n              </div>\r\n              <div class=\"top-right\">\r\n                <div class=\"top-comment-icon\">\r\n                  <i class=\"trav-talk-icon\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-list-inner\">\r\n              <div class=\"post-tip-row\">\r\n                <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Pollution</b></div>\r\n                <div class=\"row-txt\">\r\n                  <div class=\"index-slider-wrap\">\r\n                    <div class=\"counter\">\r\n                      <span id=\"current1\"></span>&nbsp;/&nbsp;<span id=\"total1\"></span>\r\n                    </div>\r\n                    <div id=\"sliderPollution1\" class=\"slider\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-tip-row\">\r\n                <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Cost of Living</b></div>\r\n                <div class=\"row-txt\">\r\n                  <div class=\"index-slider-wrap\">\r\n                    <div class=\"counter\">\r\n                      <span id=\"currentCost1\"></span>&nbsp;/&nbsp;<span id=\"totalCost1\"></span>\r\n                    </div>\r\n                    <div id=\"costOfLiving1\" class=\"slider\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-tip-row\">\r\n                <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Crime Rate</b></div>\r\n                <div class=\"row-txt\">\r\n                  <div class=\"index-slider-wrap\">\r\n                    <div class=\"counter\">\r\n                      <span id=\"currentRate1\"></span>&nbsp;/&nbsp;<span id=\"totalRate1\"></span>\r\n                    </div>\r\n                    <div id=\"crimeRate1\" class=\"slider\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-tip-row\">\r\n                <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Quality of Life</b></div>\r\n                <div class=\"row-txt\">\r\n                  <div class=\"index-slider-wrap\">\r\n                    <div class=\"counter\">\r\n                      <span id=\"currentQuolity1\"></span>&nbsp;/&nbsp;<span id=\"totalQuolity1\"></span>\r\n                    </div>\r\n                    <div id=\"qualityOfLife1\" class=\"slider\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-tips-list-block\">\r\n            <div class=\"post-top-layer\">\r\n              <div class=\"top-left\">\r\n                <ul class=\"foot-avatar-list\">\r\n                  <li><img class=\"small-ava\" src=\"http://placehold.it/28x28\" alt=\"ava\"></li><!--\r\n\t\t\t\t\t\t\t\t\t\t--><li><img class=\"small-ava\" src=\"http://placehold.it/28x28\" alt=\"ava\"></li><!--\r\n\t\t\t\t\t\t\t\t\t\t--><li><img class=\"small-ava\" src=\"http://placehold.it/28x28\" alt=\"ava\"></li>\r\n                </ul>&nbsp;\r\n                <!--<div class=\"post-top-txt\">-->\r\n                  <!--<span class=\"name\">John mobile</span>-->\r\n                  <!--<span>and 7 more are talking about this</span>-->\r\n                <!--</div>-->\r\n              </div>\r\n              <div class=\"top-right\">\r\n                <div class=\"top-comment-icon\">\r\n                  <i class=\"trav-talk-icon\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-list-inner\">\r\n              <div class=\"post-tip-row tip-txt\">\r\n                <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Visa</b></div>\r\n                <div class=\"row-txt\"><span class=\"red\">Required for Moroccan Passport Holders</span></div>\r\n              </div>\r\n              <div class=\"post-tip-row tip-txt\">\r\n                <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>ID</b></div>\r\n                <div class=\"row-txt\"><span>Proin cursus erat at lorem placerat, bibendum tincidunt.</span></div>\r\n              </div>\r\n              <div class=\"post-tip-row tip-txt\">\r\n                <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Photos</b></div>\r\n                <div class=\"row-txt\"><span>Mauris laoreet nibh nec odio porta consectetur.</span></div>\r\n              </div>\r\n              <div class=\"post-tip-row tip-txt\">\r\n                <div class=\"row-label\"><i class=\"trav-about-icon\"></i>&nbsp; <b>Good behavior certificate</b></div>\r\n                <div class=\"row-txt\"><span>Aenean viverra mi at varius venenatis.</span></div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-tips-list-block\">\r\n            <div class=\"post-top-layer\">\r\n              <div class=\"top-left\">\r\n                <h3 class=\"post-tip-ttl_lg\">Best Time to Go</h3>\r\n              </div>\r\n              <div class=\"top-right\">\r\n                <a href=\"#\" class=\"tip-link\"><i class=\"trav-open-video-in-window\"></i>&nbsp; Flight Search</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-top-layer\">\r\n              <div class=\"top-left\">\r\n                <ul class=\"foot-avatar-list\">\r\n                  <li><img class=\"small-ava\" src=\"http://placehold.it/28x28\" alt=\"ava\"></li><!--\r\n\t\t\t\t\t\t\t\t\t\t--><li><img class=\"small-ava\" src=\"http://placehold.it/28x28\" alt=\"ava\"></li><!--\r\n\t\t\t\t\t\t\t\t\t\t--><li><img class=\"small-ava\" src=\"http://placehold.it/28x28\" alt=\"ava\"></li>\r\n                </ul>&nbsp;\r\n                <!--<div class=\"post-top-txt\">-->\r\n                  <!--<span class=\"name\">John mobile</span>-->\r\n                  <!--<span>and 7 more are talking about this</span>-->\r\n                <!--</div>-->\r\n              </div>\r\n              <div class=\"top-right\">\r\n                <div class=\"top-comment-icon\">\r\n                  <i class=\"trav-talk-icon\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-flight-content\">\r\n              <div class=\"progress-block\">\r\n                <ul class=\"color-list\">\r\n                  <li class=\"low\">\r\n                    Low Season\r\n                  </li>\r\n                  <li class=\"mid\">\r\n                    Mid Season\r\n                  </li>\r\n                  <li class=\"high\">\r\n                    High Season\r\n                  </li>\r\n                </ul>\r\n                <div class=\"progress-inner\">\r\n                  <div class=\"progress-row\">\r\n                    <div class=\"progress-label\">January</div>\r\n                    <div class=\"progress-wrapper\">\r\n                      <div class=\"progress high\">\r\n                        <div class=\"progress-bar\" style=\"width:70%\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress-row\">\r\n                    <div class=\"progress-label\">February</div>\r\n                    <div class=\"progress-wrapper\">\r\n                      <div class=\"progress mid\">\r\n                        <div class=\"progress-bar\" style=\"width:40%\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress-row\">\r\n                    <div class=\"progress-label\">March</div>\r\n                    <div class=\"progress-wrapper\">\r\n                      <div class=\"progress low\">\r\n                        <div class=\"progress-bar\" style=\"width:26%\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress-row\">\r\n                    <div class=\"progress-label\">April</div>\r\n                    <div class=\"progress-wrapper\">\r\n                      <div class=\"progress low\">\r\n                        <div class=\"progress-bar\" style=\"width:30%\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress-row\">\r\n                    <div class=\"progress-label\">May</div>\r\n                    <div class=\"progress-wrapper\">\r\n                      <div class=\"progress low\">\r\n                        <div class=\"progress-bar\" style=\"width:13%\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress-row\">\r\n                    <div class=\"progress-label\">June</div>\r\n                    <div class=\"progress-wrapper\">\r\n                      <div class=\"progress mid\">\r\n                        <div class=\"progress-bar\" style=\"width:35%\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress-row\">\r\n                    <div class=\"progress-label\">July</div>\r\n                    <div class=\"progress-wrapper\">\r\n                      <div class=\"progress high\">\r\n                        <div class=\"progress-bar\" style=\"width:70%\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress-row\">\r\n                    <div class=\"progress-label\">August</div>\r\n                    <div class=\"progress-wrapper\">\r\n                      <div class=\"progress high\">\r\n                        <div class=\"progress-bar\" style=\"width:90%\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress-row\">\r\n                    <div class=\"progress-label\">September</div>\r\n                    <div class=\"progress-wrapper\">\r\n                      <div class=\"progress mid\">\r\n                        <div class=\"progress-bar\" style=\"width:50%\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress-row\">\r\n                    <div class=\"progress-label\">October</div>\r\n                    <div class=\"progress-wrapper\">\r\n                      <div class=\"progress low\">\r\n                        <div class=\"progress-bar\" style=\"width:25%\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress-row\">\r\n                    <div class=\"progress-label\">November</div>\r\n                    <div class=\"progress-wrapper\">\r\n                      <div class=\"progress mid\">\r\n                        <div class=\"progress-bar\" style=\"width:45%\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress-row\">\r\n                    <div class=\"progress-label\">December</div>\r\n                    <div class=\"progress-wrapper\">\r\n                      <div class=\"progress high\">\r\n                        <div class=\"progress-bar\" style=\"width:100%\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"flight-note\">\r\n                <h4 class=\"note-ttl\">Note:</h4>\r\n                <div class=\"note-txt\">\r\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae massa sed lacus vulputate volutpat in at mauris.</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-weather-block\">\r\n            <div class=\"general-weather-view\">\r\n              <div class=\"day-block-wrap\">\r\n                <div class=\"weather-info\">\r\n                  <div class=\"temperature\"><span>26</span><sup>o</sup><span class=\"temp\"><b>C</b> / F</span></div>\r\n                  <div class=\"weather-day\">\r\n                    <div class=\"day-name\">Monday 28 <span class=\"month\">Oct</span></div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"icon-wrap\">\r\n                  <img src=\"./assets/image/weather/weather-icon-1.svg\" alt=\"\" class=\"weather-icon\">\r\n                </div>\r\n              </div>\r\n              <div class=\"weather-txt-block\">\r\n                <div class=\"weather-title\">\r\n                  Nice day in <span>New York City</span>\r\n                </div>\r\n                <p>It's sunny right now in New York. The forecast today shows a low of 10<sup>o</sup></p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"weather-block-wrapper\">\r\n              <div class=\"weather-carousel-control\">\r\n                <a href=\"#\" class=\"slide-prev\"><i class=\"trav-angle-left\"></i></a>\r\n                <a href=\"#\" class=\"slide-next\"><i class=\"trav-angle-right\"></i></a>\r\n              </div>\r\n              <div class=\"weather-hour-carousel\" id=\"weatherHourCarousel\">\r\n                <div class=\"hour-block\">\r\n                  <div class=\"time-block\">2 PM</div>\r\n                  <div class=\"weather-image\">\r\n                    <img src=\"./assets/image/weather/weather-icon-5.svg\" alt=\"\" class=\"weather-icon\">\r\n                  </div>\r\n                  <div class=\"temp-block\">24<sup>o</sup></div>\r\n                </div>\r\n                <div class=\"hour-block\">\r\n                  <div class=\"time-block\">3 PM</div>\r\n                  <div class=\"weather-image\">\r\n                    <img src=\"./assets/image/weather/weather-icon-3.svg\" alt=\"\" class=\"weather-icon\">\r\n                  </div>\r\n                  <div class=\"temp-block\">22<sup>o</sup></div>\r\n                </div>\r\n                <div class=\"hour-block\">\r\n                  <div class=\"time-block\">4 PM</div>\r\n                  <div class=\"weather-image\">\r\n                    <img src=\"./assets/image/weather/weather-icon-4.svg\" alt=\"\" class=\"weather-icon\">\r\n                  </div>\r\n                  <div class=\"temp-block\">19<sup>o</sup></div>\r\n                </div>\r\n                <div class=\"hour-block\">\r\n                  <div class=\"time-block\">5 PM</div>\r\n                  <div class=\"weather-image\">\r\n                    <img src=\"./assets/image/weather/weather-icon-5.svg\" alt=\"\" class=\"weather-icon\">\r\n                  </div>\r\n                  <div class=\"temp-block\">24<sup>o</sup></div>\r\n                </div>\r\n                <div class=\"hour-block\">\r\n                  <div class=\"time-block\">6 PM</div>\r\n                  <div class=\"weather-image\">\r\n                    <img src=\"./assets/image/weather/weather-icon-3.svg\" alt=\"\" class=\"weather-icon\">\r\n                  </div>\r\n                  <div class=\"temp-block\">22<sup>o</sup></div>\r\n                </div>\r\n                <div class=\"hour-block\">\r\n                  <div class=\"time-block\">7 PM</div>\r\n                  <div class=\"weather-image\">\r\n                    <img src=\"./assets/image/weather/weather-icon-4.svg\" alt=\"\" class=\"weather-icon\">\r\n                  </div>\r\n                  <div class=\"temp-block\">19<sup>o</sup></div>\r\n                </div>\r\n                <div class=\"hour-block\">\r\n                  <div class=\"time-block\">8 PM</div>\r\n                  <div class=\"weather-image\">\r\n                    <img src=\"./assets/image/weather/weather-icon-5.svg\" alt=\"\" class=\"weather-icon\">\r\n                  </div>\r\n                  <div class=\"temp-block\">20<sup>o</sup></div>\r\n                </div>\r\n                <div class=\"hour-block\">\r\n                  <div class=\"time-block\">9 PM</div>\r\n                  <div class=\"weather-image\">\r\n                    <img src=\"./assets/image/weather/weather-icon-3.svg\" alt=\"\" class=\"weather-icon\">\r\n                  </div>\r\n                  <div class=\"temp-block\">23<sup>o</sup></div>\r\n                </div>\r\n                <div class=\"hour-block\">\r\n                  <div class=\"time-block\">10 PM</div>\r\n                  <div class=\"weather-image\">\r\n                    <img src=\"./assets/image/weather/weather-icon-5.svg\" alt=\"\" class=\"weather-icon\">\r\n                  </div>\r\n                  <div class=\"temp-block\">24<sup>o</sup></div>\r\n                </div>\r\n                <div class=\"hour-block\">\r\n                  <div class=\"time-block\">11 PM</div>\r\n                  <div class=\"weather-image\">\r\n                    <img src=\"./assets/image/weather/weather-icon-3.svg\" alt=\"\" class=\"weather-icon\">\r\n                  </div>\r\n                  <div class=\"temp-block\">22<sup>o</sup></div>\r\n                </div>\r\n                <div class=\"hour-block\">\r\n                  <div class=\"time-block\">12 PM</div>\r\n                  <div class=\"weather-image\">\r\n                    <img src=\"./assets/image/weather/weather-icon-4.svg\" alt=\"\" class=\"weather-icon\">\r\n                  </div>\r\n                  <div class=\"temp-block\">19<sup>o</sup></div>\r\n                </div>\r\n                <div class=\"hour-block\">\r\n                  <div class=\"time-block\">13 PM</div>\r\n                  <div class=\"weather-image\">\r\n                    <img src=\"./assets/image/weather/weather-icon-5.svg\" alt=\"\" class=\"weather-icon\">\r\n                  </div>\r\n                  <div class=\"temp-block\">20<sup>o</sup></div>\r\n                </div>\r\n                <div class=\"hour-block\">\r\n                  <div class=\"time-block\">14 PM</div>\r\n                  <div class=\"weather-image\">\r\n                    <img src=\"./assets/image/weather/weather-icon-3.svg\" alt=\"\" class=\"weather-icon\">\r\n                  </div>\r\n                  <div class=\"temp-block\">23<sup>o</sup></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"day-weather-list\">\r\n              <div class=\"day-weather-block\">\r\n                <div class=\"day-block-wrap\">\r\n                  <div class=\"weather-icon\">\r\n                    <img src=\"./assets/image/weather/weather-icon-2.svg\" alt=\"\" class=\"weather-icon\">\r\n                    <span class=\"temperature\">23<sup>o</sup></span>\r\n                  </div>\r\n                  <div class=\"weather-day\">\r\n                    <div class=\"day-name\">Tuesday</div>\r\n                    <div class=\"weather-desc\">Sunny</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"btn-wrap\">\r\n                  <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Plan a Trip</button>\r\n                </div>\r\n              </div>\r\n              <div class=\"day-weather-block\">\r\n                <div class=\"day-block-wrap\">\r\n                  <div class=\"weather-icon\">\r\n                    <img src=\"./assets/image/weather/weather-icon-2.svg\" alt=\"\" class=\"weather-icon\">\r\n                    <span class=\"temperature\">23<sup>o</sup></span>\r\n                  </div>\r\n                  <div class=\"weather-day\">\r\n                    <div class=\"day-name\">Wednesday</div>\r\n                    <div class=\"weather-desc\">Sunny</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"btn-wrap\">\r\n                  <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Plan a Trip</button>\r\n                </div>\r\n              </div>\r\n              <div class=\"day-weather-block\">\r\n                <div class=\"day-block-wrap\">\r\n                  <div class=\"weather-icon\">\r\n                    <img src=\"./assets/image/weather/weather-icon-2.svg\" alt=\"\" class=\"weather-icon\">\r\n                    <span class=\"temperature\">23<sup>o</sup></span>\r\n                  </div>\r\n                  <div class=\"weather-day\">\r\n                    <div class=\"day-name\">Thursday</div>\r\n                    <div class=\"weather-desc\">Sunny</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"btn-wrap\">\r\n                  <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Plan a Trip</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <!-- SIDEBAR -->\r\n        <div class=\"sidebar-layer\" id=\"sidebarLayer\">\r\n          <aside class=\"sidebar\">\r\n\r\n            <app-sidebar-about-box [data]=\"data\"></app-sidebar-about-box>\r\n\r\n\r\n           <div *ngIf=\"!isCountry\" class=\"post-block post-side-block\">\r\n              <div class=\"post-side-inner\">\r\n                <button type=\"button\" class=\"btn btn-light-primary btn-bordered btn-full\" (click)=\"addTrip()\">\r\n                  <i class=\"trav-add-trip-icon\"></i>\r\n                  Add a Trip\r\n                </button>\r\n              </div>\r\n           </div>\r\n\r\n            <div class=\"post-block post-side-block\">\r\n              <div class=\"post-side-inner\">\r\n                <div class=\"post-map-block\">\r\n                  <div class=\"post-map-inner\">\r\n                    <img src=\"http://placehold.it/345x435\" alt=\"map\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"post-block post-side-block\">\r\n              <div class=\"post-side-top\">\r\n                <h3 class=\"side-ttl\">New york today</h3>\r\n              </div>\r\n              <div class=\"post-side-image-inner\">\r\n                <ul class=\"post-image-list\">\r\n                  <li>\r\n                    <img src=\"http://placehold.it/112x119\" alt=\"\">\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"http://placehold.it/112x119\" alt=\"\">\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"http://placehold.it/112x119\" alt=\"\">\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"http://placehold.it/112x119\" alt=\"\">\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"http://placehold.it/112x119\" alt=\"\">\r\n                  </li>\r\n                  <li class=\"add-photo-link\">\r\n                    <div class=\"icon-wrap\">\r\n                      <i class=\"fa fa-plus\"></i>\r\n                    </div>\r\n                    <span>Add photo</span>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"post-block post-side-block\">\r\n              <div class=\"post-side-top\">\r\n                <h3 class=\"side-ttl\">Suggest</h3>\r\n              </div>\r\n              <div class=\"post-suggest-inner\">\r\n                <div class=\"suggest-icon-wrap\">\r\n                  <i class=\"trav-etiquette-icon\"></i>\r\n                </div>\r\n                <div class=\"suggest-txt\">\r\n                  <p>Have something to say about etiquette in New York?</p>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-light-primary btn-bordered btn-full\">\r\n                  Suggest one\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"post-block post-side-block\">\r\n              <div class=\"post-side-top\">\r\n                <h3 class=\"side-ttl\">Suggest</h3>\r\n              </div>\r\n              <div class=\"post-suggest-inner\">\r\n                <div class=\"suggest-icon-wrap\">\r\n                  <i class=\"trav-health-hand-icon\"></i>\r\n                </div>\r\n                <div class=\"suggest-txt\">\r\n                  <p>Have something to say about health in New York?</p>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-light-primary btn-bordered btn-full\">\r\n                  Add your Advice\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"post-block post-side-block\">\r\n              <div class=\"post-side-top\">\r\n                <h3 class=\"side-ttl\">Suggest</h3>\r\n              </div>\r\n              <div class=\"post-suggest-inner\">\r\n                <div class=\"suggest-icon-wrap\">\r\n                  <i class=\"trav-caution-icon\"></i>\r\n                </div>\r\n                <div class=\"suggest-txt\">\r\n                  <p>Have something to say about caution in New York?</p>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-light-primary btn-bordered btn-full\">\r\n                  Let us Know\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"post-block post-embassy-block\">\r\n              <div class=\"post-image-wrap\">\r\n                <img src=\"http://placehold.it/383x170\" alt=\"map\">\r\n                <div class=\"post-place-image\">\r\n                  <img src=\"http://placehold.it/80x80\" alt=\"place\">\r\n                </div>\r\n              </div>\r\n              <div class=\"post-place-location-info\">\r\n                <div class=\"post-place-txt\">\r\n                  <div class=\"post-place-row\">\r\n                    <h3 class=\"place-ttl\">Embassy location</h3>\r\n                  </div>\r\n                  <div class=\"post-place-row\">\r\n                    <div class=\"place-txt\">\r\n                      <address>122 Boulevard d'Anfa, 5th Floor, Casablanca 20000, Morocco.</address>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"post-place-row\">\r\n                    <div class=\"place-label\">Opening time:</div>\r\n                    <div class=\"place-txt\"><span>8AM – 5PM</span></div>\r\n                  </div>\r\n                  <div class=\"post-place-row\">\r\n                    <div class=\"place-label\">Phone number:</div>\r\n                    <div class=\"place-txt\"><span>05 37 63 72 00</span></div>\r\n                  </div>\r\n                  <div class=\"post-place-row\">\r\n                    <div class=\"place-label\">Website URL:</div>\r\n                    <div class=\"place-txt\"><a href=\"ma.usembassy.gov\">ma.usembassy.gov</a></div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"post-place-info-foot\">\r\n                  <div class=\"location-drop-wrap\">\r\n                    <a href=\"#\" class=\"foot-link\" id=\"locationDrop\">No in Morocco?</a>\r\n                    <div class=\"location-block-inner\">\r\n                      <div class=\"loc-search-block\">\r\n                        <input type=\"text\" class=\"\" id=\"locSearchInput\">\r\n                      </div>\r\n                      <div class=\"loc-result-block\">\r\n                        <div class=\"res-row\">France</div>\r\n                        <div class=\"res-row\">Faroe Islands</div>\r\n                        <div class=\"res-row\">Fiji</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"post-block post-country-block\">\r\n              <div class=\"post-side-top\">\r\n                <h3 class=\"side-ttl\">Flights from Morocco</h3>\r\n              </div>\r\n              <div class=\"post-country-inner\">\r\n                <div class=\"post-txt-wrap\">\r\n                  <a href=\"#\" class=\"question-link\">Not in Morocco?</a>\r\n                  <p class=\"post-txt\">New York is 7h 48min away from Rabat in direct fligth time, excluding any potentional layovers.</p>\r\n                </div>\r\n                <div class=\"post-map-block\">\r\n                  <div class=\"post-map-inner\">\r\n                    <img src=\"http://placehold.it/345x370\" alt=\"map\">\r\n                    <div class=\"flight-icon\" style=\"left:40%;top:40%;\">\r\n                      <i class=\"trav-angle-plane-icon\"></i>\r\n                      <div class=\"flight-tooltip\">\r\n                        7h 48min\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"post-block post-country-block\">\r\n              <div class=\"post-side-top\">\r\n                <h3 class=\"side-ttl\">Main Airports <span class=\"count\">12</span></h3>\r\n                <div class=\"side-right-control\">\r\n                  <a href=\"#\" class=\"see-more-link lg\">See All</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-country-inner\">\r\n                <div class=\"dest-list\">\r\n                  <div class=\"dest-item\">\r\n                    <div class=\"dest-location\"><i class=\"trav-set-location-icon\"></i>&nbsp; Queens</div>\r\n                    <div class=\"dest-link-wrap\">\r\n                      <a href=\"#\" class=\"dest-link\">John F.Kennedy International Airport</a>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"dest-item\">\r\n                    <div class=\"dest-location\"><i class=\"trav-set-location-icon\"></i>&nbsp; Queens</div>\r\n                    <div class=\"dest-link-wrap\">\r\n                      <a href=\"#\" class=\"dest-link\">LaGuardia Airport</a>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"dest-item\">\r\n                    <div class=\"dest-location\"><i class=\"trav-set-location-icon\"></i>&nbsp; Orange Country</div>\r\n                    <div class=\"dest-link-wrap\">\r\n                      <a href=\"#\" class=\"dest-link\">Stewart International Airport</a>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"dest-item\">\r\n                    <div class=\"dest-location\"><i class=\"trav-set-location-icon\"></i>&nbsp; Westchester</div>\r\n                    <div class=\"dest-link-wrap\">\r\n                      <a href=\"#\" class=\"dest-link\">Westchester Country Airport</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"share-page-block\">\r\n              <div class=\"share-page-inner\">\r\n                <div class=\"share-txt\">Share this page</div>\r\n                <ul class=\"share-list\">\r\n                  <li>\r\n                    <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\"><i class=\"fa fa-pinterest-p\"></i></a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\"><i class=\"fa fa-code\"></i></a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"aside-footer\">\r\n              <ul class=\"aside-foot-menu\">\r\n                <li><a href=\"#\">Privacy</a></li>\r\n                <li><a href=\"#\">Terms</a></li>\r\n                <li><a href=\"#\">Advertising</a></li>\r\n                <li><a href=\"#\">Cookies</a></li>\r\n                <li><a href=\"#\">More</a></li>\r\n              </ul>\r\n              <p class=\"copyright\">Travooo &copy; 2017</p>\r\n            </div>\r\n          </aside>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/country/country.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .post-tip-row ul li {\n  padding: 5px 0;\n  list-style-type: disc; }\n\n:host .tips-container:not(:last-child) {\n  border-bottom: 1px solid #e5e5e5; }\n\n:host agm-map {\n  display: block;\n  width: 100%;\n  height: 360px; }\n\n:host .area-txt p, :host .area-txt h5.ttl {\n  color: #fff;\n  font-weight: bold;\n  text-shadow: 0 0 5px #000; }\n"

/***/ }),

/***/ "./src/app/country/country.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_auto_unsubscribe__ = __webpack_require__("./node_modules/ngx-auto-unsubscribe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_country_service__ = __webpack_require__("./src/app/country/services/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_services_convert_service__ = __webpack_require__("./src/app/core/services/convert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_country_actions__ = __webpack_require__("./src/app/country/actions/country.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_places_list_places_list_component__ = __webpack_require__("./src/app/country/components/places-list/places-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_holidays_list_holidays_list_component__ = __webpack_require__("./src/app/country/components/holidays-list/holidays-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CountryComponent = /** @class */ (function () {
    function CountryComponent(route, router, convertService, countryService, store) {
        this.route = route;
        this.router = router;
        this.convertService = convertService;
        this.countryService = countryService;
        this.store = store;
        this.placesList = __WEBPACK_IMPORTED_MODULE_8__components_places_list_places_list_component__["a" /* PlacesListComponent */];
        this.holidaysList = __WEBPACK_IMPORTED_MODULE_9__components_holidays_list_holidays_list_component__["a" /* HolidaysListComponent */];
        this.showComponent = false;
        this.activeTab = 0;
        this.subscription$ = [];
        this.getData();
        console.log('constructor COUNTRY');
    }
    CountryComponent.prototype.ngOnInit = function () {
    };
    CountryComponent.prototype.getData = function () {
        var _this = this;
        /**
         * Check if this component is country or city
         */
        this.isCountry = this.countryService.getType() === 'countries';
        /**
         * this.route.snapshot.data.country -> this is data from country resolver
         */
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__actions_country_actions__["f" /* SetCountryInfoAction */](this.route.snapshot.data.country));
        /**
         * Get data for component (country or city)
         */
        this.subscription$.push(this.store.select(__WEBPACK_IMPORTED_MODULE_6__core_reducers__["c" /* getCountry */]).subscribe(function (res) {
            console.log('Country', res);
            _this.data = res;
            _this.init();
            _this.showComponent = true;
        }));
    };
    CountryComponent.prototype.init = function () {
        /**
         * Convert strings that are returned by API into objects
         */
        this.etiquette = this.convertService.convertSwitch(this.data.info.trans[0].etiquette, '\r\n\r\n');
        this.restrictions = this.convertService.convertSwitch(this.data.info.trans[0].restrictions, '\r\n\r\n');
        this.planningTips = this.convertService.convertSwitch(this.data.info.trans[0].planning_tips, '\r\n\r\n');
        this.healthNotes = this.convertService.convertSwitch(this.data.info.trans[0].health_notes, '\r\n\r\n');
        // FILL DATA FOR  BOX GALLERY WRAPPERs
        this.countryMediaData = {
            title: 'Photos',
            routePath: 'media',
            count: this.data.stats.medias,
            media: this.data.media.slice(0, 3)
        };
        this.plansMediaData = {
            title: 'Trip plans',
            routePath: 'trips-media',
            count: this.data.stats.trips,
            media: this.data.plans.slice(0, 3).map(function (res) { return res.medias; }),
        };
        this.placesMediaData = {
            title: 'Best places',
            routePath: 'place-media',
            count: this.data.stats.places,
            media: this.data.places.filter(function (arr) { return arr.medias.length; }).slice(0, 3).map(function (res) { return new Object({
                url: res.medias[0] && res.medias[0].url,
                id: res.medias[0] && res.medias[0].id,
            }); })
        };
    };
    CountryComponent.prototype.ngOnDestroy = function () {
    };
    CountryComponent.prototype.setCurrentTab = function (num) {
        this.activeTab = num;
    };
    CountryComponent.prototype.checkDataType = function (data) {
        return Object.keys(data).length > 1;
    };
    /**
     * navigate to /trip/new with params -> example: http://localhost:4200/trip/new?city=kiev
     */
    CountryComponent.prototype.addTrip = function () {
        this.router.navigate(['/trip/new'], { queryParams: { city: this.data.info.trans[0].title.toLowerCase() } });
    };
    CountryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ngx_auto_unsubscribe__["a" /* AutoUnsubscribe */])({ includeArrays: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-country',
            template: __webpack_require__("./src/app/country/country.component.html"),
            styles: [__webpack_require__("./src/app/country/country.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__core_services_convert_service__["a" /* ConvertService */],
            __WEBPACK_IMPORTED_MODULE_4__services_country_service__["a" /* CountryService */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */]])
    ], CountryComponent);
    return CountryComponent;
}());



/***/ }),

/***/ "./src/app/country/country.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__country_component__ = __webpack_require__("./src/app/country/country.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_country_service__ = __webpack_require__("./src/app/country/services/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_country_info_resolver__ = __webpack_require__("./src/app/country/services/country-info-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_country_gallery_box_country_gallery_box_component__ = __webpack_require__("./src/app/country/components/country-gallery-box/country-gallery-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_country_about_box_country_about_box_component__ = __webpack_require__("./src/app/country/components/country-about-box/country-about-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_left_outside_menu_left_outside_menu_component__ = __webpack_require__("./src/app/country/components/left-outside-menu/left-outside-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_country_top_banner_country_top_banner_component__ = __webpack_require__("./src/app/country/components/country-top-banner/country-top-banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_country_middle_banner_country_middle_banner_component__ = __webpack_require__("./src/app/country/components/country-middle-banner/country-middle-banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_sidebar_about_box_sidebar_about_box_component__ = __webpack_require__("./src/app/country/components/sidebar-about-box/sidebar-about-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_components_gallery_modal_gallery_modal_component__ = __webpack_require__("./src/app/core/components/gallery-modal/gallery-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_country_about_box2_country_about_box2_component__ = __webpack_require__("./src/app/country/components/country-about-box2/country-about-box2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_country_indexes_box_country_indexes_box_component__ = __webpack_require__("./src/app/country/components/country-indexes-box/country-indexes-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_slider__ = __webpack_require__("./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_country_emergency_number_country_emergency_number_component__ = __webpack_require__("./src/app/country/components/country-emergency-number/country-emergency-number.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_places_list_places_list_component__ = __webpack_require__("./src/app/country/components/places-list/places-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_holidays_list_holidays_list_component__ = __webpack_require__("./src/app/country/components/holidays-list/holidays-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_country_budget_box_country_budget_box_component__ = __webpack_require__("./src/app/country/components/country-budget-box/country-budget-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__modals_country_accordion_modal_country_accordion_modal_component__ = __webpack_require__("./src/app/country/modals/country-accordion-modal/country-accordion-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__core_pipes_keysPipe__ = __webpack_require__("./src/app/core/pipes/keysPipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__core_services_convert_service__ = __webpack_require__("./src/app/core/services/convert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var CountryModule = /** @class */ (function () {
    function CountryModule() {
    }
    CountryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_slider__["a" /* MatSliderModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__country_component__["a" /* CountryComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_country_gallery_box_country_gallery_box_component__["a" /* CountryGalleryBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_country_about_box_country_about_box_component__["a" /* CountryAboutBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_left_outside_menu_left_outside_menu_component__["a" /* LeftOutsideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_country_top_banner_country_top_banner_component__["a" /* CountryTopBannerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_country_middle_banner_country_middle_banner_component__["a" /* CountryMiddleBannerComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_sidebar_about_box_sidebar_about_box_component__["a" /* SidebarAboutBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_country_about_box2_country_about_box2_component__["a" /* CountryAboutBox2Component */],
                __WEBPACK_IMPORTED_MODULE_15__components_country_indexes_box_country_indexes_box_component__["a" /* CountryIndexesBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_country_emergency_number_country_emergency_number_component__["a" /* CountryEmergencyNumberComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_places_list_places_list_component__["a" /* PlacesListComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_holidays_list_holidays_list_component__["a" /* HolidaysListComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_country_budget_box_country_budget_box_component__["a" /* CountryBudgetBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_21__modals_country_accordion_modal_country_accordion_modal_component__["a" /* CountryAccordionModalComponent */],
                __WEBPACK_IMPORTED_MODULE_22__core_pipes_keysPipe__["a" /* KeysPipe */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_country_service__["a" /* CountryService */],
                __WEBPACK_IMPORTED_MODULE_6__services_country_info_resolver__["a" /* CountryInfoResolver */],
                __WEBPACK_IMPORTED_MODULE_23__core_services_convert_service__["a" /* ConvertService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__core_components_gallery_modal_gallery_modal_component__["a" /* GalleryModalComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_places_list_places_list_component__["a" /* PlacesListComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_holidays_list_holidays_list_component__["a" /* HolidaysListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__modals_country_accordion_modal_country_accordion_modal_component__["a" /* CountryAccordionModalComponent */]
            ]
        })
    ], CountryModule);
    return CountryModule;
}());



/***/ }),

/***/ "./src/app/country/country.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__country_component__ = __webpack_require__("./src/app/country/country.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_country_info_resolver__ = __webpack_require__("./src/app/country/services/country-info-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_modal_wrapper_modal_wrapper_component__ = __webpack_require__("./src/app/core/components/modal-wrapper/modal-wrapper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_components_gallery_modal_gallery_modal_component__ = __webpack_require__("./src/app/core/components/gallery-modal/gallery-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");





var CountryRoutes = [
    {
        path: 'country/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__country_component__["a" /* CountryComponent */],
        resolve: { country: __WEBPACK_IMPORTED_MODULE_1__services_country_info_resolver__["a" /* CountryInfoResolver */] },
        //canActivate: [AuthGuard],
        children: [
            {
                path: 'media/:mediaId',
                component: __WEBPACK_IMPORTED_MODULE_2__core_components_modal_wrapper_modal_wrapper_component__["a" /* ModalWrapperComponent */],
                data: { modal: __WEBPACK_IMPORTED_MODULE_3__core_components_gallery_modal_gallery_modal_component__["a" /* GalleryModalComponent */], getFunc: __WEBPACK_IMPORTED_MODULE_4__core_reducers__["g" /* getCountryMedia */], skipClose: true }
            },
            {
                path: 'trips-media/:mediaId',
                component: __WEBPACK_IMPORTED_MODULE_2__core_components_modal_wrapper_modal_wrapper_component__["a" /* ModalWrapperComponent */],
                data: { modal: __WEBPACK_IMPORTED_MODULE_3__core_components_gallery_modal_gallery_modal_component__["a" /* GalleryModalComponent */], getFunc: __WEBPACK_IMPORTED_MODULE_4__core_reducers__["y" /* getTripMedia */], skipClose: true }
            },
            {
                path: 'place-media/:mediaId',
                component: __WEBPACK_IMPORTED_MODULE_2__core_components_modal_wrapper_modal_wrapper_component__["a" /* ModalWrapperComponent */],
                data: { modal: __WEBPACK_IMPORTED_MODULE_3__core_components_gallery_modal_gallery_modal_component__["a" /* GalleryModalComponent */], getFunc: __WEBPACK_IMPORTED_MODULE_4__core_reducers__["t" /* getPlacesMedia */], skipClose: true }
            }
        ]
    },
    {
        path: 'city/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__country_component__["a" /* CountryComponent */],
        resolve: { country: __WEBPACK_IMPORTED_MODULE_1__services_country_info_resolver__["a" /* CountryInfoResolver */] },
        //canActivate: [AuthGuard],
        children: [
            {
                path: 'media/:mediaId',
                component: __WEBPACK_IMPORTED_MODULE_2__core_components_modal_wrapper_modal_wrapper_component__["a" /* ModalWrapperComponent */],
                data: { modal: __WEBPACK_IMPORTED_MODULE_3__core_components_gallery_modal_gallery_modal_component__["a" /* GalleryModalComponent */], getFunc: __WEBPACK_IMPORTED_MODULE_4__core_reducers__["g" /* getCountryMedia */], skipClose: true }
            },
            {
                path: 'trips-media/:mediaId',
                component: __WEBPACK_IMPORTED_MODULE_2__core_components_modal_wrapper_modal_wrapper_component__["a" /* ModalWrapperComponent */],
                data: { modal: __WEBPACK_IMPORTED_MODULE_3__core_components_gallery_modal_gallery_modal_component__["a" /* GalleryModalComponent */], getFunc: __WEBPACK_IMPORTED_MODULE_4__core_reducers__["y" /* getTripMedia */], skipClose: true }
            },
            {
                path: 'place-media/:mediaId',
                component: __WEBPACK_IMPORTED_MODULE_2__core_components_modal_wrapper_modal_wrapper_component__["a" /* ModalWrapperComponent */],
                data: { modal: __WEBPACK_IMPORTED_MODULE_3__core_components_gallery_modal_gallery_modal_component__["a" /* GalleryModalComponent */], getFunc: __WEBPACK_IMPORTED_MODULE_4__core_reducers__["t" /* getPlacesMedia */], skipClose: true }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/country/effects/country.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_actions_error_actions__ = __webpack_require__("./src/app/core/actions/error.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_country_actions__ = __webpack_require__("./src/app/country/actions/country.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_country_service__ = __webpack_require__("./src/app/country/services/country.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CountryEffects = /** @class */ (function () {
    /**
     * Default constructor
     * @param actions$
     * @param countryService
     * @param router
     */
    function CountryEffects(actions$, countryService) {
        var _this = this;
        this.actions$ = actions$;
        this.countryService = countryService;
        /**
         * Follow country
         */
        this.follow$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions_country_actions__["a" /* FOLLOW_COUNTRY */])
            .switchMap(function (action) { return _this.countryService.followCountry(action.payload)
            .map(function (res) { return res.success ? new __WEBPACK_IMPORTED_MODULE_3__actions_country_actions__["d" /* FollowSuccessAction */]() : new __WEBPACK_IMPORTED_MODULE_2__core_actions_error_actions__["b" /* AddErrorAction */](res.data); }); });
        /**
         * Unfollow country
         */
        this.unfollow$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions_country_actions__["g" /* UNFOLLOW_COUNTRY */])
            .switchMap(function (action) { return _this.countryService.unfollowCountry(action.payload)
            .map(function (res) { return res.success ? new __WEBPACK_IMPORTED_MODULE_3__actions_country_actions__["j" /* UnfollowSuccessAction */]() : new __WEBPACK_IMPORTED_MODULE_2__core_actions_error_actions__["b" /* AddErrorAction */](res.data); }); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], CountryEffects.prototype, "follow$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], CountryEffects.prototype, "unfollow$", void 0);
    CountryEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_6__services_country_service__["a" /* CountryService */]])
    ], CountryEffects);
    return CountryEffects;
}());



/***/ }),

/***/ "./src/app/country/modals/country-accordion-modal/country-accordion-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-wrapper\">\r\n  <button class=\"modal-close\" mat-button [mat-dialog-close]=\"true\">\r\n    <i class=\"trav-close-icon\"></i>\r\n  </button>\r\n  <div class=\"modal-dialog modal-custom-style modal-660\" role=\"document\">\r\n    <div class=\"modal-custom-block\">\r\n      <div class=\"post-block post-modal-language-style\">\r\n        <div class=\"post-lang-top\">\r\n\r\n          <div class=\"top-txt\" *ngIf=\"isCountry && (data | async).region.trans[0].title\">\r\n            <h3 class=\"ttl\">{{(data | async).trans[0].title}}</h3>\r\n            <p>Country in\r\n              <a href=\"#\" class=\"link\">{{(data | async).region.trans[0].title}}</a>\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"top-txt\" *ngIf=\"!isCountry && (data | async).country.trans[0].title\">\r\n            <h3 class=\"ttl\">{{(data | async).trans[0].title}}</h3>\r\n            <p>City in\r\n              <a [routerLink]=\"['/country', (data | async).countries_id]\" class=\"link\">{{(data | async).country.trans[0].title}}</a>\r\n            </p>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"post-lang-inner\">\r\n          <div class=\"lang-row\" *ngIf=\"(data | async).languages.length\">\r\n            <div class=\"lang-label\" (click)=\"openedList.languages = !openedList.languages\">\r\n              Languages Spoken <span>({{(data | async).languages.length}})</span>\r\n            </div>\r\n            <div class=\"lang-collapse\" [ngClass]=\"{'opened': openedList.languages}\">\r\n              <div class=\"lang-list\" *ngFor=\"let lang of (data | async).languages\">\r\n                <div class=\"lang-string\">\r\n                  <div class=\"name\">{{ lang.title }}</div>\r\n                  <!--<div class=\"name\">{{isCountry ? lang.trans.title : lang.title }}</div>-->\r\n                  <!-- <div class=\"info\">{{(data | async).iso_code}}</div>-->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"lang-row\" *ngIf=\"(data | async).currencies.length\">\r\n            <div class=\"lang-label\" (click)=\"openedList.currencies = !openedList.currencies\">\r\n              Currencies <span>({{(data | async).currencies.length}})</span>\r\n            </div>\r\n            <div class=\"lang-collapse\" [ngClass]=\"{'opened': openedList.currencies}\">\r\n              <div class=\"lang-list\" *ngFor=\"let curr of (data | async).currencies\">\r\n                <div class=\"lang-string\">\r\n                  <div class=\"name\">{{curr.trans[0].title}}</div>\r\n                  <!--<div class=\"info\">$</div>-->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--  <div class=\"lang-row\">\r\n              <div class=\"lang-label\" data-toggle=\"collapse\" data-target=\"#timings\" aria-expanded=\"false\" aria-controls=\"timings\">\r\n                Timings <span>(1)</span>\r\n              </div>\r\n              <div class=\"collapse lang-collapse\" id=\"timings\">\r\n                <div class=\"lang-list\">\r\n                  <div class=\"lang-string\">\r\n                    <div class=\"name\">New York, NY</div>\r\n                    <div class=\"info\">8:03 AM</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>-->\r\n          <div class=\"lang-row\" *ngIf=\"(data | async).religions.length\">\r\n            <div class=\"lang-label\" (click)=\"openedList.religions = !openedList.religions\">\r\n              Religions <span>({{(data | async).religions.length}})</span>\r\n            </div>\r\n            <div class=\"lang-collapse\"   [ngClass]=\"{'opened': openedList.religions}\">\r\n              <div class=\"lang-list\" *ngFor=\"let rel of (data | async).religions\">\r\n                <div class=\"lang-string\">\r\n                  <div class=\"name\">{{rel.trans[0].title}}</div>\r\n                  <!--<div class=\"info\">52 %</div>-->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"lang-row\" *ngIf=\"(data | async).trans[0].transportation.split(',').length\">\r\n            <div class=\"lang-label\" (click)=\"openedList.trans = !openedList.trans\">\r\n              Transportation Methods <span>({{(data | async).trans[0].transportation.split(',').length}})</span>\r\n            </div>\r\n            <div class=\"lang-collapse\"  [ngClass]=\"{'opened': openedList.trans}\">\r\n              <div class=\"lang-list\" *ngFor=\"let tran of (data | async).trans[0].transportation.split(',')\">\r\n                <div class=\"lang-string\" >\r\n                  <div class=\"name\">{{tran}}</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"lang-row\" *ngIf=\"(data | async).trans[0].speed_limit\">\r\n            <div class=\"lang-label\" (click)=\"openedList.limit = !openedList.limit\">\r\n              Speed limit <span>({{(data | async).trans[0].speed_limit.split('\\r\\n\\r\\n').length}})</span>\r\n            </div>\r\n            <div class=\"lang-collapse\"  [ngClass]=\"{'opened': openedList.limit}\">\r\n              <div class=\"lang-list\">\r\n                <div class=\"lang-string\" *ngFor=\"let item of (data | async).trans[0].speed_limit.split('\\r\\n\\r\\n')\">\r\n                  <div class=\"name\">{{item | match : '[^\\\\s]*'}}</div>\r\n                  <div class=\"info\">{{item | match : '\\\\s.*'}}</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/country/modals/country-accordion-modal/country-accordion-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ".lang-collapse {\n  max-height: 0;\n  overflow: hidden;\n  -webkit-transition: 0.4s;\n  transition: 0.4s; }\n  .lang-collapse.opened {\n    max-height: 400px;\n    height: auto; }\n"

/***/ }),

/***/ "./src/app/country/modals/country-accordion-modal/country-accordion-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryAccordionModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_country_service__ = __webpack_require__("./src/app/country/services/country.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountryAccordionModalComponent = /** @class */ (function () {
    function CountryAccordionModalComponent(store, countryService) {
        this.store = store;
        this.countryService = countryService;
        this.isCountry = this.countryService.getType() === 'countries';
        this.data = this.store.select(__WEBPACK_IMPORTED_MODULE_1__core_reducers__["f" /* getCountryInfo */]);
        this.openedList = {
            languages: false,
            religions: false,
            trans: false,
            limit: false,
            currencies: false,
        };
    }
    CountryAccordionModalComponent.prototype.ngOnInit = function () {
    };
    CountryAccordionModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-country-accordion-modal',
            template: __webpack_require__("./src/app/country/modals/country-accordion-modal/country-accordion-modal.component.html"),
            styles: [__webpack_require__("./src/app/country/modals/country-accordion-modal/country-accordion-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_3__services_country_service__["a" /* CountryService */]])
    ], CountryAccordionModalComponent);
    return CountryAccordionModalComponent;
}());



/***/ }),

/***/ "./src/app/country/reducers/country.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export INIT_STATE */
/* harmony export (immutable) */ __webpack_exports__["l"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCountryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getCountryStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCountryId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getFollowStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getCountryPlaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCountryHolidays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getCountryMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getTripMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getPlacesMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getCountryTrendingPlaces; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_country_actions__ = __webpack_require__("./src/app/country/actions/country.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_flatten__ = __webpack_require__("./node_modules/lodash/flatten.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_flatten___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_flatten__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var INIT_STATE = {
    country: null,
};
/**
 * Exports reducing function
 * @param state
 * @param action
 */
function reducer(state, action) {
    if (state === void 0) { state = INIT_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_country_actions__["e" /* SET_COUNTRY_INFO */]:
            return __assign({}, state, { country: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_country_actions__["b" /* FOLLOW_SUCCESS */]:
            return __assign({}, state, { country: __assign({}, state.country, { numOfFollowers: state.country.numOfFollowers + 1, followStatus: true }) });
        case __WEBPACK_IMPORTED_MODULE_0__actions_country_actions__["h" /* UNFOLLOW_SUCCESS */]:
            return __assign({}, state, { country: __assign({}, state.country, { numOfFollowers: state.country.numOfFollowers - 1, followStatus: false }) });
        default:
            return state;
    }
}
var getCountry = function (state) { return state.country; };
var getCountryInfo = function (state) { return state.country.info; };
var getCountryStats = function (state) { return state.country.stats; };
var getCountryId = function (state) { return state.country.info.id; };
var getFollowStatus = function (state) { return state.country.followStatus; };
var getCountryPlaces = function (state) { return state.country.places; };
var getCountryHolidays = function (state) { return state.country.info.holidays; };
var getCountryMedia = function (state) { return state.country.media; };
var getTripMedia = function (state) { return state.country.plans.map(function (res) { return res.medias; }); };
var getPlacesMedia = function (state) { return __WEBPACK_IMPORTED_MODULE_1_lodash_flatten__(state.country.places.filter(function (arr) { return arr.medias.length; }).slice(0, 10)
    .map(function (res) { return res.medias.map(function (res1) { return res1; }); })).slice(0, 10); };
var getCountryTrendingPlaces = function (state) { return state.country.trendingPlaces.places; };


/***/ }),

/***/ "./src/app/country/services/country-info-resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryInfoResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__country_service__ = __webpack_require__("./src/app/country/services/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/forkJoin.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CountryInfoResolver = /** @class */ (function () {
    function CountryInfoResolver(countryService, router) {
        this.countryService = countryService;
        this.router = router;
    }
    CountryInfoResolver.prototype.resolve = function (route) {
        var _this = this;
        var countryId = route.paramMap.get('id');
        switch (route.url[0].path) {
            case 'city':
                this.countryService.setType('cities');
                break;
            case 'country':
                this.countryService.setType('countries');
                break;
            default:
                return this.router.navigate(['/error']);
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].forkJoin(this.countryService.getCountryMedia(countryId), this.countryService.getCountryInfo(countryId), this.countryService.getNumOfFollowers(countryId), this.countryService.getCountryStats(countryId), this.countryService.getCountryPlans(countryId), this.countryService.getCountryPlaces(countryId), this.countryService.checkFollowStatus(countryId)).map(function (res) {
            /**
             * If at least one of the items in array has an error === 400 -> navigate to error page
             */
            res.forEach(function (item) {
                if (item.data && item.data.error === 400)
                    return _this.router.navigate(['/error']);
            });
            /**
             * Join multiply responses from server into one object
             */
            var country = {
                media: res[0].data.medias,
                info: res[1].data,
                numOfFollowers: res[2].data.followers,
                stats: res[3].data.stats,
                plans: res[4].data.plans,
                places: res[5].data.places,
                followStatus: res[6].success
            };
            return country;
        });
    };
    CountryInfoResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__country_service__["a" /* CountryService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], CountryInfoResolver);
    return CountryInfoResolver;
}());



/***/ }),

/***/ "./src/app/country/services/country.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_api_service__ = __webpack_require__("./src/app/core/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountryService = /** @class */ (function () {
    function CountryService(api, route) {
        this.api = api;
        this.route = route;
        console.log('router', this.route);
    }
    CountryService.prototype.setType = function (type) {
        return this.type = type;
    };
    CountryService.prototype.getType = function () {
        return this.type;
    };
    /**
     * Get country media
     */
    CountryService.prototype.getCountryMedia = function (countryId) {
        return this.api.get(this.type + "/" + countryId + "/media?language_id=1");
    };
    /**
     * Get country info
     */
    CountryService.prototype.getCountryInfo = function (countryId) {
        return this.api.get(this.type + "/" + countryId + "?language_id=1");
    };
    /**
     * Get country statistic
     */
    CountryService.prototype.getCountryStats = function (countryId) {
        return this.api.get(this.type + "/" + countryId + "/stats?language_id=1");
    };
    /**
     * Get country trip plans
     */
    CountryService.prototype.getCountryPlans = function (countryId) {
        return this.api.get(this.type + "/" + countryId + "/plans?language_id=1");
    };
    /**
     * Get country trip last places photo
     */
    CountryService.prototype.getCountryPlaces = function (countryId) {
        return this.api.get(this.type + "/" + countryId + "/places?language_id=1");
    };
    /**
     * Get reactions to media
     */
    CountryService.prototype.getReactions = function (mediaId) {
        return this.api.post("medias/" + mediaId + "/reactions?language_id=1", {});
    };
    /**
     * Follow country
     */
    CountryService.prototype.followCountry = function (countryId) {
        return this.api.post(this.type + "/" + countryId + "/follow?language_id=1", {});
    };
    /**
     * Unfollow country
     */
    CountryService.prototype.unfollowCountry = function (countryId) {
        return this.api.post(this.type + "/" + countryId + "/unfollow?language_id=1", {});
    };
    /**
     * Check follow  status country
     */
    CountryService.prototype.checkFollowStatus = function (countryId) {
        return this.api.post(this.type + "/" + countryId + "/checkfollow?language_id=1", {});
    };
    /**
     * Get number of followers
     */
    CountryService.prototype.getNumOfFollowers = function (countryId) {
        return this.api.get(this.type + "/" + countryId + "/num_followers?language_id=1");
    };
    /**
     * Report media
     */
    CountryService.prototype.reportMedia = function (mediaId) {
        return this.api.post("medias/" + mediaId + "/report?language_id=1", {});
    };
    /**
     * Like media
     */
    CountryService.prototype.likeMedia = function (mediaId) {
        return this.api.post("medias/" + mediaId + "/like?language_id=1", {});
    };
    /**
     * Like comment
     */
    CountryService.prototype.likeComment = function (mediaId, commentId) {
        return this.api.post("medias/" + mediaId + "/" + commentId + "/like?language_id=1", {});
    };
    /**
     * Report media
     */
    CountryService.prototype.sendComment = function (mediaId, comment, reply_to) {
        return this.api.post("medias/" + mediaId + "/comment?language_id=1", { comment: comment, reply_to: reply_to });
    };
    CountryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/home.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("./src/app/home/home/home.component.ts");

var HomeRoutes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */],
    }
];


/***/ }),

/***/ "./src/app/home/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\r\n  <header class=\"main-header\">\r\n    <div class=\"container-fluid\">\r\n      <nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\r\n        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <i class=\"trav-bars\"></i>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"#\">\r\n          <img src=\"./assets/image/main-circle-logo.png\" alt=\"\">\r\n        </a>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n          <div class=\"header-search-block\">\r\n            <div class=\"head-search-inner\">\r\n              <div class=\"search-block\">\r\n                <a class=\"search-btn\" href=\"#\"><i class=\"trav-search-icon\"></i></a>\r\n                <input type=\"text\" class=\"\" id=\"messageSearchInput\" placeholder=\"Search...\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item active\">\r\n              <a class=\"nav-link\" href=\"#\">Messages</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\">Help</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link btn btn-light-primary\" routerLink=\"/trip/new\">Plan trip</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"profile-link\" href=\"#\">\r\n                <img src=\"http://placehold.it/36x36\" alt=\"\">\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n  </header>\r\n\r\n  <div class=\"content-wrap\">\r\n\r\n    <button class=\"btn btn-mobile-side sidebar-toggler\" id=\"sidebarToggler\">\r\n      <i class=\"trav-cog\"></i>\r\n    </button>\r\n    <button class=\"btn btn-mobile-side left-outside-btn\" id=\"filterToggler\">\r\n      <i class=\"trav-filter\"></i>\r\n    </button>\r\n\r\n    <div class=\"container-fluid\">\r\n      <!-- left outside menu -->\r\n      <div class=\"left-outside-menu-wrap\" id=\"leftOutsideMenu\">\r\n        <ul class=\"left-outside-menu\">\r\n          <li class=\"active\"><a href=\"#\">\r\n            <i class=\"trav-home-icon\"></i>\r\n            <span>Home</span>\r\n          </a></li>\r\n          <li><a href=\"#\">\r\n            <i class=\"trav-travel-mates-icon\"></i>\r\n            <span>Travel Mates</span>\r\n          </a></li>\r\n          <li><a routerLink=\"/trip\">\r\n            <i class=\"trav-trip-plans-icon\"></i>\r\n            <span>Trip Plans</span>\r\n          </a></li>\r\n          <li><a href=\"#\">\r\n            <i class=\"trav-trending-icon\"></i>\r\n            <span>Trending</span>\r\n          </a></li>\r\n          <li><a href=\"#\">\r\n            <i class=\"trav-map-o\"></i>\r\n            <span>Map</span>\r\n          </a></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"custom-row\">\r\n        <!-- MAIN-CONTENT -->\r\n        <div class=\"main-content-layer\">\r\n\r\n          <div class=\"post-block post-create-block\" id=\"createPostBlock\">\r\n            <div class=\"post-create-input\">\r\n              <input type=\"text\" id=\"createPostTxt\" placeholder=\"Write something...\">\r\n            </div>\r\n            <div class=\"post-create-controls\">\r\n              <ul class=\"create-link-list\">\r\n                <li>\r\n                  <i class=\"trav-camera\"></i>\r\n                </li><!--\r\n                  --><li>\r\n                <i class=\"trav-set-location-icon\"></i>\r\n              </li>\r\n              </ul>\r\n              <button class=\"btn btn-light-primary btn-disabled\">Post</button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap\">\r\n                  <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">Stephen Burno</a>\r\n                  </div>\r\n                  <div class=\"post-info\">\r\n                    Uploaded <b>2 photos</b> yesterday at 10:33pm\r\n                    <i class=\"trav-set-location-icon\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <!-- <i class=\"trav-angle-down\"></i> -->\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-image-container\">\r\n              <ul class=\"post-image-list\">\r\n                <li>\r\n                  <img src=\"http://placehold.it/295x335\" alt=\"\">\r\n                </li>\r\n                <li>\r\n                  <img src=\"http://placehold.it/295x335\" alt=\"\">\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"post-footer-info\">\r\n              <div class=\"post-foot-block post-reaction\">\r\n                <img src=\"./assets/image/reaction-icon-smile-only.png\" alt=\"smile\">\r\n                <span><b>6</b> Reactions</span>\r\n              </div>\r\n              <div class=\"post-foot-block\">\r\n                <i class=\"trav-comment-icon\"></i>\r\n                <ul class=\"foot-avatar-list\">\r\n                  <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                </ul>\r\n                <span>20 Comments</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-side-top\">\r\n              <h3 class=\"side-ttl\"><i class=\"trav-trending-destination-icon\"></i> Trending destinations <span class=\"count\">20</span></h3>\r\n              <div class=\"side-right-control\">\r\n                <a href=\"#\" class=\"slide-link slide-prev\"><i class=\"trav-angle-left\"></i></a>\r\n                <a href=\"#\" class=\"slide-link slide-next\"><i class=\"trav-angle-right\"></i></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-side-inner\">\r\n              <div class=\"post-slide-wrap slide-hide-right-margin\">\r\n                <ul id=\"trendingDescription\" class=\"post-slider\">\r\n                  <li>\r\n                    <img src=\"http://placehold.it/230x300\" alt=\"\">\r\n                    <div class=\"post-slider-caption transparent-caption\">\r\n                      <p class=\"post-slide-name\">Central park</p>\r\n                      <div class=\"post-slide-description\">\r\n                        <span class=\"tag\">Park</span> in New York City\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"http://placehold.it/230x300\" alt=\"\">\r\n                    <div class=\"post-slider-caption transparent-caption\">\r\n                      <p class=\"post-slide-name\">Niagara falls</p>\r\n                      <div class=\"post-slide-description\">\r\n                        <span class=\"tag\">Waterfalls</span> in New York\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"http://placehold.it/230x300\" alt=\"\">\r\n                    <div class=\"post-slider-caption transparent-caption\">\r\n                      <p class=\"post-slide-name\">Grand canyon national park</p>\r\n                      <div class=\"post-slide-description\">\r\n                        <span class=\"tag\">Park</span> in Arizona\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap\">\r\n                  <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">Richard hylton</a>\r\n                  </div>\r\n                  <div class=\"post-info\">\r\n                    Uploaded a <b>photo</b> yesterday at 10:33am\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-image-container\">\r\n              <ul class=\"post-image-list\">\r\n                <li>\r\n                  <img src=\"http://placehold.it/595x624\" alt=\"\">\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"post-footer-info\">\r\n              <div class=\"post-foot-block post-reaction\">\r\n                <img src=\"./assets/image/reaction-icon-smile-only.png\" alt=\"smile\">\r\n                <span><b>12</b> Reactions</span>\r\n              </div>\r\n              <div class=\"post-foot-block\">\r\n                <i class=\"trav-comment-icon\"></i>\r\n                <ul class=\"foot-avatar-list\">\r\n                  <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                </ul>\r\n                <span>189 Comments</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-comment-layer\">\r\n              <div class=\"post-comment-top-info\">\r\n                <ul class=\"comment-filter\">\r\n                  <li class=\"active\">Top</li>\r\n                  <li>New</li>\r\n                </ul>\r\n                <div class=\"comm-count-info\">\r\n                  3 / 20\r\n                </div>\r\n              </div>\r\n              <div class=\"post-comment-wrapper\">\r\n                <div class=\"post-comment-row\">\r\n                  <div class=\"post-com-avatar-wrap\">\r\n                    <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"post-comment-text\">\r\n                    <div class=\"post-com-name-layer\">\r\n                      <a href=\"#\" class=\"comment-name\">Katherin</a>\r\n                      <a href=\"#\" class=\"comment-nickname\">@katherin</a>\r\n                    </div>\r\n                    <div class=\"comment-txt\">\r\n                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>\r\n                    </div>\r\n                    <div class=\"comment-bottom-info\">\r\n                      <div class=\"com-reaction\">\r\n                        <img src=\"./assets/image/icon-smile.png\" alt=\"\">\r\n                        <span>21</span>\r\n                      </div>\r\n                      <div class=\"com-time\">6 hours ago</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"post-comment-row\">\r\n                  <div class=\"post-com-avatar-wrap\">\r\n                    <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"post-comment-text\">\r\n                    <div class=\"post-com-name-layer\">\r\n                      <a href=\"#\" class=\"comment-name\">Amine</a>\r\n                      <a href=\"#\" class=\"comment-nickname\">@ak0117</a>\r\n                    </div>\r\n                    <div class=\"comment-txt\">\r\n                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus.</p>\r\n                    </div>\r\n                    <div class=\"comment-bottom-info\">\r\n                      <div class=\"com-reaction\">\r\n                        <img src=\"./assets/image/icon-like.png\" alt=\"\">\r\n                        <span>19</span>\r\n                      </div>\r\n                      <div class=\"com-time\">6 hours ago</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"post-comment-row\">\r\n                  <div class=\"post-com-avatar-wrap\">\r\n                    <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"post-comment-text\">\r\n                    <div class=\"post-com-name-layer\">\r\n                      <a href=\"#\" class=\"comment-name\">Katherin</a>\r\n                      <a href=\"#\" class=\"comment-nickname\">@katherin</a>\r\n                    </div>\r\n                    <div class=\"comment-txt\">\r\n                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>\r\n                    </div>\r\n                    <div class=\"comment-bottom-info\">\r\n                      <div class=\"com-reaction\">\r\n                        <img src=\"./assets/image/icon-smile.png\" alt=\"\">\r\n                        <span>15</span>\r\n                      </div>\r\n                      <div class=\"com-time\">6 hours ago</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <a href=\"#\" class=\"load-more-link\">Load more...</a>\r\n              </div>\r\n              <div class=\"post-add-comment-block\">\r\n                <div class=\"avatar-wrap\">\r\n                  <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-add-com-input\">\r\n                  <input type=\"text\" placeholder=\"Write a comment\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-round-icon-wrap\">\r\n                  <i class=\"trav-event-icon\"></i>\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">Quick Chek New Jersey Festival of Ballooning</a>\r\n                  </div>\r\n                  <div class=\"post-event-info\">\r\n                    <span class=\"event-tag\">Event</span>\r\n                    in <a class=\"event-place\" href=\"#\">New York City</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-image-container post-follow-container\">\r\n              <ul class=\"post-image-list\">\r\n                <li>\r\n                  <img src=\"http://placehold.it/595x250\" alt=\"\">\r\n                </li>\r\n              </ul>\r\n              <div class=\"post-follow-block\">\r\n                <div class=\"follow-txt-wrap\">\r\n                  <div class=\"date-block\">\r\n                    <span class=\"month\">jul</span>\r\n                    <span class=\"count-day\">15</span>\r\n                  </div>\r\n                  <div class=\"follow-txt\">\r\n                    <p class=\"follow-posted\">Posted by <a href=\"#\">Donec Ultrices Nunc</a></p>\r\n                    <p class=\"follow-description\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, veritatis.</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"follow-btn-wrap\">\r\n                  <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-footer-info\">\r\n              <div class=\"post-foot-block post-reaction\">\r\n                <img src=\"./assets/image/reaction-icon-smile-only.png\" alt=\"smile\">\r\n                <span><b>6</b> Reactions</span>\r\n              </div>\r\n              <div class=\"post-foot-block\">\r\n                <i class=\"trav-comment-icon\"></i>\r\n                <ul class=\"foot-avatar-list\">\r\n                  <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                </ul>\r\n                <span>20 Comments</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap\">\r\n                  <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">Stephen Bugno</a>\r\n                  </div>\r\n                  <div class=\"post-info\">\r\n                    Checked in at <i class=\"trav-set-location-icon\"></i> <a class=\"link-place\" href=\"#\">Central Park</a> yesterday - 10:33am\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-image-container\">\r\n              <div class=\"post-txt-wrap\">\r\n                <p class=\"post-txt\">Sed ultricies quam id mattis venenatis <img src=\"./assets/image/icon-smile-heart.png\" alt=\"\"> vivamus sapien purus, tincidunt quis aliquet vitae, eleifend nec sem.</p>\r\n              </div>\r\n              <ul class=\"post-image-list\">\r\n                <li>\r\n                  <img src=\"http://placehold.it/192x210\" alt=\"\">\r\n                </li>\r\n                <li>\r\n                  <img src=\"http://placehold.it/192x210\" alt=\"\">\r\n                </li>\r\n                <li class=\"more-photos-wrap\">\r\n                  <img src=\"http://placehold.it/192x210\" alt=\"\">\r\n                  <a href=\"#\" class=\"more-photos-link\">\r\n                    <span>5 More Photos</span>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"post-footer-info\">\r\n              <div class=\"post-foot-block post-reaction p-disabled\">\r\n                <img src=\"./assets/image/reaction-icon-smile-only.png\" alt=\"smile\">\r\n                <span>React</span>\r\n              </div>\r\n              <div class=\"post-foot-block\">\r\n                <i class=\"trav-comment-icon\"></i>\r\n                <ul class=\"foot-avatar-list\">\r\n                  <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                </ul>\r\n                <span>1 Comment</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-side-top\">\r\n              <h3 class=\"side-ttl\">Places you might like <span class=\"count\">20</span></h3>\r\n              <div class=\"side-right-control\">\r\n                <a href=\"#\" class=\"slide-link slide-prev\"><i class=\"trav-angle-left\"></i></a>\r\n                <a href=\"#\" class=\"slide-link slide-next\"><i class=\"trav-angle-right\"></i></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-side-inner\">\r\n              <div class=\"post-slide-wrap\">\r\n                <ul id=\"placeYouMightLike\" class=\"post-slider post-slider-active\">\r\n                  <li>\r\n                    <div class=\"image-wrap\">\r\n                      <img src=\"http://placehold.it/222x151\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"post-slider-caption transparent-caption\">\r\n                      <p class=\"post-slide-name\" href=\"#\">Statue of Liberty</p>\r\n                      <div class=\"post-slide-description\">\r\n                        United States of America\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"image-wrap\">\r\n                      <img src=\"http://placehold.it/222x151\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"post-slider-caption transparent-caption\">\r\n                      <p class=\"post-slide-name\" href=\"#\">Reichstag</p>\r\n                      <div class=\"post-slide-description\">\r\n                        Germany\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"image-wrap\">\r\n                      <img src=\"http://placehold.it/222x151\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"post-slider-caption transparent-caption\">\r\n                      <p class=\"post-slide-name\" href=\"#\">Kruger National Park</p>\r\n                      <div class=\"post-slide-description\">\r\n                        South Africa\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"post-map-wrap\">\r\n                <img src=\"http://placehold.it/597x400\" alt=\"map\">\r\n\r\n                <!-- <iframe width=\"600\" height=\"400\" src=\"https://www.mapsdirections.info/en/custom-google-maps/map.php?width=600&height=400&hl=ru&q=New%20York%20City+(Your%20Business%20Name)&ie=UTF8&t=p&z=4&iwloc=B&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"><a href=\"https://www.mapsdirections.info/en/custom-google-maps/\">Embed Google Map</a> by <a href=\"https://www.mapsdirections.info/en/\">Measure area on map</a></iframe> -->\r\n\r\n                <div class=\"post-map-info-caption map-black\">\r\n                  <div class=\"map-avatar\">\r\n                    <img src=\"http://placehold.it/25x25\" alt=\"ava\">\r\n                  </div>\r\n                  <div class=\"map-label-txt\">When is the best time to visit?</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-side-top\">\r\n              <h3 class=\"side-ttl\">Places you might like <span class=\"count\">20</span></h3>\r\n              <div class=\"side-right-control\">\r\n                <a href=\"#\" class=\"slide-link slide-prev\"><i class=\"trav-angle-left\"></i></a>\r\n                <a href=\"#\" class=\"slide-link slide-next\"><i class=\"trav-angle-right\"></i></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-side-inner\">\r\n              <div class=\"post-slide-wrap slide-hide-right-margin\">\r\n                <ul id=\"placeYouMightLikePostCard\" class=\"post-slider\">\r\n                  <li class=\"post-card\">\r\n                    <div class=\"image-wrap\">\r\n                      <img src=\"http://placehold.it/274x234\" alt=\"\">\r\n                      <a href=\"#\" class=\"place-location\"><i class=\"trav-set-location-icon\"></i></a>\r\n                    </div>\r\n                    <div class=\"post-slider-caption\">\r\n                      <p class=\"post-card-name\">Walt Disney World</p>\r\n                      <p class=\"post-card-placement\">\r\n                        <b>Park</b> in Florida\r\n                      </p>\r\n                      <div class=\"post-footer-info\">\r\n                        <div class=\"post-foot-block\">\r\n                          <ul class=\"foot-avatar-list\">\r\n                            <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                              --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                              --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                          </ul>\r\n                          <span>20 Talking about this</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"post-card\">\r\n                    <div class=\"image-wrap\">\r\n                      <img src=\"http://placehold.it/274x234\" alt=\"\">\r\n                      <a href=\"#\" class=\"place-location\"><i class=\"trav-set-location-icon\"></i></a>\r\n                    </div>\r\n                    <div class=\"post-slider-caption\">\r\n                      <p class=\"post-card-name\">Niagara Falls</p>\r\n                      <p class=\"post-card-placement\">\r\n                        <b>Waterfalls</b> in North America\r\n                      </p>\r\n                      <div class=\"post-footer-info\">\r\n                        <div class=\"post-foot-block\">\r\n                          <ul class=\"foot-avatar-list\">\r\n                            <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                              --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                              --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                          </ul>\r\n                          <span>18 Talking about this</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"post-card\">\r\n                    <div class=\"image-wrap\">\r\n                      <img src=\"http://placehold.it/274x234\" alt=\"\">\r\n                      <a href=\"#\" class=\"place-location\"><i class=\"trav-set-location-icon\"></i></a>\r\n                    </div>\r\n                    <div class=\"post-slider-caption\">\r\n                      <p class=\"post-card-name\">Grand Canyon National Park</p>\r\n                      <p class=\"post-card-placement\">\r\n                        <b>Park</b> in Florida\r\n                      </p>\r\n                      <div class=\"post-footer-info\">\r\n                        <div class=\"post-foot-block\">\r\n                          <ul class=\"foot-avatar-list\">\r\n                            <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                              --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                              --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                          </ul>\r\n                          <span>20 Talking about this</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap\">\r\n                  <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">Richard hylton</a>\r\n                  </div>\r\n                  <div class=\"post-info\">\r\n                    Added a <b>photo</b> yesterday at 10:33am <i class=\"trav-set-location-icon\"></i> <b>21 Km</b> from <a class=\"link-place\" href=\"#\">Arizona</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-image-container\">\r\n              <ul class=\"post-image-list\">\r\n                <li>\r\n                  <img src=\"http://placehold.it/595x404\" alt=\"\">\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"post-footer-info\">\r\n              <div class=\"post-foot-block post-reaction\">\r\n                <img src=\"./assets/image/reaction-icon-smile-only.png\" alt=\"smile\">\r\n                <span><b>6</b> Reactions</span>\r\n              </div>\r\n              <div class=\"post-foot-block\">\r\n                <i class=\"trav-comment-icon\"></i>\r\n                <ul class=\"foot-avatar-list\">\r\n                  <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li class=\"dropdown\">\r\n                      <span data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\">\r\n                      </span>\r\n                  <div class=\"dropdown-menu dropdown-info-style post-profile-block\">\r\n                    <div class=\"post-prof-image\">\r\n                      <img class=\"prof-cover\" src=\"http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1450820945/Godafoss-Iceland-waterfall-winter-SPIRIT1215.jpg?itok=hvUl-l-S\" alt=\"photo\">\r\n                    </div>\r\n                    <div class=\"post-prof-main\">\r\n                      <div class=\"avatar-wrap\">\r\n                        <img src=\"http://placehold.it/70x70\" alt=\"ava\">\r\n                      </div>\r\n                      <div class=\"post-person-info\">\r\n                        <div class=\"prof-name\">Sue Perez</div>\r\n                        <div class=\"prof-location\">United States of America</div>\r\n                      </div>\r\n                      <div class=\"drop-bottom-link\">\r\n                        <a href=\"#\" class=\"profile-link\">View profile</a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                </ul>\r\n                <span>20 Comments</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-comment-layer\">\r\n              <div class=\"post-comment-top-info\">\r\n                <ul class=\"comment-filter\">\r\n                  <li class=\"active\">Top</li>\r\n                  <li>New</li>\r\n                </ul>\r\n                <div class=\"comm-count-info\">\r\n                  3 / 20\r\n                </div>\r\n              </div>\r\n              <div class=\"post-comment-wrapper\">\r\n                <div class=\"post-comment-row\">\r\n                  <div class=\"post-com-avatar-wrap\">\r\n                    <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"post-comment-text\">\r\n                    <div class=\"post-com-name-layer\">\r\n                      <a href=\"#\" class=\"comment-name\">Katherin</a>\r\n                      <a href=\"#\" class=\"comment-nickname\">@katherin</a>\r\n                    </div>\r\n                    <div class=\"comment-txt\">\r\n                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>\r\n                    </div>\r\n                    <div class=\"comment-bottom-info\">\r\n                      <div class=\"com-reaction\">\r\n                        <img src=\"./assets/image/icon-smile.png\" alt=\"\">\r\n                        <span>21</span>\r\n                      </div>\r\n                      <div class=\"com-time\">6 hours ago</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"post-comment-row\">\r\n                  <div class=\"post-com-avatar-wrap\">\r\n                    <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"post-comment-text\">\r\n                    <div class=\"post-com-name-layer\">\r\n                      <a href=\"#\" class=\"comment-name\">Amine</a>\r\n                      <a href=\"#\" class=\"comment-nickname\">@ak0117</a>\r\n                    </div>\r\n                    <div class=\"comment-txt\">\r\n                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus.</p>\r\n                    </div>\r\n                    <div class=\"comment-bottom-info\">\r\n                      <div class=\"com-reaction\">\r\n                        <img src=\"./assets/image/icon-like.png\" alt=\"\">\r\n                        <span>19</span>\r\n                      </div>\r\n                      <div class=\"com-time\">6 hours ago</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"post-comment-row\">\r\n                  <div class=\"post-com-avatar-wrap\">\r\n                    <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"post-comment-text\">\r\n                    <div class=\"post-com-name-layer\">\r\n                      <a href=\"#\" class=\"comment-name\">Katherin</a>\r\n                      <a href=\"#\" class=\"comment-nickname\">@katherin</a>\r\n                    </div>\r\n                    <div class=\"comment-txt\">\r\n                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>\r\n                    </div>\r\n                    <div class=\"comment-bottom-info\">\r\n                      <div class=\"com-reaction\">\r\n                        <img src=\"./assets/image/icon-smile.png\" alt=\"\">\r\n                        <span>15</span>\r\n                      </div>\r\n                      <div class=\"com-time\">6 hours ago</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <a href=\"#\" class=\"load-more-link\">Load more...</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap\">\r\n                  <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">Bugno Senevirathne</a>\r\n                  </div>\r\n                  <div class=\"post-info\">\r\n                    15 July at 10:33am\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-image-container\">\r\n              <div class=\"post-txt-wrap\">\r\n                <p class=\"post-txt-lg\">Duis elementum aliquet sapien hendrerit faucibus. Proin et felis quis mi scelerisque dignissim. Etiam pellentesque ut massa malesuada scelerisque.</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-footer-info\">\r\n              <div class=\"post-foot-block post-reaction\">\r\n                <img src=\"./assets/image/reaction-icon-smile-only.png\" alt=\"smile\">\r\n                <span><b>6</b> Reactions</span>\r\n              </div>\r\n              <div class=\"post-foot-block\">\r\n                <i class=\"trav-comment-icon\"></i>\r\n                <ul class=\"foot-avatar-list\">\r\n                  <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                </ul>\r\n                <span>20 Comments</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-top-bordered\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap\">\r\n                  <img src=\"http://placehold.it/30x30\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name profile-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">Stephen Small</a>\r\n                    is now friend with\r\n                    <a href=\"#\" class=\"post-name-link\">Sue Perez</a>\r\n                  </div>\r\n                  <div class=\"post-info-date\">\r\n                    4 Hours ago\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-content-inner\">\r\n              <div class=\"post-profile-wrap\">\r\n                <div class=\"post-profile-block\">\r\n                  <div class=\"post-prof-image\">\r\n                    <img class=\"prof-cover\" src=\"http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1450820945/Godafoss-Iceland-waterfall-winter-SPIRIT1215.jpg?itok=hvUl-l-S\" alt=\"photo\">\r\n                    <a href=\"#\" class=\"btn btn-light-primary btn-follow\">\r\n                      <i class=\"trav-user-plus-icon\"></i>\r\n                    </a>\r\n                  </div>\r\n                  <div class=\"post-prof-main\">\r\n                    <div class=\"avatar-wrap\">\r\n                      <img src=\"http://placehold.it/70x70\" alt=\"ava\">\r\n                    </div>\r\n                    <div class=\"post-person-info\">\r\n                      <div class=\"prof-name\">Stephanie small</div>\r\n                      <div class=\"prof-location\">Morocco</div>\r\n                    </div>\r\n                    <ul class=\"post-person-photo-list\">\r\n                      <li><img src=\"http://placehold.it/80x80\" alt=\"photo\"></li>\r\n                      <li><img src=\"http://placehold.it/80x80\" alt=\"photo\"></li>\r\n                      <li><img src=\"http://placehold.it/80x80\" alt=\"photo\"></li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"drop-bottom-link\">\r\n                    <a href=\"#\" class=\"profile-link\">View profile</a>\r\n                  </div>\r\n                </div>\r\n                <div class=\"post-profile-block\">\r\n                  <div class=\"post-prof-image\">\r\n                    <img class=\"prof-cover\" src=\"http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1450820945/Godafoss-Iceland-waterfall-winter-SPIRIT1215.jpg?itok=hvUl-l-S\" alt=\"photo\">\r\n                    <a href=\"#\" class=\"btn btn-light-primary btn-follow btn-disabled\">\r\n                      <i class=\"trav-user-plus-icon\"></i>\r\n                    </a>\r\n                  </div>\r\n                  <div class=\"post-prof-main\">\r\n                    <div class=\"avatar-wrap\">\r\n                      <img src=\"http://placehold.it/70x70\" alt=\"ava\">\r\n                    </div>\r\n                    <div class=\"post-person-info\">\r\n                      <div class=\"prof-name\">Sue Perez</div>\r\n                      <div class=\"prof-location\">United States of America</div>\r\n                    </div>\r\n                    <ul class=\"post-person-photo-list\">\r\n                      <li><img src=\"http://placehold.it/80x80\" alt=\"photo\"></li>\r\n                      <li><img src=\"http://placehold.it/80x80\" alt=\"photo\"></li>\r\n                      <li><img src=\"http://placehold.it/80x80\" alt=\"photo\"></li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"drop-bottom-link\">\r\n                    <a href=\"#\" class=\"profile-link\">View profile</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-footer-info\">\r\n                <div class=\"post-foot-block post-reaction\">\r\n                  <img src=\"./assets/image/reaction-icon-smile-only.png\" alt=\"smile\">\r\n                  <span><b>3</b> Reactions</span>\r\n                </div>\r\n                <div class=\"post-foot-block\">\r\n                  <i class=\"trav-comment-icon\"></i>\r\n                  <ul class=\"foot-avatar-list\">\r\n                    <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                      --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                      --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                  </ul>\r\n                  <span>5 Comments</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap\">\r\n                  <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">Stephen Bugno</a>\r\n                  </div>\r\n                  <div class=\"post-info\">\r\n                    Shared a <b>Trip Plan</b> yesterday at 10:33am\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-image-container post-follow-container\">\r\n              <ul class=\"post-image-list\">\r\n                <li>\r\n                  <img src=\"http://placehold.it/595x400\" alt=\"\">\r\n                </li>\r\n              </ul>\r\n              <div class=\"post-follow-block\">\r\n                <div class=\"follow-txt-wrap\">\r\n                  <div class=\"follow-txt\">\r\n                    <p class=\"follow-destination\">4 Days to Dallas</p>\r\n                    <div class=\"follow-tag-wrap\">\r\n                      <span class=\"follow-tag\">solo</span>\r\n                      <span class=\"follow-tag\">urban</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"follow-btn-wrap\">\r\n                  <button type=\"button\" class=\"btn btn-light-grey btn-bordered btn-icon-side btn-icon-right\">\r\n                    View plan\r\n                    <span class=\"icon-wrap\"><i class=\"trav-view-plan-icon\"></i></span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-footer-info\">\r\n              <div class=\"post-foot-block post-reaction\">\r\n                <img src=\"./assets/image/reaction-icon-smile-only.png\" alt=\"smile\">\r\n                <span><b>6</b> Reactions</span>\r\n              </div>\r\n              <div class=\"post-foot-block\">\r\n                <i class=\"trav-comment-icon\"></i>\r\n                <ul class=\"foot-avatar-list\">\r\n                  <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                </ul>\r\n                <span>20 Comments</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-side-top\">\r\n              <h3 class=\"side-ttl\">Discover new people</h3>\r\n              <div class=\"side-right-control\">\r\n                <a href=\"#\" class=\"slide-link slide-prev\"><i class=\"trav-angle-left\"></i></a>\r\n                <a href=\"#\" class=\"slide-link slide-next\"><i class=\"trav-angle-right\"></i></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-side-inner\">\r\n              <div class=\"post-slide-wrap slide-hide-right-margin\">\r\n                <ul id=\"newPeopleDiscover\" class=\"post-slider\">\r\n                  <li class=\"post-follow-card\">\r\n                    <div class=\"follow-card-inner\">\r\n                      <div class=\"image-wrap\">\r\n                        <img src=\"http://placehold.it/42x42\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-slider-caption\">\r\n                        <p class=\"post-card-name\">Stephanie small</p>\r\n                        <p class=\"post-card-spec\">Photographer</p>\r\n                        <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n                        <p class=\"post-card-follow-count\">12K Followers</p>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"post-follow-card\">\r\n                    <div class=\"follow-card-inner\">\r\n                      <div class=\"image-wrap\">\r\n                        <img src=\"http://placehold.it/42x42\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-slider-caption\">\r\n                        <p class=\"post-card-name\">Beatriz kim park</p>\r\n                        <p class=\"post-card-spec\">Traveler</p>\r\n                        <button type=\"button\" class=\"btn btn-light-primary btn-bordered\">Following</button>\r\n                        <p class=\"post-card-follow-count\">248 Followers</p>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"post-follow-card\">\r\n                    <div class=\"follow-card-inner\">\r\n                      <div class=\"image-wrap\">\r\n                        <img src=\"http://placehold.it/42x42\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-slider-caption\">\r\n                        <p class=\"post-card-name\">Kathleen brown</p>\r\n                        <p class=\"post-card-spec\">Write</p>\r\n                        <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n                        <p class=\"post-card-follow-count\">39 Followers</p>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"post-follow-card\">\r\n                    <div class=\"follow-card-inner\">\r\n                      <div class=\"image-wrap\">\r\n                        <img src=\"http://placehold.it/42x42\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-slider-caption\">\r\n                        <p class=\"post-card-name\">Alex ah</p>\r\n                        <p class=\"post-card-spec\">Photographer</p>\r\n                        <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n                        <p class=\"post-card-follow-count\">8K Followers</p>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"post-follow-card\">\r\n                    <div class=\"follow-card-inner\">\r\n                      <div class=\"image-wrap\">\r\n                        <img src=\"http://placehold.it/42x42\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-slider-caption\">\r\n                        <p class=\"post-card-name\">Louie olson</p>\r\n                        <p class=\"post-card-spec\">Photographer</p>\r\n                        <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n                        <p class=\"post-card-follow-count\">198K Followers</p>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-round-icon-wrap\">\r\n                  <i class=\"trav-event-icon\"></i>\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">Independence day</a>\r\n                  </div>\r\n                  <div class=\"post-event-info\">\r\n                    <span class=\"event-tag\">National Holiday</span>\r\n                    in\r\n                    <span class=\"dropdown\">\r\n                        <a class=\"event-place\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Unites States of America</a>\r\n                        <div class=\"dropdown-menu dropdown-info-style post-profile-block location-block\">\r\n                          <div class=\"post-prof-image\">\r\n                            <img class=\"prof-cover\" src=\"http://www.midtownhotelnyc.com/resourcefiles/homeimages/hilton-garden-inn-new-york-manhattan-midtown-east-home1-top.jpg\" alt=\"photo\">\r\n                          </div>\r\n                          <div class=\"post-prof-main\">\r\n                            <div class=\"flag-wrap\">\r\n                              <img src=\"http://placehold.it/153x53?text=flag\" alt=\"ava\">\r\n                            </div>\r\n                            <div class=\"post-person-info\">\r\n                              <div class=\"prof-name\">United States of America</div>\r\n                              <div class=\"prof-location\">Country in North America</div>\r\n                              <div class=\"prof-button-wrap\">\r\n                                <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n                              </div>\r\n                              <div class=\"prof-follow-count\">28K Followers</div>\r\n                            </div>\r\n                            <div class=\"drop-bottom-link\">\r\n                              <a href=\"#\" class=\"profile-link\">View profile</a>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-image-container post-follow-container\">\r\n              <ul class=\"post-image-list\">\r\n                <li>\r\n                  <img src=\"http://placehold.it/595x250\" alt=\"\">\r\n                </li>\r\n              </ul>\r\n              <div class=\"post-follow-block\">\r\n                <div class=\"follow-txt-wrap\">\r\n                  <div class=\"date-block\">\r\n                    <span class=\"month blue\">jul</span>\r\n                    <span class=\"count-day\">15</span>\r\n                  </div>\r\n                  <div class=\"follow-txt\">\r\n                    <p class=\"follow-posted\">Posted by <a href=\"#\">Donec Ultrices Nunc</a></p>\r\n                    <p class=\"follow-description\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, veritatis.</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"follow-btn-wrap\">\r\n                  <button type=\"button\" class=\"btn btn-light-grey btn-bordered btn-icon-side btn-icon-right\">\r\n                    Follow\r\n                    <span class=\"icon-wrap\"><i class=\"trav-view-plan-icon\"></i></span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-footer-info\">\r\n              <div class=\"post-foot-block post-reaction\">\r\n                <img src=\"./assets/image/reaction-icon-smile-only.png\" alt=\"smile\">\r\n                <span><b>12</b> Reactions</span>\r\n              </div>\r\n              <div class=\"post-foot-block\">\r\n                <i class=\"trav-comment-icon\"></i>\r\n                <ul class=\"foot-avatar-list\">\r\n                  <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                </ul>\r\n                <span>23 Comments</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-top-bordered\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap\">\r\n                  <img src=\"http://placehold.it/30x30\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name profile-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">Stephen Small</a>\r\n                    is now friend with\r\n                    <a href=\"#\" class=\"post-name-link\">Sue Perez</a>\r\n                    and\r\n                    <span class=\"dropdown\">\r\n                        <a href=\"#\" class=\"post-name-link\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">5 more people</a>\r\n                        <div class=\"dropdown-menu dropdown-arrow dropdown-info-style dropdown-list\">\r\n                          <ul class=\"drop-list\">\r\n                            <li class=\"drop-row\">\r\n                              <div class=\"avatar-wrap\">\r\n                                <img src=\"http://placehold.it/45x45\" alt=\"ava\">\r\n                              </div>\r\n                              <div class=\"drop-txt\">\r\n                                <div class=\"people-name\">Gerald stuber</div>\r\n                                <div class=\"location\">United States</div>\r\n                              </div>\r\n                              <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n                            </li>\r\n                            <li class=\"drop-row\">\r\n                              <div class=\"avatar-wrap\">\r\n                                <img src=\"http://placehold.it/45x45\" alt=\"ava\">\r\n                              </div>\r\n                              <div class=\"drop-txt\">\r\n                                <div class=\"people-name\">Timothy pellingson</div>\r\n                                <div class=\"location\">Germany</div>\r\n                              </div>\r\n                              <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n                            </li>\r\n                            <li class=\"drop-row\">\r\n                              <div class=\"avatar-wrap\">\r\n                                <img src=\"http://placehold.it/45x45\" alt=\"ava\">\r\n                              </div>\r\n                              <div class=\"drop-txt\">\r\n                                <div class=\"people-name\">Joseth talley</div>\r\n                                <div class=\"location\">Italy</div>\r\n                              </div>\r\n                              <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n                            </li>\r\n                            <li class=\"drop-row\">\r\n                              <div class=\"avatar-wrap\">\r\n                                <img src=\"http://placehold.it/45x45\" alt=\"ava\">\r\n                              </div>\r\n                              <div class=\"drop-txt\">\r\n                                <div class=\"people-name\">Sharen holt</div>\r\n                                <div class=\"location\">Japan</div>\r\n                              </div>\r\n                              <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n                            </li>\r\n                            <li class=\"drop-row\">\r\n                              <div class=\"avatar-wrap\">\r\n                                <img src=\"http://placehold.it/45x45\" alt=\"ava\">\r\n                              </div>\r\n                              <div class=\"drop-txt\">\r\n                                <div class=\"people-name\">Robert casteel</div>\r\n                                <div class=\"location\">United States</div>\r\n                              </div>\r\n                              <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n                            </li>\r\n                          </ul>\r\n                        </div>\r\n                      </span>\r\n                  </div>\r\n                  <div class=\"post-info-date\">\r\n                    4 Hours ago\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-content-inner\">\r\n              <div class=\"post-profile-wrap\">\r\n                <div class=\"post-profile-block\">\r\n                  <div class=\"post-prof-image\">\r\n                    <img class=\"prof-cover\" src=\"http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1450820945/Godafoss-Iceland-waterfall-winter-SPIRIT1215.jpg?itok=hvUl-l-S\" alt=\"photo\">\r\n                    <a href=\"#\" class=\"btn btn-light-primary btn-follow\">\r\n                      <i class=\"trav-user-plus-icon\"></i>\r\n                    </a>\r\n                  </div>\r\n                  <div class=\"post-prof-main\">\r\n                    <div class=\"avatar-wrap\">\r\n                      <img src=\"http://placehold.it/70x70\" alt=\"ava\">\r\n                    </div>\r\n                    <div class=\"post-person-info\">\r\n                      <div class=\"prof-name\">Stephanie small</div>\r\n                      <div class=\"prof-location\">Morocco</div>\r\n                    </div>\r\n                    <ul class=\"post-person-photo-list\">\r\n                      <li><img src=\"http://placehold.it/80x80\" alt=\"photo\"></li>\r\n                      <li><img src=\"http://placehold.it/80x80\" alt=\"photo\"></li>\r\n                      <li><img src=\"http://placehold.it/80x80\" alt=\"photo\"></li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"drop-bottom-link\">\r\n                    <a href=\"#\" class=\"profile-link\">View profile</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-footer-info\">\r\n                <div class=\"post-foot-block post-reaction\">\r\n                  <img src=\"./assets/image/reaction-icon-smile-only.png\" alt=\"smile\">\r\n                  <span><b>3</b> Reactions</span>\r\n                </div>\r\n                <div class=\"post-foot-block\">\r\n                  <i class=\"trav-comment-icon\"></i>\r\n                  <ul class=\"foot-avatar-list\">\r\n                    <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                      --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                      --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                  </ul>\r\n                  <span>5 Comments</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-side-top\">\r\n              <h3 class=\"side-ttl\"><i class=\"trav-trending-destination-icon\"></i> Trending activities\r\n                <span class=\"dropdown\">\r\n                    <a class=\"event-place\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">#Morocco</a> <i class=\"trav-caret-down\"></i>\r\n                    <div class=\"dropdown-menu dropdown-info-style post-profile-block location-block\">\r\n                      <div class=\"post-prof-image\">\r\n                        <img class=\"prof-cover\" src=\"http://www.midtownhotelnyc.com/resourcefiles/homeimages/hilton-garden-inn-new-york-manhattan-midtown-east-home1-top.jpg\" alt=\"photo\">\r\n                      </div>\r\n                      <div class=\"post-prof-main\">\r\n                        <div class=\"flag-wrap\">\r\n                          <img src=\"http://placehold.it/153x53?text=flag\" alt=\"ava\">\r\n                        </div>\r\n                        <div class=\"post-person-info\">\r\n                          <div class=\"prof-name\">Morocco</div>\r\n                          <div class=\"prof-location\">Country in North Africa</div>\r\n                          <div class=\"prof-button-wrap\">\r\n                            <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n                          </div>\r\n                          <div class=\"prof-follow-count\">28K Followers</div>\r\n                        </div>\r\n                        <div class=\"drop-bottom-link\">\r\n                          <a href=\"#\" class=\"profile-link\">View profile</a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </span>\r\n              </h3>\r\n              <div class=\"side-right-control\">\r\n                <a href=\"#\" class=\"slide-link slide-prev\"><i class=\"trav-angle-left\"></i></a>\r\n                <a href=\"#\" class=\"slide-link slide-next\"><i class=\"trav-angle-right\"></i></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-side-inner\">\r\n              <div class=\"post-slide-wrap slide-hide-right-margin\">\r\n                <ul id=\"trendingActivity\" class=\"post-slider\">\r\n                  <li>\r\n                    <img src=\"http://placehold.it/230x300\" alt=\"\">\r\n                    <div class=\"post-slider-caption transparent-caption\">\r\n                      <p class=\"post-slide-name\" href=\"#\">Sahara quad biking</p>\r\n                      <div class=\"post-slide-description\">\r\n                        <span class=\"tag\">event</span> in Ouarzazate\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"http://placehold.it/230x300\" alt=\"\">\r\n                    <div class=\"post-slider-caption transparent-caption\">\r\n                      <p class=\"post-slide-name\" href=\"#\">Surf Lesson at Devils Rock</p>\r\n                      <div class=\"post-slide-description\">\r\n                        <span class=\"tag\">Event</span> in Agadir\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"http://placehold.it/230x300\" alt=\"\">\r\n                    <div class=\"post-slider-caption transparent-caption\">\r\n                      <p class=\"post-slide-name\" href=\"#\">Morocco skiing</p>\r\n                      <div class=\"post-slide-description\">\r\n                        <span class=\"tag\">event</span> in Ifran\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap\">\r\n                  <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">Stephen Bugno</a>\r\n                  </div>\r\n                  <div class=\"post-info\">\r\n                    Shared a\r\n                    <a href=\"#\" class=\"link-place\">Trip Plan</a> to\r\n                    <a href=\"#\" class=\"link-place\">7 Destinations</a> in\r\n                    <a href=\"#\" class=\"link-place\">Tokyo</a>\r\n                    on 1 Sep 2017\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-image-container post-follow-container\">\r\n              <div class=\"post-image-inner\">\r\n                <div class=\"post-map-wrap\">\r\n                  <img src=\"http://placehold.it/595x400\" alt=\"map\">\r\n                  <div class=\"post-map-info-caption map-blue\">\r\n                    <div class=\"map-avatar\">\r\n                      <img src=\"http://placehold.it/25x25\" alt=\"ava\">\r\n                    </div>\r\n                    <div class=\"map-label-txt\">\r\n                      Checking on <b>2 Sep</b> at <b>8:30 am</b> and will stay <b>30 min</b>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"post-destination-block slide-dest-hide-right-margin\">\r\n                  <div class=\"post-dest-slider\" id=\"postDestSlider\">\r\n                    <div class=\"post-dest-card\">\r\n                      <div class=\"post-dest-card-inner\">\r\n                        <div class=\"dest-image\">\r\n                          <img src=\"http://placehold.it/68x68\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"dest-info\">\r\n                          <div class=\"dest-name\">Bulgari Tokyo</div>\r\n                          <div class=\"dest-place\">Restaurant</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"post-dest-card\">\r\n                      <div class=\"post-dest-card-inner\">\r\n                        <div class=\"dest-image\">\r\n                          <img src=\"http://placehold.it/68x68\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"dest-info\">\r\n                          <div class=\"dest-name\">Bulgari Tokyo</div>\r\n                          <div class=\"dest-place\">Restaurant</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"post-dest-card\">\r\n                      <div class=\"post-dest-card-inner\">\r\n                        <div class=\"dest-image\">\r\n                          <img src=\"http://placehold.it/68x68\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"dest-info\">\r\n                          <div class=\"dest-name\">Bulgari Tokyo</div>\r\n                          <div class=\"dest-place\">Restaurant</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-footer-info\">\r\n              <div class=\"post-foot-block post-reaction\">\r\n                <img src=\"./assets/image/reaction-icon-smile-only.png\" alt=\"smile\">\r\n                <span><b>6</b> Reactions</span>\r\n              </div>\r\n              <div class=\"post-foot-block\">\r\n                <i class=\"trav-comment-icon\"></i>\r\n                <ul class=\"foot-avatar-list\">\r\n                  <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                </ul>\r\n                <span>20 Comments</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap\">\r\n                  <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">Stephen Senevirathne</a>\r\n                  </div>\r\n                  <div class=\"post-info\">\r\n                    Started following <a href=\"#\" class=\"link-place\"><img src=\"./assets/image/icon-small-flag.png\" alt=\"flag\"> United States of America</a> today at 5:29pm\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-image-container post-follow-container\">\r\n              <ul class=\"post-image-list\">\r\n                <li>\r\n                  <img src=\"http://placehold.it/595x210\" alt=\"\">\r\n                </li>\r\n              </ul>\r\n              <div class=\"post-follow-block\">\r\n                <div class=\"follow-txt-wrap\">\r\n                  <div class=\"follow-flag-wrap\">\r\n                    <img src=\"http://placehold.it/80x60?text=flag\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"follow-txt\">\r\n                    <p class=\"follow-name\">United States of America</p>\r\n                    <div class=\"follow-foot-info\">\r\n                      <ul class=\"foot-avatar-list\">\r\n                        <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                          --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                          --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                      </ul>\r\n                      <i class=\"trav-talk-icon icon-grey-comment\"></i>\r\n                      <span>64K Talking about this</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"follow-btn-wrap\">\r\n                  <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">\r\n                    Follow\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-footer-info\">\r\n              <div class=\"post-foot-block post-reaction\">\r\n                <img src=\"./assets/image/reaction-icon-smile-only.png\" alt=\"smile\">\r\n                <span><b>6</b> Reactions</span>\r\n              </div>\r\n              <div class=\"post-foot-block\">\r\n                <i class=\"trav-comment-icon\"></i>\r\n                <ul class=\"foot-avatar-list\">\r\n                  <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                </ul>\r\n                <span>20 Comments</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap\">\r\n                  <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">Stephen Bugno</a>\r\n                  </div>\r\n                  <div class=\"post-info\">\r\n                    Planning a\r\n                    <a href=\"#\" class=\"link-place\">Trip Plan</a> to\r\n                    <a href=\"#\" class=\"link-place\">16 Destinations</a> in\r\n                    <a href=\"#\" class=\"link-place\">Japan</a>\r\n                    on 1 Sep 2017\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-image-container post-follow-container\">\r\n              <div class=\"post-follow-slider\" id=\"postFollowSlider\">\r\n                <div class=\"post-image-inner\">\r\n                  <div class=\"post-map-wrap\">\r\n                    <img src=\"http://placehold.it/595x400\" alt=\"map\">\r\n                  </div>\r\n                  <div class=\"post-destination-block slide-dest-hide-right-margin\">\r\n                    <div class=\"post-dest-slider\" id=\"postDestSliderInner1\">\r\n                      <div class=\"post-dest-card\">\r\n                        <div class=\"post-dest-card-inner\">\r\n                          <div class=\"dest-image\">\r\n                            <img src=\"http://placehold.it/68x68\" alt=\"\">\r\n                          </div>\r\n                          <div class=\"dest-info\">\r\n                            <div class=\"dest-name\">Okayama</div>\r\n                            <div class=\"dest-count\">6 Destinations</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"post-dest-card\">\r\n                        <div class=\"post-dest-card-inner\">\r\n                          <div class=\"dest-image\">\r\n                            <img src=\"http://placehold.it/68x68\" alt=\"\">\r\n                          </div>\r\n                          <div class=\"dest-info\">\r\n                            <div class=\"dest-name\">Tokyo</div>\r\n                            <div class=\"dest-count\">7 Destinations</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"post-dest-card\">\r\n                        <div class=\"post-dest-card-inner\">\r\n                          <div class=\"dest-image\">\r\n                            <img src=\"http://placehold.it/68x68\" alt=\"\">\r\n                          </div>\r\n                          <div class=\"dest-info\">\r\n                            <div class=\"dest-name\">Miyagi</div>\r\n                            <div class=\"dest-count\">3 Destinations</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"post-image-inner\">\r\n                  <div class=\"post-map-wrap\">\r\n                    <img src=\"http://placehold.it/595x400\" alt=\"map\">\r\n                    <div class=\"post-map-info-caption map-blue\">\r\n                      <div class=\"map-avatar\">\r\n                        <img src=\"http://placehold.it/25x25\" alt=\"ava\">\r\n                      </div>\r\n                      <div class=\"map-label-txt\">\r\n                        Checking on <b>2 Sep</b> at <b>8:30 am</b> and will stay <b>30 min</b>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"post-destination-block slide-dest-hide-right-margin\">\r\n                    <div class=\"post-dest-slider\" id=\"postDestSliderInner2\">\r\n                      <div class=\"post-dest-card\">\r\n                        <div class=\"post-dest-card-inner\">\r\n                          <div class=\"dest-image\">\r\n                            <img src=\"http://placehold.it/68x68\" alt=\"\">\r\n                          </div>\r\n                          <div class=\"dest-info\">\r\n                            <div class=\"dest-name\">Bulgari Tokyo</div>\r\n                            <div class=\"dest-place\">Restaurant</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"post-dest-card\">\r\n                        <div class=\"post-dest-card-inner\">\r\n                          <div class=\"dest-image\">\r\n                            <img src=\"http://placehold.it/68x68\" alt=\"\">\r\n                          </div>\r\n                          <div class=\"dest-info\">\r\n                            <div class=\"dest-name\">Bulgari Tokyo</div>\r\n                            <div class=\"dest-place\">Restaurant</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"post-dest-card\">\r\n                        <div class=\"post-dest-card-inner\">\r\n                          <div class=\"dest-image\">\r\n                            <img src=\"http://placehold.it/68x68\" alt=\"\">\r\n                          </div>\r\n                          <div class=\"dest-info\">\r\n                            <div class=\"dest-name\">Bulgari Tokyo</div>\r\n                            <div class=\"dest-place\">Restaurant</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"post-image-inner\">\r\n                  <div class=\"post-map-wrap\">\r\n                    <img src=\"http://placehold.it/595x400\" alt=\"map\">\r\n                  </div>\r\n                  <div class=\"post-destination-block slide-dest-hide-right-margin\">\r\n                    <div class=\"post-dest-slider\" id=\"postDestSliderInner3\">\r\n                      <div class=\"post-dest-card\">\r\n                        <div class=\"post-dest-card-inner\">\r\n                          <div class=\"dest-image\">\r\n                            <img src=\"http://placehold.it/68x68?text=flag\" alt=\"\">\r\n                          </div>\r\n                          <div class=\"dest-info\">\r\n                            <div class=\"dest-name\">Morocco</div>\r\n                            <div class=\"dest-count\">1 Destination</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"post-dest-card\">\r\n                        <div class=\"post-dest-card-inner\">\r\n                          <div class=\"dest-image\">\r\n                            <img src=\"http://placehold.it/68x68?text=flag\" alt=\"\">\r\n                          </div>\r\n                          <div class=\"dest-info\">\r\n                            <div class=\"dest-name\">United Arab Emirate</div>\r\n                            <div class=\"dest-count\">2 Destinations</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"post-dest-card\">\r\n                        <div class=\"post-dest-card-inner\">\r\n                          <div class=\"dest-image\">\r\n                            <img src=\"http://placehold.it/68x68?text=flag\" alt=\"\">\r\n                          </div>\r\n                          <div class=\"dest-info\">\r\n                            <div class=\"dest-name\">Japan</div>\r\n                            <div class=\"dest-count\">10 Destinations</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-footer-info\">\r\n              <div class=\"post-foot-block post-reaction\">\r\n                <img src=\"./assets/image/reaction-icon-smile-only.png\" alt=\"smile\">\r\n                <span><b>6</b> Reactions</span>\r\n              </div>\r\n              <div class=\"post-foot-block\">\r\n                <i class=\"trav-comment-icon\"></i>\r\n                <ul class=\"foot-avatar-list\">\r\n                  <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                </ul>\r\n                <span>20 Comments</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap\">\r\n                  <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">Mariel</a>\r\n                  </div>\r\n                  <div class=\"post-info\">\r\n                    Started following <a href=\"#\" class=\"link-place\"><i class=\"trav-set-location-icon\"></i> Los Angeles</a> today at 5:29pm\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-image-container post-follow-container\">\r\n              <ul class=\"post-image-list\">\r\n                <li>\r\n                  <img src=\"http://placehold.it/595x210\" alt=\"\">\r\n                  <div class=\"post-image-title\">\r\n                    Los Angeles <img src=\"http://placehold.it/28x16/666?text=flag\" alt=\"flag\">\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n              <div class=\"post-follow-block\">\r\n                <div class=\"follow-txt-wrap\">\r\n                  <div class=\"follow-txt\">\r\n                    <p class=\"follow-place-info\">City in <a href=\"#\">United States of America</a></p>\r\n                    <div class=\"follow-foot-info\">\r\n                      <ul class=\"foot-avatar-list\">\r\n                        <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                          --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                          --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                      </ul>\r\n                      <i class=\"trav-talk-icon icon-grey-comment\"></i>\r\n                      <span>64K Talking about this</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"follow-btn-wrap\">\r\n                  <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">\r\n                    Follow\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-footer-info\">\r\n              <div class=\"post-foot-block post-reaction\">\r\n                <img src=\"./assets/image/reaction-icon-smile-only.png\" alt=\"smile\">\r\n                <span><b>6</b> Reactions</span>\r\n              </div>\r\n              <div class=\"post-foot-block\">\r\n                <i class=\"trav-comment-icon\"></i>\r\n                <ul class=\"foot-avatar-list\">\r\n                  <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                </ul>\r\n                <span>20 Comments</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap\">\r\n                  <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">Cheryl cornett</a>\r\n                  </div>\r\n                  <div class=\"post-info\">\r\n                    Started following <a href=\"#\" class=\"link-place\"><i class=\"trav-set-location-icon\"></i> Disneyland</a> today at 5:29pm\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-image-container post-follow-container\">\r\n              <ul class=\"post-image-list\">\r\n                <li>\r\n                  <img src=\"http://placehold.it/595x210\" alt=\"\">\r\n                </li>\r\n              </ul>\r\n              <div class=\"post-follow-block\">\r\n                <div class=\"follow-txt-wrap\">\r\n                  <div class=\"follow-txt\">\r\n                    <p class=\"follow-place-name\">Disneyland</p>\r\n                    <p class=\"follow-place-info\">Park in <a href=\"#\">California, United States of America</a></p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"follow-btn-wrap\">\r\n                  <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">\r\n                    Follow\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"follow-main-content\">\r\n                <p>Disneyland Park, originally Disneyland, is the first of two theme parks built at the Disneyland Resort in Anaheim, California, opened... <a href=\"#\">More</a></p>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-footer-info\">\r\n              <div class=\"post-foot-block post-reaction\">\r\n                <img src=\"./assets/image/reaction-icon-smile-only.png\" alt=\"smile\">\r\n                <span><b>6</b> Reactions</span>\r\n              </div>\r\n              <div class=\"post-foot-block\">\r\n                <i class=\"trav-comment-icon\"></i>\r\n                <ul class=\"foot-avatar-list\">\r\n                  <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                </ul>\r\n                <span>20 Comments</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-top-bordered\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name profile-name\">\r\n                    Today\r\n                    <a class=\"post-name-link\" href=\"#\">Mariel</a>\r\n                    started following these cities\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-content-inner\">\r\n              <div class=\"post-same-block-inner\">\r\n                <div class=\"post-top-info-layer\">\r\n                  <div class=\"post-top-info-wrap\">\r\n                    <div class=\"post-top-avatar-wrap\">\r\n                      <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"post-top-info-txt\">\r\n                      <div class=\"post-top-name\">\r\n                        <a class=\"post-name-link\" href=\"#\">Mariel</a>\r\n                      </div>\r\n                      <div class=\"post-info\">\r\n                        Started following <i class=\"trav-set-location-icon\"></i>\r\n                        <a href=\"#\" class=\"link-place\">Los Angeles</a>\r\n                        today at 5:29 pm\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"post-top-info-action\">\r\n                    <a href=\"#\" class=\"slide-link slide-prev\"><i class=\"trav-angle-left\"></i></a>\r\n                    <a href=\"#\" class=\"slide-link slide-next\"><i class=\"trav-angle-right\"></i></a>\r\n                  </div>\r\n                </div>\r\n                <div class=\"post-slide-wrap slide-hide-right-margin\">\r\n                  <ul id=\"placeInfoPostCard\" class=\"post-slider\">\r\n                    <li class=\"post-place-info-card\">\r\n                      <div class=\"post-card-inner\">\r\n                        <div class=\"image-wrap\">\r\n                          <img src=\"http://placehold.it/400x210\" alt=\"\">\r\n                          <div class=\"post-place-image-info\">\r\n                            <div class=\"place-flag-image\">\r\n                              <img class=\"flag-image\" src=\"http://placehold.it/105x53/e70c24?text=flag\" alt=\"flag\">\r\n                            </div>\r\n                            <div class=\"follow-btn-wrap\">\r\n                              <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"post-slider-caption\">\r\n                          <p class=\"post-place-name\" href=\"#\">Los Angeles</p>\r\n                          <p class=\"post-card-placement\">\r\n                            City in <a href=\"#\">United States of America</a>\r\n                          </p>\r\n                          <ul class=\"post-footer-info-list\">\r\n                            <li>\r\n                              <p class=\"info-count\">26.581</p>\r\n                              <p class=\"info-label\">Followers</p>\r\n                            </li>\r\n                            <li>\r\n                              <p class=\"info-count\">34</p>\r\n                              <p class=\"info-label\">Trip Plans</p>\r\n                            </li>\r\n                            <li>\r\n                              <p class=\"info-count\">#7</p>\r\n                              <p class=\"info-label\">Ranking</p>\r\n                            </li>\r\n                          </ul>\r\n                        </div>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"post-place-info-card\">\r\n                      <div class=\"post-card-inner\">\r\n                        <div class=\"image-wrap\">\r\n                          <img src=\"http://placehold.it/400x210\" alt=\"\">\r\n                          <div class=\"post-place-image-info\">\r\n                            <div class=\"place-flag-image\">\r\n                              <img class=\"flag-image\" src=\"http://placehold.it/105x53/e70c24?text=flag\" alt=\"flag\">\r\n                            </div>\r\n                            <div class=\"follow-btn-wrap\">\r\n                              <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"post-slider-caption\">\r\n                          <p class=\"post-place-name\" href=\"#\">Vancouver</p>\r\n                          <p class=\"post-card-placement\">\r\n                            City in <a href=\"#\">British Columbia, Canada</a>\r\n                          </p>\r\n                          <ul class=\"post-footer-info-list\">\r\n                            <li>\r\n                              <p class=\"info-count\">34.581</p>\r\n                              <p class=\"info-label\">Followers</p>\r\n                            </li>\r\n                            <li>\r\n                              <p class=\"info-count\">82</p>\r\n                              <p class=\"info-label\">Trip Plans</p>\r\n                            </li>\r\n                            <li>\r\n                              <p class=\"info-count\">#7</p>\r\n                              <p class=\"info-label\">Ranking</p>\r\n                            </li>\r\n                          </ul>\r\n                        </div>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-footer-info\">\r\n                <div class=\"post-foot-block post-reaction\">\r\n                  <img src=\"./assets/image/reaction-icon-smile-only.png\" alt=\"smile\">\r\n                  <span><b>6</b> Reactions</span>\r\n                </div>\r\n                <div class=\"post-foot-block\">\r\n                  <i class=\"trav-comment-icon\"></i>\r\n                  <ul class=\"foot-avatar-list\">\r\n                    <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                      --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                      --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                  </ul>\r\n                  <span>20 Comments</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-top-bordered\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap post-marked-avatar\">\r\n                  <img src=\"http://placehold.it/20x20\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name profile-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">Tom</a>\r\n                    added a comment about\r\n                    <a href=\"#\" class=\"post-name-link\">Sockets & Plugs</a>\r\n                    in\r\n                    <a href=\"#\" class=\"post-name-link\">United States of America</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-content-inner\">\r\n              <div class=\"post-image-container post-follow-container\">\r\n                <ul class=\"post-image-list\">\r\n                  <li>\r\n                    <img src=\"http://placehold.it/595x210\" alt=\"\">\r\n                    <div class=\"post-image-mark-icon\">\r\n                      <i class=\"trav-socket-plugin-icon\"></i>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n                <div class=\"post-follow-block\">\r\n                  <div class=\"follow-txt-wrap\">\r\n                    <div class=\"follow-flag-wrap\">\r\n                      <img src=\"http://placehold.it/80x60?text=flag\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"follow-txt\">\r\n                      <p class=\"follow-name\">United States of America</p>\r\n                      <div class=\"follow-foot-info\">\r\n                        <ul class=\"foot-avatar-list\">\r\n                          <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                        </ul>\r\n                        <span>437 Comments</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"follow-btn-wrap\">\r\n                    <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">\r\n                      Join the discussion\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"follow-comment-wrap\">\r\n                  <div class=\"post-comment-wrapper\">\r\n                    <div class=\"post-comment-row\">\r\n                      <div class=\"post-com-avatar-wrap\">\r\n                        <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-comment-text\">\r\n                        <div class=\"post-com-name-layer\">\r\n                          <a href=\"#\" class=\"comment-name\">Tom</a>\r\n                          <a href=\"#\" class=\"comment-nickname\">@tom2011</a>\r\n                        </div>\r\n                        <div class=\"comment-txt\">\r\n                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\r\n                        </div>\r\n                        <div class=\"comment-bottom-info\">\r\n                          <div class=\"com-reaction\">\r\n                            <img src=\"./assets/image/icon-smile.png\" alt=\"\">\r\n                            <span>21</span>\r\n                          </div>\r\n                          <div class=\"com-time\">6 hours ago</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-top-bordered\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap post-marked-avatar\">\r\n                  <img src=\"http://placehold.it/20x20\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name profile-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">Tom</a>\r\n                    added a comment about\r\n                    <a href=\"#\" class=\"post-name-link\">Weather</a>\r\n                    in\r\n                    <a href=\"#\" class=\"post-name-link\">New York City</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-content-inner\">\r\n              <div class=\"post-image-container post-follow-container\">\r\n                <ul class=\"post-image-list\">\r\n                  <li>\r\n                    <img src=\"http://placehold.it/595x210\" alt=\"\">\r\n                    <div class=\"post-image-title\">\r\n                      New York City\r\n                    </div>\r\n                    <div class=\"post-image-mark-icon\">\r\n                      <i class=\"trav-weather-icon\"></i>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n                <div class=\"post-follow-block\">\r\n                  <div class=\"follow-txt-wrap\">\r\n                    <div class=\"follow-txt\">\r\n                      <p class=\"follow-place-info\">City in <a href=\"#\">United States of America</a></p>\r\n                      <div class=\"follow-foot-info\">\r\n                        <ul class=\"foot-avatar-list\">\r\n                          <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                        </ul>\r\n                        <i class=\"trav-talk-icon icon-grey-comment\"></i>\r\n                        <span>60 Comments</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"follow-btn-wrap\">\r\n                    <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">\r\n                      Join the discussion\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"follow-comment-wrap\">\r\n                  <div class=\"post-comment-wrapper\">\r\n                    <div class=\"post-comment-row\">\r\n                      <div class=\"post-com-avatar-wrap\">\r\n                        <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-comment-text\">\r\n                        <div class=\"post-com-name-layer\">\r\n                          <a href=\"#\" class=\"comment-name\">Tom</a>\r\n                          <a href=\"#\" class=\"comment-nickname\">@tom2011</a>\r\n                        </div>\r\n                        <div class=\"comment-txt\">\r\n                          <p>It's a nice weather here</p>\r\n                        </div>\r\n                        <div class=\"comment-bottom-info\">\r\n                          <div class=\"com-reaction\">\r\n                            <img src=\"./assets/image/icon-smile.png\" alt=\"\">\r\n                            <span>21</span>\r\n                          </div>\r\n                          <div class=\"com-time\">6 hours ago</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-top-bordered\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap post-marked-avatar\">\r\n                  <img src=\"http://placehold.it/20x20\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name profile-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">Clara Newkirk</a>\r\n                    added a comment about\r\n                    <a href=\"#\" class=\"post-name-link\">National Holidays</a>\r\n                    in\r\n                    <a href=\"#\" class=\"post-name-link\">Japan</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-content-inner\">\r\n              <div class=\"post-image-container post-follow-container\">\r\n                <ul class=\"post-image-list\">\r\n                  <li>\r\n                    <img src=\"http://placehold.it/595x210\" alt=\"\">\r\n                    <div class=\"post-image-mark-icon\">\r\n                      <i class=\"trav-national-holiday-icon\"></i>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n                <div class=\"post-follow-block\">\r\n                  <div class=\"follow-txt-wrap\">\r\n                    <div class=\"follow-flag-wrap\">\r\n                      <img src=\"http://placehold.it/80x60?text=flag\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"follow-txt\">\r\n                      <p class=\"follow-name\">Japan</p>\r\n                      <div class=\"follow-foot-info\">\r\n                        <ul class=\"foot-avatar-list\">\r\n                          <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                        </ul>\r\n                        <span>437 Comments</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"follow-btn-wrap\">\r\n                    <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">\r\n                      Join the discussion\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"follow-comment-wrap\">\r\n                  <div class=\"post-comment-wrapper\">\r\n                    <div class=\"post-comment-row\">\r\n                      <div class=\"post-com-avatar-wrap\">\r\n                        <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-comment-text\">\r\n                        <div class=\"post-com-name-layer\">\r\n                          <a href=\"#\" class=\"comment-name\">Clara Newkirk</a>\r\n                          <a href=\"#\" class=\"comment-nickname\">@claraN</a>\r\n                        </div>\r\n                        <div class=\"comment-txt\">\r\n                          <p>Cras ut diam non nisi sollicitudin viverra sit amet efficitur odio\r\n                            rellentesque id imperdiet mi.</p>\r\n                        </div>\r\n                        <div class=\"comment-bottom-info\">\r\n                          <div class=\"com-reaction\">\r\n                            <img src=\"./assets/image/icon-smile.png\" alt=\"\">\r\n                            <span>21</span>\r\n                          </div>\r\n                          <div class=\"com-time\">6 hours ago</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-top-bordered\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap post-marked-avatar\">\r\n                  <img src=\"http://placehold.it/20x20\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name profile-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">Tom</a>\r\n                    added a comment about\r\n                    <a href=\"#\" class=\"post-name-link\">Emergency Numbers</a>\r\n                    in\r\n                    <a href=\"#\" class=\"post-name-link\">New York City</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-content-inner\">\r\n              <div class=\"post-image-container post-follow-container\">\r\n                <ul class=\"post-image-list\">\r\n                  <li>\r\n                    <img src=\"http://placehold.it/595x210\" alt=\"\">\r\n                    <div class=\"post-image-mark-icon\">\r\n                      <i class=\"trav-emergency-number-icon\"></i>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n                <div class=\"post-follow-block\">\r\n                  <div class=\"follow-txt-wrap\">\r\n                    <div class=\"follow-flag-wrap\">\r\n                      <img src=\"http://placehold.it/80x60?text=flag\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"follow-txt\">\r\n                      <p class=\"follow-name\">New York City</p>\r\n                      <div class=\"follow-foot-info\">\r\n                        <ul class=\"foot-avatar-list\">\r\n                          <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                        </ul>\r\n                        <span>437 Comments</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"follow-btn-wrap\">\r\n                    <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">\r\n                      Join the discussion\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"follow-comment-wrap\">\r\n                  <div class=\"post-comment-wrapper\">\r\n                    <div class=\"post-comment-row\">\r\n                      <div class=\"post-com-avatar-wrap\">\r\n                        <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-comment-text\">\r\n                        <div class=\"post-com-name-layer\">\r\n                          <a href=\"#\" class=\"comment-name\">Tom</a>\r\n                          <a href=\"#\" class=\"comment-nickname\">@tom2011</a>\r\n                        </div>\r\n                        <div class=\"comment-txt\">\r\n                          <p>It's a nice weather here</p>\r\n                        </div>\r\n                        <div class=\"comment-bottom-info\">\r\n                          <div class=\"com-reaction\">\r\n                            <img src=\"./assets/image/icon-smile.png\" alt=\"\">\r\n                            <span>21</span>\r\n                          </div>\r\n                          <div class=\"com-time\">6 hours ago</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-top-bordered\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap post-marked-avatar\">\r\n                  <img src=\"http://placehold.it/20x20\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name profile-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">James Hamilton</a>\r\n                    added a comment about\r\n                    <a href=\"#\" class=\"post-name-link\">Visa Requirement</a>\r\n                    in\r\n                    <a href=\"#\" class=\"post-name-link\">Morocco</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-content-inner\">\r\n              <div class=\"post-image-container post-follow-container\">\r\n                <ul class=\"post-image-list\">\r\n                  <li>\r\n                    <img src=\"http://placehold.it/595x210\" alt=\"\">\r\n                    <div class=\"post-image-mark-icon\">\r\n                      <i class=\"trav-visa-requirement-icon\"></i>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n                <div class=\"post-follow-block\">\r\n                  <div class=\"follow-txt-wrap\">\r\n                    <div class=\"follow-flag-wrap\">\r\n                      <img src=\"http://placehold.it/80x60?text=flag\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"follow-txt\">\r\n                      <p class=\"follow-name\">Morocco</p>\r\n                      <div class=\"follow-foot-info\">\r\n                        <ul class=\"foot-avatar-list\">\r\n                          <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                        </ul>\r\n                        <span>437 Comments</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"follow-btn-wrap\">\r\n                    <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">\r\n                      Join the discussion\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"follow-comment-wrap\">\r\n                  <div class=\"post-comment-wrapper\">\r\n                    <div class=\"post-comment-row\">\r\n                      <div class=\"post-com-avatar-wrap\">\r\n                        <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-comment-text\">\r\n                        <div class=\"post-com-name-layer\">\r\n                          <a href=\"#\" class=\"comment-name\">James Hamilton</a>\r\n                          <a href=\"#\" class=\"comment-nickname\">@jamesH</a>\r\n                        </div>\r\n                        <div class=\"comment-txt\">\r\n                          <p>How easy it is to get a visa for morocco?</p>\r\n                        </div>\r\n                        <div class=\"comment-bottom-info\">\r\n                          <div class=\"com-reaction\">\r\n                            <img src=\"./assets/image/icon-smile.png\" alt=\"\">\r\n                            <span>21</span>\r\n                          </div>\r\n                          <div class=\"com-time\">6 hours ago</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-top-bordered\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap post-marked-avatar\">\r\n                  <img src=\"http://placehold.it/20x20\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name profile-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">Clara Newkirk</a>\r\n                    added a comment about\r\n                    <a href=\"#\" class=\"post-name-link\">Average Flights Prices</a>\r\n                    in\r\n                    <a href=\"#\" class=\"post-name-link\">Japan</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-content-inner\">\r\n              <div class=\"post-image-container post-follow-container\">\r\n                <ul class=\"post-image-list\">\r\n                  <li>\r\n                    <img src=\"http://placehold.it/595x210\" alt=\"\">\r\n                    <div class=\"post-image-mark-icon\">\r\n                      <i class=\"trav-average-flight-price-icon\"></i>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n                <div class=\"post-follow-block\">\r\n                  <div class=\"follow-txt-wrap\">\r\n                    <div class=\"follow-flag-wrap\">\r\n                      <img src=\"http://placehold.it/80x60?text=flag\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"follow-txt\">\r\n                      <p class=\"follow-name\">Japan</p>\r\n                      <div class=\"follow-foot-info\">\r\n                        <ul class=\"foot-avatar-list\">\r\n                          <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                        </ul>\r\n                        <span>437 Comments</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"follow-btn-wrap\">\r\n                    <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">\r\n                      Join the discussion\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"follow-comment-wrap\">\r\n                  <div class=\"post-comment-wrapper\">\r\n                    <div class=\"post-comment-row\">\r\n                      <div class=\"post-com-avatar-wrap\">\r\n                        <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-comment-text\">\r\n                        <div class=\"post-com-name-layer\">\r\n                          <a href=\"#\" class=\"comment-name\">Clara Newkirk</a>\r\n                          <a href=\"#\" class=\"comment-nickname\">@claraN</a>\r\n                        </div>\r\n                        <div class=\"comment-txt\">\r\n                          <p>Cras ut diam non nisi sollicitudin viverra sit amet efficitur odio rellentesque id imperdiet mi.</p>\r\n                        </div>\r\n                        <div class=\"comment-bottom-info\">\r\n                          <div class=\"com-reaction\">\r\n                            <img src=\"./assets/image/icon-smile.png\" alt=\"\">\r\n                            <span>21</span>\r\n                          </div>\r\n                          <div class=\"com-time\">6 hours ago</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-top-bordered\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap post-marked-avatar\">\r\n                  <img src=\"http://placehold.it/20x20\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name profile-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">Tom</a>\r\n                    added a comment about\r\n                    <a href=\"#\" class=\"post-name-link\">Safety</a>\r\n                    in\r\n                    <a href=\"#\" class=\"post-name-link\">United States of America</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-content-inner\">\r\n              <div class=\"post-image-container post-follow-container\">\r\n                <ul class=\"post-image-list\">\r\n                  <li>\r\n                    <img src=\"http://placehold.it/595x210\" alt=\"\">\r\n                    <div class=\"post-image-mark-icon\">\r\n                      <i class=\"trav-safety-icon\"></i>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n                <div class=\"post-follow-block\">\r\n                  <div class=\"follow-txt-wrap\">\r\n                    <div class=\"follow-flag-wrap\">\r\n                      <img src=\"http://placehold.it/80x60?text=flag\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"follow-txt\">\r\n                      <p class=\"follow-name\">United States of America</p>\r\n                      <div class=\"follow-foot-info\">\r\n                        <ul class=\"foot-avatar-list\">\r\n                          <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                        </ul>\r\n                        <span>437 Comments</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"follow-btn-wrap\">\r\n                    <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">\r\n                      Join the discussion\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"follow-comment-wrap\">\r\n                  <div class=\"post-comment-wrapper\">\r\n                    <div class=\"post-comment-row\">\r\n                      <div class=\"post-com-avatar-wrap\">\r\n                        <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-comment-text\">\r\n                        <div class=\"post-com-name-layer\">\r\n                          <a href=\"#\" class=\"comment-name\">Tom</a>\r\n                          <a href=\"#\" class=\"comment-nickname\">@tom2011</a>\r\n                        </div>\r\n                        <div class=\"comment-txt\">\r\n                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\r\n                        </div>\r\n                        <div class=\"comment-bottom-info\">\r\n                          <div class=\"com-reaction\">\r\n                            <img src=\"./assets/image/icon-smile.png\" alt=\"\">\r\n                            <span>21</span>\r\n                          </div>\r\n                          <div class=\"com-time\">6 hours ago</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-top-bordered\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap post-marked-avatar\">\r\n                  <img src=\"http://placehold.it/20x20\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name profile-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">James Hamilton</a>\r\n                    added a comment about\r\n                    <a href=\"#\" class=\"post-name-link\">Morocco</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-content-inner\">\r\n              <div class=\"post-image-container post-follow-container\">\r\n                <ul class=\"post-image-list\">\r\n                  <li>\r\n                    <img src=\"http://placehold.it/595x210\" alt=\"\">\r\n                    <div class=\"post-image-mark-icon\">\r\n                      <i class=\"trav-about-city-icon\"></i>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n                <div class=\"post-follow-block\">\r\n                  <div class=\"follow-txt-wrap\">\r\n                    <div class=\"follow-flag-wrap\">\r\n                      <img src=\"http://placehold.it/80x60?text=flag\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"follow-txt\">\r\n                      <p class=\"follow-name\">Morocco</p>\r\n                      <div class=\"follow-foot-info\">\r\n                        <ul class=\"foot-avatar-list\">\r\n                          <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                        </ul>\r\n                        <span>437 Comments</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"follow-btn-wrap\">\r\n                    <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">\r\n                      Join the discussion\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"follow-comment-wrap\">\r\n                  <div class=\"post-comment-wrapper\">\r\n                    <div class=\"post-comment-row\">\r\n                      <div class=\"post-com-avatar-wrap\">\r\n                        <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-comment-text\">\r\n                        <div class=\"post-com-name-layer\">\r\n                          <a href=\"#\" class=\"comment-name\">James Hamilton</a>\r\n                          <a href=\"#\" class=\"comment-nickname\">@jamesH</a>\r\n                        </div>\r\n                        <div class=\"comment-txt\">\r\n                          <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos.</p>\r\n                        </div>\r\n                        <div class=\"comment-bottom-info\">\r\n                          <div class=\"com-reaction\">\r\n                            <img src=\"./assets/image/icon-smile.png\" alt=\"\">\r\n                            <span>21</span>\r\n                          </div>\r\n                          <div class=\"com-time\">6 hours ago</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-top-bordered\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap post-marked-avatar\">\r\n                  <img src=\"http://placehold.it/20x20\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name profile-name post-ellipsis\">\r\n                    <a class=\"post-name-link\" href=\"#\">Kenneth Burgess</a>\r\n                    added a comment about\r\n                    <a href=\"#\" class=\"post-name-link\">Public Event Quick Chek New Jersey test test test</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-content-inner\">\r\n              <div class=\"post-image-container post-follow-container\">\r\n                <ul class=\"post-image-list\">\r\n                  <li>\r\n                    <img src=\"http://placehold.it/595x210\" alt=\"\">\r\n                    <div class=\"post-image-mark-icon\">\r\n                      <i class=\"trav-public-event-icon\"></i>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n                <div class=\"post-follow-block\">\r\n                  <div class=\"follow-txt-wrap\">\r\n                    <div class=\"date-block\">\r\n                      <div class=\"follow-round\">\r\n                        <span class=\"month blue\">jul</span>\r\n                        <span class=\"count-day\">15</span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"follow-txt\">\r\n                      <p class=\"follow-name\">Public Event Quick Chek New Jersey</p>\r\n                      <div class=\"follow-foot-info\">\r\n                        <ul class=\"foot-avatar-list\">\r\n                          <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                        </ul>\r\n                        <span>437 Comments</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"follow-btn-wrap\">\r\n                    <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">\r\n                      Join the discussion\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"follow-comment-wrap\">\r\n                  <div class=\"post-comment-wrapper\">\r\n                    <div class=\"post-comment-row\">\r\n                      <div class=\"post-com-avatar-wrap\">\r\n                        <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-comment-text\">\r\n                        <div class=\"post-com-name-layer\">\r\n                          <a href=\"#\" class=\"comment-name\">Kenneth Burgess</a>\r\n                          <a href=\"#\" class=\"comment-nickname\">@kanneth</a>\r\n                        </div>\r\n                        <div class=\"comment-txt\">\r\n                          <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos.</p>\r\n                        </div>\r\n                        <div class=\"comment-bottom-info\">\r\n                          <div class=\"com-reaction\">\r\n                            <img src=\"./assets/image/icon-smile.png\" alt=\"\">\r\n                            <span>21</span>\r\n                          </div>\r\n                          <div class=\"com-time\">6 hours ago</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-side-top\">\r\n              <h3 class=\"side-ttl\">Videos you might like <span class=\"count\">20</span></h3>\r\n              <div class=\"side-right-control\">\r\n                <a href=\"#\" class=\"slide-link slide-prev\"><i class=\"trav-angle-left\"></i></a>\r\n                <a href=\"#\" class=\"slide-link slide-next\"><i class=\"trav-angle-right\"></i></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-side-inner\">\r\n              <div class=\"post-slide-wrap slide-hide-right-margin\">\r\n                <ul id=\"videoYouMightLikePostCard\" class=\"post-slider slide-same-height\">\r\n                  <li class=\"post-card post-video-card\">\r\n                    <div class=\"post-video-card-inner\">\r\n                      <div class=\"image-wrap\">\r\n                        <img src=\"http://placehold.it/230x130?text=video\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-slider-caption\">\r\n                        <p class=\"post-card-video-txt\">Tokyo Vacation Travel Guide | Expedia</p>\r\n                        <p class=\"post-card-posted\">\r\n                          Posted by\r\n                          <a href=\"#\" class=\"card-name-link\">Mike</a>\r\n                        </p>\r\n                        <div class=\"post-footer-info\">\r\n                          <div class=\"post-foot-block post-reaction\">\r\n                            <img src=\"./assets/image/reaction-icon-smile-only.png\" alt=\"smile\">\r\n                            <span><b>6</b> Reactions</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"post-card post-video-card\">\r\n                    <div class=\"post-video-card-inner\">\r\n                      <div class=\"image-wrap\">\r\n                        <img src=\"http://placehold.it/230x130?text=video\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-slider-caption\">\r\n                        <p class=\"post-card-video-txt\">1 year traveling around the world</p>\r\n                        <p class=\"post-card-posted\">\r\n                          Posted by\r\n                          <a href=\"#\" class=\"card-name-link\">Kenneth Burgess</a>\r\n                        </p>\r\n                        <div class=\"post-footer-info\">\r\n                          <div class=\"post-foot-block post-reaction\">\r\n                            <img src=\"./assets/image/icon-like.png\" alt=\"smile\">\r\n                            <span><b>2</b> Reactions</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"post-card post-video-card\">\r\n                    <div class=\"post-video-card-inner\">\r\n                      <div class=\"image-wrap\">\r\n                        <img src=\"http://placehold.it/230x130?text=video\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-slider-caption\">\r\n                        <p class=\"post-card-video-txt\">We Call This Home</p>\r\n                        <p class=\"post-card-posted\">\r\n                          Posted by\r\n                          <a href=\"#\" class=\"card-name-link\">Alix</a>\r\n                        </p>\r\n                        <div class=\"post-footer-info\">\r\n                          <div class=\"post-foot-block post-reaction\">\r\n                            <img src=\"./assets/image/reaction-icon-smile-only.png\" alt=\"smile\">\r\n                            <span><b>6</b> Reactions</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-top-bordered\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap post-marked-avatar\">\r\n                  <img src=\"http://placehold.it/20x20\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name profile-name post-ellipsis\">\r\n                    <a class=\"post-name-link\" href=\"#\">Betty Obrien</a>\r\n                    added a comment about\r\n                    <a href=\"#\" class=\"post-name-link\">Event Programm</a>\r\n                    on\r\n                    <a href=\"#\" class=\"post-name-link\">Cherry Blossom</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-content-inner\">\r\n              <div class=\"post-image-container post-follow-container\">\r\n                <ul class=\"post-image-list\">\r\n                  <li>\r\n                    <img src=\"http://placehold.it/595x210\" alt=\"\">\r\n                    <div class=\"post-image-mark-icon\">\r\n                      <i class=\"trav-event-program-icon\"></i>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n                <div class=\"post-follow-block\">\r\n                  <div class=\"follow-txt-wrap\">\r\n                    <div class=\"date-block\">\r\n                      <div class=\"follow-round\">\r\n                        <span class=\"month blue\">jul</span>\r\n                        <span class=\"count-day\">18</span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"follow-txt\">\r\n                      <p class=\"follow-name\">Cherry Blossom</p>\r\n                      <div class=\"follow-foot-info\">\r\n                        <ul class=\"foot-avatar-list\">\r\n                          <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                        </ul>\r\n                        <span>437 Comments</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"follow-btn-wrap\">\r\n                    <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">\r\n                      Join the discussion\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"follow-comment-wrap\">\r\n                  <div class=\"post-comment-wrapper\">\r\n                    <div class=\"post-comment-row\">\r\n                      <div class=\"post-com-avatar-wrap\">\r\n                        <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-comment-text\">\r\n                        <div class=\"post-com-name-layer\">\r\n                          <a href=\"#\" class=\"comment-name\">Betty Obrien</a>\r\n                          <a href=\"#\" class=\"comment-nickname\">@berryO</a>\r\n                        </div>\r\n                        <div class=\"comment-txt\">\r\n                          <p>Class aptent taciti sociosqu ad litora torquent per conubia.</p>\r\n                        </div>\r\n                        <div class=\"comment-bottom-info\">\r\n                          <div class=\"com-reaction\">\r\n                            <img src=\"./assets/image/icon-smile.png\" alt=\"\">\r\n                            <span>21</span>\r\n                          </div>\r\n                          <div class=\"com-time\">6 hours ago</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-side-top\">\r\n              <h3 class=\"side-ttl\"><i class=\"trav-trending-destination-icon\"></i> Trending activities\r\n                <span class=\"dropdown\">\r\n                    <a class=\"event-place\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">#United States</a> <i class=\"trav-caret-down\"></i>\r\n                    <div class=\"dropdown-menu dropdown-info-style post-profile-block location-block\">\r\n                      <div class=\"post-prof-image\">\r\n                        <!-- <img class=\"prof-cover\" src=\"http://www.midtownhotelnyc.com/resourcefiles/homeimages/hilton-garden-inn-new-york-manhattan-midtown-east-home1-top.jpg\" alt=\"photo\"> -->\r\n                      </div>\r\n                      <div class=\"post-prof-main\">\r\n                        <div class=\"flag-wrap\">\r\n                          <img src=\"http://placehold.it/153x53?text=flag\" alt=\"ava\">\r\n                        </div>\r\n                        <div class=\"post-person-info\">\r\n                          <div class=\"prof-name\">United States</div>\r\n                          <div class=\"prof-location\">Country in North America</div>\r\n                          <div class=\"prof-button-wrap\">\r\n                            <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n                          </div>\r\n                          <div class=\"prof-follow-count\">28K Followers</div>\r\n                        </div>\r\n                        <div class=\"drop-bottom-link\">\r\n                          <a href=\"#\" class=\"profile-link\">View profile</a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </span>\r\n              </h3>\r\n              <div class=\"side-right-control\">\r\n                <a href=\"#\" class=\"slide-link slide-prev\"><i class=\"trav-angle-left\"></i></a>\r\n                <a href=\"#\" class=\"slide-link slide-next\"><i class=\"trav-angle-right\"></i></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-side-inner\">\r\n              <div class=\"post-slide-wrap slide-hide-right-margin\">\r\n                <ul id=\"trendingActivity2\" class=\"post-slider\">\r\n                  <li>\r\n                    <img src=\"http://placehold.it/230x300\" alt=\"\">\r\n                    <div class=\"post-slider-caption transparent-caption\">\r\n                      <p class=\"post-slide-name\" href=\"#\">Super Bowl 2018</p>\r\n                      <div class=\"post-slide-description\">\r\n                        <span class=\"tag\">Event</span> in Minneapolis\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"http://placehold.it/230x300\" alt=\"\">\r\n                    <div class=\"post-slider-caption transparent-caption\">\r\n                      <p class=\"post-slide-name\" href=\"#\">2017-18 NBA Season</p>\r\n                      <div class=\"post-slide-description\">\r\n                        <span class=\"tag\">Event</span> in United States\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"http://placehold.it/230x300\" alt=\"\">\r\n                    <div class=\"post-slider-caption transparent-caption\">\r\n                      <p class=\"post-slide-name\" href=\"#\">Event name here</p>\r\n                      <div class=\"post-slide-description\">\r\n                        <span class=\"tag\">Event</span> in New York City\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-top-bordered\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap post-marked-avatar\">\r\n                  <img src=\"http://placehold.it/20x20\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name profile-name post-ellipsis\">\r\n                    <a class=\"post-name-link\" href=\"#\">Kenneth Burgess</a>\r\n                    added a comment about\r\n                    <a href=\"#\" class=\"post-name-link\">Disneyland</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-content-inner\">\r\n              <div class=\"post-image-container post-follow-container\">\r\n                <ul class=\"post-image-list\">\r\n                  <li>\r\n                    <img src=\"http://placehold.it/595x210\" alt=\"\">\r\n                    <div class=\"post-image-mark-icon\">\r\n                      <i class=\"trav-about-city-icon\"></i>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n                <div class=\"post-follow-block\">\r\n                  <div class=\"follow-txt-wrap\">\r\n                    <div class=\"date-block\">\r\n                      <div class=\"follow-round\">\r\n                        <i class=\"trav-map-marker-icon\"></i>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"follow-txt\">\r\n                      <p class=\"follow-name\">Disneyland</p>\r\n                      <div class=\"follow-foot-info\">\r\n                        <ul class=\"foot-avatar-list\">\r\n                          <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                        </ul>\r\n                        <span>437 Comments</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"follow-btn-wrap\">\r\n                    <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">\r\n                      Join the discussion\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"follow-comment-wrap\">\r\n                  <div class=\"post-comment-wrapper\">\r\n                    <div class=\"post-comment-row\">\r\n                      <div class=\"post-com-avatar-wrap\">\r\n                        <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-comment-text\">\r\n                        <div class=\"post-com-name-layer\">\r\n                          <a href=\"#\" class=\"comment-name\">Kenneth Burgess</a>\r\n                          <a href=\"#\" class=\"comment-nickname\">@kanneth</a>\r\n                        </div>\r\n                        <div class=\"comment-txt\">\r\n                          <p>Class aptent taciti sociosqu ad litora torquent per conubia.</p>\r\n                        </div>\r\n                        <div class=\"comment-bottom-info\">\r\n                          <div class=\"com-reaction\">\r\n                            <img src=\"./assets/image/icon-smile.png\" alt=\"\">\r\n                            <span>21</span>\r\n                          </div>\r\n                          <div class=\"com-time\">6 hours ago</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-side-top\">\r\n              <h3 class=\"side-ttl\">Discover new travelers</h3>\r\n              <div class=\"side-right-control\">\r\n                <a href=\"#\" class=\"slide-link slide-prev\"><i class=\"trav-angle-left\"></i></a>\r\n                <a href=\"#\" class=\"slide-link slide-next\"><i class=\"trav-angle-right\"></i></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-side-inner\">\r\n              <div class=\"post-slide-wrap\">\r\n                <ul id=\"newTravelerDiscover\" class=\"post-slider slide-same-height\">\r\n                  <li class=\"post-follow-card post-travel-card\">\r\n                    <div class=\"follow-card-inner\">\r\n                      <div class=\"image-wrap\">\r\n                        <img src=\"http://placehold.it/62x62\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-slider-caption\">\r\n                        <p class=\"post-card-name\">Bijay uprety</p>\r\n                        <p class=\"post-card-spec\">Traveler</p>\r\n                        <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n                        <p class=\"post-card-follow-count\">Followed by Nina Crespi and 22 more</p>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"post-follow-card post-travel-card\">\r\n                    <div class=\"follow-card-inner\">\r\n                      <div class=\"image-wrap\">\r\n                        <img src=\"http://placehold.it/62x62\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-slider-caption\">\r\n                        <p class=\"post-card-name\">Beatriz kim park</p>\r\n                        <p class=\"post-card-spec\">Traveler</p>\r\n                        <button type=\"button\" class=\"btn btn-light-primary btn-bordered\">Following</button>\r\n                        <p class=\"post-card-follow-count\">Followed by Martin</p>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"post-follow-card post-travel-card\">\r\n                    <div class=\"follow-card-inner\">\r\n                      <div class=\"image-wrap\">\r\n                        <img src=\"http://placehold.it/62x62\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-slider-caption\">\r\n                        <p class=\"post-card-name\">Kathleen brown</p>\r\n                        <p class=\"post-card-spec\">Write</p>\r\n                        <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n                        <p class=\"post-card-follow-count\">39 Followers</p>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"post-follow-card post-travel-card\">\r\n                    <div class=\"follow-card-inner\">\r\n                      <div class=\"image-wrap\">\r\n                        <img src=\"http://placehold.it/62x62\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-slider-caption\">\r\n                        <p class=\"post-card-name\">Alex ah</p>\r\n                        <p class=\"post-card-spec\">Photographer</p>\r\n                        <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n                        <p class=\"post-card-follow-count\">8K Followers</p>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"post-follow-card post-travel-card\">\r\n                    <div class=\"follow-card-inner\">\r\n                      <div class=\"image-wrap\">\r\n                        <img src=\"http://placehold.it/62x62\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-slider-caption\">\r\n                        <p class=\"post-card-name\">Louie olson</p>\r\n                        <p class=\"post-card-spec\">Photographer</p>\r\n                        <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n                        <p class=\"post-card-follow-count\">198K Followers</p>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-side-top\">\r\n              <h3 class=\"side-ttl\">Discover New destinations</h3>\r\n              <div class=\"side-right-control\">\r\n                <a href=\"#\" class=\"slide-link slide-prev\"><i class=\"trav-angle-left\"></i></a>\r\n                <a href=\"#\" class=\"slide-link slide-next\"><i class=\"trav-angle-right\"></i></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-side-inner\">\r\n              <div class=\"post-slide-wrap slide-hide-right-margin\">\r\n                <ul id=\"discoverNewDestination\" class=\"post-slider\">\r\n                  <li>\r\n                    <img src=\"http://placehold.it/230x300\" alt=\"\">\r\n                    <div class=\"post-slider-caption transparent-caption\">\r\n                      <p class=\"post-slide-name\" href=\"#\">Central park</p>\r\n                      <div class=\"post-slide-description\">\r\n                        <span class=\"tag\">Park</span> in New York City\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"http://placehold.it/230x300\" alt=\"\">\r\n                    <div class=\"post-slider-caption transparent-caption\">\r\n                      <p class=\"post-slide-name\" href=\"#\">Tokyo</p>\r\n                      <div class=\"post-slide-description\">\r\n                        <span class=\"tag\">City</span> in Japan\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <img src=\"http://placehold.it/230x300\" alt=\"\">\r\n                    <div class=\"post-slider-caption transparent-caption\">\r\n                      <p class=\"post-slide-name\" href=\"#\">Grand canyon national park</p>\r\n                      <div class=\"post-slide-description\">\r\n                        <span class=\"tag\">Park</span> in Arizona\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-side-top\">\r\n              <h3 class=\"side-ttl\">Upcoming event in <a class=\"event-place\" href=\"#\">New York City</a> <i class=\"trav-caret-down\"></i>\r\n              </h3>\r\n              <div class=\"side-right-control\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-side-inner\">\r\n              <div class=\"post-event-block\">\r\n                <div class=\"post-event-image\">\r\n                  <img class=\"event-cover\" src=\"https://www.runnersworld.com/sites/runnersworld.com/files/styles/article_main_custom_user_phone_1x/public/articles/2016/09/nyc_marathon.jpg?itok=mrgDghrv&timestamp=1473862824\" alt=\"photo\">\r\n                </div>\r\n                <div class=\"post-event-main\">\r\n                  <div class=\"logo-wrap\">\r\n                    <img src=\"./assets/image/upcoming-event-logo.png\" alt=\"ava\">\r\n                  </div>\r\n                  <div class=\"post-placement-info\">\r\n                    <a class=\"event-name\">New York City half marathon</a>\r\n                    <div class=\"event-info-layer\">\r\n                      <span class=\"date-event\">20 Mars 2018</span>\r\n                      <div class=\"event-foot-info\">\r\n                        <ul class=\"foot-avatar-list\">\r\n                          <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                            --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                        </ul>\r\n                      </div>\r\n                      <span class='talking'>20 Talking about this</span>\r\n                    </div>\r\n                    <div class=\"event-main-content\">\r\n                      <p>The New York City Half Marathon is an annual half marathon road running race. It passes through famous landmarks such as Central Park and... <a href=\"#\">More</a></p>\r\n                    </div>\r\n                  </div>\r\n                  <ul class=\"post-event-photo-list\">\r\n                    <li><img src=\"http://placehold.it/126x126\" alt=\"photo\"></li>\r\n                    <li><img src=\"http://placehold.it/126x126\" alt=\"photo\"></li>\r\n                    <li><img src=\"http://placehold.it/126x126\" alt=\"photo\"></li>\r\n                    <li><img src=\"http://placehold.it/126x126\" alt=\"photo\"></li>\r\n                  </ul>\r\n                </div>\r\n                <div class=\"event-bottom-link\">\r\n                  <a href=\"#\" class=\"event-link\">Visit event page</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap\">\r\n                  <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name\">\r\n                    <a class=\"post-name-link\" href=\"#\">Thomas Aranda</a>\r\n                  </div>\r\n                  <div class=\"post-info\">\r\n                    Shared a <a href=\"#\" class=\"link-place\">link</a> yesterday at 10:33pm\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-image-container post-follow-container\">\r\n              <ul class=\"post-image-list\">\r\n                <li>\r\n                  <img src=\"http://placehold.it/595x330?text=video\" alt=\"\">\r\n                </li>\r\n              </ul>\r\n              <div class=\"post-follow-block\">\r\n                <div class=\"follow-txt-wrap\">\r\n                  <div class=\"follow-txt\">\r\n                    <p class=\"follow-destination\">200 Days - A Trip Around the World Travel Film</p>\r\n                    <p class=\"follow-place-info\">My wife and I traveled to 17 countries in 200 days. This film is the sgs dfg sfgs fgsdf g</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"follow-btn-wrap\">\r\n                  <button type=\"button\" class=\"btn btn-light-grey btn-bordered btn-open-window\">\r\n                    <i class=\"trav-open-video-in-window\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-footer-info\">\r\n              <div class=\"post-foot-block post-reaction\">\r\n                <img src=\"./assets/image/reaction-icon-smile-only.png\" alt=\"smile\">\r\n                <span><b>6</b> Reactions</span>\r\n              </div>\r\n              <div class=\"post-foot-block\">\r\n                <i class=\"trav-comment-icon\"></i>\r\n                <ul class=\"foot-avatar-list\">\r\n                  <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                </ul>\r\n                <span>20 Comments</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"post-block post-top-bordered\">\r\n            <div class=\"post-top-info-layer\">\r\n              <div class=\"post-top-info-wrap\">\r\n                <div class=\"post-top-avatar-wrap post-marked-avatar\">\r\n                  <img src=\"http://placehold.it/20x20\" alt=\"\">\r\n                </div>\r\n                <div class=\"post-top-info-txt\">\r\n                  <div class=\"post-top-name profile-name post-ellipsis\">\r\n                    <a class=\"post-name-link\" href=\"#\">Tom</a>\r\n                    added a comment about a\r\n                    <a href=\"#\" class=\"post-name-link\">Photo</a>\r\n                    in\r\n                    <a href=\"#\" class=\"post-name-link\"><img src=\"./assets/image/icon-small-flag.png\" alt=\"flag\"> United States of America</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-top-info-action\">\r\n                <div class=\"dropdown\">\r\n                  <button class=\"btn btn-drop-round-grey btn-drop-transparent\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"trav-angle-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-share-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Share</b></p>\r\n                        <p>Spread the word</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-heart-icon\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Add to favorites</b></p>\r\n                        <p>Save it for later</p>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                        <span class=\"icon-wrap\">\r\n                          <i class=\"trav-flag-icon-o\"></i>\r\n                        </span>\r\n                      <div class=\"drop-txt\">\r\n                        <p><b>Report</b></p>\r\n                        <p>Help us understand</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"post-content-inner\">\r\n              <div class=\"post-image-container post-follow-container\">\r\n                <ul class=\"post-image-list\">\r\n                  <li>\r\n                    <img src=\"http://placehold.it/595x360\" alt=\"\">\r\n                  </li>\r\n                </ul>\r\n                <div class=\"post-footer-info post-footer-padded\">\r\n                  <div class=\"post-foot-block post-reaction\">\r\n                    <img src=\"./assets/image/reaction-icon-smile-only.png\" alt=\"smile\">\r\n                    <span><b>6</b> Reactions</span>\r\n                  </div>\r\n                  <div class=\"post-foot-block\">\r\n                    <i class=\"trav-comment-icon\"></i>\r\n                    <ul class=\"foot-avatar-list\">\r\n                      <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                        --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li><!--\r\n                        --><li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\r\n                    </ul>\r\n                    <span>20 Comments</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"follow-comment-wrap comment-on-photo\">\r\n                  <div class=\"post-comment-wrapper\">\r\n                    <div class=\"post-comment-row\">\r\n                      <div class=\"post-com-avatar-wrap\">\r\n                        <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"post-comment-text\">\r\n                        <div class=\"post-com-name-layer\">\r\n                          <a href=\"#\" class=\"comment-name\">Tom</a>\r\n                          <a href=\"#\" class=\"comment-nickname\">@tom2011</a>\r\n                        </div>\r\n                        <div class=\"comment-txt\">\r\n                          <p>Class aptent taciti sociosqu ad litora torquent per conubia.</p>\r\n                        </div>\r\n                        <div class=\"comment-bottom-info\">\r\n                          <div class=\"com-reaction\">\r\n                            <img src=\"./assets/image/icon-smile.png\" alt=\"\">\r\n                            <span>21</span>\r\n                          </div>\r\n                          <div class=\"com-time\">6 hours ago</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- <div class=\"post-follow-block\">\r\n                  </div> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <!-- SIDEBAR -->\r\n        <div class=\"sidebar-layer\" id=\"sidebarLayer\">\r\n          <aside class=\"sidebar\">\r\n\r\n            <div class=\"post-block post-side-tabs\">\r\n              <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#global\" role=\"tab\">Global</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#following\" role=\"tab\">Following</a>\r\n                </li>\r\n              </ul>\r\n\r\n              <div class=\"tab-content\">\r\n                <div class=\"tab-pane active\" id=\"global\" role=\"tabpanel\">\r\n                  <div class=\"side-tab-inner mCustomScrollbar\">\r\n                    <div class=\"side-pane-row\">\r\n                      <div class=\"side-pane-avatar-wrap\">\r\n                        <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"side-pane-txt\">\r\n                        <div class=\"side-pane-post-ttl\">\r\n                          <a class=\"in-side-link\" href=\"#\">Ilyas Zahir Hitima</a>\r\n                          shared a\r\n                          <a class=\"in-side-link link-thin\" href=\"#\">Trip Plan</a>\r\n                        </div>\r\n                        <div class=\"side-pane-date\">5 min ago</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"side-pane-row\">\r\n                      <div class=\"side-pane-avatar-wrap\">\r\n                        <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"side-pane-txt\">\r\n                        <div class=\"side-pane-post-ttl\">\r\n                          <a class=\"in-side-link\" href=\"#\">Zahir</a>\r\n                          is now following\r\n                          <a class=\"in-side-link link-thin\" href=\"#\">New York</a>\r\n                        </div>\r\n                        <div class=\"side-pane-date\">6 min ago</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"side-pane-row\">\r\n                      <div class=\"side-pane-avatar-wrap\">\r\n                        <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"side-pane-txt\">\r\n                        <div class=\"side-pane-post-ttl\">\r\n                          <a class=\"in-side-link\" href=\"#\">Mara Eahir</a>\r\n                          add a photo to\r\n                          <a class=\"in-side-link link-thin\" href=\"#\">Paris</a>\r\n                        </div>\r\n                        <div class=\"side-pane-date\">8 min ago</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"side-pane-row\">\r\n                      <div class=\"side-pane-avatar-wrap\">\r\n                        <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"side-pane-txt\">\r\n                        <div class=\"side-pane-post-ttl\">\r\n                          <a class=\"in-side-link\" href=\"#\">Ilyas Zahir</a>\r\n                          commented in\r\n                          <a class=\"in-side-link link-thin\" href=\"#\">United States</a>\r\n                        </div>\r\n                        <div class=\"side-pane-date\">12 min ago</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"side-pane-row\">\r\n                      <div class=\"side-pane-avatar-wrap\">\r\n                        <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"side-pane-txt\">\r\n                        <div class=\"side-pane-post-ttl\">\r\n                          <a class=\"in-side-link\" href=\"#\">Suzanne</a>\r\n                          is now following\r\n                          <a class=\"in-side-link link-thin\" href=\"#\">Oujda</a>\r\n                        </div>\r\n                        <div class=\"side-pane-date\">16 min ago</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"side-pane-row\">\r\n                      <div class=\"side-pane-avatar-wrap\">\r\n                        <img src=\"http://placehold.it/45x45\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"side-pane-txt\">\r\n                        <div class=\"side-pane-post-ttl\">\r\n                          <a class=\"in-side-link\" href=\"#\">Zahir</a>\r\n                          is now following\r\n                          <a class=\"in-side-link link-thin\" href=\"#\">New York</a>\r\n                        </div>\r\n                        <div class=\"side-pane-date\">6 min ago</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"tab-pane\" id=\"following\" role=\"tabpanel\">following tab</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"post-block post-side-block\">\r\n              <div class=\"post-side-top\">\r\n                <h3 class=\"side-ttl\">Popular destinations</h3>\r\n                <div class=\"side-right-control\">\r\n                  <a href=\"#\" class=\"see-more-link\">See more</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-side-inner\">\r\n                <div class=\"side-dest-block-wrap\">\r\n                  <div class=\"side-dest-block\" style=\"background-image:url(http://placehold.it/156x156)\">\r\n                    <div class=\"side-dest-ttl\">\r\n                      <h4>Eiffel tower</h4>\r\n                      <p>Paris, France</p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"side-dest-block\" style=\"background-image:url(http://placehold.it/156x156)\">\r\n                    <div class=\"side-dest-ttl\">\r\n                      <h4>Seine River</h4>\r\n                      <p>France</p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"side-dest-block\" style=\"background-image:url(http://placehold.it/156x156)\">\r\n                    <div class=\"side-dest-ttl\">\r\n                      <h4>Walt Disney World</h4>\r\n                      <p>Florida, United States</p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"side-dest-block\" style=\"background-image:url(http://placehold.it/156x156)\">\r\n                    <div class=\"side-dest-ttl\">\r\n                      <h4>Fushimi Inari-taisha</h4>\r\n                      <p>Kyoto, Japan</p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"side-dest-block\" style=\"background-image:url(http://placehold.it/156x156)\">\r\n                    <div class=\"side-dest-ttl\">\r\n                      <h4>Central Park</h4>\r\n                      <p>New York, United States</p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"side-dest-block\" style=\"background-image:url(http://placehold.it/156x156)\">\r\n                    <div class=\"side-dest-ttl\">\r\n                      <h4>Ouzoud Falls</h4>\r\n                      <p>Morocco</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"post-block post-side-block\">\r\n              <div class=\"post-side-top\">\r\n                <h3 class=\"side-ttl\">Top places</h3>\r\n                <div class=\"side-right-control\">\r\n                  <a href=\"#\" class=\"see-more-link\">See more</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-side-inner\">\r\n                <div class=\"side-place-block\">\r\n                  <div class=\"side-place-top\">\r\n                    <div class=\"side-place-avatar-wrap\">\r\n                      <img src=\"http://placehold.it/46x46\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"side-place-txt\">\r\n                      <a class=\"side-place-name\" href=\"#\">Disneyland</a>\r\n                      <div class=\"side-place-description\">\r\n                        <b>Park</b> in Wyoming, United States of America\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <ul class=\"side-place-image-list\">\r\n                    <li><img src=\"http://placehold.it/79x75\" alt=\"photo\"></li>\r\n                    <li><img src=\"http://placehold.it/79x75\" alt=\"photo\"></li>\r\n                    <li><img src=\"http://placehold.it/79x75\" alt=\"photo\"></li>\r\n                    <li><img src=\"http://placehold.it/79x75\" alt=\"photo\"></li>\r\n                  </ul>\r\n                  <div class=\"side-place-bottom\">\r\n                    <div class=\"side-follow-info\">\r\n                      <b>642</b> Following this place\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"side-place-block\">\r\n                  <div class=\"side-place-top\">\r\n                    <div class=\"side-place-avatar-wrap\">\r\n                      <img src=\"http://placehold.it/46x46\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"side-place-txt\">\r\n                      <a class=\"side-place-name\" href=\"#\">Statue of Liberty</a>\r\n                      <div class=\"side-place-description\">\r\n                        <b>Sculpture</b> in New York, United States of America\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <ul class=\"side-place-image-list\">\r\n                    <li><img src=\"http://placehold.it/79x75\" alt=\"photo\"></li>\r\n                    <li><img src=\"http://placehold.it/79x75\" alt=\"photo\"></li>\r\n                    <li><img src=\"http://placehold.it/79x75\" alt=\"photo\"></li>\r\n                    <li><img src=\"http://placehold.it/79x75\" alt=\"photo\"></li>\r\n                  </ul>\r\n                  <div class=\"side-place-bottom\">\r\n                    <div class=\"side-follow-info\">\r\n                      <b>642</b> Following this place\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-light-primary btn-bordered\">Following</button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"side-place-block\">\r\n                  <div class=\"side-place-top\">\r\n                    <div class=\"side-place-avatar-wrap\">\r\n                      <img src=\"http://placehold.it/46x46\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"side-place-txt\">\r\n                      <a class=\"side-place-name\" href=\"#\">Yellowstone National Park</a>\r\n                      <div class=\"side-place-description\">\r\n                        <b>Park</b> in United States of America\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <ul class=\"side-place-image-list\">\r\n                    <li><img src=\"http://placehold.it/79x75\" alt=\"photo\"></li>\r\n                    <li><img src=\"http://placehold.it/79x75\" alt=\"photo\"></li>\r\n                    <li><img src=\"http://placehold.it/79x75\" alt=\"photo\"></li>\r\n                    <li><img src=\"http://placehold.it/79x75\" alt=\"photo\"></li>\r\n                  </ul>\r\n                  <div class=\"side-place-bottom\">\r\n                    <div class=\"side-follow-info\">\r\n                      <b>642</b> Following this place\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"post-block post-side-block\">\r\n              <div class=\"post-side-top\">\r\n                <h3 class=\"side-ttl\">Stories</h3>\r\n                <div class=\"side-right-control\">\r\n                  <a href=\"#\" class=\"slide-link slide-prev\"><i class=\"trav-angle-left\"></i></a>\r\n                  <a href=\"#\" class=\"slide-link slide-next\"><i class=\"trav-angle-right\"></i></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"post-side-inner\">\r\n                <div class=\"post-slide-wrap\">\r\n                  <ul id=\"storySlider\" class=\"post-slider\">\r\n                    <li>\r\n                      <img src=\"http://placehold.it/325x174\" alt=\"\">\r\n                      <div class=\"post-slider-caption\">\r\n                        <a class=\"post-slide-name\" href=\"#\">4 Days from Morocco to Japan</a>\r\n                        <div class=\"post-slide-description\">\r\n                          When I get the idea of going to japan I was thinking\r\n                        </div>\r\n                      </div>\r\n                    </li>\r\n                    <li>\r\n                      <img src=\"http://placehold.it/325x174\" alt=\"\">\r\n                      <div class=\"post-slider-caption\">\r\n                        <a class=\"post-slide-name\" href=\"#\">4 Days from Morocco to Japan</a>\r\n                        <div class=\"post-slide-description\">\r\n                          When I get the idea of going to japan I was thinking\r\n                        </div>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"aside-footer\">\r\n              <ul class=\"aside-foot-menu\">\r\n                <li><a href=\"#\">Privacy</a></li>\r\n                <li><a href=\"#\">Terms</a></li>\r\n                <li><a href=\"#\">Advertising</a></li>\r\n                <li><a href=\"#\">Cookies</a></li>\r\n                <li><a href=\"#\">More</a></li>\r\n              </ul>\r\n              <p class=\"copyright\">Travooo &copy; 2017</p>\r\n            </div>\r\n          </aside>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatSnackBarModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatSnackBarModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/places/actions/places.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SET_PLACES_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FOLLOW_PLACES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return UNFOLLOW_PLACES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SetPlacesInfoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FollowPlacesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FollowSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return UnfollowPlacesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return UnfollowSuccessAction; });
var SET_PLACES_INFO = '[Places] set places info';
var FOLLOW_PLACES = '[Places] follow places';
var UNFOLLOW_PLACES = '[Places] unfollow places';
var FOLLOW_SUCCESS = '[Places] follow places success';
var UNFOLLOW_SUCCESS = '[Places] unfollow places success';
var SetPlacesInfoAction = /** @class */ (function () {
    function SetPlacesInfoAction(payload) {
        this.payload = payload;
        this.type = SET_PLACES_INFO;
    }
    return SetPlacesInfoAction;
}());

var FollowPlacesAction = /** @class */ (function () {
    function FollowPlacesAction(payload) {
        this.payload = payload;
        this.type = FOLLOW_PLACES;
    }
    return FollowPlacesAction;
}());

var FollowSuccessAction = /** @class */ (function () {
    function FollowSuccessAction() {
        this.type = FOLLOW_SUCCESS;
    }
    return FollowSuccessAction;
}());

var UnfollowPlacesAction = /** @class */ (function () {
    function UnfollowPlacesAction(payload) {
        this.payload = payload;
        this.type = UNFOLLOW_PLACES;
    }
    return UnfollowPlacesAction;
}());

var UnfollowSuccessAction = /** @class */ (function () {
    function UnfollowSuccessAction() {
        this.type = UNFOLLOW_SUCCESS;
    }
    return UnfollowSuccessAction;
}());



/***/ }),

/***/ "./src/app/places/components/follow-place-button/follow-place-button.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"btn\"  [ngClass] =\"{'btn-light-grey': !isFollowed, 'btn-light-primary': isFollowed }\"\r\n   (click)=\"toggleFollow($event)\">{{isFollowed ? 'Unfollow' : 'Follow'}}\r\n</a>\r\n"

/***/ }),

/***/ "./src/app/places/components/follow-place-button/follow-place-button.component.scss":
/***/ (function(module, exports) {

module.exports = ".btn.btn-light-primary:hover {\n  background: #4080ff;\n  color: #fff; }\n\n.btn.btn-light-primary {\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/places/components/follow-place-button/follow-place-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowPlaceButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_auto_unsubscribe__ = __webpack_require__("./node_modules/ngx-auto-unsubscribe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_places_actions__ = __webpack_require__("./src/app/places/actions/places.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FollowPlaceButtonComponent = /** @class */ (function () {
    function FollowPlaceButtonComponent(store) {
        var _this = this;
        this.store = store;
        this.subscriptions = [
            this.store.select(__WEBPACK_IMPORTED_MODULE_3__core_reducers__["r" /* getPlacesId */]).subscribe(function (id) { return _this.id = id; }),
            this.store.select(__WEBPACK_IMPORTED_MODULE_3__core_reducers__["l" /* getFollowPlacesStatus */]).subscribe(function (status) { return _this.isFollowed = status; })
        ];
    }
    FollowPlaceButtonComponent.prototype.ngOnInit = function () {
    };
    FollowPlaceButtonComponent.prototype.toggleFollow = function (e) {
        e.preventDefault();
        console.log('ID:', this.id);
        console.log(this.isFollowed);
        this.isFollowed ?
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_places_actions__["i" /* UnfollowPlacesAction */](this.id)) :
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_places_actions__["c" /* FollowPlacesAction */](this.id));
    };
    FollowPlaceButtonComponent.prototype.ngOnDestroy = function () {
    };
    FollowPlaceButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ngx_auto_unsubscribe__["a" /* AutoUnsubscribe */])({ includeArrays: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-follow-place-button',
            template: __webpack_require__("./src/app/places/components/follow-place-button/follow-place-button.component.html"),
            styles: [__webpack_require__("./src/app/places/components/follow-place-button/follow-place-button.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], FollowPlaceButtonComponent);
    return FollowPlaceButtonComponent;
}());



/***/ }),

/***/ "./src/app/places/components/followers-list/followers-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-block\">\r\n  <div class=\"post-side-top\">\r\n    <h3 class=\"side-ttl\">People following this place <span class=\"count\">64K</span></h3>\r\n    <div class=\"side-right-control\">\r\n      <a  class=\"slide-link slide-prev\"><i class=\"trav-angle-left\"></i></a>\r\n      <a  class=\"slide-link slide-next\"><i class=\"trav-angle-right\"></i></a>\r\n    </div>\r\n  </div>\r\n  <div class=\"post-side-inner\">\r\n    <div class=\"post-slide-wrap slide-hide-right-margin\">\r\n      <ul id=\"newPeopleDiscover\" class=\"post-slider clearfix\">\r\n        <li class=\"post-follow-card\">\r\n          <div class=\"follow-card-inner\">\r\n            <div class=\"image-wrap\">\r\n              <img src=\"http://placehold.it/42x42\" alt=\"\">\r\n            </div>\r\n            <div class=\"post-slider-caption\">\r\n              <p class=\"post-card-name\">Stephanie small</p>\r\n              <p class=\"post-card-spec\">Photographer</p>\r\n              <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n              <p class=\"post-card-follow-count\">12K Followers</p>\r\n            </div>\r\n          </div>\r\n        </li>\r\n        <li class=\"post-follow-card\">\r\n          <div class=\"follow-card-inner\">\r\n            <div class=\"image-wrap\">\r\n              <img src=\"http://placehold.it/42x42\" alt=\"\">\r\n            </div>\r\n            <div class=\"post-slider-caption\">\r\n              <p class=\"post-card-name\">Beatriz kim park</p>\r\n              <p class=\"post-card-spec\">Traveler</p>\r\n              <button type=\"button\" class=\"btn btn-light-primary btn-bordered\">Following</button>\r\n              <p class=\"post-card-follow-count\">248 Followers</p>\r\n            </div>\r\n          </div>\r\n        </li>\r\n        <li class=\"post-follow-card\">\r\n          <div class=\"follow-card-inner\">\r\n            <div class=\"image-wrap\">\r\n              <img src=\"http://placehold.it/42x42\" alt=\"\">\r\n            </div>\r\n            <div class=\"post-slider-caption\">\r\n              <p class=\"post-card-name\">Kathleen brown</p>\r\n              <p class=\"post-card-spec\">Write</p>\r\n              <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n              <p class=\"post-card-follow-count\">39 Followers</p>\r\n            </div>\r\n          </div>\r\n        </li>\r\n        <li class=\"post-follow-card\">\r\n          <div class=\"follow-card-inner\">\r\n            <div class=\"image-wrap\">\r\n              <img src=\"http://placehold.it/42x42\" alt=\"\">\r\n            </div>\r\n            <div class=\"post-slider-caption\">\r\n              <p class=\"post-card-name\">Alex ah</p>\r\n              <p class=\"post-card-spec\">Photographer</p>\r\n              <button type=\"button\" class=\"btn btn-light-grey btn-bordered\">Follow</button>\r\n              <p class=\"post-card-follow-count\">8K Followers</p>\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/places/components/followers-list/followers-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/places/components/followers-list/followers-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowersListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FollowersListComponent = /** @class */ (function () {
    function FollowersListComponent(store) {
        this.store = store;
        // this.data = this.store.select(getCountryPlaces);
        // this.stats = this.store.select(getCountryStats);
    }
    FollowersListComponent.prototype.ngOnInit = function () {
    };
    FollowersListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-followers-list',
            template: __webpack_require__("./src/app/places/components/followers-list/followers-list.component.html"),
            styles: [__webpack_require__("./src/app/places/components/followers-list/followers-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], FollowersListComponent);
    return FollowersListComponent;
}());



/***/ }),

/***/ "./src/app/places/components/left-outside-menu/left-outside-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"left-outside-menu-wrap\" id=\"leftOutsideMenu\">\n  <ul class=\"left-outside-menu\">\n    <li class=\"active\"><a href=\"#\">\n      <i class=\"trav-about-icon\"></i>\n      <span>About</span>\n    </a></li>\n    <li><a href=\"#\">\n      <i class=\"trav-review-icon\"></i>\n      <span>Reviews</span>\n    </a></li>\n    <li><a href=\"#\">\n      <i class=\"trav-photos-icon\"></i>\n      <span>Photos</span>\n    </a></li>\n    <li><a href=\"#\">\n      <i class=\"trav-QA-icon\"></i>\n      <span>Q&A</span>\n    </a></li>\n    <li><a href=\"#\">\n      <i class=\"trav-today-icon\"></i>\n      <span>Today</span>\n    </a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/places/components/left-outside-menu/left-outside-menu.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/places/components/left-outside-menu/left-outside-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftOutsideMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftOutsideMenuComponent = /** @class */ (function () {
    function LeftOutsideMenuComponent() {
    }
    LeftOutsideMenuComponent.prototype.ngOnInit = function () {
    };
    LeftOutsideMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-left-outside-menu',
            template: __webpack_require__("./src/app/places/components/left-outside-menu/left-outside-menu.component.html"),
            styles: [__webpack_require__("./src/app/places/components/left-outside-menu/left-outside-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftOutsideMenuComponent);
    return LeftOutsideMenuComponent;
}());



/***/ }),

/***/ "./src/app/places/components/places-about-box/places-about-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-block post-country-block\">\r\n  <div class=\"post-side-top\">\r\n    <h3 class=\"side-ttl\">About this Place</h3>\r\n  </div>\r\n  <div class=\"post-country-inner\">\r\n    <div class=\"post-footer-info\">\r\n      <div class=\"post-foot-block\">\r\n        <i class=\"trav-comment-icon\"></i>\r\n        <span class=\"blue-txt\">Discussed</span>&nbsp;\r\n        <span>by</span>&nbsp;\r\n        <b>john moline, pitter garmen, richerd</b>&nbsp;\r\n        <span>and 437 more</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"post-txt-wrap\">\r\n      <p class=\"post-txt\">\r\n        {{info.place.trans[0]?.description ? info.place.trans[0].description : 'No description'}}\r\n      </p>\r\n    </div>\r\n    <div class=\"post-map-block\">\r\n      <div class=\"post-map-inner\">\r\n        <agm-map *ngIf=\"info.place?.lat && info.place?.lng\"\r\n                 [latitude]=\"+info.place?.lat\"\r\n                 [longitude]=\"+info.place?.lng\">\r\n        </agm-map>\r\n        <div class=\"post-top-map-info\">\r\n          <div class=\"info-block\">\r\n            <div class=\"info-icon\">\r\n              <i class=\"trav-popularity-icon\"></i>\r\n            </div>\r\n            <div class=\"info-txt\">\r\n              <div  class=\"info-ttl\">\r\n                {{info.place.trans[0]?.popularity ? info.place.trans[0]?.popularity : 'No Info'}}\r\n              </div>\r\n              <div class=\"info-smpl\">Popularity</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"info-block\">\r\n            <div class=\"info-icon\">\r\n              <i class=\"trav-safety-big-icon\"></i>\r\n            </div>\r\n            <div class=\"info-txt\">\r\n              <div class=\"info-ttl\">9/10</div>\r\n              <div class=\"info-smpl\">Safety</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--<div class=\"post-map-flag\">-->\r\n          <!--<img *ngIf=\"info.iso_code\" class=\"flag-image\" src=\"{{'https://s3-us-west-2.amazonaws.com/travooo-assets/images/countryflags/medium/' + info.iso_code.toLowerCase() + '.png'}}\" alt=\"flag\">-->\r\n        <!--</div>-->\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"post-place-footer\">\r\n      <div class=\"place-address\">\r\n        <span class=\"address-label\">Address:</span>\r\n        <span>{{info.place.trans[0]?.address}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/places/components/places-about-box/places-about-box.component.scss":
/***/ (function(module, exports) {

module.exports = "agm-map {\n  width: 100%;\n  height: 360px; }\n\n.flag-image {\n  width: 50px;\n  height: 50px;\n  -o-object-fit: fill;\n     object-fit: fill; }\n\n.address-label {\n  font-weight: bold;\n  font-size: 18px; }\n"

/***/ }),

/***/ "./src/app/places/components/places-about-box/places-about-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesAboutBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlacesAboutBoxComponent = /** @class */ (function () {
    function PlacesAboutBoxComponent() {
    }
    PlacesAboutBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PlacesAboutBoxComponent.prototype, "info", void 0);
    PlacesAboutBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-places-about-box',
            template: __webpack_require__("./src/app/places/components/places-about-box/places-about-box.component.html"),
            styles: [__webpack_require__("./src/app/places/components/places-about-box/places-about-box.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlacesAboutBoxComponent);
    return PlacesAboutBoxComponent;
}());



/***/ }),

/***/ "./src/app/places/components/places-footer/places-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top-banner-wrap\">\n  <div class=\"post-block post-flage-detail\">\n    <div class=\"post-event-block\">\n      <div class=\"post-event-image\">\n        <img class=\"event-cover\"  *ngIf=\"!countryData?.media.length\"\n             src=\"https://www.runnersworld.com/sites/runnersworld.com/files/styles/article_main_custom_user_phone_1x/public/articles/2016/09/nyc_marathon.jpg?itok=mrgDghrv&amp;timestamp=1473862824\" alt=\"photo\">\n        <img class=\"event-cover\" *ngIf=\"countryData?.media.length\"\n             src=\"{{'https://s3.amazonaws.com/travooo-images2/' + countryData.media[0]?.url}}\">\n      </div>\n      <div class=\"post-event-main\">\n        <div class=\"flag-wrap\" *ngIf=\"countryData.info?.iso_code\">\n          <img src=\"{{'https://s3-us-west-2.amazonaws.com/travooo-assets/images/countryflags/medium/' + countryData.info?.iso_code.toLowerCase() + '.png'}}\" alt=\"flag\">\n        </div>\n        <div class=\"post-placement-info\">\n          <h2 *ngIf=\"countryData.info.trans[0]?.title\" class=\"place-name\">{{countryData.info.trans[0]?.title}}</h2>\n          <div class=\"event-info-layer\">\n            <span *ngIf=\"countryData.info?.region\" class=\"placement-place\">Country in\n              <a href=\"#\" class=\"place-link\">{{countryData.info.region.trans[0]?.title}}</a>\n            </span>\n            <div class=\"event-foot-info\">\n              <ul class=\"foot-avatar-list\">\n                <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\n                <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\n                <li><img class=\"small-ava\" src=\"http://placehold.it/20x20\" alt=\"ava\"></li>\n              </ul>\n            </div>\n            <i class=\"trav-talk-icon icon-grey-comment\"></i>\n            <span class=\"talking\">64K Talking about this</span>\n          </div>\n          <div class=\"event-main-content\">\n            <p>{{countryData.info.trans[0]?.description}}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"follow-bottom-link\">\n        <app-follow-button  *ngIf=\"countryData\" ></app-follow-button>\n        <a  class=\"follow-link\">\n          {{countryData?.numOfFollowers}} {{countryData?.numOfFollowers > 1 ? 'Followers':'Follower'}}\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/places/components/places-footer/places-footer.component.scss":
/***/ (function(module, exports) {

module.exports = ".flag-wrap img {\n  -o-object-fit: fill;\n     object-fit: fill;\n  width: 155px;\n  height: 77px; }\n"

/***/ }),

/***/ "./src/app/places/components/places-footer/places-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlacesFooterComponent = /** @class */ (function () {
    function PlacesFooterComponent() {
    }
    PlacesFooterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PlacesFooterComponent.prototype, "countryData", void 0);
    PlacesFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-places-footer',
            template: __webpack_require__("./src/app/places/components/places-footer/places-footer.component.html"),
            styles: [__webpack_require__("./src/app/places/components/places-footer/places-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlacesFooterComponent);
    return PlacesFooterComponent;
}());



/***/ }),

/***/ "./src/app/places/components/places-gallery-box/places-gallery-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-block post-board\" (click)=\"openGallery()\">\r\n  <div class=\"post-side-top\">\r\n    <h3 class=\"side-ttl\">{{info?.title}}</h3>\r\n    <div class=\"side-right-control\">\r\n      <div class=\"side-count\">{{info?.count}}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"post-side-inner\">\r\n    <div class=\"board-photo-list\" >\r\n      <div class=\"board-image full-image\">\r\n        <img  *ngIf=\"info?.media[0] && info.media[0]?.url\"\r\n              src=\"{{'https://s3.amazonaws.com/travooo-images2/' + info.media[0]?.url}}\" alt=\"photo\">\r\n        <img  *ngIf=\"!info?.media[0] || !info.media[0]?.url\"\r\n              src=\"http://placehold.it/185x115\" alt=\"photo\">\r\n      </div>\r\n      <div class=\"board-image half-image\">\r\n        <img  *ngIf=\"info?.media[1] && info.media[1]?.url\"\r\n              src=\"{{'https://s3.amazonaws.com/travooo-images2/' + info.media[1]?.url}}\" alt=\"photo\">\r\n        <img  *ngIf=\"!info?.media[1] || !info.media[1]?.url\"\r\n              src=\"http://placehold.it/85x90\" alt=\"photo\">\r\n      </div>\r\n      <div class=\"board-image half-image\">\r\n        <img  *ngIf=\"info?.media[2] && info.media[2]?.url\"\r\n              src=\"{{'https://s3.amazonaws.com/travooo-images2/' + info.media[2]?.url}}\" alt=\"photo\">\r\n        <img  *ngIf=\"!info?.media[2] || !info.media[2]?.url\"\r\n              src=\"http://placehold.it/85x90\" alt=\"photo\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/places/components/places-gallery-box/places-gallery-box.component.scss":
/***/ (function(module, exports) {

module.exports = ".post-board .board-photo-list .board-image.half-image img {\n  width: 84px;\n  height: 89px; }\n\n.post-board .board-photo-list .board-image img {\n  width: 178px;\n  height: 111px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.post-board {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/places/components/places-gallery-box/places-gallery-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesGalleryBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlacesGalleryBoxComponent = /** @class */ (function () {
    function PlacesGalleryBoxComponent(router) {
        this.router = router;
    }
    PlacesGalleryBoxComponent.prototype.ngOnInit = function () {
    };
    PlacesGalleryBoxComponent.prototype.openGallery = function () {
        if (this.info.media.length && this.info.media[0].id) {
            this.router.navigate([this.router.url + "/" + this.info.routePath + "/" + this.info.media[0].id]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PlacesGalleryBoxComponent.prototype, "info", void 0);
    PlacesGalleryBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-places-gallery-box',
            template: __webpack_require__("./src/app/places/components/places-gallery-box/places-gallery-box.component.html"),
            styles: [__webpack_require__("./src/app/places/components/places-gallery-box/places-gallery-box.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], PlacesGalleryBoxComponent);
    return PlacesGalleryBoxComponent;
}());



/***/ }),

/***/ "./src/app/places/components/places-photo-box/places-photo-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-block\">\n  <div class=\"post-side-top\">\n    <h3 class=\"side-ttl\">Photos of {{data.info.place.trans[0]?.title}} <span class=\"count\">{{data?.media.length}}</span></h3>\n    <div class=\"side-right-control\">\n      <a class=\"see-more-link lg\" (click)=\"openGallery($event)\">More photos</a>\n    </div>\n  </div>\n  <div class=\"post-image-container\">\n    <div class=\"flex-image-wrap fh-395 bw-5\">\n      <div class=\"image-column col-33\">\n        <div class=\"image-inner img-h-66\" *ngIf=\"!data?.media[0]\" style=\"background-image:url(http://placehold.it/200x270)\"></div>\n        <div class=\"image-inner img-h-66\" *ngIf=\"data?.media[0]\"\n             [ngStyle]=\"{'background-image': 'url(https://s3.amazonaws.com/travooo-images2/' + data.media[0]?.url + ')'}\">\n\n        </div>\n        <div class=\"image-inner img-h-33\" *ngIf=\"!data?.media[1]\" style=\"background-image:url(http://placehold.it/200x115)\"></div>\n        <div class=\"image-inner img-h-33\" *ngIf=\"data?.media[1]\"\n             [ngStyle]=\"{'background-image': 'url(https://s3.amazonaws.com/travooo-images2/' + data.media[1]?.url + ')'}\">\n\n        </div>\n      </div>\n      <div class=\"image-column col-33\">\n        <div class=\"image-inner img-h-45\" *ngIf=\"!data?.media[2]\"style=\"background-image:url(http://placehold.it/200x185)\"></div>\n        <div class=\"image-inner img-h-45\" *ngIf=\"data?.media[2]\"\n             [ngStyle]=\"{'background-image': 'url(https://s3.amazonaws.com/travooo-images2/' + data.media[2]?.url + ')'}\">\n\n        </div>\n        <div class=\"image-inner img-h-55\" *ngIf=\"!data?.media[3]\" style=\"background-image:url(http://placehold.it/200x200)\"></div>\n        <div class=\"image-inner img-h-55\" *ngIf=\"data?.media[3]\"\n             [ngStyle]=\"{'background-image': 'url(https://s3.amazonaws.com/travooo-images2/' + data.media[3]?.url + ')'}\">\n\n        </div>\n      </div>\n      <div class=\"image-column col-33\">\n        <div class=\"image-inner img-h-60\" *ngIf=\"!data?.media[4]\" style=\"background-image:url(http://placehold.it/200x240)\"></div>\n        <div class=\"image-inner img-h-60\" *ngIf=\"data?.media[4]\"\n             [ngStyle]=\"{'background-image': 'url(https://s3.amazonaws.com/travooo-images2/' + data.media[4]?.url + ')'}\">\n        </div>\n        <div class=\"image-inner img-h-40\" *ngIf=\"!data?.media[5]\" style=\"background-image:url(http://placehold.it/200x145)\"></div>\n        <div class=\"image-inner img-h-40\" *ngIf=\"data?.media[5]\"\n             [ngStyle]=\"{'background-image': 'url(https://s3.amazonaws.com/travooo-images2/' + data.media[5]?.url + ')'}\">\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/places/components/places-photo-box/places-photo-box.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/places/components/places-photo-box/places-photo-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesPhotoBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlacesPhotoBoxComponent = /** @class */ (function () {
    function PlacesPhotoBoxComponent(router) {
        this.router = router;
    }
    PlacesPhotoBoxComponent.prototype.ngOnInit = function () {
    };
    PlacesPhotoBoxComponent.prototype.openGallery = function (e) {
        e.preventDefault();
        if (this.info.media.length && this.info.media[0].id) {
            this.router.navigate([this.router.url + "/" + this.info.routePath + "/" + this.info.media[0].id]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PlacesPhotoBoxComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PlacesPhotoBoxComponent.prototype, "info", void 0);
    PlacesPhotoBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-places-photo-box',
            template: __webpack_require__("./src/app/places/components/places-photo-box/places-photo-box.component.html"),
            styles: [__webpack_require__("./src/app/places/components/places-photo-box/places-photo-box.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], PlacesPhotoBoxComponent);
    return PlacesPhotoBoxComponent;
}());



/***/ }),

/***/ "./src/app/places/components/places-top-banner/places-top-banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top-banner-wrap\">\n  <div class=\"top-banner-block\" [ngStyle]=\"{'background-image': 'url(https://s3.amazonaws.com/travooo-images2/' + data.media[0]?.url + ')'}\" >\n\n    <div class=\"top-banner-text\">\n      <div class=\"place-info-block\">\n        <div class=\"place-title\">{{ data.info.place.trans[0]?.title }}<span> #{{data.info.place?.id}} </span></div>\n        <div class=\"place-placement\">\n          <span class=\"event-tag\">{{data.info.place?.place_type}}</span>{{data.info.place.trans[0]?.address}}\n        </div>\n        <div class=\"follow-block-info\">\n          <ul class=\"foot-avatar-list\">\n            <li><img class=\"small-ava\" src=\"http://placehold.it/29x29\" alt=\"ava\"></li><!--\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/29x29\" alt=\"ava\"></li><!--\n                    --><li><img class=\"small-ava\" src=\"http://placehold.it/29x29\" alt=\"ava\"></li>\n          </ul>\n          <i class=\"trav-talk-icon\"></i>\n          <span>{{data?.numOfFollowers}} Following this place</span>\n        </div>\n      </div>\n      <div class=\"banner-comment\">\n        <div class=\"comment-inner\">\n          <div class=\"comment-alert\">\n            <div class=\"comment-txt-wrap\">\n              <div class=\"comment-name\">Suzanne</div>\n              <div class=\"comment-txt\">I really love to walk in this beautiful street</div>\n            </div>\n            <div class=\"comment-avatar-wrap\">\n              <img src=\"http://placehold.it/27x27\" alt=\"\">\n            </div>\n          </div>\n          <div class=\"comment-alert\">\n            <div class=\"comment-txt-wrap\">\n              <div class=\"comment-name\">Mario</div>\n              <div class=\"comment-txt\">My favorite place</div>\n            </div>\n            <div class=\"comment-avatar-wrap\">\n              <img src=\"http://placehold.it/27x27\" alt=\"\">\n            </div>\n          </div>\n        </div>\n        <app-follow-place-button></app-follow-place-button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/places/components/places-top-banner/places-top-banner.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/places/components/places-top-banner/places-top-banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesTopBannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlacesTopBannerComponent = /** @class */ (function () {
    function PlacesTopBannerComponent() {
    }
    PlacesTopBannerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PlacesTopBannerComponent.prototype, "data", void 0);
    PlacesTopBannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-places-top-banner',
            template: __webpack_require__("./src/app/places/components/places-top-banner/places-top-banner.component.html"),
            styles: [__webpack_require__("./src/app/places/components/places-top-banner/places-top-banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlacesTopBannerComponent);
    return PlacesTopBannerComponent;
}());



/***/ }),

/***/ "./src/app/places/components/sidebar-about-box/sidebar-about-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-block post-photo-block\">\n  <div class=\"photo-inner\">\n    <img src=\"{{data.media.length ? 'https://s3.amazonaws.com/travooo-images2/' + (data.media | mathRandom).url : 'http://placehold.it/350x405/74828b'}}\" alt=\"photo\">\n    <div class=\"photo-text-cover\">\n      <div class=\"photo-top-layer\">\n        <div class=\"place-info\">\n          <div class=\"place-name\">\n            {{data.info.place.trans[0]?.title ? data.info.place.trans[0]?.title : '' }}\n          </div>\n          <div class=\"photo-like\">\n            <i class=\"trav-heart-fill-icon\"></i>\n            <span class=\"txt\">185 Likes</span>\n          </div>\n        </div>\n        <div class=\"photo-popup-link\">\n          <a href=\"#\">\n            <i class=\"trav-gallery-o-icon\"></i>\n          </a>\n        </div>\n      </div>\n      <div class=\"author-info\">Photo by <span>Patrick smith</span></div>\n    </div>\n  </div>\n  <div class=\"follow-block-info\">\n    <ul class=\"foot-avatar-list\">\n      <li><img class=\"small-ava\" src=\"http://placehold.it/29x29\" alt=\"ava\"></li><!--\n                    -->\n      <li><img class=\"small-ava\" src=\"http://placehold.it/29x29\" alt=\"ava\"></li><!--\n                    -->\n      <li><img class=\"small-ava\" src=\"http://placehold.it/29x29\" alt=\"ava\"></li>\n    </ul>\n    <i class=\"trav-comment-plus-icon\"></i>\n    <span>64K Following this place</span>\n  </div>\n  <div class=\"photo-btn-wrap\">\n    <a class=\"btn btn-light-red\" href=\"#\">Book a hotel/flight</a>\n  </div>\n</div>\n\n<div class=\"share-page-block\">\n  <div class=\"share-page-inner\">\n    <div class=\"share-txt\">Share this page</div>\n    <ul class=\"share-list\">\n      <li>\n        <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n      </li>\n      <li>\n        <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n      </li>\n      <li>\n        <a href=\"#\"><i class=\"fa fa-pinterest-p\"></i></a>\n      </li>\n      <li>\n        <a href=\"#\"><i class=\"fa fa-code\"></i></a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"aside-footer\">\n  <ul class=\"aside-foot-menu\">\n    <li><a href=\"#\">Privacy</a></li>\n    <li><a href=\"#\">Terms</a></li>\n    <li><a href=\"#\">Advertising</a></li>\n    <li><a href=\"#\">Cookies</a></li>\n    <li><a href=\"#\">More</a></li>\n  </ul>\n  <p class=\"copyright\">Travooo &copy; 2017</p>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/places/components/sidebar-about-box/sidebar-about-box.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/places/components/sidebar-about-box/sidebar-about-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarAboutBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarAboutBoxComponent = /** @class */ (function () {
    function SidebarAboutBoxComponent() {
    }
    SidebarAboutBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SidebarAboutBoxComponent.prototype, "data", void 0);
    SidebarAboutBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-about-box',
            template: __webpack_require__("./src/app/places/components/sidebar-about-box/sidebar-about-box.component.html"),
            styles: [__webpack_require__("./src/app/places/components/sidebar-about-box/sidebar-about-box.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarAboutBoxComponent);
    return SidebarAboutBoxComponent;
}());



/***/ }),

/***/ "./src/app/places/components/trending-places-list/trending-places-list.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"post-side-top\">\r\n  <h3 class=\"side-ttl align-center\">Trending Places in United States <span class=\"count\">{{(data | async).length}}</span></h3>\r\n  <div class=\"side-right-control\">\r\n    <a  class=\"slide-link slide-prev\"><i class=\"trav-angle-left\"></i></a>\r\n    <a  class=\"slide-link slide-next\"><i class=\"trav-angle-right\"></i></a>\r\n  </div>\r\n</div>\r\n<div class=\"post-side-inner\">\r\n  <div class=\"post-slide-wrap slide-hide-right-margin\">\r\n    <ul id=\"trendingDescription\" class=\"post-slider clearfix\">\r\n      <li class=\"slider-item\" *ngFor=\"let item of (data | async)\"\r\n          [ngStyle]=\"{'width.px': settings.width,'height.px': settings.height}\"\r\n          (click)=\"navigateToPlace(item.id)\">\r\n        <img *ngIf=\"!item?.medias.length\" src=\"http://placehold.it/230x300\" alt=\"\">\r\n        <img [ngStyle]=\"{'width.px': settings.width,'height.px': settings.height}\" *ngIf=\"item?.medias.length\"\r\n             src=\"{{'https://s3.amazonaws.com/travooo-images2/' + item.medias[0].url}}\" alt=\"\">\r\n        <div class=\"post-slider-caption transparent-caption\">\r\n          <p class=\"post-slide-name\" href=\"#\">{{item.trans[0]?.title}}</p>\r\n          <div class=\"post-slide-description\">\r\n            <span class=\"tag\">{{item?.place_type}}</span> in New York City\r\n          </div>\r\n        </div>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/places/components/trending-places-list/trending-places-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/places/components/trending-places-list/trending-places-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendingPlacesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrendingPlacesListComponent = /** @class */ (function () {
    function TrendingPlacesListComponent(store, router) {
        this.store = store;
        this.router = router;
        this.data = this.store.select(__WEBPACK_IMPORTED_MODULE_2__core_reducers__["j" /* getCountryTrendingPlaces */]);
        // this.stats = this.store.select(getCountryStats);
    }
    TrendingPlacesListComponent.prototype.ngOnInit = function () {
    };
    TrendingPlacesListComponent.prototype.navigateToPlace = function (id) {
        if (id) {
            this.router.navigate(['/places/', id]);
        }
    };
    TrendingPlacesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trending-places-list',
            template: __webpack_require__("./src/app/places/components/trending-places-list/trending-places-list.component.html"),
            styles: [__webpack_require__("./src/app/places/components/trending-places-list/trending-places-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], TrendingPlacesListComponent);
    return TrendingPlacesListComponent;
}());



/***/ }),

/***/ "./src/app/places/components/user-rating-box/user-rating-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-block post-user-rating\">\n  <div class=\"post-side-top\">\n    <div class=\"post-top-txt\">\n      <h3 class=\"side-ttl\">User rating</h3>\n      <div class=\"com-star-block\">\n        <ul class=\"com-star-list\">\n          <li><i class=\"trav-star-icon\"></i></li>\n          <li><i class=\"trav-star-icon\"></i></li>\n          <li><i class=\"trav-star-icon\"></i></li>\n          <li><i class=\"trav-star-icon\"></i></li>\n          <li><i class=\"trav-star-icon\"></i></li>\n        </ul>\n        <span class=\"count\">\n                      <b>{{data.reviews?.rating}}</b>\n                    </span>\n        <span>from</span>\n        <a href=\"#\" class=\"review-link\">39 Reviews</a>\n      </div>\n    </div>\n    <div class=\"top-btn-wrap\">\n      <button type=\"button\" class=\"btn btn-transp btn-bordered\">Write a Review</button>\n    </div>\n  </div>\n  <div class=\"post-comment-layer\">\n    <div class=\"post-comment-wrapper\">\n      <div class=\"post-comment-row\">\n        <div class=\"post-com-avatar-wrap\">\n          <img src=\"http://placehold.it/45x45\" alt=\"\">\n        </div>\n        <div class=\"post-comment-text\">\n          <div class=\"post-com-name-layer\">\n            <a href=\"#\" class=\"comment-name\">Katherin</a>\n            <a href=\"#\" class=\"comment-nickname\">@katherin</a>\n          </div>\n          <div class=\"comment-txt\">\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>\n          </div>\n          <div class=\"comment-bottom-info\">\n            <div class=\"com-star-block\">\n              <ul class=\"com-star-list\">\n                <li><i class=\"trav-star-icon\"></i></li>\n                <li><i class=\"trav-star-icon\"></i></li>\n                <li><i class=\"trav-star-icon\"></i></li>\n                <li><i class=\"trav-star-icon\"></i></li>\n                <li><i class=\"trav-star-icon\"></i></li>\n              </ul>\n              <span class=\"count\">\n                            <b>5</b> / 5\n                          </span>\n            </div>\n            <div class=\"dot\">·</div>\n            <div class=\"com-time\">6 hours ago</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"post-comment-row\">\n        <div class=\"post-com-avatar-wrap\">\n          <img src=\"http://placehold.it/45x45\" alt=\"\">\n        </div>\n        <div class=\"post-comment-text\">\n          <div class=\"post-com-name-layer\">\n            <a href=\"#\" class=\"comment-name\">Amine</a>\n            <a href=\"#\" class=\"comment-nickname\">@ak0117</a>\n          </div>\n          <div class=\"comment-txt\">\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus.</p>\n          </div>\n          <div class=\"comment-bottom-info\">\n            <div class=\"com-star-block\">\n              <ul class=\"com-star-list\">\n                <li><i class=\"trav-star-icon\"></i></li>\n                <li><i class=\"trav-star-icon\"></i></li>\n                <li><i class=\"trav-star-icon\"></i></li>\n                <li><i class=\"trav-star-icon\"></i></li>\n                <li class=\"empty\"><i class=\"trav-star-icon\"></i></li>\n              </ul>\n              <span class=\"count\">\n                            <b>4</b> / 5\n                          </span>\n            </div>\n            <div class=\"dot\">·</div>\n            <div class=\"com-time\">6 hours ago</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"post-comment-row\">\n        <div class=\"post-com-avatar-wrap\">\n          <img src=\"http://placehold.it/45x45\" alt=\"\">\n        </div>\n        <div class=\"post-comment-text\">\n          <div class=\"post-com-name-layer\">\n            <a href=\"#\" class=\"comment-name\">Katherin</a>\n            <a href=\"#\" class=\"comment-nickname\">@katherin</a>\n          </div>\n          <div class=\"comment-txt\">\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>\n          </div>\n          <div class=\"comment-bottom-info\">\n            <div class=\"com-star-block\">\n              <ul class=\"com-star-list\">\n                <li><i class=\"trav-star-icon\"></i></li>\n                <li><i class=\"trav-star-icon\"></i></li>\n                <li><i class=\"trav-star-icon\"></i></li>\n                <li><i class=\"trav-star-icon\"></i></li>\n                <li><i class=\"trav-star-icon\"></i></li>\n              </ul>\n              <span class=\"count\">\n                            <b>5</b> / 5\n                          </span>\n            </div>\n            <div class=\"dot\">·</div>\n            <div class=\"com-time\">6 hours ago</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/places/components/user-rating-box/user-rating-box.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/places/components/user-rating-box/user-rating-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRatingBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserRatingBoxComponent = /** @class */ (function () {
    function UserRatingBoxComponent() {
    }
    UserRatingBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserRatingBoxComponent.prototype, "data", void 0);
    UserRatingBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-rating-box',
            template: __webpack_require__("./src/app/places/components/user-rating-box/user-rating-box.component.html"),
            styles: [__webpack_require__("./src/app/places/components/user-rating-box/user-rating-box.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserRatingBoxComponent);
    return UserRatingBoxComponent;
}());



/***/ }),

/***/ "./src/app/places/effects/places.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_places_service__ = __webpack_require__("./src/app/places/services/places.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_actions_error_actions__ = __webpack_require__("./src/app/core/actions/error.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_places_actions__ = __webpack_require__("./src/app/places/actions/places.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlacesEffects = /** @class */ (function () {
    /**
     * Default constructor
     * @param actions$
     * @param placesService
     * @param router
     */
    function PlacesEffects(actions$, placesService) {
        var _this = this;
        this.actions$ = actions$;
        this.placesService = placesService;
        /**
         * Follow place
         */
        this.follow$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_4__actions_places_actions__["a" /* FOLLOW_PLACES */])
            .switchMap(function (action) { return _this.placesService.followPlaces(action.payload)
            .map(function (res) { return res.success ? new __WEBPACK_IMPORTED_MODULE_4__actions_places_actions__["d" /* FollowSuccessAction */]() : new __WEBPACK_IMPORTED_MODULE_3__core_actions_error_actions__["b" /* AddErrorAction */](res.data); }); });
        /**
         * Unfollow place
         */
        this.unfollow$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_4__actions_places_actions__["g" /* UNFOLLOW_PLACES */])
            .switchMap(function (action) { return _this.placesService.unfollowPlaces(action.payload)
            .map(function (res) { return res.success ? new __WEBPACK_IMPORTED_MODULE_4__actions_places_actions__["j" /* UnfollowSuccessAction */]() : new __WEBPACK_IMPORTED_MODULE_3__core_actions_error_actions__["b" /* AddErrorAction */](res.data); }); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], PlacesEffects.prototype, "follow$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], PlacesEffects.prototype, "unfollow$", void 0);
    PlacesEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_2__services_places_service__["a" /* PlacesService */]])
    ], PlacesEffects);
    return PlacesEffects;
}());



/***/ }),

/***/ "./src/app/places/places.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<div class=\"main-wrapper\" *ngIf=\"showComponent\">\n\n  <app-main-header></app-main-header>\n\n  <div class=\"content-wrap\">\n\n    <button class=\"btn btn-mobile-side sidebar-toggler\" id=\"sidebarToggler\">\n      <i class=\"trav-cog\"></i>\n    </button>\n    <button class=\"btn btn-mobile-side left-outside-btn\" id=\"filterToggler\">\n      <i class=\"trav-filter\"></i>\n    </button>\n\n    <div class=\"container-fluid\">\n      <!-- left outside menu -->\n\n      <app-left-outside-menu></app-left-outside-menu>\n\n      <!--top banner-->\n\n      <app-places-top-banner [data]=\"data\"></app-places-top-banner>\n\n\n      <div class=\"top-board-wrap\">\n\n        <app-places-gallery-box [info]=\"placePhotos\"></app-places-gallery-box>\n        <app-places-gallery-box [info]=\"oneDayPlans\"></app-places-gallery-box>\n        <app-places-gallery-box [info]=\"nearbyPlaces\"></app-places-gallery-box>\n\n        <div class=\"post-block post-board\">\n          <div class=\"post-side-top\">\n            <h3 class=\"side-ttl\">Nearby events</h3>\n            <div class=\"side-right-control\">\n              <div class=\"side-count\">241</div>\n            </div>\n          </div>\n          <div class=\"post-side-inner\">\n            <div class=\"board-photo-list\">\n              <div class=\"board-image full-image\">\n                <img src=\"http://placehold.it/185x115\" alt=\"photo\">\n              </div>\n              <div class=\"board-image half-image\">\n                <img src=\"http://placehold.it/85x90\" alt=\"photo\">\n              </div>\n              <div class=\"board-image half-image\">\n                <img src=\"http://placehold.it/85x90\" alt=\"photo\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"post-block post-board\">\n          <div class=\"post-side-top\">\n            <h3 class=\"side-ttl\">Stories</h3>\n            <div class=\"side-right-control\">\n              <div class=\"side-count\">14</div>\n            </div>\n          </div>\n          <div class=\"post-side-inner\">\n            <div class=\"board-photo-list\">\n              <div class=\"board-image full-image\">\n                <img src=\"http://placehold.it/185x115\" alt=\"photo\">\n              </div>\n              <div class=\"board-image half-image\">\n                <img src=\"http://placehold.it/85x90\" alt=\"photo\">\n              </div>\n              <div class=\"board-image half-image\">\n                <img src=\"http://placehold.it/85x90\" alt=\"photo\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"custom-row\">\n\n        <!-- MAIN-CONTENT -->\n        <div class=\"main-content-layer\">\n\n          <app-places-about-box [info]=\"data.info\"></app-places-about-box>\n\n          <div class=\"post-block post-review-block\">\n            <div class=\"review-inner\">\n              <div class=\"review-info-block half-block\" style=\"border:none\">\n                <div class=\"info-ttl\">Working times</div>\n                <div class=\"info-txt\">\n                  <p *ngIf=\"!data.info.place.trans[0]?.working_days && !data.info.place.trans[0]?.working_times\">No\n                    Info</p>\n                  <p *ngIf=\"data.info.place.trans[0]?.working_times\">\n                    {{data.info.place.trans[0]?.working_days}}<b>{{data.info.place.trans[0]?.working_times}}</b>\n                  </p>\n                  <p *ngIf=\"!data.info.place.trans[0]?.working_times\" [innerHTML]=\"data.info.place.trans[0]?.working_days | sanitizeHtml\"></p>\n                </div>\n              </div>\n              <div class=\"review-info-block half-block\" style=\"border:none\">\n                <div class=\"info-ttl\">Website</div>\n                <div class=\"info-txt\">\n                  <a href=\"www.disneyland.com\" target=\"blank\" class=\"web-site\">www.disneyland.com</a>\n                </div>\n              </div>\n              <!--<div class=\"review-info-block\">-->\n              <!--<div class=\"info-ttl\">Popular times</div>-->\n              <!--<div class=\"info-txt\">-->\n              <!--<div class=\"chart-layer\">-->\n              <!--<img src=\"http://placehold.it/585x105?text=chart_of_popular_times\" alt=\"chart\">-->\n              <!--</div>-->\n              <!--</div>-->\n              <!--</div>-->\n            </div>\n          </div>\n\n          <app-user-rating-box [data]=\"data\"></app-user-rating-box>\n\n          <app-places-photo-box [data]=\"data\" [info]=\"placePhotos\"></app-places-photo-box>\n\n          <div class=\"post-block\">\n            <div class=\"post-side-top\">\n              <h3 class=\"side-ttl\">Happing Today in Disneyland</h3>\n            </div>\n            <div class=\"post-side-inner\">\n              <div class=\"post-map-block\">\n                <div class=\"post-map-inner\">\n                  <img src=\"http://placehold.it/595x360/f2f2f2\" alt=\"map\">\n\n                  <div class=\"dest-img-block\" style=\"top:30px;left:100px;\">\n                    <img class=\"dest-img\" src=\"http://placehold.it/30x30\" alt=\"\">\n                    <div class=\"icon-wrap\">\n                      <ul class=\"icon-list\">\n                        <li><i class=\"fa fa-camera\"></i></li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"dest-img-block\" style=\"top:90px;left:100px;\">\n                    <img class=\"dest-img\" src=\"http://placehold.it/30x30\" alt=\"\">\n                    <div class=\"icon-wrap\">\n                      <ul class=\"icon-list\">\n                        <li>\n                          <img src=\"./assets/image/reaction-icon-smile-only.png\" alt=\"smile\">\n                        </li>\n                        <li><i class=\"trav-comment-icon\"></i></li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"post-happen-wrap mCustomScrollbar\">\n                <div class=\"post-happen-block\">\n                  <div class=\"happen-info\">\n                    <div class=\"img-wrap\">\n                      <img src=\"http://placehold.it/30x30\" alt=\"ava\">\n                    </div>\n                    <div class=\"happen-txt\">\n                      <a href=\"#\" class=\"post-name-link\">Stephen bugno</a>\n                      <span>added a</span>\n                      <img src=\"http://placehold.it/20x20\" alt=\"ava\" class=\"xs-avatar\">\n                      <a href=\"#\" class=\"photo-link\">Photo</a>\n                    </div>\n                  </div>\n                  <div class=\"happen-time\">\n                    <span>20 minutes ago</span>\n                  </div>\n                </div>\n                <div class=\"post-happen-block\">\n                  <div class=\"happen-info\">\n                    <div class=\"img-wrap\">\n                      <img src=\"http://placehold.it/30x30\" alt=\"ava\">\n                    </div>\n                    <div class=\"happen-txt\">\n                      <a href=\"#\" class=\"post-name-link\">Stephen bugno</a>\n                      <span>added a</span>\n                      <img src=\"http://placehold.it/20x20\" alt=\"ava\" class=\"xs-avatar\">\n                      <a href=\"#\" class=\"photo-link\">Photo</a>\n                    </div>\n                  </div>\n                  <div class=\"happen-time\">\n                    <span>20 minutes ago</span>\n                  </div>\n                </div>\n                <div class=\"post-happen-block\">\n                  <div class=\"happen-info\">\n                    <div class=\"img-wrap\">\n                      <img src=\"http://placehold.it/30x30\" alt=\"ava\">\n                    </div>\n                    <div class=\"happen-txt\">\n                      <a href=\"#\" class=\"post-name-link\">Stephen bugno</a>\n                      <span>added a</span>\n                      <img src=\"http://placehold.it/20x20\" alt=\"ava\" class=\"xs-avatar\">\n                      <a href=\"#\" class=\"photo-link\">Photo</a>\n                    </div>\n                  </div>\n                  <div class=\"happen-time\">\n                    <span>20 minutes ago</span>\n                  </div>\n                </div>\n                <div class=\"post-happen-block\">\n                  <div class=\"happen-info\">\n                    <div class=\"img-wrap\">\n                      <img src=\"http://placehold.it/30x30\" alt=\"ava\">\n                    </div>\n                    <div class=\"happen-txt\">\n                      <a href=\"#\" class=\"post-name-link\">John</a>\n                      <span>asked a</span>\n                      <span class=\"happen-icon\"><i class=\"fa fa-question\"></i></span>\n                      <a href=\"#\" class=\"photo-link\">Question</a>\n                    </div>\n                  </div>\n                  <div class=\"happen-time\">\n                    <span>5 hours ago</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <app-dcl-slider-wrapper [type]=\"followersList\"\n                                  [settings]=\"{\n                                    width: 230,\n                                    height: 300,\n                                    count: '20'\n                                  }\">\n          </app-dcl-slider-wrapper>\n        </div>\n\n        <!-- SIDEBAR -->\n        <div class=\"sidebar-layer\" id=\"sidebarLayer\">\n          <aside class=\"sidebar\">\n            <app-sidebar-about-box *ngIf=\"data && showComponent\" [data]=\"data\"></app-sidebar-about-box>\n          </aside>\n        </div>\n      </div>\n\n      <div class=\"post-block  clearfix\" >\n        <app-dcl-slider-wrapper *ngIf=\"countryData && countryData.trendingPlaces?.places.length\"\n                                [type]=\"trendingList\"\n                                [settings]=\"{\n                                    width: 230,\n                                    height: 300,\n                                    count: countryData.trendingPlaces.places.length\n                                  }\">\n        </app-dcl-slider-wrapper>\n      </div>\n\n      <app-places-footer [countryData]=\"countryData\" *ngIf=\"countryData && countryData.media.length\"></app-places-footer>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/places/places.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/places/places.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_auto_unsubscribe__ = __webpack_require__("./node_modules/ngx-auto-unsubscribe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_places_service__ = __webpack_require__("./src/app/places/services/places.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__country_services_country_service__ = __webpack_require__("./src/app/country/services/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__country_actions_country_actions__ = __webpack_require__("./src/app/country/actions/country.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_places_actions__ = __webpack_require__("./src/app/places/actions/places.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_followers_list_followers_list_component__ = __webpack_require__("./src/app/places/components/followers-list/followers-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_trending_places_list_trending_places_list_component__ = __webpack_require__("./src/app/places/components/trending-places-list/trending-places-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PlacesComponent = /** @class */ (function () {
    function PlacesComponent(route, placesService, store, countryService) {
        this.route = route;
        this.placesService = placesService;
        this.store = store;
        this.countryService = countryService;
        this.followersList = __WEBPACK_IMPORTED_MODULE_9__components_followers_list_followers_list_component__["a" /* FollowersListComponent */];
        this.trendingList = __WEBPACK_IMPORTED_MODULE_10__components_trending_places_list_trending_places_list_component__["a" /* TrendingPlacesListComponent */];
        // array of subscriptions for unsubscribe
        this.subscriptions$ = [];
        console.log('Places Constructor');
    }
    PlacesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // :TODO Check it
        this.route.params.subscribe(function (params) {
            console.log('Places component load');
            _this.showComponent = false;
            // unsubscribe
            _this.unSubscribe(_this.subscriptions$);
            _this.getData();
            window.scrollTo(0, 0);
        });
    };
    PlacesComponent.prototype.getData = function () {
        var _this = this;
        /**
         * this.route.snapshot.data.country -> this is data from country resolver
         */
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__actions_places_actions__["f" /* SetPlacesInfoAction */](this.route.snapshot.data.places));
        /**
         * Get data for component (country or city)
         */
        this.subscriptions$[0] = this.store.select(__WEBPACK_IMPORTED_MODULE_6__core_reducers__["q" /* getPlaces */]).subscribe(function (res) {
            console.log('PLACES DATA:', res);
            _this.data = res;
            _this.init();
            // :TODO this info for footer of place component that contains country info -> make it lazyLoading, or modify API for places
            _this.subscriptions$[1] = _this.placesService.getCountryOfPlace(_this.data.info.place.countries_id).take(1).subscribe(function (response) {
                console.log('getCountryOfPlace:', res);
                _this.countryService.setType('countries');
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__country_actions_country_actions__["f" /* SetCountryInfoAction */](response));
            });
        });
        /**
         * Get data for component country
         */
        this.subscriptions$[2] = this.store.select(__WEBPACK_IMPORTED_MODULE_6__core_reducers__["c" /* getCountry */]).subscribe(function (res) {
            console.log('Country', res);
            _this.countryData = res;
            _this.showComponent = true;
        });
    };
    PlacesComponent.prototype.init = function () {
        console.log("INIT PLACE");
        // FILL DATA FOR  BOX GALLERY WRAPPERs
        this.placePhotos = {
            title: 'Photos',
            routePath: 'photos',
            count: this.data.info.place.media_count,
            media: this.data.media.slice(0, 3)
        };
        this.oneDayPlans = {
            title: 'One Day Plans',
            routePath: 'one-day-plans',
            count: this.data.plans.count,
            media: this.data.plans.plans.slice(0, 3).map(function (res) { return res.medias; }),
        };
        this.nearbyPlaces = {
            title: 'Nearby places',
            routePath: 'nearby-places',
            count: this.data.nearby.length,
            media: this.data.nearby.filter(function (res) { return Object.keys(res.firstmedia).length > 1; }).slice(0, 3).map(function (res) { return new Object({
                url: res.firstmedia.url,
                id: res.firstmedia.id
            }); })
        };
    };
    PlacesComponent.prototype.unSubscribe = function (subscriptionsArr) {
        if (subscriptionsArr.length) {
            subscriptionsArr.forEach(function (item) { return item.unsubscribe(); });
        }
    };
    PlacesComponent.prototype.ngOnDestroy = function () {
    };
    PlacesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3_ngx_auto_unsubscribe__["a" /* AutoUnsubscribe */])({ includeArrays: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-places',
            template: __webpack_require__("./src/app/places/places.component.html"),
            styles: [__webpack_require__("./src/app/places/places.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_places_service__["a" /* PlacesService */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_5__country_services_country_service__["a" /* CountryService */]])
    ], PlacesComponent);
    return PlacesComponent;
}());



/***/ }),

/***/ "./src/app/places/places.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__places_component__ = __webpack_require__("./src/app/places/places.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_places_service__ = __webpack_require__("./src/app/places/services/places.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_places_info_resolver__ = __webpack_require__("./src/app/places/services/places-info-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_left_outside_menu_left_outside_menu_component__ = __webpack_require__("./src/app/places/components/left-outside-menu/left-outside-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_places_top_banner_places_top_banner_component__ = __webpack_require__("./src/app/places/components/places-top-banner/places-top-banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_places_gallery_box_places_gallery_box_component__ = __webpack_require__("./src/app/places/components/places-gallery-box/places-gallery-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_follow_place_button_follow_place_button_component__ = __webpack_require__("./src/app/places/components/follow-place-button/follow-place-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_places_about_box_places_about_box_component__ = __webpack_require__("./src/app/places/components/places-about-box/places-about-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_sidebar_about_box_sidebar_about_box_component__ = __webpack_require__("./src/app/places/components/sidebar-about-box/sidebar-about-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_user_rating_box_user_rating_box_component__ = __webpack_require__("./src/app/places/components/user-rating-box/user-rating-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_places_photo_box_places_photo_box_component__ = __webpack_require__("./src/app/places/components/places-photo-box/places-photo-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_followers_list_followers_list_component__ = __webpack_require__("./src/app/places/components/followers-list/followers-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_trending_places_list_trending_places_list_component__ = __webpack_require__("./src/app/places/components/trending-places-list/trending-places-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_places_footer_places_footer_component__ = __webpack_require__("./src/app/places/components/places-footer/places-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__core_pipes_sanitizeHtmlPipe__ = __webpack_require__("./src/app/core/pipes/sanitizeHtmlPipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__core_pipes_mathRandomPipe__ = __webpack_require__("./src/app/core/pipes/mathRandomPipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var PlacesModule = /** @class */ (function () {
    function PlacesModule() {
    }
    PlacesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__core_core_module__["a" /* CoreModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__places_component__["a" /* PlacesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_left_outside_menu_left_outside_menu_component__["a" /* LeftOutsideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_places_top_banner_places_top_banner_component__["a" /* PlacesTopBannerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_places_gallery_box_places_gallery_box_component__["a" /* PlacesGalleryBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_follow_place_button_follow_place_button_component__["a" /* FollowPlaceButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_places_about_box_places_about_box_component__["a" /* PlacesAboutBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_sidebar_about_box_sidebar_about_box_component__["a" /* SidebarAboutBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_user_rating_box_user_rating_box_component__["a" /* UserRatingBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_places_photo_box_places_photo_box_component__["a" /* PlacesPhotoBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_followers_list_followers_list_component__["a" /* FollowersListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_trending_places_list_trending_places_list_component__["a" /* TrendingPlacesListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_places_footer_places_footer_component__["a" /* PlacesFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__core_pipes_sanitizeHtmlPipe__["a" /* SanitizeHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_19__core_pipes_mathRandomPipe__["a" /* MathRandomPipe */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_places_service__["a" /* PlacesService */],
                __WEBPACK_IMPORTED_MODULE_6__services_places_info_resolver__["a" /* PlacesInfoResolver */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__components_followers_list_followers_list_component__["a" /* FollowersListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_trending_places_list_trending_places_list_component__["a" /* TrendingPlacesListComponent */]
            ]
        })
    ], PlacesModule);
    return PlacesModule;
}());



/***/ }),

/***/ "./src/app/places/places.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__places_component__ = __webpack_require__("./src/app/places/places.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_places_info_resolver__ = __webpack_require__("./src/app/places/services/places-info-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_gallery_modal_gallery_modal_component__ = __webpack_require__("./src/app/core/components/gallery-modal/gallery-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_components_modal_wrapper_modal_wrapper_component__ = __webpack_require__("./src/app/core/components/modal-wrapper/modal-wrapper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");





var PlacesRoutes = [
    {
        path: 'places/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__places_component__["a" /* PlacesComponent */],
        resolve: { places: __WEBPACK_IMPORTED_MODULE_1__services_places_info_resolver__["a" /* PlacesInfoResolver */] },
        // canActivate: [AuthGuard],
        children: [
            {
                path: 'photos/:mediaId',
                component: __WEBPACK_IMPORTED_MODULE_3__core_components_modal_wrapper_modal_wrapper_component__["a" /* ModalWrapperComponent */],
                data: { modal: __WEBPACK_IMPORTED_MODULE_2__core_components_gallery_modal_gallery_modal_component__["a" /* GalleryModalComponent */], getFunc: __WEBPACK_IMPORTED_MODULE_4__core_reducers__["s" /* getPlacesImg */], skipClose: true }
            },
            {
                path: 'one-day-plans/:mediaId',
                component: __WEBPACK_IMPORTED_MODULE_3__core_components_modal_wrapper_modal_wrapper_component__["a" /* ModalWrapperComponent */],
                data: { modal: __WEBPACK_IMPORTED_MODULE_2__core_components_gallery_modal_gallery_modal_component__["a" /* GalleryModalComponent */], getFunc: __WEBPACK_IMPORTED_MODULE_4__core_reducers__["v" /* getPlacesPlans */], skipClose: true }
            },
            {
                path: 'nearby-places/:mediaId',
                component: __WEBPACK_IMPORTED_MODULE_3__core_components_modal_wrapper_modal_wrapper_component__["a" /* ModalWrapperComponent */],
                data: { modal: __WEBPACK_IMPORTED_MODULE_2__core_components_gallery_modal_gallery_modal_component__["a" /* GalleryModalComponent */], getFunc: __WEBPACK_IMPORTED_MODULE_4__core_reducers__["u" /* getPlacesNearby */], skipClose: true }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/places/reducers/places.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export INIT_STATE */
/* harmony export (immutable) */ __webpack_exports__["g"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPlaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPlacesId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFollowPlacesStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getPlacesNearby; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getPlacesImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getPlacesPlans; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_places_actions__ = __webpack_require__("./src/app/places/actions/places.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var INIT_STATE = {
    places: null,
};
/**
 * Exports reducing function
 * @param state
 * @param action
 */
function reducer(state, action) {
    if (state === void 0) { state = INIT_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_places_actions__["e" /* SET_PLACES_INFO */]:
            return __assign({}, state, { places: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_places_actions__["b" /* FOLLOW_SUCCESS */]:
            return __assign({}, state, { places: __assign({}, state.places, { numOfFollowers: state.places.numOfFollowers + 1, followStatus: true }) });
        case __WEBPACK_IMPORTED_MODULE_0__actions_places_actions__["h" /* UNFOLLOW_SUCCESS */]:
            return __assign({}, state, { places: __assign({}, state.places, { numOfFollowers: state.places.numOfFollowers - 1, followStatus: false }) });
        default:
            return state;
    }
}
var getPlaces = function (state) { return state.places; };
var getPlacesId = function (state) { return state.places.info.place.id; };
var getFollowPlacesStatus = function (state) { return state.places.followStatus; };
var getPlacesNearby = function (state) { return state.places.nearby.filter(function (res) { return Object.keys(res.firstmedia).length > 1; }).slice(0, 10)
    .map(function (res) { return res.firstmedia; }); };
var getPlacesImg = function (state) { return state.places.media; };
var getPlacesPlans = function (state) { return state.places.plans.plans; };


/***/ }),

/***/ "./src/app/places/services/places-info-resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesInfoResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__places_service__ = __webpack_require__("./src/app/places/services/places.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/forkJoin.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlacesInfoResolver = /** @class */ (function () {
    function PlacesInfoResolver(placesService, router) {
        this.placesService = placesService;
        this.router = router;
    }
    PlacesInfoResolver.prototype.resolve = function (route) {
        var _this = this;
        var placesId = route.paramMap.get('id');
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].forkJoin(this.placesService.getPlacesMedia(placesId), this.placesService.getPlacesInfo(placesId), this.placesService.getNumOfFollowers(placesId), this.placesService.getPlacesStats(placesId), this.placesService.getPlacesPlans(placesId), this.placesService.getDiscussions(placesId), this.placesService.getReviews(placesId), this.placesService.checkFollowStatus(placesId), this.placesService.nearby(placesId), this.placesService.checkFollowers(placesId)).map(function (res) {
            /**
             * If at least one of the items in array has an error === 400 -> navigate to error page
             */
            res.forEach(function (item) {
                if (item.data && item.data.error === 400)
                    return _this.router.navigate(['/error']);
            });
            /**
             * Join multiply responses from server into one object
             */
            var places = {
                media: res[0].data.medias,
                info: res[1].data,
                numOfFollowers: res[2].data.followers,
                stats: res[3].data.places_statistics,
                plans: res[4].data,
                discussions: res[5].data.discussions,
                reviews: res[6].data.place,
                followStatus: res[7].success,
                nearby: res[8].data,
                followers: res[9]
            };
            console.log(places);
            return places;
        });
    };
    PlacesInfoResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__places_service__["a" /* PlacesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], PlacesInfoResolver);
    return PlacesInfoResolver;
}());



/***/ }),

/***/ "./src/app/places/services/places.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_api_service__ = __webpack_require__("./src/app/core/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlacesService = /** @class */ (function () {
    function PlacesService(api, router) {
        this.api = api;
        this.router = router;
    }
    /**
     * Get places info
     */
    PlacesService.prototype.getPlacesInfo = function (placesId) {
        return this.api.get("places/" + placesId + "?language_id=1");
    };
    /**
     * Get number of followers
     */
    PlacesService.prototype.getNumOfFollowers = function (placesId) {
        return this.api.get("places/" + placesId + "/num_followers?language_id=1");
    };
    /**
     * Get places statistic
     */
    PlacesService.prototype.getPlacesStats = function (placesId) {
        return this.api.get("places/" + placesId + "/stats?language_id=1");
    };
    /**
     * Get places media
     */
    PlacesService.prototype.getPlacesMedia = function (placesId) {
        return this.api.get("places/" + placesId + "/media?language_id=1");
    };
    /**
     * Get places trip plans
     */
    PlacesService.prototype.getPlacesPlans = function (placesId) {
        return this.api.get("places/" + placesId + "/plans?language_id=1");
    };
    /**
     * Get discussions
     */
    PlacesService.prototype.getDiscussions = function (placesId) {
        return this.api.get("places/" + placesId + "/discussions?language_id=1");
    };
    /**
     * Get reviews
     */
    PlacesService.prototype.getReviews = function (placesId) {
        return this.api.get("places/" + placesId + "/reviews?language_id=1");
    };
    /**
     * Post nearby
     */
    PlacesService.prototype.nearby = function (placesId) {
        return this.api.post("places/" + placesId + "/nearby?language_id=1", {});
    };
    /**
     * Follow places
     */
    PlacesService.prototype.followPlaces = function (placesId) {
        return this.api.post("places/" + placesId + "/follow?language_id=1", {});
    };
    /**
     * Unfollow places
     */
    PlacesService.prototype.unfollowPlaces = function (placesId) {
        return this.api.post("places/" + placesId + "/unfollow?language_id=1", {});
    };
    /**
     * Check follow  status places
     */
    PlacesService.prototype.checkFollowStatus = function (placesId) {
        return this.api.post("places/" + placesId + "/checkfollow?language_id=1", {});
    };
    /**
     * Share place
     */
    PlacesService.prototype.sharePlace = function (placesId) {
        return this.api.post("places/" + placesId + "/share?language_id=1", {});
    };
    /**
     * Post review
     */
    PlacesService.prototype.review = function (placesId) {
        return this.api.post("places/" + placesId + "/review?language_id=1", {});
    };
    /**
     * Check place followers
     */
    PlacesService.prototype.checkFollowers = function (placesId) {
        return this.api.post("places/" + placesId + "/followers?language_id=1", {});
    };
    /**
     * Get trending places
     */
    PlacesService.prototype.getTrendingPlaces = function (countryId) {
        return this.api.get("countries/" + countryId + "/places?language_id=1");
    };
    /**
     * Get country media
     */
    PlacesService.prototype.getCountryMedia = function (countryId) {
        return this.api.get("countries/" + countryId + "/media?language_id=1");
    };
    /**
     * Get country info
     */
    PlacesService.prototype.getCountryInfo = function (countryId) {
        return this.api.get("countries/" + countryId + "?language_id=1");
    };
    /**
     * Check follow  status country
     */
    PlacesService.prototype.checkCountryFollowStatus = function (countryId) {
        return this.api.post("countries/" + countryId + "/checkfollow?language_id=1", {});
    };
    /**
     * Get number of followers
     */
    PlacesService.prototype.getCountryNumOfFollowers = function (countryId) {
        return this.api.get("countries/" + countryId + "/num_followers?language_id=1");
    };
    /**
     * Get country info  of the place
     */
    PlacesService.prototype.getCountryOfPlace = function (countryId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].forkJoin(this.getCountryMedia(countryId), this.getCountryInfo(countryId), this.checkCountryFollowStatus(countryId), this.getCountryNumOfFollowers(countryId), this.getTrendingPlaces(countryId)).map(function (res) {
            /**
             * If at least one of the items in array has an error === 400 -> navigate to error page
             */
            res.forEach(function (item) {
                if (item.data && item.data.error === 400)
                    return _this.router.navigate(['/error']);
            });
            /**
             * Join multiply responses from server into one object
             */
            var countryInfo = {
                media: res[0].data.medias,
                info: res[1].data,
                followStatus: res[2].success,
                numOfFollowers: res[3].data.followers,
                trendingPlaces: res[4].data
            };
            return countryInfo;
        });
    };
    PlacesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], PlacesService);
    return PlacesService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_scroll_event__ = __webpack_require__("./node_modules/ngx-scroll-event/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_scroll_event___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_scroll_event__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mydatepicker__ = __webpack_require__("./node_modules/mydatepicker/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6_ngx_scroll_event__["ScrollEventModule"],
                __WEBPACK_IMPORTED_MODULE_7_mydatepicker__["MyDatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6_ngx_scroll_event__["ScrollEventModule"],
                __WEBPACK_IMPORTED_MODULE_7_mydatepicker__["MyDatePickerModule"],
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MAT_DIALOG_DEFAULT_OPTIONS */], useValue: {
                        hasBackdrop: true,
                        panelClass: 'custom-overlay-pane-class',
                        backdropClass: 'custom-modal-backdrop',
                        maxWidth: 'auto',
                        disableClose: true,
                        closeOnNavigation: true
                    }
                }
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/trip-planner/actions/trip-planner.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return CREATE_TRIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return CREATE_TRIP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_CITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_CITY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_PLACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_PLACE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return SET_CITY_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return SAVE_CITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return SAVE_CITY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return DELETE_CITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return DELETE_CITY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return SET_ACTIVE_CITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return SAVE_PLACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return SAVE_PLACE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return DELETE_PLACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return DELETE_PLACE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CANCEL_TRIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return SAVE_TRIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return CreateTripAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return CreateTripSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AddCityAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return AddCitySuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return AddPlaceAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return AddPlaceSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return SetCityInfoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return SaveCityAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return SaveCitySuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return DeleteCityAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return DeleteCitySuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return SetActiveCityAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return SavePlaceAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return SavePlaceSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return DeletePlaceAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return DeletePlaceSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return CancelTripAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return SaveTripAction; });
var CREATE_TRIP = '[Trip-planner] creates trip';
var CREATE_TRIP_SUCCESS = '[Trip-planner] create trip success';
var ADD_CITY = '[Trip-planner] add city to trip';
var ADD_CITY_SUCCESS = '[Trip-planner] add city to trip success';
var ADD_PLACE = '[Trip-planner] add place to trip';
var ADD_PLACE_SUCCESS = '[Trip-planner] add place to trip success';
var SET_CITY_INFO = '[Trip-planner] set city info';
var SAVE_CITY = '[Trip-planner] save city';
var SAVE_CITY_SUCCESS = '[Trip-planner] save success city';
var DELETE_CITY = '[Trip-planner] delete city';
var DELETE_CITY_SUCCESS = '[Trip-planner] delete success city';
var SET_ACTIVE_CITY = '[Trip-planner] set active city';
var SAVE_PLACE = '[Trip-planner] save place details';
var SAVE_PLACE_SUCCESS = '[Trip-planner] save place details success';
var DELETE_PLACE = '[Trip-planner] delete place details';
var DELETE_PLACE_SUCCESS = '[Trip-planner] delete place  success';
var CANCEL_TRIP = '[Trip-planner] cancel trip';
var SAVE_TRIP = '[Trip-planner] save trip';
/**
 * Creates new trip
 */
var CreateTripAction = /** @class */ (function () {
    /**
     * Default constructor
     * @param payload
     */
    function CreateTripAction(payload) {
        this.payload = payload;
        this.type = CREATE_TRIP;
    }
    return CreateTripAction;
}());

/**
 * Create trip success
 */
var CreateTripSuccessAction = /** @class */ (function () {
    /**
     * Default constructor
     * @param payload
     */
    function CreateTripSuccessAction(payload) {
        this.payload = payload;
        this.type = CREATE_TRIP_SUCCESS;
    }
    return CreateTripSuccessAction;
}());

/**
 * Add city to trip
 */
var AddCityAction = /** @class */ (function () {
    /**
     * Default constructor
     * @param trip_id,
     * @param details
     */
    function AddCityAction(trip_id, details, urlTo) {
        this.trip_id = trip_id;
        this.details = details;
        this.urlTo = urlTo;
        this.type = ADD_CITY;
        this.payload = { trip_id: trip_id, details: details, urlTo: urlTo };
    }
    return AddCityAction;
}());

/**
 * Add city to trip success
 */
var AddCitySuccessAction = /** @class */ (function () {
    function AddCitySuccessAction(payload) {
        this.payload = payload;
        this.type = ADD_CITY_SUCCESS;
    }
    return AddCitySuccessAction;
}());

/**
 * Add place to trip
 */
var AddPlaceAction = /** @class */ (function () {
    /**
     * Default constructor
     * @param trip_id,
     * @param details
     */
    function AddPlaceAction(trip_id, details, urlTo, helper) {
        this.trip_id = trip_id;
        this.details = details;
        this.urlTo = urlTo;
        this.helper = helper;
        this.type = ADD_PLACE;
        this.payload = { trip_id: trip_id, details: details, urlTo: urlTo, helper: helper };
    }
    return AddPlaceAction;
}());

/**
 * Add place to trip success
 */
var AddPlaceSuccessAction = /** @class */ (function () {
    function AddPlaceSuccessAction(payload) {
        this.payload = payload;
        this.type = ADD_PLACE_SUCCESS;
    }
    return AddPlaceSuccessAction;
}());

var SetCityInfoAction = /** @class */ (function () {
    /**
     * Default constructor
     * @param payload
     */
    function SetCityInfoAction(payload) {
        this.payload = payload;
        this.type = SET_CITY_INFO;
    }
    return SetCityInfoAction;
}());

var SaveCityAction = /** @class */ (function () {
    function SaveCityAction(payload) {
        this.payload = payload;
        this.type = SAVE_CITY;
    }
    return SaveCityAction;
}());

var SaveCitySuccessAction = /** @class */ (function () {
    function SaveCitySuccessAction(payload) {
        this.payload = payload;
        this.type = SAVE_CITY_SUCCESS;
    }
    return SaveCitySuccessAction;
}());

var DeleteCityAction = /** @class */ (function () {
    function DeleteCityAction(payload) {
        this.payload = payload;
        this.type = DELETE_CITY;
    }
    return DeleteCityAction;
}());

var DeleteCitySuccessAction = /** @class */ (function () {
    function DeleteCitySuccessAction(payload) {
        this.payload = payload;
        this.type = DELETE_CITY_SUCCESS;
    }
    return DeleteCitySuccessAction;
}());

var SetActiveCityAction = /** @class */ (function () {
    function SetActiveCityAction(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_CITY;
    }
    return SetActiveCityAction;
}());

var SavePlaceAction = /** @class */ (function () {
    function SavePlaceAction(payload) {
        this.payload = payload;
        this.type = SAVE_PLACE;
    }
    return SavePlaceAction;
}());

var SavePlaceSuccessAction = /** @class */ (function () {
    function SavePlaceSuccessAction(payload) {
        this.payload = payload;
        this.type = SAVE_PLACE_SUCCESS;
    }
    return SavePlaceSuccessAction;
}());

var DeletePlaceAction = /** @class */ (function () {
    function DeletePlaceAction(payload) {
        this.payload = payload;
        this.type = DELETE_PLACE;
    }
    return DeletePlaceAction;
}());

var DeletePlaceSuccessAction = /** @class */ (function () {
    function DeletePlaceSuccessAction(payload) {
        this.payload = payload;
        this.type = DELETE_PLACE_SUCCESS;
    }
    return DeletePlaceSuccessAction;
}());

var CancelTripAction = /** @class */ (function () {
    function CancelTripAction(payload) {
        this.payload = payload;
        this.type = CANCEL_TRIP;
    }
    return CancelTripAction;
}());

var SaveTripAction = /** @class */ (function () {
    function SaveTripAction(payload) {
        this.payload = payload;
        this.type = SAVE_TRIP;
    }
    return SaveTripAction;
}());



/***/ }),

/***/ "./src/app/trip-planner/components/city-arrive-box/city-arrive-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"trip-side-block add-place\" *ngFor=\"let city of cities; let i = index\">\r\n  <div class=\"trip-side-layer-wrap\" *ngIf=\"!city.saved\">\r\n    <form class=\"adding-place-block arrow-left\" #form=\"ngForm\" (ngSubmit)=\"saveCity(city, i)\">\r\n      <div class=\"add-form\" >\r\n        <div class=\"form-row\">\r\n          <div class=\"field-style flex-field\" [ngStyle]=\"{'cursor': 'pointer'}\" (click)=\"setActiveCity(city)\">\r\n            <div class=\"img-wrap\">\r\n              <img src=\"http://placehold.it/54x54\" alt=\"photo\">\r\n            </div>\r\n            <div class=\"field-txt\">\r\n              {{city.trans[0].title}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\" >\r\n          <div class=\"field-style\">\r\n            <div class=\"field-label\">How you will arrive here?</div>\r\n            <div class=\"flex-field\">\r\n              <div class=\"flex-item radio-field\">\r\n                <input type=\"radio\" [name]=\"city.id + '-1'\" [id]=\"city.id + '-1'\" [ngModel]=\"city.transportation\"  value=\"plane\" required>\r\n                <label class=\"check-field\" (click)=\"city.transportation = 'plane'\">\r\n                  <i class=\"trav-angle-plane-icon\"></i>\r\n                </label>\r\n              </div>\r\n              <div class=\"flex-item radio-field\">\r\n                <input type=\"radio\" [name]=\"city.id + '-1'\" [id]=\"city.id + '-2'\" [ngModel]=\"city.transportation\"  value=\"car\" required>\r\n                <label class=\"check-field\" (click)=\"city.transportation = 'car'\">\r\n                  <i class=\"trav-car-icon\"></i>\r\n                </label>\r\n              </div>\r\n              <div class=\"flex-item radio-field\">\r\n                <input type=\"radio\" [name]=\"city.id + '-1'\" [id]=\"city.id + '-3'\" [ngModel]=\"city.transportation\"  value=\"train\" required>\r\n                <label class=\"check-field\" (click)=\"city.transportation = 'train'\">\r\n                  <i class=\"trav-railway-icon\"></i>\r\n                </label>\r\n              </div>\r\n              <div class=\"flex-item radio-field\">\r\n                <input type=\"radio\" [name]=\"city.id + '-1'\" [id]=\"city.id + '-4'\" [ngModel]=\"city.transportation\"  value=\"bus\" required>\r\n                <label class=\"check-field\" (click)=\"city.transportation = 'bus'\">\r\n                  <i class=\"trav-bus-icon\"></i>\r\n                </label>\r\n              </div>\r\n              <div class=\"flex-item radio-field\">\r\n                <input type=\"radio\" [name]=\"city.id + '-1'\" [id]=\"city.id + '-5'\" [ngModel]=\"city.transportation\"  value=\"cycle\" required>\r\n                <label class=\"check-field\" (click)=\"city.transportation = 'cycle'\">\r\n                  <i class=\"trav-cycle-icon\"></i>\r\n                </label>\r\n              </div>\r\n              <div class=\"flex-item radio-field\">\r\n                <input type=\"radio\" [name]=\"city.id + '-1'\" [id]=\"city.id + '-6'\" [ngModel]=\"city.transportation\"  value=\"walk\" required>\r\n                <label class=\"check-field\" (click)=\"city.transportation = 'walk'\">\r\n                  <i class=\"trav-walk-icon-2\"></i>\r\n                </label>\r\n              </div>\r\n              <div class=\"flex-item radio-field\">\r\n                <input type=\"radio\" [name]=\"city.id + '-1'\" [id]=\"city.id + '-7'\" [ngModel]=\"city.transportation\"  value=\"ship\" required>\r\n                <label class=\"check-field\" (click)=\"city.transportation = 'ship'\">\r\n                  <i class=\"trav-ship-icon\"></i>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"add-footer\">\r\n        <button type=\"button\" class=\"btn btn-transp btn-cancel\" (click)=\"removeCity(city, i)\">Delete </button>\r\n        <button type=\"submit\" class=\"btn btn-light-primary btn-bordered\" [disabled]=\"!form.valid\" >Save</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/trip-planner/components/city-arrive-box/city-arrive-box.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/trip-planner/components/city-arrive-box/city-arrive-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityArriveBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_trip_planner_actions__ = __webpack_require__("./src/app/trip-planner/actions/trip-planner.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CityArriveBoxComponent = /** @class */ (function () {
    function CityArriveBoxComponent(store, toastr) {
        this.store = store;
        this.toastr = toastr;
    }
    CityArriveBoxComponent.prototype.ngOnInit = function () {
    };
    CityArriveBoxComponent.prototype.saveCity = function (city, index) {
        if (!city.places.length)
            return this.toastr.error('Please add a place before save');
        var payload = {
            helper: { property: 'saved', value: true, index: index },
            data: { city_id: city.id, transportation: city.transportation },
            url: "trips/" + this.trip_id + "/finish_city"
        };
        return this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_trip_planner_actions__["D" /* SaveCityAction */](payload));
    };
    CityArriveBoxComponent.prototype.removeCity = function (city, index) {
        var payload = {
            helper: { index: index },
            data: { city_id: city.id, },
            url: "trips/" + this.trip_id + "/remove_city"
        };
        return this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_trip_planner_actions__["s" /* DeleteCityAction */](payload));
    };
    CityArriveBoxComponent.prototype.setActiveCity = function (city) {
        return this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_trip_planner_actions__["I" /* SetActiveCityAction */](city));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CityArriveBoxComponent.prototype, "cities", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CityArriveBoxComponent.prototype, "trip_id", void 0);
    CityArriveBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-city-arrive-box',
            template: __webpack_require__("./src/app/trip-planner/components/city-arrive-box/city-arrive-box.component.html"),
            styles: [__webpack_require__("./src/app/trip-planner/components/city-arrive-box/city-arrive-box.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], CityArriveBoxComponent);
    return CityArriveBoxComponent;
}());



/***/ }),

/***/ "./src/app/trip-planner/components/completed-place-box/completed-place-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box3-wrapper\" *ngFor=\"let city of cities; let y = index\">\r\n  <div class=\"trip-side-block\" ngClass=\"{{city.transportation}}\" *ngIf=\"city.hasSavedPlace\">\r\n    <div>\r\n      <div class=\"trip-country-name\">{{city.country ? city.country.trans[0].title : \"Country name\"}}</div>\r\n      <div class=\"box3-place-wrapper\" >\r\n        <div class=\"trip-place-name\">\r\n              <span class=\"name\">\r\n               {{city.trans[0].title}}\r\n              </span>\r\n        </div>\r\n        <div class=\"trip-side-layer-wrap\"   dnd-sortable-container [sortableData]=\"city.places\" [dropZones]=\"[city.trans[0].title]\" [dragEnabled]=\"dragOperation\">\r\n          <div class=\"trip-side-layer\" >\r\n            <div class=\"trip-side-wrapper\" (mouseenter)=\"setDragOperation(true)\" (mouseleave)=\"setDragOperation(false)\" *ngFor=\"let place of city.places; let x = index\" dnd-sortable [sortableIndex]=\"x\"\r\n                 (onDragStart)=\"itemDragged()\"   (onDropSuccess)=\"itemSwapped(city.places)\">\r\n              <div class=\"trip-side-row\" *ngIf=\"place.saved\">\r\n                <a href=\"#\" class=\"drag-icon\">\r\n                  <i class=\"trav-ellipsis-v-icon\"></i>\r\n                </a>\r\n                <div class=\"img-wrap\">\r\n                  <img src=\"http://placehold.it/64x60\" alt=\"photo\">\r\n                </div>\r\n                <div class=\"trip-content\">\r\n                  <div class=\"trip-txt-line\">\r\n                    <div class=\"line-txt place-info\">\r\n                      <p class=\"dest-name\">{{place.trans[0].title}}</p>\r\n                    </div>\r\n                    <div class=\"line-time\">\r\n                      &nbsp; @ {{place.pivot.time}}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"trip-txt-line\">\r\n                    <div class=\"line-txt\">\r\n                      Will spend <b>${{place.pivot.budget}}</b>\r\n                      <span class=\"dot\">·</span>\r\n                      Planning to stay <b>{{place.pivot.duration}}</b>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/trip-planner/components/completed-place-box/completed-place-box.component.scss":
/***/ (function(module, exports) {

module.exports = ".box3-wrapper .trip-side-block:after {\n  -webkit-transform: translateX(-46%);\n          transform: translateX(-46%); }\n\n.box3-wrapper .trip-side-block.plane:after {\n  content: \"\\e92c\";\n  -webkit-transform: translateX(-46%) rotate(90deg);\n          transform: translateX(-46%) rotate(90deg); }\n\n.box3-wrapper .trip-side-block.car:after {\n  content: \"\\e90c\"; }\n\n.box3-wrapper .trip-side-block.train:after {\n  content: \"\\e950\"; }\n\n.box3-wrapper .trip-side-block.bus:after {\n  content: \"\\e954\"; }\n\n.box3-wrapper .trip-side-block.cycle:after {\n  content: \"\\e964\"; }\n\n.box3-wrapper .trip-side-block.walk:after {\n  content: \"\\e966\"; }\n\n.box3-wrapper .trip-side-block.ship:after {\n  content: \"\\e965\"; }\n"

/***/ }),

/***/ "./src/app/trip-planner/components/completed-place-box/completed-place-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletedPlaceBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_api_service__ = __webpack_require__("./src/app/core/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompletedPlaceBoxComponent = /** @class */ (function () {
    function CompletedPlaceBoxComponent(api) {
        this.api = api;
        this.dragOperation = false;
        this.isDragling = false;
    }
    CompletedPlaceBoxComponent.prototype.ngOnInit = function () {
    };
    CompletedPlaceBoxComponent.prototype.setDragOperation = function (e) {
        if (this.isDragling)
            return;
        this.dragOperation = e;
    };
    CompletedPlaceBoxComponent.prototype.itemDragged = function () {
        this.isDragling = true;
    };
    CompletedPlaceBoxComponent.prototype.itemSwapped = function (places) {
        this.isDragling = false;
        var order = [];
        places.forEach(function (place, index) { return order.push({ place_id: place.id, order: index }); });
        this.api.post("trips/" + this.trip_id + "/places_order", { order: order }).subscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CompletedPlaceBoxComponent.prototype, "cities", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CompletedPlaceBoxComponent.prototype, "trip_id", void 0);
    CompletedPlaceBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-completed-place-box',
            template: __webpack_require__("./src/app/trip-planner/components/completed-place-box/completed-place-box.component.html"),
            styles: [__webpack_require__("./src/app/trip-planner/components/completed-place-box/completed-place-box.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_api_service__["a" /* ApiService */]])
    ], CompletedPlaceBoxComponent);
    return CompletedPlaceBoxComponent;
}());



/***/ }),

/***/ "./src/app/trip-planner/components/place-details-box/place-details-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box2-wrapper\" *ngFor=\"let city of cities; let i = index\">\r\n  <div class=\"trip-side-block add-place box2\" *ngIf=\"city.saved && city.places.length && city.hasSavedPlace != city.places.length\" >\r\n    <div class=\"trip-place-name\" >\r\n      <span class=\"name\">{{city.trans[0].title}}</span>\r\n    </div>\r\n    <div class=\"trip-side-layer-wrap\" *ngFor=\"let place of city.places; let j= index;\" >\r\n      <div class=\"adding-place-block\" *ngIf=\"!place.saved\">\r\n        <div class=\"add-form\">\r\n          <div class=\"form-row\">\r\n            <div class=\"field-style flex-field\">\r\n              <div class=\"img-wrap\">\r\n                <img src=\"http://placehold.it/54x54\" alt=\"photo\">\r\n              </div>\r\n              <div class=\"field-txt\">\r\n                {{place.trans[0].title}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"field-style\">\r\n              <div class=\"field-label\">When you will check-in?</div>\r\n              <div class=\"flex-field\">\r\n                <div class=\"flex-item\">\r\n                  <div class=\"field-ttl\">Date</div>\r\n                  <div class=\"date-inner\" [ngStyle]=\"{'position':'relative'}\">\r\n                    <my-date-picker name=\"date\" [options]=\"myDatePickerOptions\"\r\n                                    [(ngModel)]=\"place.pivot.date\"></my-date-picker>\r\n                  </div>\r\n                </div>\r\n                <div class=\"flex-item\" (click)=\"open(place.pivot)\">\r\n                  <div class=\"field-ttl\">Time</div>\r\n                  <div class=\"date-inner\" >\r\n                    {{place.pivot.time}}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"field-style\">\r\n              <div class=\"field-label\">Planning to stay</div>\r\n              <div class=\"flex-field\">\r\n                <div class=\"flex-item\">\r\n                  <div class=\"field-ttl\">Hours</div>\r\n                  <div class=\"time-count\">\r\n                    <span class=\"click\" (click)=\"placeTimeDec(place, 'hour')\">-</span>\r\n                    <input type=\"number\" name=\"hour\"  min=\"0\" [value]=\"place.pivot.hour\" [(ngModel)]=\"place.pivot.hour\">\r\n                    <span class=\"click\" (click)=\"placeTimeInc(place, 'hour')\">+</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"flex-item\">\r\n                  <div class=\"field-ttl\">Minutes</div>\r\n                  <div class=\"time-count\">\r\n                    <span class=\"click\" (click)=\"placeTimeDec(place, 'minute')\">-</span>\r\n                    <input type=\"number\" name=\"minute\" min=\"0\" max=\"59\" [value]=\"place.pivot.minute\" [(ngModel)]=\"place.pivot.minute\">\r\n                    <span class=\"click\" (click)=\"placeTimeInc(place, 'minute')\">+</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"field-style\">\r\n              <div class=\"field-label\">How much you are expecting to spend</div>\r\n              <div class=\"flex-field\">\r\n                <div class=\"flex-item amount-input\">\r\n                  <input type=\"text\" name=\"enter_amount\" placeholder=\"Enter amount\" [(ngModel)]=\"place.pivot.budget\" >\r\n                </div>\r\n                <div class=\"flex-item radio-field\">\r\n                  <input type=\"radio\" name=\"expect_spend\" [id]=\"place.id\"  [ngModel]=\"place.pivot.budget\" value=\"50\">\r\n                  <label class=\"check-field\" (click)=\"setBudget(place, 50)\">\r\n                    50$\r\n                  </label>\r\n                </div>\r\n                <div class=\"flex-item radio-field\">\r\n                  <input type=\"radio\" name=\"expect_spend\"  [id]=\"place.id\" [ngModel]=\"place.pivot.budget\" value=\"100\">\r\n                  <label class=\"check-field\" (click)=\"setBudget(place , 100)\">\r\n                    100$\r\n                  </label>\r\n                </div>\r\n                <div class=\"flex-item radio-field\">\r\n                  <input type=\"radio\" name=\"expect_spend\" [id]=\"place.id\" [ngModel]=\"place.pivot.budget\"  value=\"200\">\r\n                  <label class=\"check-field\" (click)=\"setBudget(place, 200)\">\r\n                    200$\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"field-subtext\">\r\n                Spending so far <b>${{ +alreadySpent + (place.pivot.budget ? +place.pivot.budget : 0)}} </b>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"add-footer\">\r\n          <button type=\"button\" class=\"btn btn-transp btn-cancel\" (click)=\"removePlace(city, i , place, j)\">Delete</button>\r\n          <button type=\"button\" class=\"btn btn-light-primary btn-bordered\"\r\n                  [disabled]=\"isDisabled(place)\"\r\n                  (click)=\"savePlace(city, i , place, j)\">Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/trip-planner/components/place-details-box/place-details-box.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/trip-planner/components/place-details-box/place-details-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceDetailsBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_amazing_time_picker__ = __webpack_require__("./node_modules/amazing-time-picker/amazing-time-picker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_trip_planner_actions__ = __webpack_require__("./src/app/trip-planner/actions/trip-planner.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaceDetailsBoxComponent = /** @class */ (function () {
    function PlaceDetailsBoxComponent(atp, store) {
        this.atp = atp;
        this.store = store;
        this.today = new Date();
        this.time = this.today.getHours() + ":" + this.today.getMinutes();
        this.myDatePickerOptions = {
            dateFormat: 'yyyy-mm-dd',
            width: '169px',
            height: '25px',
        };
    }
    PlaceDetailsBoxComponent.prototype.ngOnInit = function () {
    };
    PlaceDetailsBoxComponent.prototype.open = function (x) {
        var amazingTimePicker = this.atp.open({
            time: this.time,
            theme: 'dark',
            arrowStyle: {
                background: 'red',
                color: 'white'
            }
        });
        amazingTimePicker.afterClose().subscribe(function (time) {
            x.time = time;
        });
    };
    PlaceDetailsBoxComponent.prototype.placeTimeInc = function (place, type) {
        place.pivot[type] = place.pivot[type] ? place.pivot[type] + 1 : 1;
    };
    PlaceDetailsBoxComponent.prototype.placeTimeDec = function (place, type) {
        place.pivot[type] = place.pivot[type] ? place.pivot[type] - 1 : 0;
    };
    PlaceDetailsBoxComponent.prototype.setBudget = function (place, amount) {
        place.pivot.budget = amount;
    };
    PlaceDetailsBoxComponent.prototype.isDisabled = function (place) {
        return !place.pivot.budget || !(place.pivot.minute || place.pivot.hour) || !place.pivot.date || !place.pivot.time;
    };
    PlaceDetailsBoxComponent.prototype.savePlace = function (city, i, place, j) {
        city.places[j] = place;
        city.hasSavedPlace = city.hasSavedPlace ? city.hasSavedPlace + 1 : 1;
        place.saved = true;
        place.pivot.duration = (place.pivot.hour || 0) + ' hours ' + (place.pivot.minute || 0) + ' min ';
        var dur = (place.pivot.hour || 0) * 60 + (place.pivot.minute || 0);
        var payload = {
            helper: { item: city, index: i },
            data: { place_id: place.id, date: place.pivot.date.formatted, time: this.time, duration: dur, budget: +place.pivot.budget },
            url: "trips/" + this.trip_id + "/finish_place"
        };
        return this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_trip_planner_actions__["F" /* SavePlaceAction */](payload));
    };
    PlaceDetailsBoxComponent.prototype.removePlace = function (city, i, place, j) {
        city.places.splice(j, 1);
        var payload = {
            helper: { item: city, index: i },
            data: { place_id: place.id, },
            url: "trips/" + this.trip_id + "/remove_place"
        };
        return this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_trip_planner_actions__["u" /* DeletePlaceAction */](payload));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PlaceDetailsBoxComponent.prototype, "cities", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PlaceDetailsBoxComponent.prototype, "trip_id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PlaceDetailsBoxComponent.prototype, "alreadySpent", void 0);
    PlaceDetailsBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-place-details-box',
            template: __webpack_require__("./src/app/trip-planner/components/place-details-box/place-details-box.component.html"),
            styles: [__webpack_require__("./src/app/trip-planner/components/place-details-box/place-details-box.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_amazing_time_picker__["b" /* AmazingTimePickerService */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */]])
    ], PlaceDetailsBoxComponent);
    return PlaceDetailsBoxComponent;
}());



/***/ }),

/***/ "./src/app/trip-planner/components/trip-planner-info/trip-planner-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\r\n  <header class=\"main-header\" *ngIf=\"!showMessage\">\r\n    <div class=\"container-fluid\">\r\n      <nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\r\n        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\">\r\n          <i class=\"trav-bars\"></i>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"#\">\r\n          <img src=\"./assets/image/main-circle-logo.png\" alt=\"\">\r\n          <span>Travooo</span>\r\n          <span class=\"blue\">Trip Planner</span>\r\n        </a>\r\n\r\n        <div class=\"collapse navbar-collapse create-navbar\" id=\"navbarSupportedContent\">\r\n          <ul class=\"navbar-nav create-menu\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" (click)=\"cancelTrip()\" [ngStyle]=\"{'cursor': 'pointer'}\">Cancel</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" >Save as draft</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a (click)=\"publishTrip()\" class=\"nav-link btn btn-light-primary\"  >Save plan</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"profile-link\" href=\"#\">\r\n                <img src=\"http://placehold.it/36x36\" alt=\"\">\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n  </header>\r\n  <h3 class=\"place-title text-center\" *ngIf=\"showMessage\">Please fill the information for cities & places</h3>\r\n  <div class=\"create-trip-wrapper\">\r\n    <div class=\"trip-side\">\r\n      <div class=\"trip-side-content\">\r\n      <app-completed-place-box [cities]=\"(citiesInfo$ | async).cities\" [trip_id]=\"routeParams.id\"></app-completed-place-box>\r\n      <app-place-details-box [cities]=\"(citiesInfo$ | async).cities\" [trip_id]=\"routeParams.id\" [alreadySpent]=\"(alreadySpent$| async)\"></app-place-details-box>\r\n      <app-city-arrive-box [cities]=\"(citiesInfo$ | async).cities\" [trip_id]=\"routeParams.id\" ></app-city-arrive-box>\r\n      </div>\r\n      <div class=\"trip-side-button-block\">\r\n        <button class=\"btn btn-transp btn-bordered\" (click)=\"openPlaceModal()\">\r\n          <i class=\"trav-add-place-icon\"></i>\r\n          <span>Add a Place in {{(citiesInfo$ | async).activeCity.trans[0].title}}</span>\r\n        </button>\r\n        <button class=\"btn btn-transp btn-bordered\"  (click)=\"openCityModal()\">\r\n          <i class=\"trav-move-new-icon\"></i>\r\n          <span>Move to a new Country or City</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"trip-map-block\">\r\n      <div class=\"trip-top-timeline\">\r\n        <div class=\"timeline-layer\">\r\n          <img src=\"http://placehold.it/800x50?text=timeline+place:https://timeline.knightlab.com\" alt=\"timeline\">\r\n        </div>\r\n\r\n       <!--TODO FIND SOME MODULE FOR DAY SLIDER ANGULAR 2+-->\r\n       <!--<div class=\"day-slider\">\r\n          <ul class=\"calendar-slider\" id=\"createTripCalendarSlider\">\r\n            <li>\r\n              <div class=\"number-day\">16</div>\r\n              <div class=\"month\">oct</div>\r\n            </li>\r\n            <li>\r\n              <div class=\"number-day\">17</div>\r\n              <div class=\"month\">oct</div>\r\n            </li>\r\n            <li class=\"active\">\r\n              <div class=\"number-day\">18</div>\r\n              <div class=\"month\">oct</div>\r\n            </li>\r\n            <li>\r\n              <div class=\"number-day\">19</div>\r\n              <div class=\"month\">oct</div>\r\n            </li>\r\n            <li>\r\n              <div class=\"number-day\">20</div>\r\n              <div class=\"month\">oct</div>\r\n            </li>\r\n            <li>\r\n              <div class=\"number-day\">21</div>\r\n              <div class=\"month\">oct</div>\r\n            </li>\r\n          </ul>\r\n          <ul class=\"calendar-link-list\">\r\n            <li>\r\n              <a href=\"#\" class=\"prevDay\"><i class=\"trav-angle-left\"></i></a>\r\n            </li>\r\n            <li>\r\n              <span class=\"dot\"></span>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"nextDay\"><i class=\"trav-angle-right\"></i></a>\r\n            </li>\r\n          </ul>\r\n        </div>-->\r\n\r\n\r\n        <div class=\"timeline-btn-wrap\">\r\n          <button class=\"btn btn-light-bg-grey btn-bordered\">Next Day</button>\r\n        </div>\r\n      </div>\r\n      <app-trip-planner-map class=\"trip-map-block\" [cities]=\"(citiesInfo$ | async).cities\"></app-trip-planner-map>\r\n      <!--<div class=\"trip-map-layer\">\r\n        <img src=\"./assets/image/create-trip-plan-map.jpg\" alt=\"\">\r\n        <div class=\"trip-map-filter-block\">\r\n          <h5 class=\"filter-ttl\">Filter by</h5>\r\n          <ul class=\"filter-list\">\r\n            <li>\r\n              <a href=\"#\">\r\n                <i class=\"trav-building-icon\"></i>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\">\r\n                <i class=\"trav-heart-beat-icon\"></i>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\">\r\n                <i class=\"trav-library-icon\"></i>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\">\r\n                <i class=\"trav-hot-cup-icon\"></i>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\">\r\n                <i class=\"trav-cutlery-icon\"></i>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\">\r\n                <i class=\"trav-p-icon\"></i>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\">\r\n                <i class=\"trav-spruce-tree-icon\"></i>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\">\r\n                <i class=\"trav-movie-arrow-icon\"></i>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\">\r\n                <i class=\"trav-angle-plane-icon\"></i>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\">\r\n                <i class=\"trav-railway-icon\"></i>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\">\r\n                <i class=\"trav-credit-card-icon\"></i>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\">\r\n                <i class=\"trav-bus-icon\"></i>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\">\r\n                <i class=\"trav-shop-cart-icon\"></i>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\">\r\n                <i class=\"trav-broken-building-icon\"></i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>-->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/trip-planner/components/trip-planner-info/trip-planner-info.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/trip-planner/components/trip-planner-info/trip-planner-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripPlannerInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_add_city_to_trip_modal_add_city_to_trip_modal_component__ = __webpack_require__("./src/app/trip-planner/modals/add-city-to-trip-modal/add-city-to-trip-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_modal_manager_service__ = __webpack_require__("./src/app/core/services/modal-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_add_place_to_trip_modal_add_place_to_trip_modal_component__ = __webpack_require__("./src/app/trip-planner/modals/add-place-to-trip-modal/add-place-to-trip-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_components_modals_confirm_confirm_component__ = __webpack_require__("./src/app/core/components/modals/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_trip_planner_actions__ = __webpack_require__("./src/app/trip-planner/actions/trip-planner.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_auto_unsubscribe__ = __webpack_require__("./node_modules/ngx-auto-unsubscribe/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TripPlannerInfoComponent = /** @class */ (function () {
    function TripPlannerInfoComponent(route, modalManager, router, store) {
        this.route = route;
        this.modalManager = modalManager;
        this.router = router;
        this.store = store;
        this.data = {
            cities: [],
        };
        this.showMessage = true;
        this.routeParams = this.route.snapshot.params;
        this.citiesInfo$ = this.store.select(__WEBPACK_IMPORTED_MODULE_6__core_reducers__["b" /* getCitiesInfo */]);
        this.alreadySpent$ = this.store.select(__WEBPACK_IMPORTED_MODULE_6__core_reducers__["a" /* getAlreadySpent */]);
    }
    TripPlannerInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.showMessage = false; }, 5000);
        var dataFromBack = this.route.snapshot.data.placesInfo.data;
        if (dataFromBack.error)
            return this.router.navigate(['/error']);
        // TODO REMOVE THIS WORST CODE EVER
        this.transformBackendData(dataFromBack);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__actions_trip_planner_actions__["J" /* SetCityInfoAction */]({ cities: this.data.cities, activeCity: this.data.cities[0] }));
        this.citiesInfo$.subscribe(function (res) {
            _this.data.cities = res.cities;
            console.log("Its city info", res);
        });
    };
    TripPlannerInfoComponent.prototype.openCityModal = function () {
        this.modalManager.openModalFromLCH(__WEBPACK_IMPORTED_MODULE_2__modals_add_city_to_trip_modal_add_city_to_trip_modal_component__["a" /* AddCityToTripModalComponent */], this.routeParams);
    };
    TripPlannerInfoComponent.prototype.openPlaceModal = function () {
        this.modalManager.openModalFromLCH(__WEBPACK_IMPORTED_MODULE_4__modals_add_place_to_trip_modal_add_place_to_trip_modal_component__["a" /* AddPlaceToTripModalComponent */], this.routeParams);
    };
    TripPlannerInfoComponent.prototype.publishTrip = function (id) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__actions_trip_planner_actions__["H" /* SaveTripAction */]({ details: {}, url: "trips/" + this.routeParams.id + "/publish" }));
    };
    TripPlannerInfoComponent.prototype.cancelTrip = function () {
        var data = {
            title: 'Are you sure you want to cancel your Trip Plan?',
            onSuccess: this.cancel.bind(this),
            onReject: false
        };
        this.modalManager.openModalFromLCH(__WEBPACK_IMPORTED_MODULE_5__core_components_modals_confirm_confirm_component__["a" /* ConfirmComponent */], data);
    };
    TripPlannerInfoComponent.prototype.cancel = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__actions_trip_planner_actions__["l" /* CancelTripAction */]({ details: {}, url: "trips/" + this.routeParams.id + "/cancel" }));
    };
    TripPlannerInfoComponent.prototype.transformBackendData = function (dataFromBack) {
        var _this = this;
        var cCity;
        dataFromBack.places.forEach(function (place) {
            var flag = false;
            cCity = {
                country: {},
                places: [],
            };
            _this.data.cities.forEach(function (city) {
                if (city.id === place.city.id) {
                    flag = city.id;
                }
            });
            if (flag) {
                delete place.city;
                delete place.country;
                var flag2_1;
                _this.data.cities.forEach(function (c, i) {
                    if (flag === c.id)
                        flag2_1 = i + 1;
                });
                if (flag2_1)
                    _this.data.cities[flag2_1 - 1].places.push(place);
            }
            else {
                cCity = place.city;
                cCity.country = {};
                cCity.country = place.country;
                cCity.places = [];
                delete place.city;
                delete place.country;
                cCity.places.push(place);
                _this.data.cities.push(cCity);
            }
        });
    };
    TripPlannerInfoComponent.prototype.ngOnDestroy = function () {
    };
    TripPlannerInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9_ngx_auto_unsubscribe__["a" /* AutoUnsubscribe */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trip-planner-info',
            styles: [__webpack_require__("./src/app/trip-planner/components/trip-planner-info/trip-planner-info.component.scss")],
            template: __webpack_require__("./src/app/trip-planner/components/trip-planner-info/trip-planner-info.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_modal_manager_service__["a" /* ModalManager */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["h" /* Store */]])
    ], TripPlannerInfoComponent);
    return TripPlannerInfoComponent;
}());



/***/ }),

/***/ "./src/app/trip-planner/components/trip-planner-map/trip-planner-map.component.html":
/***/ (function(module, exports) {

module.exports = "<agm-map  #gm (mapReady)=\"storeMapReady($event)\" class=\"tripInfoMap\">\r\n  <agm-marker *ngIf=\"currentLocation.lat && currentLocation.lng\" [latitude]=\"currentLocation.lat\" [longitude]=\"currentLocation.lng\"></agm-marker>\r\n\r\n  <!--START AGM DIRECTIONS FROM YOUR CITY YO FIRST PLACE -->\r\n  <template *ngIf=\"currentLocation.lat && currentLocation.lng && cities[0].transportation\">\r\n    <agm-direction\r\n                    [travelMode]=\"getTravelMode(cities[0].transportation)\"\r\n                    [renderOptions]=\"directionOptions\"\r\n                    [origin]=\"{lat: currentLocation.lat,lng: currentLocation.lng}\"\r\n                    [destination]=\"{lat: +cities[0].places[0].lat,lng: +cities[0].places[0].lng}\"\r\n                    (onChange)=\"dirChange($event)\"\r\n                    [visible]=\"isModeAllowed(cities[0].transportation)\">\r\n    </agm-direction>\r\n  </template>\r\n\r\n  <template *ngIf=\"cities[0].transportation && !isModeAllowed(cities[0].transportation)\">\r\n    <agm-polyline  [strokeColor]=\"getTravelMode(cities[0].transportation)=='PLANE'?'#47a0fc':'#505050'\" [strokeWeight]=\"3\" [strokeOpacity]=\"0.9\" [geodesic]=\"getTravelMode(cities[0].transportation)=='PLANE'\">\r\n      <agm-polyline-point\r\n        [latitude]=\"currentLocation.lat\"\r\n        [longitude]=\"currentLocation.lng\">\r\n      </agm-polyline-point>\r\n      <agm-polyline-point\r\n        [latitude]=\"+cities[0].places[0].lat\"\r\n        [longitude]=\"+cities[0].places[0].lng\">\r\n      </agm-polyline-point>\r\n    </agm-polyline>\r\n\r\n  </template>\r\n\r\n  <!--END AGM DIRECTIONS FROM YOUR CITY YO FIRST PLACE -->\r\n\r\n\r\n\r\n  <template *ngFor=\"let city of cities; let i = index\">\r\n\r\n    <template *ngIf=\"(i + 1) < cities.length && !isModeAllowed(cities[i+1].transportation) && cities[i+1].places.length\">\r\n      <agm-polyline *ngIf=\"cities[i+1].transportation\" [strokeColor]=\"getTravelMode(cities[i+1].transportation)=='PLANE'?'#47a0fc':'#505050'\" [strokeWeight]=\"3\" [strokeOpacity]=\"0.9\" [geodesic]=\"getTravelMode(cities[i+1].transportation)=='PLANE'\">\r\n         <agm-polyline-point\r\n                             [latitude]=\"+city.places[city.places.length - 1].lat\"\r\n                             [longitude]=\"+city.places[city.places.length - 1].lng\">\r\n         </agm-polyline-point>\r\n         <agm-polyline-point\r\n                             [latitude]=\"+cities[i+1].places[0].lat\"\r\n                             [longitude]=\"+cities[i+1].places[0].lng\">\r\n         </agm-polyline-point>\r\n       </agm-polyline>\r\n    </template>\r\n    <template *ngIf=\"(i + 1) < cities.length  && cities[i+1].places.length\">\r\n    <!--START AGM DIRECTIONS FROM FIRST CITY LAST PLACE TO @ CITY FIRST PLACE -->\r\n      <agm-direction [travelMode]=\"getTravelMode(cities[i+1].transportation)\"\r\n                     [renderOptions]=\"directionOptions\"\r\n                     [origin]=\"{lat: +city.places[city.places.length - 1].lat,lng: +city.places[city.places.length - 1].lng}\"\r\n                     [destination]=\"{lat: +cities[i+1].places[0].lat,lng: +cities[i+1].places[0].lng}\"\r\n                     (onChange)=\"dirChange($event)\"\r\n                     [visible]=\"isModeAllowed(cities[i+1].transportation)\">\r\n      </agm-direction>\r\n\r\n      <!--END AGM DIRECTIONS FROM FIRST CITY LAST PLACE TO @ CITY FIRST PLACE -->\r\n    </template>\r\n\r\n\r\n\r\n\r\n    <!--START AGM DIRECTIONS BETWEEN PLACES INSIDE CITY -->\r\n    <template   *ngFor=\"let place of city.places; let j = index\" >\r\n      <agm-marker *ngIf=\"city.places.length === 1\"  [latitude]=\"+place.lat\" [longitude]=\"+place.lng\"></agm-marker>\r\n      <agm-direction *ngIf=\"city.places[j+1]\"\r\n                     [origin]=\"{lat: +place.lat, lng: +place.lng}\"\r\n                     [travelMode]=\"'DRIVING'\"\r\n                     [destination]=\"{lat:+city.places[j+1].lat, lng: +city.places[j+1].lng}\" [renderOptions]=\"directionOptions\"></agm-direction>\r\n    </template>\r\n    <!--END AGM DIRECTIONS BETWEEN PLACES INSIDE CITY -->\r\n  </template>\r\n</agm-map>\r\n"

/***/ }),

/***/ "./src/app/trip-planner/components/trip-planner-map/trip-planner-map.component.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ agm-map {\n  height: 100%;\n  width: 100%; }\n  :host /deep/ agm-map.tripInfoMap {\n    padding-top: 58px; }\n  :host /deep/ agm-map .agm-info-window-content {\n    overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/trip-planner/components/trip-planner-map/trip-planner-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripPlannerMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_auto_unsubscribe__ = __webpack_require__("./node_modules/ngx-auto-unsubscribe/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripPlannerMapComponent = /** @class */ (function () {
    function TripPlannerMapComponent(store) {
        var _this = this;
        this.store = store;
        this.currentLocation = {
            lat: 0,
            lng: 0
        };
        this.directionOptions = {
            markerOptions: {
                icon: 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png',
            },
        };
        this.transportationTable = {
            plane: 'PLANE',
            car: 'DRIVING',
            train: 'TRANSIT',
            bus: 'TRANSIT',
            cycle: 'BICYCLING',
            walk: 'WALKING',
            ship: 'SHIP'
        };
        this.store.select(__WEBPACK_IMPORTED_MODULE_1__core_reducers__["b" /* getCitiesInfo */]).subscribe(function (res) {
            if (_this.storeMap)
                _this.storeMap.fitBounds(_this.findStoresBounds());
        });
    }
    TripPlannerMapComponent.prototype.ngOnInit = function () {
    };
    TripPlannerMapComponent.prototype.isModeAllowed = function (transportation) {
        if (!transportation)
            return false;
        return !['PLANE', 'SHIP'].includes(this.transportationTable[transportation]);
    };
    TripPlannerMapComponent.prototype.getTravelMode = function (transportation) {
        return this.transportationTable[transportation];
    };
    TripPlannerMapComponent.prototype.dirChange = function (event) {
        console.log("DIRCHANGE!!!", event);
    };
    // AGM MAP CENTER HELPER
    TripPlannerMapComponent.prototype.storeMapReady = function (map) {
        var _this = this;
        this.storeMap = map;
        if (navigator) {
            navigator.geolocation.getCurrentPosition(function (pos) {
                /**
                 * Get current geo-position. Example: lat:30.608178799999997, lng:50.452959199999995
                 */
                _this.currentLocation.lng = +pos.coords.longitude;
                _this.currentLocation.lat = +pos.coords.latitude;
                _this.storeMap.fitBounds(_this.findStoresBounds());
            });
        }
        this.storeMap.fitBounds(this.findStoresBounds());
    };
    TripPlannerMapComponent.prototype.findStoresBounds = function () {
        var bounds = new google.maps.LatLngBounds();
        this.cities.forEach(function (city) {
            city.places.forEach(function (place) { return bounds.extend(new google.maps.LatLng(place.lat, place.lng)); });
        });
        if (this.currentLocation.lat && this.currentLocation.lng) {
            bounds.extend(new google.maps.LatLng(this.currentLocation.lat, this.currentLocation.lng));
        }
        return bounds;
    };
    TripPlannerMapComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TripPlannerMapComponent.prototype, "cities", void 0);
    TripPlannerMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3_ngx_auto_unsubscribe__["a" /* AutoUnsubscribe */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trip-planner-map',
            template: __webpack_require__("./src/app/trip-planner/components/trip-planner-map/trip-planner-map.component.html"),
            styles: [__webpack_require__("./src/app/trip-planner/components/trip-planner-map/trip-planner-map.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
    ], TripPlannerMapComponent);
    return TripPlannerMapComponent;
}());



/***/ }),

/***/ "./src/app/trip-planner/effects/trip-planner.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripPlannerEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_actions_error_actions__ = __webpack_require__("./src/app/core/actions/error.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__ = __webpack_require__("./src/app/trip-planner/actions/trip-planner.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_trip_planner_service__ = __webpack_require__("./src/app/trip-planner/services/trip-planner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_actions_router_actions__ = __webpack_require__("./src/app/core/actions/router.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_actions_core_actions__ = __webpack_require__("./src/app/core/actions/core.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TripPlannerEffects = /** @class */ (function () {
    /**
     * Default constructor
     * @param actions$
     * @param tripPlannerService
     */
    function TripPlannerEffects(actions$, tripPlannerService) {
        var _this = this;
        this.actions$ = actions$;
        this.tripPlannerService = tripPlannerService;
        /**
         * Create trip plan
         */
        this.createTrip$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__["j" /* CREATE_TRIP */])
            .switchMap(function (action) { return _this.tripPlannerService.createTrip(__assign({}, action.payload))
            .map(function (response) { return response.success ?
            new __WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__["n" /* CreateTripSuccessAction */](response) :
            new __WEBPACK_IMPORTED_MODULE_2__core_actions_error_actions__["b" /* AddErrorAction */](response.data && response.data.message); }); });
        /**
         * Create trip plan success
         */
        this.createTripSuccess$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__["k" /* CREATE_TRIP_SUCCESS */])
            .map(function (action) { return Object(__WEBPACK_IMPORTED_MODULE_8__core_actions_router_actions__["e" /* go */])("/trip/" + action.payload.data.trip_id + "/cities"); });
        /**
         * Cancel trip plan
         */
        this.cancelTrip$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__["i" /* CANCEL_TRIP */])
            .switchMap(function (action) { return _this.tripPlannerService.cancelTrip(action.payload.url, action.payload.details)
            .map(function () { return Object(__WEBPACK_IMPORTED_MODULE_8__core_actions_router_actions__["e" /* go */])("/home"); }); });
        /**
         * Save trip plan
         */
        this.saveTrip$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__["A" /* SAVE_TRIP */])
            .switchMap(function (action) { return _this.tripPlannerService.publishTrip(action.payload.url, action.payload.details)
            .map(function () { return Object(__WEBPACK_IMPORTED_MODULE_8__core_actions_router_actions__["e" /* go */])("/home"); }); });
        /**
         * Add city to trip
         */
        this.addCity$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__["a" /* ADD_CITY */])
            .switchMap(function (action) {
            return _this.tripPlannerService.addCity(action.payload.trip_id, action.payload.details)
                .map(function (response) { return response.success ?
                new __WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__["f" /* AddCitySuccessAction */]({ res: action.payload.details || response, urlTo: action.payload.urlTo }) :
                new __WEBPACK_IMPORTED_MODULE_2__core_actions_error_actions__["b" /* AddErrorAction */](response.data && response.data.message); });
        });
        /**
         * Add city to trip success
         */
        this.addCitySuccess$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__["b" /* ADD_CITY_SUCCESS */])
            .mergeMap(function (action) { return ([Object(__WEBPACK_IMPORTED_MODULE_8__core_actions_router_actions__["e" /* go */])(action.payload.urlTo), new __WEBPACK_IMPORTED_MODULE_9__core_actions_core_actions__["b" /* CloseOpenedModalAction */]()]); });
        /**
         * Add place to trip
         */
        this.addPlace$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__["c" /* ADD_PLACE */])
            .switchMap(function (action) {
            return _this.tripPlannerService.addPlace(action.payload.trip_id, action.payload.details)
                .map(function (response) { return response.success ?
                new __WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__["h" /* AddPlaceSuccessAction */]({ res: action.payload, urlTo: action.payload.urlTo }) :
                new __WEBPACK_IMPORTED_MODULE_2__core_actions_error_actions__["b" /* AddErrorAction */](response.data && response.data.message); });
        });
        /**
         * Add place to trip success
         */
        this.addPlaceSuccess$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__["d" /* ADD_PLACE_SUCCESS */])
            .mergeMap(function (action) { return ([Object(__WEBPACK_IMPORTED_MODULE_8__core_actions_router_actions__["e" /* go */])(action.payload.urlTo), new __WEBPACK_IMPORTED_MODULE_9__core_actions_core_actions__["b" /* CloseOpenedModalAction */]()]); });
        /**
         * Save city info  to trip
         */
        this.finishCity$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__["w" /* SAVE_CITY */])
            .switchMap(function (action) {
            return _this.tripPlannerService.saveCityInfo(action.payload.url, action.payload.data)
                .map(function (response) { return response.success ?
                new __WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__["E" /* SaveCitySuccessAction */](action.payload) :
                new __WEBPACK_IMPORTED_MODULE_2__core_actions_error_actions__["b" /* AddErrorAction */](response.data && response.data.message); });
        });
        /**
         * Remove city info  from trip
         */
        this.removeCity$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__["o" /* DELETE_CITY */])
            .switchMap(function (action) {
            return _this.tripPlannerService.removeCityInfo(action.payload.url, action.payload.data)
                .map(function (response) { return response.success ?
                new __WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__["t" /* DeleteCitySuccessAction */](action.payload) :
                new __WEBPACK_IMPORTED_MODULE_2__core_actions_error_actions__["b" /* AddErrorAction */](response.data && response.data.message); });
        });
        /**
         * Save place info  from trip
         */
        this.finishPlace$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__["y" /* SAVE_PLACE */])
            .switchMap(function (action) {
            return _this.tripPlannerService.savePlaceInfo(action.payload.url, action.payload.data)
                .map(function (response) { return response.success ?
                new __WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__["G" /* SavePlaceSuccessAction */](action.payload) :
                new __WEBPACK_IMPORTED_MODULE_2__core_actions_error_actions__["b" /* AddErrorAction */](response.data && response.data.message); });
        });
        /**
         * Remove place info  from trip
         */
        this.removePlace$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__["q" /* DELETE_PLACE */])
            .switchMap(function (action) {
            return _this.tripPlannerService.removePlaceInfo(action.payload.url, action.payload.data)
                .map(function (response) { return response.success ?
                new __WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__["v" /* DeletePlaceSuccessAction */](action.payload) :
                new __WEBPACK_IMPORTED_MODULE_2__core_actions_error_actions__["b" /* AddErrorAction */](response.data && response.data.message); });
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], TripPlannerEffects.prototype, "createTrip$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], TripPlannerEffects.prototype, "createTripSuccess$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], TripPlannerEffects.prototype, "cancelTrip$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], TripPlannerEffects.prototype, "saveTrip$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], TripPlannerEffects.prototype, "addCity$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], TripPlannerEffects.prototype, "addCitySuccess$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], TripPlannerEffects.prototype, "addPlace$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], TripPlannerEffects.prototype, "addPlaceSuccess$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], TripPlannerEffects.prototype, "finishCity$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], TripPlannerEffects.prototype, "removeCity$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], TripPlannerEffects.prototype, "finishPlace$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], TripPlannerEffects.prototype, "removePlace$", void 0);
    TripPlannerEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_7__services_trip_planner_service__["a" /* TripPlannerService */]])
    ], TripPlannerEffects);
    return TripPlannerEffects;
}());



/***/ }),

/***/ "./src/app/trip-planner/modals/add-city-to-trip-modal/add-city-to-trip-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- would visit place popup -->\r\n<div  class=\"modal-wrapper\">\r\n  <button class=\"modal-close\" type=\"button\" mat-button  [mat-dialog-close]=\"true\" [routerLink]=\"[closeLink]\" >\r\n    <i class=\"trav-close-icon\"></i>\r\n  </button>\r\n  <div class=\"modal-dialog modal-custom-style modal-650\" role=\"document\">\r\n    <div class=\"modal-custom-block\">\r\n      <div class=\"post-block post-modal-add-place\">\r\n        <h3 class=\"place-title\">Which country or city would you like to visit?</h3>\r\n        <div class=\"search-block-wrap\">\r\n          <div class=\"search-block-inner\">\r\n            <div class=\"search-block\" [formGroup]=\"cityForm\">\r\n              <input type=\"text\"  class=\"\" placeholder=\"Search...\" id=\"placeSearchInput2\" formControlName=\"city\">\r\n            </div>\r\n            <div class=\"search-drop-place\">\r\n              <div class=\"results-block-wrap\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"suggestion-wrapper\">\r\n          <p class=\"sugg-ttl\">Suggestions</p>\r\n          <div class=\"sugg-inner\">\r\n            <div class=\"suggestion-block\" *ngFor=\"let city of cities\">\r\n              <div class=\"img-wrap\">\r\n                <img src=\"http://placehold.it/60x60\" alt=\"image\">\r\n              </div>\r\n              <div class=\"sugg-content\">\r\n                <div class=\"sugg-place\">{{city.trans[0].title}}</div>\r\n                <div class=\"sugg-place-info\">{{city.country.trans[0].title}}</div>\r\n                <!--<div class=\"com-star-block\">\r\n                  <ul class=\"com-star-list\">\r\n                    <li><i class=\"trav-star-icon\"></i></li>\r\n                    <li><i class=\"trav-star-icon\"></i></li>\r\n                    <li><i class=\"trav-star-icon\"></i></li>\r\n                    <li><i class=\"trav-star-icon\"></i></li>\r\n                    <li><i class=\"trav-star-icon\"></i></li>\r\n                  </ul>\r\n                  <span class=\"count\">\r\n                      <b>4.8</b>\r\n                    </span>\r\n                  <span>from 26 Reviews</span>\r\n                </div>-->\r\n              </div>\r\n              <div class=\"sugg-btn-wrap\">\r\n                <button type=\"button\" class=\"btn btn-light-primary btn-bordered\" (click)=\"onAddClick(city)\"><span>+</span> Add </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"error-layer\" *ngIf=\"(error$ | async)\">\r\n            <p class=\"sub-ttl error-message\">{{error$ | async}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/trip-planner/modals/add-city-to-trip-modal/add-city-to-trip-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/trip-planner/modals/add-city-to-trip-modal/add-city-to-trip-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCityToTripModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_reducers_index__ = __webpack_require__("./src/app/core/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_trip_planner_actions__ = __webpack_require__("./src/app/trip-planner/actions/trip-planner.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_trip_planner_service__ = __webpack_require__("./src/app/trip-planner/services/trip-planner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_auto_unsubscribe__ = __webpack_require__("./node_modules/ngx-auto-unsubscribe/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var AddCityToTripModalComponent = /** @class */ (function () {
    /**
     * Default constructor
     * @param store
     * @param fb
     * @param tripPlannerService
     */
    function AddCityToTripModalComponent(store, fb, tripPlannerService, routeParams, route) {
        this.store = store;
        this.fb = fb;
        this.tripPlannerService = tripPlannerService;
        this.routeParams = routeParams;
        this.route = route;
        /**
         * Cities data holder
         */
        this.cities = [];
        this.closeLink = this.route.routerState.snapshot.url.endsWith('info') ? this.route.routerState.snapshot.url : 'trip/new';
        this.error$ = store.select(__WEBPACK_IMPORTED_MODULE_2__core_reducers_index__["k" /* getErrorFromServer */]);
    }
    AddCityToTripModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_2__core_reducers_index__["z" /* getTripPlannerState */]).subscribe(function (res) {
            console.log('getTripPlannerState', res);
            _this.cityName = res.cityName;
        });
        this.tripPlannerService.getCities(this.cityName ? this.cityName : '')
            .subscribe(function (res) { return _this.cities = JSON.parse(res.data); });
        this.cityForm = this.fb.group({
            city: ''
        });
        this.searchCitySubscription$ = this.cityForm.valueChanges
            .debounceTime(500)
            .switchMap(function (form) { return _this.tripPlannerService.getCities(form.city); })
            .subscribe(function (res) { return _this.cities = JSON.parse(res.data); });
    };
    /**
     * Next step button clicked
     */
    AddCityToTripModalComponent.prototype.onAddClick = function (city) {
        var urlTo = "/trip/" + this.routeParams.id + "/" + (this.route.routerState.snapshot.url.endsWith('info') ? 'info' : 'places');
        var transformedCity = {
            id: city.id,
            trans: city.trans,
            country: city.country,
            lat: city.lat,
            lng: city.lng,
            order: 0,
            places: [],
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_trip_planner_actions__["e" /* AddCityAction */](this.routeParams.id, transformedCity, urlTo));
    };
    AddCityToTripModalComponent.prototype.ngOnDestroy = function () {
    };
    AddCityToTripModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9_ngx_auto_unsubscribe__["a" /* AutoUnsubscribe */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-city-to-trip-modal',
            template: __webpack_require__("./src/app/trip-planner/modals/add-city-to-trip-modal/add-city-to-trip-modal.component.html"),
            styles: [__webpack_require__("./src/app/trip-planner/modals/add-city-to-trip-modal/add-city-to-trip-modal.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_trip_planner_service__["a" /* TripPlannerService */], Object, __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* Router */]])
    ], AddCityToTripModalComponent);
    return AddCityToTripModalComponent;
}());



/***/ }),

/***/ "./src/app/trip-planner/modals/add-place-to-trip-modal/add-place-to-trip-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- add place popup -->\r\n<div class=\"modal-wrapper\" *ngIf=\"(citiesInfo$ |async).activeCity.id\">\r\n  <button class=\"modal-close\" type=\"button\" mat-button  [mat-dialog-close]=\"true\" [routerLink]=\"[closeLink]\">\r\n    <i class=\"trav-close-icon\"></i>\r\n  </button>\r\n  <div class=\"modal-dialog modal-custom-style modal-650\" role=\"document\">\r\n    <div class=\"modal-custom-block\">\r\n      <div class=\"post-block post-modal-add-place\">\r\n        <h3 class=\"place-title\">What is your next destination in {{(citiesInfo$ |async).activeCity.trans[0].title}}</h3>\r\n        <div class=\"search-block-wrap\">\r\n          <div class=\"search-block-inner\">\r\n            <div class=\"search-block\" [formGroup]=\"form\">\r\n              <input type=\"text\" class=\"\" placeholder=\"Search...\" id=\"placeSearchInput\" formControlName=\"place\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"suggestion-wrapper\">\r\n          <p class=\"sugg-ttl\">Suggestions</p>\r\n          <div class=\"sugg-inner\">\r\n            <div class=\"suggestion-block\" *ngFor=\"let place of places\">\r\n              <div class=\"img-wrap\">\r\n                <img src=\"http://placehold.it/60x60\" alt=\"image\">\r\n              </div>\r\n              <div class=\"sugg-content\">\r\n                <div class=\"sugg-place\">{{place.name}}</div>\r\n                <div class=\"sngrx ugg-place-info\">Monument</div>\r\n               <!-- <div class=\"com-star-block\">\r\n                  <ul class=\"com-star-list\">\r\n                    <li><i class=\"trav-star-icon\"></i></li>\r\n                    <li><i class=\"trav-star-icon\"></i></li>\r\n                    <li><i class=\"trav-star-icon\"></i></li>\r\n                    <li><i class=\"trav-star-icon\"></i></li>\r\n                    <li><i class=\"trav-star-icon\"></i></li>\r\n                  </ul>\r\n                  <span class=\"count\">\r\n                      <b>4.8</b>\r\n                    </span>\r\n                  <span>from 26 Reviews</span>\r\n                </div>-->\r\n              </div>\r\n              <div class=\"sugg-btn-wrap\">\r\n                <button type=\"button\" (click)=\"onAddClick(place)\"  class=\"btn btn-light-primary btn-bordered\"><span>+</span> Add</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"error-layer\" *ngIf=\"(error$ | async)\">\r\n            <p class=\"sub-ttl error-message\">{{error$ | async}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/trip-planner/modals/add-place-to-trip-modal/add-place-to-trip-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/trip-planner/modals/add-place-to-trip-modal/add-place-to-trip-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPlaceToTripModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__ = __webpack_require__("./src/app/trip-planner/actions/trip-planner.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_trip_planner_service__ = __webpack_require__("./src/app/trip-planner/services/trip-planner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_auto_unsubscribe__ = __webpack_require__("./node_modules/ngx-auto-unsubscribe/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var AddPlaceToTripModalComponent = /** @class */ (function () {
    /**
     * Default constructor
     * @param store
     * @param fb
     */
    function AddPlaceToTripModalComponent(store, fb, tripPlannerService, routeParams, route) {
        this.store = store;
        this.fb = fb;
        this.tripPlannerService = tripPlannerService;
        this.routeParams = routeParams;
        this.route = route;
        this.places = [];
        this.closeLink = this.route.routerState.snapshot.url.endsWith('info') ? this.route.routerState.snapshot.url : 'trip/new';
        this.error$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__core_reducers__["k" /* getErrorFromServer */]);
        this.citiesInfo$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__core_reducers__["b" /* getCitiesInfo */]);
    }
    AddPlaceToTripModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.citiesInfo$.subscribe(function (res) {
            _this.cities = res.cities;
            _this.city_id = (res.activeCity && res.activeCity.id);
            res.cities.forEach(function (city, index) {
                if (city.id === _this.city_id) {
                    _this.city_index = index;
                }
            });
        });
        this.tripPlannerService.getPlaces('', this.city_id)
            .subscribe(function (res) { return _this.places = res.data.places; });
        this.form = this.fb.group({
            place: '',
        });
        this.searchPlaceSubscription$ = this.form.valueChanges
            .debounceTime(500)
            .switchMap(function (form) { return _this.tripPlannerService.getPlaces(form.place, _this.city_id); })
            .subscribe(function (res) { return _this.places = res.data.places; });
    };
    /**
     * Add button clicked
     */
    AddPlaceToTripModalComponent.prototype.onAddClick = function (place) {
        var tCity = this.cities[this.city_index];
        place.pivot = {};
        place.trans = [{ title: place.name }];
        tCity.places.push(place);
        var helper = { item: tCity, index: this.city_index };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__["g" /* AddPlaceAction */](this.routeParams.id, { place_id: place.id }, "/trip/" + this.routeParams.id + "/info", helper));
    };
    AddPlaceToTripModalComponent.prototype.ngOnDestroy = function () {
    };
    AddPlaceToTripModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8_ngx_auto_unsubscribe__["a" /* AutoUnsubscribe */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-place-to-trip-modal',
            template: __webpack_require__("./src/app/trip-planner/modals/add-place-to-trip-modal/add-place-to-trip-modal.component.html"),
            styles: [__webpack_require__("./src/app/trip-planner/modals/add-place-to-trip-modal/add-place-to-trip-modal.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_trip_planner_service__["a" /* TripPlannerService */], Object, __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* Router */]])
    ], AddPlaceToTripModalComponent);
    return AddPlaceToTripModalComponent;
}());



/***/ }),

/***/ "./src/app/trip-planner/modals/create-trip-plan-modal/create-trip-plan-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- would visit place popup -->\r\n<form [formGroup]=\"form\" (ngSubmit)=\"form.valid && submit()\" class=\"modal-wrapper\" >\r\n  <button class=\"modal-close\" type=\"button\" mat-button  [mat-dialog-close]=\"true\" routerLink=\"trip\">\r\n    <i class=\"trav-close-icon\"></i>\r\n  </button>\r\n  <div class=\"modal-dialog modal-custom-style modal-750\" role=\"document\">\r\n    <div class=\"modal-custom-block\">\r\n      <div class=\"post-block post-modal-trip-planner\">\r\n        <div class=\"plan-head\">\r\n          <h4 class=\"ttl\">Trip Planner</h4>\r\n          <div class=\"head-btn-wrap\">\r\n            <button type=\"submit\" class=\"btn btn-light-primary btn-bordered\" (click)=\"validation.onValueChange(form, formErrors, true)\">Next step</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"create-trip-block\">\r\n          <div class=\"form-row\">\r\n            <div class=\"field-label\">What you want to call your trip?</div>\r\n            <div class=\"field-item\" [ngClass]=\"{ 'has-danger': formErrors.title }\">\r\n              <input type=\"text\" placeholder=\"From Morocco to Japan in 16 Days\" formControlName=\"title\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"field-label\">What you are intending to go to this trip?</div>\r\n            <div class=\"field-item\">\r\n              <div class=\"field-ttl\">Date</div>\r\n              <div class=\"date-inner\">\r\n                <my-date-picker name=\"date\" [options]=\"myDatePickerOptions\"\r\n                                formControlName=\"date\"></my-date-picker>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"field-label\">Privacy options</div>\r\n            <p>You decide who can see your Trip Plan, you changed this at any time.</p>\r\n          </div>\r\n          <div class=\"create-footer\">\r\n            <button type=\"button\" class=\"btn  btn-bordered\" [ngClass]=\"{'btn-light-primary': privacy === 1, 'btn-transp': privacy !== 1}\" (click)=\"privacy = 1\">\r\n              <div class=\"icon-wrap\">\r\n                <i class=\"trav-earth\"></i>\r\n              </div>\r\n              <div class=\"btn-text\">\r\n                <div class=\"ttl\">Public</div>\r\n                <div class=\"sub-ttl\">Everyone can see this</div>\r\n              </div>\r\n              <input type=\"radio\" [value]=\"1\" formControlName=\"privacy\" [ngModel]=\"privacy\" >\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-transp btn-bordered\" (click)=\"privacy = 2\" [ngClass]=\"{'btn-light-primary': privacy === 2, 'btn-transp': privacy !== 2}\" >\r\n              <div class=\"icon-wrap\">\r\n                <i class=\"trav-friends-icon\"></i>\r\n              </div>\r\n              <div class=\"btn-text\">\r\n                <div class=\"ttl\">Friends</div>\r\n                <div class=\"sub-ttl\">Only visible to friends</div>\r\n              </div>\r\n              <input type=\"radio\" [value]=\"2\"  formControlName=\"privacy\" >\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-transp btn-bordered\"  (click)=\"privacy = 3\" [ngClass]=\"{'btn-light-primary': privacy === 3, 'btn-transp': privacy !== 3}\" >\r\n              <div class=\"icon-wrap\">\r\n                <i class=\"trav-lock-icon\"></i>\r\n              </div>\r\n              <div class=\"btn-text\">\r\n                <div class=\"ttl\">Private</div>\r\n                <div class=\"sub-ttl\">Visible only to me</div>\r\n              </div>\r\n              <input type=\"radio\" [value]=\"3\"  formControlName=\"privacy\" >\r\n            </button>\r\n          </div>\r\n          <div class=\"error-layer\">\r\n            <p class=\"sub-ttl error-message text-center\" *ngIf=\"formErrors.title\">{{formErrors.title}}</p>\r\n            <p class=\"sub-ttl error-messagetext-center\" *ngIf=\"error$ | async\">{{(error$ | async)}}</p>\r\n            <p class=\"sub-ttl error-message text-center\" *ngIf=\"formErrors.date\">{{formErrors.date}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/trip-planner/modals/create-trip-plan-modal/create-trip-plan-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/trip-planner/modals/create-trip-plan-modal/create-trip-plan-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTripPlanModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__ = __webpack_require__("./src/app/trip-planner/actions/trip-planner.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_validation__ = __webpack_require__("./src/app/core/services/validation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_reducers__ = __webpack_require__("./src/app/core/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__country_services_country_service__ = __webpack_require__("./src/app/country/services/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateTripPlanModalComponent = /** @class */ (function () {
    /**
     * Default constructor
     * @param store
     * @param fb
     */
    function CreateTripPlanModalComponent(store, fb, route, validation, countryService) {
        this.store = store;
        this.fb = fb;
        this.route = route;
        this.validation = validation;
        this.countryService = countryService;
        this.privacy = 1;
        this.formErrors = {
            title: '',
            date: ''
        };
        this.myDatePickerOptions = {
            dateFormat: 'dd mmm yyyy'
        };
    }
    CreateTripPlanModalComponent.prototype.ngOnInit = function () {
        // console.log('SNAPSHOT', this.route.snapshot.queryParamMap.get('city'));
        this.cityName = this.route.snapshot.queryParamMap.get('city') ?
            this.route.snapshot.queryParamMap.get('city') : '';
        this.error$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__core_reducers__["k" /* getErrorFromServer */]);
        this.form = this.fb.group({
            title: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].maxLength(255)
                ]],
            date: [null, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
                ]],
            privacy: this.privacy
        });
    };
    /**
     * Next step button clicked
     */
    CreateTripPlanModalComponent.prototype.submit = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_trip_planner_actions__["m" /* CreateTripAction */](__assign({ user_id: 1, cityName: this.cityName }, this.form.value, { date: this.form.get('date').value.jsdate })));
    };
    CreateTripPlanModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-trip-plan-modal',
            template: __webpack_require__("./src/app/trip-planner/modals/create-trip-plan-modal/create-trip-plan-modal.component.html"),
            styles: [__webpack_require__("./src/app/trip-planner/modals/create-trip-plan-modal/create-trip-plan-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__core_services_validation__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_6__country_services_country_service__["a" /* CountryService */]])
    ], CreateTripPlanModalComponent);
    return CreateTripPlanModalComponent;
}());



/***/ }),

/***/ "./src/app/trip-planner/reducers/trip-planner.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export INIT_STATE */
/* harmony export (immutable) */ __webpack_exports__["d"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getTripId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCitiesInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAlreadySpent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_trip_planner_actions__ = __webpack_require__("./src/app/trip-planner/actions/trip-planner.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_immutable_helper_service__ = __webpack_require__("./src/app/core/services/immutable-helper.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var helper = new __WEBPACK_IMPORTED_MODULE_1__core_services_immutable_helper_service__["a" /* ImmutableHelperService */]();
var INIT_STATE = {
    trip_id: null,
    cityName: '',
    citiesInfo: {
        activeCity: {},
        cities: []
    },
    alreadySpend: 0
};
/**
 * Exports reducing function
 * @param state
 * @param action
 */
function reducer(state, action) {
    if (state === void 0) { state = INIT_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_trip_planner_actions__["j" /* CREATE_TRIP */]:
            return __assign({}, state, { cityName: action.payload.cityName });
        case __WEBPACK_IMPORTED_MODULE_0__actions_trip_planner_actions__["k" /* CREATE_TRIP_SUCCESS */]:
            return __assign({}, state, { trip_id: action.payload.data.trip_id });
        case __WEBPACK_IMPORTED_MODULE_0__actions_trip_planner_actions__["C" /* SET_CITY_INFO */]:
            return __assign({}, state, { citiesInfo: action.payload, alreadySpend: 0 });
        case __WEBPACK_IMPORTED_MODULE_0__actions_trip_planner_actions__["b" /* ADD_CITY_SUCCESS */]:
            return __assign({}, state, { citiesInfo: __assign({}, state.citiesInfo, { activeCity: action.payload.res, cities: helper.pushItem(state.citiesInfo.cities, action.payload.res) }) });
        case __WEBPACK_IMPORTED_MODULE_0__actions_trip_planner_actions__["d" /* ADD_PLACE_SUCCESS */]:
            return __assign({}, state, { citiesInfo: __assign({}, state.citiesInfo, { cities: helper.replaceItem(state.citiesInfo.cities, action.payload.res.helper) }) });
        case __WEBPACK_IMPORTED_MODULE_0__actions_trip_planner_actions__["x" /* SAVE_CITY_SUCCESS */]:
            return __assign({}, state, { citiesInfo: __assign({}, state.citiesInfo, { cities: helper.setItemProperty(state.citiesInfo.cities, action.payload.helper) }) });
        case __WEBPACK_IMPORTED_MODULE_0__actions_trip_planner_actions__["p" /* DELETE_CITY_SUCCESS */]:
            return __assign({}, state, { citiesInfo: __assign({}, state.citiesInfo, { cities: helper.removeItem(state.citiesInfo.cities, action.payload.helper) }) });
        case __WEBPACK_IMPORTED_MODULE_0__actions_trip_planner_actions__["B" /* SET_ACTIVE_CITY */]:
            return __assign({}, state, { citiesInfo: __assign({}, state.citiesInfo, { activeCity: action.payload }) });
        case __WEBPACK_IMPORTED_MODULE_0__actions_trip_planner_actions__["z" /* SAVE_PLACE_SUCCESS */]:
            return __assign({}, state, { alreadySpend: state.alreadySpend + +action.payload.data.budget, citiesInfo: __assign({}, state.citiesInfo, { cities: helper.replaceItem(state.citiesInfo.cities, action.payload.helper) }) });
        case __WEBPACK_IMPORTED_MODULE_0__actions_trip_planner_actions__["r" /* DELETE_PLACE_SUCCESS */]:
            return __assign({}, state, { citiesInfo: __assign({}, state.citiesInfo, { cities: helper.replaceItem(state.citiesInfo.cities, action.payload.helper) }) });
        default:
            return state;
    }
}
var getTripId = function (state) { return state.trip_id; };
var getCitiesInfo = function (state) { return state.citiesInfo; };
var getAlreadySpent = function (state) { return state.alreadySpend; };


/***/ }),

/***/ "./src/app/trip-planner/services/trip-info-resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripInfoResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trip_planner_service__ = __webpack_require__("./src/app/trip-planner/services/trip-planner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripInfoResolver = /** @class */ (function () {
    function TripInfoResolver(tripService) {
        this.tripService = tripService;
    }
    TripInfoResolver.prototype.resolve = function (route) {
        return this.tripService.getPlacesInfo(route.paramMap.get('id'));
    };
    TripInfoResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__trip_planner_service__["a" /* TripPlannerService */]])
    ], TripInfoResolver);
    return TripInfoResolver;
}());



/***/ }),

/***/ "./src/app/trip-planner/services/trip-planner.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripPlannerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_api_service__ = __webpack_require__("./src/app/core/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripPlannerService = /** @class */ (function () {
    function TripPlannerService(api) {
        this.api = api;
    }
    /**
     * Create trip plan step - 1
     * @param details
     */
    TripPlannerService.prototype.createTrip = function (details) {
        return this.api.post('trips/new', details);
    };
    /**
     * Create trip plan - step 2 city search
     * @param query
     */
    TripPlannerService.prototype.getCities = function (query) {
        var details = { query: query, language_id: 1, offset: 0, limit: 10 };
        return this.api.post('cities/search', details);
    };
    TripPlannerService.prototype.getPlaces = function (query, id) {
        var details = { query: query, language_id: 1, offset: 0, limit: 10, city_id: id };
        return this.api.post('places/search', details);
    };
    TripPlannerService.prototype.getPlacesInfo = function (tripId) {
        return this.api.get("trips/" + tripId + "/places?language_id=1");
    };
    TripPlannerService.prototype.saveCityInfo = function (url, details) {
        return this.api.post(url, details);
    };
    TripPlannerService.prototype.savePlaceInfo = function (url, details) {
        return this.api.post(url, details);
    };
    TripPlannerService.prototype.removeCityInfo = function (url, details) {
        return this.api.post(url, details);
    };
    TripPlannerService.prototype.removePlaceInfo = function (url, details) {
        return this.api.post(url, details);
    };
    TripPlannerService.prototype.publishTrip = function (url, details) {
        return this.api.post(url, details);
    };
    TripPlannerService.prototype.cancelTrip = function (url, details) {
        return this.api.post(url, details);
    };
    /**
     * Create trip plan - step 2 submit
     * @param tripId
     * @param details
     */
    TripPlannerService.prototype.addCity = function (tripId, details) {
        return this.api.post("trips/" + tripId + "/add_city", { city_id: details.id, order: details.order });
    };
    /**
     * Create trip plan - step 3
     * @param tripId
     * @param details
     */
    TripPlannerService.prototype.addPlace = function (tripId, details) {
        return this.api.post("trips/" + tripId + "/add_place", details);
    };
    TripPlannerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_api_service__["a" /* ApiService */]])
    ], TripPlannerService);
    return TripPlannerService;
}());



/***/ }),

/***/ "./src/app/trip-planner/trip-planner.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/trip-planner/trip-planner.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/trip-planner/trip-planner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripPlannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TripPlannerComponent = /** @class */ (function () {
    function TripPlannerComponent() {
    }
    TripPlannerComponent.prototype.ngOnInit = function () {
    };
    TripPlannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trip-planner',
            template: __webpack_require__("./src/app/trip-planner/trip-planner.component.html"),
            styles: [__webpack_require__("./src/app/trip-planner/trip-planner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TripPlannerComponent);
    return TripPlannerComponent;
}());



/***/ }),

/***/ "./src/app/trip-planner/trip-planner.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripPlannerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trip_planner_component__ = __webpack_require__("./src/app/trip-planner/trip-planner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_create_trip_plan_modal_create_trip_plan_modal_component__ = __webpack_require__("./src/app/trip-planner/modals/create-trip-plan-modal/create-trip-plan-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_add_city_to_trip_modal_add_city_to_trip_modal_component__ = __webpack_require__("./src/app/trip-planner/modals/add-city-to-trip-modal/add-city-to-trip-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modals_add_place_to_trip_modal_add_place_to_trip_modal_component__ = __webpack_require__("./src/app/trip-planner/modals/add-place-to-trip-modal/add-place-to-trip-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_trip_planner_service__ = __webpack_require__("./src/app/trip-planner/services/trip-planner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_trip_planner_info_trip_planner_info_component__ = __webpack_require__("./src/app/trip-planner/components/trip-planner-info/trip-planner-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_dnd__ = __webpack_require__("./node_modules/ng2-dnd/ng2-dnd.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_amazing_time_picker__ = __webpack_require__("./node_modules/amazing-time-picker/amazing-time-picker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_trip_info_resolver__ = __webpack_require__("./src/app/trip-planner/services/trip-info-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_components_modals_confirm_confirm_component__ = __webpack_require__("./src/app/core/components/modals/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_agm_direction__ = __webpack_require__("./node_modules/agm-direction/agm-direction.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_agm_direction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_agm_direction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_city_arrive_box_city_arrive_box_component__ = __webpack_require__("./src/app/trip-planner/components/city-arrive-box/city-arrive-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_place_details_box_place_details_box_component__ = __webpack_require__("./src/app/trip-planner/components/place-details-box/place-details-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_completed_place_box_completed_place_box_component__ = __webpack_require__("./src/app/trip-planner/components/completed-place-box/completed-place-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_trip_planner_map_trip_planner_map_component__ = __webpack_require__("./src/app/trip-planner/components/trip-planner-map/trip-planner-map.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var TripPlannerModule = /** @class */ (function () {
    function TripPlannerModule() {
    }
    TripPlannerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_9__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_11_ng2_dnd__["a" /* DndModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_amazing_time_picker__["a" /* AmazingTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_15_agm_direction__["AgmDirectionModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__trip_planner_component__["a" /* TripPlannerComponent */],
                __WEBPACK_IMPORTED_MODULE_3__modals_create_trip_plan_modal_create_trip_plan_modal_component__["a" /* CreateTripPlanModalComponent */],
                __WEBPACK_IMPORTED_MODULE_4__modals_add_city_to_trip_modal_add_city_to_trip_modal_component__["a" /* AddCityToTripModalComponent */],
                __WEBPACK_IMPORTED_MODULE_5__modals_add_place_to_trip_modal_add_place_to_trip_modal_component__["a" /* AddPlaceToTripModalComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_trip_planner_info_trip_planner_info_component__["a" /* TripPlannerInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_city_arrive_box_city_arrive_box_component__["a" /* CityArriveBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_place_details_box_place_details_box_component__["a" /* PlaceDetailsBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_completed_place_box_completed_place_box_component__["a" /* CompletedPlaceBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_trip_planner_map_trip_planner_map_component__["a" /* TripPlannerMapComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_trip_planner_service__["a" /* TripPlannerService */],
                __WEBPACK_IMPORTED_MODULE_13__services_trip_info_resolver__["a" /* TripInfoResolver */],
                __WEBPACK_IMPORTED_MODULE_3__modals_create_trip_plan_modal_create_trip_plan_modal_component__["a" /* CreateTripPlanModalComponent */],
                __WEBPACK_IMPORTED_MODULE_4__modals_add_city_to_trip_modal_add_city_to_trip_modal_component__["a" /* AddCityToTripModalComponent */],
                __WEBPACK_IMPORTED_MODULE_5__modals_add_place_to_trip_modal_add_place_to_trip_modal_component__["a" /* AddPlaceToTripModalComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__modals_create_trip_plan_modal_create_trip_plan_modal_component__["a" /* CreateTripPlanModalComponent */],
                __WEBPACK_IMPORTED_MODULE_4__modals_add_city_to_trip_modal_add_city_to_trip_modal_component__["a" /* AddCityToTripModalComponent */],
                __WEBPACK_IMPORTED_MODULE_5__modals_add_place_to_trip_modal_add_place_to_trip_modal_component__["a" /* AddPlaceToTripModalComponent */],
                __WEBPACK_IMPORTED_MODULE_14__core_components_modals_confirm_confirm_component__["a" /* ConfirmComponent */]
            ]
        })
    ], TripPlannerModule);
    return TripPlannerModule;
}());



/***/ }),

/***/ "./src/app/trip-planner/trip-planner.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripPlannerRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trip_planner_component__ = __webpack_require__("./src/app/trip-planner/trip-planner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_trip_planner_info_trip_planner_info_component__ = __webpack_require__("./src/app/trip-planner/components/trip-planner-info/trip-planner-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_info_resolver__ = __webpack_require__("./src/app/trip-planner/services/trip-info-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_create_trip_plan_modal_create_trip_plan_modal_component__ = __webpack_require__("./src/app/trip-planner/modals/create-trip-plan-modal/create-trip-plan-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_add_city_to_trip_modal_add_city_to_trip_modal_component__ = __webpack_require__("./src/app/trip-planner/modals/add-city-to-trip-modal/add-city-to-trip-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modals_add_place_to_trip_modal_add_place_to_trip_modal_component__ = __webpack_require__("./src/app/trip-planner/modals/add-place-to-trip-modal/add-place-to-trip-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_guards_can_activate_guard__ = __webpack_require__("./src/app/auth/guards/can-activate.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_components_modal_wrapper_modal_wrapper_component__ = __webpack_require__("./src/app/core/components/modal-wrapper/modal-wrapper.component.ts");








var TripPlannerRoutes = [
    {
        path: 'trip',
        component: __WEBPACK_IMPORTED_MODULE_0__trip_planner_component__["a" /* TripPlannerComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guards_can_activate_guard__["a" /* AuthGuard */]],
        children: [
            {
                path: 'new',
                component: __WEBPACK_IMPORTED_MODULE_7__core_components_modal_wrapper_modal_wrapper_component__["a" /* ModalWrapperComponent */],
                data: { modal: __WEBPACK_IMPORTED_MODULE_3__modals_create_trip_plan_modal_create_trip_plan_modal_component__["a" /* CreateTripPlanModalComponent */] }
            },
            {
                path: ':id/cities',
                component: __WEBPACK_IMPORTED_MODULE_7__core_components_modal_wrapper_modal_wrapper_component__["a" /* ModalWrapperComponent */],
                data: { modal: __WEBPACK_IMPORTED_MODULE_4__modals_add_city_to_trip_modal_add_city_to_trip_modal_component__["a" /* AddCityToTripModalComponent */] }
            },
            {
                path: ':id/places',
                component: __WEBPACK_IMPORTED_MODULE_7__core_components_modal_wrapper_modal_wrapper_component__["a" /* ModalWrapperComponent */],
                data: { modal: __WEBPACK_IMPORTED_MODULE_5__modals_add_place_to_trip_modal_add_place_to_trip_modal_component__["a" /* AddPlaceToTripModalComponent */] }
            },
            {
                path: ':id/info',
                component: __WEBPACK_IMPORTED_MODULE_1__components_trip_planner_info_trip_planner_info_component__["a" /* TripPlannerInfoComponent */],
                resolve: { placesInfo: __WEBPACK_IMPORTED_MODULE_2__services_trip_info_resolver__["a" /* TripInfoResolver */] }
            }
        ],
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://uat.travooo.com/api/'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map