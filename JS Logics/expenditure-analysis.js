var transactions = [
    {
      itemName: "Pepsi", 
      category: "Beverage", 
      price: 20, 
      timestamp: "100"
    },
    {
      itemName: "Coke", 
      category: "Beverage", 
      price: 25, 
      timestamp: "101"
    },
    {
      itemName: "Samosa", 
      category: "Food", 
      price: 15, 
      timestamp: "102"
    },
    {  
      itemName: "Laddoo", 
      category: "Sweet", 
      price: 60, 
      timestamp: "103"
    },
    {  
      itemName: "Mix", 
      category: "Namkeen", 
      price: 100, 
      timestamp: "104"
    }
  ]
  
  function calculateTotalSpentByCategory(transactions) {
    var Expenditure = {};
    for(var i=0;i<transactions.length;i++){
      if(Expenditure[transactions[i].category]){
        Expenditure[transactions[i].category] =  Expenditure[transactions[i].category] + transactions[i].price;
      }else{
        Expenditure[transactions[i].category] = transactions[i].price;
      }
    }
  
    var keys = Object.keys(Expenditure);
    var ExpArray = [];
    for(var i=0;i<keys.length;i++){
      var obj = {
        category: keys[i],
        total_amt: Expenditure[keys[i]]
      }
    ExpArray.push(obj);
    }
    console.log(ExpArray);
  }
  calculateTotalSpentByCategory(transactions);
  
module.exports = calculateTotalSpentByCategory;  