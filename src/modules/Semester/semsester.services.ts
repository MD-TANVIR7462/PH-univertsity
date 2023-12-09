import { TSemester } from "./Semester.interface";
import { SemesterModel } from "./semester.model";

const cresteSemesterInDB = async (data: TSemester) => {
  const { name, year } = data;

  //validate exixting user in DB
  const validatExistingUser = await SemesterModel.findOne({
    name: { $eq: name },
    year: { $eq: year },
  });

  //if semester not exist the create new one
  if (!validatExistingUser) {
    const result = await SemesterModel.create(data);
    return result;
  } else {
    const result = {
      success: false,
      message: "Semester already exists in this year",
    };
    return result;
  }
};
const getSemesterInDb = async () => {
  const result = await SemesterModel.find({}, { name: 1 });
  return result;
};

const getSingleSemesterInDb = async (id: string) => {
  const result = await SemesterModel.findOne({ _id: { $eq: id } });
  return result;
};

export const SemesterServices = {
  cresteSemesterInDB,
  getSemesterInDb,
  getSingleSemesterInDb,
};
