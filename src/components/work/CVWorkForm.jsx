import Form from "../Form"

const CVWorkForm = ({
  onSubmit,
  startDate,
  endDate,
  companyName,
  jobTitle,
  details,
  onChange,
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <div className="flex max-w-7/12 flex-col">
        <div className="text-300 font-bold">
          <input
            autoFocus
            className="max-w-34 rounded-md outline"
            type="date"
            id="startDate"
            value={startDate}
            onChange={onChange}
          />
          {" - "}
          <input
            className="max-w-34 rounded-md outline"
            type="date"
            id="endDate"
            value={endDate}
            onChange={onChange}
          />
        </div>
        <input
          className="text-300 rounded-md outline"
          id="companyName"
          value={companyName}
          placeholder="Company Name"
          onChange={onChange}
        />
        <input
          className="rounded-md outline"
          id="jobTitle"
          value={jobTitle}
          placeholder="Position Title"
          onChange={onChange}
        />
      </div>
      <textarea
        className="h-5 w-full rounded-md text-sm outline"
        id="details"
        value={details}
        placeholder="Details"
        onChange={onChange}
      />
    </Form>
  )
}

export default CVWorkForm
