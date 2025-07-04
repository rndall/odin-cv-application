import { useState } from "react"

const EducationItem = ({
  id,
  major,
  school,
  startYear,
  endYear,
  handleEditEducation,
}) => {
  const [showEditBtn, setShowEditBtn] = useState(false)
  const [editMode, setEditMode] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setEditMode(false)
  }

  return (
    <div
      onMouseEnter={() => setShowEditBtn(true)}
      onMouseLeave={() => setShowEditBtn(false)}
      className="relative min-h-[68px]"
    >
      {showEditBtn && (
        <button
          onClick={() => setEditMode(!editMode)}
          className={`${editMode ? "bg-blue-500 hover:bg-blue-600" : "bg-400 hover:bg-600"} absolute top-1/4 left-4/5 cursor-pointer rounded-full px-8 py-1 text-white transition`}
          type={editMode ? "submit" : "button"}
        >
          {editMode ? "Submit" : "Edit"}
        </button>
      )}

      {editMode ? (
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
              className="max-w-7.5 rounded-md outline"
              placeholder={new Date().getFullYear()}
              id="startYear"
              type="tel"
              maxLength={4}
              value={startYear}
              onChange={(e) => handleEditEducation(e, id)}
            />
            {" - "}
            <input
              className="max-w-7.5 rounded-md outline"
              placeholder={new Date().getFullYear()}
              id="endYear"
              type="tel"
              maxLength={4}
              value={endYear}
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
            {startYear && endYear && `${startYear} - ${endYear}`}
          </p>
        </>
      )}
    </div>
  )
}

export default EducationItem
