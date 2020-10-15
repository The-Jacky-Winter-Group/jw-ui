import React from "react";
import { Drawer } from "@blueprintjs/core";
import classnames from "classnames";
import Button from "./Button";
import PageLoader from "./PageLoader";

const Pane = props => {
  const {
    className,
    children,
    showFooter,
    submitButtonProps,
    cancelButtonProps,
    loading,
    ...otherProps
  } = props;
  return (
    <Drawer
      className={classnames(["nui-pane--wrapper", className])}
      size={"40%"}
      canEscapeKeyClose
      canOutsideClickClose
      {...otherProps}
    >
      <div
        className={classnames(["nui-pane--body"], {
          "nui-pane--body__has-footer": showFooter
        })}
      >
        {loading ? <PageLoader /> : children}
      </div>
      {showFooter && (
        <div className="nui-pane--footer">
          <Button
            label="Cancel"
            size="large"
            style="secondary"
            className="mr-2"
            {...cancelButtonProps}
            dataTestId="cancel-button"
          />
          <Button label="Update" size="large" {...submitButtonProps} dataTestId="submit-button"/>
        </div>
      )}
    </Drawer>
  );
};

export default Pane;