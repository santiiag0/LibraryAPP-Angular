import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service'
import { Book } from '../../models/books';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  authors:any = [];

  constructor( private booksService:BooksService) { }

  buscar(termino: string){
    this.booksService.getAuthor(termino)
      .subscribe(
        res => {
          this.authors = res;
        },
        err => console.log(err)
      )      
  }

  ngOnInit(): void {
    this.authors();
  }

}
