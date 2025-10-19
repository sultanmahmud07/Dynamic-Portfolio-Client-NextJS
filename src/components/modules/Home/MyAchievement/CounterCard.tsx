"use client";
import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import CountUp from "react-countup";

interface CounterData {
  logo: StaticImageData;
  countNumber: number;
  name: string;
}

interface CounterCardProps {
  data: CounterData;
}

const CounterCard: React.FC<CounterCardProps> = ({ data }) => {
  const { logo, countNumber, name } = data;
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (countRef.current) observer.unobserve(countRef.current);
    };
  }, []);

  return (
    <div
      className="single_count flex flex-col justify-center items-center text-white"
      ref={countRef}
    >
      <Image
        src={logo}
        alt={name}
        width={60}
        height={60}
        className="w-16 mb-4"
      />
      <h4 className="text-3xl md:text-4xl font-bold">
        {isVisible ? (
          <CountUp duration={2.5} start={0} end={countNumber} />
        ) : (
          0
        )}
        +
      </h4>
      <p className="text-sm md:text-base font-medium mt-1">{name}</p>
    </div>
  );
};

export default CounterCard;
