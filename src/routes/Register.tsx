import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import AuthContext from "../context/AuthContext"
import * as Yup from "yup"
import { RegisterFormType } from "../@types"
import { Form,Formik } from "formik"
import { Field } from "formik/dist/Field"
import { ErrorMessage } from "formik/dist/ErrorMessage"
const Register = () => {

  const formlabel="form-label"
  const formcontrol="form-control"
  const usernamestr="username"
  const emailstr="email"
  const passwordstr="password"
  const fieldsize="w-50 mx-auto"
  const alertdanger="alert alert-danger"
  const text="text"
  const div="div"
  const home="/"

  const [isLoading, setIsLoading] = useState(false)

  const {isLoggedIn}=useContext(AuthContext)
  const initialValues={
    username:"",
    email:"",
    password:"",
  }
  
  const validationSchema=Yup.object({
    username:Yup.string().min(3,"Name too short").required(),
    email:Yup.string().email("Must be a valid email").required(),
    passwrod:Yup.string().min(8,"Password too short").required()
  })

  const handleRegister=(formValues:RegisterFormType)=>{
    alert(JSON.stringify(formValues))
  }

  if(isLoggedIn){
    return <Navigate to={home} />
  }
  return (
    <div>
      <Formik
      initialValues={initialValues}
      onSubmit={handleRegister}
      validationSchema={validationSchema}
      >
        <Form className={fieldsize}>
          <div>
            <label htmlFor={usernamestr} className={formlabel}>
              User Name
            </label>
            <Field 
            name={usernamestr}
            type={text}
            className={formcontrol}
            id={usernamestr}
            />
            <ErrorMessage 
            name={usernamestr}
            component={div}
            className={alertdanger}
            />
          </div>
          <div>
            <label htmlFor={emailstr} className={formlabel}>
              Email
            </label>
            <Field 
            name={emailstr}
            type={text}
            className={formcontrol}
            id={emailstr}
            />
            <ErrorMessage 
            name={emailstr}
            component={div}
            className={alertdanger}
            />
          </div>
          <div>
            <label htmlFor={passwordstr} className={formlabel}>
              password
            </label>
            <Field 
            name={passwordstr}
            type={text}
            className={formcontrol}
            id={passwordstr}
            />
            <ErrorMessage 
            name={passwordstr}
            component={div}
            className={alertdanger}
            />
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Register