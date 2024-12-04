
import heroImage from "../assets/about.jpg";
export default function About() {
  return (
    <section id="about">
      <div className="bg-[#04153F] font-roboto flex items-center justify-center p-4 sm:p-4 md:p-8">
        <div className="bg-[#04153F] mini-h-screen rounded-[1rem] w-full max-w-7xl mx-auto p-12 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          <h1 className="text-[#D2D81D] text-4xl font-bold mb-8 text-center">About</h1>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="space-y-6">
              <p className="text-white text-lg">
                Welcome to our Futsal Booking System! We make it easy to browse and book futsal courts online, saving you time and hassle. Whether you're scheduling a friendly match or organizing a tournament, we've got you covered!
              </p>
              <p className="text-white text-lg">
                Join us to simplify futsal bookings! Connect with players, book courts effortlessly, and be part of an active futsal community.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#FFFDE7] rounded-lg transform rotate-3 shadow-[0_0_10px_#D2D81D]"></div>
              <img 
                src={heroImage} 
                alt="Futsal court with players playing"
                className="relative rounded-lg w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
