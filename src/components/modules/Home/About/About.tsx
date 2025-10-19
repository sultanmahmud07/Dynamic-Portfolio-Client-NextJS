import about1 from '@@/home/desk-image.jpg'
import about2 from '@@/home/laptop.jpg'
import { FaHeart, FaEye } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const About = () => {

  return (
    <div className='py-8 md:py-10'>
      <div className="main-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16">
          <div className="relative md:pt-6">
            <Image
              src={about1}
              width={400}
              height={400}
              alt="Developer at work"
              className="w-5/6 rounded-xl transition-transform duration-500 hover:scale-105"
            />
            <Image
              src={about2}
              width={200}
              height={200}
              alt="Laptop workspace"
              className="w-2/5 transition-transform duration-500 hover:scale-105 absolute bottom-[-20px] md:bottom-5 right-0 rounded-lg border-4 border-white shadow-lg"
            />
          </div>
          <div>
            <h5 className='text-primary font-bold uppercase my-2 text-sm'>Hello, I&apos;m Sultan</h5>
            <h1 className='font-semibold text-3xl md:text-4xl leading-snug mb-4'>
              Passionate <br /> Full Stack Developer
            </h1>
            <p className="text my-5">
              I&apos;m a dedicated full-stack developer who loves crafting clean, efficient, and user-friendly web applications.
              My focus lies in building scalable solutions using modern technologies across both frontend and backend.
            </p>

            {/* Mission + Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-secondary p-3 rounded">
                <h5 className="my-2 flex items-center gap-2 font-semibold text-lg text-primary">
                  <span><FaHeart /></span>My Mission
                </h5>
                <p className="text-sm">
                  To develop high-performing digital products that solve real-world problems and deliver meaningful user experiences.
                </p>
              </div>
              <div className="bg-secondary p-3 rounded">
                <h5 className="my-2 flex items-center gap-2 font-semibold text-lg text-primary">
                  <span><FaEye /></span>My Vision
                </h5>
                <p className="text-sm">
                  To continuously evolve as a developer, blending creativity and technology to build impactful software for people and businesses.
                </p>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-4">
              {/* Frontend Skills */}
              <div>
                <div className="flex justify-between mb-1 font-semibold text-sm">
                  <span>Frontend Development</span>
                  <span>95%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>

              {/* Backend Skills */}
              <div>
                <div className="flex justify-between mb-1 font-semibold text-sm">
                  <span>Backend Development</span>
                  <span>88%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>

            {/* About Me Button */}
            <div className="mt-6">
              <Link href={"/about"}>
                <Button className="cursor-pointer text-white px-6 py-2 rounded-md text-sm font-semibold shadow">
                  More About Me
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About;
