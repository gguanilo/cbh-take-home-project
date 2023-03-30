# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## TICKET BREAKDOWN
### Ticket 1: Add a new column to the Agents table
Description: Add a new field named "custom_id" to the Agents table in the database, where Facilities can save their own custom id for each Agent they work with.

Acceptance Criteria:

- A new "custom_id" field is added to the Agents table.
- Facilities can add/edit custom ids for each Agent.
- The custom id is unique to each Facility.
- The custom id is associated with the Agent's internal database id.

Time/effort estimate: 4 hours

Implementation details:

- Modify the Agents table schema to add the new "custom_id" field.
- Add a new endpoint to the API for Facilities to add/edit custom ids.
- Implement validation to ensure that custom ids are unique to each Facility.

### Ticket 2: Update getShiftsByFacility function to return custom ids
Description: Update the getShiftsByFacility function to return the custom id of each Agent, if one exists, instead of the internal database id.

Acceptance Criteria:

- The getShiftsByFacility function returns the custom id of each Agent, if one exists, instead of the internal database id.
- If a Facility has not set a custom id for an Agent, the internal database id is returned instead.

Time/effort estimate: 2 hours

Implementation details:

- Modify the getShiftsByFacility function to query the custom_id field in the Agents table when returning Agent metadata.

### Ticket 3: Update generateReport function to use custom ids
Description: Update the generateReport function to use the custom id of each Agent, if one exists, instead of the internal database id when generating reports.

Acceptance Criteria:

- The generateReport function uses the custom id of each Agent, if one exists, instead of the internal database id when generating reports.
- If a Facility has not set a custom id for an Agent, the internal database id is used instead.

Time/effort estimate: 3 hours

Implementation details:

- Modify the generateReport function to use the custom id field in the Agent metadata when generating reports.
### Ticket 4: Add validation to custom id field
Description: Add validation to the custom_id field to ensure it meets certain criteria.

Acceptance Criteria:

- The custom_id field can only contain alphanumeric characters.
- The custom_id field must be unique to each Facility.

Time/effort estimate: 2 hours

Implementation details:

- Add validation to the API endpoint for adding/editing custom ids to ensure that the custom_id field meets the required criteria.
- Implement a check to ensure that custom ids are unique to each Facility.

### Ticket 5: Update documentation to reflect custom id feature
Description: Update the user documentation to reflect the new custom id feature.

Acceptance Criteria:

- User documentation is updated to reflect the new custom id feature.
- The documentation explains how Facilities can add/edit custom ids for Agents and how they will be used in reports.

Time/effort estimate: 1 hour

Implementation details:

- Update the user documentation to include a section explaining the custom id feature and how to use it.
- Update any relevant screenshots or diagrams to reflect the new feature.