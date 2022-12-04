import { ServiceError, ServiceImpl } from './service';

export class ProjectServiceError extends ServiceError {
  constructor(readonly code: string, readonly message: string) {
    super('ProjectService', code, message);
  }
}

export interface Project {
  id: string;
  name: string;
}

class ProjectServiceImpl extends ServiceImpl {
  async createProject(id: string): Promise<Project> {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    if (id === '1') {
      throw new ProjectServiceError(
        'id_already_used',
        'this id is already being used'
      );
    }

    return {
      id,
      name: 'some random name',
    };
  }

  public getErrorMessage(error: ServiceError): string {
    return `Custom error message: ${super.getErrorMessage(error)}`;
  }
}

export const ProjectService = new ProjectServiceImpl();
