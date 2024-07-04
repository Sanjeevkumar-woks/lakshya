import React, { Component } from "react";
import { Button, Typography } from "antd";
import { BsArrow90DegLeft } from "react-icons/bs";

// This component is used to catch errors in the component tree and display a fallback UI instead of the component tree that crashed.
export class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
    info: null,
  };

  componentDidCatch(error: any, info: any) {
    this.setState({
      hasError: true,
      error: error,
      info: info,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen w-screen flex items-center justify-center bg-primary-50">
          <div>
            <Typography className="text-primary-700 text-base font-semibold">
              Application error
            </Typography>

            <Typography className="text-gray-900 text-6xl pt-3 pb-6">
              Something went wrong
            </Typography>

            <Typography>
              There was an error loading this page. Please try again later.
            </Typography>

            <Button
              className="btn-primary mt-6 px-4 py-7 rounded-1 flex items-center gap-2 font-semibold text-base"
              onClick={() => {
                window.location.href = "/dashboard";
              }}
            >
              <BsArrow90DegLeft />
              Go back to dashboard
            </Button>
          </div>
        </div>
      );
    }
    //@ts-ignore
    return this.props.children || null;
  }
}
