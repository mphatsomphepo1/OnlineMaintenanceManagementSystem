import React, { Component } from "react";
// import { render } from "react-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class BasicToast extends Component {
  constructor() {
    super();
  
  }

  showError = () => {
    toast.error("ERROR Notification");
  };

  showSuccess = () => {
    toast.success("Success Notification");
  };

  showInfo = () => {
    toast.info("Info Notification");
  };

  showWarn = () => {
    toast.warn("Warn Notification");
  };

  render() {
    return (
      <div>
        <div>
          <span>
            <button onClick={this.showError}>Error </button>
          </span>
          <span>
            <button onClick={this.showSuccess}>Success </button>
          </span>
          <span>
            <button onClick={this.showInfo}>Info </button>
          </span>
          <span>
            <button onClick={this.showWarn}>Warn </button>
          </span>
        </div>
      </div>
    );
  }
}

export default BasicToast;