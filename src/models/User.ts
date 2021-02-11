export default interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    created: Date|null|string;
}