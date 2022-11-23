import { FileArray } from "express-fileupload"

export interface HttpResponse {
  statusCode: number
  errorMessage?: any
  body: any
}

export interface HttpRequest {
  body?: any
  query?: any
  params?: any
  files?: FileArray
}
