import React, { Component } from 'react'

import './Body.css'

class Body extends Component {
    /*constructor(props) {
        super(props)


    }*/

    render () {
        return (
            <div className="Body">
                <ul className="choices">
                    <li>
                        Food Categories
                    </li>
                    <li>
                        Find By UPC
                    </li>
                    <li>
                        Product Detail Information
                    </li>
                    <li>
                        Products Per Category
                    </li>
                    <li>
                        Products Per Search Term
                    </li>
                    <li>
                        Food Subcategories
                    </li>
                </ul>
            </div>
        )
    }
}

export default Body
