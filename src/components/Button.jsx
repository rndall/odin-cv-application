const Button = ({ variant, onClick, styles, asChild, children }) => {
  const getVariantStyles = () => {
    const variants = {
      primary: "bg-blue-500 hover:bg-blue-600",
      secondary: "bg-400 hover:bg-600",
      destructive: "bg-red-500 hover:bg-red-600",
      hidden: "hidden",
    }

    return variants[variant] ?? variants["primary"]
  }

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer rounded-full py-1 text-white transition ${!asChild && "px-8"} ${getVariantStyles()} ${styles}`}
    >
      {children}
    </button>
  )
}

export default Button
