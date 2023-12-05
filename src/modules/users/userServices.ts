import { Tuser } from "./user.interface";
import { UserModel } from "./user.model";

const creatUser = async (data: Tuser) => {
  const result = await UserModel.create(data);
  return result;
};

const getUser = async () => {
  const result = await UserModel.find()
  return result;
};

const getSingleUser = async (id: string) => {
    const result = await UserModel.findOne({ _id: { $eq: id } });
    return result;
}

const deleteUser = async (id: string) => {
  const result = await UserModel.deleteOne({ _id: id });
  return result;
};

const updateUser = async (id: string, data: Partial<Tuser>) => {
    const result = await UserModel.updateOne(
      { _id: { $eq: id } },
      { $set: data }
    );
    return result;
}

//export all the services
export const USerServices = {
    creatUser,
    getUser,
    getSingleUser,
    deleteUser,
    updateUser,
}
