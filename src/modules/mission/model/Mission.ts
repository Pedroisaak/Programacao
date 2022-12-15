import mongoose from "mongoose";

const MissionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  asset: { type: String, require: true }
},
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const MissionModel = mongoose.model("Mission", MissionSchema);
export { MissionModel };