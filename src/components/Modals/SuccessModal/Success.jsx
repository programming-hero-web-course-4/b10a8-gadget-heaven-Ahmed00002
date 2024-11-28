import modalIcon from "../../../assets/Group.png";
import PropTypes from "prop-types";
function Success({ props }) {
  const { cartTotal, showModal } = props;
  return (
    <>
      <div className="absolute top-0 left-0 w-screen h-screen backdrop-blur-sm  flex items-center justify-center">
        <div className="w-2/6  bg-white shadow-md rounded-xl p-6 flex flex-col justify-around items-center  text-paraColor">
          <div className="text-center pb-3 border-b w-full space-y-2">
            <img className="mx-auto" src={modalIcon} alt="icon for modal" />
            <h1 className="text-xl font-bold text-black">
              Paymend Successfull
            </h1>
          </div>
          <p className="my-1">Thanks for purchasing</p>
          <p>total: {cartTotal}$</p>

          <button
            onClick={() => showModal(false)}
            className="w-full btn btn-sm rounded-full mt-4"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

Success.propTypes = {
  props: PropTypes.object,
  cartTotal: PropTypes.number,
  showModal: PropTypes.func,
};

export default Success;
