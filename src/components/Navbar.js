function Navbar() {
  return (
    <div>
      <section className="flex flex-grow gap-8 pt-8  ">
        <div>
          <img
            src="/asset/photo_1_2024-06-01_00-35-37.jpg"
            height={50}
            width={50}
            alt=""
          />
        </div>

        <div className="flex flex-grow  gap-4 ">
          <ul className="flex flex-grow justify-center gap-28  text-xb font-bold">
            <li> HOME </li>
            <li>ABOUT </li>
            <li> SHOP</li>
          </ul>
        </div>

        <div>
          <button className="text-xb font-bold  ">BOOK APPOINTMENT</button>
        </div>
      </section>

      <section className=" pt-16 flex  flex-row gap-30 pl-10">
        <div className=" pt-20 ">
          <h1 className="   text-3xl font-bold">
            Discover The <span className=" text-yellow-500 ">Perfect</span>{" "}
            <br></br>
            Gift For Every Occasion
          </h1>

          <p className="  pt-6">
            You could reach up to 21K more people daily when you s people daily{" "}
            <br></br>
            when you spend when you spend $42 to boost this post when you You
            could reach up to 21K more
          </p>
        </div>

        <div className=" pl-20">
          <img src="/asset/bacIm.png" alt="" className="  min-h-min  -mt-10 " />
        </div>
      </section>
    </div>
  );
}

export default Navbar;
