import request from "supertest";
import { app } from "../../src/app";


describe("check route GET /error", () => {
  it("should be a success", async () => {
    const response = await request(app).get("/error");

    expect(response.status).toBe(200);
  });
});

describe("check route POST /error", () => {
  it("should be fail because name and age validation", async () => {
    const response = await request(app).post("/error").send({
      name: "eddypbr",
      age: 17
    });

    expect(response.status).toBe(400);
  });

  it("should be fail because age validation", async () => {
    const response = await request(app).post("/error").send({
      name: "irineu",
      age: 17
    });

    expect(response.status).toBe(400);
  });

  it("should be fail because name already registered", async () => {
    const response = await request(app).post("/error").send({
      name: "edvaldo",
      age: 24
    });

    expect(response.status).toBe(400);
  });

  it("should be a success", async () => {
    const response = await request(app).post("/error").send({
      name: "irineu",
      age: 24
    });

    expect(response.status).toBe(202);
  });
});
