import { ErrorState, UserState } from "../types/UserTypes";
import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation<UserState, UserState | ErrorState>({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data
      })
    }),
    loginUser: builder.mutation<UserState, UserState | ErrorState>({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data
      })
    }),
    logOut: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST"
      })
    })
  })
})

export const { useUserRegisterMutation, useLoginUserMutation, useLogOutMutation } = userApiSlice