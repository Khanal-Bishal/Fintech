import express, { Request, Response, NextFunction } from 'express'
import Transaction from '../models/transaction';

export const getAllTransaction = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json({ message: "List of all transaction" })
    }
    catch (error) {
        console.log(error);

    }
}

export const createTransaction = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const data = await Transaction.create(req.body)
        res.json({ success: true, data })

    }
    catch (error) {
        console.log(error);

    }
}

