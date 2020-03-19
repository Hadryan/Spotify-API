import numpy as np
import sqlalchemy
import pandas as pd
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from collections import OrderedDict
from flask import Flask, jsonify, Response, render_template
import psycopg2
from datetime import date, timedelta


#################################################
# Database Setup
#################################################
engine = create_engine('postgres+psycopg2://postgres:(password)@localhost:5432/Spotify')

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)


#################################################
# Flask Setup
#################################################
app = Flask(__name__)

@app.route("/")
def index():
    """Return the homepage."""
    
    return render_template("Final_project.html")

@app.route("/viral_viz")

def viz():
    daily = "https://kworb.net/spotify/country/us_daily.html"
    viral = pd.read_html(daily)
    df=viral[0]
    df.sort_values(by='Days', ascending=True)
    drop_over_1day = df[df['Days'] > 15  ].index
    df.drop(drop_over_1day , inplace=True)
    viral_charts = df.to_json(orient='columns')

    return viral_charts

@app.route("/bday_group1")

def group1():
    data = engine.execute('SELECT * FROM spotify_data WHERE total > 80000000 ORDER BY total DESC LIMIT 100').fetchall()

    artist = []
    position = []
    total= []
    dance = []
    key= []
    mode=[]
    loudness=[]
    energy=[]
    acousticness=[]
    tempo=[]
    valence=[]
    liveness=[]
    weeks = []
    category = []

    for x in data:
        act = x[1]
        post = x[0]
        tot = x[6]
        dnc = x[9]
        ky = x[11]
        mod = x[13]
        loud = x[12]
        en=x[10]
        auct=x[15]
        tmp=x[19]
        vl=x[18]
        live=x[17]
        week=x[2]
        cat=x[22]
        artist.append(act)
        position.append(post)
        total.append(tot)
        dance.append(dnc)
        key.append(ky)
        mode.append(mod)
        loudness.append(loud)
        energy.append(en)
        acousticness.append(auct)
        tempo.append(tmp)
        valence.append(vl)
        liveness.append(live)
        weeks.append(week)
        category.append(cat)

        # list(datetime_range(start=datetime(1967, 1, 1), end=datetime(1999, 12, 31)))
    song_data = {
        "artist" : artist,
        "postion" : position,
        "streams" : total,
        "dance" : dance,
        "key": key,
        "mode": mode,
        "loudness" : loudness,
        "energy" : energy,
        "acousticness" : acousticness,
        "tempo" : tempo,
        "valence" : valence,
        "liveness" : liveness,
        "weeks" : weeks,
        "category" : category
    }
     
    return jsonify(song_data)

@app.route("/category")

def category():
    data = engine.execute('SELECT * FROM spotify_data').fetchall()

    artist = []
    position = []
    total= []
    dance = []
    key= []
    mode=[]
    loudness=[]
    energy=[]
    acousticness=[]
    tempo=[]
    valence=[]
    liveness=[]
    weeks = []
    category = []

    for x in data:
        act = x[1]
        post = x[0]
        tot = x[6]
        dnc = x[9]
        ky = x[11]
        mod = x[13]
        loud = x[12]
        en=x[10]
        auct=x[15]
        tmp=x[19]
        vl=x[18]
        live=x[17]
        week=x[2]
        cat=x[22]
        artist.append(act)
        position.append(post)
        total.append(tot)
        dance.append(dnc)
        key.append(ky)
        mode.append(mod)
        loudness.append(loud)
        energy.append(en)
        acousticness.append(auct)
        tempo.append(tmp)
        valence.append(vl)
        liveness.append(live)
        weeks.append(week)
        category.append(cat)

        # list(datetime_range(start=datetime(1967, 1, 1), end=datetime(1999, 12, 31)))
    song_data = {
        "artist" : artist,
        "postion" : position,
        "streams" : total,
        "dance" : dance,
        "key": key,
        "mode": mode,
        "loudness" : loudness,
        "energy" : energy,
        "acousticness" : acousticness,
        "tempo" : tempo,
        "valence" : valence,
        "liveness" : liveness,
        "weeks" : weeks,
        "category" : category
    }
     
    return jsonify(song_data)

