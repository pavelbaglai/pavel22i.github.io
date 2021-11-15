import React, { useState } from "react";
import { Formik, Field } from "formik";
import { Error } from "../Form/Error";
import styles from './FormPreview.module.css'
import { validation } from '../Form/validators/validation'


let FormPreview = (props) => {
  let [additionalAuthor, setAdditionalAuthor] = useState(false)
  return (
    <div className={`${styles.main}`}>
      <Formik initialValues={{
        bookTitle: props.books.chosenBooks.bookTitle,
        firstName: props.books.chosenBooks.firstName,
        lastName: props.books.chosenBooks.lastName,
        date: props.books.chosenBooks.date,
        firstName2: props.books.chosenBooks.firstName2,
        lastName2: props.books.chosenBooks.lastName2,
        firstName3: props.books.chosenBooks.firstName3,
        lastName3: props.books.chosenBooks.lastName3,
        img: props.books.chosenBooks.img,
        id: props.books.chosenBooks.id
      }} validationSchema={validation}
        onSubmit={(values) => {
          localStorage.setItem(props.books.chosenBooks.id, JSON.stringify(values))
          props.ReSavedData(values.id, values)
          props.editModePreview(false)
        }}
      >
        {({ values, errors, touched, handleSubmit, isSubmitting }) =>
          (<form onSubmit={handleSubmit}>

            <label htmlFor='bookTitle'> Название книги*</label>
            <div className={styles.title}>
              <Field type='text' name='bookTitle' />
              <Error touched={touched.bookTitle} message={errors.bookTitle}></Error>
            </div>
            <div className='row'>
              <div className={`col-6 ${styles.firstName}`}>
                <label htmlFor='firstName'> Имя автора*</label>
                <Field type='text' name='firstName' />
                <Error touched={touched.firstName} message={errors.firstName}></Error>
              </div>
              <div className={`col-6 ${styles.lastName}`} >
                <label htmlFor='lastName'>Фамилия автора*</label>
                <Field type='text' name='lastName' />
                <Error touched={touched.lastName} message={errors.lastName}></Error>
              </div>
            </div>
            <div className={styles.buttons}>
              <div><button type='button' className=" btn-secondary" onClick={() => { setAdditionalAuthor(true) }}> Добавить авторов</button>
              </div>
              <div><button type='button' className=" btn-secondary" onClick={() => { setAdditionalAuthor(false) }}> Закрыть</button>
              </div>
            </div>
            {additionalAuthor ?
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
              <Error touched={touched.date} message={errors.date}></Error>
            </div>
            <div className={styles.title}>
              <label htmlFor='ISBN'>ISBN</label>
              <Field type='number' name='ISBN' />
              <Error touched={touched.ISBN} message={errors.ISBN}></Error>
            </div>
            <div className={styles.topButtons}>
              <div>
                <button className='btn-success' type={"submit"} disabled={isSubmitting}>Сохранить</button>
              </div>
              <div>
                <button className='btn-danger' type={"button"} onClick={() => {
                  setAdditionalAuthor(false)
                  props.editModePreview(false);
                  // props.ReSavedData()
                }}>Отмена</button>
              </div>
            </div>
          </form >)}
      </Formik >
    </div >
  );
};

export default FormPreview;


