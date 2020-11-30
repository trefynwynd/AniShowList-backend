# AniShowList (backend edition)


## Introduction
AniShowList is a PERN stack application that would allow you to search for your favorite shows. With an account, you are able to favorite these shows and put them on your watch list.

This application is built to work with [this repository](https://github.com/trefynwynd/AniShowList-frontend).

This is also the third of four projects for [General Assembly](https://generalassemb.ly)'s SEIR921 cohort.

<p>&nbsp;</p>

The Team:
* Jeffrey L. Alejandria
* [Martin Cruz](https://github.com/martinacruz)
* [Edward Gonzales](https://github.com/edwardglez)


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

<p>&nbsp;</p>

### userWatch:
| Attribute | Type |
|-----------|------|
| userId (fk) | INTEGER |
| apiId | INTEGER |
| watching | STRING |


<p>&nbsp;</p>

## Getting Started
* [Project Board](https://trello.com/b/kdB8JAqb/project-3)
* [AniShowList (frontend edition)](https://github.com/trefynwynd/AniShowList-frontend)

<p>&nbsp;</p>

## Unsolved Problems:
As of the writing of this readme file (2020.11.29), the backend seems ready for use. Apart from authentication, we currently are unable to get the front-end to at least complete a POST to the userShow table, and as such we do not know whether it works completely.

<p>&nbsp;</p>

###### Second edit (2020.11.29)

###### First edit (2020.11.17)