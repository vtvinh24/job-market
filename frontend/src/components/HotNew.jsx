import React from 'react';

function HotNew() {
  return (
    <div className='hot-news'>
      <div className="mt-4">
        <h2 style={{marginLeft: '20px', textAlign: 'left'}}>Hot News</h2>
       
        <div className="p-3 border bg-light text-center new-box" style={{marginBottom: '10px'}}>New Box</div>
        <div className="p-3 border bg-light text-center new-box" style={{marginBottom: '10px'}}>New Box</div>
        <div className="p-3 border bg-light text-center new-box" style={{marginBottom: '10px'}}>New Box</div>
      
      </div>
    </div>
  );
}

export default HotNew;
