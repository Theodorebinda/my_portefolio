export default function CompetenceSection() {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dhdaxlymt/image/upload/v1718029799/Portefolio/rmmvegcmpnq2zkfuhjpx.png')] bg-center bg-cover min-h-screen bg-no-repeat  h-screen">
      <div className="flex flex-col justify-center items-center  text-[#777777]">
        <h4 className="font-bold text-3xl">Competence</h4>
        <div className="flex items-end justify-center h-screen gap-10 pb-20">
          <div className="flex justify-center w-1/4 items-center gap-5">
            <div className="flex justify-center items-center flex-col gap-8 border py-8 px-4 bg-white rounded-lg">
              <span>Soft skills</span>
              <p>
                capacité non technique, mais plutôt interpersonnelle, qui permet
                d'interagir efficacement avec les autres et de s'adapter à
                différentes situations
              </p>
            </div>
            <div className="flex justify-center items-center flex-col gap-8 border py-8 px-4 bg-white rounded-lg">
              <span>Hard Skills</span>
              <p>
                compétences techniques et spécialisées, acquises généralement
                par la formation, l'éducation ou l'expérience professionnelle,
                et qui permettent d'effectuer des tâches précises
              </p>
            </div>
          </div>
          <div className="  h-3/4  bg-gray-500 ">
            <h4>quoi</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
