import { Button, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import { PiUserCircleDashedFill, PiUserFocusBold } from "react-icons/pi";
import { useState } from "react";
import * as _ from "lodash";
import { useProfile } from "../../hooks/profile/useProfile";

export const Settings = () => {
  const {
    filePickerRef,
    unSavedUserProfile,
    userProfile,
    handleSaveProfile,
    handleChangeProfilePhoto,
    handleDeleteProfilePhoto,
    handleCancel,
    form,
  } = useProfile();

  return (
    <>
      <div className="pt-20 m-8 w-full h-full p-4">
        <div className="relative h-36">
          <div className="absolute inset-0 bg-cover bg-center">
            <img
              className="w-full h-40 p-1 object-cover overflow-hidden rounded-sm"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIOQxwHTi6kPCBDdQ4l13F2zSqe5ExTZe9JQ&s"
              alt="Cover-photo"
            />
          </div>
          <img
            src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"
            alt="Profile Picture"
            className="absolute bottom-0 left-20 transform -translate-x-1/2 translate-y-1/2 rounded-full overflow-hidden w-24 h-24 border border-solid border-gray-300"
          />
        </div>
        <div className="flex gap-3 justify-end border-0 border-b py-5 border-solid border-gray-200">
          <Button
            disabled={
              (_.isEqual(userProfile, unSavedUserProfile) && !form.dirty) ||
              form.isSubmitting
            }
            onClick={() => {}}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            disabled={
              (_.isEqual(userProfile, unSavedUserProfile) && !form.dirty) ||
              form.isSubmitting
            }
            onClick={() => {}}
            loading={form.isSubmitting}
          >
            Save
          </Button>
        </div>

        <div className="flex items-center gap-8 w-full border-0 border-b py-5 border-solid border-gray-200">
          <p className="text-gray-700 text-sm font-medium min-w-[20rem]">
            Name
          </p>
          <div>
            <Input
              placeholder="Name"
              className="placeholder:text-gray-500"
              type="text"
              name="name"
              value={form.values.name}
              onChange={form.handleChange}
              status={(form.errors.name && "error") || undefined}
            />
            {form.errors.name && form.touched.name && (
              <Typography className="text-xs text-error-500">
                {form.errors.name}
              </Typography>
            )}
          </div>
        </div>
        <div className="flex items-center gap-8 w-full border-0 border-b py-5 border-solid border-gray-200">
          <p className="text-gray-700 text-sm font-medium min-w-[20rem]">
            Email
          </p>
          <div>
            <Input
              placeholder="Email"
              className="placeholder:text-gray-500"
              type="text"
              name="email"
              disabled
              value={"sanjeev@gmail.com"}
            />
          </div>
        </div>

        <div className="flex items-center gap-8 border-0 border-b py-5 border-solid border-gray-200">
          <div className=" min-w-[20rem]">
            <p className="text-gray-700 text-sm font-medium">Profile photo</p>
            <p className="text-gray-600 text-sm">
              This will be displayed on your profile.
            </p>
          </div>
          <div className="flex justify-between min-w-[44rem]">
            <div className="my-3 flex justify-center items-center rounded-full overflow-hidden w-24 h-24 border border-solid border-gray-300">
              {(unSavedUserProfile?.profilePhoto && (
                <img
                  src={unSavedUserProfile?.profilePhoto}
                  alt="Company Logo"
                  width={"100%"}
                />
              )) || (
                <PiUserCircleDashedFill className="text-gray-600" size={100} />
              )}
            </div>
            <div className="flex gap-3">
              <p
                className="font-semibold text-sm cursor-pointer text-gray-600"
                onClick={handleDeleteProfilePhoto}
              >
                Delete
              </p>
              <p
                className="font-semibold text-sm cursor-pointer text-primary-700"
                // onClick={() => {
                //   filePickerRef.current.click();
                // }}
              >
                Update
              </p>
            </div>

            <input
              type="file"
              className="hidden"
              ref={() => {}}
              accept={"image/*"}
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
    </>
  );
};
