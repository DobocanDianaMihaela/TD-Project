module.exports = app => {
  const tracks = require("../controllers/MindTrack.js");

  let router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tracks.create);

  // Retrieve all tracks
  router.get("/", tracks.findAll);

  // // Retrieve all published tracks
  // router.get("/published", tracks.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tracks.findOne);

  // Update a Tutorial with id
  router.put("/:id", tracks.update);

  // Delete a Tutorial with id
  router.delete("/:id", tracks.delete);

  // Delete all tracks
  router.delete("/", tracks.deleteAll);

  app.use("/api/employees", router);
};
