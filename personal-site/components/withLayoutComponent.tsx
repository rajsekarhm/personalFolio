"use client";

import React from "react";

const withLayoutComponent = <P extends object>(Component: React.ComponentType<P>) => {
  return function HOCComponent(props: P) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black/10 backdrop-blur-md rounded-3xl p-12 shadow-3xl">
            <Component {...props} />
          </div>
        </div>
      </div>
    );
  };
};

export default withLayoutComponent;
