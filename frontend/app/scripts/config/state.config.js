'use strict';

module.exports = function ($stateProvider, $urlRouterProvider, $httpProvider) {

	$urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/index/index.html',
            controller: 'MainCtrl'
        })
        .state('category', {
            url: '/category/:categoryId',
            templateUrl: 'views/catalogue/category.html',
            controller: 'CategoryCtrl'
        })
        .state('product', {
            url: '/product/:productId',
            templateUrl: 'views/product/product.html',
            controller: 'ProductCtrl'
        })
        .state('auth', {
            url: '/auth',
            templateUrl: 'views/auth/auth.html',
            controller: 'AuthCtrl'
        })
        .state('auth.login', {
            url: '/login',
            templateUrl: 'views/auth/_login.html'
        })
        .state('auth.register', {
            url: '/register',
            templateUrl: 'views/auth/_register.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .state('account', {
            // TODO abstract true
            //url: '/secure/account',
            templateUrl: 'views/account/layout.html'
        })
        .state('account.dashboard', {
            url: '/secure/account',
            templateUrl: 'views/account/dashboard.html',
            controller: 'AccountDetailsCtrl'
        })
        .state('account.details', {
            url: '/secure/account/customer',
            templateUrl: 'views/account/customer/index.html',
            controller: 'CustomerDetailsCtrl'
        })
        .state('account.orders', {
            url: '/secure/account/orders',
            templateUrl: 'views/account/orders.html'
        })
        .state('account.addressbook', {
            url: '/secure/account/addressbook',
            templateUrl: 'views/account/addressbook.html',
            controller: 'AddressBookCtrl'
        })
        .state('account.addressbooknew', {
            url: '/secure/account/addressbook/new',
            templateUrl: 'views/account/createAddress.html',
            controller: 'AddressBookCtrl'
        })
        .state('account.addressbookedit', {
            url: '/secure/account/addressbook/:addressId/edit',
            templateUrl: 'views/account/editAddress.html',
            controller: 'AddressBookCtrl'
        })
        .state('basket', {
            url: '/basket',
            templateUrl: 'views/basket/basket.html'
        })
        .state('checkout', {
            abstract: true,
            url: '/checkout',
            //template: '<ui-view/>'
            templateUrl: 'views/checkout/layout.html'
        })
        .state('checkout.delivery', {
            url: '/delivery',
            templateUrl: 'views/checkout/delivery.html',
            controller: 'DeliveryAddressCtrl',
            onEnter: function () {
                // if not logged in
                // $state.go('auth.login', {'forward': 'checkout.delivery'});
            }
        })
        .state('checkout.billing', {
            url: '/billing',
            templateUrl: 'views/checkout/billing.html',
            controller: 'BillingAddressCtrl',
            //params: {addressId: null}
            // controller: function () {
            //     // $state.go('auth.login', {'forward': 'checkout.delivery'});
            // }
        })
        .state('checkout.payment', {
            url: '/payment',
            templateUrl: 'views/checkout/payment.html',
            controller: 'PaymentCtrl'
        })
        .state('checkout.confirmation', {
            url: '/order-confirmation',
            templateUrl: 'views/checkout/order-confirmation'
        })
        .state('styleguide', {
            //url: '/styleguide',
            templateUrl: 'views/styleguide/layout.html',
            controller: 'StyleguideCtrl'
        })
        .state('styleguide.buttons', {
            url: '/styleguide/buttons',
            templateUrl: 'views/styleguide/buttons.html'
        })
        .state('styleguide.colours', {
            url: '/styleguide/colours',
            templateUrl: 'views/styleguide/colours.html'
        })
        .state('styleguide.feedback', {
            url: '/styleguide/feedback',
            templateUrl: 'views/styleguide/feedback.html'
        })
        .state('styleguide.forms', {
            url: '/styleguide/forms',
            templateUrl: 'views/styleguide/forms.html'
        })
        .state('styleguide.grids', {
            url: '/styleguide/grids',
            templateUrl: 'views/styleguide/grids.html'
        })
        .state('styleguide.helpers', {
            url: '/styleguide/helpers',
            templateUrl: 'views/styleguide/helpers.html'
        })
        .state('styleguide.layout', {
            url: '/styleguide/layout',
            templateUrl: 'views/styleguide/layout.html'
        })
        .state('styleguide.lists', {
            url: '/styleguide/lists',
            templateUrl: 'views/styleguide/lists.html'
        })
        .state('styleguide.navigation', {
            url: '/styleguide/navigation',
            templateUrl: 'views/styleguide/navigation.html'
        })
        .state('styleguide.tables', {
            url: '/styleguide/tables',
            templateUrl: 'views/styleguide/tables.html'
        })
        .state('styleguide.typography', {
            url: '/styleguide/typography',
            templateUrl: 'views/styleguide/typography.html'
        });

    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    $httpProvider.interceptors.push('csrfService');
};