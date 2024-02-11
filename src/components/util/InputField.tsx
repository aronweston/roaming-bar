import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

export default function InputField({ control, name, placeholder }: any) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormControl>
            <Input {...field} placeholder={placeholder} error={!!fieldState?.error?.message} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
