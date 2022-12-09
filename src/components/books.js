import React from "react";
import { BookItem } from './bookItem';

export class Books extends React.Component {
    render() {
        return this.props.books.map(
            (book) => {
                //add the reload function to each book item
                return <BookItem book={book} key={book._id} Reload={this.props.Reload}></BookItem>
            }
        );
    }
}