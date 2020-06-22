import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { v4 as uuidv4 } from 'uuid'

const NewBookForm = ({ updateLibrary, library }) => {
  return (
    <Formik
      initialValues={{
        id: uuidv4(),
        title: '',
        author: '',
        pages: 0,
        rating: 1,
        read: false,
      }}
      validationSchema={Yup.object({
        title: Yup.string().required('Required'),
        author: Yup.string().required('Required'),
        pages: Yup.number()
          .min(0)
          .required('Required'),
        rating: Yup.number()
          .min(1)
          .max(5),
        read: Yup.boolean().required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        // alert(JSON.stringify(values, null, 2))
        let newBook = { ...values }
        console.log(newBook)
        updateLibrary([newBook, ...library])
        setSubmitting(false)
      }}
    >
      <Form>
        <label htmlFor='title'>Book Title</label>
        <Field name='title' type='text' />
        <ErrorMessage name='title' />

        <label htmlFor='author'>Author</label>
        <Field name='author' type='text' />
        <ErrorMessage name='author' />

        <label htmlFor='pages'># of Pages</label>
        <Field name='pages' type='number' />
        <ErrorMessage name='pages' />

        <label htmlFor='rating'>Rating</label>
        <Field name='rating' type='range' min='1' max='5' />
        <ErrorMessage name='rating' />

        <label htmlFor='read'>Read it?</label>
        <Field name='read' type='checkbox' />
        <ErrorMessage name='read' />

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}

export default NewBookForm
