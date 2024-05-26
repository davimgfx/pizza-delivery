import React from 'react'
import { logo } from '@/assets'
import Image from 'next/image'
import { RiWhatsappFill } from 'react-icons/ri'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-gray-200">
      <div className="mx-14 py-14 md:mx-4 xl:mx-10">
        <div className="grid grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 xl:grid-rows-2 xl:gap-x-0 gap-x-6 lg:gap-6 sm:flex sm: flex-col sm:gap-10">
          <div className="flex-1 gap-2 flex flex-col xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-2 ">
            <Image src={logo} alt="logo Pizza Delivery" className="w-40" />
            <div className="flex ">
              <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </a>
              <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>

              <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/davifncosta/"
                className="me-6 [&>svg]:h-4 [&>svg]:w-4"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/davimgfx"
                className="[&>svg]:h-4 [&>svg]:w-4"
              >
                <FaGithub />
              </a>
            </div>
            <p className="text-left text-sm mt-3 pr-10 xl:pr-0">
              A pizza mais saborosa e deliciosa de Salvador, com ingredientes
              frescos e refrescantes. Peça ligando para nós, pelo WhatsApp ou
              pelo esse site que você esta acessando.
            </p>
          </div>

          <div className="xl:col-start-1 xl:col-end-2  xl:row-start-2 xl:row-end-3 lg:row-start-1 lg:col-start-2 lg:row-end-2 lg:col-end-3">
            <h6 className="mb-4 flex font-semibold uppercase ">
              Nossas Unidades
            </h6>
            <p className="mb-4 hover:text-primary transition-colors">
              <a href="#!">Paralela</a>
            </p>
            <p className="mb-4 hover:text-primary transition-colors">
              <a href="#!">Pituaçu</a>
            </p>
            <p className="mb-4 hover:text-primary transition-colors">
              <a href="#!">Barra</a>
            </p>
            <p className="hover:text-primary transition-colors">
              <a href="#! ">Cajazeiras</a>
            </p>
          </div>

          <div className="xl:col-start-2 lg:col-start-1 xl:col-end-3 lg:col-end-2 xl:row-start-2 xl:row-end-3">
            <h6 className="mb-4 flex font-semibold uppercase ">Produtos</h6>
            <p className="mb-4 hover:text-primary transition-colors">
              <a href="#!">Pizza salgadas e doces</a>
            </p>
            <p className="mb-4 hover:text-primary transition-colors">
              <a href="#!">Pasteis salgados e doces</a>
            </p>
            <p className="mb-4 hover:text-primary transition-colors">
              <a href="#!">Refrigentes e Sucos</a>
            </p>
            <p className="hover:text-primary transition-colors">
              <a href="#!">Doces</a>
            </p>
          </div>

          <div className="xl:col-start-3 xl:col-end-4 xl:row-start-2 xl:row-end-3 lg:col-start-2 lg:col-end-2">
            <h6 className="mb-4 flex font-semibold uppercase">Contato</h6>
            <p className="mb-4 flex items-center  ">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              </span>
              Rua 2, entre a Rua 1 e Rua3. Em frente ao Salesiano
            </p>
            <p className="mb-4 flex items-center">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </span>
              pizza.devilery.next@gmail.com
            </p>
            <p className="mb-4 flex items-center">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              (71) 93777-9991 ou (71) 93457-9222
            </p>

            <div className="flex items-center gap-3">
              <RiWhatsappFill className="h-5 w-5" />
              <span>(71) 93201-1901 </span>
            </div>
          </div>
        </div>
      </div>

      <hr className=" border-gray-200 mx-14 " />

      <div className="text-center py-5">
        <span className="text-sm">
          Copyright © 2024 por Pizza Delivery | Todos os direitos Reservados
        </span>
      </div>
    </footer>
  )
}
