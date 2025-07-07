import { useState } from "react"
import Button from "./Button"
import ProfilePicture from "./ProfilePicture"
import CVHeaderContent from "./CVHeaderContent"
import CVHeaderForm from "./CVHeaderForm"

const CVHeader = () => {
  const [showEditBtn, setShowEditBtn] = useState(false)
  const [editMode, setEditMode] = useState(false)

  const [generalInfo, setGeneralInfo] = useState({
    profilePicture: null,
    name: "",
    email: "",
    phoneNumber: "",
  })

  const imageChange = (e) =>
    setGeneralInfo({
      ...generalInfo,
      profilePicture: URL.createObjectURL(e.target.files[0]),
    })

  const handleEditInfo = (e) =>
    setGeneralInfo({ ...generalInfo, [e.target.id]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setEditMode(false)
  }

  return (
    <header className="mt-14">
      <section
        onMouseEnter={() => setShowEditBtn(true)}
        onMouseLeave={() => setShowEditBtn(false)}
        className="bg-200 relative flex h-44 items-center"
      >
        {showEditBtn && (
          <Button
            variant={editMode ? "primary" : "secondary"}
            onClick={() => setEditMode(!editMode)}
            styles="absolute right-6 bottom-1/6"
          >
            {editMode ? "Submit" : "Edit"}
          </Button>
        )}

        <div className="flex size-60 items-center justify-center rounded-tr-full rounded-br-full bg-white">
          <div
            className={`${!generalInfo.profilePicture && "border-3"} group relative flex size-50 items-center justify-center rounded-full`}
          >
            {generalInfo.profilePicture ? (
              <ProfilePicture
                onChange={imageChange}
                src={generalInfo.profilePicture}
              />
            ) : (
              <Button asChild>
                <label className="cursor-pointer px-5 py-1">
                  Upload
                  <input
                    type="file"
                    name="profilePicture"
                    id="profilePicture"
                    accept="image/*"
                    onChange={imageChange}
                    hidden
                  />
                </label>
              </Button>
            )}
          </div>
        </div>

        {editMode ? (
          <CVHeaderForm
            onSubmit={handleSubmit}
            name={generalInfo.name}
            email={generalInfo.email}
            phoneNumber={generalInfo.phoneNumber}
            onChange={(e) => handleEditInfo(e)}
          />
        ) : (
          <CVHeaderContent
            name={generalInfo.name}
            email={generalInfo.email}
            phoneNumber={generalInfo.phoneNumber}
          />
        )}
      </section>
    </header>
  )
}

export default CVHeader
