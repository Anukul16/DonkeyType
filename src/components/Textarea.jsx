import React from 'react';
import SyncIcon from '@mui/icons-material/Sync';

const Textarea = () => {
  return (
    <>
      <div className="text-container" id="content">
        <div className="custom-selection">
          <ul>
            <li>@ punctuation</li>
            <li># numbers</li>
            <li>time</li>
            <li>words</li>
            <li>15</li>
            <li>30</li>
            <li>60</li>
            <li>120</li>
          </ul>
        </div>
        <div className='paragraph'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur at quaerat saepe aut cumque fugiat
          voluptas molestias, voluptatibus doloremque. Ducimus voluptate commodi, quaerat vero quia blanditiis facilis
          earum alias, hic voluptatum nemo in non. Adipisci magnam alias consectetur at voluptas, facere non nostrum
          laborum eius.
        </div>
      </div>

      <button type="button" className="btn btn-dark btn-md"> <SyncIcon /> </button>
      <h6>Click Enter to Start</h6>
    </>
  );
};

export default Textarea;
