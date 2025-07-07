import Button from "./Button"
import CVEducationSection from "./education/CVEducationSection"
import CVWorkExperienceSection from "./work/CVWorkExperienceSection"

const CVBody = ({
  education,
  handleAddEducation,
  handleEditEducation,
  handleRemoveEducation,
  educationEditingId,
  setEducationEditingId,
  work,
  handleAddWork,
  handleEditWork,
  handleRemoveWork,
  workEditingId,
  setWorkEditingId,
}) => {
  return (
    <main className="relative grid gap-8 px-4 pb-6">
      <CVEducationSection
        education={education}
        handleAddEducation={handleAddEducation}
        handleEditEducation={handleEditEducation}
        handleRemoveEducation={handleRemoveEducation}
        editingId={educationEditingId}
        setEditingId={setEducationEditingId}
      />

      <CVWorkExperienceSection
        work={work}
        handleAddWork={handleAddWork}
        handleEditWork={handleEditWork}
        handleRemoveWork={handleRemoveWork}
        editingId={workEditingId}
        setEditingId={setWorkEditingId}
      />
    </main>
  )
}

export default CVBody
