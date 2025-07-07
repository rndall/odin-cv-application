import Button from "./Button"

const ProfilePicture = ({ onChange, src }) => {
  return (
    <>
      <Button
        styles="absolute mx-auto opacity-0 group-hover:opacity-100"
        asChild
      >
        <label className="cursor-pointer px-5 py-1">
          Upload
          <input
            type="file"
            name="profilePicture"
            id="profilePicture"
            accept="image/*"
            onChange={onChange}
            hidden
          />
        </label>
      </Button>
      <img
        className="h-48 w-48 rounded-full object-cover"
        src={src}
        alt="Profile picture"
      />
    </>
  )
}

export default ProfilePicture
