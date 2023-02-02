"use client"
import React from 'react';
import { useFormik } from 'formik'

const validate = (values) => {
    const errors = {}

    if (!values.email) {
        errors.email = 'Required'
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    return errors
}

export default function Form() {
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input type="name" name="name" id="name" placeholder='name'
                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                    {formik.touched.name && formik.errors.name && (
                        <span>{formik.errors.name}</span>
                    )}
                    <input type="email" name="email" id="email" placeholder='email'
                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                    {formik.touched.email && formik.errors.email && (
                        <span>{formik.errors.email}</span>
                    )}
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}