const express=require('express');
const authRouter=express.Router();

authRouter.get('/authenticate', (req, res) => {
    res.json({ message: 'Get all user information'});
});

module.exports=authRouter;
