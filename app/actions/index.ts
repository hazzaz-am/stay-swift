"use server";

import { signIn } from "@/auth";

export const login = async (formData: FormData) => {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const response = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });


    return await response;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Login failed");
    }
  }
};