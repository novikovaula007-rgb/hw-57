export type UserRole = 'user' | 'admin' | 'editor';

export interface UserInterface {
    name: string;
    email: string;
    role: UserRole;
    isActive: boolean;
}

export interface UserMutation extends UserInterface{
    id: string;
}