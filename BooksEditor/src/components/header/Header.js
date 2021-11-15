import React from 'react';
import styles from './header.module.css'
import { connect } from 'react-redux';
import { Add4Books, UpdateData, AddnewBooks, AddnewBooksISBN, Canceldata, CancelISBN } from '../../redux/page-reducer'


let Header = (props) => {
    return (
        <div className={`${styles.header} container-fluid`}>
            Редактор книг
            <div className='row'>
                <div className='col-lg-6'>
                </div>
                <div className='col-6 col-12'>
                    <div className={styles.menu}>
                        <div><button className="btn btn-info" onClick={() => { props.Add4Books() }}> добавить 4 книги по умолчанию</button></div>
                        <div><button className="btn btn-info" onClick={() => { props.AddnewBooks(true); props.CancelISBN(false) }}> Добавить новую книгу вручную</button></div>
                        <div><button className="btn btn-info" data-toggle="tooltip" data-placement="right" title="ISBN-международный номер книги" onClick={() => { props.AddnewBooksISBN(true); props.Canceldata(false) }}> Добавить новую книгу по ISBN</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

let HeaderContainer = connect(mapStateToProps, { Add4Books, UpdateData, AddnewBooks, AddnewBooksISBN, Canceldata, CancelISBN })(Header)
export default HeaderContainer
