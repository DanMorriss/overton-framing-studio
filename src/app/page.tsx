import Image from "next/image";

import frame from "../../public/images/frame2.png";
import amanda from "../../public/images/amanda1.webp";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <Image
          src={frame}
          alt="Frame image"
          width="500"
          height="1080"
          className="absolute -z-10 -mx-52"
        />
        <div className="relative mt-0 flex flex-col justify-center">
          <h1 className="text-5xl text-center font-bold">
            Overton Framing Studio
          </h1>
          <h2 className="text-center">
            Bespoke framing with over 15 years experience.
          </h2>
          <button className="rounded-full outline p-2 max-w-fit">
            Book a free consultation
          </button>
        </div>
      </div>
      <div>
        <Image
          src={amanda}
          alt="Amanda image"
          width="500"
          height="500"
          priority={true}
        />
        <h2>Meet Amanda, the framing expert.</h2>
        <p>
          Amanda is a distinguished frame maker based in Marlborough, bringing
          over 15 years of expertise to her craft. Her dedication to providing
          personalized service ensures that every customer receives meticulous
          attention, whether they need a single photo mounted or an entire
          exhibition framed.
        </p>
        <p>
          A true creative at heart, Amanda possesses a sharp eye for selecting
          the perfect frames, mounts, and colors to complement each piece of
          artwork and its intended display setting. She thrives on challenges,
          which has led her to frame a diverse array of unique and delicate
          items, including memory boxes and large, fragile ceramic sculptures.
        </p>
        <p>
          Amanda&#39;s passion and pride in her work are evident in every
          project she undertakes, making her a trusted choice for anyone seeking
          exceptional framing services.
        </p>
      </div>
    </>
  );
}
