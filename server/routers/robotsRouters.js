const express = require("express");
const { getRobots, deleteRobot } = require("../controllers/RobotsControllers");

const robotsRouter = express.Router();

robotsRouter.get("/robots", getRobots);
robotsRouter.delete("/robots", deleteRobot);

module.exports = robotsRouter;
