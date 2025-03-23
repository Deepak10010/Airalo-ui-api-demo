"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const tokenHelper_1 = require("./tokenHelper");
(0, test_1.test)('POST Order for 6 merhaba-7days-1gb eSIMs', async () => {
    const token = await (0, tokenHelper_1.getAuthToken)();
    const requestContext = await test_1.request.newContext({
        baseURL: process.env.BASE_URL,
        extraHTTPHeaders: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    const payload = {
        package_slug: "merhaba-7days-1gb",
        quantity: 6
    };
    const response = await requestContext.post('/v1/esim-orders', { data: payload });
    (0, test_1.expect)(response.status()).toBe(200); // or 201, depending on actual API response
    const responseBody = await response.json();
    console.log(responseBody);
    (0, test_1.expect)(responseBody).toHaveProperty('order_id');
    (0, test_1.expect)(responseBody.quantity).toBe(6);
    (0, test_1.expect)(responseBody.package_slug).toBe('merhaba-7days-1gb');
});
