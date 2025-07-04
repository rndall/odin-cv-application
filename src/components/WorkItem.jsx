import { useState } from "react"
import { format, isToday } from "date-fns"

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
  const [showActionButtons, setShowActionButtons] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!startDate && !endDate && !companyName && !jobTitle && !details)
      handleRemove()

    onDoneEditing()
  }

  return (
    <div
      onMouseEnter={() => setShowActionButtons(true)}
      onMouseLeave={() => setShowActionButtons(false)}
      className="relative min-h-[92px]"
    >
      {showActionButtons && (
        <div className="absolute top-4.5 right-6 flex gap-3">
          <button
            onClick={isEditing ? handleSubmit : onSetEditing}
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
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex max-w-7/12 flex-col">
            <div className="text-300 font-bold">
              <input
                className="max-w-34 rounded-md outline"
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => handleEditWork(e, id)}
              />
              {" - "}
              <input
                className="max-w-34 rounded-md outline"
                type="date"
                id="endDate"
                value={endDate}
                onChange={(e) => handleEditWork(e, id)}
              />
            </div>
            <input
              className="text-300 rounded-md outline"
              id="companyName"
              value={companyName}
              placeholder="Company Name"
              onChange={(e) => handleEditWork(e, id)}
            />
            <input
              className="rounded-md outline"
              id="jobTitle"
              value={jobTitle}
              placeholder="Position Title"
              onChange={(e) => handleEditWork(e, id)}
            />
          </div>
          <textarea
            className="h-5 rounded-md text-sm outline"
            id="details"
            value={details}
            placeholder="Details"
            onChange={(e) => handleEditWork(e, id)}
          />
          <button className="hidden"></button>
        </form>
      ) : (
        <>
          <p className="text-300 font-bold">
            {startDate &&
              endDate &&
              `${format(startDate, "PP")} - ${isToday(endDate) ? "present" : format(endDate, "PP")}`}
          </p>
          <p className="text-300">{companyName}</p>
          <h3>{jobTitle}</h3>
          <p className="text-sm">{details}</p>
        </>
      )}
    </div>
  )
}

export default WorkItem
