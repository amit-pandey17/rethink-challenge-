import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown'

import css from './style.css';

function MarkdownEditor({ file, write }) {

  const [input, setInput] = useState();
  console.log(file, write);
  return (
    <div className="textarea">
      <textarea autoFocus className= "textarea" value={input} onChange={
        (e) => setInput(e.target.value)
      }/>
      <ReactMarkdown source = {input} className="markdown"/>
    </div>
  );
}

MarkdownEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default MarkdownEditor;
