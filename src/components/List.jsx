import React from "react";

class List extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <div className="location-list">
        <h3 className="pharm-header"> Pharmacies </h3>
        {data.map(pharm => {
          return (
            <ul
              onClick={this.props.selectId}
              onMouseEnter={this.props.handleHover}
              onMouseLeave={this.props.handleUnhover}
              className="pharm-list"
            >
              <li
                onMouseEnter={this.props.handleHover}
                onMouseLeave={this.props.handleUnhover}
                className="pharm-list-item"
                id={pharm.a}
              >
                <h3 id={pharm.a}>{pharm.facility_name}</h3>
                <ul id={pharm.a} className="pharm-list-info">
                  <p id={pharm.a}>
                    <span className="italics">Address:</span>{" "}
                    <br />
                    {pharm.address + " " + pharm.borough + " " + pharm.zip_code}
                  </p>
                </ul>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default List;
