import ApplicationError from './application.error';

export default class ResourceNotFoundError extends ApplicationError {
  constructor(message?: string) {
    super(message || 'resource not found', 404);
  }
}
