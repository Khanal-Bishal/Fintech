import { ErrorRequestHandler, Request, Response, NextFunction } from "express";

const customErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    let status = 500
    let message = "Internal server error"

    if (error.name === 'ValidationError') {
        status = 400
        let errArr: unknown[] = []
        let errorArr = Object.entries(error.errors)
        errorArr?.forEach((err: any) => {
            let errObj = {
                params: err[0],
                message: err[1].message
            }
            errArr.push(errObj)
        })
        return res.status(status).json({ success: false, error: errArr })
    }
    return res.status(status).json({ success: false, message })
}

export default customErrorHandler