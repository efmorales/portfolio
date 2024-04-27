function ProjectCard() {
  return (
    <div
      className="flex flex-col h-auto bg-slate-100 py-4 sm:flex-row sm:py-8">
      <div
        className="flex flex-col sm:size-6/12 sm:order-2">
        <h1 className="text-pink-500 text-5xl font-semibold text-center my-8 sm:text-left sm:px-12">Philosofinder AI</h1>
        <div
          className="flex justify-center gap-8 mb-4 mx-4 sm:justify-start sm:mx-12">
          <img src="/src/assets/reactIcon.svg" alt="React icon" />
          <img src="/src/assets/nodeIcon.svg" alt="Node icon" />
          <img src="/src/assets/awsIcon.svg" alt="AWS icon" />
          <img src="/src/assets/mdbIcon.svg" alt="MongoDB icon" />
        </div>
        <p className="text-slate-600 px-4 mb-8 sm:px-12">
          Philosofinder’s is a FullStack MERN Web App, hosted in AWS. It’s objective is to help find it’s users the philosophies their worldview are already aligned with. Powered by OpenAI’s GPT 4.0.</p>
      </div>

      <div
        className="flex justify-center self-center sm:size-6/12 sm:order-1">
        <a href="https://philosophy.enzomorales.net" target="_blank">
          <img src="/src/assets/pfWindow.png" alt="Philosofinder Window" 
          className="w-96 hover:scale-110 transition duration-700 sm:w-[32rem]"/>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard