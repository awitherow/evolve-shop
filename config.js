const config = {
  stripe: {
    apiKey: "INSERT STRIPE PUBLISHABLE KEY",
    checkoutUrl: "INSERT AWS LAMBDA ENDPOINT FOR CHARGES",
    productsUrl: "INSERT AWS LAMBDA ENDPOINT FOR PRODUCTS",
    currency: "EUR"
  }
};

export default config;
