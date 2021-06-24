import { Component, HostBinding, OnInit } from '@angular/core';
import { Book } from 'src/app/models/books';
import { BooksService} from '../../services/books.service'
import { ActivatedRoute,Router } from '@angular/router'

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';  

  book: Book = {
    id: 0,
    img: '',
    title: '',
    year_creation: 0,
    gender: '',
    number_pages: 0,
    name_author: '', 
    birth_date: new Date,  
    city_birth: '', 
    personal_email: '', 
    name_editorial: '',
    editorial_adress: '',
    editorial_phone: 0,
    editorial_email: '', 
    max_books_registered:0, 
  };

  edit: boolean = false;

  constructor( private booksService:BooksService,
               private router:Router,
               private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   const params = this.activatedRoute.snapshot.params;
   if (params.id){
     this.booksService.getBook(params.id)
       .subscribe(
         res => {
           console.log(res);
           this.book = res;
           this.edit = true;
         },
         err => console.error(err)
       )
   }
  }

  saveNewBook(){
    this.booksService.saveBook(this.book)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/books'])
        },
        err => console.error(err)
      )
  }

  updateBook(){
    this.booksService.updateBook(this.book.id, this.book)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/books'])
        },
        err => console.error(err)
      )
  }
}
