import React from "react";
import "./CardsStyles.css";
import Session from "../assets/sessions.png";
import Course from "../assets/courses.png";
import Upload from "../assets/upload.png";

const Cards = () => {
  return (
    <>
      <div className="card1">
        <img src={Session} alt='Session' />
        <div className="text1">
        <span className="content">Efficient Sessions</span>
        <p className="spec1">
          Create or attend video, audio and chat sessions for Better Learning
          Experiences
        </p>
        </div>
      </div>

      <div className="card2">
        <div className="text2">
          <span className="content">Courses and Subject</span>
          <p className="spec2">
            Have access to your Courses and Subjects depending on your level of
            education.
          </p>
        </div>
        <img src={Course} alt="Course" />
      </div>

      <div className="card3">
        <img src={Upload} alt="Upload" />
        <div className="text3">
        <span className="content">Upload Resources</span> <br></br>
        <p className="spec3">
          Teachers able to upload notes, Videos, audio materials for the
          students which offers them the best learning experience.
        </p>
        </div>
      </div>
    </>
  );
};

export default Cards;
