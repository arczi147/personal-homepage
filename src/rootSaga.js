import { all } from "redux-saga/effects";
import { projectsSaga } from "./features/author/PersonalHomepage/Portfolio/projectsSaga";

export default function* rootSaga() {
    yield all([
        projectsSaga(),
    ]);
}