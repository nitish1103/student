export interface LoginModel {
    succeeded: boolean;
    message: string;
}

export interface UserModel {
    succeeded: boolean;
    message: string;
    data: UserListModel[]
}

export interface UserListModel {
    firstName: string;
    lastName: string;
    rollNumber: string;
    class: string;
}