import SHopActionsTypes from "./shop.types";

export const updateCollections = (collectionsMap) => ({
  type: SHopActionsTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
