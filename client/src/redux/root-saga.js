import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop/shop.sagas";
import { userSagas } from "../redux/user/user.sagas";
import { cartSagas } from "../redux/cart/cart.sagas";
import { shopSagas } from "../redux/shop/shop.sagas";

export default function* rootSaga() {
  yield all([
    call(fetchCollectionsStart),
    call(userSagas),
    call(cartSagas),
    call(shopSagas)
  ]);
}
