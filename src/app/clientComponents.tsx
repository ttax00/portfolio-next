"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

export function DarkModeToggle() {
	const [dark, setDark] = useState(false);
	return <div className="ml-4">
		<Switch id="dark-mode-switch" checked={dark} onCheckedChange={(checked) => {
			document.documentElement.className = checked ? "dark" : "";
			setDark(checked);
		}} />
	</div>;
}


export function ContactForm() {
	const schema = z.object({
		name: z.string().min(2, "Your name must be at least 2 characters."),
		email: z.string().email("You must enter a valid email"),
		message: z.string().min(2, "Please write more than 2 characters"),
	});

	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema)
	});

	function onSubmit(values: z.infer<typeof schema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return <Form {...form}>
		<form onSubmit={form.handleSubmit(onSubmit)} action="" className="flex flex-col space-y-1 mt-6">
			<FormField
				control={form.control}
				name="name"
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<Input placeholder="Name" {...field} />
						</FormControl>
						<FormDescription>{form.formState.errors.name?.message ?? ""}</FormDescription>
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="email"
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<Input placeholder="Email" {...field} />
						</FormControl>
						<FormDescription>{form.formState.errors.email?.message ?? ""}</FormDescription>
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="message"
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<Textarea
								placeholder="Tell me a little bit about yourself"
								className="bg-white"
								{...field}
							/>
						</FormControl>
						<FormDescription>{form.formState.errors.message?.message ?? ""}</FormDescription>
					</FormItem>
				)}
			/>
			<Button type="submit">Submit</Button>
		</form>

	</Form>;
}