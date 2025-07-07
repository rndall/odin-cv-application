import Form from "../Form"

const CVEducationForm = ({
  onSubmit,
  major,
  school,
  startDate,
  endDate,
  onChange,
}) => {
  return (
    <Form onSubmit={onSubmit} className="flex max-w-7/12 flex-col">
      <input
        autoFocus
        className="max-h-6 rounded-md outline"
        placeholder="BSc in Bioengineering"
        id="major"
        value={major}
        onChange={onChange}
      />
      <input
        className="max-h-6 rounded-md font-sans font-bold outline"
        placeholder="University"
        id="school"
        value={school}
        onChange={onChange}
      />
      <div className="font-sans text-sm">
        <input
          className="max-w-26 rounded-md outline"
          id="startDate"
          type="date"
          value={startDate}
          onChange={onChange}
        />
        {" - "}
        <input
          className="max-w-26 rounded-md outline"
          id="endDate"
          type="date"
          value={endDate}
          onChange={onChange}
        />
      </div>
    </Form>
  )
}

export default CVEducationForm
