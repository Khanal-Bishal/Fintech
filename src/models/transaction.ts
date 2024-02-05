import mongoose from 'mongoose'

const { Schema } = mongoose

const transactionSchema = new Schema({
    currency:
    {
        type: String,
        required: true
    },
    amount:
    {
        type: Number,
        default: 0,
        required: true
    }
})

const Transaction = mongoose.model('Transaction', transactionSchema)
export default Transaction