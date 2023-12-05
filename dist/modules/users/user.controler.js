"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSigleUserCl =
  exports.deleteSigleUserCl =
  exports.GetSigleUserCl =
  exports.GetUserCl =
  exports.createUserCl =
    void 0;
const userServices_1 = require("./userServices");
const createUserCl = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const userData = req.body;
      const result = yield userServices_1.USerServices.creatUser(userData);
      if (result) {
        res.status(200).json({
          success: true,
          message: "User created successfully",
          data: result,
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: err,
      });
    }
  });
exports.createUserCl = createUserCl;
const GetUserCl = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const result = yield userServices_1.USerServices.getUser();
      if (result) {
        res.status(200).json({
          success: true,
          message: "User find successfully",
          data: result,
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: err,
      });
    }
  });
exports.GetUserCl = GetUserCl;
const GetSigleUserCl = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { id } = req.params;
      const result = yield userServices_1.USerServices.getSingleUser(id);
      if (result) {
        res.status(200).json({
          success: true,
          message: "User fatched successfully",
          data: result,
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: err,
      });
    }
  });
exports.GetSigleUserCl = GetSigleUserCl;
const deleteSigleUserCl = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { id } = req.params;
      const result = yield userServices_1.USerServices.deleteUser(id);
      if (result) {
        res.status(200).json({
          success: true,
          message: "User delete successfully",
          data: result,
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: err,
      });
    }
  });
exports.deleteSigleUserCl = deleteSigleUserCl;
const UpdateSigleUserCl = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { id } = req.params;
      const data = req.body;
      const result = yield userServices_1.USerServices.updateUser(id, data);
      if (result) {
        res.status(200).json({
          success: true,
          message: "User updated successfully",
          data: result,
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: err,
      });
    }
  });
exports.UpdateSigleUserCl = UpdateSigleUserCl;
