import React, { useState } from "react";
import IntroducePresenter from "./IntroducePresenter";

const Introduce = () => {
    const [data] = useState([
        {
            src: "img/introduce/1.png",
            easyInfo: "집에서도 체험하며 배우는 비대면 온라인 교육",
            title: "온라인 교육",
            type: "(실시간/영상강의)",
            target: "대상 : 초등 / 중등 / 고등",
            term: "기간/실시간:60분/90분",
            videoOffer: "총40분(이론20분+실습20분)",
            price: "교육비용:1인10,000원~35,000원",
        },
        {
            src: "img/introduce/2.jpg",
            easyInfo: "한양대학교 ERICA에서 꿈은 키우자!",
            title: "청소년 캠프",
            type: "(통합형/숙박형)",
            target: "대상 : 초등 / 중등 / 고등",
            term: "기간 : 1일/ 1박 2일 / 2박 3일",
            videoOffer: "",
            price: "교육비용 : 1인 88,000원 ~ 385,000원",
        },
        {
            src: "img/introduce/3.png",
            easyInfo: "학교와 기관으로 직접 찾아가는 체험교육",
            title: "찾아가는 체험교실",
            type: "(1회기)",
            target: "대상 : 초등 / 중등 / 고등 / 성인",
            term: "기간 : 1회 90분 / 120분 / 180분",
            videoOffer: "총40분(이론20분+실습20분)",
            price: "1인 22,000원 ~ 38,500원",
        },
        {
            src: "img/introduce/4.png",
            easyInfo: "단순 체험을 넘어선 창의력 & 사고력 키우기",
            title: "청소년 동아리",
            type: "장회기",
            target: "대상 : 초등 / 중등 / 고등",
            term: "기간 : 2회 이상(프로그램별 상이)",
            videoOffer: "",
            price: "교육비용 : 프로그램별 상이",
        },
        {
            src: "img/introduce/5.jpg",
            easyInfo: "전문가가 진행하는 생생한 현장 이야기",
            title: "전문인 특강",
            type: "",
            target: "대상 : 초등 / 중등 / 고등 / 성인",
            term: "기간 : 1회기 90분 / 120분 / 180분",
            videoOffer: "",
            price: "교육비용 : 프로그램별 상이",
        },
        {
            src: "img/introduce/6.png",
            easyInfo: "친구와 가족과 함께 즐기는 체험",
            title: "창의 체험 부스",
            type: "",
            target: "대상 : 초등 / 중등 / 고등 / 성인",
            term: "기간 : 별도 문의",
            videoOffer: "",
            price: "교육비용 : 별도 문의",
        },
    ]);
    const [subTopData] = useState({
        title: "교육 소개",
        smallTitle: "Education Introduction",
        subTitle1: "4차산업혁명시대를 이끌어 나갈 인재를 양성하는",
        subTitle2: "구름다리의 교육 프로그램입니다.",
    });

    return <IntroducePresenter data={data} subTopData={subTopData} />;
};

export default Introduce;
