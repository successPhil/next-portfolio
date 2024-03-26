import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    
    <main className="w-screen h-screen relative">
     <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage: "url(/main-bg.webp"}}>
      <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
        <h1 className="text-[30px] md:text-[50px] text-white font-semibold">
          Hi! I&apos;m Phil Basti
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">
              {" "}
             Fullstack Developer
          </span>
        </h1>
        <p className="text-gray-200 hidden md:block">
          I am a Marine veteran who loves building applications and helping solve problems. I specialize in using technologies like <strong>React</strong>, <strong>Django</strong>, <strong>PostgreSQL</strong>, <strong>Docker</strong>, <strong>AWS</strong>, and <strong>NGINX</strong> to build fullstack web applications.
          <br/>
          <br/>
          Two things I love about this industry are constant exposure to learning new technologies and the opportunities to collaborate with other engineers.
          <br/>
          <br/>
          If you have any interest in working together or even just having a chat, don&apos;t hesitate to reach out through the <strong>Contact Me</strong> form!
          
        </p>


        <div className="flex-col md:flex-row hidden md:flex gap-5">
          <Link href="/my-skills" className="rounded-[20px] group relative bg-transparent border border-white hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
            Learn More
          </Link>

          <Link href="/my-projects" className="rounded-[20px] group relative bg-transparent border border-white hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
            <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/>
            My Projects
          </Link>

          <Link href="/contact-me" className="rounded-[20px] group relative bg-transparent border border-white hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
            <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/>
            Contact Me
          </Link>
        </div>
      </div>
     </div>

{/* Mobile Starts Here */}


    <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
    <Link href="/my-skills" className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
            Learn More
          </Link>

          <Link href="/my-skills" className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
            My Projects
          </Link>

          <Link href="/my-skills" className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
          
            Contact Me
          </Link>

    </div>

    <div className="absolute bottom-0 right-0 md:z-10">
      <Image 
        src="/horse.png"
        alt="horse"
        height={300}
        width={300}
        className="absolute  top-60 md:right-55 md:top-40"
        />

      <Image 
        src="/cliff.webp"
        alt="cliff"
        height={480}
        width={480}
        />
    </div>

    <div className="absolute -bottom-10 md:bottom-10 z-[5] w-full h-full">
      <Image
        src="/trees.webp"
        alt="trees"
        width={2000}
        height={2000}
        className="w-full h-full"
        />

    </div>

    <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    
    </main>
    
  );
}
