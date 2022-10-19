export interface HttpResponse {
  statusCode: number
  errorMessage?: any
  body: any
}

export interface HttpRequest {
  body?: any
}