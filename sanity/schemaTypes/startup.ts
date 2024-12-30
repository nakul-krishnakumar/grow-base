import { defineField, defineType } from "sanity";

export const startup = defineType({
    name: 'startup',
    title: 'Startup',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'   // sanity will auto-generate slug based on the title
            }
        }),
        defineField({
            name: 'author',
            type: 'reference',
            to: { type: 'author' } // this field will reference a Type of id 'author'
        }),
        defineField({
            name: 'views',
            type: 'number'
        }),
        defineField({
            name: 'description',
            type: 'string'
        }),
        defineField({
            name: 'category',
            type: 'string',
            validation: (Rule) => Rule.min(1).max(20).required().error("Please enter a category"),
        }),
        defineField({
            name: 'image',
            type: 'url',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'pitch',
            type: 'markdown' 
            // 'markdown' custom type and requires a module sanity-plugin-markdown, 
            // install it and add it to sanity.config.ts
        }),
    ],
    initialValue: {
        views: 0,
    }
})