import Image from "next/image";

export default function SupremacySecurity() {
  return (
    <section className="relative bg-black overflow-hidden">
      <div className="relative z-10 2xl:max-w-[1740px] w-[95%] mx-auto pt-6 pb-8">
        {/* Header */}
        <div className="text-center space-y-3 text-[30px] lg:text-[65px]">
          <h3
            style={{
              fontFamily: "Futuru",
              fontWeight: "600",
              background: "linear-gradient(264deg, #00AA71 0%, #FFF 66.57%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Supremacy of security
          </h3>
          <p className="self-stretch text-center max-w-[500px] mx-auto justify-center text-[#a9a9a9] text-[14px] lg:text-[20px] font-light tracking-wider font-futuru leading-[20px] lg:leading-[25px]">
            Advanced protection to keep your data, transactions, and business
            secure from threats and breaches.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-[1500px] mx-auto w-[95%] lg:w-[90%] py-10">
          {/* Left side - Content */}
          <div className="space-y-12">
            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-8 max-w-[95%]">
              {/* Role-Based Control */}
              <div className="space-y-3">
                <Image
                  src="/ai/first.svg"
                  alt="End-to-End Encryption"
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center
                  "
                />
                <div>
                  <h3 className=" justify-center text-[#FFFFFFDE] text-[16px] lg:text-[20px] font-medium tracking-widest font-futuru lg:leading-relaxed leading-[20px]">
                    Role-Based Control
                  </h3>
                  <p className="w-[173.95px] justify-center text-[#7b7c8c] lg:max-w-[80%] text-[14px] lg:text-[16px] tracking-wider font-normal font-futuru lg:leading-5 leading-4 mt-2">
                    Limits data access to
                    authorized users.
                  </p>
                </div>
              </div>

              {/* AI Fraud Detection */}
              <div className="space-y-3">
                <Image
                  src="/ai/second.svg"
                  alt="End-to-End Encryption"
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center
                  "
                />
                <div>
                  <h3 className=" justify-center text-[#FFFFFFDE] text-[16px] lg:text-[20px] font-medium tracking-widest font-futuru lg:leading-relaxed leading-[20px] ">
                    AI Fraud Detection
                  </h3>
                  <p className="justify-center text-[#7b7c8c] lg:max-w-[80%] text-[14px] lg:text-[16px] tracking-wider font-normal font-futuru lg:leading-5 leading-4 mt-2">
                    Stops suspicious transactions

                    instantly.
                  </p>
                </div>
              </div>

              {/* Secure Cloud */}
              <div className="space-y-3">
                <Image
                  src="/ai/third.svg"
                  alt="End-to-End Encryption"
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center
                  "
                />
                <div>
                  <h3 className=" justify-center text-[#FFFFFFDE] text-[16px] lg:text-[20px] font-medium tracking-widest font-futuru lg:leading-relaxed leading-[20px]">
                    Secure Cloud
                  </h3>
                  <p className=" justify-center text-[#7b7c8c] lg:max-w-[80%] text-[14px] lg:text-[16px] tracking-wider font-normal font-futuru lg:leading-5 leading-4 mt-2">
                    Ensures safety with backups  and compliance.
                  </p>
                </div>
              </div>

              {/* End-to-End Encryption */}
              <div className="space-y-3">
                <Image
                  src="/ai/fourth.svg"
                  alt="End-to-End Encryption"
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center
                  "
                />
                <div>
                  <h3 className="justify-center text-[#FFFFFFDE] text-[16px] lg:text-[20px] font-medium tracking-widest font-futuru leading-[20px] lg:leading-relaxed">
                    End-to-End Encryption
                  </h3>
                  <p className=" justify-center text-[#7b7c8c] lg:max-w-[80%] text-[14px] lg:text-[16px] tracking-wider font-normal font-futuru lg:leading-5 leading-4 mt-2">
                    Keeps data secure from  unauthorized access.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - 3D Cube Visualization */}
          <div className="relative flex items-center justify-center w-screen lg:w-[110%] 2xl:w-[120%] right-16 lg:right-10 xl:right-24 2xl:right-40">
            {/* Main cube */}
            <Image
              src="/game/Group-supermacy.png"
              alt="Main Cube"
              width={2000}
              height={2000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
