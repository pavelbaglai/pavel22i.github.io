import React from 'react';
import styles from './DateForm.module.css'
import { Error } from '../../components/Form/Error';

let dateForm = (props) => {
    return (
        <div>
            <label htmlFor='date'> Имя автора*</label>
            <div className={styles.date}>
                <input
                    type="number"
                    name='date'
                    onChange={props.form.handleChange}
                    value={props.field.values}
                    onBlur={props.form.handleBlur}
                    className={`${styles.titleInput} + " " + ${props.form.touched.date && props.form.errors.date ? styles.hasError : null}`}
                />
                <Error touched={props.form.touched.date} message={props.form.errors.date}></Error>
            </div>
        </div>
    )
}
export default dateForm
