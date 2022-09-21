import axios from "axios";
import { updateStart, updateSuccess, updateFailure } from "./userSlice";

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const { data } = await axios.post(
      "http://localhost:8800/api/users/123/update",
      user
    );
    dispatch(updateSuccess(data));
  } catch (error) {
    dispatch(updateFailure(error));
  }
};
