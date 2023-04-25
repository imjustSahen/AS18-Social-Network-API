const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend,
} = require("../../controllers/user.js");

// /users/
router.route("/").get(getUsers).post(createUser);

// /users/:id
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

// /users/:id/friends/:friendsId
router.route("/:id/friends/:friendId").post(createFriend).delete(deleteFriend);

module.exports = router;
