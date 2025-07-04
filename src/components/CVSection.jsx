const CVSection = ({
  title,
  isAddBtnShown,
  onHover,
  onLeave,
  addEducation,
  children,
}) => {
  return (
    <section
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="relative grid gap-2"
    >
      {isAddBtnShown && (
        <button
          onClick={addEducation}
          className={
            "absolute right-2 cursor-pointer rounded-full bg-blue-500 px-8 py-1 text-white transition hover:bg-blue-600"
          }
          type="button"
        >
          Add {title}
        </button>
      )}
      <h2 className="font-title text-lg font-bold uppercase">{title}</h2>
      <hr className="text-400" />
      <div className="grid gap-4">{children}</div>
    </section>
  )
}

export default CVSection
