import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Place from '../components/places/Place';
import { getSinglePlace } from '../services/placesApi';

const GetawaysDetails = () => {
  const {id} = useParams()
  const [place, setPlace] = useState(null);

  useEffect(() => {
    getSinglePlace(id)
      .then(place => setPlace(place[0]))

  }, []);

  if(place){
      return (
    
        <div>
            Details for: {place.name}
    
            <Place {...place} />
        </div>
    
      )

  }
  return null
};

export default GetawaysDetails;
