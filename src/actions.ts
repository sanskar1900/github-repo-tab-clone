import { AnyAction, Dispatch } from "redux";
import { GET_PROFILE_DATA, GET_PROFILE_DATA_FAILED, GET_PROFILE_DATA_SUCCESS, GET_REPO_DATA, GET_REPO_DATA_FAILED, GET_REPO_DATA_SUCCESS } from "./constants/actionNames";

export const getRepoData = () => async (dispatch :Dispatch<any>) => {
  dispatch({ type: GET_REPO_DATA }); 

  try {
    const response = await fetch('https://api.github.com/users/supreetsingh247/repos');
    const data = await response.json();

    dispatch({ type: GET_REPO_DATA_SUCCESS, payload: data }); 
  } catch (error) {
     dispatch({ type: GET_REPO_DATA_FAILED }); 
    console.error("something went wrong", error);
  }
};
export const getProfileData = () => async (dispatch :Dispatch<any>) => {
  dispatch({ type: GET_PROFILE_DATA }); 

  try {
    const response = await fetch('https://api.github.com/users/supreetsingh247');
    const data = await response.json();

    dispatch({ type: GET_PROFILE_DATA_SUCCESS, payload: data }); 
  } catch (error) {
     dispatch({ type: GET_PROFILE_DATA_FAILED }); 
    console.error("something went wrong", error);
  }
};
