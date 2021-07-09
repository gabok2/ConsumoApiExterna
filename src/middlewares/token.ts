import {NextFunction,Request,Response} from 'express';

export async function tokenvalidate(
  request: Request,
  response: Response,
  next:NextFunction
){
  const Authorization = request.headers.authorization;

  if(!Authorization){
    console.log("error");
  }

  next();
}