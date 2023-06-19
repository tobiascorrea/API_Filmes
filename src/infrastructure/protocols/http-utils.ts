import { AplicationError } from '../../core/errors/application-error';
import { ServerError } from '../../core/errors/server-error';
import { HttpResponse } from './http';

export const ok = (body: any): HttpResponse => {
  return {
    statusCode: 200,
    body,
  };
};

export const created = (body: any): HttpResponse => {
  return {
    statusCode: 201,
    body,
  };
};

export const failure = (error: AplicationError): HttpResponse => {
  return {
    statusCode: error.statusCode,
    body: error.serializeError(),
  };
};

export const serverError = (error?: Error): HttpResponse => {
  return {
    statusCode: 500,
    body: new ServerError(error?.stack).serializeError(),
  };
};
