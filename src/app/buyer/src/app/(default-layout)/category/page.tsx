'use client';
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const Category = () => {
  const sections: string[] = [
    "상의", "아우터", "바지", "원피스/스커트", "신발",
    "가방", "패션 소품", "언더웨어", "뷰티",
    "스포츠/레저", "라이프", "1", "2", "3", "4", "5",
    "6", "7", "8", "9", "10", "11", "12", "13"
  ];

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const navRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState<string>("상의");

  const handleScrollTo = (index: number): void => {
    const targetRef = sectionRefs.current[index];
    if (targetRef) {
      targetRef.scrollIntoView({
        behavior: "instant",
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
      { threshold: 0.6 }
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

  // 활성화된 버튼이 항상 보이도록 스크롤
  useEffect(() => {
    const activeIndex = sections.indexOf(activeSection);
    if (activeIndex !== -1) {
      const activeNav = navRefs.current[activeIndex];
      const navContainer = navContainerRef.current;

      if (activeNav && navContainer) {
        const navContainerBounds = navContainer.getBoundingClientRect();
        const activeNavBounds = activeNav.getBoundingClientRect();
        
        if (
          activeNavBounds.top < navContainerBounds.top ||
          activeNavBounds.bottom > navContainerBounds.bottom
        ) {
          activeNav.scrollIntoView({
            behavior: "instant",
            block: "nearest",
          });
        }
      }
    }
  }, [activeSection, sections]);

  return (
    <div className="flex relative items-start justify-start w-full">
      {/* 네비게이션 메뉴 */}
      <nav
        className="flex-1 sticky top-12 bg-[#f5f5f5] text-black flex flex-col overflow-y-auto  h-[calc(100vh-6.5rem)]"
        ref={navContainerRef}
      >
        <div className="flex flex-col">
        {sections.map((section, index) => (
          <button
            key={section}
            ref={(el) => {
              navRefs.current[index] = el; // 버튼의 ref 저장
            }}
            className={`px-4 py-2 text-sm h-14 text-left ${
              activeSection === section
                ? "bg-white text-black font-bold"
                : "text-gray-500"
            }`}
            onClick={() => handleScrollTo(index)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
        </div>
      </nav>

      {/* 섹션 컨텐츠 */}
      <div className="flex-[3.2_1_0%]">
        {sections.map((section, index) => (
          <section
            key={section}
            id={section}
            ref={(el) => {
              sectionRefs.current[index] = el; // 섹션의 ref 저장
            }}
            className="scroll-mt-12 scroll-mb-16 h-screen bg-white"
          >
            <div className="w-full p-4 flex items-center justify-between cursor-pointer">
              <p className="text-lg font-semibold">{section}</p>
            </div>
            <div className="grid grid-cols-2 justify-center px-4 w-full ">
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
                    alt="Event Image 2"
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
