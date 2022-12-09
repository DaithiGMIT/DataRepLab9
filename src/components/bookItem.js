import React from "react";
import Card from 'react-bootstrap/Card';
// Import Button from react
import Button from "react-bootstrap/Button";
//Import Axios to communicate with http for deletion
import axios from "axios";
import { Link } from "react-router-dom";
export class BookItem extends React.Component {
    //create a constructor to bind the delete book event
    constructor() {
        super();
        this.DeleteBook = this.DeleteBook.bind(this);
    }

    // create a function for the delete button
    DeleteBook(e) {
        e.preventDefault();
        //async http request
        axios.delete('http://localhost:4000/api/book/' + this.props.book._id)
            .then(()=>{this.props.Reload();})//calls the reload function after deletion
            .catch();

    }

    render() {
        return (
            <div>
                {/* <h4>{this.props.book.title}</h4>
        <img src={this.props.book.thumbnailUrl}></img>
                <h6>{this.props.book.authors[0]}</h6> */}

                <Card>
                    <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.book.cover}></img>
                            <footer >
                                {this.props.book.author}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={'/edit/' + this.props.book._id} className="btn btn-primary">Edit</Link>
                    {/* Use button and chamge variant to make button red add on click event */}
                    <Button variant="danger" onClick={this.DeleteBook}>Delete</Button>
                </Card>
            </div>
        );
    }
}