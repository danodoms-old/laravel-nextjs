"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Bold, Italic, Underline } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const scheduleItemSchema = z.object({
  startTime: z.string(),
  endTime: z.string(),
  days: z.array(z.string()),
});

const formSchema = z.object({
  subjectName: z.string(),
  subjectCode: z.string(),
  instructor: z.string().optional(),
  scheduleItem: scheduleItemSchema,
});

export default function CreateSchedulePage() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subjectName: "",
      subjectCode: "",
      instructor: "",
      scheduleItem: {},
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="flex h-dvh p-4">
      <Form {...form} className="flex -auto">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField<
            z.infer<typeof formSchema>,
            keyof z.infer<typeof formSchema>
          >
            control={form.control}
            name="subjectName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Science/Math/History" {...field} />
                </FormControl>
                <FormDescription>
                  This is the name of your subject.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField<
            z.infer<typeof formSchema>,
            keyof z.infer<typeof formSchema>
          >
            control={form.control}
            name="instructor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instructor</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is the name of your s.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <ToggleGroup
            variant="outline"
            type="multiple"
            className="flex flex-auto flex-wrap"
          >
            <ToggleGroupItem value="sunday" aria-label="Toggle sunday">
              SUN
            </ToggleGroupItem>
            <ToggleGroupItem value="monday" aria-label="Toggle monday">
              MON
            </ToggleGroupItem>
            <ToggleGroupItem value="tuesday" aria-label="Toggle tuesday">
              TUE
            </ToggleGroupItem>
            <ToggleGroupItem value="wednesday" aria-label="Toggle wednesday">
              WED
            </ToggleGroupItem>
            <ToggleGroupItem value="thursday" aria-label="Toggle thursday">
              THU
            </ToggleGroupItem>
            <ToggleGroupItem value="friday" aria-label="Toggle friday">
              FRI
            </ToggleGroupItem>
            <ToggleGroupItem value="saturday" aria-label="Toggle saturday">
              SAT
            </ToggleGroupItem>
          </ToggleGroup>

          <Button type="submit">Add Schedule</Button>
        </form>
      </Form>
    </section>
  );
}
