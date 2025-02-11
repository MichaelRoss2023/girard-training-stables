# Team info

## Members
- Akash
- Thapasya
- Balaji

## Useful links
- [Problem statement](https://www.ohack.org/hackathon/non-profits#h.3dqivcz34dey)
- [Team Communicationn channel](https://slack.com/app_redirect?channel=stardust)
- [Demo app](https://guarded-earth-06071.herokuapp.com/)
- [Video](https://youtu.be/uDrTW5eCXrk)

## Setup instructions

## 1. Create a .env file
In ./server, create a .env file that will allow NodeJS to read environment variables, add these variables.
```
MONGODB_URI=mongodb://localhost:27017
PORT=2222
EMAIL=test@something.com
PASSWORD=daklsdjad
MAIN_URL=www.ohack.org
```

## 2. Server side

Server running at
```
https://jelly-apple-efraasia.glitch.me/
```

To Start the app
```
cd server/
npm i && npm start
```
1. To create/ book a lesson
  ```
  POST https://jelly-apple-efraasia.glitch.me/lessons

  {
    "instructor": "5fbad74fd9127ba2ebe12b6e",
    "volunteers": {
        "barn crew": {
            "required": 2,
            "signedUp": []
        },
        "lesson assistant": {
            "required": 0,
            "signedUp": []
        },
        "sidewalker": {
            "required": 1,
            "signedUp": [
              "5fbbd700f26babade03cbccf"
            ]
        },
        "horse leader": {
            "required": 1,
            "signedUp": []
        }
    },
    "horses": [
        "5fbadbaa113b46b22f8fc578"
    ],
    "notes": "44 lesson",
    "startTime": "16:19",
    "endTime": "17:00"
  }
  ```

2. To create user
  ```
  POST https://jelly-apple-efraasia.glitch.me//users

  {
    "firstName": "Billy",
    "lastName": "Joel",
    "emailId": "billyJ@hm.com",
    "phoneNumber": "1 238 556 890"
  }
  ```

*Note: By default user type is volunteer have been used*

### Other API Calls

1. To get all skills
  ```
  GET https://jelly-apple-efraasia.glitch.me//skills

  {
    "username": "Celestine_Bogan",
    "password": "QEarsM5XBLi83hE"
  }
  ```

2. To add volunteer position(s)
>*Note: Already added skills based on positions*
  ```
  POST https://jelly-apple-efraasia.glitch.me//positions

  [
    {
        "name": "barn crew",
        "skills": [
            "5fba686c5b160dccee9573ce"
        ]
    },
    {
        "name": "sidewalker",
        "skills": [
            "5fba686c5b160dccee9573c7",
            "5fba686c5b160dccee9573c8"
        ]
    },
    {
        "name": "horse leader",
        "skills": [
            "5fba686c5b160dccee9573ca"
        ]
    },
    {
        "name": "lesson assistant",
        "skills": [
            "5fba686c5b160dccee9573c9",
            "5fba686c5b160dccee9573cb",
            "5fba686c5b160dccee9573cc",
            "5fba686c5b160dccee9573cd"
        ]
    }
]
  ```



## 3. Client side

- To Start the app
```
cd client/
npm i && npm start
```
- navigate to `http://localhost:4200`
```
