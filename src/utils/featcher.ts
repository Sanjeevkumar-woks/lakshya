import axios from "axios";

export const fetcher = async (payload: {
  url: string;
  method?: string;
  data?: any;
  params?: any;
  resPonseType?: any;
  onUploadProgress?: any;
  onDownloadProgress?: any;
}) => {
  try {
    const {
      url,
      method = "GET",
      data,
      params,
      resPonseType,
      onUploadProgress,
      onDownloadProgress,
    } = payload;
    const response = await axios({
      url,
      method,
      data,
      params,
      responseType: resPonseType,
      onUploadProgress,
      onDownloadProgress,
    });
    return {
      data: response.data,
      error: null,
      Headers: response.headers,
    };
  } catch (error: any) {
    return {
      data: null,
      error: error.response?.data || {
        message: "Something went wrong",
      },
    };
  }
};
