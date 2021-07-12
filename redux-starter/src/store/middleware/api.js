import axios from "axios";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    console.log(action.type);
    if (action.type !== "apiCallBegan") return next(action);

    next(action);
    const { url, method, data, onSuccess, onError } = action.payload;
    try {
      const response = await axios.request({
        baseURL: "http://localhost:3000",
        url,
        method,
        data,
      });
      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch({ type: onError, payload: error });
    }
  };

export default api;
