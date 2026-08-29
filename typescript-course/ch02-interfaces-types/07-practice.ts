// 07-practice.ts
// Final practice for Chapter 2

// 1. Book interface
interface Book {
  title: string;
  author: string;
  pages: number;
  isPublished: boolean;
}

// 2. Genre type alias
type Genre = 'fiction' | 'non-fiction' | 'science';

// 3. BookID type alias
type BookID = string | number;

// 4. Create books
const bookA: Book = {
  title: 'The Great Adventure',
  author: 'John Doe',
  pages: 250,
  isPublished: true
};

const bookB: Book = {
  title: 'Science of Everything',
  author: 'Jane Smith',
  pages: 400,
  isPublished: false
};

// Use Genre and BookID
const bookAGenre: Genre = 'fiction';
const bookBGenre: Genre = 'science';
const bookAID: BookID = 1;
const bookBID: BookID = 'SCI-002';

// 5. Log them
console.log('Book 1: ' + bookA.title + ' by ' + bookA.author);
console.log('  Genre: ' + bookAGenre);
console.log('  ID: ' + bookAID);
console.log('  Pages: ' + bookA.pages);
console.log('  Published: ' + bookA.isPublished);

console.log('');

console.log('Book 2: ' + bookB.title + ' by ' + bookB.author);
console.log('  Genre: ' + bookBGenre);
console.log('  ID: ' + bookBID);
console.log('  Pages: ' + bookB.pages);
console.log('  Published: ' + bookB.isPublished);