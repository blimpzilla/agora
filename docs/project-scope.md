# Agora Project Scope

## Status

Proposed

## Date

July 15, 2026

## Project Name

Agora

## Project Summary

Agora is a full stack event organization application that I will build incrementally between July and September.

This project isn't intended to become a complete professional event platform but rather a step away from isolated classroom projects and learn how to build, connect, test, and deploy a working software product.

The first usable version will allow an organizer to create an event and view saved events in a list.

Later versions will include event registration, event check-in, authentication, containerization, testing, and deployment but only after the core application works and I understand the existing implementation.

## Problem

A lot of my current programming experience comes from contained assignments where requirements, structure, environment, and expected output are basic and pre-defined.

The coursework has helped me understand algorithmic and programming fundamentals but they have not exposed to me to the process and decisions that go into making a complete product.

I need experience with:

- planning a software project
- breaking down a bigger idea into small executable chunks
- thinking in multiple framework and environments
- building an actual user interface
- creating backend APIs
- storing and being able to pull collected data in a database
- using Git and GitHub through development
- testing real application behavior
- documenting processes and functions
- deploying a product that works outside my own computer

## Primary Objective

The primary objective is to build and deploy a full-stack product that I can confidently explain, modify, debug, and defend.

Besides the final application working, I will measure success by a complete understanding of:

- every component and why it exists
- how data moves through the system
- why I chose certain tools and not their alternatives
- what problems I encountered and how I approached them
- the remaining limitations of the application

## Target User

The initial target user is an event organizer who needs a simple way to create and view events.
The first version will support one general type of organizer.

## Initial User

As an event organizer, I want to create an event with a name and date so that I can see it listed in the application.

### Initial User Flow

1. the organizer opens the application.
2. the organizer enters an event name.
3. the organizer selects an event date.
4. the organizer submits the form.
5. the application validates the information.
6. the event is saved.
7. the event appears in the event list.
8. the event remains available after the page is refreshed.

### Minimum Viable Product

The first full-stack MVP will include the following functionality:

#### Event Creation

The user will be able to create an event with (1) the event's name and the (2) the event's date.

#### Event List

The user will be able to access all saved events in one view.

#### Validation

The application should not allow for errors like duplicates, invalid dates, and empty fields.

#### Persistence

The application should be able to store the user's event data in a database and be available after the page refreshes or in a different session

#### Error Handling

The application should be able to display a useful message when for example there has been an error in the event creation.

## Planned Technical Structure

Initially the expected structure is:

    React/Typescript frontend
            ↓
        HTTP request
            ↓
    Java Spring Boot API
            ↓
        PostgreSQL

The frontend will provide the user with an interface

The backend will receive requests, apply application rules, and communicate with the database.

PostgreSQL will store the data

**This structure may change if I encounter a way approach along the way but each decision will be documented.**

## Initial Event Model

An event will initially contain:
Event

- id
- name
- date

The id uniquely identifies the event.

The name describes the event.

The date records when the event will occur.

## Deployment Principles

1. Each version must work before another major feature is added.
2. Code should will be merged into the main branch unless I can explain its purpose and behavior.
3. Large requirements should be divided into smaller, testable tasks.
4. Significant bugs, misunderstandings, and solutions will be recorded in the learning log.
5. The repository should show the progression of the project through issues, branches, commits, pull requests, and releases.

## Development Milestones

### Milestone 0

- Public GitHub repository
- Project scope
- .gitignore
- Initial Git commit

### Milestone 1

Static event interface with a display of one hard coded event in the browser

- React project structure
- Components
- Props
- TypeScript interfaces
- Basic Git branch workflow

### Milestone 2

Local event creation.

Allow the user to create events that are stored temporarily in frontend state.

### Milestone 3

Create a backend that can return and accept event data.

Initial endpoints:

`GET /api/events`

`POST /api/events`

Practice goals:

- HTTP
- JSON
- REST endpoints
- Controllers
- Request and response bodies
- Status codes
- Frontend-to-backend communication

### Milestone 4

Storing the data in PostgreSQL.
Learning goals:

- Database connections
- Repository patterns
- Persistence

### Milestone 5

Containerization. I will learn how to the frontend, backend, and databse useing Docker.

Learning goals:

- Images
- Containers
- Dockerfiles
- Ports
- Environment variables

### Milestone 6

Testing and deployment.

Learning goals:

- Unit testing
- Integration testing
- Continuous integration
- Production configuration
- Deployment
- Logging
- Debugging deployed software

## Definition of Done for the Initial MVP

The initial MVP is complete when:

1. A user can open the application.
2. A user can enter an event name and date.
3. Invalid submissions are rejected.
4. A valid event is sent to the backend.
5. The backend saves the event in PostgreSQL.
6. Saved events are returned by the backend.
7. The frontend displays the saved events.
8. Events remain available after a refresh or restart.
9. Common failures produce understandable error messages.
10. The application can be run using documented instructions.
11. The repository contains a readable commit history.
12. Major technical decisions are documented.
13. The application has at least basic automated tests.
14. A deployed version is publicly accessible.
