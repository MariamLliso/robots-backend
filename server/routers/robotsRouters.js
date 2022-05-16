const express = require("express");
const { getRobots, deleteRobot } = require("../controllers/RobotsControllers");

const robotsRouter = express.Router();

robotsRouter.get("/", getRobots);
robotsRouter.delete("/delete/:idRobot", deleteRobot);

module.exports = robotsRouter;
