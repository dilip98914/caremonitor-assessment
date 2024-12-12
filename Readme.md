# Clinical Metrics Aggregation API

This is a Node.js application that aggregates and stores clinical metrics (like heart rate, weight, blood glucose levels, height, and steps) for patients using PostgreSQL via Docker. It uses Express for handling HTTP requests and Sequelize as the ORM for PostgreSQL.

## Prerequisites

1. **Docker**:

   - Ensure Docker is installed on your system.
   - Docker Compose is not explicitly required but it's recommended for easier management of services if needed in more complex setups.

2. **PostgreSQL Docker Image**:

   - You will need a PostgreSQL Docker image to host the database.
   - Pull the PostgreSQL Docker image:
     ```bash
     docker pull postgres
     ```

3. **Node.js and npm**:
   - Node.js and npm should be installed on your system.
   - Use `nvm` or `n` to manage multiple Node.js versions if needed.

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-repo/clinical-metrics-api.git
cd clinical-metrics-api

### 2. Run PostgreSQL with Docker
docker run --name postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres

inside postgres db

docker exec -it <CONTAINER_ID or NAME> psql -U postgres
\l  # Lists all databases
create databse database_name;

# note create database if database does not exists error occurs


### 3 . Install dependencies
npm install

### 4 . Run the application
npm start
or
npm run dev

Endpoint:
POST
{
    "patientName":"john"
}
http://localhost:3000/heart-rate-aggregation

```
