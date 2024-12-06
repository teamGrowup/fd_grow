'use client';
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const Category = () => {
  const sections: string[] = ["상의", "아우터", "바지", "원피스/스커트", "신발", "가방", "패션 소품", "언더웨어", "뷰티", "스포츠/레저", "라이프"];
  const sectionRefs = useRef<(HTMLElement | null)[]>([]); // Ref 배열
  const [activeSection, setActiveSection] = useState<string>("상의");

  const handleScrollTo = (index: number): void => {
    const targetRef = sectionRefs.current[index];
    if (targetRef) {
      targetRef.scrollIntoView({
        behavior: "auto",
        block: "start",
        
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6, }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="flex relative items-start justify-start w-full">
      <nav className="sticky top-12 bg-[#f5f5f5]  text-white flex flex-col">
        {sections.map((section, index) => (
          <button
            key={section}
            className={`px-4 py-2 text-sm h-14 w-32 text-left ${
              activeSection === section
                ? "bg-white text-black"
                : "text-black"
            }`}
            onClick={() => handleScrollTo(index)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>

      {/* Sections */}
      <div className="flex-1">
        {sections.map((section, index) => (
          <section key={section} id={section} ref={(el) => {
              sectionRefs.current[index] = el; // Ref 저장
            }}
            style={{ textAlign: "center" }}
            className={` grid grid-cols-2 scroll-mt-12 h-screen bg-white`}
          >
            <div className=" justify-center px-4 w-full ">
              <div className="w-full flex items-center justify-center">
                <div className="relative w-[70%] aspect-[5/5] space-x-2 flex items-center justify-center">
                  <Image
                    src="/category_test1-removebg-preview.png"
                    alt="Event Image 1"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="w-full flex items-center justify-center">
                <div className="relative w-[70%] aspect-[5/5] space-x-2 flex items-center justify-center">
                  <Image
                    src="/category_test2-removebg-preview.png"
                    alt="Event Image 1"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Category;
