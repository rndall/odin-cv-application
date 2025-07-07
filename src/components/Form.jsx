import Button from "./Button"

const Form = ({ children, ...props }) => {
  return (
    <form {...props}>
      {children}
      <Button variant="hidden" />
    </form>
  )
}

export default Form
