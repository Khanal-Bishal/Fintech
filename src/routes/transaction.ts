import express from 'express'
import * as transactionController from '../controllers/transaction'
import transactionSchema from '../schema/transactionSchema'
import validateSchema from '../middlewares/validateSchema'

const router = express.Router()

/** 
 * @description transaction routes
 * 
 * @routes /api/transaction
 */

router.get('/transaction', transactionController.getAllTransaction)
router.get('/transaction/:id', transactionController.getSingleTransaction)
router.post('/transaction', validateSchema(transactionSchema), transactionController.createTransaction)

export default router