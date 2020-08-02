import React, { useState } from 'react';
// import marked from 'marked';
import ReactMarkdown from 'react-markdown';
import './index.css';

export default () => {
  const [markdown, setMarkdown] = useState('# sup');

  function handleChange(e) {
    setMarkdown(e.target.value);
  }

  return (
    <div className="app">
      <textarea value={markdown} onChange={handleChange} />

      {/* <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      /> */}
      <ReactMarkdown className="preview" source={markdown} />
    </div>
  );
};
