import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    // promise
    // since it's not an observable, it won't update immediately since it's not constantly listening
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));

    // fetch
    /*fetch("https://firestore.googleapis.com/v1/projects/crwn-db-d4e16/databases/(default)/documents/collections")
    .then(response = response.json())
    .then(collections => {
      // the fetch nestes it at least 8 levels in and so it's too complex for this use case
    })*/

    // snapshot
    /*this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionMap);
        this.setState({ loading: false });
      }
    )*/
  };
};
