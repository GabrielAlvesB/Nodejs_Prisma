import { Router } from 'express';

import * as ApiController from '../controllers/apiController';
import { createUser } from '../services/user';

const router = Router();

router.post('/register', ApiController.register);
router.post('/login', ApiController.login);

router.get('/list', ApiController.list);

router.get('/test', (req, res)=> {
    // prisma.user
    res.json({testado: true});
});

router.post('/user', async (req, res) => {
    const user = await createUser({
        name: 'Roberta',
        email: 'robs.alves@hotmail.com'
    });

    res.json({user});
})

export default router;