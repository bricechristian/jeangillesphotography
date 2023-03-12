import { defineField, defineType } from "sanity";

export const photographyGridItem = defineType({
	type: "object",
	name: "photographyGridItem",
	title: "Photography Grid Item",
	fields: [
		defineField({
			type: "string",
			name: "name",
			title: "Name",
			description: "Used for naming purposes",
            validation: Rule => Rule.required()
		}),
		defineField({
			title: "Width",
			name: "width",
			type: "string",
            validation: Rule => Rule.required(),
			options: {
				list: [
					{ title: "1/4", value: "1/4" },
					{ title: "3/8", value: "3/8" },
					{ title: "1/2", value: "1/2" },
					{ title: "5/8", value: "5/8" },
					{ title: "3/4", value: "3/4" },
					{ title: "Full", value: "Full" },
				],
			},
		}),
		defineField({
			name: "photography",
			type: "object",
			type: "reference",
			to: [{ type: "photography" }],
            validation: Rule => Rule.required(),
            options: {
                disableNew: true
            }
		}),
	],
});
