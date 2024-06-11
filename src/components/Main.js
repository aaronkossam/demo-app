import React from "react";

const Main = () => {
  return (
    <div>
      <section className=" flex flex-row pr-6 pl-6">
        <div className=" pt-20">
          <h2 className=" pt-20  text-4xl font-bold">About Us</h2>

          <p className=" pt-6">
            You could reach up to 21K more people daily when you spend $42 to{" "}
            <br></br>
            boost this postYou could reach up to 21K more people daily <br></br>
            when you spend $42 to boost this post when you <br></br>
            You could reach up to 21K more people daily <br></br>
          </p>
        </div>

        <div className=" grid grid-cols-2 gap-8 pt-20 ">
          <img
            src="/asset/photo_2_2024-06-01_00-35-37.jpg"
            height="350"
            width="350"
            alt=""
          />
          <img
            src="/asset/photo_2_2024-06-01_00-35-37.jpg"
            height="350"
            width="350"
            alt=""
          />
          <img
            src="/asset/photo_2_2024-06-01_00-35-37.jpg"
            height="350"
            width="350"
            alt=""
          />
          <img
            src="/asset/photo_2_2024-06-01_00-35-37.jpg"
            height="350"
            width="350"
            alt=""
          />
        </div>
      </section>

      <section>
        <h3 className=" text-center  text-4xl font-bold pt-14">SHOP</h3>
        <p className=" text-center pt-2 pb-2">
          {" "}
          You could reach up to 21K more people daily when you spend $42 to
        </p>

        <div className=" flex flex-row">
          <img
            src="/asset/photo_2_2024-06-01_00-35-37.jpg"
            height="600"
            width="350"
            alt=""
          />
          <p>Necklace price</p>
          <p>Gh37</p>

          <img
            src="/asset/photo_2_2024-06-01_00-35-37.jpg"
            height="600"
            width="350"
            alt=""
          />
          <p>Necklace price</p>
          <p>Gh37</p>
          <img
            src="/asset/photo_2_2024-06-01_00-35-37.jpg"
            height="600"
            width="350"
            alt=""
          />
          <p>Necklace price</p>
          <p>Gh37</p>
          <img
            src="/asset/photo_2_2024-06-01_00-35-37.jpg"
            height="600"
            width="350"
            alt=""
          />
          <p>Necklace price</p>
          <p>Gh37</p>
        </div>
      </section>
    </div>
  );
};

export default Main;