# @app.route("/one_song")
# def one():
#     data = engine.execute("SELECT * FROM rock_seq ORDER BY album_track_seq").fetchall()
    
#     track_id = []
#     artist = []
#     album= []
#     track = []
#     dance = []
#     key= []
#     mode=[]
#     loudness=[]
#     energy=[]
#     acousticness=[]
#     tempo=[]
#     valence=[]
#     liveness=[]
#     weeks = []

#     for x in data:
#         act = x[1]
#         post = x[0]
#         tot = x[6]
#         dnc = x[9]
#         ky = x[11]
#         mod = x[13]
#         loud = x[12]
#         en=x[10]
#         auct=x[15]
#         tmp=x[19]
#         vl=x[18]
#         live=x[17]
#         week=x[2]
#         artist.append(act)
#         position.append(post)
#         total.append(tot)
#         dance.append(dnc)
#         key.append(ky)
#         mode.append(mod)
#         loudness.append(loud)
#         energy.append(en)
#         acousticness.append(auct)
#         tempo.append(tmp)
#         valence.append(vl)
#         liveness.append(live)
#         weeks.append(week)

#         # list(datetime_range(start=datetime(1967, 1, 1), end=datetime(1999, 12, 31)))
#     song_data = {
#         "artist" : artist,
#         "postion" : position,
#         "streams" : total,
#         "dance" : dance,
#         "key": key,
#         "mode": mode,
#         "loudness" : loudness,
#         "energy" : energy,
#         "acousticness" : acousticness,
#         "tempo" : tempo,
#         "valence" : valence,
#         "liveness" : liveness,
#         "weeks" : weeks
#     }
     
#     return jsonify(song_data)

@app.route("/average_by_category")
def two():
    data = engine.execute("\
    SELECT\
	  stream_category,\
	  avg(energy) as avgV,\
	  avg(danceability) as dance,\
      avg(liveness) as live,\
	  avg(key) as avg_key,\
	  avg(loudness) as loudness,\
	  avg(speechiness)as speechy,\
	  avg(acoustiness) as acoustic,\
	  avg(valence) as val,\
	  avg(tempo) as tempo,\
	  avg(duration_ms) as duration,\
	  avg(total) as avg_streams,\
	  count(stream_category) as cnt_streams\
	from \
	  spotify_data\
	group by \
	  stream_category;\
          ").fetchall()

    
    category = []
    energy = []
    dance= []
    key = []
    speech=[]
    acoustic=[]
    val=[]
    tempo=[]
    duration=[]
    streams=[]
    category_count=[]
    

    for x in data:
        act = x[0]
        post = float(x[1])
        tot = float(x[2])
        ky = float(x[4])
        loud = float(x[6])
        en=float(x[7])
        auct=float(x[8])
        tmp=float(x[9])
        vl=float(x[10])
        live=float(x[11])
        week=float(x[12])
        category.append(act)
        energy.append(float(post))
        dance.append(float(tot))
        key.append(float(ky))
        speech.append(float(loud))
        acoustic.append(float(en))
        val.append(float(auct))
        tempo.append(float(tmp))
        duration.append(float(vl))
        streams.append(float(live))
        category_count.append(float(week))

        # list(datetime_range(start=datetime(1967, 1, 1), end=datetime(1999, 12, 31)))
    avg_data = {
        "stream_category" : category,
        "energy" : energy,
        "dance" : dance,
        "key": key,
        "speech" : speech,
        "acoustic" : acoustic,
        "valence" : val,
        "tempo" : tempo,
        "duration" : duration,
        "streams" : streams,
        "category_count" : category_count
    }
     
    return jsonify(avg_data)



if __name__ == '__main__':
    app.run(debug=True)