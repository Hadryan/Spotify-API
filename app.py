# import numpy as np
# import sqlalchemy
# import pandas as pd
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
# from sqlalchemy import create_engine, func
# from collections import OrderedDict
# from datetime import date, timedelta


# #################################################
# # Database Setup
# #################################################
# engine = create_engine('postgres+psycopg2://postgres:Claymol1324@localhost:5432/Spotify')

# # reflect an existing database into a new model
# Base = automap_base()
# # reflect the tables
# Base.prepare(engine, reflect=True)

# app = Flask(__name__)

#################################################
# API Setup
#################################################

from __future__ import print_function
#Import things and whatnot.
import spotipy
from spotipy import Spotify
import requests
import json
from spotipy.oauth2 import SpotifyClientCredentials
from spotipy import oauth2
import pandas as pd
from flask import Flask, jsonify, Response, render_template


app = Flask(__name__)

SPOTIFY_CLIENT_ID = '97d0cf2236334807b1eb85e357156547'
SPOTIFY_CLIENT_SECRET = '5daeca4781fb4ac98408b5ce82a01ff6'


SPOTIPY_REDIRECT_URI = 'http://localhost:8080'
SCOPE = 'user-library-read'
CACHE = '.spotipyoauthcache'

__all__ = [
    'is_token_expired',
    'SpotifyClientCredentials',
    'SpotifyOAuth',
    'SpotifyOauthError'
]

import base64
import os
import sys
import time

import requests

# Workaround to support both python 2 & 3
import six
import six.moves.urllib.parse as urllibparse


class SpotifyOauthError(Exception):
    pass


def _make_authorization_headers(client_id, client_secret):
    auth_header = base64.b64encode(
        six.text_type(
            client_id +
            ':' +
            client_secret).encode('ascii'))
    return {'Authorization': 'Basic %s' % auth_header.decode('ascii')}


def is_token_expired(token_info):
    now = int(time.time())
    return token_info['expires_at'] - now < 60

sp_oauth = oauth2.SpotifyOAuth(SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIPY_REDIRECT_URI,scope=SCOPE,cache_path=CACHE )

class SpotifyClientCredentials(object):
    OAUTH_TOKEN_URL = 'https://accounts.spotify.com/api/token'

    def __init__(self, client_id=None, client_secret=None, proxies=None):
        """
        You can either provide a client_id and client_secret to the
        constructor or set SPOTIPY_CLIENT_ID and SPOTIPY_CLIENT_SECRET
        environment variables
        """
        if not client_id:
            client_id = SPOTIFY_CLIENT_ID

        if not client_secret:
            client_secret = SPOTIFY_CLIENT_SECRET

        if not client_id:
            raise SpotifyOauthError('No client id')

        if not client_secret:
            raise SpotifyOauthError('No client secret')

        self.client_id = client_id
        self.client_secret = client_secret
        self.token_info = None
        self.proxies = proxies

    def get_access_token(self):
        """
        If a valid access token is in memory, returns it
        Else feches a new token and returns it
        """
        if self.token_info and not self.is_token_expired(self.token_info):
            return self.token_info['access_token']

        token_info = self._request_access_token()
        token_info = self._add_custom_values_to_token_info(token_info)
        self.token_info = token_info
        return self.token_info['access_token']

    def _request_access_token(self):
        """Gets client credentials access token """
        payload = {'grant_type': 'client_credentials'}

        headers = _make_authorization_headers(
            self.client_id, self.client_secret)

        response = requests.post(self.OAUTH_TOKEN_URL, data=payload,
                                 headers=headers, verify=True,
                                 proxies=self.proxies)
        if response.status_code != 200:
            raise SpotifyOauthError(response.reason)
        token_info = response.json()
        return token_info

    def is_token_expired(self, token_info):
        return is_token_expired(token_info)

    def _add_custom_values_to_token_info(self, token_info):
        """
        Store some values that aren't directly provided by a Web API
        response.
        """
        token_info['expires_at'] = int(time.time()) + token_info['expires_in']
        return token_info
    
sp = spotipy.Spotify(client_credentials_manager=SpotifyClientCredentials())


@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

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

@app.route("/Playlist")

def playlist():
    test = sp.search(q='Retrovertigo', type='track')
   
    return jsonify(test)

@app.route("/Playlist2")

def artist():
    test2 = sp.search(q='Mr Bungle', type='artist')
   
    return jsonify(test2)

if __name__ == '__main__':
    app.run(debug=True)