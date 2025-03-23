export const AiraloLocators = {
    searchInput: "//div[@class='inp-search-container']//input[@data-testid='search-input']",
  
    japanFromLocal:
      '//div[contains(@class, "search-suggestions")]//div[text()="Local"]/following-sibling::div//li[contains(.,"Japan")]',  
  
    paidMoshiMoshiBuyNowButton:
      "//p[@data-testid='operator-title' and contains(., 'Moshi Moshi')]" +
      "/ancestor::div[contains(@class, 'sim-item') and not(.//div[@data-testid='freemium-header'])]" +
      "//button[contains(., 'Buy Now')]",

    popupTitle: "//div[@data-testid='sim-detail-operator-title']//p[text()='Moshi Moshi']",
    popupCoverage: "//p[@data-testid='COVERAGE-value']",
    popupData: "//p[@data-testid='DATA-value']",
    popupValidity: "//p[@data-testid='VALIDITY-value']",
    popupPrice: "//p[@data-testid='PRICE-value']"
  };
  