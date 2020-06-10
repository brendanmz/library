import React, { useState } from 'react';
import styled from 'styled-components';

const myLibrary = [
  {
    id: 1,
    title: 'Harry Potter and the Order of the Phoenix',
    author: 'J.K. Rowling',
    read: true,
    pages: 450,
    rating: 4
  },
  {
    id: 2,
    title: 'Goodnight Mr. Tom',
    author: 'Michelle Magorian',
    read: true,
    pages: 304,
    rating: 5
  },
  {
    id: 3,
    title: 'How to be an Antiracist',
    author: 'Ibram X. Kendi',
    read: false,
    pages: 320,
    rating: 4
  }
]

const BookWrapper = styled.div`
  max-width: 24rem;
  margin: 2rem;
  padding:1rem;
  border-radius: 1rem;
  box-shadow: 1rem 1rem 2rem gray;
`


// TODO: add toggle for read status
// TODO: add delete button for book
// TODO: add edit button for book details
// TODO: add form to input new books into myLibrary
function Book(props) {
  const readOrUnread = () => props.book.read ? 'Read' : 'Unread';
  return (
    <BookWrapper>
      <h3>{props.book.title}</h3>
      <h5>{props.book.author}</h5>
      <p>Pages: {props.book.pages}</p>
      <p>Rating: {props.book.rating}/5</p>
      <p>{readOrUnread()}</p>
    </BookWrapper>
  )
}

const Booty = ({ children }) => {
  const good = 'good booty'
  return children(good, 'flwekfjlkfekjj')
}

const Parent = () => (
  <Booty>
    {(text, something) => <div>{text} {something}</div>}
  </Booty>

)


function Books() {
  const [library, updateLibrary] = useState(myLibrary)


  const newBook = {
    id: 4,
    title: 'How to program',
    author: 'sdfsd',
    read: false,
    pages: 320,
    rating: 4
  }

  return (
    <div>
      <Parent />
      {library.map((book) => {
        return <Book book={book} key={book.id} />
      })}
      <button onClick={() => updateLibrary([newBook, ...library])}>Add Book</button>
    </div>
  )
}

export default Books