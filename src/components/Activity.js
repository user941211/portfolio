import React from 'react';
import { Link } from 'react-router-dom';
import gongdae from '../image/gongdae.jpg';
const Activity = () => {
    return (
        <article className="gray">
            <div className="max-w-6xl w-full mx-auto py-4 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="Title_me decoration-gray-500 underline-offset-8 decoration-1 mt-9 font-bold text-4xl sm:text-5xl md:text-6xl p-3">
                    Awards
                </div>
                <div className="rounded-lg border p-4 sm:p-5 m-3 sm:m-5 bg-white">
                    <div align="center">
                        <div className="pb-2 text-center font-black-han-sans font-bold text-xl sm:text-2xl md:text-4xl text-gray-800">
                            공대스타 챌린지 대상
                        </div>
                        {/* <div className="mb-4 sm:mb-8 font-normal text-base sm:text-lg text-gray-600 text-center opacity-80">2022.07 - 08(3인 프로젝트)</div> */}
                        <div className="w-full sm:w-8/12 mx-auto my-4 sm:my-5">근로장학생으로 일하고 있는 회사에서 출전한 공대스타 챌린지에서 Node.js로 서버 구축을 담당하였으며, 대상을 수상하는데 기여 하였습니다.</div>
                        <img src={gongdae} className="max-w-[60%]" ></img>
                        
                    </div>
                </div>
            </div>
        </article>
    )

}

export default Activity;