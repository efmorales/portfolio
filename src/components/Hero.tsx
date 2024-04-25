function Hero() {
    return (
      <div className="flex flex-col sm:flex-row justify-between w-full h-auto bg-[#00343C] py-12">

        <div className="mb-4 basis-8/12 h-auto flex justify-center sm:mb-0">
          <img className="relative z-30 w-52 h-52 rounded-full -right-12 sm:-right-12 sm:w-72 sm:h-72 sm:ml-20" 
          src="src/assets/webProfile.png" 
          alt="Profile Pic" />
          <img className="relative z-50 w-16 h-16 rounded-full -bottom-36 sm:w-32 sm:h-32 sm:-left-16 sm:-bottom-36" 
          src="src/assets/salmonEllipse.svg"
          alt="Salmon Ellipse" />
          <img className="relative z-40 w-24 h-24 rounded-full -left-12 -bottom-16 sm:w-40 sm:h-40 sm:-left-28 sm:-bottom-14" 
          src="src/assets/tealEllipse.svg" 
          alt="Teal Ellipse" />
        </div>

        <div className="flex-col basis-4/12 mx-8 content-center">
          <h1 className="text-white text-3xl mb-2">Hey, nice to meet you!</h1>
          <p className="font-light text-slate-300">I'm Enzo Morales, welcome to the vibrant digital gateway showcasing the innovative world of a passionate Junior Full-Stack MERN Developer. The hero section of this personal portfolio is a striking symphony of functionality and aesthetic appeal, designed to captivate and inform from the first glance.</p>
          
        </div>

      </div>
    )
  }
  
  export default Hero