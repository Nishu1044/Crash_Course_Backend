const express = require("express");
const router = express.Router();

function authMiddleware(req, res, next) {
  const { ID, Name, Rating, Description, Genre, Cast } = req.body;

  let data = [];

  if (typeof ID !== "number") { // str
    data.push("ID should be a number");
  }

   if (typeof Name !== "string") {
    data.push("Name should be a string");
  }

   if (typeof Rating !== "number") {
    data.push("Rating should be a number");
  }

   if (typeof Description !== "string") {
    data.push("Description should be a string");
  }

   if (typeof Genre !== "string") {
    data.push("Genre should be a string");
  }

   if (!Array.isArray(Cast) || !Cast.every(item => typeof item === "string")) {
    data.push("Cast should be an array of strings");
  }

  if (data.length > 0) {
    return res.status(400).json({
      message: "Validation failed",
      errors: data
    });
  }

  next();
}

router.post("/", authMiddleware, (req, res) => {
  res.json({ message: "Data validated!" });
});

module.exports = router;
