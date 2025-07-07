import Button from "./Button"

const CVSection = ({ title, addItem, children }) => {
  return (
    <section className="group relative grid gap-2">
      <Button onClick={addItem} styles="absolute right-2" hover>
        Add {title}
      </Button>

      <h2 className="font-title text-lg font-bold uppercase">{title}</h2>
      <hr className="text-400" />
      <div className="grid gap-4">{children}</div>
    </section>
  )
}

export default CVSection
