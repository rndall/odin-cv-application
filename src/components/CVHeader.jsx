import { useState } from "react"
import Button from "./Button"
import ProfilePicture from "./ProfilePicture"
import { AtSymbolIcon } from "@heroicons/react/24/outline"
import { PhoneIcon } from "@heroicons/react/24/outline"

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
          <form
            onSubmit={handleSubmit}
            className="font-title grid grow gap-2.5 ps-16 pe-4 pt-2 font-bold"
          >
            <input
              className="text-3xl uppercase"
              placeholder="Name"
              id="name"
              value={generalInfo.name}
              onChange={(e) => handleEditInfo(e)}
            />
            <address className="text-lg not-italic">
              <div className="flex items-center gap-2">
                <AtSymbolIcon className="size-6" />
                <input
                  className="basis-3/5"
                  type="email"
                  id="email"
                  placeholder="name@email.com"
                  value={generalInfo.email}
                  onChange={(e) => handleEditInfo(e)}
                />
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="size-6" />
                <input
                  className="basis-3/5"
                  type="tel"
                  id="phoneNumber"
                  placeholder="09XXXXXXXXX"
                  value={generalInfo.phoneNumber}
                  onChange={(e) => handleEditInfo(e)}
                />
              </div>
            </address>
            <Button variant="hidden"></Button>
          </form>
        ) : (
          <div className="font-title grid grow gap-2.5 ps-16 pe-4 pt-2 font-bold">
            <h1 className="h-9 text-3xl uppercase">{generalInfo.name}</h1>
            <address className="text-lg not-italic">
              <div className="flex h-7 items-center gap-2">
                {generalInfo.email && <AtSymbolIcon className="size-6" />}
                <p>{generalInfo.email}</p>
              </div>
              <div className="flex h-7 items-center gap-2">
                {generalInfo.phoneNumber && <PhoneIcon className="size-6" />}
                <p>{generalInfo.phoneNumber}</p>
              </div>
            </address>
          </div>
        )}
      </section>
    </header>
  )
}

export default CVHeader
