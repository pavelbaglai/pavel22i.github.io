import React from 'react';
import styles from './TitleForm.module.css'
import { Error } from '../../components/Form/Error';

let TitleForm = (props) => {
  return (
    <div>
      <label htmlFor='bookTitle'> Название книги*</label>
      <div className={styles.title}>
        <input
          type="text"
          name='bookTitle'
          onChange={props.form.handleChange}
          value={props.field.values}
          onBlur={props.form.handleBlur}
          className={`${styles.titleInput} + " " + ${props.form.touched.bookTitle && props.form.errors.bookTitle ? styles.hasError : null}`}
        />
        <Error touched={props.form.touched.bookTitle} message={props.form.errors.bookTitle}></Error>

      </div>
    </div>
  )
}
export default TitleForm



{/* <div>
              <label htmlFor='bookTitle'> Название книги*</label>
              <div className={styles.title}>
                <input
                  type="text"
                  name='bookTitle'
                  onChange={handleChange}
                  value={values.bookTitle}
                  onBlur={handleBlur}
                  className={`${styles.titleInput} + " " + ${touched.bookTitle && errors.bookTitle ? styles.hasError : null}`}
                />
                <Error touched={touched.bookTitle} message={errors.bookTitle}></Error>
              </div>
            </div> */}