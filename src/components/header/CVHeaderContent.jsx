import { AtSymbolIcon } from "@heroicons/react/24/outline"
import { PhoneIcon } from "@heroicons/react/24/outline"

const CVHeaderContent = ({ name, email, phoneNumber }) => {
  return (
    <div className="font-title grid grow gap-2.5 ps-16 pe-4 pt-2 font-bold">
      <h1 className="h-9 text-3xl uppercase">{name}</h1>
      <address className="text-lg not-italic">
        <div className="flex h-7 items-center gap-2">
          {email && <AtSymbolIcon className="size-6" />}
          <p>{email}</p>
        </div>
        <div className="flex h-7 items-center gap-2">
          {phoneNumber && <PhoneIcon className="size-6" />}
          <p>{phoneNumber}</p>
        </div>
      </address>
    </div>
  )
}

export default CVHeaderContent
