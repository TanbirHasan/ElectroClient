import React from 'react';

const DeletingOrderModal = () => {
    return (
      <div>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3>Are you Sure?</h3>
      
           
          </div>
        </div>
      </div>
    );
};

export default DeletingOrderModal;