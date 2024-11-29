import PropTypes from "prop-types";

function NoCetegory({ names }) {
  return (
    <div className="text-center  w-full col-span-3 flex items-center justify-center text-2xl text-paraColor">
      <h1 className="w-4/6">
        No category found with the name of{" "}
        <span className="font-bold text-primaryColor">{names}</span>
      </h1>
    </div>
  );
}
NoCetegory.propTypes = {
  names: PropTypes.string,
};

export default NoCetegory;
