import { useState } from "react"
import CVSection from "./CVSection"
import EducationItem from "./EducationItem"

const CVEducationSection = () => {
  const [showAddBtn, setShowAddBtn] = useState(false)
  const [editingId, setEditingId] = useState(null)

  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      major: "BSc in Bioengineering",
      school: "Yonsei University - Global Leaders College",
      startYear: "2022",
      endYear: "2024",
    },
  ])

  const handleAddEducation = () => {
    const newEducation = {
      id: crypto.randomUUID(),
      major: "",
      school: "",
      startYear: "",
      endYear: "",
    }
    setEducation([...education, newEducation])
    setEditingId(newEducation.id)
  }

  const handleEditEducation = (e, educationItemId) => {
    const nextEducation = education.map((item) => {
      if (item.id === educationItemId) {
        return { ...item, [e.target.id]: e.target.value }
      }
      return item
    })
    setEducation(nextEducation)
  }

  const handleRemoveEducation = (educationItemId) =>
    setEducation(education.filter((e) => e.id !== educationItemId))

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
          isEditing={editingId === e.id}
          onSetEditing={() => setEditingId(e.id)}
          onDoneEditing={() => setEditingId(null)}
          allowDelete={education.length > 1}
          handleRemove={() => handleRemoveEducation(e.id)}
          handleEditEducation={handleEditEducation}
        />
      ))}
    </CVSection>
  )
}

export default CVEducationSection
