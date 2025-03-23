import { Page, expect } from '@playwright/test';
import { AiraloLocators } from '../locators/AiraloLocators';

export class AiraloPage {
  constructor(private page: Page) {}

  async navigateToHome() {
    await this.page.goto('https://www.airalo.com');
  }

  async searchForCountry(country: string) {
    await this.page.click(AiraloLocators.searchInput);
    await this.page.fill(AiraloLocators.searchInput, country);
  }

  async selectJapanFromSuggestions() {
    await this.page.getByRole('listitem').filter({ hasText: 'Japan' }).click();
  }
  

//   async clickBuyNowOnMoshiMoshiCardWithText() {
//     const moshiMoshiCard = this.page
//       .getByRole('link', {
//         name: /Moshi Moshi.*COVERAGE.*Japan.*DATA.*1 GB.*VALIDITY.*7 Days.*PRICE/i,
//       })
//       .getByRole('button', { name: /Buy Now/i });
  
//     await moshiMoshiCard.waitFor({ state: 'visible', timeout: 5000 });
//     await moshiMoshiCard.click();
//   }
  
  


async clickBuyNowOnCard() {
    const firstBuyNowButton = this.page.locator('//button[contains(translate(., "buy now", "BUY NOW"), "BUY NOW")]').first();
    await firstBuyNowButton.scrollIntoViewIfNeeded();
    await firstBuyNowButton.click();
  }
  

  async verifyPopupDetails({
    title,
    coverage,
    data,
    validity,
    price
  }: {
    title: string;
    coverage: string;
    data: string;
    validity: string;
    price: string;
  }) {
    const popup = this.page.locator('[data-testid="sim-detail-header"]');
  
    // Wait up to 10s for the popup to appear
    await popup.waitFor({ state: 'visible', timeout: 10000 });
  
    // Title
    const titleLocator = popup.locator('[data-testid="sim-detail-operator-title"] p');
    await titleLocator.waitFor({ timeout: 5000 });
    await expect(titleLocator).toHaveText(title);
  
    // Coverage
    const coverageLocator = popup.locator('//p[@data-testid="COVERAGE-value"]');
    await expect(coverageLocator.first()).toHaveText(coverage);
  
    // Data
    const dataLocator = popup.locator('//p[@data-testid="DATA-value"]');
    await expect(dataLocator.first()).toHaveText(data);
  
    // Validity
    const validityLocator = popup.locator('//p[@data-testid="VALIDITY-value"]');
    await expect(validityLocator.first()).toHaveText(validity);
  
    // Price (use containsText for € cases)
    const priceLocator = popup.locator('//p[@data-testid="PRICE-value"]');
    await expect(priceLocator.first()).toContainText(price);
  }
  
  
}
