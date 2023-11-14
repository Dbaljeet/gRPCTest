/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "users";

export interface Error {
  code: number;
  message: string;
}

export interface CreateUserRequest {
  email: string;
  password: string;
}

export interface CreateUserResponse {
  id: string;
  email: string;
  password: string;
}

export interface Empty {
}

export interface User {
  id: string;
  email: string;
  password: string;
}

export interface GetUserResponse {
  data: User[];
}

export interface GetUserByIdRequest {
  id: string;
}

export interface GetUserByIdResponse {
  user: User | undefined;
  error: Error | undefined;
}

export const USERS_PACKAGE_NAME = "users";

export interface UsersServiceClient {
  createUser(request: CreateUserRequest): Observable<CreateUserResponse>;

  getUser(request: Empty): Observable<GetUserResponse>;

  getUserById(request: GetUserByIdRequest): Observable<GetUserByIdResponse>;
}

export interface UsersServiceController {
  createUser(
    request: CreateUserRequest,
  ): Promise<CreateUserResponse> | Observable<CreateUserResponse> | CreateUserResponse;

  getUser(request: Empty): Promise<GetUserResponse> | Observable<GetUserResponse> | GetUserResponse;

  getUserById(
    request: GetUserByIdRequest,
  ): Promise<GetUserByIdResponse> | Observable<GetUserByIdResponse> | GetUserByIdResponse;
}

export function UsersServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createUser", "getUser", "getUserById"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UsersService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UsersService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USERS_SERVICE_NAME = "UsersService";
