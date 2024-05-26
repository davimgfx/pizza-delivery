interface PhoneTopHeaderProps {
  isMenu: boolean
}

export default function PhoneTopHeader() {
  return (
    <div className={`flex justify-center gap-4 items-center text-sm py-2 border-gray-200 border-b bg-white lg:flex-col lg:gap-1 sm:px-2 sm:text-center `}>
      <span className="font-semibold">
        Peça agora pelo WhatsApp: (71) 93201-1901
      </span>
      <span className="lg:hidden">|</span>
      <span className="font-semibold">
        Ligue para a gente: (71) 93777-9991 ou (71) 93457-9222
      </span>
    </div>
  )
}
