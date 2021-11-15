import * as Yup from 'yup'
export const validation = Yup.object().shape({
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
        .integer('целое число'),
    firstName2: Yup.string()
        .min(2, 'Минимум 2 символа')
        .max(20, 'Не более 20 символов')
        .trim(''),
    lastName2: Yup.string()
        .min(2, 'Минимум 2 символа')
        .max(20, 'Не более 20 символов')
        .trim(''),
    firstName3: Yup.string()
        .min(2, 'Минимум 2 символа')
        .max(20, 'Не более 20 символов')
        .trim(''),
    lastName3: Yup.string()
        .min(2, 'Минимум 2 символа')
        .max(20, 'Не более 20 символов')
        .trim(''),
    ISBN: Yup.number()
        .integer('целое число')
})

export const validationISBN = Yup.object().shape({
    isbnNumber: Yup.number("только числа").integer('введите целое число').required('обязательное поле').positive("только положительные")
})