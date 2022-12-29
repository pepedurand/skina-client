import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
} from "@chakra-ui/react";

interface AdminEditItemProps {
  textOrValue: string;
  isDescription?: boolean;
}

export const EditItemText = ({
  textOrValue,
  isDescription,
}: AdminEditItemProps) => {
  return (
    <Editable defaultValue={textOrValue}>
      <EditablePreview />
      {isDescription ? <EditableTextarea /> : <EditableInput />}
    </Editable>
  );
};
