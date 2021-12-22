/* export default {
  currentUser: null,
  activities: [
    {
      id: "1",
      name: "JS",
      addedAt: "1.1.2021.",
      session: [
        {
          date: "16.12.2021.",
          time: "16:46",
          minutes: 20,
          isRest: false,
        },
        {
          date: "16.12.2021.",
          time: "16:46",
          minutes: 40,
          isRest: false,
        },
      ],
    },
    {
      id: "2",
      name: "BJJ",
      addedAt: "1.1.2020.",
      color: "#36495d",
      session: [
        {
          date: "16.12.2021.",
          time: "16:46",
          minutes: 90,
          isRest: false,
        },
      ],
    },
    { id: "3", name: "Vue", addedAt: "1.1.2020.", color: "#42b983", session: [
      {
        date: "16.12.2021.",
        time: "16:46",
        minutes: 20,
        isRest: false,
      },
    ],},
  ],
  session: [
    {
      sessionId: "1",
      activityId: "1",
      activityName: "JS",
      sesh: [
        { isRest: Boolean, minutes: Number, date: Date, seshId: Number },
        { isRest: Boolean, minutes: Number, date: Date, seshId: Number },
      ],
    },
  ],
}; */
  

/* export default {
  activities: [
    {
      name: 'JS',
      addedAt: '1.1.2021.',
      color: 'yellow',
      sessions: [
        {
          date: '1.1.2021.',
          startTime: '8:00',
          minutes: 20,
          isRest: false
        },
        {
          date: '1.1.2021.',
          startTime: '8:20',
          minutes: 5,
          isRest: true
        }
      ]
    }
  ]
} */

export default {
  activities: [
    {
      name: 'JS',
      addedAt: '1.1.2021.',
      color: 'gold'
    },
    {
      id: "2",
      name: "Bjj",
      addedAt: "1.1.2020.",
      color: "purple",
      /* session: [
        {
          date: "16.12.2021.",
          time: "16:46",
          minutes: 90,
          isRest: false,
        },
      ], */
    },
    {
      name: 'running',
      addedAt: '1.1.2021.',
      color: 'pink'
    },
  ],
  sessions: [
    {
      name: 'JS',
      date: '1.1.2021.',
      startTime: '8:00',
      minutes: 20,
      isRest: false
    },
    {
      name: 'JS',
      date: '1.1.2021.',
      startTime: '8:20',
      minutes: 5,
      isRest: true
    },
    {
      name: 'JS',
      date: '1.1.2021.',
      startTime: '8:25',
      minutes: 20,
      isRest: false
    },
    {
      name: 'Bjj',
      date: '1.4.2021.',
      startTime: '19:40',
      minutes: 60,
      isRest: false
    },
    {
      name: 'running',
      date: '1.4.2021.',
      startTime: '19:40',
      minutes: 30,
      isRest: false
    },
    {
      name: 'running',
      date: '1.5.2021.',
      startTime: '19:40',
      minutes: 60,
      isRest: false
    }
  ]
}