import { useState } from "react"
import CVSection from "./CVSection"
import EducationItem from "./EducationItem"

const CVEducationSection = () => {
  const [showAddBtn, setShowAddBtn] = useState(false)

  const educationObj = {
    id: crypto.randomUUID(),
    major: "",
    school: "",
    startYear: "",
    endYear: "",
  }

  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      major: "BSc in Bioengineering",
      school: "Yonsei University - Global Leaders College",
      startYear: "2022",
      endYear: "2024",
    },
  ])

  const handleAddEducation = () => setEducation([...education, educationObj])
  const handleEditEducation = (e, educationItemId) => {
    const nextEducation = education.map((item) => {
      if (item.id === educationItemId) {
        return { ...item, [e.target.id]: e.target.value }
      }
      return item
    })
    setEducation(nextEducation)
  }

  return (
    <CVSection
      title="Education"
      isAddBtnShown={showAddBtn}
      addEducation={handleAddEducation}
      onHover={() => setShowAddBtn(true)}
      onLeave={() => setShowAddBtn(false)}
    >
      {education.map((e) => (
        <EducationItem
          {...e}
          key={e.id}
          handleEditEducation={handleEditEducation}
        />
      ))}
    </CVSection>
  )
}

export default CVEducationSection
