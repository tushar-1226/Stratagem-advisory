import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function ContactUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-0">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Secondary Color with Text */}
          <div className="w-full lg:w-1/2 bg-secondary flex items-center justify-center p-12 lg:p-20">
            <div className="max-w-lg">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Get in Touch
              </h2>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
                We'd love to hear from you. Send us a message and we'll respond
                as soon as possible.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 relative">
            <Image
              src="/images/contact-us.jpg"
              alt="Contact Us"
              width={1200}
              height={800}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-3 mx-2 lg:py-20 lg:px-6 md:mx-4">
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
