import { User } from './User';

export type LoginResultType = {
    token: string;
    user: User;
    result: boolean;
    err?: undefined;
} | {
    err: string;
    result: boolean;
    token?: undefined;
    user?: undefined;
};
