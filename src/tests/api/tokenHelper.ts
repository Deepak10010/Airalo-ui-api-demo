import * as dotenv from 'dotenv';
import { request } from '@playwright/test';

dotenv.config();

export async function getAuthToken(): Promise<string> {
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  const baseUrl = process.env.BASE_URL;

  if (!clientId || !clientSecret || !baseUrl) {
    throw new Error("Missing CLIENT_ID, CLIENT_SECRET, or BASE_URL in .env");
  }

  const requestContext = await request.newContext();
  const response = await requestContext.post(`${baseUrl}/v2/token`, {
    form: {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  });

  const body = await response.json();
  console.log("🔐 Access Token Response:", body);

  if (response.ok()) {
    return body.data.access_token; // ✅ Make sure you access the nested key properly
  } else {
    throw new Error(`Failed to get token: ${response.status()} - ${await response.text()}`);
  }
}
