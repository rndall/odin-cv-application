import { useState } from "react"
import { format, isToday } from "date-fns"

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
  const [showActionButtons, setShowActionButtons] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    onDoneEditing()
  }

  return (
    <div
      onMouseEnter={() => setShowActionButtons(true)}
      onMouseLeave={() => setShowActionButtons(false)}
      className="relative min-h-[68px]"
    >
      {showActionButtons && (
        <div className="absolute top-1/4 right-0 flex gap-3">
          <button
            onClick={isEditing ? onDoneEditing : onSetEditing}
            className={`${isEditing ? "bg-blue-500 hover:bg-blue-600" : "bg-400 hover:bg-600"} cursor-pointer rounded-full px-8 py-1 text-white transition`}
          >
            {isEditing ? "Submit" : "Edit"}
          </button>
          {allowDelete && (
            <button
              onClick={handleRemove}
              className="cursor-pointer rounded-full bg-red-500 px-8 py-1 text-white transition hover:bg-red-600"
            >
              Delete
            </button>
          )}
        </div>
      )}

      {isEditing ? (
        <form className="flex max-w-7/12 flex-col" onSubmit={handleSubmit}>
          <input
            className="max-h-6 rounded-md outline"
            placeholder="BSc in Bioengineering"
            id="major"
            value={major}
            onChange={(e) => handleEditEducation(e, id)}
          />
          <input
            className="max-h-6 rounded-md font-sans font-bold outline"
            placeholder="University"
            id="school"
            value={school}
            onChange={(e) => handleEditEducation(e, id)}
          />
          <p className="font-sans text-sm">
            <input
              className="max-w-26 rounded-md outline"
              placeholder={new Date().getFullYear()}
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => handleEditEducation(e, id)}
            />
            {" - "}
            <input
              className="max-w-26 rounded-md outline"
              placeholder={new Date().getFullYear()}
              id="endDate"
              type="date"
              value={endDate}
              onChange={(e) => handleEditEducation(e, id)}
            />
          </p>
          <button className="hidden"></button>
        </form>
      ) : (
        <>
          <h3>{major}</h3>
          <p className="font-sans font-bold">{school}</p>
          <p className="font-sans text-sm">
            {startDate &&
              endDate &&
              `${format(startDate, "PP")} - ${isToday(endDate) ? "present" : format(endDate, "PP")}`}
          </p>
        </>
      )}
    </div>
  )
}

export default EducationItem
