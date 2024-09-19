
//yup is used for the validation part of form (creating schema of the from noema as in mongodb )
import * as Yup from "yup"


export const singUpSchema = Yup.object({
    userName : Yup.string().min(2).max(20).required("Please enter your name !"),
        userEmail : Yup.string().email().required("Enter Email !"),
        userPassword : Yup.string().min(6).matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ).required("Please Enter Your Password !"),
        confirmPassword : Yup.string().min(6).required().oneOf([Yup.ref("userPassword") , null] , "Password must be matched")
})