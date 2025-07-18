import Button from "../Button"
import ProfilePicture from "./ProfilePicture"
import CVHeaderContent from "./CVHeaderContent"
import CVHeaderForm from "./CVHeaderForm"

const CVHeader = ({
  editMode,
  setEditMode,
  generalInfo,
  handleEdit,
  handleSubmit,
  imageChange,
}) => {
  return (
    <header className="mt-14">
      <section className="bg-200 group relative flex h-44 items-center">
        <Button
          variant={editMode ? "primary" : "secondary"}
          onClick={() => setEditMode(!editMode)}
          styles="absolute right-6 bottom-1/6 "
          hover
        >
          {editMode ? "Submit" : "Edit"}
        </Button>

        <div className="flex size-60 items-center justify-center rounded-tr-full rounded-br-full bg-white">
          <div
            className={`${!generalInfo.profilePicture ? "border-3" : ""} group/pfp flex size-48 items-center justify-center rounded-full`}
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
            onChange={(e) => handleEdit(e)}
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
