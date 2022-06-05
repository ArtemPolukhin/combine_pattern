import { configureStore } from '@reduxjs/toolkit'
import users from '../features/users/slice'
import posts from '../features/posts/slice'
import { jphApi } from '../services/jph'

export const store = configureStore({
  reducer: {
    users,
    posts,
    [jphApi.reducerPath]: jphApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(jphApi.middleware),
})