function Hero() {
  return (
    <div className="flex flex-col sm:flex-row justify-between w-full h-auto bg-[#00343C] py-12">

      <div className="mb-4 basis-8/12 h-auto flex justify-center sm:mb-0">
        <img className="relative z-30 w-52 h-52 rounded-full transition hover:scale-110 duration-700 -right-12 sm:-right-12 sm:w-72 sm:h-72 sm:ml-20"
          src="/assets/webProfile.png"
          alt="Profile Pic" />
        <img className="relative z-50 w-16 h-16 rounded-full -bottom-36 transition hover:scale-125 duration-700 sm:w-32 sm:h-32 sm:-left-16 sm:-bottom-36"
          src="/assets/salmonEllipse.svg"
          alt="Salmon Ellipse" />
        <img className="relative z-40 w-24 h-24 rounded-full -left-12 -bottom-16 transition hover:scale-125 duration-700 sm:w-40 sm:h-40 sm:-left-28 sm:-bottom-14"
          src="/assets/tealEllipse.svg"
          alt="Teal Ellipse" />
      </div>

      <div className="flex-col basis-4/12 mx-8 content-center sm:mr-48">
        <h1 className="text-white text-4xl mb-2">Hey, nice to meet you!</h1>
        <p className="font-light text-slate-300">I'm Enzo Morales, a FullStack Web Developer & Anthropologist based in Brooklyn, NY. With 5+ years of experience in Software Development, I strive to keep creating digital services that are human-centered, combining my Software Engineering skills with my Qualitative Research ones.</p>

        <div className="flex flex-row mt-4 justify-around sm:mt-8 sm:justify-center sm:gap-10">
          <a href="https://github.com/efmorales" target="_blank" className=" text-white hover:text-pink-400">
            <svg width="40" height="40" viewBox="0 0 63 63" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.5 1.77167C14.7656 1.77167 0.984375 15.356 0.984375 32.2873C0.984375 45.6748 9.74531 57.0935 21.9516 61.2279C23.5266 61.5232 24.0187 60.5389 24.0187 59.8498C24.0187 59.1607 24.0187 57.192 23.9203 54.5342C15.4547 56.5029 13.6828 50.3998 13.6828 50.3998C12.3047 46.9545 10.2375 45.9701 10.2375 45.9701C7.48125 44.0014 10.3359 44.0014 10.3359 44.0014C13.3875 44.0998 15.0609 47.1514 15.0609 47.1514C17.7188 51.8764 22.2469 50.4982 23.9203 49.6123C24.2156 47.6435 25.0031 46.2654 25.8891 45.4779C19.1953 44.7889 12.0094 42.131 12.0094 30.5154C12.0094 27.1685 13.2891 24.5107 15.1594 22.4435C14.8641 21.7545 13.7812 18.6045 15.4547 14.3717C15.4547 14.3717 18.1125 13.5842 23.9203 17.5217C26.3812 16.8326 28.9406 16.4389 31.5984 16.4389C34.2562 16.4389 36.9141 16.7342 39.2766 17.5217C45.0844 13.6826 47.6438 14.3717 47.6438 14.3717C49.3172 18.506 48.3328 21.7545 47.9391 22.4435C49.9078 24.5107 51.0891 27.267 51.0891 30.5154C51.0891 42.131 43.9031 44.7889 37.2094 45.4779C38.2922 46.4623 39.2766 48.431 39.2766 51.1873C39.2766 55.3217 39.1781 58.5701 39.1781 59.5545C39.1781 60.342 39.7688 61.2279 41.2453 60.9326C53.2547 56.8967 62.0156 45.5764 62.0156 32.0904C61.9172 15.356 48.2344 1.77167 31.5 1.77167Z" fill="currentColor" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/enzomoralescanales/" target="_blank" className="text-white hover:text-pink-400">
            <svg width="40" height="40" viewBox="0 0 61 61" xmlns="http://www.w3.org/2000/svg">
              <path d="M55.7593 0.953125H5.33899C2.95618 0.953125 1.04993 2.85938 1.04993 5.24219V55.7578C1.04993 58.0453 2.95618 60.0469 5.33899 60.0469H55.5687C57.9515 60.0469 59.8578 58.1406 59.8578 55.7578V5.14688C60.0484 2.85938 58.1422 0.953125 55.7593 0.953125ZM18.4922 51.1828H9.81872V23.0656H18.4922V51.1828ZM14.1078 19.1578C11.2484 19.1578 9.05618 16.8703 9.05618 14.1063C9.05618 11.3422 11.3437 9.05469 14.1078 9.05469C16.8718 9.05469 19.1593 11.3422 19.1593 14.1063C19.1593 16.8703 17.0625 19.1578 14.1078 19.1578ZM51.375 51.1828H42.7015V37.5531C42.7015 34.3125 42.6062 30.0234 38.1265 30.0234C33.5515 30.0234 32.8843 33.6453 32.8843 37.2672V51.1828H24.2109V23.0656H32.6937V26.9734H32.789C34.0281 24.6859 36.7922 22.3984 41.0812 22.3984C49.9453 22.3984 51.5656 28.1172 51.5656 35.9328V51.1828H51.375Z" fill="currentColor" />
            </svg>
          </a>

        </div>

      </div>

    </div>
  )
}

export default Hero