import React from 'react'
import UserInfosCard from './utils/UserInfosCard/UserInfosCard'
import UserInfosAddress from "./utils/UserInfosAdress/UserInfosAddress"

export default function Profile() {
  return (
    <section>
      <header className="w-full h-[300px] absolute bg-primary" />
      <main className="mx-14 flex min-w-[100vh]">
        <div className="flex gap-10 w-full relative z-3 mt-20">
          <div className="w-[500px] bg-[#FFFFFF] border border-gray-500 shadow-sm rounded-lg">
            <UserInfosCard />
          </div>
          <div className="w-full h-[300px] bg-[#FFFFFF] p-4 border border-gray-500 shadow-sm rounded-lg">
            <UserInfosAddress />
          </div>
        </div>
      </main>
    </section>
  )
}
