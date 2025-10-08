-- database/schema.sql
CREATE TABLE teams (
    team_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    conference VARCHAR(100),
    coaching_staff JSONB
);

CREATE TABLE players (
    player_id SERIAL PRIMARY KEY,
    team_id INTEGER REFERENCES teams(team_id),
    name VARCHAR(100) NOT NULL,
    position VARCHAR(50),
    stats JSONB
);

CREATE TABLE games (
    game_id SERIAL PRIMARY KEY,
    home_team INTEGER REFERENCES teams(team_id),
    away_team INTEGER REFERENCES teams(team_id),
    date TIMESTAMP,
    final_score JSONB
);

CREATE TABLE plays (
    play_id SERIAL PRIMARY KEY,
    game_id INTEGER REFERENCES games(game_id),
    down INTEGER,
    distance INTEGER,
    formation VARCHAR(50),
    play_type VARCHAR(50),
    result JSONB
);

CREATE TABLE tendencies (
    tendency_id SERIAL PRIMARY KEY,
    team_id INTEGER REFERENCES teams(team_id),
    down INTEGER,
    distance INTEGER,
    formation VARCHAR(50),
    play_type_probability JSONB
);
