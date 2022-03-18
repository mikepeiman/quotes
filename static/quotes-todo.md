# TODOs for quotes app

* add sorting by author to UI
* add filtering by tag to UI
* add new quotes to localStorage along with stores and db
* add an edit icon to each quote that converts into editable form and updates stores, db, and localStorage on submit
* add UI control to display optional fields
* add an optional-display field for "verified" to indicate if a quote was researched as valid; checkbox + array of URLS + field for notes/comments
* get on the dgraph chat channel (Discord?) and ask for help solving my duplicate Authors in upsert operations
* add a "clear form" to AddQuote form which also clears ls currentQuote
* add a "delete" icon to DisplayQuotes component for each quote. Initially this removes only from stores and ls; later apply to each db
* add an "edit" action that converts any quote to an editable form, probably through DisplayQuotes component conditional rendering logic
* add hover effect for quotes, show action icons only on hover
* allow editing with single click on quote, or possibly single click activate styling, second click activate editing

## Broad ideas

* add an injunction statement in the production app, pointing to a page on CivilDiscourse.io, that commends people to be impeccable with the wording of quotes and to research their veracity, to improve the quality of human knowledge and truth-telling