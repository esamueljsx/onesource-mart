import React, { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  mobileNo: z.string().min(10, {
    message: "Mobile No must be at least 10 characters.",
  }),
  storeLocation: z.string(),
  queryType: z.string().min(1, {
    message: "Please select a query type.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  photo: z.any().optional(),
});

const ContactForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState("idle");
  const [fileName, setFileName] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobileNo: "",
      storeLocation: "",
      queryType: "",
      message: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      form.setValue("photo", e.target.files[0]);
    } else {
      setFileName("");
      form.setValue("photo", null);
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmissionStatus("loading");
    // Simulate a network request
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
    setSubmissionStatus("success");
  }

  if (submissionStatus === "success") {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-brand-red">Thank you!</h2>
        <p className="mt-2 text-lg text-gray-600">
          Your message has been sent successfully. We will get back to you
          shortly.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="container p-4 lg:p-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="col-span-full">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
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
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mobileNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile No</FormLabel>
                <FormControl>
                  <Input placeholder="+234 123 456 7890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="storeLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Store Location</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a store location" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="ikeja">Ikeja Store</SelectItem>
                    <SelectItem value="victoria-island">
                      Victoria Island Store
                    </SelectItem>
                    <SelectItem value="lekki">Lekki Store</SelectItem>
                    <SelectItem value="surulere">Surulere Store</SelectItem>
                    <SelectItem value="ajah">Ajah Store</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="queryType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Query Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select query type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="billing">Billing & Payments</SelectItem>
                    <SelectItem value="complaint">Complaint</SelectItem>
                    <SelectItem value="suggestion">Suggestion</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="col-span-full">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us what you need help with"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="photo"
            render={() => (
              <FormItem className="col-span-full">
                <FormLabel>Photo (Optional)</FormLabel>
                <FormControl>
                  <div className="space-y-2">
                    <Input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                      accept="image/*"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer inline-flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-brand-red hover:bg-brand-red/5 transition-colors bg-[#eee]/80"
                    >
                      <div className="text-center">
                        <svg
                          className="mx-auto h-8 w-8 text-text-black/70"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="mt-2 text-sm text-text-black/70">
                          <span className="font-medium text-brand-red">
                            Click to upload
                          </span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-text-black/70">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </label>
                    {fileName && (
                      <div className="flex items-center space-x-2 p-2 bg-green-50 border border-green-200 rounded-md">
                        <svg
                          className="h-4 w-4 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-green-700">
                          {fileName}
                        </span>
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="bg-brand-red/80 hover:bg-brand-red text-white w-full px-6 py-5 rounded-md col-span-full"
            disabled={submissionStatus === "loading"}
          >
            {submissionStatus === "loading" && (
              <Loader2 className="mr-2 size-4 animate-spin" />
            )}
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
