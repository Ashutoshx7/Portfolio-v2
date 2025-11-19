import React from 'react'

const Avatar = () => {
    const bgColorDark = "bg-orange-300";
    const bgColorLight = "bg-slate-300";
  return (
    <div className={`flex justify-center items-center ${bgColorDark} dark:${bgColorLight} rounded-full  h-22 w-22 relative overflow-hidden`}>
        <img src="/assets/logo.png" alt="Avatar" className='-mb-5 absolute h-22 w-22 scale-110'/>
    </div>
  )
}

export default Avatar   