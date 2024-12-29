import { Router } from 'express';

import * as ApiController from '../controllers/apiController';
import { createUser, createUsers, deleteUser, getAllUsers, getUserByEmail, updateUser } from '../services/user';

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
        name: 'Beel',
        email: 'beel.alves@hotmail.com', 
        posts: {
            create:{
                title: 'Primeiro Post',
                body: 'Este é o primeiro post da minha blog.'
            }
        }

    });

    if(user){
        res.status(201).json({user});
    } else{
        res.status(500).json({error: 'Aconteceu alguma coisa'});
    }
})

router.post('/users', async (req, res) =>{
    const result = await createUsers([
        {name: 'Clarisse', email: 'clara.souza@outlook.com'},
        {name: 'Marlon', email: 'marlontvs@outlook.com'},
        {name: 'Bela Maria', email: 'bela.maria@outlook.com'},
        {name: 'Lully', email: 'lully.alves@outlook.com'},
    ]);
    res.json({ result });
})

router.get('/users', async (req, res) => {
    const result = await getAllUsers();
    res.json({ result });
})

router.get('/user', async (req, res) => {
    const result = await getUserByEmail('gabrielalveskos@gmail.com');
    res.json({ result });
})

router.put('/user', async (req, res) => {
    const result = await updateUser();
    res.json({ result })
})

router.delete('/user', async (req, res) => {
    try {
        const result = await deleteUser();
        res.json({ result });
    } catch (error) {
        res.status(500).json({ error: "Erro interno ao deletar usuário" });
    }
});

export default router;