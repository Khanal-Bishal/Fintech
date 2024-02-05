import express, { Request, Response, NextFunction } from 'express'
import Transaction from '../models/transaction';
import mongoose from 'mongoose';
import { rmSync } from 'fs';

export const getAllTransaction = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await Transaction.find()
        res.json({ success: true, data })
    }
    catch (error) {
        console.log(error);

    }
}

export const getSingleTransaction = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: "Invalid transaction id" })
        }
        const data = await Transaction.findById(id)
        if (!data) res.status(404).json({ success: false, message: "No transaction found" })
        res.status(200).json({ success: true, data })
    }
    catch (error) {
        res.json(error)
    }
}

export const createTransaction = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const data = await Transaction.create(req.body)
        res.json({ success: true, data })

    }
    catch (error) {
        next(error)
    }
}

