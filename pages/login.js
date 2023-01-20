import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import NextLink from 'next/link';

const LoginScreen = () => {
  const { handleSubmit, control, formState: { errors }} = useForm();
  const submitHandler = async (email, password) => {

  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
     <Controller 
       name='email' 
       control={control}
       defaultValue='' 
       rules={{
        required: true,
        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
       }}    
       render={({ field }) => (
        <textfield
          variant='outlined'
          fullWidth
          id='email'
          label='email'
          inputProps={{ type: 'email' }}
          error={Boolean(errors.email)}
          helperText={
            errors.email
              ? errors.email.type === 'pattern'
                ? 'Email is not valid'
                : 'Email is required'
              : ''
          }
          {...field}
          ></textfield>
       )}
       ></Controller>
       <Controller 
        name='password' 
        control={control}
        defaultValue='' 
        rules={{
          required: true, 
          minLength: 6 
        }}    
        render={({field}) => (
            <textfield
            variant='outlined'
            fullWidth
            id='password'
            label='password'
            inputProps={{ type: 'password' }}
            error={Boolean(errors.password)}
            helperText={
                errors.password
                ? errors.password.type === 'minLength'
                    ? 'Password length is more than 5'
                    : 'Password is required'
                : ''
            }
            {...field}
            ></textfield>
        )}
       ></Controller>
       <button
         type='submit'
       >
        Inicia sesión
       </button>
       <span>No tienes una cuenta? <NextLink href={'/register'} passHref>Regístrate</NextLink></span>
    </form>
  )
}

export default LoginScreen