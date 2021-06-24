import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/books';
import { BooksService } from '../../services/books.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books:any = [];

  constructor( private booksService: BooksService ) {}

  ngOnInit(): void {
      this.getBook();
  }

  getBook(){
    this.booksService.getBooks().subscribe(
      res => {
        this.books = res;
      },
      err => console.error(err)
    );
  }

  deleteBook(id:string){
    this.booksService.deleteBook(id)
      .subscribe(
        res => {
          console.log(res);
          this.getBook();
        },
        err => console.log(err)
      )
  }

}
