import request from "supertest";
import mongoose from "mongoose";
import { app } from "../../src/app";
import { UserModel } from "@models/UserModel";

describe("A example test", () => {
  beforeAll(async () => {
    await UserModel.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should be create and save a user", async () => {
    const response = await request(app).post("/user").send({
      email: "newuser@mail.com",
      name: "newuser"
    });

    expect(response.status).toBe(202);
  });

  it("should be FAIL to create a user, because email is already registered", async () => {
    const response = await request(app).post("/user").send({
      email: "newuser@mail.com",
      name: "newuser",
    });

    expect(response.status).toBe(403);
  });

  it("should be FAIL to create a user, because email is bad formated", async () => {
    const response = await request(app).post("/user").send({
      email: "newuser@com",
      name: "newuser",
    });

    expect(response.status).toBe(400);
  });
});
