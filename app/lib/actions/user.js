import { connect } from "mongoose";
import User from "../models/user.model";

export async function createOrUpdateUser(
  id,
  first_name,
  last_name,
  image_url,
  email_addresses,
) {
  try {
    // connect to database
    await connect();

    //create user or update
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          email: email_addresses.at(0).email_address,
          firstName: first_name,
          lastName: last_name,
          profilePicture: image_url,
        },
      },
      { upset: true, new: true },
    );
    return user;
  } catch (error) {
    throw new Error(`Could not create user or update :${error}`);
  }
}

export async function deleteUser(id) {
  try {
    // connect to database
    await connect();

    // delete user with id
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    throw new Error(`Could not delete user:${error}`);
  }
}
