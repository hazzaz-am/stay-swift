import { UserModel } from "@/models/userModel";
import { saltAndHashPassword } from "@/utils/password";
import { toReadableName } from "@/utils/readableName";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const { firstName, lastName, email, password } = await request.json();
    const hashedPassword = await saltAndHashPassword(password);
    const humanReadableName = toReadableName(`${firstName} ${lastName}`);
    const user = {
      name: humanReadableName,
      email,
      password: hashedPassword
    };

    await UserModel.create(user);
    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: error.name === "ValidationError" ? 400 : 500 });
    } else {
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }
};