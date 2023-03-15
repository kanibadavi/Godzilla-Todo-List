const Popup = (props) => {
  return props.trigger ? (
    <div className="popup fixed inset-0 bg-orange-300 bg-opacity-50 flex flex-col justify-center items-center">
      <div className="popup-inner  bg-orange-500 rounded-lg ">
        <button
          className="flex ml-2 mt-2 btn btn-outline rounded-full"
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
