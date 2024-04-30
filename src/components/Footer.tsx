function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div
      className="flex flex-col items-center w-full h-auto bg-[#333D54] py-6 gap-4">
      <button onClick={scrollToTop} className="hover:scale-110 transition">
        <img src="/src/assets/upCircle.svg" alt="Go Up" />
      </button>
      <p className="text-slate-200">© Enzo Morales, 2024</p>
    </div>
  )
}

export default Footer