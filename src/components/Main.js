import React from "react";
import "./css/Main.css";
import Tag from "./Tag";
import Video from "./Video";
import one from "./Photos-001/1.jpg";
import two from "./Photos-001/2.jpg";
import three from "./Photos-001/3.jpg";
import four from "./Photos-001/4.jpg";
import five from "./Photos-001/5.jpg";
import six from "./Photos-001/6.jpg";
import seven from "./Photos-001/7.jpg";
import eight from "./Photos-001/8.jpg";
import nine from "./Photos-001/9.jpg";
import ten from "./Photos-001/10.jpg";
import eleven from "./Photos-001/11.jpg";
import tweleve from "./Photos-001/12.jpg";
import thirteen from "./Photos-001/13.jpg";
import fourteen from "./Photos-001/14.jpg";
import fiveteen from "./Photos-001/15.jpg";
import sixteen from "./Photos-001/16.jpg";
import seventeen from "./Photos-001/17.jpg";
import eighteen from "./Photos-001/18.jpg";
import nineteen from "./Photos-001/19.jpg";
import twenty from "./Photos-001/20.jpg";
import twentyOne from "./Photos-001/21.jpg";
import twentyTwo from "./Photos-001/22.jpg";
import twentyThree from "./Photos-001/23.jpg";
import twentyFour from "./Photos-001/24.webp";
import twentyFive from "./Photos-001/25.jpg";
//
import twSix from "./Photos-001/26.jpg";
import twSeven from "./Photos-001/27.jpg";
import twEight from "./Photos-001/28.jpg";
import twNine from "./Photos-001/29.jpg";
import thirty from "./Photos-001/30.jpg";
import thOne from "./Photos-001/31.jpg";
import thTwo from "./Photos-001/32.jpg";
import thThree from "./Photos-001/33.jpg";
import thFour from "./Photos-001/34.jpg";
import thFive from "./Photos-001/35.jpg";
import thSix from "./Photos-001/36.jpg";
import thSeven from "./Photos-001/37.jpg";
import thEight from "./Photos-001/38.jpg";
import thNine from "./Photos-001/39.jpeg";
import fourty from "./Photos-001/40.jpg";
import fourtyOne from "./Photos-001/41.jpg";
import fourtyTwo from "./Photos-001/42.jpg";
import fourtyThree from "./Photos-001/43.jpg";
import fourtyFour from "./Photos-001/44.jpg";
import fourtyFive from "./Photos-001/45.jpg";
import fourtySix from "./Photos-001/46.jpg";

