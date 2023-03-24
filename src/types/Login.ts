import { UserType } from './User';

export type LoginResultType = {
    token: string;
    user: UserType;
    result: boolean;
    err?: undefined;
} | {
    err: string;
    result: boolean;
    token?: undefined;
    user?: undefined;
};
