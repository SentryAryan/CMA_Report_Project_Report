import { formDataType } from "@/app/create-project/page";
import { ClipboardList } from 'lucide-react';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "../ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button";
import { MoveLeft, MoveRight } from 'lucide-react';

type Props = {
  formData: formDataType;
  setFormData: Function;
  next: () => void;
  back: () => void;
};

export default function StepTwo({
  formData,
  setFormData,
  next,
  back,
}: Props) {
  return (
    <div className="w-full max-w-md ">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email" ><ClipboardList size={20} />Business Type</FieldLabel>
            <Input
              id="email"
              type="text"
              placeholder="Max Leiter"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </Field>
        </FieldGroup>
      </FieldSet>
      <div className="w-full flex justify-between">
        <Button onClick={back} className="mt-2 "><MoveLeft /> Previous </Button>
        <Button onClick={next} className="mt-2 ">Next <MoveRight /></Button>
      </div>
    </div>

  );
}
