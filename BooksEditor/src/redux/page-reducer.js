let infoFromLocal = () => {
    let arr = []
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        arr.push(JSON.parse(localStorage.getItem(key)))
    } return arr
}
let initialState =
{
    books: localStorage.length > 0 ? infoFromLocal() : [],
    createMode: false,
    createModeISBN: false,
    chosenBooks: '',
    AdditionalAuthors: false,
    count: localStorage.length ? localStorage.length : 0,
    editMode: false
}
export const BooksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Add4Books': {
            if (localStorage.length === 0) {
                action.data.map(el => localStorage.setItem(el.id, JSON.stringify(el)));
                return {
                    ...state,
                    count: state.count + 4,
                    books: action.data
                }
            }
        } return state
        case 'AddNewBook': {
            return {
                ...state,
                createMode: action.boolean,
            }
        }
        case 'AddnewBooksISBN': {
            return {
                ...state,
                createModeISBN: action.boolean,
            }
        }
        case 'UpdateData': {
            return {
                ...state,
                count: state.count + 1,
                books: [...state.books, action.data],
            }
        }
        case 'Canceldata': {
            return {
                ...state,
                createMode: action.boolean,
            }
        }
        case 'CancelISBN': {
            return {
                ...state,
                createModeISBN: action.boolean,
            }
        }
        case 'editMode': {
            return {
                ...state,
                editMode: action.boolean,
            }
        }
        case 'setAdditionalAuthor': {
            return {
                ...state,
                AdditionalAuthors: action.boolean,
            }
        }
        case 'BooksIsPicked': {
            return {
                ...state,
                chosenBooks: action.data,
            }
        }
        case 'ReSavedData': {
            return {
                ...state,
                chosenBooks: '',
                books: state.books.map(el => {
                    if (el.id === action.id) {
                        return (el = action.values)
                    } return el
                })
            }
        }
        case 'DeleteBook': {
            return {
                ...state,
                books: state.books.filter(el => el.id !== action.id),
            }
        }
        case 'filterByTitle': {
            return {
                ...state,
                books: state.books.sort(function (a, b) {
                    var x = a.bookTitle.toLowerCase();
                    var y = b.bookTitle.toLowerCase();
                    if (x < y) { return -1; }
                    if (x > y) { return 1; }
                    return 0
                })
            }
        }
        case 'filterByDate': {
            return {
                ...state,
                books: [...state.books.sort(function (a, b) {
                    return a.date - b.date;
                }
                )]
            }
        }
        default:
            return state
    }
}
export const filterByTitle = () => {
    return ({ type: 'filterByTitle' })
}

export const filterByDate = () => {
    return ({ type: 'filterByDate' })
}
export const AddnewBooks = (boolean) => {
    return ({ type: 'AddNewBook', boolean })
}
export const Add4Books = (data = books) => {
    return ({ type: 'Add4Books', data })
}
export const UpdateData = (data) => {
    return ({ type: 'UpdateData', data })
}

export const AddnewBooksISBN = (boolean) => {
    return ({ type: 'AddnewBooksISBN', boolean })
}
export const Canceldata = (boolean = false) => {
    return ({ type: 'Canceldata', boolean })
}
export const CancelISBN = (boolean = false) => {
    return ({ type: 'CancelISBN', boolean })
}
export const BooksIsPicked = (data) => {
    return ({ type: 'BooksIsPicked', data })
}
export const ReSavedData = (id, values) => {
    return ({ type: 'ReSavedData', id, values })
}
export const DeleteBook = (id) => {
    return ({ type: 'DeleteBook', id })
}
export const setAdditionalAuthor = (boolean) => {
    return ({ type: 'setAdditionalAuthor', boolean })
}
export const editModePreview = (boolean) => {
    return ({ type: 'editMode', boolean })
}
let books = [
    {
        bookTitle: 'Властелин колец',
        lastName: "Толкин",
        firstName: 'Джон',
        date: '1955',
        id: 0,
        img: "https://cdn1.ozone.ru/multimedia/1020109979.jpg"
    },
    {
        bookTitle: 'Граф Монте-Кристо',
        lastName: "Дюма",
        firstName: 'Александр',
        date: '1846',
        id: 1,
        img: 'https://cdn1.ozone.ru/s3/multimedia-x/6007263033.jpg'
    },
    {
        bookTitle: 'Маленький принц',
        lastName: "Сент-Экзюпери",
        firstName: 'Антуан',
        date: '1943',
        id: 2,
        img: 'https://cdn1.ozone.ru/multimedia/1020199681.jpg'
    },
    {
        bookTitle: 'Алхимик',
        lastName: "Коэльо",
        firstName: 'Пауло',
        date: '1988',
        id: 3,
        img: 'https://book24.ua/upload/iblock/cb8/cb830f777b5617abc14f77dda7b074a8.jpg'
    },
]
