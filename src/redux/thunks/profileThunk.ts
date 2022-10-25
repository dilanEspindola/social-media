import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "@/utils";
import { CreateProfile, ProfileByUsername } from "@/interfaces";
import axios from "axios";

export const createProfileThunk = createAsyncThunk(
  "fetch/createProfile",
  async (profileData: CreateProfile) => {
    const formData = new FormData();
    formData.append("username", profileData.username);
    formData.append("description", profileData.description);
    formData.append("file", profileData.file);
    formData.append("user", profileData.user.toString());

    try {
      const res = await axios.post(`${URL}/profile`, formData);
      const data = res.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);
