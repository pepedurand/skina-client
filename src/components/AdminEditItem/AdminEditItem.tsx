import {
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
} from "@chakra-ui/react";

interface AdminEditItemProps {
  textOrValue: string;
  isDescription?: boolean;
  isCategoryCard?: boolean;
}

export const AdminEditItem = ({
  textOrValue,
  isDescription,
  isCategoryCard,
}: AdminEditItemProps) => {
  return (
    <Editable
      textAlign={isCategoryCard ? "center" : "left"}
      defaultValue={textOrValue}
    >
      <EditablePreview />
      {isDescription ? <EditableTextarea /> : <EditableInput />}
    </Editable>
  );
};
