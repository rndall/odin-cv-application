import Button from "../Button"
import CVEducationForm from "./CVEducationForm"
import CVEducationContent from "./CVEducationContent"

const EducationItem = ({
  id,
  major,
  school,
  startDate,
  endDate,
  isEditing,
  onSetEditing,
  onDoneEditing,
  allowDelete,
  handleRemove,
  handleEditEducation,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!major && !school && !startDate && !endDate) handleRemove()

    onDoneEditing()
  }

  return (
    <div className="group/item relative min-h-[68px]">
      {isEditing ? (
        <CVEducationForm
          onSubmit={handleSubmit}
          major={major}
          school={school}
          startDate={startDate}
          endDate={endDate}
          onChange={(e) => handleEditEducation(e, id)}
        />
      ) : (
        <CVEducationContent
          major={major}
          school={school}
          startDate={startDate}
          endDate={endDate}
        />
      )}

      <div className="absolute top-1/4 right-6 flex gap-3 opacity-0 transition group-hover/item:opacity-100">
        <Button
          variant={isEditing ? "primary" : "secondary"}
          onClick={isEditing ? handleSubmit : onSetEditing}
        >
          {isEditing ? "Submit" : "Edit"}
        </Button>
        {allowDelete && (
          <Button variant="destructive" onClick={handleRemove}>
            Delete
          </Button>
        )}
      </div>
    </div>
  )
}

export default EducationItem
