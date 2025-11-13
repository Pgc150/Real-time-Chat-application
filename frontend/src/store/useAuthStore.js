import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useAuthStore = create ((set)=>({
    authUser:null,
    isSigningUp:false,
    isLoggingIn:false,
    isUpdatingProfile:false,
    isCheckingAuth:true,

    checkAuth:async() => { // calls check aout api
        try {
            const res = await axiosInstance.get("/auth/check")
            set({authUser:res.data})
        } catch (error) {
            console.log("Error in checkAuth:",error)
            set({authUser:null})
        } finally{
            set({isCheckingAuth:false})
        }
    },

    signup: async(data) => { // calls signup api 
        set({isSigningUp:true});
        try {
           const res = await axiosInstance.post("/auth/signup",data)
           set({authUser:res.data});
           console.log("Response:", res);
           toast.success("Account created sucessfully")
        } catch (error) {
            console.log("Signup error:", error);
            toast.error(error.response.data.message);

        } finally {
            set({isSigningUp:false});
        }
        
    },

    login : async(data) => { // calls login api
        set({isLoggingIn : true});
        try {
            const res = await axiosInstance.post("/auth/login",data)
            set({authUser : res.data});
            toast.success("Logged in sucessfully");
        } catch (error) {
            toast.error(error.response.data.message)
        }finally{
             set({isLogginngIng : false})
        }
    },


    logout: async ()=>{
       try {
            await axiosInstance.post("/auth/logout");
            set({authUser:null});
            toast.success("Logged out sucessfully")
        } catch (error) {
            toast.error(error.response.data.message)
        }
    },

    updateProfile: async(data) =>{
        set({isUpdatingProfile:true});
        try {
            const res = await axiosInstance.put("/auth/update",data)
            set({authUser:res.data});
            toast.success("Profile updated sucessfully")
        } catch (error) {
           console.log("errorin update profile",error)
           toast.error(error.response.data.message)
        }finally{
            set({isUpdatingProfile:false});
        }
    }

    

}))