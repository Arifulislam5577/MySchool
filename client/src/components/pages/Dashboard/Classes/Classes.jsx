import React from 'react';
import { useParams } from 'react-router-dom';
const Classes = () => {
  const { classNum } = useParams();
  return <div>Class {classNum}</div>;
};

export default Classes;
