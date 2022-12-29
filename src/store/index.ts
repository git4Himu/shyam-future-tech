import { configureStore, createSerializableStateInvariantMiddleware , isPlain} from '@reduxjs/toolkit'
import productReducer from './reducers/item.reducer'
export  const store = configureStore({
  reducer: {
    product:productReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch