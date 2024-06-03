import React from 'react'
import UserInfosCard from './utils/UserInfosCard/UserInfosCard'
import UserInfosAddress from "./utils/UserInfosAdress/UserInfosAddress"

export default function Profile() {
  return (
    <section>
      <header className="w-full h-[300px] absolute bg-primary" />
      <main className="mx-14 flex">
        <div className="flex gap-10 w-full relative z-3 mt-20">
          <div className="w-[500px] bg-[#FFFFFF] border-gray-300 border rounded-xl shadow-md">
            <UserInfosCard />
          </div>
          <div className="w-full h-min bg-[#FFFFFF] p-4 border-gray-300 border rounded-xl shadow-md">
            <UserInfosAddress />
          </div>
        </div>
      </main>
    </section>
  )
}
