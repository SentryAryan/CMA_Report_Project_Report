import { formDataType } from "@/app/create-project/page";
import { Tag } from 'lucide-react';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "../ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button";
import { MoveRight } from 'lucide-react';


type Props = {
  formData: formDataType;
  setFormData: Function;
  next: () => void;
};

export default function StepOne({ formData, setFormData, next }: Props) {
  return (
    <div className="w-full max-w-md flex flex-col">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email" ><Tag size={20} />Legal Business Name</FieldLabel>
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
      <div className="w-full flex justify-end">
        <Button onClick={next} className="mt-2 ">Next <MoveRight /></Button>
      </div>
    </div>
  );
}
