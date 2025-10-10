/**
 * @module routes/api/comments
 * @description Express router for handling comment-related API endpoints.
 */

 /**
    * GET /
    * @summary Retrieve all comments.
    * @route GET /api/comments
    * @returns {Array<Object>} 200 - An array of comment objects
    * @returns {Error} 500 - Failed to fetch comments
    */

 /**
    * POST /
    * @summary Create a new comment.
    * @route POST /api/comments
    * @param {Object} req.body - The comment data to create
    * @returns {Object} 201 - The created comment object
    * @returns {Error} 400 - Failed to create comment
    */

 /**
    * GET /:id
    * @summary Retrieve a comment by its ID.
    * @route GET /api/comments/{id}
    * @param {string} id.path.required - Comment ID
    * @returns {Object} 200 - The comment object
    * @returns {Error} 404 - Comment not found
    * @returns {Error} 500 - Failed to fetch comment
    */

 /**
    * PUT /:id
    * @summary Update a comment by its ID.
    * @route PUT /api/comments/{id}
    * @param {string} id.path.required - Comment ID
    * @param {Object} req.body - The updated comment data
    * @returns {Object} 200 - The updated comment object
    * @returns {Error} 404 - Comment not found
    * @returns {Error} 400 - Failed to update comment
    */

 /**
    * DELETE /:id
    * @summary Delete a comment by its ID.
    * @route DELETE /api/comments/{id}
    * @param {string} id.path.required - Comment ID
    * @returns {Object} 200 - Success message
    * @returns {Error} 404 - Comment not found
    * @returns {Error} 500 - Failed to delete comment
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

// Hey GitHub Copilot, please implement the following routes for comments:

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    res.status(400).json({ error: "Failed to create comment" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ error: "Comment not found" });
    res.json(comment);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comment" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedComment)
      return res.status(404).json({ error: "Comment not found" });
    res.json(updatedComment);
  } catch (err) {
    res.status(400).json({ error: "Failed to update comment" });
  }
});

// add another endpoint to delete a comment by its ID
const deleteComment = router.delete("/:id", async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);
        if (!deletedComment)
            return res.status(404).json({ error: "Comment not found" });
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
});
