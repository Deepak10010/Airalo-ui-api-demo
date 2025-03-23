"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthToken = getAuthToken;
const dotenv = __importStar(require("dotenv"));
const test_1 = require("@playwright/test");
dotenv.config();
async function getAuthToken() {
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const baseUrl = process.env.BASE_URL;
    if (!clientId || !clientSecret || !baseUrl) {
        throw new Error("Missing CLIENT_ID, CLIENT_SECRET, or BASE_URL in .env");
    }
    const requestContext = await test_1.request.newContext();
    const response = await requestContext.post(`${baseUrl}/v1/oauth2/token`, {
        form: {
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: clientSecret
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    if (response.ok()) {
        const body = await response.json();
        return body.access_token;
    }
    else {
        throw new Error(`Failed to get token: ${response.status()} - ${await response.text()}`);
    }
}
