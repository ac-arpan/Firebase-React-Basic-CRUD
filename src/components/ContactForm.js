import React,{ useState, useEffect } from 'react'

function ContactForm(props) {

    const initialFieldValues = {
        fullName:  '',
        mobile: '',
        email: '',
        address: ''
    }

    const [ values, setValues ] = useState(initialFieldValues)

    useEffect( () => {
        if(props.currentid === ''){
            setValues({
                ...initialFieldValues
            })
        }
        else {
            setValues({
                ...props.contacts[props.currentid]
            })
        }

    }, [props.currentid, props.contacts])

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addOrEdit(values)
    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="John Doe" name="fullName" value={values.fullName} onChange={handleInputChange}/>
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="user@gmail.com" name="email" value={values.email} onChange={handleInputChange}/>
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Phone Number" name="mobile" value={values.mobile} onChange={handleInputChange}/>
                </div>

            </div>
            <div className="form-group">
                <textarea className="form-control" placeholder="Habra, North 24 Pargarans, West Bengal,India" name="address" value={values.address} onChange={handleInputChange} />
            </div>
            <div className="form-group">
            <button type="submit" className="btn btn-info btn-block" >{props.currentid ? 'Update' : 'Submit'}</button>
            </div>
        </form>
    )
}

export default ContactForm
