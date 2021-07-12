import axios from "axios";
import * as actions from "../api";
const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    console.log(action.type);
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;
    if (onStart) dispatch({ type: onStart });
    next(action);

    try {
      const response = await axios.request({
        baseURL: "http://localhost:3000",
        url,
        method,
        data,
      });
      // General
      dispatch(actions.apiCallSuccess(response.data));
      // Specific
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch(actions.apiCallFailed({ error: error.message }));
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };

export default api;
