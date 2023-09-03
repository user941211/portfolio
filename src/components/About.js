import React from 'react';
import people from '../image/people.png';
import calender from '../image/calendar.png';
import Email from '../image/email.png';
import send from '../image/send.png';
import location from '../image/location.png';
const About = () => {
    return (
        <div className="max-w-6xl w-full mx-auto py-8 px-4 sm:px-8 md:px-16">
            <div className="Title_me underline decoration-gray-500 underline-offset-8 decoration-1 mt-9 font-bold text-4xl sm:text-5xl md:text-6xl p-3">
                About Me
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col w-full max-w-full md:max-w-[18rem] mx-auto opacity-80">
                    <div className="flex flex-row flex-nowrap">
                        <div className="w-14 h-14 p-3">
                            <img src={people} alt="사람 이미지" className="w-10 h-10" />
                        </div>
                        <div>
                            <div className="mb-2 font-semibold text-lg">
                                이름
                            </div>
                            <div className="font-normal text-base">
                                변재성
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full max-w-full md:max-w-[18rem] mx-auto opacity-80">
                    <div className="flex flex-row flex-nowrap">
                        <div className="w-14 h-14 p-3">
                            <img src={calender} alt="생년월일" className="w-10 h-10" />
                        </div>
                        <div>
                            <div className="mb-2 font-semibold text-lg">
                                생년월일
                            </div>
                            <div className="font-normal text-base">
                                98.05.29
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full max-w-full md:max-w-[18rem] mx-auto opacity-80">
                    <div className="flex flex-row flex-nowrap">
                        <div className="w-14 h-14 p-3">
                            <img src={Email} alt="이메일" className="w-10 h-10" />
                        </div>
                        <div>
                            <div className="mb-2 font-semibold text-lg">
                                이메일
                            </div>
                            <div className="font-normal text-base">
                                common941211@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full max-w-full md:max-w-[18rem] mx-auto opacity-80">
                    <div className="flex flex-row flex-nowrap">
                        <div className="w-14 h-14 p-3">
                            <img src={location} alt="주소지" className="w-10 h-10 object-fill" />
                        </div>
                        <div>
                            <div className="mb-2 font-semibold text-lg">
                                주소지
                            </div>
                            <div className="font-normal text-base">
                                대구광역시 수성구
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;