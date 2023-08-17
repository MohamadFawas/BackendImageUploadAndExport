import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EmployeePhoto = () => {
    const { id } = useParams();
    const [imageData, setImageData] = useState(null);
  
    useEffect(() => {
      // Fetch image data using the API
      axios.get(`http://localhost:9090/library/api/images/${id}`)
        .then(response => {
          setImageData(response.data);
        })
        .catch(error => {
          console.error('Error fetching image data:', error);
        });
    }, [id]);
  
    return (
      <div>
        {imageData ? (
          <img src={imageData.imageUrl} alt="Image" />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
}

export default EmployeePhoto;
