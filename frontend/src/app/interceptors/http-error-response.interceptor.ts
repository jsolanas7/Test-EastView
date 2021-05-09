// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { catchError, tap } from 'rxjs/operators';
// import { Observable } from 'rxjs';
// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {

//     constructor(
//         private toastr: ToastrService
//     ) { }

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         return next.handle(req).pipe(tap(evt => {
//         }, (err: any) => {

//             if (err instanceof HttpErrorResponse) {
//                 if(err.status != 200){
//                     if(err.status != 401){
//                         this.toastr.error("Hubo un problema con la conexión", "Error");
//                     }else{
//                         if(err.url.includes("api/login/validateToken")){
//                             localStorage.removeItem("token");
//                             window.location.href = "login"
//                         }
//                     }
//                 }
               
//             }
//         }));
//     }
// }
