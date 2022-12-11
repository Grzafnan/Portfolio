import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    fetch(`https://portfolio-server-grzafnan.vercel.app/project/${id}`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, [id])

  return (
    <div>
      <h1>Hellow</h1>
    </div>
  );
};

export default ProjectDetails;