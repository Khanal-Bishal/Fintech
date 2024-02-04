import mongoose from 'mongoose'

const { Schema } = mongoose

const transactionSchema = new Schema(
    {
        currency:
        {
            type: String,
            required: true
        },
        amount:
        {
            type: Number,
            required: true
        }
    }
)

const Transaction = mongoose.model('Transaction', transactionSchema)
export default Transaction