"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var remoteConfig = (0, zod_1.object)({
    _404: (0, zod_1.boolean)(),
    adminCallbacks: (0, zod_1.boolean)(),
    adminDeliveryTypes: (0, zod_1.boolean)(),
    adminIcons: (0, zod_1.boolean)(),
    adminLabels: (0, zod_1.boolean)(),
    adminMolds: (0, zod_1.boolean)(),
    adminOrders: (0, zod_1.boolean)(),
    adminPaymentTypes: (0, zod_1.boolean)(),
    adminMarketing: (0, zod_1.boolean)(),
    cart: (0, zod_1.boolean)(),
    checkoutDelivery: (0, zod_1.boolean)(),
    checkoutDetails: (0, zod_1.boolean)(),
    checkoutPayment: (0, zod_1.boolean)(),
    checkoutResult: (0, zod_1.boolean)(),
    christmas2021: (0, zod_1.boolean)(),
    christmas: (0, zod_1.boolean)(),
    companyOffer: (0, zod_1.boolean)(),
    contact: (0, zod_1.boolean)(),
    customer: (0, zod_1.boolean)(),
    deliveryAndPayments: (0, zod_1.boolean)(),
    documents: (0, zod_1.boolean)(),
    home: (0, zod_1.boolean)(),
    howToCreateOrder: (0, zod_1.boolean)(),
    order: (0, zod_1.boolean)(),
    products: (0, zod_1.boolean)(),
    signIn: (0, zod_1.boolean)(),
    signUp: (0, zod_1.boolean)(),
    signedOut: (0, zod_1.boolean)(),
    valentinesDay: (0, zod_1.boolean)(),
    viewProduct: (0, zod_1.boolean)(),
    // HOME
    homeFeaturedCount: (0, zod_1.number)(),
    homeBestsellersDisplay: (0, zod_1.boolean)(),
    homeFeaturedDisplay: (0, zod_1.boolean)(),
    homeCatalogueDisplay: (0, zod_1.boolean)(),
    homeValentinesDayOrder: (0, zod_1.number)(),
    homeFeaturedOrder: (0, zod_1.number)(),
    homeCatalogueOrder: (0, zod_1.number)(),
    homeBestsellersOrder: (0, zod_1.number)(),
    // DATA
    catalogue_cover: (0, zod_1.string)(),
    catalogue_link: (0, zod_1.string)(),
    // REST
    snow: (0, zod_1.boolean)(),
    i18n: (0, zod_1.boolean)(),
    vouchers: (0, zod_1.boolean)()
});
exports.default = remoteConfig;
