import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import Header from "./HeaderComponent.js";
import Footer from "./FooterComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import {
<<<<<<< HEAD
  addComment,
  fetchCampsites,
  fetchComments,
  fetchPromotions,
=======
  postComment,
  fetchCampsites,
  fetchComments,
  fetchPromotions,
  fetchPartners,
>>>>>>> 61d0f039577f0f4ea7a9f6b99182332608d2766a
} from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    campsites: state.campsites,
    comments: state.comments,
    partners: state.partners,
    promotions: state.promotions,
  };
};

const mapDispatchToProps = {
  postComment: (campsiteId, rating, author, text) =>
    postComment(campsiteId, rating, author, text),
  fetchCampsites: () => fetchCampsites(),
  resetFeedbackForm: () => actions.reset("feedbackForm"),
  fetchComments: () => fetchComments(),
  fetchPromotions: () => fetchPromotions(),
<<<<<<< HEAD
=======
  fetchPartners: () => fetchPartners(),
>>>>>>> 61d0f039577f0f4ea7a9f6b99182332608d2766a
};

class Main extends Component {
  componentDidMount() {
    this.props.fetchCampsites();
    this.props.fetchComments();
    this.props.fetchPromotions();
<<<<<<< HEAD
=======
    this.props.fetchPartners();
>>>>>>> 61d0f039577f0f4ea7a9f6b99182332608d2766a
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          campsite={
            this.props.campsites.campsites.filter(
              (campsite) => campsite.featured
            )[0]
          }
          campsitesLoading={this.props.campsites.isLoading}
          campsitesErrMess={this.props.campsites.errMess}
          promotion={
            this.props.promotions.promotions.filter(
              (promotion) => promotion.featured
            )[0]
<<<<<<< HEAD
          }
          promotionLoading={this.props.promotions.isLoading}
          promotionErrMess={this.props.promotions.errMess}
          partner={this.props.partners.filter((partner) => partner.featured)[0]}
=======
          }
          promotionLoading={this.props.promotions.isLoading}
          promotionErrMess={this.props.promotions.errMess}
          partner={
            this.props.partners.partners.filter(
              (partner) => partner.featured
            )[0]
          }
          partnersLoading={this.props.partners.isLoading}
          partnersErrMess={this.props.partners.errMess}
>>>>>>> 61d0f039577f0f4ea7a9f6b99182332608d2766a
        />
      );
    };

    const CampsiteWithId = ({ match }) => {
      return (
        <CampsiteInfo
          campsite={
            this.props.campsites.campsites.filter(
              (campsite) => campsite.id === +match.params.campsiteId
            )[0]
          }
          isLoading={this.props.campsites.isLoading}
          errMess={this.props.campsites.errMess}
          comments={this.props.comments.comments.filter(
            (comment) => comment.campsiteId === +match.params.campsiteId
          )}
          commentsErrMess={this.props.comments.errMess}
<<<<<<< HEAD
          addComment={this.props.addComment}
=======
          postComment={this.props.postComment}
>>>>>>> 61d0f039577f0f4ea7a9f6b99182332608d2766a
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/directory"
            render={() => <Directory campsites={this.props.campsites} />}
          />
          <Route path="/directory/:campsiteId" component={CampsiteWithId} />
          <Route
            exact
            path="/contactus"
            render={() => (
              <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
            )}
          />
          <Route
            exact
            path="/aboutus"
            render={() => <About partners={this.props.partners} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
