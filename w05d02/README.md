# W05D02 - Database Design

### To Do
- [x] Primary Keys/Foreign Keys
- [x] Naming Conventions
- [x] Data Types
- [x] Relationship Types
- [x] Design Concepts
- [x] Entity Relationship Diagrams
- [ ] Breakout: Convert 2 Spreadsheets [15 mins]
- [ ] Student Suggestion ERD(s)

### Primary Key
* Uniquely identify a particular record
* Must be unique within the table
* Can be any data type (always use Integers)
* Primary key stored in another table is called a Foreign Key
* PK and the FK MUST be the same data type

### Naming Conventions
* lowercase, snake_case
* Table names should always be plural (users, posts, tweets)
* PK: id
* FK: singular table name + `_id` (user_id, post_id)

### Data Type
* Data is cheap!
* varchar, text, integer, boolean
* phone numbers: varchar 5555555555
* postal codes: 90210, 00215 (varchar)
Safe Secure Storage on AWS S3

### Relationships
* One-to-one: 1 record in the 1st table is related to 1 record in the 2nd table
* One-to-many: 1 record in the 1st table is related to 1 or more records in the 2nd table
* Many-to-many: 1 or more records in the 1st table is related to 1 or more records in the 2nd table

### Dos and Don'ts
* Make fields required based on the initial save state of the record
* Intelligent default values! created_at timestamps NOW(), active boolean true
* Calculated fields! Don't use 'em!
* Custom functions are awesome!!!
* Try not to delete anything

### ERD Entity Relationship Diagrams
* 











### Breakout: Convert Two Spreadsheets
- [Gist with instruction](https://gist.github.com/andydlindsay/20e7305e853bad7b587f294b054cf8de)

### Student Suggestion:

### Useful Links
* [Database Normalization](https://en.wikipedia.org/wiki/Database_normalization)
* [Postgres Data Types](http://www.postgresqltutorial.com/postgresql-data-types/)
* [Relationship Types](http://etutorials.org/SQL/Database+design+for+mere+mortals/Part+II+The+Design+Process/Chapter+10.+Table+Relationships/Types+of+Relationships/)
* [draw.io (online ERD)](https://www.draw.io/)
