import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const JobDetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #0056b3;
  }

  svg {
    margin-right: 5px;
  }
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const ApplyButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1.2em;

  &:hover {
    background-color: #218838;
  }
`;

const JobDetail = () => {
  const [job, setJob] = useState(null);
  const { jobId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`/api/jobs/${jobId}`);
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  if (!job) {
    return <p>Loading...</p>;
  }

  return (
    <JobDetailContainer>
      <BackButton onClick={() => navigate(-1)}>
        <FaArrowLeft /> Back
      </BackButton>
      <Title>{job.job_title}</Title>
      <Section>
        <Label>Location:</Label>
        <Text>{job.job_work_location}</Text>
      </Section>
      <Section>
        <Label>Number of recruits:</Label>
        <Text>{job.number_of_recruits}</Text>
      </Section>
      <Section>
        <Label>From:</Label>
        <Text>{job.start_date} To: {job.end_date}</Text>
      </Section>
      <Section>
        <Label>Requirements:</Label>
        <Text>{job.requirement}</Text>
      </Section>
      <Section>
        <Label>Compensation:</Label>
        <Text>Type: {job.compensation_type}</Text>
        <Text>Amount: {job.amount} VND</Text>
      </Section>
      <Section>
        <Label>Description:</Label>
        <Text>{job.job_description}</Text>
      </Section>
      <Section>
        <Label>Contact Info:</Label>
        <Text>{job.job_contact_info}</Text>
      </Section>
      <ApplyButton>Apply</ApplyButton>
    </JobDetailContainer>
  );
};

export default JobDetail;