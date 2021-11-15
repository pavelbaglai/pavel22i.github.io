import React from "react";
import { Formik } from "formik";
import * as Yup from 'yup'
import { Error } from "./Error";
import styles from './Form.module.css'



const validation = Yup.object().shape({
  bookTitle: Yup.string()
    .min(2, 'Минимум 2 символа')
    .max(30, 'Не более 30 символов')
    .required('обязательное поле')
    .trim(''),
  firstName: Yup.string()
    .min(2, 'Минимум 2 символа')
    .max(20, 'Не более 20 символов')
    .required('обязательное поле')
    .trim(''),
  lastName: Yup.string()
    .min(2, 'Минимум 2 символа')
    .max(20, 'Не более 20 символов')
    .required('обязательное поле')
    .trim(''),
  date: Yup.number()
    .min(1800, 'не ранее 1800года')
    .max(2020, 'хорошая попытка')
    .required('обязательное поле')
    .integer('целое число')
})


let Form = () => {

  return (
    <div className="col-6">
      <Formik initialValues={{
        bookTitle: '', firstName: '', lastName: '', date: '',
        firstName2: '', lastName2: '',
        firstName3: '', lastName3: ''
      }} validationSchema={validation}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true)

          resetForm()
          setSubmitting(false)
        }}
      >

        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) =>
          (<form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='bookTitle'> Название книги</label>
              <div>
                <input
                  type="text"
                  name='bookTitle'
                  placeholder='Название книги'
                  onChange={handleChange}
                  value={values.bookTitle}
                  onBlur={handleBlur}
                  className={touched.bookTitle && errors.bookTitle ? `${styles.hasError}` : null}
                />
                <Error touched={touched.bookTitle} message={errors.bookTitle}></Error>
              </div>

            </div>
            <div>
              <label htmlFor='firstName'> Имя автора</label>
              <div>
                <input
                  type="text"
                  name='firstName'
                  placeholder='Имя автора'
                  onChange={handleChange}
                  value={values.firstName}
                  onBlur={handleBlur}
                  className={touched.firstName && errors.firstName ? `${styles.hasError}` : null}
                />
                <Error touched={touched.firstName} message={errors.firstName}></Error>
              </div>

            </div>
            <div>
              <label htmlFor='lastName'> Фамилия автора</label>
              <div>
                <input
                  type="text"
                  name='lastName'
                  placeholder='Фамилия автора'
                  onChange={handleChange}
                  value={values.lastName}
                  onBlur={handleBlur}
                  className={touched.lastName && errors.lastName ? `${styles.hasError}` : null}
                />
                <Error touched={touched.lastName} message={errors.lastName}></Error></div>
            </div>
            <div>
              <label htmlFor='date'> год издания</label>
              <div>
                <input
                  type="number"
                  name='date'
                  placeholder='год изданияи'
                  onChange={handleChange}
                  value={values.date}
                  onBlur={handleBlur}
                  className={touched.date && errors.date ? `${styles.hasError}` : null}
                />
                <Error touched={touched.date} message={errors.date}></Error>
              </div>
            </div>
            <button type={"submit"} disabled={isSubmitting}>Submit</button>
          </form>)}
      </Formik>
    </div >
  );
};

export default Form;



// <label htmlFor="bookName"> Название книги</label>
// <br />
// <input type="text"
//   required name="bookName" maxLength="30" placeholder="не более 30 символов" >
// </input>
// <br />
// <label htmlFor="firstName"> Имя автора</label>
// <br />
// <input type="text" required name="firstName" maxLength="20" placeholder="не более 20 символов" >
// </input>
// <br />
// <label htmlFor="lastName"> Фамилия автора</label>
// <br />
// <input type="text" required name="lastName" maxLength="20" placeholder="не более 20 символов"></input>
// <br />
// <label htmlFor="date"> Дата издания</label>
// <br />
// <input type="number" maxLength="4" max='2020' min="1800" required name="date" placeholder="не ранее 1800 года"></input>
// <button onClick={send}></button>



// let send = (event) => {
//   // event.preventDefault()
//   let data = {
//     bookName: document.forms[0].bookName.value,
//     firstName: document.forms[0].firstName.value,
//     lastName: document.forms[0].lastName.value,
//     date: document.forms[0].date.value
//   }

// }