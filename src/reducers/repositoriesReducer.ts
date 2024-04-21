import { GET_PROFILE_DATA, GET_PROFILE_DATA_FAILED, GET_PROFILE_DATA_SUCCESS, GET_REPO_DATA, GET_REPO_DATA_FAILED, GET_REPO_DATA_SUCCESS } from "../constants/actionNames";

interface repositoriesDataType {
    data: any[];
    isLoading: boolean
}
const initialRepoState : repositoriesDataType = {
  data : [],
  isLoading: false
};

export const repositoryReducer = (state = initialRepoState, action:any) => {
  switch (action.type) {
    case GET_REPO_DATA:
      return { ...state, isLoading:true };
    case GET_REPO_DATA_SUCCESS:
      return { ...state, data:action.payload, isLoading : false};
    case GET_REPO_DATA_FAILED:
        return {...state, isLoading: false}
    default:
      return state;
  }
};

interface profileDataType {
    profileData: any;
    isProfileDataLoading: boolean
}
const initialProfileState : profileDataType = {
  profileData : {},
  isProfileDataLoading: false
};
export const profileReducer = (state = initialProfileState, action:any) => {
  switch (action.type) {
    case GET_PROFILE_DATA:
      return { ...state, isProfileDataLoading:true };
    case GET_PROFILE_DATA_SUCCESS:
      return { ...state, profileData:action.payload, isProfileDataLoading : false};
    case GET_PROFILE_DATA_FAILED:
        return {...state, isProfileDataLoading: false}
    default:
      return state;
  }
};

