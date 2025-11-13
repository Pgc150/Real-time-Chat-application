import { create } from "zustand";
import toast from'react-hot-toast'
import { axiosInstance } from "../lib/axios";

export const useChatStore = create((set) => ({
    messages:[],
    users:[],
    selectedUser:null,
    isUserLoading:false,
    isMessageLoading:false,

    getUsers: async () =>{
        set({isUserLoading:true});

        try {
            const res = await axiosInstance.get("/messages/users")
        } catch (error) {
            
        }
    },

    getMessages: async (userId)=>{
       set({isMessageLoading:true})
       try {
        const res = await axiosInstance.get(`/messages/${userId}`);
        set({messages:res.data});
       } catch (error) {
         
       }finally{
          
       }
    }
}))