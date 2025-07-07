import Button from "./Button"

const CVSection = ({
  title,
  isAddBtnShown,
  onHover,
  onLeave,
  addItem,
  children,
}) => {
  return (
    <section
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="relative grid gap-2"
    >
      {isAddBtnShown && (
        <Button onClick={addItem} styles="absolute right-2">
          Add {title}
        </Button>
      )}
      <h2 className="font-title text-lg font-bold uppercase">{title}</h2>
      <hr className="text-400" />
      <div className="grid gap-4">{children}</div>
    </section>
  )
}

export default CVSection
