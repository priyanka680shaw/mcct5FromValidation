# React Form and Display Application

This project is a simple React application that demonstrates a form with validation and a display component. The form uses Formik for form management and Yup for validation.

## Folder Structure


## Description

- **Form Component**: A form component that allows users to input their name, email, password, and confirm their password. It uses Formik for form handling and Yup for validation.
- **Display Component**: A simple display component that shows an image.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Formik**: A library for managing form state and handling validation.
- **Yup**: A library for schema validation.
- **Tailwind CSS**: A utility-first CSS framework for styling.
Live Demo
You can view a live demo of the application here.
## Getting Started

To get started with this project, follow these steps:

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. **Install Dependencies**:

    Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:

    ```bash
    npm install
    ```

3. **Start the Development Server**:

    ```bash
    npm start
    ```

    This will start the development server and open the application in your default browser. You should see the form and display components in action.

## Usage

- **Form Component**: 
  - The form fields include Name, Email, Password, and Confirm Password.
  - Validation is performed as you type and when the form is submitted.
  - The submit button is enabled only when the form is valid and has been touched.

- **Display Component**:
  - Displays a static image.

## Schema

The form validation schema is defined in `src/schema/index.js` using Yup:

```javascript
import * as Yup from "yup";

export const singUpSchema = Yup.object({
    userName: Yup.string().min(2).max(20).required("Please enter your name!"),
    userEmail: Yup.string().email().required("Enter Email!"),
    userPassword: Yup.string().min(6).matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ).required("Please enter your password!"),
    confirmPassword: Yup.string().min(6).required().oneOf([Yup.ref("userPassword"), null], "Passwords must match")
});
