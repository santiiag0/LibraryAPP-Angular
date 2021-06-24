export interface Book {
    id?:number;
    img?: string;
    title?: string;
    year_creation?: number;
    gender?: string; 
    number_pages?: number;
    name_author?: string; 
    birth_date?: Date; 
    city_birth?: string; 
    personal_email?: string; 
    name_editorial?: string;
    editorial_adress?: string;
    editorial_phone?:number; 
    editorial_email?: string; 
    max_books_registered?:number; 
}