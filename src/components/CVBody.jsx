import CVEducationSection from "./CVEducationSection"
import CVWorkExperienceSection from "./CVWorkExperienceSection"

const CVBody = () => {
  return (
    <main className="grid gap-8 px-4 pb-6">
      <CVEducationSection />

      <CVWorkExperienceSection />
    </main>
  )
}

export default CVBody
