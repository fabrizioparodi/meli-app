import React from "react";

import "./Breadcumbs.css";

const breadcumbs = props => {
  if (props.filters) {
    const categories = props.filters.find(filter => filter.id === "category");
    if (categories) {
      const paths = categories.values[0].path_from_root;
      return (
        <div className="breadcumbs">
          {paths.map((path, idx) => {
            const classes = ["breadcumb"];
            if (paths.length - 1 === idx) {
              classes.push("active");
            }
            return (
              <React.Fragment key={idx}>
                <a className={classes.join(" ")} href="#category">
                  {path.name}
                </a>
                {paths.length - 1 !== idx ? " > " : null}
              </React.Fragment>
            );
          })}
        </div>
      );
    }
  }

  return null;
};

export default breadcumbs;
