import { useState } from "react"
import CVSection from "./CVSection"
import WorkItem from "./WorkItem"

const CVWorkExperienceSection = () => {
  const [showAddBtn, setShowAddBtn] = useState(false)
  const [editingId, setEditingId] = useState(null)

  const [work, setWork] = useState([
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
    setEditingId(newWork.id)
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

  return (
    <CVSection
      title="Work Experience"
      isAddBtnShown={showAddBtn}
      addItem={handleAddWork}
      onHover={() => setShowAddBtn(true)}
      onLeave={() => setShowAddBtn(false)}
    >
      {work.map((w) => (
        <WorkItem
          {...w}
          key={w.id}
          isEditing={editingId === w.id}
          onSetEditing={() => setEditingId(w.id)}
          onDoneEditing={() => setEditingId(null)}
          allowDelete={work.length > 1}
          handleRemove={() => handleRemoveWork(w.id)}
          handleEditWork={handleEditWork}
        />
      ))}
    </CVSection>
  )
}

export default CVWorkExperienceSection
