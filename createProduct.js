const fs = require("fs");
const csv = require("csvtojson");

const createProduct = async () => {
  let newData = await csv().fromFile("products.csv");
  newData = new Set(newData.map((product) => product.product_name));
  newData = Array.from(newData);
  newData = newData
    .map((product) => {
      return { name: product };
    })
    .filter((product) => product.name);

  let data = JSON.parse(fs.readFileSync("db.json"));

  data.products = newData;
  fs.writeFileSync("db.json", JSON.stringify(data));
  console.log(newData);
};
createProduct();
