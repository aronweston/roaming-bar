import { Control, FieldValues, Path } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { addHours, differenceInHours, format, getHours } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { TimePickerInput } from "../ui/time-picker";
import { ChangeEventHandler, useState } from "react";

interface BaseField<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
}

interface CheckBoxFieldProps<T extends FieldValues> extends BaseField<T> {
  info: string;
  title: string;
}

interface InputFieldProps<T extends FieldValues> extends BaseField<T> {
  placeholder: string;
}

interface DateFieldProps<T extends FieldValues> extends BaseField<T> {
  placeholder?: string;
}

export function DateField<T extends FieldValues>({
  control,
  name,
  placeholder,
}: DateFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const error = !!fieldState?.error?.message;
        return (
          <FormItem className="flex flex-col space-y-0">
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full rounded-full p-7 text-left font-normal",
                      !field.value && "text-muted-foreground",
                      error && "border-destructive-foreground"
                    )}>
                    {field.value ? format(field.value, "PPP") : <span>{placeholder}</span>}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

export function CheckBoxField<T extends FieldValues>({
  control,
  name,
  info,
  title,
}: CheckBoxFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ fieldState }) => (
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

interface TimeRangeProps<T extends FieldValues> extends BaseField<T> {
  startTime: string;
  endTime: string;
}

const noEventsPastMidnight = "We can not offer events past 12:00am due to licence restrictions.";
const noEventsBeforeNine = "Must be after 9am";
const fourHoursBetween = "Events must be at least 4 hours long";

export function TimeRange<T extends FieldValues>({
  control,
  name,
  startTime,
  endTime,
}: TimeRangeProps<T>) {
  const [start, setStart] = useState<string>(startTime);
  const [end, setEnd] = useState<string>(endTime);

  const [startMessage, setStartMessage] = useState<string | null>(null);
  const [endMessage, setEndMessage] = useState<string | null>(null);

  const handleStart = (time: string) => {
    const [hours, minutes] = time.split(":").map((str) => parseInt(str, 10));
    const [endHours, endMinutes] = end.split(":").map((str) => parseInt(str, 10));
    if (hours >= endHours) return;
    if (hours < 9) return setStartMessage(noEventsBeforeNine);

    const diff = hours - endHours;
    const eventsFourHoursBetween = +diff <= -4;
    if (!eventsFourHoursBetween) return setStartMessage(fourHoursBetween);

    setStartMessage(null);
    setStart(time);
  };

  const handleEnd = (time: string) => {
    const [hours, minutes] = time.split(":").map((str) => parseInt(str, 10));
    const [startHours, startMinutes] = start.split(":").map((str) => parseInt(str, 10));
    if (hours <= startHours) return;
    if (hours === 0) return setEndMessage(noEventsPastMidnight);

    const diff = startHours - hours;
    const eventsFourHoursBetween = +diff <= -4;

    console.log(hours, startHours, eventsFourHoursBetween);
    if (!eventsFourHoursBetween) return setEndMessage(fourHoursBetween);

    setEndMessage(null);
    setEnd(time);
  };
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormControl>
            <>
              <div className="h-stack items-center">
                <Input {...field} value={`${start} to ${end}`} hidden />

                <Input
                  type="time"
                  placeholder="Start time"
                  value={start}
                  onChange={(e) => handleStart(e.target.value)}
                  error={!!fieldState?.error?.message}
                />

                <span>to</span>

                <Input
                  type="time"
                  placeholder="End time"
                  value={end}
                  onChange={(e) => handleEnd(e.target.value)}
                  error={!!fieldState?.error?.message}
                />

                {/* <span>{-totalHours}</span> */}
              </div>

              <div className="v-stack">
                {startMessage && <p className="pl-6 text-xs">{startMessage}</p>}
                {endMessage && <p className="pl-6 text-xs">{endMessage}</p>}
              </div>
            </>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function InputField<T extends FieldValues>({
  control,
  name,
  placeholder,
}: InputFieldProps<T>) {
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
