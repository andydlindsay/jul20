import React from 'react';
import useRequest from '../hooks/useRequest';

const Request = () => {
   const { data, loading } = useRequest('https://www.dnd5eapi.co/api/classes');

  return (
    <div>
      <h2>D&D Classes</h2>
      {loading && <h2>Loading....</h2>}
      {data.results && data.results.map((elem) => (
        <p key={elem.index}>{elem.name}</p>
      ))}
    </div>
  )
};

export default Request;
