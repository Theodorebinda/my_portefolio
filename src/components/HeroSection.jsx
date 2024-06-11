import ImageComponent from "./ImagesComponent";

export default function HeroSection() {
  return (
    <div id="hero" className={` relative min-h-screen pt-2 text-[#181818]`}>
      <div className="absolute inset-0 bg-custom z-0"></div>
      <div className="flex justify-between items-center  mx-10 relative z-10">
        <div className="flex justify-between items-center flex-col gap-20">
          <div className="mt-12">
            <span className="text-shadow-md pl-3">Hello word! Je suis</span>
            <div className="flex flex-col justify-center items-start gap-4">
              <h1 className="text-7xl font-bold  text-shadow-md">
                Theodore Samba
              </h1>
              <span className="text-xl   text-shadow-md pl-3">
                Developpeur Web et Mobile |
                <br />
                UI/UX Designer
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-10 ">
            <button className="rounded-md py-3 px-8 shadow-lg bg-[#c1bebe]">
              Contact
            </button>
            <button className="rounded-md  py-3 px-8 shadow-lg bg-[#c1bebe]">
              Mon CV
            </button>
          </div>
        </div>
        <div className="">
          <ImageComponent
            className="object-cover"
            src={
              "https://res.cloudinary.com/dhdaxlymt/image/upload/v1718021836/Portefolio/huyb683pyjetyhyziaknImageMoi.png"
            }
            alt="imageTheodore"
            effect="blur"
          />
        </div>
      </div>
    </div>
  );
}
