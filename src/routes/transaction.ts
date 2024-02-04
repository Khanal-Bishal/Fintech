import express from 'express'
import * as transactionController from '../controllers/transaction'
const router = express.Router()

router.get('/transaction', transactionController.getAllTransaction)
router.post('/transaction', transactionController.createTransaction)

export default router