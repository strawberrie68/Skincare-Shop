import Logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black py-16 text-white">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Unlock Your Radiant Skin: Your Personalized Skincare Journey Starts Here. Where the secret to your best skin awaits.
          </p>
          <p>© Daily.Routine All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Benefits</p>
          <p className="my-5">Our Routines</p>
          <p>Shop</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">You found an easter egg.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
