import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'superhero/tests/helpers/start-app';

var application, server;

module('Acceptance: Characters', {
  beforeEach: function() {
    application = startApp();

    var characters = {
      "code": 200,
      "status": "Ok",
      "copyright": "© 2015 MARVEL",
      "attributionText": "Data provided by Marvel. © 2015 MARVEL",
      "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2015 MARVEL</a>",
      "etag": "dec2c14b0d86d0abb13a402343744796cefb4b84",
      "data": {
        "offset": 0,
        "limit": 20,
        "total": 1485,
        "count": 20,
        "results": [
          {
            "id": 1011334,
            "name": "3-D Man",
            "description": "",
            "modified": "2014-04-29T14:18:17-0400",
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
              "extension": "jpg"
            },
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
            "comics": {
              "available": 11,
              "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/comics",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/21366",
                  "name": "Avengers: The Initiative (2007) #14"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/24571",
                  "name": "Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/21546",
                  "name": "Avengers: The Initiative (2007) #15"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/21741",
                  "name": "Avengers: The Initiative (2007) #16"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/21975",
                  "name": "Avengers: The Initiative (2007) #17"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/22299",
                  "name": "Avengers: The Initiative (2007) #18"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/22300",
                  "name": "Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/22506",
                  "name": "Avengers: The Initiative (2007) #19"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/10223",
                  "name": "Marvel Premiere (1972) #35"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/10224",
                  "name": "Marvel Premiere (1972) #36"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/10225",
                  "name": "Marvel Premiere (1972) #37"
                }
              ],
              "returned": 11
            },
            "series": {
              "available": 2,
              "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/series",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
                  "name": "Avengers: The Initiative (2007 - 2010)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/series/2045",
                  "name": "Marvel Premiere (1972 - 1981)"
                }
              ],
              "returned": 2
            },
            "stories": {
              "available": 17,
              "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/19947",
                  "name": "Cover #19947",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/19948",
                  "name": "The 3-D Man!",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/19949",
                  "name": "Cover #19949",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/19950",
                  "name": "The Devil's Music!",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/19951",
                  "name": "Cover #19951",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/19952",
                  "name": "Code-Name:  The Cold Warrior!",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/47185",
                  "name": "Avengers: The Initiative (2007) #14 - Int",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/47499",
                  "name": "Avengers: The Initiative (2007) #15 - Int",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/47792",
                  "name": "Avengers: The Initiative (2007) #16",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/47793",
                  "name": "Avengers: The Initiative (2007) #16 - Int",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/48362",
                  "name": "Avengers: The Initiative (2007) #17 - Int",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/49104",
                  "name": "Avengers: The Initiative (2007) #18 - Int",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/49106",
                  "name": "Avengers: The Initiative (2007) #18, Zombie Variant - Int",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/49888",
                  "name": "Avengers: The Initiative (2007) #19",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/49889",
                  "name": "Avengers: The Initiative (2007) #19 - Int",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/54371",
                  "name": "Avengers: The Initiative (2007) #14, Spotlight Variant - Int",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/96303",
                  "name": "Deadpool (1997) #44",
                  "type": "interiorStory"
                }
              ],
              "returned": 17
            },
            "events": {
              "available": 1,
              "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/events",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
                  "name": "Secret Invasion"
                }
              ],
              "returned": 1
            },
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=9d0971ffcd45e632fc43df61916a41ce"
              },
              {
                "type": "wiki",
                "url": "http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=9d0971ffcd45e632fc43df61916a41ce"
              },
              {
                "type": "comiclink",
                "url": "http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=9d0971ffcd45e632fc43df61916a41ce"
              }
            ]
          }
        ]
      }
    };


    server = new Pretender(function() {
      this.get('/v1/public/characters', function(request) {
        return [
          200,
          {"Content-Type": "application/json"},
          JSON.stringify({characters: characters})
        ];
      });
    });

  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /characters', function(assert) {
  visit('/characters');

  andThen(function() {
    assert.equal(currentURL(), '/characters');
  });
});
