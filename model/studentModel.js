import mongoose from "mongoose";
import studentsSchema from "../schema/studentsSchema.js";

const studentModel = mongoose.model("students", studentsSchema)

export default studentModel