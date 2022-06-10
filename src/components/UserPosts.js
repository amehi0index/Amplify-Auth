import React from 'react'

const UserPosts = () => {
  return (
    < div className="container-fluid w-full flex px-6">
      <div class="bg-slate-700 opacity-90 container-fluid w-3/4 flex flex-col justify-center mt-10 p-6 rounded">
        <div class="container-fluid bg-purple-500 w-full py-2 px-4 rounded-sm">
          <p className="text-2xl text-white font-bold">No Posts Available Yet</p>
        </div>
      </div>
    </div>   
  )
}

export default UserPosts