import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Book } from '../models/books';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  API_URL = 'http://localhost:3000/api';

  constructor( private http:HttpClient) { 
  }
    getBooks(){
      return this.http.get(`${this.API_URL}/books`);
    }

    getAuthor(termino:string){
      return this.http.get(`${this.API_URL}/books/${termino}`);
    }

    getBook(id:string){
      return this.http.get(`${this.API_URL}/books/${id}`);
    }

    deleteBook(id:string){
      return this.http.delete(`${this.API_URL}/books/${id}`);
    }

    saveBook(book:Book){
      return this.http.post(`${this.API_URL}/books`,book);
    }

    updateBook(id:string|number, updateBook:Book):Observable<Book>{
      return this.http.put(`${this.API_URL}/books/${id}`,updateBook);
    }
}
