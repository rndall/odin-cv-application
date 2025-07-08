import { useState } from "react"
import Button from "./Button"
import CVHeader from "./header/CVHeader"
import CVBody from "./CVBody"

const CV = () => {
  // General Info
  const [generalInfoEditMode, setGeneralInfoEditMode] = useState(false)

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

  const handleEditGeneralInfo = (e) =>
    setGeneralInfo({ ...generalInfo, [e.target.id]: e.target.value })

  const handleSubmitGeneralInfo = (e) => {
    e.preventDefault()
    setGeneralInfoEditMode(false)
  }

  // Education
  const [education, setEducation] = useState([])
  const [educationEditingId, setEducationEditingId] = useState(null)

  const handleAddEducation = () => {
    const newEducation = {
      id: crypto.randomUUID(),
      major: "",
      school: "",
      startDate: "",
      endDate: "",
    }
    setEducation([...education, newEducation])
    setEducationEditingId(newEducation.id)
  }

  const handleEditEducation = (e, educationItemId) => {
    const nextEducation = education.map((item) => {
      if (item.id === educationItemId)
        return { ...item, [e.target.id]: e.target.value }
      return item
    })
    setEducation(nextEducation)
  }

  const handleRemoveEducation = (educationItemId) =>
    setEducation(education.filter((e) => e.id !== educationItemId))

  // Work
  const [work, setWork] = useState([])
  const [workEditingId, setWorkEditingId] = useState(null)

  const handleAddWork = () => {
    const newWork = {
      id: crypto.randomUUID(),
      startDate: "",
      endDate: "",
      companyName: "",
      jobTitle: "",
      details: "",
    }
    setWork([...work, newWork])
    setWorkEditingId(newWork.id)
  }

  const handleEditWork = (e, workItemId) => {
    const nextWork = work.map((item) => {
      if (item.id === workItemId)
        return { ...item, [e.target.id]: e.target.value }
      return item
    })
    setWork(nextWork)
  }

  const handleRemoveWork = (workItemId) =>
    setWork(work.filter((e) => e.id !== workItemId))

  const fillData = () => {
    setGeneralInfo({
      profilePicture:
        "https://imgs.search.brave.com/b2vg4Pf_xrOQ1A54MDUenluUnF6BQVPD8pS9BiHDTGk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vZUNyUTBa/U1F1eURBaV9pWWxZ/aW1IMlUxQ0xkR3Nq/V2FrOTFBY1RQZm9S/US9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/Yldkei9Mbk5sWVhK/amFDNWljbUYyL1pT/NWpiMjB2UlVkMVZq/WjEvTFRRMldqWjBZ/bUZhVUZoNS9NMmwz/UVhOUWJVaHJVV3d6/L1RWWXRPRmx0YXpK/RlgxRnUvYnk5eWN6/cG1hWFE2TlRZdy9P/ak15TURveE9qQXZa/enBqL1pTOWhTRkl3/WTBoTk5reDUvT1hK/alJ6bDNMMk5IYkhW/YS9lVFZxWWpJd2Rs/cEhPV292L1pGY3hi/R0p1VW5wTWVsVXov/VEhwTmRpOU5hbU14/VEhwSi9NVTFFU1hs/TmFURkhMMkZYL1dq/QmxVekZIWVZkYU1H/VlQvTVVRdlUwVkdU/MUpWZUUxUy9VekZP/VkRBNVR5OU1WMFl3/L1RGVlJkRkZXWkVK/VmExSlUvTDB4VVNY/ZE5hbFYwV2tjNS9h/bVJYTVd3dlltNVNl/a3hVL1RXOU5VMnQx/WkRKV2FTOWovUkRr/eVVGZEplRTlYVFhn/LmpwZWc",
      name: "Chanelle Moon",
      email: "chanelle.moon@email.com",
      phoneNumber: "+1 (310) 555-0123",
    })

    setEducation([
      {
        id: crypto.randomUUID(),
        major: "BSc in Bioengineering",
        school: "Yonsei University - Global Leaders College",
        startDate: "2022-10-06",
        endDate: "2024-07-04",
      },
    ])

    setWork([
      {
        id: crypto.randomUUID(),
        startDate: "2024-08-01",
        endDate: "2025-07-04",
        companyName: "FIFTY FIFTY (ATTRAKT)",
        jobTitle: "Main Vocalist & Rapper",
        details:
          "Debuted Aug 30, 2024 with pre-release single Starry Night followed by mini-album Love Tune",
      },
      {
        id: crypto.randomUUID(),
        startDate: "2023-06-01",
        endDate: "2023-12-01",
        companyName: "BELIFT LAB",
        jobTitle: "Trainee",
        details:
          "Contestant on JTBC's R U Next?; eliminated in Episode 9, placed 11th",
      },
      {
        id: crypto.randomUUID(),
        startDate: "2021-01-01",
        endDate: "2022-12-01",
        companyName: "YueHua Entertainment",
        jobTitle: "Trainee",
        details: "2 years of full vocal, dance, language training",
      },
    ])
  }

  return (
    <div className="relative mx-auto mt-5 flex min-h-222 max-w-3xl flex-col gap-12 rounded-md shadow-2xl">
      <Button
        onClick={fillData}
        styles="absolute right-0 translate-x-40 translate-y-3"
      >
        Fill Data
      </Button>

      <CVHeader
        editMode={generalInfoEditMode}
        setEditMode={setGeneralInfoEditMode}
        generalInfo={generalInfo}
        handleEdit={handleEditGeneralInfo}
        handleSubmit={handleSubmitGeneralInfo}
        imageChange={imageChange}
      />

      <CVBody
        education={education}
        handleAddEducation={handleAddEducation}
        handleEditEducation={handleEditEducation}
        handleRemoveEducation={handleRemoveEducation}
        educationEditingId={educationEditingId}
        setEducationEditingId={setEducationEditingId}
        work={work}
        handleAddWork={handleAddWork}
        handleEditWork={handleEditWork}
        handleRemoveWork={handleRemoveWork}
        workEditingId={workEditingId}
        setWorkEditingId={setWorkEditingId}
      />
    </div>
  )
}

export default CV
