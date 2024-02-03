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
import { ApplicationInfoDto } from './applicationInfoDto';
import { TenantLoginInfoDto } from './tenantLoginInfoDto';
import { UserLoginInfoDto } from './userLoginInfoDto';

export interface GetCurrentLoginInformationsOutput { 
    application?: ApplicationInfoDto;
    user?: UserLoginInfoDto;
    tenant?: TenantLoginInfoDto;
}