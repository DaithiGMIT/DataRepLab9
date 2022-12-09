import React from "react";
import { Books } from "./books";
import axios from "axios";

export class Read extends React.Component {
    //create a constructor to bind the function and have the page reloaded
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    //create a function to reload the page
    //Use the didMount code as is the same functionally
    componentDidMount() {
        axios.get('http://localhost:4000/api/books')
            .then((response) => {
                this.setState({ books: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        books: []
    }

    render() {
        return (
            <div>
                <h3>Hello from my Read component!</h3>
                {/* Pass the did mount method to the books and call it reload */}
                <Books books={this.state.books} Reload={this.componentDidMount}></Books>
            </div>
        );
    }
}