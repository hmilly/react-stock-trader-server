let companyStock = [
  { id: 1, stockName: "Amazon", tag: "AMZN", currentPrice: 0 },
  { id: 2, stockName: "Disney", tag: "DIS", currentPrice: 0 },
  { id: 3, stockName: "Sony", tag: "SONY", currentPrice: 0 },
  { id: 4, stockName: "Tesla", tag: "TSLA", currentPrice: 0 },
  { id: 5, stockName: "Walmart", tag: "WMT", currentPrice: 0 },
]

const defaultUser = {
  name: "",
  balance: 5000,
  transactions: [
    {
      shareName: "Amazon",
      priceOnPurchase: 0,
      priceOnSell: null,
      quantity: 0
    },
    {
      shareName: "Disney",
      priceOnPurchase: 0,
      priceOnSell: null,
      quantity: 0
    },
    {
      shareName: "Sony",
      priceOnPurchase: 0,
      priceOnSell: null,
      quantity: 0
    },
    {
      shareName: "Tesla",
      priceOnPurchase: 0,
      priceOnSell: null,
      quantity: 0
    },
    {
      shareName: "Walmart",
      priceOnPurchase: 0,
      priceOnSell: null,
      quantity: 0
    }
  ]
}

const user = {
  name: "",
  balance: 5000,
  transactions: [
    {
      shareName: "Amazon",
      priceOnPurchase: 0,
      priceOnSell: null,
      quantity: 0
    },
    {
      shareName: "Disney",
      priceOnPurchase: 0,
      priceOnSell: null,
      quantity: 0
    },
    {
      shareName: "Sony",
      priceOnPurchase: 0,
      priceOnSell: null,
      quantity: 0
    },
    {
      shareName: "Tesla",
      priceOnPurchase: 0,
      priceOnSell: null,
      quantity: 0
    },
    {
      shareName: "Walmart",
      priceOnPurchase: 0,
      priceOnSell: null,
      quantity: 0
    }
  ]
}



module.exports = {
  companyStock,
  defaultUser,
  user
}
