import request from "supertest";
import { getCustomRepository } from "typeorm";

import { app } from "../../src/app";
import { connection } from "@database/connection";
import { UserRepository } from "@repositories/UserRepository";

describe("Test user route", () => {
  beforeAll(async () => {
    await connection.create();
  });
  
  afterAll(async () => {
    await connection.close();
  });
  
  beforeEach(async () => {
    const usersRepository = getCustomRepository(UserRepository);
    await usersRepository.clear();
  });

  it("should be create and save a user", async () => {
    const response = await request(app).post("/user").send({
      email: "newuser@mail.com",
      name: "newuser"
    });

    expect(response.status).toBe(200);
  });
});
