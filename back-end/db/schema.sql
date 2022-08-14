
-- - name string, required
-- - artist: string, required
-- - album: string
-- - time: string
-- - is_favorite: boolean


--step1 incase there is a database already drop it
DROP DATABASE IF EXISTS tuner;

--step 2 create the db
CREATE DATABASE tuner;

--step3 connect to it
\c tuner;



--step4 create a table

  CREATE TABLE songs (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time INT,
    is_favorite BOOLEAN);



CREATE TABLE Albums (
  id SERIAL PRIMARY KEY,
  albumName TEXT NOT NULL,
  releaseDate INT,
  is_favorite BOOLEAN DEFAULT true,
  song_id INT REFERENCES songs(id) 
  ON DELETE CASCADE        
);



CREATE TABLE playlists (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL
    id INT REFERENCES songs (id) 
    ON DELETE CASCADE 
);



-- psql -U postgres -f db/schema.sql
--connect to psql as the user postgres and ran the file from the db/schema.sql
---- psql -U postgres -f db/seed.sql
-- psql -U postgres -f config/schema.sql(in our case)

-- to see database in terminal
--  \c tuner
-- You are now connected to database "animes_dev" as user "meeraramesh".
--  SELECT * from songList;
 