# Full-Stack Assessment Task

## PLAN

**Learning Objectives:**

1.  Learn Nest.js from scratch.
2.  Learn GraphQL in detail.
3.  Gain proficiency in end-to-end (E2E) testing using Cypress or Playwright.

**Learning Phase**

- Spend the initial period focused on learning Nest.js.
- Follow the official Nest.js documentation and tutorials.

**Backend Development**

- Dive into GraphQL.
- Learn more about GraphQL schemas, resolvers, and queries.
- Check the current commit convention in the repository for commit consistency.
- Add mutations for adding and deleting books.
- Write unit tests for the implemented endpoints.
- Test all endpoints for functionality.
- Implement custom error handling middleware and return informative responses for better error management

**Frontend Development**

- Research and gather inspiration for the book collection display page.
- Plan the UI/UX for adding and deleting books.
- Consider using a UI component library (e.g., Material-UI) for consistent styling.
- Plan the modular structure of React components for reusability.
- Explore strategies for caching API data and handling a potentially large number of books efficiently.
- Create modular React components for book display, book add, and delete.
- Write unit tests for React components.
- Test the UI on multiple screen resolutions for responsiveness
- Add error page in case user tries to visit some page that doesn't exist

**Optional E2E Testing**

- If time permits, learn more about E2E testing.
- Add end-to-end tests using Cypress or Playwright.
- Write E2E tests to cover critical user interactions and scenarios.
- Ensure E2E tests validate the entire application flow.

**General Considerations:**

- Keep an eye on performance, accessibility and SEO. Use Lighthouse or similar tool for measuring those core web aspects.
- Keep an eye on the backend endpoints and report any issues if data retrieval is slow. Consider using database that would suit better for this use case.

## Objective

Create a simple full-stack web application to manage a collection of books. The backend should be built using NestJS and expose a GraphQL API for basic CRUD operations. The frontend should be built using NextJS and React.

## Backend Requirements

1. **NestJS**: Use NestJS to create your backend service.
2. **GraphQL**: Implement a GraphQL API with the following capabilities:
   - Query to fetch a list of books with their details (title, author).
   - Mutations to add and delete a book.
3. **Database**: Use an in-memory database or a simple array to store the data.
4. **Planning**: Before coding, jot down a brief plan outlining your approach. Include this in your README.

## Frontend Requirements

1. **NextJS and React**: Create a simple frontend to interact with your GraphQL API.
2. **List of Books**: Display a list of books with their details (title, author).
3. **CRUD Operations**: Implement UI elements to add and delete a book.

## GitHub Requirements

1. **Repository**: Create a GitHub repository for this project.
2. **Commits**: Make regular commits to show the progression of your work.

## Documentation

1. **Planning**: Include your initial plan as part of your submission.
2. **Code Comments**: Add inline comments for complex or non-intuitive parts of your code.
3. **README**: Include a README file detailing how to set up and run your project.

## Testing

1. **Unit Tests**: Write at least one unit test for your backend logic.

## Bonus Points

1. **E2E Tests**: Write end-to-end tests using either Cypress or Playwright.
2. **Attention to UI**: Show attention to detail in the UI, such as responsive design or smooth animations.

---

## Evaluation Criteria

1. **Functionality**: Does the application perform the required CRUD operations?
2. **Code Quality**: Is the code modular, readable, and adheres to best practices?
3. **GraphQL Implementation**: Is the GraphQL API well-designed?
4. **Frontend**: Does the frontend provide display the info? Is the code well-organized? Does the UI function?
5. **Git/GitHub**: Do the commits make sense? Is the repository well-organized? Can we follow along with the progress?
6. **Planning**: Was the plan well thought out? Can others follow the plan and understand the steps?
7. **Documentation**: Is the code well-documented, both inline and in the README?
8. **Testing**: Is the unit test well-written and does it cover an essential part of the application?

## Resources

1. [NestJS Documentation](https://docs.nestjs.com/)
2. [GraphQL in NestJS](https://docs.nestjs.com/graphql/quick-start)
3. [NextJS Documentation](https://nextjs.org/docs)
