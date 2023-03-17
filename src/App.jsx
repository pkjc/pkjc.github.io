export default function App() {
    return (
        <>
            {/*  on mobile only */}
            <div className="sm:hidden max-w-6xl mx-auto px-4 pt-4 grid grid-cols-1 gap-4 mt-2">
                <Bio s={'fade-in'} />
                <Socials s={'fade-in'} />
            </div>
            {/* desktop ui */}
            <div className="p-4 sm:mt-8 flex flex-col max-w-6xl mx-auto space-y-4">
                <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                    <span className="tracking-wide uppercase -rotate-90 absolute -left-14 top-1/2 text-md text-white">
                        About Me
                    </span>
                    <Bio s={'hidden sm:grid'} />
                    <Socials s={'hidden sm:grid'} />
                    <Card delay={"fade-in"}>
                        <Map />
                    </Card>
                </div>
                <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                    <span className="tracking-wide uppercase -rotate-90 absolute -left-14 top-1/2 text-md text-white">
                        Projects
                    </span>
                    <Card delay={"fade-in"}>
                        <> 
                            <Project
                                name={'MoneyInfo'}
                                link={'#'}
                                imgSrc={
                                    'https://images.ctfassets.net/lzny33ho1g45/5LqY8rOVmCiN8TrZDScqAB/e932b39ff7ebdeb6c1bf4f35e7eed58e/full-page-screenshots-in-chrome-02-developer-menu-command.png'
                                }
                            />
                        </>
                    </Card>
                    <Card delay={"fade-in"}>
                        <Project
                            name={'WatchNext'}
                            link={'#'}
                            imgSrc={
                                'https://images.ctfassets.net/lzny33ho1g45/5LqY8rOVmCiN8TrZDScqAB/e932b39ff7ebdeb6c1bf4f35e7eed58e/full-page-screenshots-in-chrome-02-developer-menu-command.png'
                            }
                        />
                    </Card>
                    <Card delay={"fade-in"}>
                        <Project
                            name={'Bored'}
                            link={'#'}
                            imgSrc={
                                'https://images.ctfassets.net/lzny33ho1g45/5LqY8rOVmCiN8TrZDScqAB/e932b39ff7ebdeb6c1bf4f35e7eed58e/full-page-screenshots-in-chrome-02-developer-menu-command.png'
                            }
                        />
                    </Card>
                    <Card delay={"fade-in"}>
                        <Project
                            name={'FavsPage'}
                            link={'#'}
                            imgSrc={
                                'https://images.ctfassets.net/lzny33ho1g45/5LqY8rOVmCiN8TrZDScqAB/e932b39ff7ebdeb6c1bf4f35e7eed58e/full-page-screenshots-in-chrome-02-developer-menu-command.png'
                            }
                        />
                    </Card>
                </div>
            </div>
        </>
    )
}

function Card({ children, delay }) {
    return (
        <article className={`shadow-sm bg-[#0D1117] overflow-hidden h-8 sm:h-64 flex justify-center items-center rounded-3xl border border-gray-700 relative py-28 sm:py-32 ${delay}`}>
            {children}
        </article>
    )
}

function Project({ imgSrc, name, link }) {
    return (
        <>
            <div className="rounded-2xl p-4 pt-0 overflow-hidden absolute -rotate-[20deg] transform hover:-translate-x-11 transition duration-500 -right-14 top-4">
                <img src={imgSrc} className="w-64 rounded-xl" />
            </div>
            <a href={link}>
                <button
                    title={name}
                    className="bg-white border border-gray-300 absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full flex justify-center items-center text-black text-sm"
                >
                    {name} &#8599;
                </button>
            </a>
        </>
    )
}

function Map() {
    return (
        <>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46939.937519876774!2d-83.19381384797394!3d42.66673566830559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824e998c4be31a1%3A0x29c4ee533bf1362f!2sRochester%20Hills%2C%20MI!5e0!3m2!1sen!2sus!4v1685824296360!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute left-1/2 top-[47%] z-10 flex w-full flex-shrink-0 -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-2">
                <div aria-hidden className="absolute translate-y-[18px]">
                    <span className="block h-12 w-12 animate-ping rounded-full bg-lime-500 duration-1000" />
                </div>

                <img
                    src="./avatag3.png"
                    alt="Photo of me above a map of my current location"
                    height={60}
                    width={60}
                    className="h-auto w-12 z-20 rounded-full transition-transform duration-600 hover:-rotate-[10deg] hover:scale-110"
                />
            </div>
        </>
    )
}

