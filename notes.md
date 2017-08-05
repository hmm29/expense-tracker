Clarification questions and answers.

1.    I understand from deliverable 5b that admin users can read all saved expenses, including those which they don’t own. But does this necessarily mean that they can view all other users’ reports? It's just that they see a larger, fully inclusive collection of expenses in the app than regular users do, right?

Here it makes more sense to have admins only be able to see the total list of expenses rather than all reports and expenses.
I personally want the regular user experience and admin user experience to be as similar as possible aside from the fac tthat admins get access to all of the expense items in the collection.

2.    I’m basically trying to figure out what the flow looks like if an admin is trying to read a particular user’s list of expenses. Does the admin user go to a list of all expenses and then apply a search filter for a particular user, or should he/she be able to see a list of all users and then view expenses for that particular user? I’m thinking the former, as the spec doesn't mention that an admin can view a list of all users, just a list of all expenses.

According to the spec, the admin user doesn't need to see a list of all users. He or she can maybe look up expenses by user but I think that having a page for all users isn't necessary. If we did have it we'd probably need to come up with a UI for showing expenses that belong to a particular user.

3.    I want to better understand what parts of the admin user experience and regular user experience are the same and which parts are different. I’m thinking that when both an admin user and regular user logs in, it immediately takes them to a list of their reports. But when either one navigates to the expenses view, regular users only see their expenses and admin users see all expenses. Does this sound like it makes sense in terms of the user flow?

I think this makes sense.

4.    How exactly does a user generate a report? This is unclear to me. Do they add expenses and then choose to save them as a group? Or do they generate a new report and then add expenses to that individual report? Or is a report automatically generated based on the aggregation criteria (e.g. all expenses for a particular week are automatically grouped into a new report)?

I've decided that reports will be generated automatically depending on aggregation criteria. I think this makes most sense so that reports with duplicate expenses won't be created.

5.    How much does UI design matter for this project? To what extent will elegance of the front-end design be factored into the evaluation?

Pay attention to this if you want to work in a front-end role.

6.    Should I include a sign-up flow so that new users/testers can create new accounts from scratch? Or do you just want credentials for a demo regular account and demo admin account? Or do you want both?

Demo accounts are fine.

7.    Relationships between models: can an expense belong only to one report or more than one?

Expenses should belong to only one report.

8.    Something tells me that this app needs to handle pagination of results too since there could potentially be hundreds or thousands of expenses....

Indeed.

9.    If I understand correctly, reports show the total amount spent for a particular week by that user. What should happen if a user tries to create more than one report for a given week? Is this allowed by the system?

This shouldn't be allowed by the system, which is why reports will be generated automatically.

10.    Am I able to learn more about the use cases you’re going to test? Aside from the basic ones such as adding a new expense or testing that user permissions criteria are met, what are some more obscure test cases you think I should factor in?

Test for everything in the spec as well as conditions such as not being able to create duplicate reports, handling invalid filter criteria, and also user sessions/what happens when browser closes mid-session.
