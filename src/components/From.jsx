import React from 'react';
import { useFormik } from 'formik';
import { singUpSchema } from './schema';

const Form = () => {
    let inputForm = {
        container: "md:w-full w-[250px] m:auto h-[500px] md:min-h-[400px] flex justify-center items-center bg-gray-500 px-4 py-4 relative left-8 top-2 absolute top-0",
        formContainer: "w-full max-w-full bg-white shadow-lg rounded-lg p-6",
        inputContainer: "mb-4",
        label: "block text-gray-700 font-bold mb-2",
        inputBox: "w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500",
        errorMessage: "text-red-800 text-sm mt-1",
        submitButtonDisabled: "w-full bg-gray-400 text-white py-2 px-4 rounded-md font-bold opacity-50 cursor-not-allowed",
        submitButtonEnabled: "w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-bold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500",
    };

    let initialValues = {
        userName: "",
        userEmail: "",
        userPassword: "",
        confirmPassword: ""
    };

    // Destructure formik hook with validateOnChange and validateOnBlur enabled
    const { values, errors, handleBlur, handleSubmit, handleChange, touched, isValid, dirty } = useFormik({
        initialValues: initialValues,
        validationSchema: singUpSchema,
        validateOnChange: true,  // Validates as you type
        validateOnBlur: true,    // Validates on blur
        onSubmit: (values , action) => {
            console.log(values);
            action.resetForm()
        }
    });

    return (
        <div className={inputForm.container}>
            <form onSubmit={handleSubmit} className={inputForm.formContainer}>
                {/* User Name Field */}
                <div className={inputForm.inputContainer}>
                    <label htmlFor='userName' className={inputForm.label}>Name</label>
                    <input
                        type='text'
                        placeholder='User Name'
                        name='userName'
                        id='userName'
                        autoComplete='off'
                        className={inputForm.inputBox}
                        value={values.userName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.userName && touched.userName ? (
                        <p className={inputForm.errorMessage}>{errors.userName}</p>
                    ) : null}
                </div>

                {/* User Email Field */}
                <div className={inputForm.inputContainer}>
                    <label htmlFor='userEmail' className={inputForm.label}>Email</label>
                    <input
                        type='email'
                        placeholder='User Email'
                        name='userEmail'
                        id='userEmail'
                        className={inputForm.inputBox}
                        autoComplete='off'
                        value={values.userEmail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.userEmail && touched.userEmail ? (
                        <p className={inputForm.errorMessage}>{errors.userEmail}</p>
                    ) : null}
                </div>

                {/* User Password Field */}
                <div className={inputForm.inputContainer}>
                    <label htmlFor='userPassword' className={inputForm.label}>Password</label>
                    <input
                        type='password'
                        placeholder='User Password'
                        name='userPassword'
                        id='userPassword'
                        className={inputForm.inputBox}
                        autoComplete='off'
                        value={values.userPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.userPassword && touched.userPassword ? (
                        <p className={inputForm.errorMessage}>{errors.userPassword}</p>
                    ) : null}
                </div>

                {/* Confirm Password Field */}
                <div className={inputForm.inputContainer}>
                    <label htmlFor='confirmPassword' className={inputForm.label}>Confirm Password</label>
                    <input
                        type='password'
                        placeholder='Confirm Password'
                        name='confirmPassword'
                        id='confirmPassword'
                        className={inputForm.inputBox}
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.confirmPassword && touched.confirmPassword ? (
                        <p className={inputForm.errorMessage}>{errors.confirmPassword}</p>
                    ) : null}
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type='submit'
                        disabled={!(isValid && dirty)} // Disable if not valid or no changes
                        className={isValid && dirty ? inputForm.submitButtonEnabled : inputForm.submitButtonDisabled}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
