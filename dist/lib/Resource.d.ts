/// <reference types="es6-shim" />
import { Http, Request } from '@angular/http';
import { Injector } from '@angular/core';
import { Type } from '@angular/core/src/type';
import { Observable } from 'rxjs/Rx';
import { ResourceModel } from './ResourceModel';
export declare class Resource {
    protected http: Http;
    protected injector: Injector;
    static model: Type<ResourceModel>;
    private _url;
    private _path;
    private _headers;
    private _params;
    private _data;
    constructor(http: Http, injector: Injector);
    getUrl(): string | Promise<string>;
    setUrl(url: string): void;
    getPath(): string | Promise<string>;
    setPath(path: string): void;
    getHeaders(): any | Promise<any>;
    setHeaders(headers: any): void;
    getParams(): any | Promise<any>;
    setParams(params: any): void;
    getData(): any | Promise<any>;
    setData(data: any): void;
    requestInterceptor(req: Request): Request;
    responseInterceptor(observable: Observable<any>, req: Request): Observable<any>;
    removeTrailingSlash(): boolean;
    map(item: any): any;
    filter(item: any): boolean;
    private _getUrl();
    private _getPath();
    private _getHeaders();
    private _getParams();
    private _getData();
}