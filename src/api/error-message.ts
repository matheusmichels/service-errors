import { AuthService } from './auth.service';
import { ProjectService } from './project.service';
import { ServiceError, ServiceImpl } from './service';

const services: Record<string, ServiceImpl> = {
  AuthService: AuthService,
  ProjectService: ProjectService,
};

export function getErrorMessage(error: unknown) {
  if (error instanceof ServiceError) {
    return services[error.service].getErrorMessage(error);
  }

  return `Unexpected error: ${error}`;
}
