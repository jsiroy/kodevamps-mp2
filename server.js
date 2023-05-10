
//////////////////////////TEST VERSION////////////////////////////////////////////////

const express = require('express');
const app = express();
const PORT = 3000;

  let inventoryItem = [
  // {
  //   itemUserName: 'jsiroy',
  //   itemDate: 'May 09, 2023, 2:36 PM',
  //   itemSerial: 1234,
  //   itemCategory: 'Beverage',
  //   itemDescription: '1L Redhorse',
  //   itemQuantity: 20,
  //   itemBuyPrice: 110.5,
  //   itemSellPrice: 135.00,
  //   itemProfit:'s'
  // }
];
let userRegistrationData = [
        //  regBusinessName: 'Bossjo Electronics',
        //  regFirstName: 'Joel',
        //  regLastName: 'Siroy',
        //  regUserName: 'jsiroy',
        //  regEmailAd: 'joel.siroy@gmail.com',
        //  regPassword:'wd57p'
];

app.use(express.json());

////////////////////////////////////////
      // middleware logger
app.use((req, res, next) => {
  const start = Date.now();
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); ///http://127.0.0.1:5500/
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');  
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});
///////////////////////////////////////
// Add new product

app.post('/admin/inventory-management', (req, res) => {
    const { itemUserName, itemDate, itemSerial, itemCategory, itemDescription, itemQuantity, itemBuyPrice, itemSellPrice, itemProfit} = req.body;

    const newItem = {
      itemUserName,
      itemDate,
      itemSerial,
      itemCategory,
      itemDescription,
      itemQuantity,
      itemBuyPrice,
      itemSellPrice,
      itemProfit
    };
  
    inventoryItem.push(newItem);
  
    // Return a success response with the new item
    res.status(201).json({newItem});

  });
  
   app.get('/admin/inventory-management', (req, res) => {
    res.json({ inventoryItem});
  });

    /////////////////////////User registration///////////////////////////////////
    app.post('/users/signup', (req, res) => {
      const { regBusinessName,regFirstName, regLastName, regUserName, regEmailAd, regPassword } = req.body;
  
      const newUser = {
        regBusinessName,
        regFirstName,
        regLastName,
        regUserName,
        regEmailAd,
        regPassword,
      };
    
      userRegistrationData.push(newUser);
    
      // Return a success response with the new item
      res.status(201).json({newUser}); 
      
    });
    
     app.get('/users/signup', (req, res) => {
      res.json({userRegistrationData});
    });
    //////////////////////////////////////////////////////////////////////////////

  /////////////////baseline of the code///////////////////////////////////////////////
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));