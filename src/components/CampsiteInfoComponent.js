import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class CampsiteInfo extends Component {


  renderCampsite(campsite) {
    return (
      <div className="col-md-5 m1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(comments) {
    if (comments) {
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {this.props.campsite.comments.map((comment) => {
            return (
              <p>
                <div>{comment.text}</div>
                <div>
                  <div>
                    {" "}
                    -- {comment.author},{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(Date.parse(comment.date)))}
                  </div>
                </div>
              </p>
            );
          })}
        </div>
      );
    }
    return <div />;
  }

  render() {
    if (this.props.campsite) {
      return (
        <div>
          <div className="row">
            {this.renderCampsite(this.props.campsite)}{" "}
            {this.renderComments(this.props.campsite)}
          </div>
        </div>
      );
    }
    return <div />;
  }
}

export default CampsiteInfo;
