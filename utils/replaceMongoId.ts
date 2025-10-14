/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from "mongoose";

const replaceMongoIdInArray = <T extends { _id: { toString(): string } }>(array: T[]) => {
  const mappedArray = array.map((item) => {
    return {
      id: item._id.toString(),
      ...item,
    }
  }).map(({ _id, ...rest }) => rest);

  return mappedArray;
}

const replaceMongoIdInObject = <T extends { _id: { toString(): string } }>(obj: T) => {
  const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };
  return updatedObj;
}


export { replaceMongoIdInArray, replaceMongoIdInObject };