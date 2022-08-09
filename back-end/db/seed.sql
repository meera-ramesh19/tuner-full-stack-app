-- step1 connect to database
\c tuner;

--  name string, required
--  artist: string, required
--  album: string
--  time: int
--  is_favorite: boolean


--step2 add premade data to be able to add 
 INSERT INTO songs(name,artist,album,time,is_favorite) VALUES
('One Last time','ariana grande','My everything',197,TRUE),
 ('Light switch','charlie puth','charlie',185,FALSE),
 ('I feel it coming','the weekend','starboy',269,TRUE);

