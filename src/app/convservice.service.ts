import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvserviceService {
  baseUrl: string;
  public search_value = new BehaviorSubject<any>([]);
  public $searchvalue = this.search_value.asObservable(); 

  constructor(private http:HttpClient) {
    this.baseUrl = 'https://api.convoiceapp.com/api/v1/'
   }

   login(data)
   {
    return this.http.post(`${this.baseUrl}admin/login`,data);
   }

   //******* Profile ********/

  getProfile()
  {
    const authorization =localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization':authorization })
   }
    //Authtoken//
    return this.http.get(`${this.baseUrl}admin/getProfile`,httpOptions)
  }

  updateProfile(data)
  {
    //Auth token//
    const authorization =localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization':authorization })
   }
    return this.http.put(`${this.baseUrl}admin/updateProfile`,data,httpOptions);
  }

  uploadPro(data)
  {  //Auth token// 
    const authorization =localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization':authorization })
   }
    return this.http.post(`${this.baseUrl}admin/uploadFile`,data,httpOptions)
  }

  // ************  ************** //
  changePass(data)
  {
    const authorization =localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization':authorization })
   }
    return this.http.post(`${this.baseUrl}admin/changePassword`,data,httpOptions) 
  }

  Forgotpassword(data)
  {
    return this.http.post(`${this.baseUrl}admin/forgotPassword`,data)
  }


searchdata()
{
  this.search_value.next('12');
}

Allusers(data)
{
  const authorization =localStorage.getItem('token');
  const httpOptions = {
    headers: new HttpHeaders({ 'Authorization':authorization })
 }
   return this.http.post<any>(`${this.baseUrl}admin/allUsers`,data,httpOptions)  
}

DeleteUsers(id)
{
  const authorization =localStorage.getItem('token');
  const httpOptions = {
    headers: new HttpHeaders({ 'Authorization':authorization })
 }
  return this.http.delete<any>(`${this.baseUrl}admin/users/${id}`,httpOptions)
}

EditUsers(id,data)
{
  const authorization =localStorage.getItem('token');
  const httpOptions = {
    headers: new HttpHeaders({ 'Authorization':authorization })
 }
  return this.http.put<any>(`${this.baseUrl}admin/users/${id}`,data,httpOptions)
}


addUser(data)
{
  const authorization =localStorage.getItem('token');
  const httpOptions = {
    headers: new HttpHeaders({ 'Authorization':authorization })
 }
  return this.http.post<any>(`${this.baseUrl}admin/users`,data,httpOptions)
}

changeStatus(id)
{
  return this.http.post<any>(`${this.baseUrl}admin/changeStatus/${id}`,'')
}

setCmscond(data)
{
  const authorization =localStorage.getItem('token');
  const httpOptions = {
    headers: new HttpHeaders({ 'Authorization':authorization })
 }
  return this.http.post<any>(`${this.baseUrl}admin/setSettings`,data,httpOptions);
}

getTerms()
{
  const authorization =localStorage.getItem('token');
  const httpOptions = {
    headers: new HttpHeaders({ 'Authorization':authorization })
 }
  return this.http.get<any>(`${this.baseUrl}admin/getSettings`,httpOptions)
}

getdashboard()
{
  const authorization =localStorage.getItem('token');
  const httpOptions = {
    headers: new HttpHeaders({ 'Authorization':authorization })
 }
  return this.http.post<any>(`${this.baseUrl}admin/dashboard`,'',httpOptions)
}

getUserslist(data)
{
  const authorization =localStorage.getItem('token');
  const httpOptions = {
    headers: new HttpHeaders({ 'Authorization':authorization })
 }
  return this.http.post<any>(`${this.baseUrl}admin/dashboard/user/${data.type}`,'',httpOptions)
}

getPackagelist(data)
{
  const authorization =localStorage.getItem('token');
  const httpOptions = {
    headers: new HttpHeaders({ 'Authorization':authorization })
 }
  return this.http.post<any>(`${this.baseUrl}admin/dashboard/package/${data.type}`,'',httpOptions)
}

}
