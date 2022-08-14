-- step1 connect to database
\c tuner;

--  name string, required
--  artist: string, required
--  album: string
--  time: int
--  is_favorite: boolean


--step2 add premade data to be able to add 
 INSERT INTO songs(song_id,name,artist,album,time,is_favorite) VALUES
('One Last time','ariana grande','My everything',197,TRUE),
 ('Light switch','charlie puth','charlie',185,FALSE),
 ('I feel it coming','the weeknd','starboy',269,TRUE),
('get on the floor','Jennifer lopez','love',197,TRUE);

INSERT INTO playlists (title) VALUES
('playlist-A'),
('playlist-B'),



INSERT INTO albums ( song_id,albumName, releaseDate, is_favorite, )
VALUES
('1', 'My everything', 2014, false),
( '1','Yours truly', 2013, false),
( '1','the Best',2017,false),
( '4','Rebirth', 2005, false),
( '4','Brave', 2007, false),
( '4','get on the floor',2011, true),
( '2', 'Nine track mind',2016, false),
( '2','Voice Notes', 2018, false),
( '2', 'Charlie',2022, false),
( '3','House of Balloons', 2011, false),
( '3','The highlights', 2021,false);
( '3','Starboy', 2016, false);