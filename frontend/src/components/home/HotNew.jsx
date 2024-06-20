import React from 'react';
import useNewsContent from "../../hooks/useNewsContent.js";
import { getMoment } from "../../functions/Converter.js";
import { Card} from "react-bootstrap";

function HotNew() {
  const {news, loading, error } = useNewsContent();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(news);

  return (
    <div className='hot-news container'>
      {/* <div className="mt-4">
        <h2 style={{marginLeft: '20px', textAlign: 'left'}}>Hot News</h2>
        <Container>
        <div className="p-3 border bg-light text-center new-box" style={{marginBottom: '10px'}}>New Box</div>
        <div className="p-3 border bg-light text-center new-box" style={{marginBottom: '10px'}}>New Box</div>
        <div className="p-3 border bg-light text-center new-box" style={{marginBottom: '10px'}}>New Box</div>
        </Container>
      </div> */}
      <h2 style={{marginLeft: '30px', textAlign: 'left'}}>Hot News</h2>
      {news.map((newcontent) => (
        <Card className="post-card" key={newcontent.post_id}>
          
            <Card.Body>
              <Card.Title as="h2" style={{ color: "blue" }}>
                {newcontent.post_title}
              </Card.Title>
              <Card.Text className="post-card-content">
                {newcontent.post_content}
              </Card.Text>
              <hr/>
              
              <div>{newcontent.username} </div>
              
              <Card.Text
                className="post-card-content"
                style={{ textAlign: "right", fontSize: "small" }}
              >
                {getMoment(newcontent.created_timestamp)}
              </Card.Text>
            </Card.Body>
       
        </Card>
      ))}
    </div>
  );
}

export default HotNew;
