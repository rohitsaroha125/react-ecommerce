import { createSelector } from "reselect";

const selectDirect=state => state.Directory

const selectData=createSelector(
    [selectDirect],
    directory => directory.sections
)

export default selectData