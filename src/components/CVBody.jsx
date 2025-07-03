import CVEducationSection from "./CVEducationSection"
import CVSection from "./CVSection"
import WorkItem from "./WorkItem"

const CVBody = () => {
  const work = [
    {
      id: crypto.randomUUID(),
      startDate: "August 2024",
      endDate: "present",
      companyName: "FIFTY FIFTY (ATTRAKT)",
      jobTitle: "Main Vocalist & Rapper",
      details:
        "Debuted Aug 30, 2024 with pre-release single Starry Night followed by mini-album Love Tune",
    },
    {
      id: crypto.randomUUID(),
      startDate: "June 2023",
      endDate: "December 2023",
      companyName: "BELIFT LAB",
      jobTitle: "Trainee",
      details:
        "Contestant on JTBC's R U Next?; eliminated in Episode 9, placed 11th",
    },
    {
      id: crypto.randomUUID(),
      startDate: "January 2021",
      endDate: "December 2022",
      companyName: "YueHua Entertainment",
      jobTitle: "Trainee",
      details: "2 years of full vocal, dance, language training",
    },
  ]

  return (
    <main className="grid gap-8 px-4 pb-6">
      <CVEducationSection />

      <CVSection title="Work Experience">
        {work.map((w) => (
          <WorkItem {...w} key={w.id} />
        ))}
      </CVSection>
    </main>
  )
}

export default CVBody
