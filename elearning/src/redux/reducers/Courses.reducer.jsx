import * as types from '../constants/Courses.constant'

const stateDefault = {
    ListCourses : []
}

export const CoursesStoreReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case types.GET_LIST_OF_COURSES:
            // state.ListCourses =  {...state.ListCourses}
            state.ListCourses = action.ListCourses
            // return {...state};
            console.log(state.ListCourses);
            
            break;
        default:
            break;
    }
    return {...state}
}