import React, { useState } from "react";
import { Formik, Field } from "formik";
import { Error } from "./Error";
import styles from './Form.module.css'
import { validation } from './validators//validation'


let Form = (props) => {

  let [authors, setAuthors] = useState(false)
  return (
    <div className={`col-6 ${styles.main}`}>
      <Formik initialValues={{
        bookTitle: '', firstName: '', lastName: '', date: '',
        firstName2: '',
        lastName2: '',
        firstName3: '',
        lastName3: '',
        id: props.books.count,
        img: '',
        ISBN: ''
      }} validationSchema={validation}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true)
          localStorage.setItem(props.books.count, JSON.stringify(values))
          props.UpdateData(values)
          resetForm()
          setSubmitting(false)
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) =>
          (<form onSubmit={handleSubmit}>

            <label htmlFor='bookTitle'> Название книги*</label>
            <div className={styles.title}>
              <Field type='text' name='bookTitle' />
              <Error touched={touched.bookTitle} message={errors.bookTitle}></Error>
            </div>
            <div className='row'>
              <div className={`col-lg-6 col-12 ${styles.firstName}`}>
                <label htmlFor='firstName'> Имя автора*</label>
                <Field type='text' name='firstName' />
                <Error touched={touched.firstName} message={errors.firstName}></Error>
              </div>
              <div className={`col-lg-6 col-12 ${styles.lastName}`} >
                <label htmlFor='lastName'>Фамилия автора*</label>
                <Field type='text' name='lastName' />
                <Error touched={touched.lastName} message={errors.lastName}></Error>
              </div>
            </div>
            <div className={styles.buttons}>
              <div><button type='button' className="mr-1 btn-secondary" onClick={() => { setAuthors(true) }}> Добавить авторов</button>
              </div>
              <div><button type='button' className="ml-1 btn-secondary" onClick={() => { setAuthors(false) }}> Скрыть</button>
              </div>
            </div>

            {authors ?
              <div>
                <div className='row'>
                  <div className={`col-6 ${styles.firstName}`} >
                    <label htmlFor='firstName2'>Имя второго автора</label>
                    <Field type='text' name='firstName2' />
                  </div>
                  <div className={`col-6 ${styles.lastName}`} >
                    <label htmlFor='lastName2'>Фамилия второго автора</label>
                    <Field type='text' name='lastName2' />
                  </div>
                </div>
                <div className='row'>
                  <div className={`col-6 ${styles.firstName}`} >
                    <label htmlFor='firstName3'>Имя третьего автора</label>
                    <Field type='text' name='firstName3' />
                  </div>
                  <div className={`col-6 ${styles.lastName}`} >
                    <label htmlFor='lastName3'>Фамилия третьего автора</label>
                    <Field type='text' name='lastName3' />
                  </div>
                </div>
                <div></div>
              </div>
              : undefined
            }
            <div className={styles.date}>
              <label htmlFor='date'>Дата издания*</label>
              <Field type='number' name='date' />
              <small htmlFor='date'>не ранее 1800 года</small>
              <Error touched={touched.date} message={errors.date}></Error>
            </div>
            <div className={styles.title}>
              <label htmlFor='ISBN'>ISBN (13 или 10 значное уникальное число)</label>
              <Field type='number' name='ISBN' />
              <Error touched={touched.ISBN} message={errors.ISBN}></Error>
            </div>
            <div className={styles.topButtons}>
              <div>
                <button className='btn-success' type={"submit"} disabled={isSubmitting}>Сохранить</button>
              </div>
              <div>
                <button className='btn-danger' onClick={() => props.Canceldata()}>Отмена</button>
              </div>
            </div>
          </form >)}
      </Formik >
    </div >
  );
};

export default Form;


