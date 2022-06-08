import React from "react";

class MovieButton extends React.Component {
  state = { isClicked: false };

  handleClick = (e) => {
    if (this.state.clicked) return;

    e.preventDefault();
    this.setState({ isClicked: true }, () => {
      setTimeout(() => {
        this.setState({ isClicked: false });
      }, 200);
    });
    this.props.onClick();
  };

  render() {
    let styles;
    let clickedStyles;
    if (this.props.primary) {
      styles = {
        color: "white",
        background: "#0532FF",
      };
    }
    if (this.state.isClicked) {
      clickedStyles = {
        opacity: "0.6",
      };
    }

    return (
      <div
        role="button"
        {...this.props}
        onClick={this.handleClick}
        style={{
          margin: "1rem",
          padding: "0.5rem",
          minWidth: "80px",
          borderRadius: "4px",
          display: "inline-block",
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: "bold",
          background: "#cdcdcd",
          ...styles,
          ...clickedStyles,
        }}
      >
        {this.props.label}
      </div>
    );
  }
}

export default MovieButton;
