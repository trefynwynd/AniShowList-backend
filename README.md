# AniShowList (backend edition)


## Introduction
AniShowList is a PERN stack application that would allow you to search for your favorite shows. With an account, you are able to favorite these shows and put them on your watch list.

This application is built to work with [this frontend repository](https://github.com/trefynwynd/AniShowList-frontend).

This is also the third of four projects for [General Assembly](https://generalassemb.ly)'s SEIR921 cohort.

<p>&nbsp;</p>

The Team:
* Jeffrey L. Alejandria
* [Martin Cruz](https://github.com/martinacruz)
* [Edward Gonzales](https://github.com/edwardglez)

<p>&nbsp;</p>

## Project Management
* [Project Board](https://trello.com/b/kdB8JAqb/project-3)

<p>&nbsp;</p>

## Technologies Used
The backend consists of the following technologies:
* Node.js
* Express.js
* Express-Session
* PostgreSQL
* Sequelize
* Passport
* bcrypt

We decided to use the [Jikan API](https://jikan.moe/) for our REST API instead of our original API (AniList) due to the fact it was GraphQL-based.

<p>&nbsp;</p>

## Tables
We are using two 1:M relationship tables to have separate favorite and watching lists. The following tables are what we used for our database:


### user:
| Attribute | Type |
|-----------|------|
| id (Pk) | INTEGER; Auto created by PostGres |
| user | STRING |
| name | STRING |
| password | STRING |

<p>&nbsp;</p>

### userShow:
| Attribute | Type |
|-----------|------|
| userId (fk) | INTEGER |
| apiId | INTEGER |
| image_url | STRING |

<p>&nbsp;</p>

### userWatch:
| Attribute | Type |
|-----------|------|
| userId (fk) | INTEGER |
| apiId | INTEGER |
| image_url | STRING |
| watching | STRING |



<p>&nbsp;</p>

## Unsolved Problems:
During the resubmittal process, we commented out the watching attribute (at the last minute) from the userWatch table to complete the app. This attribute would allow the show not only be in a watching list, but also be set into a specific watching status. By just having a show be in the userWatch table accomplished our 3 model usage requirement.

  * Though this isn't necessarily an unsolved problem, the way we were planning to use the watching attribute feels like it is.

<p>&nbsp;</p>

## Future features:
* Re-enabling the watching attribute

<p>&nbsp;</p>


###### Third edit (2020.12.03)

###### Second edit (2020.11.29)

###### First edit (2020.11.17)