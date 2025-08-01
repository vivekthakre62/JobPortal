import React from "react";
import amazon from "../images/JobHook_files/Amazon.png";
// import google from "../images/JobHook_files/Google.png";
import figma from "../images/JobHook_files/Figma.png";
import oracle from "../images/JobHook_files/Oracle.png";
import microsoft from "../images/JobHook_files/Microsoft.png";
import netflix from "../images/JobHook_files/Netflix.png";
import tesla from "../images/JobHook_files/Pinterest.png";
function Logos() {
  const logos = [
    { src: amazon, alt: "Amazon" },
    // { src: google, alt: "Google" },
    { src: figma, alt: "Figma" },
    { src: oracle, alt: "Oracle" },
    { src: microsoft, alt: "Microsoft" },
    { src: netflix, alt: "Netflix" },
    { src: tesla, alt: "Tesla" },
  ];

  return (
    <div className="flex items-center gap-6 px-6">
      {logos.map(({ src, alt }, index) => (
        <div
          key={index}
          className="flex-shrink-0"
          style={{ width: "150px" }}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

function Companies() {
  return (
    <div className="overflow-hidden -left-20 bg-inherit py-4">
      <div
        className="flex animate-marquee whitespace-nowrap"
        style={{
          width: 150 * 14, // 7 logos x 2 repeats
          animationDuration: "40s",
        }}
      >
        <Logos />
        <Logos />
      </div>
    </div>
  );
}
export default Companies;