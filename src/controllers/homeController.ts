import { Request, Response } from 'express';
import { User } from '../models/User';

export const home = async (req: Request, res: Response)=>{
    
    let users = await User.findAll()
   // console.log("USUÁRIOS: ",JSON.stringify(users))

    res.render('pages/home',{
        users
    })

    
};
