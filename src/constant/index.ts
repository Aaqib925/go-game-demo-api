export enum EmailTemplates {
  WELCOME = 'WELCOME',
  PROJECT_TEAM_MEMBER_INVITE = 'PROJECT_TEAM_MEMBER_INVITE',
}

export enum NotificationType {
  COURSE_PURCHASED = 'COURSE_PURCHASED',
}

export enum EventType {
  GENERATE_CERTIFICATE = 'GENERATE_CERTIFICATE',
}

export const AVAILABILITY_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const DEFAULT_AVAILABLITY = {
  DAYS: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  TIMESLOTS: [
    { start: '09:00', end: '14:00' },
    { start: '15:00', end: '18:00' },
  ],
};

export const QUIZ_CLEARENCE_PERCENTAGE = 60;

export * from './socket';

export const DEFAULT_PROJECT_ROLES = [
  {
    name: 'Admin',
    description: 'Admin',
    resources: [
      {
        name: 'Projects',
        permissions: [
          {
            read: true,
            write: true,
            update: true,
            delete: true,
          },
        ],
      },
      {
        name: 'Models',
        permissions: [
          {
            read: true,
            write: true,
            update: true,
            delete: true,
          },
        ],
      },
      {
        name: 'Text',
        permissions: [
          {
            read: true,
            write: true,
            update: true,
            delete: true,
          },
        ],
      },
      {
        name: 'Images',
        permissions: [
          {
            read: true,
            write: true,
            update: true,
            delete: true,
          },
        ],
      },
      {
        name: 'Videos',
        permissions: [
          {
            read: true,
            write: true,
            update: true,
            delete: true,
          },
        ],
      },
    ],
  },
  {
    name: 'Developers',
    description: 'Developers',
    resources: [
      {
        name: 'Projects',
        permissions: [
          {
            read: false,
            write: false,
            update: false,
            delete: false,
          },
        ],
      },
      {
        name: 'Models',
        permissions: [
          {
            read: true,
            write: true,
            update: true,
            delete: true,
          },
        ],
      },
      {
        name: 'Text',
        permissions: [
          {
            read: true,
            write: true,
            update: true,
            delete: true,
          },
        ],
      },
      {
        name: 'Images',
        permissions: [
          {
            read: true,
            write: true,
            update: true,
            delete: true,
          },
        ],
      },
      {
        name: 'Videos',
        permissions: [
          {
            read: true,
            write: true,
            update: true,
            delete: true,
          },
        ],
      },
    ],
  },
  {
    name: 'Viewers',
    description: 'Viewers',
    resources: [
      {
        name: 'Projects',
        permissions: [
          {
            read: true,
            write: false,
            update: false,
            delete: false,
          },
        ],
      },
      {
        name: 'Models',
        permissions: [
          {
            read: true,
            write: false,
            update: false,
            delete: false,
          },
        ],
      },
      {
        name: 'Text',
        permissions: [
          {
            read: true,
            write: false,
            update: false,
            delete: false,
          },
        ],
      },
      {
        name: 'Images',
        permissions: [
          {
            read: true,
            write: false,
            update: false,
            delete: false,
          },
        ],
      },
      {
        name: 'Videos',
        permissions: [
          {
            read: true,
            write: false,
            update: false,
            delete: false,
          },
        ],
      },
    ],
  },
];
