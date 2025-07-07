import CVSection from "../CVSection"
import EducationItem from "./EducationItem"

const CVEducationSection = ({
  education,
  handleAddEducation,
  handleEditEducation,
  handleRemoveEducation,
  editingId,
  setEditingId,
}) => {
  return (
    <CVSection title="Education" addItem={handleAddEducation}>
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
