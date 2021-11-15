

export default class BookstoreService {

  data = [
    {
      id: 3,
      title: 'A MilLion Little Pieces',
      author: 'James Frey',
      price: 20,
      image: 'https://static-cse.canva.com/blob/193579/millionlittlepieces_2.9a38277e.jpg'
    },
    {
      id: 5,
      title: 'Чарлз Дарвин Революция',
      author: 'Аннабель Кремер и Франсуа Олислеже',
      price: 21,
      image: 'https://static-cse.canva.com/blob/193595/regnum_picture_1562591900204525_normal.b1be4d47.jpg'
    }
  ]
  
  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data)
      }, 1000);
    })
  }                                         // асинх запрос данных
}