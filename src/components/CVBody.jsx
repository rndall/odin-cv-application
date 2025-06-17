import CVSection from "./CVSection"
import EducationItem from "./EducationItem"

const CVBody = () => {
  const education = [
    {
      id: crypto.randomUUID(),
      major: "BSc in Bioengineering",
      school: "Yonsei University - Global Leaders College",
      startYear: "2022",
      endYear: "2024",
    },
  ]

  return (
    <main className="grid gap-8 px-4 pb-6">
      <CVSection title="Education">
        {education.map((e) => (
          <EducationItem {...e} key={e.id} />
        ))}
      </CVSection>

      <section className="grid gap-2">
        <h2 className="font-title text-lg font-bold uppercase">
          Work Experience
        </h2>
        <hr className="text-400" />
        <div className="grid gap-4">
          <div>
            <p className="text-300 font-bold">Aug 2024 - present</p>
            <p className="text-300">FIFTY FIFTY (ATTRAKT)</p>
            <h3>Main Vocalist & Rapper</h3>
            <p className="text-sm">
              Debuted Aug 30, 2024 with pre-release single Starry Night followed
              by mini-album Love Tune
            </p>
          </div>

          <div>
            <p className="text-300 font-bold">Jun 1 - Dec 31, 2023</p>
            <p className="text-300">BELIFT LAB</p>
            <h3>Trainee</h3>
            <p className="text-sm">
              Contestant on JTBC's R U Next?; eliminated in Episode 9, placed
              11th
            </p>
          </div>

          <div>
            <p className="text-300 font-bold">Jan 2021 - Dec 2022</p>
            <p className="text-300">YueHua Entertainment</p>
            <h3>Trainee</h3>
            <p className="text-sm">
              2 years of full vocal, dance, language training
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CVBody
