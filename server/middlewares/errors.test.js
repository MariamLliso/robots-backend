const { notFoundError, generalError } = require("./errors");

describe("Given a notFoundError function", () => {
  describe("When its invoked with a response", () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call the reponse's method status with a 404", () => {
      const expectedStatusCode = 404;

      notFoundError(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the reponse's method json with a message 'Endpoint not found'", () => {
      const expectedResponseMEssage = { msg: "Endpoint not found" };

      notFoundError(null, res);

      expect(res.json).toHaveBeenCalledWith(expectedResponseMEssage);
    });
  });
});

describe("Given a generalError function", () => {
  describe("When its invoked with a response", () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const error = { msg: "Unknown error" };

    test("Then it should call the reponse's method status with a 500", () => {
      const expectedStatusCode = 500;

      generalError(error, null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
    test("Then it should call the reponse's method json with a message 'Server error'", () => {
      const expectedResponseMessage = { msg: "Server error" };

      generalError(error, null, res);

      expect(res.json).toHaveBeenCalledWith(expectedResponseMessage);
    });
  });
});
