import React from "react";
import {
 FormControl,
 FormDescription,
 FormField,
 FormItem,
 FormLabel,
 FormMessage,
} from "../ui/form";
import { FieldValues, Control, Path } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";

interface FormFieldProps<T extends FieldValues> {
 control: Control<T>;
 name: Path<T>;
 label: string;
 placeholder?: string;
 type?: "text" | "email" | "password";
 items: { id: string; label: string }[];
}

const CheckBoxFormField = <T extends FieldValues>({
 control,
 name,
 label,
 items,
}: FormFieldProps<T>) => {
 return (
  <FormField
   control={control}
   name={name}
   render={() => (
    <FormItem>
     <div className="mb-4">
      <FormLabel className="text-base">Sidebar</FormLabel>
      <FormDescription>
       Select the items you want to display in the sidebar.
      </FormDescription>
     </div>
     <FormField
      control={control}
      name={name}
      render={({ field }) => (
       <FormItem>
        <FormLabel className="text-base">Sidebar</FormLabel>
        <FormControl>
         <Checkbox
          checked={field.value}
          onCheckedChange={field.onChange}
         />
        </FormControl>
        <FormMessage />
       </FormItem>
      )}
     />
     <FormMessage />
    </FormItem>
   )}
  />
 );
};

export default CheckBoxFormField;