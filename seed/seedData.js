const seedData = {
  boroughs: [
    {
      name: 'Westminster',
      spaces: [
        {
          name: 'Boxcar (Baker & Deli)',
          type: 'Café',
          affordability: 3,
          wiFi: 1,
          hotspot: 4,
          loudness: 4,
          power: 3,
          size: 3,
          space: 1,
          busyness: 3,
          coffee: 4,
          comments: 'Laptops are banned from a few of the upstairs tables during peak hours.',
          googleMaps: 'https://goo.gl/maps/7MZRuwiXojtJRU3o6',
          hours: [
            {
              day: 'Monday',
              open: '08:00',
              close: '17:00',
            },
            {
              day: 'Tuesday',
              open: '08:00',
              close: '17:00',
            },
            {
              day: 'Wednesday',
              open: '08:00',
              close: '17:00',
            },
            {
              day: 'Thursday',
              open: '08:00',
              close: '17:00',
            },
            {
              day: 'Friday',
              open: '08:00',
              close: '17:00',
            },
            {
              day: 'Saturday',
              open: '09:00',
              close: '18:00',
            },
            {
              day: 'Sunday',
              open: '09:00',
              close: '18:00',
            },
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/boxcar-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/boxcar-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/boxcar-3.jpeg',
            },
          ],
        },
        {
          name: 'Co.',
          type: 'Café',
          affordability: 3,
          wiFi: 4,
          hotspot: 4,
          loudness: 2,
          power: 4,
          size: 3,
          space: 2,
          busyness: 1,
          coffee: 3,
          comments: '',
          googleMaps: 'https://goo.gl/maps/Xn4e6AL9v9tjsUcg7',
          hours: [
            {
              day: 'Monday',
              open: '08:00',
              close: '17:00',
            },
            {
              day: 'Tuesday',
              open: '08:00',
              close: '17:00',
            },
            {
              day: 'Wednesday',
              open: '08:00',
              close: '17:00',
            },
            {
              day: 'Thursday',
              open: '08:00',
              close: '17:00',
            },
            {
              day: 'Friday',
              open: '08:00',
              close: '17:00',
            },
            {
              day: 'Saturday',
              open: '09:00',
              close: '18:00',
            },
            {
              day: 'Sunday',
              open: '09:00',
              close: '18:00',
            },
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/co-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/co-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/co-3.jpeg',
            },
          ],
        },
        {
          name: 'WatchHouse Marylebone',
          type: 'Café',
          affordability: 3,
          wiFi: 4,
          hotspot: 4,
          loudness: 3,
          power: 3,
          size: 4,
          space: 2,
          busyness: 2,
          coffee: 5,
          comments: "There is a discretionary 90-minute cap on each table during busy periods.",
          googleMaps: 'https://goo.gl/maps/fyG5Coy397zkzQnb9',
          hours: [
            {
              day: 'Monday',
              open: '07:30',
              close: '17:30',
            },
            {
              day: 'Tuesday',
              open: '07:30',
              close: '17:30',
            },
            {
              day: 'Wednesday',
              open: '07:30',
              close: '17:30',
            },
            {
              day: 'Thursday',
              open: '07:30',
              close: '17:30',
            },
            {
              day: 'Friday',
              open: '07:30',
              close: '17:30',
            },
            {
              day: 'Saturday',
              open: '09:00',
              close: '18:00',
            },
            {
              day: 'Sunday',
              open: '09:00',
              close: '18:00',
            },
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/watchhouse-marylebone-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/watchhouse-marylebone-2.jpeg',
            },
          ],
        },
        {
          name: 'Roof Garden at Pantechnicon',
          type: 'Restaurant, Bar',
          affordability: 4,
          wiFi: 3,
          hotspot: 4,
          loudness: 2,
          power: 2,
          size: 3,
          space: 3,
          busyness: 1,
          coffee: 4,
          comments: '',
          googleMaps: 'https://goo.gl/maps/X26A4ECnCrfGwbC68',
          hours: [
            {
              day: 'Tuesday',
              open: '12:00',
              close: '23:00',
            },
            {
              day: 'Wednesday',
              open: '12:00',
              close: '23:00',
            },
            {
              day: 'Thursday',
              open: '12:00',
              close: '00:00',
            },
            {
              day: 'Friday',
              open: '12:00',
              close: '00:00',
            },
            {
              day: 'Saturday',
              open: '11:00',
              close: '00:00',
            },
            {
              day: 'Sunday',
              open: '11:00',
              close: '22:00',
            }
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/roof-garden-at-pantechnicon-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/roof-garden-at-pantechnicon-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/roof-garden-at-pantechnicon-3.jpeg',
            },
          ],
        },
        {
          name: 'Café Kitsuné at Pantechnicon',
          type: 'Café',
          affordability: 4,
          wiFi: 3,
          hotspot: 4,
          loudness: 3,
          power: 3,
          size: 3,
          space: 2,
          busyness: 2,
          coffee: 4,
          comments: '',
          googleMaps: 'https://goo.gl/maps/WfnLzWgD3o2TMe8A6',
          hours: [
            {
              day: 'Monday',
              open: '08:00',
              close: '18:00',
            },
            {
              day: 'Tuesday',
              open: '08:00',
              close: '18:00',
            },
            {
              day: 'Wednesday',
              open: '08:00',
              close: '18:00',
            },
            {
              day: 'Thursday',
              open: '08:00',
              close: '18:00',
            },
            {
              day: 'Friday',
              open: '08:00',
              close: '18:00',
            },
            {
              day: 'Saturday',
              open: '09:00',
              close: '18:00',
            },
            {
              day: 'Sunday',
              open: '09:00',
              close: '18:00',
            }
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/cafe-kitsune-at-pantechnicon-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/cafe-kitsune-at-pantechnicon-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/cafe-kitsune-at-pantechnicon-3.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/cafe-kitsune-at-pantechnicon-4.jpeg',
            }
          ],
        }
      ],
    },
    {
      name: 'Southwark',
      spaces: [
        {
          name: 'WatchHouse Tower Bridge',
          type: 'Café',
          affordability: 3,
          wiFi: 4,
          hotspot: 3,
          loudness: 4,
          power: 3,
          size: 4,
          space: 3,
          busyness: 3,
          coffee: 5,
          comments: "There is a discretionary 90-minute cap on each table during busy periods.",
          googleMaps: 'https://goo.gl/maps/sxixeL6cduCtfpbV9',
          hours: [
            {
              day: 'Monday',
              open: '07:00',
              close: '18:00',
            },
            {
              day: 'Tuesday',
              open: '07:00',
              close: '18:00',
            },
            {
              day: 'Wednesday',
              open: '07:00',
              close: '18:00',
            },
            {
              day: 'Thursday',
              open: '07:00',
              close: '18:00',
            },
            {
              day: 'Friday',
              open: '07:00',
              close: '18:00',
            },
            {
              day: 'Saturday',
              open: '07:30',
              close: '18:00',
            },
            {
              day: 'Sunday',
              open: '07:30',
              close: '18:00',
            },
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/watchhouse-tower-bridge-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/watchhouse-tower-bridge-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/watchhouse-tower-bridge-3.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/watchhouse-tower-bridge-4.jpeg',
            },
          ],
        },
        {
          name: 'Shaman',
          type: 'Café, Lobby, Co-working',
          affordability: 2,
          wiFi: 4,
          hotspot: 2,
          loudness: 1,
          power: 4,
          size: 4,
          space: 3,
          busyness: 3,
          coffee: 4,
          comments: '',
          googleMaps: 'https://goo.gl/maps/xjsbDuVWaM1oLjPt9',
          hours: [
            {
              day: 'Monday',
              open: '07:00',
              close: '22:00',
            },
            {
              day: 'Tuesday',
              open: '07:00',
              close: '22:00',
            },
            {
              day: 'Wednesday',
              open: '07:00',
              close: '22:00',
            },
            {
              day: 'Thursday',
              open: '07:00',
              close: '22:00',
            },
            {
              day: 'Friday',
              open: '07:00',
              close: '22:00',
            },
            {
              day: 'Saturday',
              open: '07:00',
              close: '22:00',
            },
            {
              day: 'Sunday',
              open: '07:00',
              close: '22:00',
            },
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/shaman-bermondsey-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/shaman-bermondsey-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/shaman-bermondsey-3.jpeg',
            },
          ],
        },
        {
          name: 'The Hoxton, Southwark',
          type: 'Café, Lobby',
          affordability: 2,
          wiFi: 4,
          hotspot: 2,
          loudness: 3,
          power: 4,
          size: 4,
          space: 3,
          busyness: 2,
          coffee: 3,
          comments: 'Head to the Mezzanine on the first floor via the stairs beside the check-in desk.',
          googleMaps: 'https://goo.gl/maps/VgseyRdkvkzYy1x2A',
          hours: [
            {
              day: 'Monday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Tuesday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Wednesday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Thursday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Friday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Saturday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Sunday',
              open: '00:00',
              close: '00:00',
            },
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-hoxton-southwark-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-hoxton-southwark-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-hoxton-southwark-3.jpeg',
            },
          ],
        }
      ],
    },
    {
      name: 'Hackney',
      spaces: [
        {
          name: 'Allpress Espresso',
          type: 'Café, Lobby',
          affordability: 2,
          wiFi: 4,
          hotspot: 2,
          loudness: 2,
          power: 3,
          size: 3,
          space: 3,
          busyness: 1,
          coffee: 4,
          comments: `"The Street" (the Tea Building's foyer) is only open to the public on weekdays.`,
          googleMaps: 'https://goo.gl/maps/U64iscbtgXPe4ZeT6',
          hours: [
            {
              day: 'Monday',
              open: '08:00',
              close: '18:00',
            },
            {
              day: 'Tuesday',
              open: '08:00',
              close: '18:00',
            },
            {
              day: 'Wednesday',
              open: '08:00',
              close: '18:00',
            },
            {
              day: 'Thursday',
              open: '08:00',
              close: '18:00',
            },
            {
              day: 'Friday',
              open: '08:00',
              close: '18:00',
            },
          ], 
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/allpress-espresso-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/allpress-espresso-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/allpress-espresso-3.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/allpress-espresso-4.jpeg',
            },
          ],
        },
        {
          name: 'One Hundred Shoreditch',
          type: 'Café, Lobby, Co-working',
          affordability: 2,
          wiFi: 4,
          hotspot: 2,
          loudness: 3,
          power: 4,
          size: 4,
          space: 3,
          busyness: 3,
          coffee: 3,
          comments: "After 17:00, you're nicely asked to move to specific areas to work or to stop using your laptop.\n\nNote: Beyond the main lobby, there is a bar with additional seating.",
          googleMaps: 'https://goo.gl/maps/oG8zHwXCMV2UyxfD7',
          hours: [
            {
              day: 'Monday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Tuesday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Wednesday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Thursday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Friday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Saturday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Sunday',
              open: '00:00',
              close: '00:00',
            },
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/one-hundred-shoreditch-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/one-hundred-shoreditch-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/one-hundred-shoreditch-3.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/one-hundred-shoreditch-4.jpeg',
            },
          ],
        },
        {
          name: 'The Hoxton, Shoreditch',
          type: 'Café, Lobby',
          affordability: 2,
          wiFi: 4,
          hotspot: 4,
          loudness: 4,
          power: 4,
          size: 4,
          space: 2,
          busyness: 3,
          coffee: 3,
          comments: '',
          googleMaps: 'https://goo.gl/maps/vfs5wucWDmiCXJfY7',
          hours: [
            {
              day: 'Monday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Tuesday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Wednesday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Thursday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Friday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Saturday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Sunday',
              open: '00:00',
              close: '00:00',
            },
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-hoxton-shoreditch-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-hoxton-shoreditch-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-hoxton-shoreditch-3.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-hoxton-shoreditch-4.jpeg',
            },
          ],
        },
        {
          name: 'Nobu Café, Nobu Hotel Shoreditch',
          type: 'Café, Lobby, Restaurant',
          affordability: 4,
          wiFi: 5,
          hotspot: 2,
          loudness: 2,
          power: 3,
          size: 3,
          space: 3,
          busyness: 1,
          coffee: 4,
          comments: '',
          googleMaps: 'https://goo.gl/maps/QY9LTuCHdH6G56Kw8',
          hours: [
            {
              day: 'Monday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Tuesday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Wednesday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Thursday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Friday',
              open: '00:00',
              close: '00:00',
            },
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/nobu-cafe-nobu-hotel-shoreditch-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/nobu-cafe-nobu-hotel-shoreditch-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/nobu-cafe-nobu-hotel-shoreditch-3.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/nobu-cafe-nobu-hotel-shoreditch-4.jpeg',
            },
          ]
        }
      ]
    },
    {
      name: 'Camden',
      spaces: [
        {
          name: 'The Hoxton, Holborn',
          type: 'Café, Lobby',
          affordability: 2,
          wiFi: 4,
          hotspot: 4,
          loudness: 4,
          power: 4,
          size: 4,
          space: 2,
          busyness: 3,
          coffee: 3,
          comments: '',
          googleMaps: 'https://goo.gl/maps/eYuTTbtHNJb63hZ69',
          hours: [
            {
              day: 'Monday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Tuesday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Wednesday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Thursday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Friday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Saturday',
              open: '00:00',
              close: '00:00',
            },
            {
              day: 'Sunday',
              open: '00:00',
              close: '00:00',
            },
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-hoxton-holborn-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-hoxton-holborn-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-hoxton-holborn-3.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-hoxton-holborn-4.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-hoxton-holborn-5.jpeg',
            },
          ],
        }
      ]
    },
    {
      name: 'Islington',
      spaces: [
        {
          name: 'Serata Hall',
          type: 'Restaurant, Co-working',
          affordability: 2,
          wiFi: 4,
          hotspot: 4,
          loudness: 3,
          power: 3,
          size: 5,
          space: 3,
          busyness: 3,
          coffee: 3,
          comments: "I would avoid this place on weekends! It's very loud and you'll find few people working from here.",
          googleMaps: 'https://goo.gl/maps/aJnorzgWarLDzQUH8',
          hours: [
            {
              day: 'Monday',
              open: '08:00',
              close: '23:30',
            },
            {
              day: 'Tuesday',
              open: '08:00',
              close: '23:30',
            },
            {
              day: 'Wednesday',
              open: '08:00',
              close: '23:30',
            },
            {
              day: 'Thursday',
              open: '08:00',
              close: '23:30',
            },
            {
              day: 'Friday',
              open: '08:00',
              close: '00:30',
            },
            {
              day: 'Saturday',
              open: '09:00',
              close: '00:30',
            },
            {
              day: 'Sunday',
              open: '10:00', 
              close: '23:00',
            },
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/serata-hall-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/serata-hall-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/serata-hall-3.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/serata-hall-4.jpeg',
            }
          ]
        }
      ]
    }
  ]
};

module.exports = seedData;