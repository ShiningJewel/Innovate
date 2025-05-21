import Container from "../Layout/Container"
import fiveStar from "../../assets/fiveStart.png"
import star from "../../assets/star.png"

const AboutUs = () => {
    return (
        <div>
            <Container>

                <div className="flex justify-between">
                    <div className="w-[200px] h-[200px] mt-[100px] bg-red">
                        <div className="mt-[1000px] ">
                            <h4 className="w-[594px] font-secondary font-bold text-[46px] leading-[58px] text-[#2C2643]">What they are talking about us?</h4>
                            <p className="w-[503px] font-primary font-regular text-[18px] leading-[32px] text-[#645E76] pt-[20px] pb-[40px]">testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive.</p>
                        </div>
                        <div>
                            <a className='bg-secondary rounded-[6px] font-primary text-lg font-medium py-[17px] px-12 text-white mb-[80px]'>Get Started</a>
                        </div>
                        <div>
                            <div className="mt-[80px]">
                                <img src={fiveStar} alt="#fiveStar" />
                            </div>

                        </div>
                    </div>

                    <div className="mt-[1000px]">
                        <div>
                            <div className="w-[124px] h-[124px] border-[10px] border-[#F7F7FC] rounded-[50%] bg-[#C4C4C4]">

                            </div>
                            <div>
                                <p className="w-[503px] font-primary font-regular text-[22px] leading-[32px] text-[#6C6E81] pt-[64px] pb-[37px]">“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
                            </div >
                            <div className="flex justify-between">
                                <div>
                                    <h4 className=" font-secondary font-bold text-[24px] leading-[36px] text-[#30344E] ">Robert Fox</h4>
                                    <p className="w-[503px] font-primary font-regular text-[22px] leading-[32px] text-[#6C6E81]">Digital Marketer</p>
                                </div>
                                <div>
                                    <img src={star} alt="#star" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}
export default AboutUs