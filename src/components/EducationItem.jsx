const EducationItem = ({ major, school, startYear, endYear }) => {
  return (
    <div className="min-h-[68px]">
      <h3>{major}</h3>
      <p className="font-sans font-bold">{school}</p>
      <p className="font-sans text-sm">
        {startYear && endYear && `${startYear} - ${endYear}`}
      </p>
    </div>
  )
}

export default EducationItem
