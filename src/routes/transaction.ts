import express from 'express'
import * as transactionController from '../controllers/transaction'
const router = express.Router()

/** 
 * @description transaction routes
 * 
 * @routes /api/transaction
 */

router.get('/transaction', transactionController.getAllTransaction)
router.get('/transaction/:id', transactionController.getSingleTransaction)
router.post('/transaction', transactionController.createTransaction)

export default router