import { useFormik } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup.string().required(),
});

export function useProfile() {
  const filePickerRef = useRef() as any;
  const [userProfile, setUserProfile] = useState({ name: "Sanjeev" });
  const [unSavedUserProfile, setUnSavedUserProfile] = useState({
    profilePhoto:
      "https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp",
  });
  const [selectedProfilePhoto, setSelectedProfilePhoto] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);

  const data = {};

  // const { data } = useQuery([AUTH_SERVICE_API_ROUTES.GET_PROFILE], () =>
  //     AuthService.getCurrentUser()
  //   );

  const form = useFormik({
    initialValues: {
      name: "sanjeev",
    },
    enableReinitialize: true,
    validationSchema: formSchema,
    onSubmit: () => {
      console.log(form.values);
    },
  });

  async function handleSaveProfile(values: { name: string }) {
    const { name } = values;
  }
  const handleChangeProfilePhoto = (e: any) => {
    if (filePickerRef.current.files[0]) {
      setUnSavedUserProfile((prevState: any) => ({
        ...prevState,
        profilePhoto: URL.createObjectURL(filePickerRef.current.files[0]),
      }));

      setSelectedProfilePhoto(filePickerRef.current.files[0]);
    }
  };

  const handleDeleteProfilePhoto = async () => {};
  const handleCancel = () => {
    // setUnSavedUserProfile({ ...userProfile });
    setSelectedProfilePhoto(null);
    form.resetForm();
  };

  return {
    filePickerRef,
    userProfile,
    unSavedUserProfile,
    handleSaveProfile: form.handleSubmit,
    handleChangeProfilePhoto,
    handleDeleteProfilePhoto,
    handleCancel,
    form,
  };
}
