import CVHeader from "./CVHeader"
import CVBody from "./CVBody"

const CV = () => {
  return (
    <div className="mx-auto flex min-h-222 max-w-3xl flex-col gap-12 shadow-2xl">
      <CVHeader />

      <CVBody />
    </div>
  )
}

export default CV
