const { mockRobots, mockRobot } = require("../../mocks/mockRobots");
const { getRobots, deleteRobot } = require("./RobotsControllers");

jest.mock("../../db/models/Robot", () => ({
  ...jest.requireActual("../../db/models/Robot"),
  find: jest.fn().mockResolvedValue(mockRobots),
  findById: jest.fn().mockResolvedValue(mockRobot),
  findByIdAndDelete: jest.fn().mockResolvedValue("627fa3a6acf0547ab56a505f"),
}));

describe("Given a getRobot function", () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  describe("When it's invoked with a response", () => {
    test("Then it should call the response status method with a 200", async () => {
      const expectedResult = 200;

      await getRobots(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe("When it's invoked with a response", () => {
    test("Then it should call the response json method with a list of robots", async () => {
      await getRobots(null, res);

      expect(res.json).toHaveBeenCalledWith({ robots: mockRobots });
    });
  });
});

describe("Given a deleteRobot function", () => {
  const req = {
    params: {
      idRobot: "627fa3a6acf0547ab56a505f",
    },
  };

  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  describe("When it's invoked with a response", () => {
    test("Then it should call the response status method with a 200", async () => {
      const expectedResult = 200;

      await deleteRobot(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe("When it's invoked with a response", () => {
    test("Then it should call the response json method with a robot", async () => {
      await deleteRobot(req, res);

      // eslint-disable-next-line no-underscore-dangle
      expect(res.json).toHaveBeenCalledWith({ _id: mockRobot[0]._id });
    });
  });
});
