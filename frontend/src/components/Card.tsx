import React from "react";
import  PropTypes  from "prop-types";
const Card = ({
  header,
  children,
  actionLabel,
  handleAction,
  image,
  imagePosition = "center",
}) => {
  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "8px",
        width: "100%",
        boxShadow:
          "-60px 0px 100px -90px #000000, 60px 0px 100px -90px #000000",
      }}
    >
      {image && imagePosition === "top" && <img src={image} />}
      {header ||
        (actionLabel && (
          <div>
            {header && <h1>{header}</h1>}
            {actionLabel && (
              <button onClick={handleAction}>{actionLabel}</button>
            )}
          </div>
        ))}
      {image && imagePosition === "center" && <img src={image} />}
      <div>{children}</div>
      {image && imagePosition === "bottom" && <img src={image} />}
    </div>
  );
};
Card.propTypes = {
  header: PropTypes.any,
  children: PropTypes.any,
  actionLabel: PropTypes.string,
  handleAction: PropTypes.func,
  image: PropTypes.any,
  imagePosition: PropTypes.string
};
export default Card;
