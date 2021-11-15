import React from 'react';
import styles from './firstNameForm.module.css'
import { Error } from '../../components/Form/Error';

let firstNameForm = (props) => {
  return (
    <div>
      <label htmlFor='firstName'> Имя автора*</label>
      <div className={styles.firstName}>
        <input
          type="text"
          name='firstName'
          onChange={props.form.handleChange}
          value={props.field.values}
          onBlur={props.form.handleBlur}
          className={`${styles.titleInput} + " " + ${props.form.touched.firstName && props.form.errors.firstName ? styles.hasError : null}`}
        />
        <Error touched={props.form.touched.firstName} message={props.form.errors.firstName}></Error>
      </div>
    </div>
  )
}
export default firstNameForm


{/* <label htmlFor='firstName'> Имя автора*</label>
<div className={styles.firstName}>
  <input
    type="text"
    name='firstName'
    onChange={handleChange}
    value={values.firstName}
    onBlur={handleBlur}
    className={`${styles.firstNameInput} + " " + ${touched.firstName && errors.firstName ? styles.hasError : null}`}
  />
  <Error touched={touched.firstName} message={errors.firstName}></Error>

</div> */}