import { test, expect, request } from '@playwright/test';
import { getAuthToken } from './tokenHelper';
import { getEsimsTestData } from './pojos/getEsimsTestData';

test('GET eSIMs from Airalo sandbox API', async () => {
  const token = await getAuthToken();

  const requestContext = await request.newContext({
    baseURL: process.env.BASE_URL,
    extraHTTPHeaders: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json'
    }
  });

  const queryString = `limit=${getEsimsTestData.queryParams.limit}`;
  const response = await requestContext.get(`/v2/sims?${queryString}`);

  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  console.log(responseBody);

  expect(responseBody).toHaveProperty('data');
  expect(Array.isArray(responseBody.data)).toBe(true);
  expect(responseBody.data.length).toBeGreaterThan(0);

  for (const esim of responseBody.data) {
    for (const field of getEsimsTestData.expectedFields) {
      expect(esim).toHaveProperty(field);
    }
  }
});
