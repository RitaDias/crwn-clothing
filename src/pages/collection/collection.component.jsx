import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => (
  <div className="collection">
    <h2> {collection.title} </h2>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state) // it's necessary to pass the state because the selector needs it as part of the url param
});

export default connect(mapStateToProps)(CollectionPage);
