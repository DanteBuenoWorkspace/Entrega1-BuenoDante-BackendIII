const request = require('supertest');
const { expect } = require('chai');
const app = require('../../app');
const adoptionRepo = require('../repositories/adoption.repository');

describe("Adoption router", () => {
    beforeEach(() => {
        adoptionRepo.clear();
    });

    it("GET /api/adoptions -> 200 & array", async () => {
        const res = await request(app).get("/api/adoptions");
        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal("success");
        expect(res.body.payload).to.be.an("array");
    });

    it("POST /api/adoptions -> 201 & create adoption", async () => {
        const res = await request(app)
            .post("/api/adoptions")
            .send({ userId: "u1", petId: "p1" });
        expect(res.status).to.equal(201);
        expect(res.body.status).to.equal("success");
        expect(res.body.payload).to.have.property("id");
    });

    it("POST /api/adoptions -> 400 if data is missing", async () => {
        const res = await request(app)
            .post("/api/adoptions")
            .send({ userId: "u1" });
        expect(res.status).to.equal(400);
        expect(res.body.status).to.equal("error");
    });

    it("GET /api/adoptions/:id -> 200 if exists", async () => {
        const created = await request(app)
            .post("/api/adoptions")
            .send({ userId: "u1", petId: "p1" });

        const id = created.body.payload.id;

        const res = await request(app)
            .get(`/api/adoptions/${id}`);
        expect(res.status).to.equal(200);
        expect(res.body.payload.id).to.equal(id);
    });

    it("GET /api/adoptions/:id -> 404 if it does not exist", async () => {
        const res = await request(app).get("/api/adoptions/666");
        expect(res.status).to.equal(404);
    });

    it("DELETE /api/adoptions/:id -> 200 if delete", async () => {
        const created = await request(app)
            .post("/api/adoptions")
            .send({ userId: "u1", petId: "p1" });

        const id = created.body.payload.id;

        const res = await request(app).delete(`/api/adoptions/${id}`);
        expect(res.status).to.equal(200);
        expect(res.body.payload).to.equal(true);
    });

    it("DELETE /api/adoptions/:id -> 404 if it does not exist", async () => {
        const res = await request(app).delete("/api/adoptions/666");
        expect(res.status).to.equal(404);
    });
});