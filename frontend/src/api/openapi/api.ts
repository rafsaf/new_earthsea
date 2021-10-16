/* tslint:disable */
/* eslint-disable */
/**
 * backend
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface BodyUpdateUserMeUsersMePut
 */
export interface BodyUpdateUserMeUsersMePut {
    /**
     * 
     * @type {string}
     * @memberof BodyUpdateUserMeUsersMePut
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof BodyUpdateUserMeUsersMePut
     */
    full_name?: string;
    /**
     * 
     * @type {string}
     * @memberof BodyUpdateUserMeUsersMePut
     */
    email?: string;
}
/**
 * 
 * @export
 * @interface HTTPValidationError
 */
export interface HTTPValidationError {
    /**
     * 
     * @type {Array<ValidationError>}
     * @memberof HTTPValidationError
     */
    detail?: Array<ValidationError>;
}
/**
 * 
 * @export
 * @interface Token
 */
export interface Token {
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    token_type: string;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    access_token: string;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    expire_at: string;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    refresh_token: string;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    refresh_expire_at: string;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    full_name: string;
}
/**
 * 
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {Array<string>}
     * @memberof ValidationError
     */
    loc: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    msg: string;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    type: string;
}

/**
 * LoginApi - axios parameter creator
 * @export
 */
export const LoginApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * OAuth2 compatible token login, get an access token for future requests
         * @summary Login Access Token
         * @param {string} username 
         * @param {string} password 
         * @param {string} [grantType] 
         * @param {string} [scope] 
         * @param {string} [clientId] 
         * @param {string} [clientSecret] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginAccessTokenLoginAccessTokenPost: async (username: string, password: string, grantType?: string, scope?: string, clientId?: string, clientSecret?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            assertParamExists('loginAccessTokenLoginAccessTokenPost', 'username', username)
            // verify required parameter 'password' is not null or undefined
            assertParamExists('loginAccessTokenLoginAccessTokenPost', 'password', password)
            const localVarPath = `/login/access-token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new URLSearchParams();


            if (grantType !== undefined) { 
                localVarFormParams.set('grant_type', grantType as any);
            }
    
            if (username !== undefined) { 
                localVarFormParams.set('username', username as any);
            }
    
            if (password !== undefined) { 
                localVarFormParams.set('password', password as any);
            }
    
            if (scope !== undefined) { 
                localVarFormParams.set('scope', scope as any);
            }
    
            if (clientId !== undefined) { 
                localVarFormParams.set('client_id', clientId as any);
            }
    
            if (clientSecret !== undefined) { 
                localVarFormParams.set('client_secret', clientSecret as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams.toString();

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Refresh Token
         * @param {string} refreshToken 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refreshTokenRefreshTokenPost: async (refreshToken: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'refreshToken' is not null or undefined
            assertParamExists('refreshTokenRefreshTokenPost', 'refreshToken', refreshToken)
            const localVarPath = `/refresh-token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (refreshToken !== undefined) {
                localVarQueryParameter['refresh_token'] = refreshToken;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Test access token
         * @summary Test Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testTokenLoginTestTokenPost: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/login/test-token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LoginApi - functional programming interface
 * @export
 */
export const LoginApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LoginApiAxiosParamCreator(configuration)
    return {
        /**
         * OAuth2 compatible token login, get an access token for future requests
         * @summary Login Access Token
         * @param {string} username 
         * @param {string} password 
         * @param {string} [grantType] 
         * @param {string} [scope] 
         * @param {string} [clientId] 
         * @param {string} [clientSecret] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loginAccessTokenLoginAccessTokenPost(username: string, password: string, grantType?: string, scope?: string, clientId?: string, clientSecret?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Token>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.loginAccessTokenLoginAccessTokenPost(username, password, grantType, scope, clientId, clientSecret, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Refresh Token
         * @param {string} refreshToken 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async refreshTokenRefreshTokenPost(refreshToken: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Token>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.refreshTokenRefreshTokenPost(refreshToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Test access token
         * @summary Test Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async testTokenLoginTestTokenPost(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.testTokenLoginTestTokenPost(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LoginApi - factory interface
 * @export
 */
export const LoginApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LoginApiFp(configuration)
    return {
        /**
         * OAuth2 compatible token login, get an access token for future requests
         * @summary Login Access Token
         * @param {string} username 
         * @param {string} password 
         * @param {string} [grantType] 
         * @param {string} [scope] 
         * @param {string} [clientId] 
         * @param {string} [clientSecret] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginAccessTokenLoginAccessTokenPost(username: string, password: string, grantType?: string, scope?: string, clientId?: string, clientSecret?: string, options?: any): AxiosPromise<Token> {
            return localVarFp.loginAccessTokenLoginAccessTokenPost(username, password, grantType, scope, clientId, clientSecret, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Refresh Token
         * @param {string} refreshToken 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refreshTokenRefreshTokenPost(refreshToken: string, options?: any): AxiosPromise<Token> {
            return localVarFp.refreshTokenRefreshTokenPost(refreshToken, options).then((request) => request(axios, basePath));
        },
        /**
         * Test access token
         * @summary Test Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testTokenLoginTestTokenPost(options?: any): AxiosPromise<User> {
            return localVarFp.testTokenLoginTestTokenPost(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LoginApi - object-oriented interface
 * @export
 * @class LoginApi
 * @extends {BaseAPI}
 */
export class LoginApi extends BaseAPI {
    /**
     * OAuth2 compatible token login, get an access token for future requests
     * @summary Login Access Token
     * @param {string} username 
     * @param {string} password 
     * @param {string} [grantType] 
     * @param {string} [scope] 
     * @param {string} [clientId] 
     * @param {string} [clientSecret] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginApi
     */
    public loginAccessTokenLoginAccessTokenPost(username: string, password: string, grantType?: string, scope?: string, clientId?: string, clientSecret?: string, options?: any) {
        return LoginApiFp(this.configuration).loginAccessTokenLoginAccessTokenPost(username, password, grantType, scope, clientId, clientSecret, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Refresh Token
     * @param {string} refreshToken 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginApi
     */
    public refreshTokenRefreshTokenPost(refreshToken: string, options?: any) {
        return LoginApiFp(this.configuration).refreshTokenRefreshTokenPost(refreshToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Test access token
     * @summary Test Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginApi
     */
    public testTokenLoginTestTokenPost(options?: any) {
        return LoginApiFp(this.configuration).testTokenLoginTestTokenPost(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get current user.
         * @summary Read User Me
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readUserMeUsersMeGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/users/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update own user.
         * @summary Update User Me
         * @param {BodyUpdateUserMeUsersMePut} [bodyUpdateUserMeUsersMePut] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUserMeUsersMePut: async (bodyUpdateUserMeUsersMePut?: BodyUpdateUserMeUsersMePut, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/users/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(bodyUpdateUserMeUsersMePut, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * Get current user.
         * @summary Read User Me
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async readUserMeUsersMeGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.readUserMeUsersMeGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update own user.
         * @summary Update User Me
         * @param {BodyUpdateUserMeUsersMePut} [bodyUpdateUserMeUsersMePut] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUserMeUsersMePut(bodyUpdateUserMeUsersMePut?: BodyUpdateUserMeUsersMePut, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUserMeUsersMePut(bodyUpdateUserMeUsersMePut, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * Get current user.
         * @summary Read User Me
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readUserMeUsersMeGet(options?: any): AxiosPromise<User> {
            return localVarFp.readUserMeUsersMeGet(options).then((request) => request(axios, basePath));
        },
        /**
         * Update own user.
         * @summary Update User Me
         * @param {BodyUpdateUserMeUsersMePut} [bodyUpdateUserMeUsersMePut] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUserMeUsersMePut(bodyUpdateUserMeUsersMePut?: BodyUpdateUserMeUsersMePut, options?: any): AxiosPromise<User> {
            return localVarFp.updateUserMeUsersMePut(bodyUpdateUserMeUsersMePut, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * Get current user.
     * @summary Read User Me
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public readUserMeUsersMeGet(options?: any) {
        return UsersApiFp(this.configuration).readUserMeUsersMeGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update own user.
     * @summary Update User Me
     * @param {BodyUpdateUserMeUsersMePut} [bodyUpdateUserMeUsersMePut] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public updateUserMeUsersMePut(bodyUpdateUserMeUsersMePut?: BodyUpdateUserMeUsersMePut, options?: any) {
        return UsersApiFp(this.configuration).updateUserMeUsersMePut(bodyUpdateUserMeUsersMePut, options).then((request) => request(this.axios, this.basePath));
    }
}


