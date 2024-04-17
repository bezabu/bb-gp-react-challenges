import React from 'react'
import Book from './Book'

function RenderingLists() {
    const booklist = [
        'Dune',
        'LOTR',
    ]

    const books = [
        {
            title: 'Dune',
            author: 'Frank Herbert',
            pages: 783
        },
        {
            title: 'LOTR',
            author: 'J. R. R. Tolkien',
            pages: 964
        }
    ]
  return (
    <div>
        {booklist.map(book => {
            return <h2 key={book}>{book}</h2>
        })}
        <hr />
        {
            books.map(book => {
                return (
                    <div key={book.title}>
                        <h5>{book.title}</h5>
                        <p>{book.author}</p>
                        <p>{book.pages}</p>
                    </div>
                )
            })
        }
        <hr />
        {
            books.map(book => {
                return <Book key={book.title} book={book} />
            })    
        }
    </div>
  )
}

export default RenderingLists