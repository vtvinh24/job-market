import * as React from "react";

function MyComponent() {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">Logo</div>
          <div className="div-4">
            <div className="div-5">
              <div className="column">
                <div className="div-6">JobMarket</div>
              </div>
              <div className="column-2">
                <div className="div-7">
                  Comission Market
                  <br />
                  <br />
                </div>
              </div>
              <div className="column-3">
                <div className="div-8">
                  Company
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="div-9">
            Advise
            <br />
            <br />
          </div>
          <div className="div-10">
            Blog
            <br />
          </div>
          <div className="div-11">
            <div className="div-12" />
            <div className="div-13">Username</div>
          </div>
        </div>
        <div className="div-14">
          <div className="div-15">
            <div className="div-16">
              Search
              <br />
            </div>
            <div className="div-17">
              <div className="div-18">Choose Place</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/888ee5bed2d8f9b5df43093daaa4b4ec9276264cee02e2169778437ac6da8fd4?"
                className="img"
              />
            </div>
            <div className="div-19">Price</div>
            <div className="div-20">
              <div className="div-21" />
              <div className="div-22">-</div>
            </div>
            <div className="div-23">
              <div className="div-24" />
              <div className="div-25" />
            </div>
          </div>
          <div className="div-26">
            <div className="div-27">
              <div className="column-4">
                <div className="div-28">
                  <div className="div-29" />
                  <div className="div-30" />
                  <div className="div-31" />
                  <div className="div-32" />
                </div>
              </div>
              <div className="column-5">
                <div className="div-33">
                  <div className="div-34">Help Center</div>
                  <div className="div-35" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: #fff;
          display: flex;
          flex-direction: column;
        }
        .div-2 {
          background-color: #d9d9d9;
          display: flex;
          width: 100%;
          padding-right: 73px;
          align-items: center;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            flex-wrap: wrap;
            padding-right: 20px;
          }
        }
        .div-3 {
          background-color: #909090;
          align-self: stretch;
          align-items: start;
          color: #fff;
          white-space: nowrap;
          justify-content: center;
          padding: 39px 29px;
          font: 400 80px Inria Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-3 {
            font-size: 40px;
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-4 {
          align-self: stretch;
          flex-grow: 1;
          flex-basis: auto;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
          }
        }
        .div-5 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-5 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 27%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-6 {
          color: #000;
          align-self: stretch;
          margin: auto 0;
          font: 400 40px Inria Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-6 {
            margin-top: 40px;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 51%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-7 {
          background-color: #90ee90;
          flex-grow: 1;
          color: #000;
          justify-content: center;
          width: 100%;
          padding: 60px 18px;
          font: 700 40px Inria Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-7 {
            margin-top: 26px;
            padding-right: 20px;
          }
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 22%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-8 {
          color: #000;
          align-self: stretch;
          margin: auto 0;
          font: 400 40px Inria Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-8 {
            margin-top: 40px;
          }
        }
        .div-9 {
          color: #000;
          margin: auto 0;
          font: 400 40px Inria Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-10 {
          color: #000;
          align-self: stretch;
          margin: auto 0;
          font: 400 40px Inria Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-11 {
          align-self: stretch;
          display: flex;
          gap: 20px;
          font-size: 40px;
          color: #000;
          font-weight: 400;
          white-space: nowrap;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-11 {
            white-space: initial;
          }
        }
        .div-12 {
          border-radius: 360px;
          background-color: #909090;
          width: 114px;
          height: 114px;
        }
        .div-13 {
          font-family: Inria Sans, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .div-14 {
          display: flex;
          margin-top: 58px;
          width: 100%;
          flex-direction: column;
          padding: 0 54px;
        }
        @media (max-width: 991px) {
          .div-14 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-15 {
          align-self: center;
          display: flex;
          width: 100%;
          max-width: 1612px;
          align-items: start;
          gap: 10px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-15 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-16 {
          width: 285px;
          border-radius: 30px;
          background-color: #d9d9d9;
          align-self: stretch;
          align-items: start;
          color: #a6a4a4;
          white-space: nowrap;
          padding: 7px 26px 21px;
          font: 400 40px Inria Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-16 {
            max-width: 100%;
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-17 {
          background-color: #d9d9d9;
          display: flex;
          align-items: start;
          gap: 13px;
          font-size: 40px;
          color: rgba(0, 0, 0, 0.5);
          font-weight: 400;
          padding: 9px 15px 9px 5px;
        }
        .div-18 {
          font-family: Inria Sans, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .img {
          aspect-ratio: 0.97;
          object-fit: auto;
          object-position: center;
          width: 36px;
          stroke-width: 5px;
          stroke: rgba(0, 0, 0, 0.2);
          border-color: rgba(0, 0, 0, 0.2);
          border-style: solid;
          border-width: 5px;
        }
        .div-19 {
          color: #000;
          align-self: stretch;
          margin: auto 0;
          font: 400 40px Inria Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-20 {
          display: flex;
          margin-top: 6px;
          gap: 5px;
          font-size: 40px;
          color: #000;
          font-weight: 400;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-20 {
            white-space: initial;
          }
        }
        .div-21 {
          border-radius: 360px;
          background-color: #d9d9d9;
          width: 150px;
          height: 50px;
        }
        .div-22 {
          font-family: Inria Sans, sans-serif;
          margin: auto 0;
        }
        .div-23 {
          display: flex;
          margin-top: 5px;
          align-items: start;
          gap: 20px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-23 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-24 {
          border-radius: 360px;
          background-color: #d9d9d9;
          width: 150px;
          height: 50px;
        }
        .div-25 {
          border-radius: 360px;
          background-color: #d9d9d9;
          width: 265px;
          max-width: 100%;
          height: 50px;
        }
        .div-26 {
          margin-top: 28px;
        }
        @media (max-width: 991px) {
          .div-26 {
            max-width: 100%;
          }
        }
        .div-27 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-27 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 81%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-28 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-28 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-29 {
          background-color: #d9d9d9;
          height: 165px;
        }
        @media (max-width: 991px) {
          .div-29 {
            max-width: 100%;
          }
        }
        .div-30 {
          background-color: #d9d9d9;
          margin-top: 45px;
          height: 165px;
        }
        @media (max-width: 991px) {
          .div-30 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-31 {
          background-color: #d9d9d9;
          margin-top: 45px;
          height: 165px;
        }
        @media (max-width: 991px) {
          .div-31 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-32 {
          background-color: #d9d9d9;
          margin-top: 45px;
          height: 156px;
        }
        @media (max-width: 991px) {
          .div-32 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .column-5 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 19%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-5 {
            width: 100%;
          }
        }
        .div-33 {
          display: flex;
          margin-top: 644px;
          gap: 20px;
          font-size: 40px;
          color: #000;
          font-weight: 400;
        }
        @media (max-width: 991px) {
          .div-33 {
            margin-top: 40px;
          }
        }
        .div-34 {
          font-family: Inria Sans, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .div-35 {
          border-radius: 360px;
          background-color: #d9d9d9;
          width: 100px;
          height: 100px;
        }
      `}</style>
    </>
  );
}