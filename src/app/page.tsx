import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center px-4 md:px-0">
      <Image
        src="/me.jpg"
        alt="Liam Powers"
        width={320}
        height={320}
        priority
        className="w-56 h-56 md:w-80 md:h-80 rounded-[50px] object-cover"
      />
      <div className="max-w-2xl text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
          <a
            href="https://github.com/liam-powers"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/GitHub_dark.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/liampowers-/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </a>
        </div>
        <div className="text-4xl md:text-6xl font-bold mb-2">Liam Powers</div>

        <div className="text-lg md:text-base mb-1">
          Software at Capital One, prev. @ early-stage startup
        </div>
        <div className="text-lg md:text-base mb-6">
          Northwestern University Computer Science
        </div>
        <div className="w-full h-0.5 bg-white/20 mb-6" />

        <div className="flex flex-col gap-4 text-left">
          <div className="text-base md:text-base">
            Software engineer passionate about making complex things feel
            simple, the power of the open internet, and the pursuit of learning.
          </div>
          <div className="text-base md:text-base">
            Some projects I&apos;m particularly happy with:
            <ul className="list-disc pl-6 mt-2">
              <li>
                <a
                  href="https://github.com/liam-powers/deno-rivals2-elobot"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  deno-rivals2-elobot
                </a>
              </li>
              <li>
                <a
                  href="https://gist.github.com/liam-powers/013fb675fa823d98b470bffc975b664a"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  bass-harbor
                </a>
              </li>
            </ul>
          </div>
          <div className="text-base md:text-base">
            Outside of school and software, the most interesting things about me
            are that I:
            <ul className="list-disc pl-6 mt-2">
              <li>play the bass at a professional level</li>
              <li>got ranked #18 internationally in a video game</li>
              <li>lived in England for a number of years</li>
            </ul>
          </div>
          <div className="text-base md:text-base">
            I also enjoy less flashy (but just as rewarding) hobbies like lifting
            weights, meditating, reading, and journaling.
          </div>
          <div className="text-base md:text-base">
            If you&apos;d like to get in touch, please reach me at
            liampowers@northwestern(dot)edu.
          </div>
          <div className="italic text-base md:text-base">— Liam</div>
        </div>
      </div>
    </div>
  );
}
