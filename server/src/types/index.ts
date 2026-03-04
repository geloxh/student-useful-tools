export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    message?: string;
}

export interface PaginationQuery {
    page?: number;
    limit?: number;
}

export enum TaskStatus {
    PENDING = 'pending',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed'
}

export enum TaskPriority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high'
}
