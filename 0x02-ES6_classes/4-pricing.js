// Implement a class currency with attributes amount and currency
export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._curency = currency;
  }

  get amount() {
    return this._amount;
  }

  // Set the amount
  set amount(amount) {
    this._amount = amount;
  }

  // Get the currency
  get currency() {
    return this._currency;
  }

  // Set the currency
  set currency(currency) {
    this._currency = currency;
  }

  // Showing the full price
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
