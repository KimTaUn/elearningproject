import { combineReducers } from 'redux';
import { UsersStoreReducer } from './reducers/Users.reducer';
import { CoursesStoreReducer } from './reducers/Courses.reducer'

// STORE TỔNG CỦA ỨNG DỤNG
const rootReducer = combineReducers({
    UsersStoreReducer,
    CoursesStoreReducer
})

export default rootReducer