import Joi from 'joi'

const transactionSchema = Joi.object(
    {
        currency: Joi.string().required().messages(
            {
                'string.base': 'Currency must be a string',
                'any.required': 'Currency cannot be empty'
            }),

        amount: Joi.number().required().messages(
            {
                'string.base': 'Amount must be a number',
                'any.required': 'Amount cannnot be empty'
            })
    }
)
export default transactionSchema