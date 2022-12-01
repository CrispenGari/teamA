import express from "express";
const router = express.Router();

import Grave from "../models/index.js";

router.get("/", (req, res) => {
  res.status(200).json({
    name: "backend",
    language: "javascript",
    message: "hello world!",
    programmer: "@programer",
    moto: "i'm a programer i have no life!",
    framework: "express.js",
  });
});

// creating a new grave

router.get("/api/v1/graves/all", (req, res) => {
  Grave.find({}, (error, doc) => {
    if (error) {
      throw error;
    }
    if (!doc) {
      return res.status(404).json("No Graves found.");
    }
    return res.status(200).json(doc);
  });
});

router.get("/api/v1/graves/one/:id", (req, res) => {
  const { id } = req.params;
  Grave.findById(id, (error, doc) => {
    if (error) {
      throw error;
    }
    if (!doc) {
      return res.status(404).json("Grave not found.");
    }
    return res.status(200).json(doc);
  });
});
// 60c5c4a1d386bc0be41536f8
router.patch("/api/v1/graves/update/:id", (req, res) => {
  const { id } = req.params;
  Grave.findById(id, (error, res_doc) => {
    if (!res_doc) {
      return res.status(304).json("Not Modified");
    } else {
      const data = req.body;
      const new_values = {
        $set: {
          name: data.name,
          books: data.books,
        },
      };
      Grave.findByIdAndUpdate(id, new_values, (error, doc) => {
        if (error) {
          throw error;
        }
        res.status(200).json(doc);
      });
    }
  });
});
router.delete("/api/v1/graves/delete/:id", (req, res) => {
  const { id } = req.params;
  Grave.findByIdAndDelete(id, (error, doc) => {
    if (error) {
      return error;
    } else {
      res.status(204).json(doc);
    }
  });
});
router.post("/api/v1/graves/create", (req, res) => {
  const data = req.body;
  const Grave = new Grave(data);
  Grave.save();
  res.status(201).json(Grave);
});
export default router;
