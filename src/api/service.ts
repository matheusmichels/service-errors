export class ServiceError extends Error {
  constructor(
    readonly service: string,
    readonly code: string,
    readonly message: string
  ) {
    super(`[${service}] - ${code}: ${message}`);
  }
}

export abstract class ServiceImpl {
  public getErrorMessage(error: ServiceError) {
    return `${error.service}: ${error.code} - ${error.message}`;
  }
}
