export default function Header() {
  return (
    <div className="min-h-screen w-full bg-[url('/images/brunohenkebackground.png')] bg-cover bg-center bg-no-repeat text-white flex flex-col p-8">
      <header className="grid md:grid-cols-4 grid-cols-2 gap-8">
        <nav className="col-span-1">
          <ul className="space-y-2 text-xl">
            {["Email", "LinkedIn", "Instagram", "Savee"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <section className="col-span-1">
          <h2 className="text-2xl font-normal mb-2">Selected work</h2>
          <p className="text-xl">2021 - 2024</p>
        </section>
        <section className="col-span-1">
          <h2 className="text-2xl font-normal mb-2">Expertise</h2>
          <p className="text-xl">Explorations, Product and Motion Design</p>
        </section>
        <section className="col-span-1">
          <h2 className="text-2xl font-normal mb-2">Current Role</h2>
          <p className="text-xl">Designer at Work&Co.</p>
        </section>
      </header>

      <main className="flex-grow flex items-end">
        <h1 className="text-title text-left uppercase text-white">
          Hey!
          <br />
          I am Bruno Henke
          <br />
          Digital designer
        </h1>
      </main>
    </div>
  );
}
