const { mockRobots } = require("../../mocks/mockRobots");
const { getRobots } = require("./RobotsControllers");

jest.mock("../../db/models/Robot", () => ({
  ...jest.requireActual("../../db/models/Robot"),
  find: jest.fn().mockResolvedValue(mockRobots),
}));

describe("Given a getRobot function", () => {
  describe("When it's invoked with a response", () => {
    test("Then it should call the response status method with a 200", async () => {
      const expectedResult = 200;

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await getRobots(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe("When it's invoked with a response", () => {
    test("Then it should call the response json method with a list of robots", async () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await getRobots(null, res);

      expect(res.json).toHaveBeenCalledWith({ robots: mockRobots });
    });
  });
});
