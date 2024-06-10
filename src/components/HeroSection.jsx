export default function HeroSection() {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dhdaxlymt/image/upload/v1718025904/Portefolio/cf9ufxmk7cnysia6tir8.png')]">
      <div className="flex justify-between items-center mx-10">
        <div>
          <span className="text-shadow-md">Hello word! Je suis</span>
          <div>
            <h1 className="text-5xl font-bold  text-shadow-md">
              Theodore Samba
            </h1>
            <span className="text-xl   text-shadow-md">
              Developpeur Web et Mobile |
              <br />
              UI/UX Designer
            </span>
          </div>
          <div className="flex justify-center gap-5">
            <button className="border py-2 px-4 shadow-lg">Contact</button>
            <button className="border py-2 px-4 shadow-lg">Mon CV</button>
          </div>
        </div>
        <div className="">
          <img
            className="object-cover"
            src="https://res.cloudinary.com/dhdaxlymt/image/upload/v1718021836/Portefolio/huyb683pyjetyhyziaknImageMoi.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
