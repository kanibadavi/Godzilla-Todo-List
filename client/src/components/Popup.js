const Popup = (props) => {
  return props.trigger ? (
    <div className="popup fixed inset-0 bg-orange-300 bg-opacity-50 flex flex-col justify-center items-center">
      <div className="popup-inner w-96  bg-orange-500 ">
        <button
          className="close-btn flex"
          onClick={() => {
            props.setTrigger();
          }}
        >
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
