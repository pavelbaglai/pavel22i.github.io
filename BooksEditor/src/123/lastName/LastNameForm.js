import React from 'react';
import { Error } from '../../components/Form/Error';
import styles from './lastNameForm.module.css'

let LastNameForm = ({ form, field }) => {
    return (
        <div>
            <label htmlFor='lastName'> Фамилия автора*</label>
            <div className={styles.lastName}>
                <input
                    onSubmit={form.resetForm}
                    type="text"
                    name='lastName'
                    onChange={form.handleChange}
                    value={field.value.lastName}
                    onBlur={form.handleBlur}
                    className={`${styles.lastNameInput} + " " + ${form.touched.lastName && form.errors.lastName ? styles.hasError : null}`}
                />
                <Error touched={form.touched.lastName} message={form.errors.lastName}></Error>
            </div>
        </div>
    )
}
export default LastNameForm
