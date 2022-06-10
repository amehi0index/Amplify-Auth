import React from 'react'
import Input from './Input'

const ForgotPassword = ({ setUiState, onChange, forgotPassword }) => {
    return (
      <>
        <p className="text-3xl font-black">Forgot password? </p>

        <div className="mt-10">
          <label className="text-sm">Email</label>
          <Input onChange={onChange} name="email" />
        </div>

        <button
          onClick={() => forgotPassword()}
          className="text-white w-full mt-4 bg-slate-700 hover:bg-slate-800 p-3 rounded">
          Reset Password
        </button>

        <button
          onClick={() => setUiState('signIn')}
          className="text-sm mt-6 text-teal-500">Cancel
        </button>
      </> 
      )
}

export default ForgotPassword