import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import avatar from '../data/avatar.jpg';


const UserProfile = () => {
  return (
    <div className='w-60 h-auto fixed bg-gray-50 border-1 border-gray-300 top-20 right-12 p-2 rounded-md' style={{ zIndex: 10000 }}>
      <div className='flex flex-row justify-between items-center'>
        <p className='text-md font-semibold'>User Profile</p>
        <button className='text-md p-2 rounded-full hover:bg-light-gray hover:drop-shadow-xl '>
          <MdOutlineCancel />
        </button>
      </div>
      <div className='flex mt-3'>
        <div>
          <img className='rounded-full w-16 h-16' src={avatar} />
        </div>
        <div className='flex flex-col ml-2 my-auto'>
          <p className='font-semibold text-sm'>Fajrul Ichsan</p>
          <p className='text-xs'>FrontEnd Developer</p>
          <p className='text-xs'>fajrul@gmail.com</p>
        </div>
      </div>
      <div className='flex flex-col space-y-2  mt-4 mx-2'>
        <hr />
        <div className='flex border-t-2 border-slate-100 items-center bg-red-50'>
          <div className='w-10 h-10 bg-blue-100 rounded-md flex'><CgProfile className='text-blue-400 text-2xl my-auto mx-auto justify-center' />
          </div>
          <div className='ml-2'>
            <p className='font-bold text-xs'>My Profile</p>
            <p className='text-xs'>Account Settings</p>
          </div>
        </div>
        <hr />
        <div className='flex items-center '>
          <div className='w-10 h-10 bg-blue-100 rounded-md flex'><CgProfile className='text-blue-400 text-2xl my-auto mx-auto justify-center' />
          </div>
          <div className='ml-2'>
            <p className='font-bold text-xs'>My Profile</p>
            <p className='text-xs'>Account Settings</p>
          </div>
        </div>
        <hr />
        <div className='flex items-center'>
          <div className='w-10 h-10 bg-blue-100 rounded-md flex'><CgProfile className='text-blue-400 text-2xl my-auto mx-auto justify-center' />
          </div>
          <div className='ml-2'>
            <p className='font-bold text-xs'>My Profile</p>
            <p className='text-xs'>Account Settings</p>
          </div>
        </div>
      </div>
      <div>
        <Button
        />
      </div>
    </div>
  )
}

export default UserProfile;