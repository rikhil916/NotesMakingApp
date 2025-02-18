import React from 'react'
export default function Login() {
    return (
        <div className='flex flex-row min-w-[100vw] justify-center content-center'>
            <h1>Login</h1>
            <div className="flex flex-col w-[70%] border-2 ">
                <form>
                    <div>
                    <label htmlFor="email">Email</label>
                    <div><input name="email" type="email" id="email"/></div>
                    </div>
                    <div><label htmlFor="password">Password</label></div>
                    <div><input name="password" type="password" id="password"/></div>
                    <div><button type="submit">Login</button></div>
                </form>
            </div>
        </div>
    )
}