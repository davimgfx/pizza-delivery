import { IoMdEye } from 'react-icons/io'

export default function Eye() {
  return (
    <button className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 bg-white focus-visible:outline-offset-1 border text-foreground hover:bg-gray-200 border-button hover:border-button-hover focus-visible:outline-brand-600 data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover shadow-sm text-xs px-2.5 py-1 h-[26px] !mr-1">
      <IoMdEye
        className="text-gray-400 text-xl cursor-pointer z-10"
        data-testid="eyeIcon"
      />
    </button>
  )
}
