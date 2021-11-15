import React from 'react';
import { Formik, Field } from 'formik';
import Axios from 'axios';
import { validationISBN } from '../Form/validators/validation';
import styles from './ISBN.module.css'


let ISBN = (props) => {
    return (
        <div className={`col-6 ${styles.isbn}`}>
            <Formik initialValues={{
                isbnNumber: ''
            }}
                validationSchema={validationISBN}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true)
                    Axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${values.isbnNumber}&jscmd=data&format=json`).then(response => {
                        if (response.data.length !== 0) {
                            localStorage.setItem(props.books.count, JSON.stringify({
                                bookTitle: response.data[`ISBN:${values.isbnNumber}`].title,
                                firstName: response.data[`ISBN:${values.isbnNumber}`].authors[0].name,
                                lastName: '',
                                date: response.data[`ISBN:${values.isbnNumber}`].publish_date,
                                img: response.data[`ISBN:${values.isbnNumber}`].cover ? response.data[`ISBN:${values.isbnNumber}`].cover.large : undefined,
                                firstName2: '',
                                lastName2: '',
                                firstName3: '',
                                lastName3: '',
                                id: props.books.count,
                            }))
                            props.UpdateData({
                                bookTitle: response.data[`ISBN:${values.isbnNumber}`].title,
                                firstName: response.data[`ISBN:${values.isbnNumber}`].authors[0].name,
                                lastName: '',
                                date: response.data[`ISBN:${values.isbnNumber}`].publish_date,
                                img: response.data[`ISBN:${values.isbnNumber}`].cover ? response.data[`ISBN:${values.isbnNumber}`].cover.large : undefined,
                                firstName2: '',
                                lastName2: '',
                                firstName3: '',
                                lastName3: '',
                                id: props.books.count,
                            })
                        }
                    }
                    ).then(resetForm())
                        .then(setSubmitting(false))
                        .catch(error => alert('Такого номера не существует'))

                }
                }
            >
                {({ isSubmitting, handleSubmit, errors, touched }) =>
                    (
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className='form-group'>
                                <label htmlFor="isbnNumber">ISBN*</label>
                                <Field type='number' name='isbnNumber' />
                                <small className="form-text text-muted">13 или 10 значное число без пробелов и -</small>
                                <div className={styles.buttons}>
                                    <button type={"submit"} disabled={isSubmitting} className=' btn-success '>Добавить</button>
                                    <button type={"button"} onClick={() => { props.CancelISBN(false) }} disabled={isSubmitting} className='btn-danger'>Отмена</button>
                                </div>

                                {touched && errors ?
                                    <div className={styles.error}>{errors.isbnNumber}</div > : undefined}
                                <br />
                                <a href='https://openlibrary.org/' target="_blank" > номера книг можно посмотреть тут</a>

                            </div>

                        </form>
                    )}


            </Formik >
        </div >
    )
}

Axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:1609422635&jscmd=data&format=json`).then(response => { console.log(response) })

export default ISBN