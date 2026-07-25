const request = require("supertest");
const app = require("../app");

describe("Audit API", () => {

  test("Should return 400 when URL is missing", async () => {

    const response = await request(app)
      .post("/audit")
      .send({});

    expect(response.statusCode).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.error).toBe("URL is required");

  });

  test("Should return 400 for invalid URL", async () => {

    const response = await request(app)
      .post("/audit")
      .send({
        url: "hello"
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.error).toBe("Invalid URL");

  });

});