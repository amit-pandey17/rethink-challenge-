import React from 'react';
import PropTypes from 'prop-types';
import DraftEditor from './draftEditor'
import css from './style.css';

function PlaintextEditor({ file, write }) {
  console.log(file, write);
  return (
    <div className={css.editor}>
      <DraftEditor />
    </div>
  );
}

PlaintextEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default PlaintextEditor;
