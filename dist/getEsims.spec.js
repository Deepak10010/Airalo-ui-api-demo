"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const tokenHelper_1 = require("./tokenHelper");
(0, test_1.test)('GET eSIMs and validate the list contains 6 correct eSIMs', async () => {
    const token = await (0, tokenHelper_1.getAuthToken)();
    const requestContext = await test_1.request.newContext({
        baseURL: process.env.BASE_URL,
        extraHTTPHeaders: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    const response = await requestContext.get('/v1/esims');
    (0, test_1.expect)(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
    (0, test_1.expect)(Array.isArray(responseBody)).toBe(true);
    (0, test_1.expect)(responseBody.length).toBe(6);
    for (const esim of responseBody) {
        (0, test_1.expect)(esim.package_slug).toBe('merhaba-7days-1gb');
    }
});
