'use strict';

//var jQuery = require('jquery');
window.jQuery = window.$ = require('jquery');

//var jQuery = require('jquery'),
var angular = require('angular'),
    ngAnimate = require('angular-animate'),
    ngAria = require('angular-aria'),
    ngCookies = require('angular-cookies'),
    ngResource = require('angular-resource'),
    ngSanitize = require('angular-sanitize'),
    ngTouch = require('angular-touch'),
    ngMessages = require('angular-messages'),
    ngRoute = require('angular-route'),
    uiRouter = require('angular-ui-router'),
    stateConfig = require('./config/state.config'),
    constants = require('./config/constants.config'),
    compareToDirective = require('./directives/compare-to.directive'),
    includeReplaceDirective = require('./directives/include-replace.directive'),
    toggleClassDirective = require('./directives/toggle-class.directive'),
    fieldsetCustomerDirective = require('./directives/fieldset-customer.directive'),
    fieldsetAddressDirective = require('./directives/fieldset-address.directive'),
    fieldsetEmailDirective = require('./directives/fieldset-email.directive'),
    responsiveAccordion = require('./directives/responsive-accordion'),
    wallopSliderDirective = require('./directives/wallop.directive'),
    csrfService = require('./services/csrf.service'),
    catalogueService = require('./services/catalogue.service'),
    scrollFactory = require('./services/scroll.factory'),
    addressService = require('./services/address.service'),
    basketService = require('./services/basket.service'),
    accountService = require('./services/account.service'),
    paymentService = require('./services/payment.service'),
    AccountDetailsController = require('./controllers/account-details.controller'),
    AddressBookController = require('./controllers/addressbook.controller'),
    AuthController = require('./controllers/auth.controller'),
    BasketController = require('./controllers/basket.controller'),
    CategoryController = require('./controllers/category.controller'),
    CheckoutDeliveryController = require('./controllers/checkout-delivery.controller'),
    CheckoutBillingController = require('./controllers/checkout-billing.controller'),
    PaymentController = require('./controllers/payment.controller'),
    FeedbackController = require('./controllers/feedback.controller'),
    HeaderController = require('./controllers/header.controller'),
    MainController = require('./controllers/main.controller'),
    ProductController = require('./controllers/product.controller'),
    SessionStatusController = require('./controllers/session-status.controller'),
    StyleguideController = require('./controllers/styleguide.controller'),
    NotifierController = require('./controllers/notifier.controller');


angular
    .module('rockstars', [ngAnimate, ngAria, ngCookies, ngResource, ngSanitize, ngTouch, ngMessages, ngRoute, uiRouter])
        .config(stateConfig)
        .constant('SALUTATIONS', constants.SALUTATIONS)
        .directive('compareTo', compareToDirective)
        .directive('includeReplace', includeReplaceDirective)
        .directive('toggleClass', toggleClassDirective)
        .directive('fieldsetCustomer', fieldsetCustomerDirective)
        .directive('fieldsetAddress', fieldsetAddressDirective)
        .directive('responsiveAccordion', responsiveAccordion)
        .directive('fieldsetEmail', fieldsetEmailDirective)
        .directive('wallopSlider', wallopSliderDirective)
        .factory('csrfService', csrfService)
        .factory('scrollFactory', scrollFactory)
        .service('catalogueService', catalogueService)
        .service('addressService', addressService)
        .service('basketService', basketService)
        .service('accountService', accountService)
        .service('paymentService', paymentService)
        .controller('AccountDetailsCtrl', AccountDetailsController)
        .controller('AddressBookCtrl', AddressBookController)
        .controller('AuthCtrl', AuthController)
        .controller('BasketCtrl', BasketController)
        .controller('CategoryCtrl', CategoryController)
        .controller('DeliveryAddressCtrl', CheckoutDeliveryController)
        .controller('BillingAddressCtrl', CheckoutBillingController)
        .controller('PaymentCtrl', PaymentController)
        .controller('FeedbackCtrl', FeedbackController)
        .controller('HeaderCtrl', HeaderController)
        .controller('MainCtrl', MainController)
        .controller('ProductCtrl', ProductController)
        .controller('SessionStatusCtrl', SessionStatusController)
        .controller('StyleguideCtrl', StyleguideController)
        .controller('NotifierCtrl', NotifierController);

