import { useEffect, useState } from "react";
export default function AboutUs() {
    const [state, setState] = useState("Mission")
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, []);
    return (
        <div>
            {/* <MetaTag title="About Us" /> */}
            <div className='flex justify-center items-center about-hero'>
                <p className='text-white text-[60px] font-[500] recoletafont'>About Us</p>
            </div>
            <div className='2xl:w-[1440px] mx-auto'>
                <div className="pt-[80px]">
                    <p className='text-center text-[30px] lg:w-[50%] mb-[20px] m-auto font-[500] recoletafont text-green-1000'>Who We Are</p>
                    <p className='w-[90%] lg:w-[65%] text-[18px] leading-[28px] lg:text-[20px] lg:leading-[36px]  pb-[24px] m-auto text-justify  text-gray-1000 manropefont'>
                    Welcome to Toplinewriters, where passion meets purpose in the realm of words. At Toplinewriters, we believe in the transformative power of writing. Whether you're a seasoned wordsmith or just beginning your literary journey, we're here to empower you every step of the way. </p>

                    <p className='w-[90%] lg:w-[65%] text-[18px] leading-[28px] lg:text-[20px] lg:leading-[36px]  pb-[24px] m-auto text-justify  text-gray-1000 manropefont'> Toplinewriters was born out of a simple yet powerful idea: to create a space where writers of all levels could come together to learn, grow, and thrive. Founded by a team of passionate writers and educators, our platform is built on the belief that everyone has a story to tell and that every voice deserves to be heard.  </p>      </div>
                <div className='flex justify-center'>
                    <div className='pt-[24px] gap-[40px] w-[90%] h-[300px] sm:w-[720px] sm:h-[450px] lg:w-[900px] lg:h-[600px] relative'>
                        <img src='https://images.pexels.com/photos/6326260/pexels-photo-6326260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='rounded-[12px]' alt=""></img>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row items-center py-[50px] sm:py-[110px] px-[20px] lg:px-[60px] xl:px-[100px] gap-[35px] lg:gap-[136px]'>
                    <div className='sm:w-[90%] lg:w-[50%]'>
                        {/* <h1 className='manropefont text-[14px] leading-[28px] font-[400] text-green-1100'>WHAT WE OFFER</h1> */}
                        <div className='flex justify-between mb-[20px] sm:justify-center sm:gap-[50px] lg:gap-[0px] lg:justify-between sm:mb-[30px]'>
                            <h1 className={`recoletafont text-[22px] sm:text-[32px] xl:text-[40px] cursor-pointer leading-[68px] font-[600] sm:mb-[0px] sm:mt-[4px] ${state === "Mission" ? " text-green-1000 border-b-2 border-green-1000" : " text-gray-1000"} `} onClick={() => setState("Mission")}>Our Mission</h1>
                            <h1 className={`recoletafont text-[22px] sm:text-[32px] xl:text-[40px] cursor-pointer leading-[68px] font-[600] sm:mb-[0px] sm:mt-[4px] ${state === "Vision" ? " text-green-1000 border-b-2 border-green-1000" : " text-gray-1000"} `} onClick={() => setState("Vision")}>Our Vision</h1>
                        </div>
                        {
                            state === "Mission" && <p className='manropefont text-justify text-[16px] leading-[24px] sm:text-[18px] sm:leading-[36px] font-[400] text-gray-1000 w-full'>
Our mission is to inspire, educate, and support writers from all walks of life. We're committed to providing high-quality resources, services, and community support to help writers hone their skills, express themselves effectively, and achieve their writing goals.
                            </p>
                        }
                        {state === "Vision" && <p className='manropefont text-justify text-[16px] leading-[24px] sm:text-[18px] sm:leading-[36px] font-[400] text-gray-1000 w-full'>
                        Toplinewriters was born out of a simple yet powerful idea: to create a space where writers of all levels could come together to learn, grow, and thrive. Founded by a team of passionate writers and educators, our platform is built on the belief that everyone has a story to tell and that every voice deserves to be heard. </p>}
                        {/* <div className='mt-[30px] lg:w-[50%]'>
                        <div className="w-[100%] h-[248px] sm:w-[500px] sm:h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[400px] relative">
                            <img src="/assets/how-we-work-two.jpg" alt="Red Triangle" className='rounded-2xl' />
                        </div>
                    </div> */}
                        {/* <Button className='text-green-1100 text-[14px] mt-[30px] bg-green-1200 sm:text-[18px] manropefont'>Get Started</Button> */}

                        <div className='sm:w-[100%] lg:w-[50%] block lg:hidden mt-[30px]'>
                            <div className="w-[100%] h-[248px] sm:h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[400px] relative">
                                <img src="https://images.pexels.com/photos/6773397/pexels-photo-6773397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Red Triangle" className='rounded-2xl' />
                            </div>
                        </div>
                    </div>
                    <div className='sm:w-[90%] lg:w-[50%] hidden lg:block'>
                        <div className="w-[320px] h-[248px] sm:w-[500px] sm:h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[400px] relative">
                            <img src="https://images.pexels.com/photos/6773397/pexels-photo-6773397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Red Triangle" className='rounded-2xl' />
                        </div>
                    </div>
                </div>

                {/* <div className='flex flex-col-reverse lg:flex-row items-center py-[50px] sm:py-[110px] px-[20px] lg:px-[20px] xl:px-[100px] gap-[35px] lg:gap-[136px]'>

                <div className="w-full h-[248px] sm:h-[400px] lg:w-[440px] lg:h-[500px] xl:w-[636px] xl:h-[450px] relative">
                    <img src="/assets/how-we-work-two.jpg" fill={true} alt="Red Triangle" className='rounded-2xl' />
                </div>
                <div>
                    <h1 className='manropefont text-[14px] leading-[28px] font-[400] text-green-1100'>WHAT WE OFFER</h1>
                    <h1 className='recoletafont text-[32px] sm:text-[40px] leading-[68px] font-[600] sm:mb-[0px] sm:mt-[4px] text-green-1000'>Our Vision</h1>
                    <p className='manropefont text-justify text-[16px] leading-[24px] sm:text-[18px] sm:leading-[36px] font-[400] text-gray-1000 w-full lg:w-[425px]'>
                        Our Vision is to be innovators and leaders in the concept of travel by positioning our company in the market within the best tourism companies in the world.
                    </p>
                    <Button className='text-green-1100 text-[14px] bg-green-1200 sm:text-[18px] manropefont'>Explore <span className='ml-[5px]'>&#8594;</span></Button>

                </div>
            </div> */}
            </div>
        </div>
    )
}
