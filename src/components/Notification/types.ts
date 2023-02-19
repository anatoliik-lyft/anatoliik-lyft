export interface IBaseNotification {
    title?: string;
    message?: string;
    messageKey?: string;
    autoDismiss?: number;
    showCloseButton?: boolean;
    type?: 'error' | 'success' | 'warning';
}

export interface INotification extends IBaseNotification {
    id: number;
}
