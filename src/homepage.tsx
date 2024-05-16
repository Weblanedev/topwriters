import { Link } from "react-router-dom";
import { Faqs, Services } from "./utils";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [showFaq, setShowFaq] = useState<any>(false)
  const active = (index: any) => {
    if (showFaq === index) {
      return setShowFaq(null);
    }
    setShowFaq(index);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col pt-[66px] md:pt-[80px] bg-orange-50/20">
      <section className="flex overflow-hidden relative flex-col-reverse md:flex-row h-[90vh] md:h-[85vh] px-10 md:px-[130px] items-center justify-center md:justify-between gap-5 homepage">
        <div className=" text-black flex flex-col gap-9 md:gap-12 items-center justify-center md:items-start text-center">
          <h1 className="font-medium md:font-semibold text-[30px] sm:text-[40px] md:text-[50px] md:text-left w-full md:w-[530px] leading-snug md:leading-[62px] text-center text-white">
          Quality content at scale.
          </h1>

          <p className="text-center md:text-left mt-[-30px] w-[450px] md:w-[600px] text-white">
          At Toplinewriters, we're passionate about the written word. Whether you're an aspiring author, a seasoned professional, or someone who simply loves to write, we're here to support you on your journey. </p>

          <Link
            to="/services"
            className="text-base font-medium text-white bg-green-400 rounded-md px-7 md:px-12 py-4  hover:bg-green-600 flex items-center justify-center gap-3"
          >
            Explore Services
          </Link>
        </div>
      </section>

      <section>
        <div className='my-[180px] px-[20px] md:px-[50px] lg:px-[20px] xl:px-[100px] flex flex-col-reverse lg:flex-row gap-[77px]' id="services">
          <div>
            <h1 className='manropefont text-[14px] leading-[28px] font-[400] text-green-1100'>WHAT WE OFFER</h1>
            <h1 className='recoletafont text-[32px] sm:text-[40px] leading-[68px] font-[600] sm:mb-[0px] sm:mt-[4px] text-green-1000'>Our Services</h1>
            <p className='manropefont text-[15px] leading-[24px] font-[400] text-gray-1000'>
              We are very committed to making your travel experience as seamless and unforgettable as possible.
              Explore our expert-backed wide range of services, to find the plan that suits you the best.
            </p>
            <div className='flex flex-col gap-y-[30px] mt-[56px]'>
              {
                Services.map((item, index) => {
                  return (
                    <div key={index} className='flex gap-[24px] md:gap-[40px] lg:gap-[20px]'>
                      {/* <div className="w-[58px] h-[48px] relative translate-y-2">
                        <img src={item.img} alt="services" />
                      </div> */}
                      <div className='w-[100%]'>
                        <h1 className='text-[19px] recoletafont xl:text-[24px] leading-[36px] pb-[8px] xl:pb-[16px] font-[500] text-green-1000 manropefont'>{item.Title}</h1>
                        <h1 className='xl:w-[85%] font-[400] text-[14px] manropefont text-gray-1000 sm:text-[15px] leading-[24px]'>{item.SubText}</h1>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='flex justify-center'>
            <div className="w-[337px] h-[371px] md:w-[525px] md:h-[525px] lg:w-[500px] lg:h-[600px] xl:w-[525px] xl:h-[625px] relative">
              <img src="https://images.pexels.com/photos/8872357/pexels-photo-8872357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Red Triangle" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[50px]  bg-green-400/30 ">
        <div className='text-center'>
          <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-green-1000'>Frequently asked questions</h1>
          <p className='manropefont text-[15px] leading-[24px] font-[400] text-gray-1000 w-full lg:w-[700px] m-auto'>
            We've answered some of your frequently asked questions with quick, easy and comprehensive responses here. For further questions, please contact us below.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center gap-[32px] mt-[48px] manropefont'>
          {
            Faqs.map((faq) => {
              return (
                faq.id < 8 && <div className='flex flex-col px-[20px] box-shadow bg-white' key={faq.id} onClick={() => active(faq.id)}>
                  <div className='flex'>
                    <div className='cursor-pointer'>
                      <div className='flex justify-center items-center w-[320px] sm:w-[510px] lg:w-[600px] xl:w-[810px] py-[16px]'>
                        <div className='w-[100%]'>
                          <h1 className='w-[100%] pr-[29px] sm:w-11/12 text-[16px] leading-[24px] lg:text-[20px] lg:leading-[40px] xl:text-[20px] xl:leading-[40px] font-[500] text-green-1000'>{faq.question}</h1>
                        </div>
                        <div className=''>
                          <img
                            src="https://th.bing.com/th/id/OIP.qXJ83xgePfWqbwpCfltcSwHaHa?w=512&h=512&rs=1&pid=ImgDetMain"
                            alt="dropdown"
                            className={`${showFaq === faq.id ? 'rotate-0' : 'rotate-180'} w-4`}
                          />
                        </div>
                      </div>
                      {showFaq === faq.id &&
                        <div className='flex justify-center items-center w-[320px] sm:w-[510px] lg:w-[600px] xl:w-[810px] py-[16px]'>
                          <p className='text-[14px] leading-[22px] sm:text-[16px] sm:leading-[30px] font-[300] xl:sm:text-[18px] xl:leading-[30px] fadein popup'>{faq.answer}</p>
                        </div>}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>


    </div>
  );
};

export default Homepage;
