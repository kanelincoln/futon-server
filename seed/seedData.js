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
              close: '23:59',
            },
            {
              day: 'Friday',
              open: '12:00',
              close: '23:59',
            },
            {
              day: 'Saturday',
              open: '11:00',
              close: '23:59',
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
        },
        {
          name: 'The Monocle Café',
          type: 'Café',
          affordability: 3,
          wiFi: 1,
          hotspot: 3,
          loudness: 3,
          power: 4,
          size: 3,
          space: 2,
          busyness: 2,
          coffee: 4,
          comments: 'The café is usually quite busy by 09:30, though there are always people entering and leaving.',
          googleMaps: 'https://goo.gl/maps/ndsGpajW7TzKhQWE8',
          hours: [
            {
              day: 'Monday',
              open: '07:00',
              close: '19:00',
            },
            {
              day: 'Tuesday',
              open: '07:00',
              close: '19:00',
            },
            {
              day: 'Wednesday',
              open: '07:00',
              close: '19:00',
            },
            {
              day: 'Thursday',
              open: '07:00',
              close: '19:00',
            },
            {
              day: 'Friday',
              open: '07:00',
              close: '19:00',
            },
            {
              day: 'Saturday',
              open: '08:00',
              close: '19:00',
            },
            {
              day: 'Sunday',
              open: '08:00',
              close: '19:00',
            }
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-monocle-cafe-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-monocle-cafe-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-monocle-cafe-3.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-monocle-cafe-4.jpeg',
            }
          ]
        },
        {
          name: 'Madera at Treehouse London',
          type: 'Restaurant, Bar',
          affordability: 4,
          wiFi: 5,
          hotspot: 4,
          loudness: 2,
          power: 2,
          size: 4,
          space: 3,
          busyness: 1,
          coffee: 4,
          comments: "The main disadvantage of this place is that there are only 3 or 4 power outlets, but we've always been able to get a seat next to one.",
          googleMaps: 'https://goo.gl/maps/A4YXb1zGJpZyzRc29',
          hours: [
            {
              day: 'Monday',
              open: '07:00',
              close: '23:00',
            },
            {
              day: 'Tuesday',
              open: '07:00',
              close: '23:00',
            },
            {
              day: 'Wednesday',
              open: '07:00',
              close: '23:00',
            },
            {
              day: 'Thursday',
              open: '07:00',
              close: '23:00',
            },
            {
              day: 'Friday',
              open: '07:00',
              close: '23:00',
            },
            {
              day: 'Saturday',
              open: '08:00',
              close: '23:00',
            },
            {
              day: 'Sunday',
              open: '08:00',
              close: '23:00',
            }
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/madera-at-treehouse-london-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/madera-at-treehouse-london-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/madera-at-treehouse-london-3.jpeg',
            },
          ]
        },
        {
          name: 'The Nest',
          type: 'Restaurant, Bar',
          affordability: 4,
          wiFi: 5,
          hotspot: 3,
          loudness: 3,
          power: 4,
          size: 4,
          space: 3,
          busyness: 2,
          coffee: 3,
          comments: 'The Nest can get very busy during the summer.',
          googleMaps: 'https://goo.gl/maps/wj6vvVRAzi1yNRAU9',
          hours: [
            {
              day: 'Monday',
              open: '12:00',
              close: '01:00',
            },
            {
              day: 'Tuesday',
              open: '12:00',
              close: '01:00',
            },
            {
              day: 'Wednesday',
              open: '12:00',
              close: '01:00',
            },
            {
              day: 'Thursday',
              open: '12:00',
              close: '01:00',
            },
            {
              day: 'Friday',
              open: '12:00',
              close: '01:00',
            },
            {
              day: 'Saturday',
              open: '12:00',
              close: '01:00',
            },
            {
              day: 'Sunday',
              open: '12:00',
              close: '23:00',
            }
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-nest-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-nest-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-nest-3.jpeg',
            },
          ]
        },
        {
          name: 'RSH Café',
          type: 'Café',
          affordability: 2,
          wiFi: 5,
          hotspot: 4,
          loudness: 2,
          power: 3,
          size: 3,
          space: 3,
          busyness: 2,
          coffee: 3,
          comments: '',
          googleMaps: 'https://goo.gl/maps/vig442yT6nDQpz3m7',
          hours: [
            {
              day: 'Tuesday',
              open: '10:00',
              close: '20:00',
            },
            {
              day: 'Wednesday',
              open: '10:00',
              close: '20:00',
            },
            {
              day: 'Thursday',
              open: '10:00',
              close: '20:00',
            },
            {
              day: 'Friday',
              open: '10:00',
              close: '20:00',
            },
            {
              day: 'Saturday',
              open: '10:00',
              close: '20:00',
            },
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/rsh-cafe-1.jpeg',
            },
          ]
        },
        {
          name: 'The Prince Akatoki',
          type: 'Restaurant, Lobby',
          affordability: 4,
          wiFi: 4,
          hotspot: 2,
          loudness: 2,
          power: 3,
          size: 4,
          space: 3,
          busyness: 1,
          coffee: 3,
          comments: 'The staff here are incredibly friendly.',
          googleMaps: 'https://goo.gl/maps/VePhRFF1wQ84GGRbA',
          hours: [
            {
              day: 'Monday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Tuesday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Wednesday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Thursday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Friday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Saturday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Sunday',
              open: '00:00',
              close: '23:59',
            }
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-prince-akatoki-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-prince-akatoki-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-prince-akatoki-3.jpeg',
            }
          ]
        },
        {
          name: 'Nobu Lounge, Nobu Hotel Portman Square',
          type: 'Restaurant, Bar',
          affordability: 5,
          wiFi: 4,
          hotspot: 4,
          loudness: 2,
          power: 2,
          size: 4,
          space: 3,
          busyness: 2,
          coffee: 4,
          comments: '',
          googleMaps: 'https://goo.gl/maps/jaPDGafgrdGCp4J7A',
          hours: [
            {
              day: 'Monday',
              open: '12:00',
              close: '23:00',
            },
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
              close: '23:00',
            },
            {
              day: 'Friday',
              open: '12:00',
              close: '23:00',
            },
            {
              day: 'Saturday',
              open: '12:00',
              close: '23:00',
            },
            {
              day: 'Sunday',
              open: '12:00',
              close: '23:00',
            }
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/nobu-lounge-nobu-hotel-portman-square-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/nobu-lounge-nobu-hotel-portman-square-2.jpeg',
            }
          ]
        },
        {
          name: 'The Marylebone',
          type: 'Bar, Lobby',
          affordability: 5,
          wiFi: 4,
          hotspot: 3,
          loudness: 2,
          power: 3,
          size: 4,
          space: 3,
          busyness: 2,
          coffee: 3,
          comments: '',
          googleMaps: 'https://goo.gl/maps/AhsTTuCy21rPSCor5',
          hours: [
            {
              day: 'Monday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Tuesday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Wednesday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Thursday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Friday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Saturday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Sunday',
              open: '00:00',
              close: '23:59',
            }
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-marylebone-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-marylebone-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-marylebone-3.jpeg',
            }
          ]
        },
        {
          name: 'Holmes Hotel',
          type: 'Lobby',
          affordability: 4,
          wiFi: 5,
          hotspot: 2,
          loudness: 3,
          power: 4,
          size: 4,
          space: 3,
          busyness: 1,
          coffee: 4,
          comments: '',
          googleMaps: 'https://goo.gl/maps/rGV7zz1G5XG14Gkb6',
          hours: [
            {
              day: 'Monday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Tuesday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Wednesday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Thursday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Friday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Saturday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Sunday',
              open: '00:00',
              close: '23:59',
            }
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/holmes-hotel-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/holmes-hotel-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/holmes-hotel-3.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/holmes-hotel-4.jpeg',
            }
          ]
        },
        {
          name: 'Kiss the Hippo Fitzrovia',
          type: 'Café',
          affordability: 2,
          wiFi: 1,
          hotspot: 4,
          loudness: 2,
          power: 2,
          size: 3,
          space: 2,
          busyness: 2,
          coffee: 5,
          comments: 'This is a carbon-negative café.',
          googleMaps: 'https://goo.gl/maps/KpbXWtJeY6tsmuDL8',
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
              open: '08:30',
              close: '17:00',
            },
            {
              day: 'Sunday',
              open: '09:30',
              close: '17:00',
            }
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/kiss-the-hippo-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/kiss-the-hippo-2.jpeg',
            },
          ]
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
              close: '23:59',
            },
            {
              day: 'Tuesday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Wednesday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Thursday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Friday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Saturday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Sunday',
              open: '00:00',
              close: '23:59',
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
        },
        {
          name: 'Sea Containers',
          type: 'Lobby, Bar',
          affordability: 3,
          wiFi: 4,
          hotspot: 4,
          loudness: 2,
          power: 3,
          size: 4,
          space: 3,
          busyness: 1,
          coffee: 4,
          comments: "Enter via the riverside entrance to find a comfortable space beside the Lyaness bar.\n\nSea Containers has the fastest internet of any space we've found with >200Mbps speeds.",
          googleMaps: 'https://goo.gl/maps/T8gTAX6eZ1RwfheC7',
          hours: [
            {
              day: 'Monday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Tuesday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Wednesday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Thursday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Friday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Saturday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Sunday',
              open: '00:00',
              close: '23:59',
            },
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/sea-containers-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/sea-containers-2.jpeg',
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
              close: '23:59',
            },
            {
              day: 'Tuesday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Wednesday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Thursday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Friday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Saturday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Sunday',
              open: '00:00',
              close: '23:59',
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
              close: '23:59',
            },
            {
              day: 'Tuesday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Wednesday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Thursday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Friday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Saturday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Sunday',
              open: '00:00',
              close: '23:59',
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
              open: '08:00',
              close: '23:59',
            },
            {
              day: 'Tuesday',
              open: '08:00',
              close: '23:59',
            },
            {
              day: 'Wednesday',
              open: '08:00',
              close: '23:59',
            },
            {
              day: 'Thursday',
              open: '08:00',
              close: '23:59',
            },
            {
              day: 'Friday',
              open: '08:00',
              close: '23:59',
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
              close: '23:59',
            },
            {
              day: 'Tuesday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Wednesday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Thursday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Friday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Saturday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Sunday',
              open: '00:00',
              close: '23:59',
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
        },
        {
          name: 'Store Street Espresso',
          type: 'Café',
          affordability: 2,
          wiFi: 4,
          hotspot: 3,
          loudness: 3,
          power: 2,
          size: 3,
          space: 1,
          busyness: 3,
          coffee: 5,
          comments: '',
          googleMaps: 'https://goo.gl/maps/Hvt9VEfoKcBTqMvm8',
          hours: [
            {
              day: 'Monday',
              open: '07:30',
              close: '18:00',
            },
            {
              day: 'Tuesday',
              open: '07:30',
              close: '18:00',
            },
            {
              day: 'Wednesday',
              open: '07:30',
              close: '18:00',
            },
            {
              day: 'Thursday',
              open: '07:30',
              close: '18:00',
            },
            {
              day: 'Friday',
              open: '07:30',
              close: '18:00',
            },
            {
              day: 'Saturday',
              open: '09:00',
              close: '17:00',
            },
            {
              day: 'Sunday',
              open: '10:00',
              close: '17:00',
            },
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/store-street-espresso-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/store-street-espresso-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/store-street-espresso-3.jpeg',
            },
          ],
        },
        {
          name: 'The Library Lounge',
          type: 'Bar, Lobby',
          affordability: 1,
          wiFi: 3,
          hotspot: 2,
          loudness: 3,
          power: 4,
          size: 3,
          space: 2,
          busyness: 3,
          coffee: 3,
          comments: '',
          googleMaps: 'https://goo.gl/maps/41eZWojHojPgKX9h9',
          hours: [
            {
              day: 'Monday',
              open: '07:00',
              close: '23:59',
            },
            {
              day: 'Tuesday',
              open: '07:00',
              close: '23:59',
            },
            {
              day: 'Wednesday',
              open: '07:00',
              close: '23:59',
            },
            {
              day: 'Thursday',
              open: '07:00',
              close: '02:00',
            },
            {
              day: 'Friday',
              open: '07:00',
              close: '02:00',
            },
            {
              day: 'Saturday',
              open: '07:00',
              close: '02:00',
            },
            {
              day: 'Sunday',
              open: '07:00',
              close: '23:59',
            }
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-library-lounge-at-the-standard-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-library-lounge-at-the-standard-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-library-lounge-at-the-standard-3.jpeg',
            }
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
          comments: "Avoid this place on weekends! It's very loud and you'll find few people working from here.",
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
    },
    {
      name: 'Tower Hamlets',
      spaces: [
        {
          name: 'WeWork (30 Churchill Place)',
          type: 'Lobby, Co-working',
          affordability: 1,
          wiFi: 4,
          hotspot: 3,
          loudness: 3,
          power: 3,
          size: 5,
          space: 3,
          busyness: 2,
          coffee: 3,
          comments: "",
          googleMaps: 'https://goo.gl/maps/P7WXSrekb7bJUQcHA',
          hours: [
            {
              day: 'Monday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Tuesday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Wednesday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Thursday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Friday',
              open: '00:00',
              close: '23:59',
            },
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/wework-30-churchill-place-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/wework-30-churchill-place-2.jpeg',
            },
          ]
        },
        {
          name: 'Whitechapel Grind',
          type: 'Café, Lobby',
          affordability: 2,
          wiFi: 2,
          hotspot: 4,
          loudness: 2,
          power: 3,
          size: 4,
          space: 3,
          busyness: 2,
          coffee: 4,
          comments: "You need to ask for the Wi-Fi password from a staff member, though your mobile hotspot is almost certainly faster.\n\nPlug sockets are hidden away behind the booths and there are a few floor sockets too.",
          googleMaps: 'https://goo.gl/maps/mZ6NXsce8RTovMNf8',
          hours: [
            {
              day: 'Monday',
              open: '08:00',
              close: '16:00',
            },
            {
              day: 'Tuesday',
              open: '08:00',
              close: '16:00',
            },
            {
              day: 'Wednesday',
              open: '08:00',
              close: '20:30',
            },
            {
              day: 'Thursday',
              open: '08:00',
              close: '20:30',
            },
            {
              day: 'Friday',
              open: '08:00',
              close: '16:00',
            },
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/whitechapel-grind-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/whitechapel-grind-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/whitechapel-grind-3.jpeg',
            },
          ]
        },
        {
          name: 'The Barre (Mulryan Centre for Dance)',
          type: 'Café, Lobby',
          affordability: 1,
          wiFi: 2,
          hotspot: 4,
          loudness: 2,
          power: 3,
          size: 4,
          space: 3,
          busyness: 1,
          coffee: 3,
          comments: '',
          googleMaps: 'https://goo.gl/maps/CetQHDvTytyMQm566',
          hours: [
            {
              day: 'Monday',
              open: '08:30',
              close: '17:00',
            },
            {
              day: 'Tuesday',
              open: '08:30',
              close: '17:00',
            },
            {
              day: 'Wednesday',
              open: '08:30',
              close: '17:00',
            },
            {
              day: 'Thursday',
              open: '08:30',
              close: '17:00',
            },
            {
              day: 'Friday',
              open: '08:30',
              close: '17:00',
            },
            {
              day: 'Saturday',
              open: '09:00',
              close: '16:00',
            },
            {
              day: 'Sunday',
              open: '09:00',
              close: '16:00',
            },
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-barre-mulryan-centre-for-dance-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-barre-mulryan-centre-for-dance-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/the-barre-mulryan-centre-for-dance-3.jpeg',
            },
          ]
        },
        {
          name: 'Canary Wharf Grind',
          type: 'Café',
          affordability: 2,
          wiFi: 4,
          hotspot: 4,
          loudness: 3,
          power: 4,
          size: 5,
          space: 3,
          busyness: 2,
          coffee: 4,
          comments: 'Enter Market Hall and climb the stairs with the "Coffee & Cocktails" neon sign.',
          googleMaps: 'https://goo.gl/maps/nmq8ekQdibiaunBM6',
          hours: [
            {
              day: 'Monday',
              open: '07:30',
              close: '16:30',
            },
            {
              day: 'Tuesday',
              open: '07:30',
              close: '16:30',
            },
            {
              day: 'Wednesday',
              open: '07:30',
              close: '16:30',
            },
            {
              day: 'Thursday',
              open: '07:30',
              close: '16:30',
            },
            {
              day: 'Friday',
              open: '07:30',
              close: '16:30',
            },
            {
              day: 'Saturday',
              open: '11:00',
              close: '17:00',
            },
            {
              day: 'Sunday',
              open: '11:00',
              close: '17:00',
            },
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/canary-wharf-grind-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/canary-wharf-grind-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/canary-wharf-grind-3.jpeg',
            },
          ]
        }
      ]
    },
    {
      name: 'Lambeth',
      spaces: [
        {
          name: 'National Theatre',
          type: 'Café, Lobby',
          affordability: 2,
          wiFi: 4,
          hotspot: 4,
          loudness: 3,
          power: 3,
          size: 5,
          space: 3,
          busyness: 2,
          coffee: 3,
          comments: 'Power sockets are mainly located beside the backrest-less window seats.',
          googleMaps: 'https://goo.gl/maps/g6A2qsyf5Nb1NbTG6',
          hours: [
            {
              day: 'Monday',
              open: '10:00',
              close: '23:00',
            },
            {
              day: 'Tuesday',
              open: '10:00',
              close: '23:00',
            },
            {
              day: 'Wednesday',
              open: '10:00',
              close: '23:00',
            },
            {
              day: 'Thursday',
              open: '10:00',
              close: '23:00',
            },
            {
              day: 'Friday',
              open: '10:00',
              close: '23:00',
            },
            {
              day: 'Saturday',
              open: '10:00',
              close: '23:00',
            },
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/national-theatre-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/national-theatre-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/national-theatre-3.jpeg',
            },
          ]
        },
        {
          name: 'WeWork (10 York Road)',
          type: 'Lobby, Co-working',
          affordability: 1,
          wiFi: 4,
          hotspot: 4,
          loudness: 3,
          power: 4,
          size: 5,
          space: 3,
          busyness: 2,
          coffee: 3,
          comments: "You don't have to be a WeWork member to use the foyer on the building's ground floor.",
          googleMaps: 'https://goo.gl/maps/vS6YYtderHGiga8C6',
          hours: [
            {
              day: 'Monday',
              open: '09:00',
              close: '18:00',
            },
            {
              day: 'Tuesday',
              open: '09:00',
              close: '18:00',
            },
            {
              day: 'Wednesday',
              open: '09:00',
              close: '18:00',
            },
            {
              day: 'Thursday',
              open: '09:00',
              close: '18:00',
            },
            {
              day: 'Friday',
              open: '09:00',
              close: '18:00',
            },
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/wework-10-york-road-1.jpeg',
            },
          ]
        }
      ]
    },
    {
      name: 'Kensington & Chelsea',
      spaces: [
        {
          name: 'The Kensington Hotel',
          type: 'Café, Lobby, Bar',
          affordability: 4,
          wiFi: 4,
          hotspot: 4,
          loudness: 3,
          power: 2,
          size: 4,
          space: 3,
          busyness: 1,
          coffee: 4,
          comments: '',
          googleMaps: 'https://goo.gl/maps/BF7G2sXCoQGYjreG9',
          hours: [
            {
              day: 'Monday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Tuesday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Wednesday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Thursday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Friday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Saturday',
              open: '00:00',
              close: '23:59',
            },
            {
              day: 'Sunday',
              open: '00:00',
              close: '23:59',
            },
          ],
          images: [
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/kensington-hotel-1.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/kensington-hotel-2.jpeg',
            },
            {
              url: 'https://tryfuton.s3.eu-west-2.amazonaws.com/kensington-hotel-3.jpeg',
            },
          ]
        },
      ]
    }
  ]
};

module.exports = seedData;