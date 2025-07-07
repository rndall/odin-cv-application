import CVSection from "../CVSection"
import WorkItem from "./WorkItem"

const CVWorkExperienceSection = ({
  work,
  handleAddWork,
  handleEditWork,
  handleRemoveWork,
  editingId,
  setEditingId,
}) => {
  return (
    <CVSection title="Work Experience" addItem={handleAddWork}>
      {work.map((w) => (
        <WorkItem
          {...w}
          key={w.id}
          isEditing={editingId === w.id}
          onSetEditing={() => setEditingId(w.id)}
          onDoneEditing={() => setEditingId(null)}
          allowDelete={work.length > 1}
          handleRemove={() => handleRemoveWork(w.id)}
          handleEditWork={handleEditWork}
        />
      ))}
    </CVSection>
  )
}

export default CVWorkExperienceSection
