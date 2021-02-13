import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mpaStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching // needs to be named exactly what the component CollectionsOverview is expecting
});

const CollectionsOverviewContainer = compose(
  connect(mpaStateToProps),
  WithSpinner
)(CollectionsOverview); // consider components and methods from right to left

export default CollectionsOverviewContainer;
