# Quiz App 
## Core Idea
Creating and sharing quizes between users. Participants and conductors can see the results in the dashboard;
## Dev Stages
1) Project Setup
- Divide the application into layers, different areas of responsibility, according to the FSD's architecture;
- Setup the UI kit - in my case I prefer using shadcn/ui library + setup the settings of installation;
- Setup the storing data - in my case it's a database "sqlite" and SMDB - Prisma;
- Optionally - Add seed scripts to test the database;
2) Domain Planning
- Point out essential entities and therefore features
- Write around the entities in application
- Describe these entities in the database's model(By the way, the entities in the db and they in the domain can differ because domain describes how convenient it's use in the app, while db describes how convenient it can be stored);