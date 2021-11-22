const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");

// Pages routes
router.get("/", pagesController.home);
router.get("/the-stylist", pagesController.theStylist);
router.get("/services", pagesController.services);
router.get("/book-online", pagesController.bookOnline);
router.get("/contact-us", pagesController.contactUS);

module.exports = router;
