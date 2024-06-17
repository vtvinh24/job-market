import React from "react";
import  useJobList  from "../hooks/useJobList";
import "../assets/css/Forum.css";
import { getMoment } from "../functions/Converter";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListContent = () => {
  const {contents, loading, error } = useJobList();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  // array.forEach(contents => {
  //     console.log(contents);
  // });
  console.log(contents);
  return (
    <div>
      {contents.map((content) => (
        <Card>
        <ul>
          <li>{content.job_title}</li>
          <li>{content.job_description}</li>
          <li>{content.job_contact_info}</li>
          <li>{content.job_work_location}</li>
        </ul>
        </Card>
        // <Card className="post-card" key={content.job_id}>
        //   <Card.Body>
        //     <Card.Title as="h2" style={{ color: "blue" }}>
        //       {content.job_title}
        //     </Card.Title>
        //     <Card.Text className="post-card-content">
        //       {content.job_description}
        //     </Card.Text>
        //     {/* <Card.Link
        //       href={`/users/${content.author}`}
        //       className="card-author"
        //       data-toggle="tooltip"
        //     >
        //       {content.author}
        //     </Card.Link> */}
        //   <Card.Test> {content.job_contact_info}</Card.Test>
        //   </Card.Body>
        // </Card>
      ))}
    </div>
  );
};

export default ListContent;
