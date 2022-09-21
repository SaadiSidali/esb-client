import { Avatar, Center, Input } from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAppSelector } from "../utils/hooks";

interface uploadFileProps {
  url: string | undefined;
}

export const UploadFileInput = ({ url }: uploadFileProps) => {
  const authUser = useAppSelector((x) => x.auth.value.user);

  const [formValues, setFormValues] = useState<{ image: File | null }>({
    image: null,
  });
  const [imgUrl, setImgUrl] = useState("");
  const token = useAppSelector((x) => x.auth.value.token);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormValues({
      image: event.target.files ? event.target.files[0] : null,
    });
  };

  useEffect(() => {
    setImgUrl(`/${url}`);
    const loadPic = async () => {
      if (formValues.image) {
        const urlData = URL.createObjectURL(formValues.image);
        setImgUrl(urlData);
        handleSubmit();
      }
    };
    loadPic();
  }, [formValues.image]);

  const handleSubmit = async () => {
    const formData = new FormData();
    formValues.image && formData.append("file", formValues.image);

    const response = await axios.post(
      "http://localhost:8000/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  };

  return (
    <Center>
      <Avatar
        size={"2xl"}
        background={"blue.600"}
        icon={<BsPerson />}
        position={"relative"}
        src={authUser?.imgUrl}
      >
        <Input
          placeholder="John"
          type="file"
          height={"100%"}
          width={"100%"}
          opacity={0}
          position={"absolute"}
          accept={"image/*"}
          onChange={handleImageChange}
        />
      </Avatar>
    </Center>
  );
};
