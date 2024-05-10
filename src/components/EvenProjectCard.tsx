import React from 'react'

interface EvenProjectCardProps {
  title: string;
  description: string;
  projectUrl: string;
  projectSrc: string;
  iconSrcArray: string[];
  iconAltArray: string[];
}

const EvenProjectCard: React.FC<EvenProjectCardProps> = ({ title, description, projectUrl, projectSrc, iconSrcArray, iconAltArray }) => {

  return (
    <div
      className="flex flex-col h-auto bg-[#00343C] py-4 sm:flex-row sm:py-8">
      <div
        className="flex flex-col sm:size-6/12 sm:order-1 sm:ml-12">
        <h1
          className="text-[#00E1C9] text-5xl font-semibold text-center my-8 mx-4 sm:text-left sm:px-12 sm:mx-0">
          {title}</h1>
        <div
          className="flex justify-center flex-wrap gap-6 gap-y-0 mb-4 mx-4 sm:justify-start sm:mx-12">
          {iconSrcArray.map((src, index) => (
            <img key={src} src={src} alt={iconAltArray[index]} />

          ))}
        </div>
        <p
          className="text-slate-200 px-6 mb-8 sm:px-12">
          {description} </p>
      </div>

      <div
        className="flex justify-center self-center sm:size-6/12 sm:order-2 sm:mr-12">
        <a href={projectUrl} target="_blank">
          <img src={projectSrc} alt="Project preview"
            className="w-96 hover:scale-110 transition duration-700 sm:w-[32rem]" />
        </a>
      </div>
    </div>
  )
}

export default EvenProjectCard