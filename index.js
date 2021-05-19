/*
****************** BLOGS CRUD ********************
1. CREATE → POST http://localhost:3001/blogs (+ body)
2. READ → GET http://localhost:3001/blogs (+ optional query parameters)
3. READ → GET http://localhost:3001/blogs/:id
4. UPDATE → PUT http://localhost:3001/blogs/:id (+ body)
5. DELETE → DELETE http://localhost:3001/blogs/:id
*/

import express from 'express'; // 3rd party module
import fs from 'fs'; // core module
import { fileURLToPath } from 'url'; // core module
import { dirname, join } from 'path'; // core module
import uniqid from 'uniqid'; // 3rd party module
import { validationResult } from 'express-validator';
import createError from 'http-errors';

const blogsRouter = express.Router();

const blogsJSONPath = join(
	dirname(fileURLToPath(import.meta.url), 'blogs.json')
);

blogsRouter.post('/', (req, res, next) => {
	try {
		const newBlog = { ...req.body, createdAt: new Date(), _id: uniqid() };
		const blogs = JSON.parse(fs.readFileSync(blogsJSONPath).toString());
		blogs.push(newBlog);
		fs.writeFileSync(blogsJSONPath, JSON.stringify(blogs));
		res.status(201).send(newBlog._id);
	} catch (error) {
		next(error);
	}
});

blogsRouter.get('/', (req, res, next) => {
	try {
		const content = fs.readFileSync();
	} catch (error) {}
});

blogsRouter.get('/:id', (req, res, next) => {
	try {
	} catch (error) {}
});

blogsRouter.put('/:id', (req, res, next) => {
	try {
	} catch (error) {}
});
blogsRouter.delete('/:id', (req, res, next) => {
	try {
	} catch (error) {}
});
export default blogsRouter;
