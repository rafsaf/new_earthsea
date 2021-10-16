/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_update_user_me_users_me_put } from '../models/Body_update_user_me_users_me_put';
import type { User } from '../models/User';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * Read User Me
     * Get current user.
     * @returns User Successful Response
     * @throws ApiError
     */
    public static async readUserMeUsersMeGet(): Promise<User> {
        const result = await __request({
            method: 'GET',
            path: `/users/me`,
        });
        return result.body;
    }

    /**
     * Update User Me
     * Update own user.
     * @param requestBody
     * @returns User Successful Response
     * @throws ApiError
     */
    public static async updateUserMeUsersMePut(
        requestBody?: Body_update_user_me_users_me_put,
    ): Promise<User> {
        const result = await __request({
            method: 'PUT',
            path: `/users/me`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
        return result.body;
    }

}