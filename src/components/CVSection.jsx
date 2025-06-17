const CVSection = ({ title, children }) => {
  return (
    <section className="grid gap-2">
      <h2 className="font-title text-lg font-bold uppercase">{title}</h2>
      <hr className="text-400" />
      <div className="grid gap-4">{children}</div>
    </section>
  )
}

export default CVSection
