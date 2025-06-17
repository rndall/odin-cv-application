import { AtSymbolIcon } from "@heroicons/react/24/outline"
import { PhoneIcon } from "@heroicons/react/24/outline"

const App = () => {
  return (
    <div className="min-h-dvh py-6">
      <div className="mx-auto grid max-w-3xl gap-12 shadow-2xl">
        <header className="mt-14">
          <section className="bg-200 flex h-44 items-center">
            <div className="flex size-60 items-center justify-center rounded-tr-full rounded-br-full bg-white">
              <img
                className="size-48 rounded-full object-cover"
                src="https://imgs.search.brave.com/b2vg4Pf_xrOQ1A54MDUenluUnF6BQVPD8pS9BiHDTGk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vZUNyUTBa/U1F1eURBaV9pWWxZ/aW1IMlUxQ0xkR3Nq/V2FrOTFBY1RQZm9S/US9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/Yldkei9Mbk5sWVhK/amFDNWljbUYyL1pT/NWpiMjB2UlVkMVZq/WjEvTFRRMldqWjBZ/bUZhVUZoNS9NMmwz/UVhOUWJVaHJVV3d6/L1RWWXRPRmx0YXpK/RlgxRnUvYnk5eWN6/cG1hWFE2TlRZdy9P/ak15TURveE9qQXZa/enBqL1pTOWhTRkl3/WTBoTk5reDUvT1hK/alJ6bDNMMk5IYkhW/YS9lVFZxWWpJd2Rs/cEhPV292L1pGY3hi/R0p1VW5wTWVsVXov/VEhwTmRpOU5hbU14/VEhwSi9NVTFFU1hs/TmFURkhMMkZYL1dq/QmxVekZIWVZkYU1H/VlQvTVVRdlUwVkdU/MUpWZUUxUy9VekZP/VkRBNVR5OU1WMFl3/L1RGVlJkRkZXWkVK/VmExSlUvTDB4VVNY/ZE5hbFYwV2tjNS9h/bVJYTVd3dlltNVNl/a3hVL1RXOU5VMnQx/WkRKV2FTOWovUkRr/eVVGZEplRTlYVFhn/LmpwZWc"
                alt=""
              />
            </div>

            <div className="font-title grid grow gap-2.5 ps-16 pe-4 pt-2 font-bold">
              <h1 className="text-3xl uppercase">Chanelle Moon</h1>
              <div className="text-lg">
                <div className="flex items-center gap-2">
                  <AtSymbolIcon className="size-6" />
                  <p>chanelle.moon@email.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="size-6" />
                  <p>+1 (310) 555-0123</p>
                </div>
              </div>
            </div>
          </section>
        </header>

        <main className="grid gap-8 px-4 pb-6">
          <section className="grid gap-2">
            <h2 className="font-title text-lg font-bold uppercase">
              Education
            </h2>
            <hr className="text-400" />
            <div className="grid gap-4">
              <div>
                <h3>BSc in Bioengineering</h3>
                <p className="font-sans font-bold">
                  Yonsei University - Global Leaders College
                </p>
                <p className="font-sans text-sm">2022 - 2024</p>
              </div>
            </div>
          </section>

          <section className="grid gap-2">
            <h2 className="font-title text-lg font-bold uppercase">
              Work Experience
            </h2>
            <hr className="text-400" />
            <div className="grid gap-4">
              <div>
                <p className="text-300 font-bold">Aug 2024 - present</p>
                <p className="text-300">FIFTY FIFTY (ATTRAKT)</p>
                <h3>Main Vocalist & Rapper</h3>
                <p className="text-sm">
                  Debuted Aug 30, 2024 with pre-release single Starry Night
                  followed by mini-album Love Tune
                </p>
              </div>

              <div>
                <p className="text-300 font-bold">Jun 1 - Dec 31, 2023</p>
                <p className="text-300">BELIFT LAB</p>
                <h3>Trainee</h3>
                <p className="text-sm">
                  Contestant on JTBC's R U Next?; eliminated in Episode 9,
                  placed 11th
                </p>
              </div>

              <div>
                <p className="text-300 font-bold">Jan 2021 - Dec 2022</p>
                <p className="text-300">YueHua Entertainment</p>
                <h3>Trainee</h3>
                <p className="text-sm">
                  2 years of full vocal, dance, language training
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
