import axios from "axios";
import { updateStart, updateSuccess, updateFailure} from "./userSlice";

export const updateUser = async (userInfo, dispatch) => {
     dispatch(updateStart());
     try{
       const {data} = await axios.post("http://localhost:8800/api/users/123/update", userInfo);
       dispatch(updateSuccess(data));
     }
     catch(err){
       dispatch(updateFailure());
     }
     
};

