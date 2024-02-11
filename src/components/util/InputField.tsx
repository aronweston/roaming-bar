import { Checkbox } from "../ui/checkbox";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

export function CheckBoxField({
  control,
  name,
  info,
  title,
}: {
  control: any;
  name: string;
  info: string;
  title: string;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormControl>
            <div className="items-top flex space-x-2">
              <Checkbox id={name} error={!!fieldState?.error?.message} />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor={name}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {title}
                </label>
                <p className="text-sm text-muted-foreground">{info}</p>
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

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
