import React from "react";
import { formBuilder } from "../utils/formBuilder";

export function withForm(WrappedComponent, config) {
  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} form={formBuilder(config)} />;
    }
  };
}
