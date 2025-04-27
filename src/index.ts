import { videoUpload, uploads } from './cloudinary-upload';
export * from './interfaces/auth.interface';
export * from './interfaces/buyer.interface';
export * from './interfaces/chat.interface';
export * from './interfaces/email.interface'
export * from './interfaces/gig.interface'
export * from './interfaces/order.interface'
export * from './interfaces/review.interface'
export * from './interfaces/search.interface'
export * from './interfaces/seller.interface'

import {
    IErrorResponse,
    IError,
    CustomerError,
    NoFoundError,
    NotAuthorizedError,
    FileToLarge,
    ServerError,
    ErrorException
} from './error-handler'
import { verifyGatewayRequest } from './gateway-middleware';
import {winstonLogger} from './logger'
import {
    firstLetterUppercase,
    lowerCase,
    toUpperCase,
    isEmail,
    isDataURL


} from './helpers'