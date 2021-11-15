

const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
};

const updateCart = (state, action, num) => {
  const bookId = action.payload;
  const book = state.books.find((book) => book.id === bookId);
  const newItem = {
    id: book.id,
    name: book.title,
    count: 1,
    total: book.price
  };

  const findId = state.cartItems.findIndex (item => item.id === newItem.id);

    if (num === 'del') {
      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, findId),
          ...state.cartItems.slice(findId + 1)
        ]
      }
    }; //удаление товара

    if (findId + 1) {
      const replayBook = [...state.cartItems];
      replayBook[findId].count += newItem.count * num;
      replayBook[findId].total += newItem.total * num;
      if (!replayBook[findId].count) return updateCart(state, action, 'del'); // удаление товара при нулевом значении

      return {
        ...state,
        cartItems: [
        ...replayBook
        ]
      }
    }; //повтор позиции
  
  return {
    ...state,
    cartItems: [
      ...state.cartItems,
      newItem
    ]
  };
} 

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_BOOKS_LOADED':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      };
    case 'FETCH_BOOKS_ERROR':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };
    case 'BOOK_ADDED_TO_CART':
      return updateCart(state, action, '+1');
          
    case 'BOOK_REMOVE_FROM_CART':
      return updateCart(state, action, '-1');
      
    case 'ALL_BOOKS_REMOVE_FROM_CART':
      return updateCart(state, action, 'del');
      
    default:
      return state;
  }
};

export default reducer;