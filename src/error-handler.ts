import {StatusCodes} from 'http-status-codes'

export interface IErrorResponse{
    message: string;
    statusCode:number;
    status: string;
    comingFrom: string;
    serializeErrors(): IError;
}
export interface IError{
    message: string;
    statusCode:number;
    status: string;
    comingFrom: string;
}

export abstract class CustomerError extends Error{
    abstract statusCode: number;
    abstract status: string;
    comingFrom: string;

    constructor(message:string, comingFrom: string){
        super(message);
        this.comingFrom = comingFrom

    }
    serializeErrors(): IError{
        return{
            message: this.message,
            statusCode: this.statusCode,
            status: this.status,
            comingFrom: this.comingFrom
        }
    }
}
export class NoFoundError extends CustomerError{
    statusCode = StatusCodes.NOT_FOUND;
    status = 'error';
    constructor(message:string, comingFrom:string){
        super(message, comingFrom)
    }
}

export class NotAuthorizedError extends CustomerError{
    statusCode = StatusCodes.UNAUTHORIZED;
    status = 'error';
    constructor(message:string, comingFrom:string){
        super(message, comingFrom)
    }
}

export class FileToLarge extends CustomerError{
    statusCode = StatusCodes.REQUEST_TOO_LONG;
    status = 'error';
    constructor(message:string, comingFrom:string){
        super(message, comingFrom)
    }
}

export class ServerError extends CustomerError{
    statusCode = StatusCodes.SERVICE_UNAVAILABLE;
    status = 'error';
    constructor(message:string, comingFrom:string){
        super(message, comingFrom)
    }
}

export interface ErrorException extends Error{
        errno?:number;
        code?:string;
        path?:string;
        syscall:string;
        stack:string;
}

