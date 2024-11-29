import PropTypes from "prop-types";

function FeaturesCard({ feature }) {
  const { icon, headline, description } = feature;

  return (
    <div>
      <div className="bg-purple-50 p-6 rounded-xl space-y-4">
        <h1 className="text-6xl"> {icon} </h1>
        <h1 className="text-2xl">{headline}</h1>
        <p className="text-paraColor"> {description} </p>
      </div>
    </div>
  );
}

FeaturesCard.propTypes = {
  feature: PropTypes.object,
};
export default FeaturesCard;
