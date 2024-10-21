import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./pageModal.css";
import Navigation from "../navigation/navigation";
import DocGetter from "../../components/docGetter";

function Pagemodal(props) {
  const subjects = props.sem.slice(0, 11);
  const [sub, setSub] = useState(subjects[0]);
  const [mod, setMod] = useState("MODULE 1");
  const [caller, setCaller] = useState(false);

  function close() {
    setCaller(false);
  }
  
  useEffect(() => {
    subjects.forEach((subject, index) => {
      const subElement = document.getElementById(`sub${index + 1}`);
      if (subElement) {
        subElement.style.display = subject ? "flex" : "none";
      }
    });
  }, [subjects]);

  const renderSubjectCard = (subject, index) => (
    <Card className="contents" id={`sub${index + 1}`} key={index}>
      <Card.Header>
        <h6>{subject}</h6>
      </Card.Header>
      <Card.Body>
        {[1, 2, 3, 4, 5].map((moduleNum) => (
          <button
            key={moduleNum}
            className="mods"
            onClick={() => {
              setMod(`MODULE ${moduleNum}`);
              setSub(subject);
              setCaller(true);
            }}
          >
            MODULE {moduleNum}
          </button>
        ))}
      </Card.Body>
    </Card>
  );

  return (
    <div className="pagemodal-container">
      <Navigation />
      <header className="text">
        <h1 className="heading">{props.heading}</h1>
      </header>
      <section className="sec">
        <Container>
          <div className="card-grid">
            {subjects.map((subject, index) => renderSubjectCard(subject, index))}
          </div>
          <Row>
            {caller && <DocGetter module={mod} subject={sub} closer={close} />}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Pagemodal;