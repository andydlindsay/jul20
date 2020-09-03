import React, {useState} from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const DocTitle = () => {
  const [title, setTitle] = useState('Something Else');

  useDocumentTitle(title);

  return (
    <div>
      <h1>Doc Title</h1>
      <input type="text" onChange={event => setTitle(event.target.value)}/>
    </div>
  );
};

export default DocTitle;
