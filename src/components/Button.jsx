const Button = ({ variant, onClick, styles, asChild, children, ...props }) => {
  const getVariantStyles = () => {
    const variants = {
      primary: "bg-blue-500 hover:bg-blue-600",
      secondary: "bg-400 hover:bg-600",
    }

    return variants[variant] ?? variants["primary"]
  }

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer rounded-full py-1 text-white transition ${!asChild && "px-8"} ${getVariantStyles()} ${styles}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
