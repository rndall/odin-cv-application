import { format, isToday } from "date-fns"

const CVEducationContent = ({ major, school, startDate, endDate }) => {
  return (
    <>
      <h3>{major}</h3>
      <p className="font-sans font-bold">{school}</p>
      <p className="font-sans text-sm">
        {startDate &&
          endDate &&
          `${format(startDate, "PP")} - ${isToday(endDate) ? "present" : format(endDate, "PP")}`}
      </p>
    </>
  )
}

export default CVEducationContent
