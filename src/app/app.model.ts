export interface User {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  age: number;
  gender: string;
  address: Address;
  phone: string;
  isActive: boolean;
  registered: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface StockMarketPrice {
  symbol: string; // Stock symbol (e.g., AAPL for Apple Inc.)
  companyName: string; // Company name
  currentPrice: number; // Current price of the stock
  openPrice: number; // Opening price of the stock for the day
  closePrice: number; // Closing price of the stock for the previous day
  high: number; // Highest price of the stock for the day
  low: number; // Lowest price of the stock for the day
  volume: number; // Number of shares traded
  date: string; // Date of the stock data (in YYYY-MM-DD format)
}

export interface Chat {
  id: string;
  text: string;
  user: string;
}
