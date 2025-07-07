import { format, isToday } from "date-fns"

const CVWorkContent = ({
  startDate,
  endDate,
  companyName,
  jobTitle,
  details,
}) => {
  return (
    <>
      <p className="text-300 font-bold">
        {startDate &&
          endDate &&
          `${format(startDate, "PP")} - ${isToday(endDate) ? "present" : format(endDate, "PP")}`}
      </p>
      <p className="text-300">{companyName}</p>
      <h3>{jobTitle}</h3>
      <p className="text-sm">{details}</p>
    </>
  )
}

export default CVWorkContent
