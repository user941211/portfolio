import React from 'react';
import { Link } from 'react-router-dom';
const Projects = () => {

  return (
    <article className="bg-cyan-600">
      <div className="max-w-6xl w-full mx-auto py-8 px-16">
        <div>
          <div className="Title_me underline decoration-gray-950 underline-offset-8 decoration-1 mt-9">Projects</div>
        </div>
        <div>github id : user941211</div>
        <div className="rounded-lg border p-5 m-5 bg-white">
          <div>
            <div className="pb-2 text-center font-black-han-sans font-bold text-4xl text-gray-800">
              쇼핑몰 사이트 하드코딩
            </div>
            <div className="mb-8 font-normal text-base text-gray-600 text-center opacity-80">2022.07 - 08(3인 프로젝트)</div>
            <div className="w-8/12 mx-auto my-5">웹이라는 것을 공부하고 나서 처음으로 진행한 프로젝트입니다. 정식으로 배우고 나서 프로젝트를 진행하는 것 보단 뭐라도 만들면서 학습하는 것이 좋다는 말에 따라 이 프로젝트를 진행하게 되었습니다.</div>
            <table className="mx-auto">
              <tbody>
                <tr>
                  <td className="font-bold p-3">주요기능</td>
                  <td className=" p-3">회원가입, 로그인, 주문하기, 장바구니 등 일반 쇼핑물에 들어가는 기능 약 80퍼센트 가량 구현</td>
                </tr>
                <tr>
                  <td className="font-bold p-3">Github</td>
                  <td className="underline decoration-sky-500 p-3"><Link to="https://github.com/dbckd999/shopingmall">쇼핑몰 사이트</Link></td>
                </tr>
                <tr>
                  <td className="font-bold p-3">Frontend</td>
                  <td className=" p-3">HTML, CSS, JavaScript, JQuery, Bootstrap</td>
                </tr>
                <tr>
                  <td className="font-bold p-3">Backend</td>
                  <td className=" p-3">Mysql, dbeaver, Spring Boot</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-lg border p-5 m-5 bg-white">
          <div>
            <div className="pb-2 text-center font-black-han-sans font-bold text-4xl text-gray-800">
              스터디 관리 프로젝트(소프트웨어 공학 실습 과제)
            </div>
            <div className="mb-8 font-normal text-base text-gray-600 text-center opacity-80">2022.10 - 12(5인 프로젝트)</div>
            <div className="w-8/12 mx-auto my-5">2022년 하반기 학교 수업 '소프트웨어 공학'의 과제의 일환으로 제작한 프로젝트입니다. 첫 프로젝트와는 달리 프로젝트 주제가 정해졌을 당시, 웹 지식을 저보다 많이 가진 사람이 없었기에 처음부터 차근차근 진행한 프로젝트입니다.</div>
            <table className="mx-auto">
              <tbody>
                <tr>
                  <td className="font-bold p-3">주요기능</td>
                  <td className=" p-3">회원가입, 로그인, CRUD 구현하기</td>
                </tr>
                <tr>
                  <td className="font-bold p-3">Github</td>
                  <td className="underline decoration-sky-500 p-3"><Link to="https://github.com/user941211/SEproject">스터디 관리 프로젝트</Link></td>
                </tr>
                <tr>
                  <td className="font-bold p-3">Frontend</td>
                  <td className=" p-3">HTML, CSS, JavaScript, JQuery, Bootstrap</td>
                </tr>
                <tr>
                  <td className="font-bold p-3">Backend</td>
                  <td className=" p-3">Mysql, Oracle, Spring Boot</td>
                </tr>
                <tr>
                  <td className="font-bold p-3">Deployment</td>
                  <td className=" p-3">AWS (EC2, RDS)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-lg border p-5 m-5 bg-white">
          <div>
            <div className="pb-2 text-center font-black-han-sans font-bold text-4xl text-gray-800">
              주식정보 추천 프로젝트(졸업과제, 미완)
            </div>
            <div className="mb-8 font-normal text-base text-gray-600 text-center opacity-80">2023.04 - 06(5인 프로젝트)</div>
            <div className="w-8/12 mx-auto my-5">2023년 한해동안 진행되는 졸업과제 프로젝트로, 햔제 완성되지는 않은 상태입니다. 자체적으로 주식 추천 알고리즘을 제작해, 일반 투자자들의 평균 투자 증감액보다 높은 금액을 가질 수 있게 하는 알고리즘을 제작하며, 그걸 웹을 통해 각각의 투자자 성향에 맞게 보여주고자 하는 목표를 가지고 있습니다.</div>
            <table className="mx-auto">
              <tbody>
                <tr>
                  <td className="font-bold p-3">주요기능</td>
                  <td className=" p-3">회원가입, 로그인, 주문하기, 장바구니 등 일반 쇼핑물에 들어가는 기능 약 80퍼센트 가량 구현</td>
                </tr>
                <tr>
                  <td className="font-bold p-3" rowSpan="2" >Github</td>
                  <td className="underline decoration-sky-500 p-3"><Link to="https://github.com/user941211/gaemi">주식추천 사이트(코드)</Link></td>
                </tr>
                <tr>
                  <td className="underline decoration-sky-500 p-3"><Link to="https://3.35.175.253:3000/">주식추천 사이트(현재 배포중인 사이트)</Link></td>
                </tr>
                <tr>
                  <td className="font-bold p-3">Frontend</td>
                  <td className=" p-3">React, JavaScript, Bootstrap</td>
                </tr>
                <tr>
                  <td className="font-bold p-3">Backend</td>
                  <td className=" p-3">Mysql, AWS, Node_JS, Express, Python, Tensoflow</td>
                </tr>
                <tr>
                  <td className="font-bold p-3">Deployment</td>
                  <td className=" p-3">AWS (EC2, RDS)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Projects;