function Socials({ s }) {
    return (
        <article
            className={`fade-in grid grid-cols-2 gap-4 text-green-200 ${s}`}
        >
            <a
                href="https://instagram.com/shotstoriesbypankaj"
                target="_blank"
                className="py-8 sm:py-4 shadow-sm rounded-3xl border border-gray-700 bg-[#0D1117] flex items-center justify-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={56}
                    height={56}
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
            </a>

            <a
                href="https://pkj.medium.com/"
                target="_blank"
                className="py-8 sm:py-4 shadow-sm rounded-3xl border border-gray-700 bg-[#0D1117] flex items-center justify-center "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={56}
                    height={56}
                    fill="currentColor"
                    className="bi bi-medium"
                    viewBox="0 0 16 16"
                >
                    <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" />
                </svg>
            </a>
            <a
                href="https://www.linkedin.com/in/pankajchobharkar"
                target="_blank"
                className="py-8 sm:py-4 shadow-sm rounded-3xl border border-gray-700 bg-[#0D1117] flex items-center justify-center "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={56}
                    height={56}
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
            </a>

            <a
                href="https://github.com/pkjc"
                target="_blank"
                className="py-8 sm:py-4 shadow-sm rounded-3xl border border-gray-700 bg-[#0D1117] flex items-center justify-center "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={56}
                    height={56}
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
            </a>
        </article>
    )
}

function Bio({ s }) {
    return (
        <>
            <div
                className={`fade-in bg-[#0D1117] shadow-sm md:col-span-2 block rounded-3xl border border-gray-700 px-8 py-6 relative ${s}`}
            >
                {/* <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span> */}
                <div className="sm:flex flex-col items-start sm:gap-2">
                    <div className="">
                        <img
                            alt="Pankaj Chobharkar"
                            src="./avatag3.png"
                            className="h-28 w-28 object-scale-down"
                        />
                    </div>
                    <div>
                        {/* <h3 className="text-xl font-bold text-gray-300 sm:text-xl">
                Pankaj Chobharkar
              </h3> */}
                        {/* <p className="mt-0.25 text-sm font-medium text-gray-600">
                Software Engineer
              </p> */}
                    </div>
                </div>
                <div className="">
                    <p className="text-md leading-7 text-gray-200">
                        Hi👋 &nbsp;I'm{' '}
                        <span style={{ fontFamily: 'IBM Plex Mono' }}>
                            Pankaj Chobharkar
                        </span>
                        , a software engineer from India, currently working in
                        the US. I'm interested in the JAMstack, good UX, Table
                        Tennis and Science Fiction.
                    </p>
                </div>
                {/* <dl className="mt-6 flex gap-4 sm:gap-6">
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600"><a href="#">Github</a></dt>
              <dd className="text-xs text-gray-500">Code</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600"><a href="#">Linkedin</a></dt>
              <dd className="text-xs text-gray-500">Social</dd>
            </div>
             <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600"><a href="#">Hashnode</a></dt>
              <dd className="text-xs text-gray-500">Blog</dd>
            </div>
          </dl> */}
            </div>
        </>
    )
}

{
    /* <article className="fade-in shadow-sm bg-[#0D1117] h-8 sm:h-64 overflow-hidden flex justify-center items-center rounded-3xl border border-gray-700 relative py-28 sm:py-32">
{children}
<div className="rounded-2xl p-4 pt-0 overflow-hidden absolute -rotate-[20deg] -right-14 top-4">
<img
  src="https://images.ctfassets.net/lzny33ho1g45/5LqY8rOVmCiN8TrZDScqAB/e932b39ff7ebdeb6c1bf4f35e7eed58e/full-page-screenshots-in-chrome-02-developer-menu-command.png"
  className="w-64 rounded-xl"
/>
{/* <time datetime="2022-10-10" className="block text-xs text-gray-500">
10th Oct 2022
</time> */
}

{
    /* <a href="#">
<h3 className="mt-0.5 text-xl font-bold text-gray-900">
How to center an element using JavaScript and jQuery
</h3>
</a>

<div className="mt-4 flex flex-wrap gap-1 mb-8">
<span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
Snippet
</span>

<span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
JavaScript
</span>
</div> 
</div>
<button
title={name}
className="bg-white border border-gray-300 absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full flex justify-center items-center text-black text-sm"
>
{name} &#8599;
</button>
</article> */
}
