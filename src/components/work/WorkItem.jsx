import Button from "../Button"
import CVWorkForm from "./CVWorkForm"
import CVWorkContent from "./CVWorkContent"

const WorkItem = ({
  id,
  startDate,
  endDate,
  companyName,
  jobTitle,
  details,
  isEditing,
  onSetEditing,
  onDoneEditing,
  allowDelete,
  handleRemove,
  handleEditWork,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!startDate && !endDate && !companyName && !jobTitle && !details)
      handleRemove()

    onDoneEditing()
  }

  return (
    <div className="group/item relative min-h-[99px]">
      {isEditing ? (
        <CVWorkForm
          onSubmit={handleSubmit}
          startDate={startDate}
          endDate={endDate}
          companyName={companyName}
          jobTitle={jobTitle}
          details={details}
          onChange={(e) => handleEditWork(e, id)}
        />
      ) : (
        <CVWorkContent
          startDate={startDate}
          endDate={endDate}
          companyName={companyName}
          jobTitle={jobTitle}
          details={details}
        />
      )}

      <div className="absolute top-4.5 right-6 flex gap-3 opacity-0 transition group-hover/item:opacity-100">
        <Button onClick={isEditing ? handleSubmit : onSetEditing}>
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

export default WorkItem
