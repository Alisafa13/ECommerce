"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Fullname must be at least 2 characters.",
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "İnvalid Email Address",
  }),
  birthDate: z.string().refine(
    (date) => {
      const birtheDate = new Date(date);
      const age = new Date().getFullYear() - birtheDate.getFullYear();
      return age >= 18;
    },
    {
      message: "İnvalid Email Address",
    }
  ),
  startDate: z.string().refine(
    (date) => {
      const startDate = new Date(date);
      return startDate >= new Date();
    },
    {
      message: "İnvalid Email Address",
    }
  ),
  gender: z
    .string()
    .refine((val) => ["Male", "Female", "Other"].includes(val), {
      message: "Please select a gender",
    }),
  jobType: z.array(z.enum(["Remote", "Hybrid", "Office"])).min(1, {
    message: "You must select at least one job type",
  }),
});
const RegisterPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      username: "",
      password: "",
      email: "",
      birthDate: "",
      startDate: "",
      gender: "",
      jobType: [],
    },
  });
  const JOB_TYPES = ["Remote", "Hybrid", "Office"] as const;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="py-10">
      {" "}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fullname</FormLabel>
                <FormControl>
                  <Input placeholder="Fullname" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="birthDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Birthdate</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Birthdate"
                    type="date"
                    {...field}
                    className="w-36"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Start Date"
                    type="date"
                    {...field}
                    className="w-36"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex"
                  >
                    {" "}
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="Male" id="gender-male" />
                      <Label htmlFor="r1">Male</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="Female" id="gender-female" />
                      <Label htmlFor="r1">Female</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="Other" id="gender-other" />
                      <Label htmlFor="r1">Other</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jobType"
            render={() => (
              <FormItem>
                <FormLabel>Job Type</FormLabel>
                <div className="flex flex-col gap-2">
                  {JOB_TYPES.map((job) => (
                    <FormField
                      key={job}
                      control={form.control}
                      name="jobType"
                      render={({ field }) => {
                        const isChecked = field.value?.includes(job);
                        return (
                          <FormItem
                            key={job}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={isChecked}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    field.onChange([
                                      ...(field.value || []),
                                      job,
                                    ]);
                                  } else {
                                    field.onChange(
                                      field.value?.filter(
                                        (value) => value !== job
                                      ) || []
                                    );
                                  }
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{job}</FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" >Submit</Button>
        </form>
        <div className="flex items-center space-x-5 mt-8">
          <Label>Allready an account? </Label>
          <Link href="/login">
            <Button variant="outline">Click here</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;
