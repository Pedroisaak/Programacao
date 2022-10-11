import { HttpResponse } from '../protocols/http'

export const badRequest = (errorMessage: string): HttpResponse => ({
  statusCode: 400,
  errorMessage,
  body: []
})

export const unauthorized = (errorMessage = 'unauthorized'): HttpResponse => ({
  statusCode: 401,
  errorMessage,
  body: []
})

export const serverError = (errorMessage = 'server error'): HttpResponse => ({
  statusCode: 500,
  errorMessage,
  body: []
})

export const notImplemented = (): HttpResponse => ({
  statusCode: 501,
  errorMessage: 'not implemented',
  body: []
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})
