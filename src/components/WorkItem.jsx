const WorkItem = ({ startDate, endDate, companyName, jobTitle, details }) => {
  return (
    <div>
      <p className="text-300 font-bold">
        {startDate} - {endDate}
      </p>
      <p className="text-300">{companyName}</p>
      <h3>{jobTitle}</h3>
      <p className="text-sm">{details}</p>
    </div>
  )
}

export default WorkItem
