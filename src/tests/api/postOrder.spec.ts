import { test, expect, request } from '@playwright/test';
import { getAuthToken } from './tokenHelper';
import { orderTestData } from './pojos/orderTestData';

test('Submit Order for kallur-digital-7days-1gb eSIM', async () => {
  const token = await getAuthToken();

  const requestContext = await request.newContext({
    baseURL: process.env.BASE_URL,
    extraHTTPHeaders: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json'
    }
  });

  const response = await requestContext.post('/v2/orders', {
    multipart: orderTestData.validOrder
  });

  const responseBody = await response.json();
  console.log('📦 Order Response:', responseBody);

  expect(response.status()).toBe(200);
  expect(responseBody).toHaveProperty('data');
  //expect(responseBody.data).toHaveProperty('brand_settings_name', 'our perfect brand');
});
