import React from "react";

const Details = () => {
  return (
    <div className="mt-20 bg-black text-white p-5">
      <p className="text-center text-5xl">This Webinar Provides</p>
      <div className="flex text-center justify-around">
        <div className="flex  flex-col text-center md:flex-row p-5">
          <div className="pr-5 m-10">
            <p className="text-3xl">Unique Opportunity</p>
            <p>
            This is a legal business opportunity to get unlimited income through stress free work.
            </p>
          </div>
          <div className="m-10">
            <p className="text-3xl">Financila Freedom to fulfill your dream</p>
            <p>
            This opportunity makes the ordinary person to become a Millionaire. So, you can fulfill your and your family dreams.
            </p>
          </div>
          <div className="m-10">
            <p className="text-3xl">Lifestyle & Recognition</p>
            <p>
            we feel blessed when we/our work is been recognized. This work from home opportunity gives peace of mind; provides improved Lifestyle with Recognition in Society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
