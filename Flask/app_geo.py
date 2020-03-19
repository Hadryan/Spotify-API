
import numpy as np
import sqlalchemy
import pandas as pd
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from collections import OrderedDict
from flask import Flask, jsonify, Response, render_template
import psycopg2

#################################################
# Database Setup
#################################################
engine = create_engine('postgres+psycopg2://postgres:Ursus2000@localhost:5432/Project2_NHL_Stats')

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)


#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route("/")
def index():
    """Return the homepage."""
    
    return render_template("index_NHL.html")

@app.route("/player_geo")

def geo_loc():
    lat_long = engine.execute('\
    select\
        p.player_cnt,\
        p.nationality,\
        p.birthcity,\
        w.city_ascii,\
        w.iso3,\
        w.lat,\
        w.long\
        from worldcities as w\
    right join player_cnt as p on\
    p.birthcity=w.city_ascii and p.nationality=w.iso3;'
    ).fetchall()

    
    location = {}
    
    for each in lat_long:
        location[each[0]] = each[:]

    return jsonify(location)

#     number_assists = engine.execute(
#     'SELECT player_id, COUNT(assists) AS "assists" \
#     FROM game_skater_stats \
#     GROUP BY player_id \
#     ORDER BY assists DESC \
#     LIMIT 100 \
#     ;').fetchall()
#     assists = {}

#     for each in number_assists:
#         assists[each[0]] = each[1]

#     number_goals = engine.execute(
#     'SELECT player_id, COUNT(goals) AS "goals" \
#     FROM game_skater_stats \
#     GROUP BY player_id \
#     ORDER BY goals DESC \
#     LIMIT 100 \
#     ;').fetchall()

#     goals = {}

#     for each in number_goals:
#         goals[each[0]] = each[1]

    # f_dict = {
    #     "games" : games_played
    #     "goals" : goals 
    #     "assists" : assists
    # }

#     return jsonify(f_dict)

if __name__ == '__main__':
    app.run(debug=True)

