"use server";

import { UserData } from "@/app/register/page";
import envConfig from "@/config/env.config";

export const registerUser = async (data: UserData) => {
  const res = await fetch(`${envConfig.baseApi}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = await res.json();
  return userInfo;
};
