export interface requestDataType<T> {
    message: string;
    data: T;
    isLoading: boolean;
    status: boolean;
}
