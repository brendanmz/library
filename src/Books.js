import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import NewBookForm from './Form'

const BookWrapper = styled.div`
  max-width: 24rem;
  margin: 2rem;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 1rem 1rem 2rem gray;
`

const myLibrary = [
  {
    id: uuidv4(),
    title: 'Harry Potter and the Order of the Phoenix',
    author: 'J.K. Rowling',
    read: true,
    pages: 450,
    rating: 4,
  },
  {
    id: uuidv4(),
    title: 'Goodnight Mr. Tom',
    author: 'Michelle Magorian',
    read: true,
    pages: 304,
    rating: 5,
  },
  {
    id: uuidv4(),
    title: 'How to be an Antiracist',
    author: 'Ibram X. Kendi',
    read: false,
    pages: 320,
    rating: 4,
  },
]
let myLibraryCopy = myLibrary

// TODO: add toggle for read status
// TODO: add delete button for book
// TODO: add edit button for book details
function Book({ handleDelete, ...props }) {
  // const [bookVisible, updateBookVisible] = useState(true)
  const readOrUnread = () => (props.book.read ? 'Read' : 'Unread')
  const book = props.book
  const [bookExists, setBookExists] = useState(true)

  return (
    bookExists && (
      <BookWrapper>
        <h3>{book.title}</h3>
        <h5>{book.author}</h5>
        <p>Pages: {book.pages}</p>
        <p>Rating: {book.rating}/5</p>
        <p>{readOrUnread()}</p>
        <button
          onClick={(event) => handleDelete(myLibraryCopy, book, setBookExists)}
        >
          Delete
        </button>
        <button>Edit</button>
      </BookWrapper>
    )
  )
}

function Books() {
  const handleDelete = (arr, book, setBookExists) => {
    arr.filter((bookLoop) => bookLoop.id !== book.id)
    setBookExists(false)
  }

  return (
    <div>
      {myLibraryCopy.map((book) => {
        return <Book book={book} key={book.id} handleDelete={handleDelete} />
      })}
    </div>
  )
}

function Page() {
  const [library, updateLibrary] = useState(myLibraryCopy)
  return (
    <>
      <Books />
      <NewBookForm updateLibrary={updateLibrary} library={library} />
    </>
  )
}

export default Page
