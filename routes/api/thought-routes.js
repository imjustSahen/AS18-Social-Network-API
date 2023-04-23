const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thought.js");

// /thoughts
router.route("/").get(getThoughts);

// /thoughts/:id
router
  .route("/:id")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /thoughts/:userID
router.route("/:userId").post(createThought);

// /thoughts/:id/reactions
router.route("/:id/reactions").post(createReaction);

// /thoughts/:thoughtId/reactions/:reactionsId
router.route("/:thoughtId/reactions/:reactionsId").delete(deleteReaction);
module.exports = router;
