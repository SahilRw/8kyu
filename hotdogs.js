// Task:
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

// my solution
function saleHotdogs(n){
  if(n < 5){
    return n * 100
  } else if(n >= 5 && n < 10){
    return n * 95
  } else if (n >= 10){
    return n * 90
  }
}