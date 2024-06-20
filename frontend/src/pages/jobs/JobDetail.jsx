
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import HomeFooter from "../../components/HomeFooter.jsx";
import HomeNavbar from "../../components/HomeNavbar.jsx";

const BackgroundContainer = styled.div`
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const JobDetailContainer = styled.div`
  width: 900px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    padding: 15px;
  }
`;

const BackButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;
  width: 5%;
  margin-left: 10px;
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
  text-align: center;
  color: #333;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #007bff;
`;

const Text = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
  margin-bottom: 10px;
  color: #555;
  font: bold;
`;

const ApplyButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1.2em;
  display: block;
  margin: 0 auto;
  transition: background-color 0.3s;
  border-radius: 50px;
  &:hover {
    background-color: #218838;
  }
`;

const LoadingSpinner = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `} 2s linear infinite;
  margin: 50px auto;
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  font-size: 1.2em;
`;


const JobDetail = () => {
  const [job, setJob] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const  jobId  = id;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/jobs/${jobId}`);
        setJob(response.data);
         setLoading(false);
      } catch (error) {
        setError('Error fetching job details.');
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }


  return (
    <BackgroundContainer>
      <HomeNavbar />
      <BackButton onClick={() => navigate(-1)}>
        <FaArrowLeft /> Back
      </BackButton>
    <JobDetailContainer>
      <Title>{job.job_title}</Title>
      <Section>
        <Label>Location:</Label>
        <Text>{job.job_work_location}</Text>
      </Section>
      <Section>
        <Label>Max Applications:</Label>
        <Text>{job.job_max_applications}</Text>
      </Section>
      <Section>
        <Label>Number of recruits:</Label>
        <Text>{job.job_number_of_recruits}</Text>
      </Section>
      <Section>
        <Label>From:</Label>
        <Text>{job.job_start_date}</Text>
        <Label>To:</Label>
        <Text>{job.job_end_date}</Text>
      </Section>
      <Section>
        <Label>Requirements:</Label>
        <Text>{job.job_requirements} </Text>
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
    <HomeFooter />
    </BackgroundContainer>
  );
};

export default JobDetail;
