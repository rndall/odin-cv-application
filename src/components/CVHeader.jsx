import { useState } from "react"
import { AtSymbolIcon } from "@heroicons/react/24/outline"
import { PhoneIcon } from "@heroicons/react/24/outline"

const CVHeader = () => {
  const [showEditBtn, setShowEditBtn] = useState(false)
  const [editMode, setEditMode] = useState(false)

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
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
          <button
            onClick={() => setEditMode(!editMode)}
            className={`${editMode ? "bg-blue-500 hover:bg-blue-600" : "bg-400 hover:bg-600"} absolute bottom-1/6 left-4/5 cursor-pointer rounded-full px-8 py-1 text-white transition`}
            type={editMode ? "submit" : "button"}
          >
            {editMode ? "Submit" : "Edit"}
          </button>
        )}

        <div className="flex size-60 items-center justify-center rounded-tr-full rounded-br-full bg-white">
          <img
            className="size-48 rounded-full object-cover"
            src="https://imgs.search.brave.com/b2vg4Pf_xrOQ1A54MDUenluUnF6BQVPD8pS9BiHDTGk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vZUNyUTBa/U1F1eURBaV9pWWxZ/aW1IMlUxQ0xkR3Nq/V2FrOTFBY1RQZm9S/US9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/Yldkei9Mbk5sWVhK/amFDNWljbUYyL1pT/NWpiMjB2UlVkMVZq/WjEvTFRRMldqWjBZ/bUZhVUZoNS9NMmwz/UVhOUWJVaHJVV3d6/L1RWWXRPRmx0YXpK/RlgxRnUvYnk5eWN6/cG1hWFE2TlRZdy9P/ak15TURveE9qQXZa/enBqL1pTOWhTRkl3/WTBoTk5reDUvT1hK/alJ6bDNMMk5IYkhW/YS9lVFZxWWpJd2Rs/cEhPV292L1pGY3hi/R0p1VW5wTWVsVXov/VEhwTmRpOU5hbU14/VEhwSi9NVTFFU1hs/TmFURkhMMkZYL1dq/QmxVekZIWVZkYU1H/VlQvTVVRdlUwVkdU/MUpWZUUxUy9VekZP/VkRBNVR5OU1WMFl3/L1RGVlJkRkZXWkVK/VmExSlUvTDB4VVNY/ZE5hbFYwV2tjNS9h/bVJYTVd3dlltNVNl/a3hVL1RXOU5VMnQx/WkRKV2FTOWovUkRr/eVVGZEplRTlYVFhn/LmpwZWc"
            alt=""
          />
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
            <button className="hidden"></button>
          </form>
        ) : (
          <div className="font-title grid grow gap-2.5 ps-16 pe-4 pt-2 font-bold">
            <h1 className="h-9 text-3xl uppercase">{generalInfo.name}</h1>
            <address className="text-lg not-italic">
              <div className="flex h-7 items-center gap-2">
                <AtSymbolIcon className="size-6" />
                <p>{generalInfo.email}</p>
              </div>
              <div className="flex h-7 items-center gap-2">
                <PhoneIcon className="size-6" />
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
