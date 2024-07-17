import mongoose from "mongoose";;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique:true,
    min:3,
    max:20
  },
  email: {
    type: String,
    required:true,
    unique: true,
    min: 6
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  img: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
},{timestamps:true});

// export const user =

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required:true,
  },
  img: {
    type: String,
  },
  userId: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    unique: true,
  }
},{timestamps:true});