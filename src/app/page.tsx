function renderSocialMedias() {
  const socialMedias = [
    { name: "E-mail", url: "mailto:brunomhenke@gmail.com" },
    { name: "Linkedin", url: "https://br.linkedin.com/in/brunohenke" },
    { name: "Instagram", url: "https://www.instagram.com/bruno.henke/" },
    { name: "Savee.it", url: "https://savee.it/henke/" },
  ];

  return (
    <ul>
      {socialMedias.map((item) => {
        return (
          <li key={item.name}>
            <a
              href={item.url}
              target="_blank"
              className="uppercase text-black text-3xl md:text-base font-light font-['Helvetica'] leading-normal pb-1"
            >
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-12.svg')] bg-center bg-no-repeat bg-cover min-h-screen p-5 flex flex-col justify-between">
      <div>{renderSocialMedias()}</div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <div className="md:max-w-[512px] 2xl:max-w-none">
            <p className="text-black text-2xl font-light font-['Helvetica'] leading-9">
              Hey, I’m Bruno Henke! <br />
              I’ve been living in São Paulo working as a designer at{" "}
              <a
                href="https://work.co/"
                target="_blank"
                className="text-black text-opacity-50 text-2xl font-light font-['Helvetica'] leading-9"
              >
                Work&Co
              </a>
              .
              <br />
              <br />
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="md:max-w-[571px] 2xl:max-w-none">
            <p className="text-black text-2xl font-light font-['Helvetica'] leading-9">
              I’ve been designing for six years, and I’m really excited about
              what I do. I don’t believe that just hard work is enough, but if
              you work hard and love what you do, you can do and be whatever you
              want.
              <br />
              <br />
              So, if you would like to say hi, contact me in{" "}
              <a
                href="mailto:brunomhenke@gmail.com"
                target="_blank"
                className="text-black text-opacity-50 text-2xl font-light font-['Helvetica'] leading-9"
              >
                brunomhenke@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
