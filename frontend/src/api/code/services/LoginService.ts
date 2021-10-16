/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_login_access_token_login_access_token_post } from '../models/Body_login_access_token_login_access_token_post';
import type { Token } from '../models/Token';
import type { User } from '../models/User';
import { request as __request } from '../core/request';

export class LoginService {

    /**
     * Login Access Token
     * OAuth2 compatible token login, get an access token for future requests
     * @param requestBody
     * @returns Token Successful Response
     * @throws ApiError
     */
    public static async loginAccessTokenLoginAccessTokenPost(
        requestBody: Body_login_access_token_login_access_token_post,
    ): Promise<Token> {
        const result = await __request({
            method: 'POST',
            path: `/login/access-token`,
            body: requestBody,
            errors: {
                422: `Validation Error`,
            },
        });
        return result.body;
    }

    /**
     * Test Token
     * Test access token
     * @returns User Successful Response
     * @throws ApiError
     */
    public static async testTokenLoginTestTokenPost(): Promise<User> {
        const result = await __request({
            method: 'POST',
            path: `/login/test-token`,
        });
        return result.body;
    }

    /**
     * Refresh Token
     * @param refreshToken
     * @returns Token Successful Response
     * @throws ApiError
     */
    public static async refreshTokenRefreshTokenPost(
        refreshToken: string,
    ): Promise<Token> {
        const result = await __request({
            method: 'POST',
            path: `/refresh-token`,
            query: {
                'refresh_token': refreshToken,
            },
            errors: {
                422: `Validation Error`,
            },
        });
        return result.body;
    }

}