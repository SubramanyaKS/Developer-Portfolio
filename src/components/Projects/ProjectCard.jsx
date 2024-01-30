import React, { useState } from "react";
import "./project.css";
import image from "../../assets/image/project.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const ProjectCard = ({data}) => {
  return (
    <div className="shadow-lg flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} className="card-img-top" alt="..." />
          <h4 className="card-title text-center">{data.title}</h4>
          <h6 className="card-subtitle text-center">{data.subtitle}</h6>
          <p className="tech text-center m-5">{data.tech}</p>
        </div>
        <div className="flip-card-back">
          <p className="card-text">
          {data.description}
          </p>
          
          {/* {data.tech.map((i,d)=><p key={i}>{d}</p>)} */}
          <div className="social-buttons mt-5">
                    <a href={data.githubLink}>
                      {" "}
                      <button className="neo-button">
                        <FontAwesomeIcon
                          icon={faGithub}
                          style={{ fontSize: "24px" }}
                        />{" "}
                      </button>
                    </a>
                   {data.websiteLink!=null? <a href={data.websiteLink}>
                      {" "}
                      <button className="neo-button">
                        <FontAwesomeIcon
                          icon={faExternalLink}
                          style={{ fontSize: "24px" }}
                        />{" "}
                      </button>
                    </a>:null}
                    {data.downloadLink!=null? <a href={data.downloadLink}>
                      {" "}
                      <button className="neo-button">
                        <FontAwesomeIcon
                          icon={faDownload}
                          style={{ fontSize: "24px" }}
                        />{" "}
                      </button>
                    </a>:null}
                  </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
