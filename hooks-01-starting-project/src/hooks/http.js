import { useReducer, useCallback } from "react";

const httpReducer = (prevHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null, data: null, extra: null };
    case "RESPONSE":
      return {
        ...prevHttpState,
        loading: false,
        data: action.responseData,
        extra: action.extra,
      };
    case "ERROR":
      return { loading: false, error: action.errorMessage };
    case "CLEAR":
      return { ...prevHttpState, error: null };
    default:
      throw new Error("Should not get here!");
  }
};

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
    data: null,
    extra: null,
    identifier: null,
  });

  const sendRequest = useCallback((url, method, body, reqExtra, identifier) => {
    dispatchHttp({ type: "SEND", extra: reqExtra, identifier: identifier });
    fetch(url, {
      method: method,
      body: body,
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json)
      .then((responseData) => {
        dispatchHttp({ type: "RESPONSE", responseData: responseData });
      })
      .catch((error) => {
        dispatchHttp({ type: "ERROR", errorMessage: "Something went wrong!" });
      });
  }, []);

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest,
    reqExtra: httpState.extra,
  };
};

export default useHttp;
