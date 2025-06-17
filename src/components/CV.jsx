import CVHeader from "./CVHeader"

const CV = () => {
  return (
    <div className="mx-auto flex min-h-222 max-w-3xl flex-col gap-12 shadow-2xl">
      <CVHeader />

      <main className="grid gap-8 px-4 pb-6">
        <section className="grid gap-2">
          <h2 className="font-title text-lg font-bold uppercase">Education</h2>
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
                Contestant on JTBC's R U Next?; eliminated in Episode 9, placed
                11th
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
  )
}

export default CV
