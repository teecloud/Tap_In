/**
 * Techemy API
 * Techemy
 *
 * OpenAPI spec version: 1
 * Contact: test@test.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { ChangePasswordDto } from '../model/changePasswordDto';
import { ChangeUserLanguageDto } from '../model/changeUserLanguageDto';
import { CreateUserDto } from '../model/createUserDto';
import { Int64EntityDto } from '../model/int64EntityDto';
import { ResetPasswordDto } from '../model/resetPasswordDto';
import { RoleDtoListResultDto } from '../model/roleDtoListResultDto';
import { UserDto } from '../model/userDto';
import { UserDtoPagedResultDto } from '../model/userDtoPagedResultDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class UserService {

    protected basePath = 'https://virtserver.swaggerhub.com/TERRILLEDWARDS/Techemy/1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiServicesAppUserActivatePost(body?: Int64EntityDto, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiServicesAppUserActivatePost(body?: Int64EntityDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiServicesAppUserActivatePost(body?: Int64EntityDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiServicesAppUserActivatePost(body?: Int64EntityDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/api/services/app/User/Activate`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiServicesAppUserChangeLanguagePost(body?: ChangeUserLanguageDto, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiServicesAppUserChangeLanguagePost(body?: ChangeUserLanguageDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiServicesAppUserChangeLanguagePost(body?: ChangeUserLanguageDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiServicesAppUserChangeLanguagePost(body?: ChangeUserLanguageDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/api/services/app/User/ChangeLanguage`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiServicesAppUserChangePasswordPost(body?: ChangePasswordDto, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public apiServicesAppUserChangePasswordPost(body?: ChangePasswordDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public apiServicesAppUserChangePasswordPost(body?: ChangePasswordDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
    public apiServicesAppUserChangePasswordPost(body?: ChangePasswordDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<boolean>('post',`${this.basePath}/api/services/app/User/ChangePassword`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiServicesAppUserCreatePost(body?: CreateUserDto, observe?: 'body', reportProgress?: boolean): Observable<UserDto>;
    public apiServicesAppUserCreatePost(body?: CreateUserDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserDto>>;
    public apiServicesAppUserCreatePost(body?: CreateUserDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserDto>>;
    public apiServicesAppUserCreatePost(body?: CreateUserDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<UserDto>('post',`${this.basePath}/api/services/app/User/Create`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiServicesAppUserDeActivatePost(body?: Int64EntityDto, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiServicesAppUserDeActivatePost(body?: Int64EntityDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiServicesAppUserDeActivatePost(body?: Int64EntityDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiServicesAppUserDeActivatePost(body?: Int64EntityDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/api/services/app/User/DeActivate`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiServicesAppUserDeleteDelete(id?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiServicesAppUserDeleteDelete(id?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiServicesAppUserDeleteDelete(id?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiServicesAppUserDeleteDelete(id?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', <any>id);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/api/services/app/User/Delete`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param keyword 
     * @param isActive 
     * @param skipCount 
     * @param maxResultCount 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiServicesAppUserGetAllGet(keyword?: string, isActive?: boolean, skipCount?: number, maxResultCount?: number, observe?: 'body', reportProgress?: boolean): Observable<UserDtoPagedResultDto>;
    public apiServicesAppUserGetAllGet(keyword?: string, isActive?: boolean, skipCount?: number, maxResultCount?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserDtoPagedResultDto>>;
    public apiServicesAppUserGetAllGet(keyword?: string, isActive?: boolean, skipCount?: number, maxResultCount?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserDtoPagedResultDto>>;
    public apiServicesAppUserGetAllGet(keyword?: string, isActive?: boolean, skipCount?: number, maxResultCount?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (keyword !== undefined && keyword !== null) {
            queryParameters = queryParameters.set('Keyword', <any>keyword);
        }
        if (isActive !== undefined && isActive !== null) {
            queryParameters = queryParameters.set('IsActive', <any>isActive);
        }
        if (skipCount !== undefined && skipCount !== null) {
            queryParameters = queryParameters.set('SkipCount', <any>skipCount);
        }
        if (maxResultCount !== undefined && maxResultCount !== null) {
            queryParameters = queryParameters.set('MaxResultCount', <any>maxResultCount);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<UserDtoPagedResultDto>('get',`${this.basePath}/api/services/app/User/GetAll`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiServicesAppUserGetGet(id?: number, observe?: 'body', reportProgress?: boolean): Observable<UserDto>;
    public apiServicesAppUserGetGet(id?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserDto>>;
    public apiServicesAppUserGetGet(id?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserDto>>;
    public apiServicesAppUserGetGet(id?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', <any>id);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<UserDto>('get',`${this.basePath}/api/services/app/User/Get`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiServicesAppUserGetRolesGet(observe?: 'body', reportProgress?: boolean): Observable<RoleDtoListResultDto>;
    public apiServicesAppUserGetRolesGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RoleDtoListResultDto>>;
    public apiServicesAppUserGetRolesGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RoleDtoListResultDto>>;
    public apiServicesAppUserGetRolesGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<RoleDtoListResultDto>('get',`${this.basePath}/api/services/app/User/GetRoles`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiServicesAppUserResetPasswordPost(body?: ResetPasswordDto, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public apiServicesAppUserResetPasswordPost(body?: ResetPasswordDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public apiServicesAppUserResetPasswordPost(body?: ResetPasswordDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
    public apiServicesAppUserResetPasswordPost(body?: ResetPasswordDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<boolean>('post',`${this.basePath}/api/services/app/User/ResetPassword`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiServicesAppUserUpdatePut(body?: UserDto, observe?: 'body', reportProgress?: boolean): Observable<UserDto>;
    public apiServicesAppUserUpdatePut(body?: UserDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserDto>>;
    public apiServicesAppUserUpdatePut(body?: UserDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserDto>>;
    public apiServicesAppUserUpdatePut(body?: UserDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<UserDto>('put',`${this.basePath}/api/services/app/User/Update`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
