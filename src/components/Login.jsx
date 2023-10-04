import React from 'react'

export const Login = () => {
  return (
    <section className='login-section'>

        <form className='login-form'>
            <div className='row'>
                <div className='col-lg col-12'>
                    <label htmlFor="">User</label>
                    <input type="text" placeholder='User' />
                </div>

            </div>
            
            <div className='row'>
                <div className='col-lg col-12'>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Password'/>
                </div>
            </div>


        </form>

    </section>
  )
}
