import { Schema, Model, model } from "mongoose";
import { CONSTANTS } from "@configs";
import { Types } from "mongoose"
import PostI from "@interfaces/post";

const userSchema: Schema<any> = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    media: {
      type: String,
      default: null
    }
  },
  {
    timestamps: true
  }
);

const COLLECTION_NAME = CONSTANTS.COLLECTIONS.POST;
const postModel: Model<any> = model<PostI>(COLLECTION_NAME, userSchema, COLLECTION_NAME);
postModel.createCollection();

export { postModel };
