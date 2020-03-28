const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new Incident', async () => {
        const responseOng = await request(app).post('/ongs').send({
            name: "APAD",
            email: "contato@gmail.com",
            whatsapp: "4709090000",
            city: "Vitoria",
            uf: "ES"
        });

        const response = await request(app)
                .post('/incidents')
                .set('Authorization', responseOng.body.id)
                .send({
                    title: "Caso X",
                    description: "Ajuda para criancas com cancer",
                    value: "220"
        });

        expect(response.body).toHaveProperty('id');
    });

   
});
