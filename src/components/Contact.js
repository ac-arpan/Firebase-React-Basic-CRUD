import React, { useState, useEffect } from 'react'
import ContactForm from './ContactForm'
import firebaseDb from '../firebase'

function Contact() {

    const [ contacts, setContacts ] = useState({})
    const [ currentid, setCurrentId ] = useState('')

    console.log()
    useEffect( () => {
        firebaseDb.child('contacts').on('value', snapshot => {
            if(snapshot.val()) {
                setContacts({
                    ...snapshot.val()
                })
            }
            else{
                setContacts({})
            }
        })
    }, [])

    const addOrEdit = obj => {
        if(!currentid){
            // Create a new Record
            firebaseDb.child('contacts').push(obj, err => err ? console.log(err): setCurrentId(''))
        }
        else {
            // Update a record
            firebaseDb.child(`contacts/${currentid}`).set(obj, err => err ? console.log(err): setCurrentId(''))
        }
    }

    const onDelete = id => {

        // remove a record
        if(window.confirm('Are you sure to delete this record')){
            firebaseDb.child(`contacts/${id}`).remove(err => err ? console.log(err): '' )
        }
    }

    return ( 
    <>
        <div className="jumbotron jumbotron-fluid mt-4">
            <div className="container">
                <h1 className="display-4 text-center">Contact Us</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <ContactForm addOrEdit = {addOrEdit} currentid={currentid} contacts={contacts}/>
            </div>
            <div className="container">
                <table className="table table-striped table-dark table-condensed col-md-12">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(contacts).map( contactId => (
                                <tr key={contactId}>
                                    <td>{contacts[contactId].fullName}</td>
                                    <td>{contacts[contactId].mobile}</td>
                                    <td>{contacts[contactId].email}</td>
                                    <td>
                                        <a className="btn text-primary" onClick={() => setCurrentId(contactId)}><i className="fas fa-pencil-alt"></i></a>
                                        <a className="btn text-danger" onClick={() => onDelete(contactId)}><i className="fas fa-trash"></i></a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
    )
}

export default Contact
