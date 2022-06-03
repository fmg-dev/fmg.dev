import React from "react";
import "./works.scss";
function Works({ work }) {
  return (
    <div className="work">
      {work.map((workItem) => {
        const { id, image, name, github, demo } = workItem;
        return (
          <div key={id} className="work__card">
            <img src={image} alt="" />
            <h4>{name}</h4>
            <div className="work__card__buttons">
              <a href={github} target={"_blank"}>
                <button>Github</button>
              </a>
              <a href={demo} target={"_blank"}>
                <button>Demo</button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Works;
