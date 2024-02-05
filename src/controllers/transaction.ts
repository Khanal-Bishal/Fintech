import express, { Request, Response, NextFunction } from 'express'
import Transaction from '../models/transaction';
import mongoose from 'mongoose';

/**
 * @description gets all the existing transaction
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 * 
 * @route GET /api/transaction
 */
export const getAllTransaction = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await Transaction.find()
        res.status(200).json({ success: true, data })
    }
    catch (error) {
        console.log(error);

    }
}

/**
 * @description gets single transaction
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 * 
 * @route GET /api/transaction/:id
 */
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

/**
 * @description gets all the existing blog
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 * 
 * @route POST /api/transaction
 */
export const createTransaction = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const data = await Transaction.create(req.body)
        res.status(200).json({ success: true, data })
    }
    catch (error) {
        next(error)
    }
}

