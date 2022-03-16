const express = require("express");
const sequelize = require("./database/connection");
const Comment = require("./models/comment");
const app = express();
const port = 3000;
const cors = require("cors");
const Sequelize = require("sequelize");

const Test = sequelize.define("Test", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  replyingTo: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
  userId: Sequelize.INTEGER(11),
});
app.use(cors());
app.use(express.json());
app.get("/comments", async (req, res) => {
  try {
    const allComments = await Test.findAll();
    res.send(JSON.stringify(allComments, null, 2));
  } catch (e) {
    console.log(e);
    res.send("GET fail: ", e);
  }
});

app.post("/comment", async (req, res) => {
  console.log(req.body);
  try {
    await Test.create({
      name: req.body.name,
      content: req.body.content,
      replyingTo: req.body.replyingTo,
    });
    res.send("SUCCESS");
  } catch (e) {
    console.log(e);
    res.send("POST fail: ", e);
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  // Create all the table defined using
  // sequelize in Database

  // Force sync all models
  // It will drop the table first
  // and re-create it afterwards
  sequelize.sync({ force: true });
});
