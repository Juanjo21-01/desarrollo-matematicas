/* eslint-disable react/prop-types */

const Modal = ({ children, nameModal }) => {
  return (
    <div
      className="modal fade"
      id={nameModal}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1
              className="modal-title fs-5 text-danger"
              id="staticBackdropLabel"
            >
              Desarrollo Web
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center">{children}</div>
          <div className="modal-footer justify-content-center">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              data-bs-dismiss="modal"
            >
              !Vamos!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
