const Sequelize = require("sequelize");
const db = require("../db");

const Ad = db.define("ad", {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  imageUrl: Sequelize.STRING,
  price: Sequelize.INTEGER,
  email: Sequelize.STRING,
  phoneNumber: Sequelize.STRING
});

Ad.findAll()
  .then(() =>
    Promise.all([
      Ad.create({
        title: "Dobby, free Elf",
        description:
          "Dobby got his sock, he is free and ready to be your new friend!",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/2597/5112/products/hpfnpopdob_360x.jpg?v=1575933183",
        price: "15",
        email: "jk@rowling.com",
        phoneNumber: "1234-5678"
      }),
      Ad.create({
        title: "Harry Potter",
        description: "The chosen one has chosen you!",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/2597/5112/products/hpfnhp_360x.jpg?v=1575933183",
        price: "15",
        email: "jk@rowling.com",
        phoneNumber: "1234-5678"
      }),
      Ad.create({
        title: "Sirius Black",
        description: "James always said Sirius is way nicer in his dog form",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/2597/5112/products/hpfnpopsirdog_540x.jpg?v=1575933246",
        price: "15",
        email: "jk@rowling.com",
        phoneNumber: "1234-5678"
      })
    ])
  )
  .catch(console.error);

module.exports = Ad;
