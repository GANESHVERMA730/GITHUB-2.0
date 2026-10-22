const mongoose = required("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  repositories: [
    {
      default: [],
      type: Schema.Types.ObjectID,
      ref: "Repository",
    },
  ],
  followedUsers: [
    {
      default: [],
      type: Schema.Types.ObjectID,
      ref: "User",
    },
  ],
  StarRepos: [
    {
      default: [],
      type: Schema.Types.ObjectID,
      ref: "Repository",
    },
  ],
});

const User = mongoose.model("User", UserSchema);

export default User;