const Main = () => {
  return (
    <>
      <div className="content">
        <div className="tag">
          <Tag selected title="All" />
          <Tag title="Papa_Ji" />
          <Tag title="Mummy_Ji" />
          <Tag title="Sachin" />
          <Tag title="Raj" />
          <Tag title="Gaurav" />
          <Tag title="School" />
          <Tag title="College" />
          <Tag title="Eleventh" />
          <Tag title="Home_Town" />
          <Tag title="Live" />
          <Tag title="Party" />
          <Tag title="Dance" />
          <Tag title="Laptop" />
          <Tag title="Music" />
          <Tag title="School_Friends" />
          <Tag title="New_for_You" />
        </div>

        <div className="main">
          <Video
            title="Papa Ji - Sachin | Gallery"
            views="October 17"
            timestamp="2018"
            image={eighteen}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Laptop - Sachin | Gallery"
            views="December 22"
            timestamp="2020"
            image={nine}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Mummy Ji - Nikhil | Gallery"
            views="November 18 | "
            timestamp="2018"
            image={three}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Joker Sachin | Gallery"
            views="November 13 | "
            timestamp="2018"
            image={four}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Nana Ji | Nani Ji"
            views="September 4 |"
            timestamp="2020"
            image={five}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Sachin | Gallery"
            views="October 10 | "
            timestamp="2020"
            image={six}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Sachin | Gallery"
            views="December - 14 | "
            timestamp="2020"
            image={seven}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Sachin | Gallery"
            views="December 11 | "
            timestamp="2020"
            image={eight}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Sachin - Gaurav - Mayank | Gallery"
            views="March 21 | "
            timestamp="2019"
            image={one}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Gaurav - Sachin - Gaurav | Gallery"
            views="February 5 | "
            timestamp="2021"
            image={ten}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Gaurav | Gallery"
            views="February 5 | "
            timestamp="2021"
            image={eleven}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Gaurav  | Gallery"
            views="February 5 | "
            timestamp="2021"
            image={tweleve}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Gaurav | Gallery"
            views="March 14 | "
            timestamp="2021"
            image={thirteen}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Gaurav - Sachin - Gaurav - Mayank | Gallery"
            views="March 17 | "
            timestamp="2021"
            image={fourteen}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Gaurav - Sachin - Gaurav - Mayank "
            views="March 14 | "
            timestamp="2021"
            image={fiveteen}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Sachin - Reena | Gallery"
            views="March 13 | "
            timestamp="2021"
            image={sixteen}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Mummy Ji - Sachin | Gallery"
            views="March 13 | "
            timestamp="2021"
            image={seventeen}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Papa Ji - Sachin | Gallery"
            views="September 11 | "
            timestamp="2021"
            image={eighteen}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Papa Ji | Gallery"
            views="September 12 |"
            timestamp="2022"
            image={nineteen}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Mummy Ji - Papa Ji | Gallery"
            views="November 4 | "
            timestamp="2021"
            image={twenty}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Sachin | Gallery"
            views="April - 21 | "
            timestamp="2021"
            image={twentyOne}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Shubham | Gallery"
            views="June - 19 |"
            timestamp="2021"
            image={twentyTwo}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Sachin | Gallery"
            views="March 17 |"
            timestamp="2021"
            image={twentyThree}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Gaurav - Sachin | Gallery"
            views="February 2 |"
            timestamp="2021"
            image={twentyFour}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Shubham - Raj - Sachin | Gallery"
            views="October - 14 | "
            timestamp="2021"
            image={twentyFive}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />

          {/*  */}

          <Video
            title="Raj :-) | Gallery"
            views="October 12 | "
            timestamp="2022"
            image={twSix}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Sachin | Gallery"
            views="August 12 | "
            timestamp="2022"
            image={twSeven}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Sachin - College | Gallery"
            views="July 25 | "
            timestamp="2022"
            image={twEight}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Sachin - College | Gallery"
            views="June - 5 |"
            timestamp="2022"
            image={twNine}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Papa Ji - Sachin | Gallery"
            views="September 11 | "
            timestamp="2021"
            image={thirty}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />

          <Video
            title="Preeti Didi | Gallery"
            views="September 11 | "
            timestamp="202"
            image={thOne}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Preeti Didi | Gallery"
            views="September 11 | "
            timestamp="202"
            image={thTwo}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Preeti Didi | Gallery"
            views="September 11 | "
            timestamp="202"
            image={thThree}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Preeti Didi | Gallery"
            views="September 11 | "
            timestamp="202"
            image={thFour}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Preeti Didi | Gallery"
            views="September 11 | "
            timestamp="202"
            image={thFive}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />

          <Video
            title="Ganesh - Sachin - Vanshika - Sonika - Pooja | Gallery"
            views="October 1 | "
            timestamp="2020"
            image={thSix}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Dost Yaar Gun  | Gallery"
            views="November 12 | "
            timestamp="2021"
            image={thSeven}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Vanshika - Sonika - don't know | Gallery"
            views="December 23 | "
            timestamp="2021"
            image={thEight}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Sidharth Sir | Gallery"
            views="November 18 | "
            timestamp="2021"
            image={thNine}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Papa Ji | Gallery"
            views="September - 22 | "
            timestamp="2022"
            image={fourty}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Ganesh - Sachin - Vanshika - Pooja -Rani | Gallery"
            views="October - 1 | "
            timestamp="2020"
            image={fourtyOne}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Sachin | Gallery"
            views="October - 1 | "
            timestamp="2021"
            image={fourtyTwo}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Sachin - Gaurav - Gaurav | Gallery"
            views="February 21 | "
            timestamp="2020"
            image={fourtyThree}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Gaurav | Gallery"
            views="March 17 | "
            timestamp="2021"
            image={fourtyFour}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Sachin | Gallery"
            views="March 17 | "
            timestamp="2021"
            image={fourtyFive}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Ganesh - Sachin - BSF parede | Gallery"
            views="March 16 |"
            timestamp="2018"
            image={two}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
          <Video
            title="Sachin - Gaurav's Birthday | Gallery"
            views="Feb 2 | "
            timestamp="2021"
            image={fourtySix}
            channel_image="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          />
        </div>
      </div>
    </>
  );
};

export default Main;
