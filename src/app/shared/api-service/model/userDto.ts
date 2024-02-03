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
 */

export interface UserDto { 
    id?: number;
    userName: string;
    name: string;
    surname: string;
    emailAddress: string;
    isActive?: boolean;
    fullName?: string;
    lastLoginTime?: Date;
    creationTime?: Date;
    roleNames?: Array<string>;
}