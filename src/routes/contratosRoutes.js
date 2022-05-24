import { Router } from "express";
import { faker } from '@faker-js/faker';

const router = Router();

router.get('/', (req, res) => {
    const { size } = req.params;
    const limit = size || 10;
    const contratos = [];

    for (let i = 1; i <= limit; i++) {
        contratos.push({
            id: faker.datatype.number({ min: 1, max: 1000 }),
            nombreEmpresa: faker.company.companyName(),
            firmantes: [
                `${faker.name.firstName()} ${faker.name.lastName()}`,
                `${faker.name.firstName()} ${faker.name.lastName()}`,
                `${faker.name.firstName()} ${faker.name.lastName()}`,
            ]
        });
    }

    res.json(contratos);
});

export default router;