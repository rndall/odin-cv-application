import Form from "../Form"
import { AtSymbolIcon } from "@heroicons/react/24/outline"
import { PhoneIcon } from "@heroicons/react/24/outline"

const CVHeaderForm = ({ onSubmit, name, email, phoneNumber, onChange }) => {
  return (
    <Form
      onSubmit={onSubmit}
      className="font-title grid grow gap-2.5 ps-16 pe-4 pt-2 font-bold"
    >
      <input
        className="text-3xl uppercase"
        placeholder="Name"
        id="name"
        autoComplete="name"
        value={name}
        onChange={onChange}
      />
      <address className="text-lg not-italic">
        <div className="flex items-center gap-2">
          <AtSymbolIcon className="size-6" />
          <input
            className="basis-3/5"
            type="email"
            id="email"
            placeholder="name@email.com"
            autoComplete="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="flex items-center gap-2">
          <PhoneIcon className="size-6" />
          <input
            className="basis-3/5"
            type="tel"
            id="phoneNumber"
            placeholder="09XXXXXXXXX"
            autoComplete="tel"
            value={phoneNumber}
            onChange={onChange}
          />
        </div>
      </address>
    </Form>
  )
}

export default CVHeaderForm
