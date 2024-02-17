const fs = require("fs");
const csv = require("csvtojson");

const createProduct = async () => {
  let newData = await csv().fromFile("products.csv");
  let data = JSON.parse(fs.readFileSync("db.json"));
  newData = newData.map((product) => {
    return { name: product.product_name };
  });
  //   console.log(newData);
  data.products = newData;
  fs.writeFileSync("db.json", JSON.stringify(data));
  console.log("done");
};
createProduct();
