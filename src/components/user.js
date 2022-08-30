import React, { Component } from 'react';

export default class User extends Component {

    render() {
        let { firstname, lastname, email, avatar } = this.props;
        return (
            <div className='container my-3'>
                <div className="card" style={{ width: "15rem", margin:"0px auto"}}>
                    <div className="card-body">
                    <h5 className="card-title">{firstname + ' ' + lastname}</h5>
                      <img src={avatar} className="card-img-body" alt={avatar} style={{ width: "12rem"}}/>
                        <p className="card-text">{email}</p>
                    </div>
                </div>
            </div>
        )
    }
}
