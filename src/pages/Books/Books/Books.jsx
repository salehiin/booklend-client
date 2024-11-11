
import { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://booklend-server.vercel.app/books')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    return (
        <div>
            <div className='text-orange-600 p-12'>
                <h1 className='text-3xl font-bold p-4'>Explore Our Collection</h1>
                <p className='text-lg text-[#333333]'>Discover a world of knowledge, imagination, and adventure with our extensive book collection. From timeless classics to modern bestsellers, our library offers a wide variety of genres to suit every reader. Whether you're seeking insights on science and technology, inspiration from literature, or a thrilling journey through sci-fi and fantasy, you'll find books to spark your curiosity and fuel your passion for reading. Browse our curated categories, learn about different authors, and dive into the unique stories behind each title. Welcome to your next great read!</p>
                {/* <p>Books{books.length}</p> */}
            </div>
            <div className='grid md:grid-cols-2 gap-4 pb-6'>
                {
                    books.map(book => <Book
                    key={book._id}
                    book={book}
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;